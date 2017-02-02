async function test() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("test");
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
        // await for the result :)
        let x = await test();
        console.log(`x = ${x}`);
        return x;
    } catch (e) {
        console.log("Something went wrong :P", e);
        return -1;
    }
}

async function main() {
    let x = await test2();
    console.log(`x (from async) = ${x}`);
}

main();
