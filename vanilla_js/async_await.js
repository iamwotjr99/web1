function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}
async function kingAsync() {
    await delay(3000);
    return "킹 에이싱크";
}

async function main() {
    const res = await kingAsync();
    console.log(res);
}

main();