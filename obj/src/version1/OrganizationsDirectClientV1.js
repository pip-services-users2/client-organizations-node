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
exports.OrganizationsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class OrganizationsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor("service-organizations", "controller", "*", "*", "*"));
    }
    getOrganizations(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'organizations.get_organizations');
            try {
                let res = yield this._controller.getOrganizations(correlationId, filter, paging);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getOrganizationById(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'organizations.get_organization_by_id');
            try {
                let res = yield this._controller.getOrganizationById(correlationId, orgId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getOrganizationByCode(correlationId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'organizations.get_organization_by_code');
            try {
                let res = yield this._controller.getOrganizationByCode(correlationId, code);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    generateCode(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'organizations.generate_code');
            try {
                let res = yield this._controller.generateCode(correlationId, orgId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    createOrganization(correlationId, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'organizations.create_organization');
            try {
                let res = yield this._controller.createOrganization(correlationId, organization);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    updateOrganization(correlationId, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'organizations.update_organization');
            try {
                let res = yield this._controller.updateOrganization(correlationId, organization);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteOrganizationById(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'organizations.delete_organization_by_id');
            try {
                let res = yield this._controller.deleteOrganizationById(correlationId, orgId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.OrganizationsDirectClientV1 = OrganizationsDirectClientV1;
//# sourceMappingURL=OrganizationsDirectClientV1.js.map