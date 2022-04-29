"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsGrpcClientV1 = void 0;
const services = require('../../../src/protos/organizations_v1_grpc_pb');
const messages = require('../../../src/protos/organizations_v1_pb');
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const OrganizationsGrpcConverterV1_1 = require("./OrganizationsGrpcConverterV1");
class OrganizationsGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor() {
        super(services.OrganizationsClient);
    }
    getOrganizations(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.OrganizationPageRequest();
            OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.setMap(request.getFilterMap(), filter);
            request.setPaging(OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.fromPagingParams(paging));
            let timing = this.instrument(correlationId, 'organizations.get_organizations');
            try {
                let response = yield this.call('get_organizations', correlationId, request);
                if (response.error != null)
                    throw OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toError(response.error);
                return response ? OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toOrganizationPage(response.getPage()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getOrganizationById(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.OrgIdRequest();
            request.setOrgId(orgId);
            let timing = this.instrument(correlationId, 'organizations.get_organization_by_id');
            try {
                let response = yield this.call('get_organization_by_id', correlationId, request);
                if (response.error != null)
                    throw OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toError(response.error);
                return response ? OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toOrganization(response.getOrganization()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getOrganizationByCode(correlationId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.OrganizationCodeRequest();
            request.setCode(code);
            let timing = this.instrument(correlationId, 'organizations.get_organization_by_code');
            try {
                let response = yield this.call('get_organization_by_code', correlationId, request);
                if (response.error != null)
                    throw OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toError(response.error);
                return response ? OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toOrganization(response.getOrganization()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    generateCode(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.OrgIdRequest();
            request.setOrgId(orgId);
            let timing = this.instrument(correlationId, 'organizations.generate_code');
            try {
                let response = yield this.call('generate_code', correlationId, request);
                if (response.error != null)
                    throw OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toError(response.error);
                return response ? response.getCode() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createOrganization(correlationId, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            let organizationObj = OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.fromOrganization(organization);
            let request = new messages.OrganizationObjectRequest();
            request.setOrganization(organizationObj);
            let timing = this.instrument(correlationId, 'organizations.create_organization');
            try {
                let response = yield this.call('create_organization', correlationId, request);
                if (response.error != null)
                    throw OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toError(response.error);
                return response ? OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toOrganization(response.getOrganization()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateOrganization(correlationId, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            let organizationObj = OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.fromOrganization(organization);
            let request = new messages.OrganizationObjectRequest();
            request.setOrganization(organizationObj);
            let timing = this.instrument(correlationId, 'organizations.update_organization');
            try {
                let response = yield this.call('update_organization', correlationId, request);
                if (response.error != null)
                    throw OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toError(response.error);
                return response ? OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toOrganization(response.getOrganization()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteOrganizationById(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.OrgIdRequest();
            request.setOrgId(orgId);
            let timing = this.instrument(correlationId, 'organizations.delete_organization_by_id');
            try {
                let response = yield this.call('delete_organization_by_id', correlationId, request);
                if (response.error != null)
                    throw OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toError(response.error);
                return response ? OrganizationsGrpcConverterV1_1.OrganizationsGrpcConverterV1.toOrganization(response.getOrganization()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.OrganizationsGrpcClientV1 = OrganizationsGrpcClientV1;
//# sourceMappingURL=OrganizationsGrpcClientV1.js.map