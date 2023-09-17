const removeFromArray = function(arr, ...removeElements) {
    let removed = '';
    removed += removeElements.map((toRemove) => {
        if (arr.indexOf(toRemove) >= 0) {
            arr.splice(arr.indexOf(toRemove), 1);
        }
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
