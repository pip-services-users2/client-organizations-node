import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { IdGenerator } from 'pip-services3-commons-nodex';

import { IOrganizationsClientV1 } from './IOrganizationsClientV1';
import { OrganizationV1 } from './OrganizationV1';

export class OrganizationsMemoryClientV1 implements IOrganizationsClientV1 {
    private _organizations: OrganizationV1[] = [];
            
    private matchString(value: string, search: string): boolean {
        if (value == null && search == null)
            return true;
        if (value == null || search == null)
            return false;
        return value.toLowerCase().indexOf(search) >= 0;
    }

    private matchSearch(item: OrganizationV1, search: string): boolean {
        search = search.toLowerCase();
        if (this.matchString(item.id, search))
            return true;
        if (this.matchString(item.name, search))
            return true;
        return false;
    }

    private contains(array1, array2) {
        if (array1 == null || array2 == null) return false;
        
        for (let i1 = 0; i1 < array1.length; i1++) {
            for (let i2 = 0; i2 < array2.length; i2++)
                if (array1[i1] == array2[i1]) 
                    return true;
        }
        
        return false;
    }
    
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        
        let search = filter.getAsNullableString('search');
        let id = filter.getAsNullableString('id');
        let code = filter.getAsNullableString('code');
        let active = filter.getAsNullableBoolean('active');
        let deleted = filter.getAsBooleanWithDefault('deleted', false);
                
        return (item) => {
            if (id && item.id != id) 
                return false;
            if (code && item.code != code) 
                return false;
            if (active && item.active != active) 
                return false;
            if (!deleted && item.deleted) 
                return false;
            if (search && !this.matchSearch(item, search)) 
                return false;
            return true; 
        };
    }

    public async getOrganizations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<OrganizationV1>> {
        let organizations = this._organizations.filter(this.composeFilter(filter));
        return new DataPage<OrganizationV1>(organizations, organizations.length);
    }

    public async getOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1> {
        let organization = this._organizations.find((d) => d.id == orgId);
        return organization;
    }

    public async getOrganizationByCode(correlationId: string, code: string): Promise<OrganizationV1> {
        let organization = this._organizations.find((d) => d.code == code);
        return organization;
    }

    public async generateCode(correlationId: string, orgId: string): Promise<string> {
        return orgId;
    }

    public async createOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1> {

        organization.id = organization.id || IdGenerator.nextLong();
        organization.create_time = new Date();
        organization.active = organization.active != null || true;

        this._organizations.push(organization);
        return organization;
    }

    public async updateOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1> {

        this._organizations = this._organizations.filter((d) => d.id != organization.id);
        this._organizations.push(organization);
        
        return organization;
    }

    public async deleteOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1> {

        let organization = this._organizations.find((d) => d.id == orgId);
        if (organization) {
            organization.deleted = true;
        }
        
        return organization;
    }

}