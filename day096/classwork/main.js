const numArr = [0,1,2,3,4,5,6,7,8,9];

const newArr = numArr.map((number, index) => {
    let result = [];
    if(index % 2 === 0){
        result.push(number * 2);
    }
    else {
        result.push(number);
    }
    
    return result;
})

const manualMap = (arr) => {

    const result = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            result.push(arr[i] * 2);
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
}