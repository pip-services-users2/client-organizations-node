import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { IOrganizationsClientV1 } from './IOrganizationsClientV1';
import { OrganizationV1 } from './OrganizationV1';

export class OrganizationsNullClientV1 implements IOrganizationsClientV1 {

    public async getOrganizationById(correlationId: string, org_id: string): Promise<OrganizationV1> {
        return null;
    }

    public async getOrganizationByCode(correlationId: string, code: string): Promise<OrganizationV1> {
        return null;
    }
    
    public async generateCode(correlationId: string, org_id: string): Promise<string> {
        return null;
    }
            
    public async getOrganizations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<OrganizationV1>> {
        return new DataPage<OrganizationV1>([], 0);
    }

    public async createOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1> {
        return organization;
    }

    public async updateOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1> {
        return organization;
    }

    public async deleteOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1> {
        return null;
    }
}