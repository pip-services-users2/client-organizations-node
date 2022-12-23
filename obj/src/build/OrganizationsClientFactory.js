"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const OrganizationsNullClientV1_1 = require("../version1/OrganizationsNullClientV1");
const OrganizationsMockClientV1_1 = require("../version1/OrganizationsMockClientV1");
const OrganizationsDirectClientV1_1 = require("../version1/OrganizationsDirectClientV1");
const OrganizationsCommandableHttpClientV1_1 = require("../version1/OrganizationsCommandableHttpClientV1");
const OrganizationsCommandableLambdaClientV1_1 = require("../version1/OrganizationsCommandableLambdaClientV1");
const OrganizationsCommandableGrpcClientV1_1 = require("../version1/OrganizationsCommandableGrpcClientV1");
const OrganizationsGrpcClientV1_1 = require("../version1/OrganizationsGrpcClientV1");
class OrganizationsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(OrganizationsClientFactory.NullClientV1Descriptor, OrganizationsNullClientV1_1.OrganizationsNullClientV1);
        this.registerAsType(OrganizationsClientFactory.MockClientV1Descriptor, OrganizationsMockClientV1_1.OrganizationsMockClientV1);
        this.registerAsType(OrganizationsClientFactory.DirectClientV1Descriptor, OrganizationsDirectClientV1_1.OrganizationsDirectClientV1);
        this.registerAsType(OrganizationsClientFactory.HttpClientV1Descriptor, OrganizationsCommandableHttpClientV1_1.OrganizationsCommandableHttpClientV1);
        this.registerAsType(OrganizationsClientFactory.LambdaClientV1Descriptor, OrganizationsCommandableLambdaClientV1_1.OrganizationsCommandableLambdaClientV1);
        this.registerAsType(OrganizationsClientFactory.CommandableGrpcClientV1Descriptor, OrganizationsCommandableGrpcClientV1_1.OrganizationsCommandableGrpcClientV1);
        this.registerAsType(OrganizationsClientFactory.GrpcClientV1Descriptor, OrganizationsGrpcClientV1_1.OrganizationsGrpcClientV1);
    }
}
exports.OrganizationsClientFactory = OrganizationsClientFactory;
OrganizationsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'factory', 'default', 'default', '1.0');
OrganizationsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'null', 'default', '1.0');
OrganizationsClientFactory.MockClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'mock', 'default', '1.0');
OrganizationsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'direct', 'default', '1.0');
OrganizationsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'commandable-http', 'default', '1.0');
OrganizationsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'commandable-lambda', 'default', '1.0');
OrganizationsClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'commandable-grpc', 'default', '1.0');
OrganizationsClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'grpc', 'default', '1.0');
//# sourceMappingURL=OrganizationsClientFactory.js.map