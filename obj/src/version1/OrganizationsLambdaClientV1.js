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
exports.OrganizationsLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class OrganizationsLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('organizations');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getOrganizations(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'invitations.get_organizations');
            try {
                return yield this.callCommand('get_organizations', correlationId, {
                    filter: filter,
                    paging: paging
                });
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
            let timing = this.instrument(correlationId, 'invitations.get_organization_by_id');
            try {
                return yield this.callCommand('get_organization_by_id', correlationId, {
                    org_id: orgId
                });
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
            let timing = this.instrument(correlationId, 'invitations.get_organization_by_code');
            try {
                return yield this.callCommand('get_organization_by_code', correlationId, {
                    code: code
                });
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
            let timing = this.instrument(correlationId, 'invitations.generate_code');
            try {
                return yield this.callCommand('generate_code', correlationId, {
                    org_id: orgId
                });
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
            let timing = this.instrument(correlationId, 'invitations.create_organization');
            try {
                return yield this.callCommand('create_organization', correlationId, {
                    organization: organization
                });
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
            let timing = this.instrument(correlationId, 'invitations.update_organization');
            try {
                return yield this.callCommand('update_organization', correlationId, {
                    organization: organization
                });
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
            let timing = this.instrument(correlationId, 'invitations.delete_organization_by_id');
            try {
                return yield this.callCommand('delete_organization_by_id', correlationId, {
                    org_id: orgId
                });
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
exports.OrganizationsLambdaClientV1 = OrganizationsLambdaClientV1;
//# sourceMappingURL=OrganizationsLambdaClientV1.js.map