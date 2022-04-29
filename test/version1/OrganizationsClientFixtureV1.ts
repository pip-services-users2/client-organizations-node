const assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-nodex';

import { OrganizationV1 } from '../../src/version1/OrganizationV1';
import { IOrganizationsClientV1 } from '../../src/version1/IOrganizationsClientV1';

let ORGANIZATION1: OrganizationV1 = {
    id: '1',
    code: '111',
    name: 'Organization #1',
    description: 'Test organization #1',
    create_time: new Date(),
    creator_id: '123',
    active: true
};
let ORGANIZATION2: OrganizationV1 = {
    id: '2',
    code: null,
    name: 'Organization #2',
    description: 'Test organization #2',
    create_time: new Date(),
    creator_id: '123',
    active: true
};

export class OrganizationsClientFixtureV1 {
    private _client: IOrganizationsClientV1;
    
    constructor(client: IOrganizationsClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let organization1, organization2: OrganizationV1;

        // Create one organization
        organization1 = await this._client.createOrganization(null, ORGANIZATION1);

        assert.isObject(organization1);
        assert.equal(organization1.name, ORGANIZATION1.name);
        assert.equal(organization1.description, ORGANIZATION1.description);
        assert.isNotNull(organization1.code);

        // Create another organization
        organization2 = await this._client.createOrganization(null, ORGANIZATION2);

        assert.isObject(organization2);
        assert.equal(organization2.name, ORGANIZATION2.name);
        assert.equal(organization2.description, ORGANIZATION2.description);
        assert.isNotNull(organization2.code);

        // Get all organizations
        let page = await this._client.getOrganizations(null, null, new PagingParams(0, 5, false));

        assert.isObject(page);
        assert.isTrue(page.data.length >= 2);

        // Get organization by code
        let organization = await this._client.getOrganizationByCode(null, organization1.code);

        assert.isNotNull(organization);
        assert.equal(organization.id, organization1.id);

        // Generate code
        let code = await this._client.generateCode(null, organization1.id);

        assert.isNotNull(code);

        // Update the organization
        organization1.description = 'Updated Content 1';
        organization1 = await this._client.updateOrganization(null, organization1);

        assert.isObject(organization1);
        assert.equal(organization1.description, 'Updated Content 1');
        assert.equal(organization1.name, ORGANIZATION1.name);

        // Delete organization
        organization = await this._client.deleteOrganizationById(null, organization1.id);

        // Try to get delete organization
        await this._client.getOrganizationById(null, organization1.id);

        assert.isNotNull(organization);
        assert.isTrue(organization.deleted);
    }
}
