const writeOutput = (thingToLog) => {
    console.log("The value is:", thingToLog);
};

const addTheThings = (a,b, theLogger) => {
    setTimeout(() => {
        const result = a + b;
       theLogger(result);
    }, 1000);
};

result = addTheThings(1,2, writeOutput);
console.log("next line");

