const minNumber = (n, password) => {
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";
    let min_number = 6;

    const passwordArr = password.split('');
    const hasNumber = passwordArr.filter(char => numbers.includes(char));
    const hasLowerCase = passwordArr.filter(char => lower_case.includes(char));
    const hasUpperCase = passwordArr.filter(char => upper_case.includes(char));
    const hasSpecialChars = passwordArr.filter(char => special_characters.includes(char));

    const isLargerThanMinNum = (n >= 6);
    let result = 0;

    result += hasNumber.length > 0 ? 0: 1;
    result += hasLowerCase.length > 0 ? 0: 1;
    result += hasUpperCase.length> 0 ? 0: 1;
    result += hasSpecialChars.length > 0 ? 0: 1;

    if(!isLargerThanMinNum) {
        return (6-n) > result? 6-n : result;
    } 
    return result;
}

console.log(minNumber(11, '$HackerRank')); // return 1, needs 1 more digit
console.log(minNumber(3, 'Ab1')); // return 3


