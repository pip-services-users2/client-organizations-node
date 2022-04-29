import { OrganizationsMemoryClientV1 } from '../../src/version1/OrganizationsMemoryClientV1';
import { OrganizationsClientFixtureV1 } from './OrganizationsClientFixtureV1';

suite('OrganizationsMemoryClientV1', ()=> {
    let client: OrganizationsMemoryClientV1;
    let fixture: OrganizationsClientFixtureV1;

    setup(() => {
        client = new OrganizationsMemoryClientV1();

        fixture = new OrganizationsClientFixtureV1(client);
    });
    
    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
