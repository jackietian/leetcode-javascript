const camelCase = (str) => {
    //str = saveChangesInTheEditor 
    //return 5: [save, changes, In, The, Editor]
    let uppperCaseChars = str.split('').filter(char => char >= 'A' && char <= 'Z');
    return uppperCaseChars.length + 1;
}

let str = 'saveChangesInTheEditor';
console.log(camelCase(str));