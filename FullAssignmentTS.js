function findMissingDigit(expression) {
    for (var digit = 0; digit <= 9; digit++) {
        // replace '?' with each digit from 0 to 9
        var testExp = expression.replace("?", digit.toString());
        // split equation into left and right parts
        var _a = testExp.split("="), left = _a[0], right = _a[1];
        // check if left side = right side
        if (eval(left.trim()) === Number(right.trim())) {
            console.log("".concat(testExp, " -> Missing digit = ").concat(digit));
        }
    }
}
// Example test
findMissingDigit("4? + 12 = 58");
