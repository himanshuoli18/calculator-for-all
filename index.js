export function add(...num) {
    let ans = 0
    for (let i = 0;i<num.length; i++) {
        ans += num[i]
    }
    return ans
}
export function subtract(...num) {
    let ans = num[0]
    for (let i = 1;i<num.length; i++) {
        ans -= num[i]
    }
    return ans
}
export function multiply(...num) {
    let ans = 1
    for (let i = 0;i<num.length; i++) {
        ans *= num[i]
    }
    return ans
}
export function divide(...num) {
    let ans = num[0]
    for (let i = 1;i<num.length; i++) {
        ans /= num[i]
    }
    return ans
}