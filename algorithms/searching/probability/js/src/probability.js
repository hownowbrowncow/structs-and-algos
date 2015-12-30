function probabilitySearch(needle, haystack) {
    let index = 0;

    while (index < haystack.length && haystack[index] !== needle) {
        index += 1;
    }

    if (index >= haystack.length || haystack[index] !== needle) {
        return false;
    }

    if (index > 0) {
        const temp = haystack[index - 1];

        haystack[index - 1] = haystack[index];
        haystack[index] = temp;
    }

    return true;
}

export default probabilitySearch;
