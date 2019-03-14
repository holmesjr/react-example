const testGen = function* (){
    yield 1;
    yield 2;
    yield "hello";
    yield "hello again";
};

const myGenCall = testGen();
const myGenCall2 = testGen();

console.log(myGenCall.next().value);
console.log(myGenCall2.next().value);
console.log(myGenCall.next().value);
console.log(myGenCall2.next().value);
console.log(myGenCall.next().value);
console.log(myGenCall2.next().value);
console.log(myGenCall.next().value);
console.log(myGenCall2.next().value);
console.log(myGenCall.next().value);
console.log(myGenCall2.next().value);