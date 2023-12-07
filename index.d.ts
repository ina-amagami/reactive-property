import rxjs from 'rxjs';

export declare class Unit {
    static Default: undefined;
}

export default class ReactiveProperty<T> {
    constructor(initialValue: T);
    get observable(): rxjs.Observable<T>;
    get value(): T;
    set value(newValue: T);
    setValueAndForceNotify(newValue: T): void;
    subscribe(observerOrNext?: Partial<rxjs.Observer<T>> | ((value: T) => void)): rxjs.Subscription;
    subscribeOnValue(next: ((value: T) => void)): rxjs.Subscription;
    unsubscribe(): void;
}