// 객체에서 Spread 연산자
const bread = {
    base: "bread",
    madeIn: "korea"
};

const strawberryBread = {
    ...bread,
    topping: "strawberry"
};

const cheezeBread = {
    ...bread,
    topping: "cheeze"
};

const creamcheezeBread = {
    ...bread,
    topping: "creamcheeze"
};

console.log(strawberryBread);
console.log(creamcheezeBread);
console.log(cheezeBread);

// 배열에서 Spread 연산자
const noToppingBreads = ["밀 식빵", "현미 식빵"];
const ToppingBreads = ["딸기 식빵", "치즈 식빵", "크림치즈 식빵"];

const allBread = [...noToppingBreads, "공갈빵", ...ToppingBreads];
console.log(allBread);
