const services = require('../../../src/protos/organizations_v1_grpc_pb');
const messages = require('../../../src/protos/organizations_v1_pb');

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IOrganizationsClientV1 } from './IOrganizationsClientV1';
import { OrganizationV1 } from './OrganizationV1';
import { OrganizationsGrpcConverterV1 } from './OrganizationsGrpcConverterV1';

export class OrganizationsGrpcClientV1 extends GrpcClient implements IOrganizationsClientV1 {
        
    public constructor() {
        super(services.OrganizationsClient);
    }

    public async getOrganizations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<OrganizationV1>> {

        let request = new messages.OrganizationPageRequest();

        OrganizationsGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(OrganizationsGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'organizations.get_organizations');

        try {
            let response = await this.call<any>('get_organizations', correlationId, request);

            if (response.error != null)
                throw OrganizationsGrpcConverterV1.toError(response.error);

            return response ? OrganizationsGrpcConverterV1.toOrganizationPage(response.getPage()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1> {

        let request = new messages.OrgIdRequest();
        request.setOrgId(orgId);

        let timing = this.instrument(correlationId, 'organizations.get_organization_by_id');

        try {
            let response = await this.call<any>('get_organization_by_id', correlationId, request);

            if (response.error != null)
                throw OrganizationsGrpcConverterV1.toError(response.error);

            return response ? OrganizationsGrpcConverterV1.toOrganization(response.getOrganization()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }     
    }

    public async getOrganizationByCode(correlationId: string, code: string): Promise<OrganizationV1> {

        let request = new messages.OrganizationCodeRequest();
        request.setCode(code);

        let timing = this.instrument(correlationId, 'organizations.get_organization_by_code');

        try {
            let response = await this.call<any>('get_organization_by_code', correlationId, request);

            if (response.error != null)
                throw OrganizationsGrpcConverterV1.toError(response.error);

            return response ? OrganizationsGrpcConverterV1.toOrganization(response.getOrganization()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async generateCode(correlationId: string, orgId: string): Promise<string> {

        let request = new messages.OrgIdRequest();
        request.setOrgId(orgId);

        let timing = this.instrument(correlationId, 'organizations.generate_code');

        try {
            let response = await this.call<any>('generate_code', correlationId, request);

            if (response.error != null)
                throw OrganizationsGrpcConverterV1.toError(response.error);

            return response ? response.getCode() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1> {

        let organizationObj = OrganizationsGrpcConverterV1.fromOrganization(organization);

        let request = new messages.OrganizationObjectRequest();
        request.setOrganization(organizationObj);

        let timing = this.instrument(correlationId, 'organizations.create_organization');

        try {
            let response = await this.call<any>('create_organization', correlationId, request);

            if (response.error != null)
                throw OrganizationsGrpcConverterV1.toError(response.error);

            return response ? OrganizationsGrpcConverterV1.toOrganization(response.getOrganization()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1> {

        let organizationObj = OrganizationsGrpcConverterV1.fromOrganization(organization);

        let request = new messages.OrganizationObjectRequest();
        request.setOrganization(organizationObj);
    
        let timing = this.instrument(correlationId, 'organizations.update_organization');

        try {
            let response = await this.call<any>('update_organization', correlationId, request);

            if (response.error != null)
                throw OrganizationsGrpcConverterV1.toError(response.error);

            return response ? OrganizationsGrpcConverterV1.toOrganization(response.getOrganization()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1> {

        let request = new messages.OrgIdRequest();
        request.setOrgId(orgId);

        let timing = this.instrument(correlationId, 'organizations.delete_organization_by_id');

        try {
            let response = await this.call<any>('delete_organization_by_id', correlationId, request);

            if (response.error != null)
                throw OrganizationsGrpcConverterV1.toError(response.error);

            return response ? OrganizationsGrpcConverterV1.toOrganization(response.getOrganization()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
  
}
