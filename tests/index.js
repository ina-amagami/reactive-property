const ReactiveProperty = require('..');

const booleanProp = new ReactiveProperty(false);

const subscription = booleanProp.subscribe(x => {
    console.log(x);
});

booleanProp.value = true; // console.log >> true;
booleanProp.value = true; // no output
booleanProp.setValueAndForceNotify(true); // console.log >> true;
booleanProp.value = false; // console.log >> false;
subscription.unsubscribe();
booleanProp.value = true; // no output