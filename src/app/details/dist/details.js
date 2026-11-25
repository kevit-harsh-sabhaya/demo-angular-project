"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Details = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var housing_service_1 = require("../housing.service");
var forms_1 = require("@angular/forms");
var Details = /** @class */ (function () {
    function Details() {
        var _this = this;
        this.route = core_1.inject(router_1.ActivatedRoute);
        this.housingService = core_1.inject(housing_service_1.HousingService);
        this.cdr = core_1.inject(core_1.ChangeDetectorRef);
        this.applyForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(''),
            lastName: new forms_1.FormControl(''),
            email: new forms_1.FormControl('')
        });
        var housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
        this.housingService.getHousingLocationById(housingLocationId).then(function (housingLocation) {
            _this.housingLocation = housingLocation;
            _this.cdr.detectChanges(); // 👈 tells Angular to re-render after async data loads
        });
    }
    Details.prototype.submitApplication = function () {
        var _a, _b, _c;
        this.housingService.submitApplication((_a = this.applyForm.value.firstName) !== null && _a !== void 0 ? _a : '', (_b = this.applyForm.value.lastName) !== null && _b !== void 0 ? _b : '', (_c = this.applyForm.value.email) !== null && _c !== void 0 ? _c : '');
    };
    Details = __decorate([
        core_1.Component({
            imports: [forms_1.ReactiveFormsModule],
            selector: 'app-details',
            styleUrl: './details.css',
            templateUrl: './details.html'
        })
    ], Details);
    return Details;
}());
exports.Details = Details;
