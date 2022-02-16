const OddEven = (props) => {
    console.log(props.count);
    return <>{props.count % 2 === 0 ? "짝수" : "홀수"}</>;
}

export default OddEven;