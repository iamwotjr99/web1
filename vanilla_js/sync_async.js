function helloA(name, cb) {
    setTimeout(()=> {
        const nname = "준수"
        console.log(name+": " + nname + " 안녕?");
        cb(nname);
    },2000);
}

function helloB(name, cb) {
    setTimeout(()=> {
        const nname = "민영"
        console.log(name+": " + nname + " 안녕?");
        cb(nname);
    },3000);
}

function helloC(name, cb) {
    setTimeout(()=> {
        const nname = "윤기"
        console.log(name+": " + nname + " 안녕?");
        cb(nname);
    },1000);
}

function helloD(name, cb) {
    setTimeout(()=> {
        const nname = "영리"
        console.log(name+": " + nname + " 안녕?");
        cb(nname);
    },1000);
}

function helloE(name, cb) {
    setTimeout(()=> {
        const nname = "지호"
        console.log(name+": " + nname + " 안녕?");
        cb(nname);
    },1000);
}

function helloF(name, cb) {
    setTimeout(()=> {
        const nname = "지윤"
        console.log(name+": " + nname + " 안녕?");
        cb(nname);
    },1000);
}

// hello("재석", function cb(name) {
//     console.log(name +": 어 그래 왔냐");
// });

helloA("재석", (name_A) => {
    console.log(name_A +": 어 그래 왔냐");
    helloB(name_A, (name_B) => {
        console.log(name_B +": 어 그래 왔냐");
        helloC(name_B, (name_C) => {
            console.log(name_C +": 어 그래 왔냐");
            helloD(name_C, (name_D) => {
                console.log(name_D +": 어 그래 왔냐");
                helloE(name_D, (name_E) => {
                    console.log(name_E +": 어 그래 왔냐");
                    helloF(name_E, (name_F) => {
                        console.log(name_F +": 어 그래 왔냐");
                        console.log("그만.");
                    })
                })
            })
            
        })
    })
});