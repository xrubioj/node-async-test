async function test() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("2. I'm in the setTimeout() callback inside test()!");
            // The problem is making this value reach test() return value,
            // that's why we have to use the Promise and resolve()
            resolve(42);
        }, 1000);
    });
}

async function test2() {
    try {
        // On the other hand, this function is asynchronously awaiting for the
        // result of test(), and can use normal return. main() will happily
        // await for the result (without blocking!) :)
        let x = await test();
        console.log(`3. Result from test() x = ${x}`);
        return x;
    } catch (e) {
        console.log("3X. Something went wrong :P", e);
        return -1;
    }
}

async function main() {
    let x = await test2();
    console.log(`4. Result from test2() (async) x = ${x}`);
}

main();
console.log("1. This should be the first message as main() is running asynchronously");
