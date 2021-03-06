"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const OrganizationsNullClientV1_1 = require("../version1/OrganizationsNullClientV1");
const OrganizationsMemoryClientV1_1 = require("../version1/OrganizationsMemoryClientV1");
const OrganizationsDirectClientV1_1 = require("../version1/OrganizationsDirectClientV1");
const OrganizationsHttpClientV1_1 = require("../version1/OrganizationsHttpClientV1");
const OrganizationsLambdaClientV1_1 = require("../version1/OrganizationsLambdaClientV1");
const OrganizationsCommandableGrpcClientV1_1 = require("../version1/OrganizationsCommandableGrpcClientV1");
const OrganizationsGrpcClientV1_1 = require("../version1/OrganizationsGrpcClientV1");
class OrganizationsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(OrganizationsClientFactory.NullClientV1Descriptor, OrganizationsNullClientV1_1.OrganizationsNullClientV1);
        this.registerAsType(OrganizationsClientFactory.MemoryClientV1Descriptor, OrganizationsMemoryClientV1_1.OrganizationsMemoryClientV1);
        this.registerAsType(OrganizationsClientFactory.DirectClientV1Descriptor, OrganizationsDirectClientV1_1.OrganizationsDirectClientV1);
        this.registerAsType(OrganizationsClientFactory.HttpClientV1Descriptor, OrganizationsHttpClientV1_1.OrganizationsHttpClientV1);
        this.registerAsType(OrganizationsClientFactory.LambdaClientV1Descriptor, OrganizationsLambdaClientV1_1.OrganizationsLambdaClientV1);
        this.registerAsType(OrganizationsClientFactory.CommandableGrpcClientV1Descriptor, OrganizationsCommandableGrpcClientV1_1.OrganizationsCommandableGrpcClientV1);
        this.registerAsType(OrganizationsClientFactory.GrpcClientV1Descriptor, OrganizationsGrpcClientV1_1.OrganizationsGrpcClientV1);
    }
}
exports.OrganizationsClientFactory = OrganizationsClientFactory;
OrganizationsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'factory', 'default', 'default', '1.0');
OrganizationsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'null', 'default', '1.0');
OrganizationsClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'memory', 'default', '1.0');
OrganizationsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'direct', 'default', '1.0');
OrganizationsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'http', 'default', '1.0');
OrganizationsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'lambda', 'default', '1.0');
OrganizationsClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'commandable-grpc', 'default', '1.0');
OrganizationsClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-organizations', 'client', 'grpc', 'default', '1.0');
//# sourceMappingURL=OrganizationsClientFactory.js.map