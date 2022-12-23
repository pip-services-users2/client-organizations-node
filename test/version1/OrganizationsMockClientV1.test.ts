import { OrganizationsMockClientV1 } from '../../src/version1/OrganizationsMockClientV1';
import { OrganizationsClientFixtureV1 } from './OrganizationsClientFixtureV1';

suite('OrganizationsMockClientV1', ()=> {
    let client: OrganizationsMockClientV1;
    let fixture: OrganizationsClientFixtureV1;

    setup(() => {
        client = new OrganizationsMockClientV1();

        fixture = new OrganizationsClientFixtureV1(client);
    });
    
    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
