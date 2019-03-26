
// this is a Promise
//const myFirstPromise = new Promise((resolve, reject) => {
    // do something asynchronous which eventually calls either:
    //
    //   resolve(someValue); // fulfilled
    // or
    //   reject("failure reason"); // rejected
//});

//so

const addTheThings = (a,b) => {

    return new Promise((resolve, reject) => {

        if (typeof a === 'string' || a instanceof String){
            reject("DO NOT GIVE ME STRINGS");
        }
        else {
            // uncomment below to see a rejection:
            //throw("Stuff happened. Stuff bad.");
            const theResultIWantToReturn = a / b;
            setTimeout(() => {
                resolve(theResultIWantToReturn);
            }, 2000);
        }
    });
};

const writeOutput = (thingToLog) => {
    logResult(thingToLog, "OUTPUT");
};

const writeError = (thingToLog) => {
    logResult(thingToLog, "ERROR");
};

const logResult = (thingToLog, resultType) => {
    let prefix = "";
    switch (resultType) {
        case "OUTPUT" :
            prefix = "The value is:";
            break;
        case "ERROR" :
            prefix = "There was an error:";
    }
    console.log(prefix, thingToLog);
};

const run = () =>{
    addTheThings(1,1)
        .then(result => writeOutput(result))
        .catch(err => writeError(err));
    console.log("next line");

};

async function asyncRun() {
    try {
        const result = await addTheThings(1, 1);
        writeOutput(result);
    }catch (err) {
        writeError(err)
    }
    console.log("next line");
    return "DONE";
}


//run();
someValue = asyncRun()
    .then(res => console.log(res));
console.log(someValue);





