// Part 2: Trampolines
function flattenArrayRecursive(arr) {
    let flattened = [];
    for (let element of arr) {
        if (Array.isArray(element)) {
            flattened = flattened.concat(flattenArrayRecursive(element));
        } else {
            flattened.push(element);
        }
    }
    return flattened;
}

function trampoline(fn) {
    while (typeof fn === 'function') {
        fn = fn();
    }
    return fn;
}

function trampolinedArray(arr) {
    function trFlattenArray(arr, flattened = []) {
        if (arr.length === 0) {
            return flattened;
        } else {
            const firstElement = arr[0];
            const restOfArray = arr.slice(1);

            if (Array.isArray(firstElement)) {

                return function () {
                    return trFlattenArray([...firstElement, ...restOfArray], flattened);
                };
            } else {

                return function () {
                    return trFlattenArray(restOfArray, [...flattened, firstElement]);
                };
            }
        }
    }

    return trampoline(function () {
        return trFlattenArray(arr);
    });
}
const nestedArray = [1, [2, [3, 4], 5], [6, [7, 8]]];
const flattenedArray = trFlattenArray(nestedArray);
console.log(flattenedArray);
