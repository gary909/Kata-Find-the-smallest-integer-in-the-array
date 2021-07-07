
function findSmallestInt(args) {
    var min = Infinity;
    for(let i = 0; i < args.length; i++){
        if (args[i] < min) {
            min = args[i];
        }
    }
    return min;
}




console.log("hello test")
console.log(findSmallestInt([78,56,232,12,8])); // Should return 8
console.log(findSmallestInt([78,56,232,12,18])); // Should return 12
console.log(findSmallestInt([78,56,232,412,228])); // Should return 56
console.log(findSmallestInt([78,56,232,12,0])); // Should return 0
console.log(findSmallestInt([1,56,232,12,8])); // Should return 1