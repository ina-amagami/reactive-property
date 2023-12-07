"use strict";

const rxjs = require('rxjs');

class ReactiveProperty {
    _subject = new rxjs.Subject();
    get observable() {
        return this._subject;
    }

    _value;
    get value() {
        return this._value;
    }
    set value(newValue) {
        const isRaiseNext = this.value !== newValue;
        this._value = newValue;
        if (isRaiseNext) {
            this._subject.next(newValue);
        }
    }
    
    constructor(initialValue) {
        this._value = initialValue;
    }

    setValueAndForceNotify(newValue) {
        const isRaiseNext = this.value !== newValue;
        this.value = newValue;
        if (!this._subject.closed && !isRaiseNext) {
            this._subject.next(newValue);
        }
    }

    subscribe(observerOrNext) {
        return this._subject.subscribe(observerOrNext);
    }

    subscribeOnValue(next) {
        next(this.value);
        return this.subscribe(next);
    }

    unsubscribe() {
        this._subject.unsubscribe();
    }
}
module.exports = ReactiveProperty;