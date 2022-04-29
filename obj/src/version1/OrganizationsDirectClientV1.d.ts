import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { IOrganizationsClientV1 } from './IOrganizationsClientV1';
import { OrganizationV1 } from './OrganizationV1';
export declare class OrganizationsDirectClientV1 extends DirectClient<any> implements IOrganizationsClientV1 {
    constructor();
    getOrganizations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<OrganizationV1>>;
    getOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1>;
    getOrganizationByCode(correlationId: string, code: string): Promise<OrganizationV1>;
    generateCode(correlationId: string, orgId: string): Promise<string>;
    createOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1>;
    updateOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1>;
    deleteOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1>;
}
