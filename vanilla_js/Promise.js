function add(a, b, resolve, reject) {
    setTimeout(()=> {
        if(typeof a === 'number' && typeof b === 'number') {
            // resolve
            const res = a+b;
            resolve(res);
        } else {
            // reject
            const res = "숫자의 타입이 이상해씨"
            reject(res);
        }
    }, 2000)
}

function addPromise(a, b) {
    const executor = (resolve, reject) => {
        setTimeout(()=> {
            if(typeof a === 'number' && typeof b === 'number') {
                // resolve
                const res = a+b;
                resolve(res);
            } else {
                // reject
                const res = "숫자의 타입이 이상해씨"
                reject(res);
            }
        }, 2000)
    }

    const asyncTask = new Promise(executor);
    return asyncTask;
}

const res = addPromise(1, 4);
res.then((res) =>{
    console.log("성공: " + res);
}).catch((err)=>{
    console.log("실패: " + err);
})

function helloA(name) {

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const nname = "준수"
            console.log(name+": " + nname + " 안녕?");
            resolve(nname);
        },2000);
    })
}

function helloB(name) {

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const nname = "민영"
            console.log(name+": " + nname + " 안녕?");
            resolve(nname);
        },3000);  
    })
}

function helloC(name) {

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const nname = "윤기"
            console.log(name+": " + nname + " 안녕?");
            resolve(nname);
        },1000);
    })
}

function helloD(name) {

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const nname = "영리"
            console.log(name+": " + nname + " 안녕?");
            resolve(nname);
        },1000);
    })
}

function helloE(name) {

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const nname = "지호"
            console.log(name+": " + nname + " 안녕?");
            resolve(nname);
        },1000);
    })
}

function helloF(name) {

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const nname = "지윤"
            console.log(name+": " + nname + " 안녕?");
            resolve(nname);
        },1000);
    })
}

helloA("재석").then((name_A) => {
    console.log(name_A +": 어 그래 왔냐");
    return helloB(name_A);
}).then((name_B) => {
    console.log(name_B +": 어 그래 왔냐");
    return helloC(name_B);
}).then((name_C) => {
    console.log(name_C +": 어 그래 왔냐");
    return helloD(name_C);
}).then((name_D) => {
    console.log(name_D +": 어 그래 왔냐");
    return helloE(name_D);
}).then((name_E) => {
    console.log(name_E +": 어 그래 왔냐");
    return helloF(name_E);
}).then((name_F) => {
    console.log(name_F +": 어 그래 왔냐");
    console.log("그만.");
})

// helloA("재석", (name_A) => {
//     console.log(name_A +": 어 그래 왔냐");
//     helloB(name_A, (name_B) => {
//         console.log(name_B +": 어 그래 왔냐");
//         helloC(name_B, (name_C) => {
//             console.log(name_C +": 어 그래 왔냐");
//             helloD(name_C, (name_D) => {
//                 console.log(name_D +": 어 그래 왔냐");
//                 helloE(name_D, (name_E) => {
//                     console.log(name_E +": 어 그래 왔냐");
//                     helloF(name_E, (name_F) => {
//                         console.log(name_F +": 어 그래 왔냐");
//                         console.log("그만.");
//                     })
//                 })
//             })
            
//         })
//     })
// });