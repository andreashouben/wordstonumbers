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
var core_1 = require('@angular/core');
var _ = require('lodash');
var diff0 = 97;
var diff1 = 96;
var modes = {
    A0: 97,
    A1: 96,
    A26: 123,
    A25: 122
};
var AppComponent = (function () {
    function AppComponent() {
        this.word = '';
        this.mode = 'A1';
        this.wordAsArray = [];
        this.wordsAsNumbers = [];
        this.add = '';
        this.sub = '';
        this.mul = '';
        this.div = '';
    }
    AppComponent.prototype.onKey = function () {
        var _this = this;
        this.word = this.word.toLowerCase();
        this.wordAsArray = this.word.split('');
        this.wordsAsNumbers =
            _.map(this.wordAsArray, function (char) {
                return _this.calcNumber(char, _this.mode);
            });
        if (this.word.length > 0) {
            this.add = _.join(this.wordsAsNumbers, ' + ') +
                (" = " + _.sum(this.wordsAsNumbers) + this.iteratedCrossfoot(this.wordsAsNumbers));
            this.sub = _.join(this.wordsAsNumbers, ' - ') + (" = " + this.subtract(this.wordsAsNumbers));
            this.mul = _.join(this.wordsAsNumbers, ' * ') + (" = " + this.multiply(this.wordsAsNumbers));
            this.div = _.join(this.wordsAsNumbers, ' / ') + (" = " + this.divide(this.wordsAsNumbers));
        }
    };
    ;
    AppComponent.prototype.multiply = function (collection) {
        return _.reduce(collection, function (sum, n) {
            return sum * n;
        }, 1);
    };
    ;
    AppComponent.prototype.subtract = function (collection) {
        return _.reduce(_.tail(collection), function (sum, n) {
            return sum - n;
        }, _.head(collection));
    };
    AppComponent.prototype.divide = function (collection) {
        return _.reduce(_.tail(collection), function (sum, n) {
            return sum / n;
        }, _.head(collection));
    };
    AppComponent.prototype.iteratedCrossfoot = function (collection) {
        var sum = _.sum(collection);
        var crossfoots = [];
        if (sum < 10) {
            return '';
        }
        else {
            var i = 0;
            while (sum > 10) {
                i++;
                var digits = sum.toString().split('').map(Number);
                sum = _.sum(digits);
                var crossfoot = _.join(digits, ' + ') + (" = " + sum);
                crossfoots.push(crossfoot);
            }
            return i === 1 ? " (QS: " + crossfoots + ")" : " (Iter. QS: " + _.join(crossfoots, '; ') + ")";
        }
    };
    AppComponent.prototype.calcNumber = function (char, mode) {
        if (Number.isSafeInteger(parseInt(char))) {
            return parseInt(char);
        }
        var num;
        var min;
        var max;
        if (['A0', 'A1'].includes(mode)) {
            num = char.charCodeAt(0) - modes[mode];
        }
        else {
            num = -(char.charCodeAt(0) - modes[mode]);
        }
        if (['A0', 'A25'].includes(mode)) {
            min = 0;
            max = 26;
        }
        else {
            min = 1;
            max = 27;
        }
        return _.inRange(num, min, max) ? num : 0;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: 'app.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map