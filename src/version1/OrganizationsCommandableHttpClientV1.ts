import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { OrganizationV1 } from './OrganizationV1';
import { IOrganizationsClientV1 } from './IOrganizationsClientV1';

export class OrganizationsCommandableHttpClientV1 extends CommandableHttpClient implements IOrganizationsClientV1 {       
    
    constructor(config?: any) {
        super('v1/organizations');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public async getOrganizations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<OrganizationV1>> {
        return await this.callCommand(
            'get_organizations',
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
    }

    public async getOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1> {
        return await this.callCommand(
            'get_organization_by_id',
            correlationId,
            {
                org_id: orgId
            }
        );
    }

    public async getOrganizationByCode(correlationId: string, code: string): Promise<OrganizationV1> {
        return await this.callCommand(
            'get_organization_by_code',
            correlationId,
            {
                code: code
            }
        );  
    }
    
    public async generateCode(correlationId: string, orgId: string): Promise<string> {
        return await this.callCommand(
            'generate_code',
            correlationId,
            {
                org_id: orgId
            }
        );
    }

    public async createOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1> {
        return await this.callCommand(
            'create_organization',
            correlationId,
            {
                organization: organization
            }
        );
    }

    public async updateOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1> {
        return await this.callCommand(
            'update_organization',
            correlationId,
            {
                organization: organization
            }
        );
    }

    public async deleteOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1> {
        return await this.callCommand(
            'delete_organization_by_id',
            correlationId,
            {
                org_id: orgId
            }
        );
    }
    
}
