let height = undefined;
let result = undefinedCheck(height);

function undefinedCheck (height) {
    return height ?? "Height is not defined"
}

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
