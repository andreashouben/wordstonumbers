import {Component} from '@angular/core';
import * as _ from 'lodash';

const diff0 = 97;
const diff1 = 96;
const modes = {
    A0: 97,
    A1: 96,
    A26: 123,
    A25: 122
};

@Component({
    selector: 'my-app',
    //moduleId: module.id,
    templateUrl: '/app/app.template.html'
})
export class AppComponent {
    word = '';
    mode = 'A1';
    wordAsArray = [];
    wordsAsNumbers = [];
    add = '';
    sub = '';
    mul = '';
    div = '';

    onKey() {
        this.word = this.word.toLowerCase();
        this.wordAsArray = this.word.split('');
        this.wordsAsNumbers =
            _.map(this.wordAsArray, (char) => {
                return this.calcNumber(char, this.mode);
            });
        if (this.word.length > 0) {
            this.add = _.join(this.wordsAsNumbers, ' + ') +
                ` = ${_.sum(this.wordsAsNumbers)}${this.iteratedCrossfoot(this.wordsAsNumbers)}`;
            this.sub = _.join(this.wordsAsNumbers, ' - ') + ` = ${this.subtract(this.wordsAsNumbers)}`;
            this.mul = _.join(this.wordsAsNumbers, ' * ') + ` = ${this.multiply(this.wordsAsNumbers)}`;
            this.div = _.join(this.wordsAsNumbers, ' / ') + ` = ${this.divide(this.wordsAsNumbers)}`;
        }
    };

    multiply(collection: number[]) {
        return _.reduce(collection, (sum, n) => {
            return sum * n;
        }, 1);
    };

    subtract(collection: number[]) {
        return _.reduce(_.tail(collection), (sum, n) => {
            return sum - n;
        }, _.head(collection));
    }

    divide(collection: number[]) {
        return _.reduce(_.tail(collection), (sum, n) => {
            return sum / n;
        }, _.head(collection));
    }

    iteratedCrossfoot(collection: number[]) {
        let sum = _.sum(collection);
        let crossfoots = [];
        if (sum < 10) {
            return '';
        } else {
            let i = 0;
            while (sum > 10) {
                i++;
                let digits = sum.toString().split('').map(Number);
                sum = _.sum(digits);
                let crossfoot = _.join(digits, ' + ') + ` = ${sum}`;
                crossfoots.push(crossfoot);                
            }
            return i === 1 ? ` (QS: ${crossfoots})` : ` (Iter. QS: ${_.join(crossfoots, '; ')})`; 
        }
    }

    calcNumber(char, mode) {
        if (Number.isSafeInteger(parseInt(char))) {
            return parseInt(char);
        }
        let num;
        let min;
        let max;
        if (['A0', 'A1'].includes(mode)) {
            num = char.charCodeAt(0) - modes[mode];
        } else {
            num = -(char.charCodeAt(0) - modes[mode]);
        }
        if (['A0', 'A25'].includes(mode)) {
            min = 0; max = 26;
        } else {
            min = 1; max = 27;
        }
        return _.inRange(num, min, max) ? num : 0;
    }

}

