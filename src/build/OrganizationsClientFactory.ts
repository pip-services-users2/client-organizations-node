import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { OrganizationsNullClientV1 } from '../version1/OrganizationsNullClientV1';
import { OrganizationsMemoryClientV1 } from '../version1/OrganizationsMemoryClientV1';
import { OrganizationsDirectClientV1 } from '../version1/OrganizationsDirectClientV1';
import { OrganizationsCommandableHttpClientV1 } from '../version1/OrganizationsCommandableHttpClientV1';
import { OrganizationsCommandableLambdaClientV1 } from '../version1/OrganizationsCommandableLambdaClientV1';
import { OrganizationsCommandableGrpcClientV1 } from '../version1/OrganizationsCommandableGrpcClientV1';
import { OrganizationsGrpcClientV1 } from '../version1/OrganizationsGrpcClientV1';

export class OrganizationsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-organizations', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-organizations', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('service-organizations', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-organizations', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-organizations', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-organizations', 'client', 'lambda', 'default', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-organizations', 'client', 'commandable-grpc', 'default', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('service-organizations', 'client', 'grpc', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(OrganizationsClientFactory.NullClientV1Descriptor, OrganizationsNullClientV1);
		this.registerAsType(OrganizationsClientFactory.MemoryClientV1Descriptor, OrganizationsMemoryClientV1);
		this.registerAsType(OrganizationsClientFactory.DirectClientV1Descriptor, OrganizationsDirectClientV1);
		this.registerAsType(OrganizationsClientFactory.HttpClientV1Descriptor, OrganizationsCommandableHttpClientV1);
		this.registerAsType(OrganizationsClientFactory.LambdaClientV1Descriptor, OrganizationsCommandableLambdaClientV1);
		this.registerAsType(OrganizationsClientFactory.CommandableGrpcClientV1Descriptor, OrganizationsCommandableGrpcClientV1);
		this.registerAsType(OrganizationsClientFactory.GrpcClientV1Descriptor, OrganizationsGrpcClientV1);
	}
	
}
