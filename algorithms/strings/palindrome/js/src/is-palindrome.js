function isPalindrome(value) {
    const wordArr = value.trim().toUpperCase().split('');
    let left = 0;
    let right = wordArr.length - 1;

    while (wordArr[left] === wordArr[right] && left < right) {
        left += 1;
        right -= 1;
    }

    return wordArr[left] === wordArr[right];
}

export default isPalindrome;
