import { Descriptor } from 'pip-services3-commons-nodex';

import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { OrganizationsMemoryPersistence } from 'service-organizations-node';
import { OrganizationsController } from 'service-organizations-node';
import { OrganizationsDirectClientV1 } from '../../src/version1/OrganizationsDirectClientV1';
import { OrganizationsClientFixtureV1 } from './OrganizationsClientFixtureV1';

suite('OrganizationsDirectClientV1', ()=> {
    let client: OrganizationsDirectClientV1;
    let fixture: OrganizationsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new OrganizationsMemoryPersistence();
        let controller = new OrganizationsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-organizations', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-organizations', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new OrganizationsDirectClientV1();
        client.setReferences(references);

        fixture = new OrganizationsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
