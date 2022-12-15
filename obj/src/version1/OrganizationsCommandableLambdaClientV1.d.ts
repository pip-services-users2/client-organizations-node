import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';
import { OrganizationV1 } from './OrganizationV1';
import { IOrganizationsClientV1 } from './IOrganizationsClientV1';
export declare class OrganizationsCommandableLambdaClientV1 extends CommandableLambdaClient implements IOrganizationsClientV1 {
    constructor(config?: any);
    getOrganizations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<OrganizationV1>>;
    getOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1>;
    getOrganizationByCode(correlationId: string, code: string): Promise<OrganizationV1>;
    generateCode(correlationId: string, orgId: string): Promise<string>;
    createOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1>;
    updateOrganization(correlationId: string, organization: OrganizationV1): Promise<OrganizationV1>;
    deleteOrganizationById(correlationId: string, orgId: string): Promise<OrganizationV1>;
}
