function sequentialSearch(needle, haystack) {
    let index = 0;

    while (index < haystack.length && haystack[index] !== needle) {
        index += 1;
    }

    if (index < haystack.length && haystack[index] === needle) {
        return index;
    }

    return -1;
}

export default sequentialSearch;
