import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IOrganizationsClientV1 } from './IOrganizationsClientV1';
//import { IOrganizationsController } from 'service-organizations-node';
import { OrganizationV1 } from './OrganizationV1';

export class OrganizationsDirectClientV1 extends DirectClient<any> implements IOrganizationsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-organizations", "controller", "*", "*", "*"))
    }

    public async getOrganizations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<OrganizationV1>> {
        let timing = this.instrument(correlationId, 'organizations.get_organizations');

        try {
            return await this._controller.getOrganizations(correlationId, filter, paging);
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
            return await this._controller.getOrganizationById(correlationId, orgId);
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
            return await this._controller.getOrganizationByCode(correlationId, code);
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
            return await this._controller.generateCode(correlationId, orgId);
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
            return await this._controller.createOrganization(correlationId, organization);
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
            return await this._controller.updateOrganization(correlationId, organization);
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
            return await this._controller.deleteOrganizationById(correlationId, orgId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}