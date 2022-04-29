import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { OrganizationsMemoryPersistence } from 'service-organizations-node';
import { OrganizationsController } from 'service-organizations-node';
import { OrganizationsHttpServiceV1 } from 'service-organizations-node';
import { OrganizationsHttpClientV1 } from '../../src/version1/OrganizationsHttpClientV1';
import { OrganizationsClientFixtureV1 } from './OrganizationsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('OrganizationsRestClientV1', ()=> {
    let service: OrganizationsHttpServiceV1;
    let client: OrganizationsHttpClientV1;
    let fixture: OrganizationsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new OrganizationsMemoryPersistence();
        let controller = new OrganizationsController();

        service = new OrganizationsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-organizations', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-organizations', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-organizations', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new OrganizationsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new OrganizationsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
