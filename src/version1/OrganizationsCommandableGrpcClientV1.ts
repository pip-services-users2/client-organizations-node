import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableGrpcClient } from 'pip-services3-grpc-nodex';

import { OrganizationV1 } from './OrganizationV1';
import { IOrganizationsClientV1 } from './IOrganizationsClientV1';

export class OrganizationsCommandableGrpcClientV1 extends CommandableGrpcClient implements IOrganizationsClientV1 {       
    
    constructor(config?: any) {
        super('v1/organizations');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public async getOrganizations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<OrganizationV1>> {
        let timing = this.instrument(correlationId, 'organizations.get_organizations');

        try {
            return await this.callCommand(
                'get_organizations',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1> {
        let timing = this.instrument(correlationId, 'organizations.get_organization_by_id');

        try {
            return await this.callCommand(
                'get_organization_by_id',
                correlationId,
                {
                    org_id: orgId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getOrganizationByCode(correlationId: string, code: string): Promise<OrganizationV1> {
        let timing = this.instrument(correlationId, 'organizations.get_organization_by_code');

        try {
            return await this.callCommand(
                'get_organization_by_code',
                correlationId,
                {
                    code: code
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
    public async generateCode(correlationId: string, orgId: string): Promise<string> {
        let timing = this.instrument(correlationId, 'organizations.generate_code');

        try {
            return await this.callCommand(
                'generate_code',
                correlationId,
                {
                    org_id: orgId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }  
    }

    public async createOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1> {
        let timing = this.instrument(correlationId, 'organizations.create_organization');

        try {
            return await this.callCommand(
                'create_organization',
                correlationId,
                {
                    organization: organization
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }  
    }

    public async updateOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1> {
        let timing = this.instrument(correlationId, 'organizations.update_organization');

        try {
            return await this.callCommand(
                'update_organization',
                correlationId,
                {
                    organization: organization
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1> {
        let timing = this.instrument(correlationId, 'organizations.delete_organization_by_id');

        try {
            return await this.callCommand(
                'delete_organization_by_id',
                correlationId,
                {
                    org_id: orgId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
}
