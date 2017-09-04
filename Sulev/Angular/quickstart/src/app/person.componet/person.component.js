"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var person_1 = require("./../person");
var PersonComponent = (function () {
    function PersonComponent(location, route) {
        var _this = this;
        this.location = location;
        this.route = route;
        this.route.paramMap.subscribe(function (params) {
            _this.selectedPerson = person_1.PEOPLE.find(function (value) { return value.id === parseInt(params['id'], 0); });
        });
    }
    PersonComponent.prototype.onSelect = function (person) {
        this.selectedPerson = person;
    };
    PersonComponent.prototype.goBack = function () {
        this.location.back;
    };
    return PersonComponent;
}());
PersonComponent = __decorate([
    core_1.Component({
        selector: 'my-person',
        templateUrl: './person.component.html',
    }),
    __metadata("design:paramtypes", [common_1.Location, router_1.ActivatedRoute])
], PersonComponent);
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map