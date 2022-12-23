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
exports.OrganizationsMockClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
class OrganizationsMockClientV1 {
    constructor() {
        this._organizations = [];
    }
    matchString(value, search) {
        if (value == null && search == null)
            return true;
        if (value == null || search == null)
            return false;
        return value.toLowerCase().indexOf(search) >= 0;
    }
    matchSearch(item, search) {
        search = search.toLowerCase();
        if (this.matchString(item.id, search))
            return true;
        if (this.matchString(item.name, search))
            return true;
        return false;
    }
    contains(array1, array2) {
        if (array1 == null || array2 == null)
            return false;
        for (let i1 = 0; i1 < array1.length; i1++) {
            for (let i2 = 0; i2 < array2.length; i2++)
                if (array1[i1] == array2[i1])
                    return true;
        }
        return false;
    }
    composeFilter(filter) {
        filter = filter || new pip_services3_commons_nodex_1.FilterParams();
        let search = filter.getAsNullableString('search');
        let id = filter.getAsNullableString('id');
        let code = filter.getAsNullableString('code');
        let active = filter.getAsNullableBoolean('active');
        let deleted = filter.getAsBooleanWithDefault('deleted', false);
        return (item) => {
            if (id && item.id != id)
                return false;
            if (code && item.code != code)
                return false;
            if (active && item.active != active)
                return false;
            if (!deleted && item.deleted)
                return false;
            if (search && !this.matchSearch(item, search))
                return false;
            return true;
        };
    }
    getOrganizations(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let organizations = this._organizations.filter(this.composeFilter(filter));
            return new pip_services3_commons_nodex_2.DataPage(organizations, organizations.length);
        });
    }
    getOrganizationById(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            let organization = this._organizations.find((d) => d.id == orgId);
            return organization;
        });
    }
    getOrganizationByCode(correlationId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let organization = this._organizations.find((d) => d.code == code);
            return organization;
        });
    }
    generateCode(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            return orgId;
        });
    }
    createOrganization(correlationId, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            organization.id = organization.id || pip_services3_commons_nodex_3.IdGenerator.nextLong();
            organization.code = organization.code || "org_id:" + pip_services3_commons_nodex_3.IdGenerator.nextShort();
            organization.create_time = new Date();
            organization.active = organization.active != null || true;
            this._organizations.push(organization);
            return organization;
        });
    }
    updateOrganization(correlationId, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            this._organizations = this._organizations.filter((d) => d.id != organization.id);
            this._organizations.push(organization);
            return organization;
        });
    }
    deleteOrganizationById(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            let organization = this._organizations.find((d) => d.id == orgId);
            if (organization) {
                organization.deleted = true;
            }
            return organization;
        });
    }
}
exports.OrganizationsMockClientV1 = OrganizationsMockClientV1;
//# sourceMappingURL=OrganizationsMockClientV1.js.map