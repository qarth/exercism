function Hamming() {}

Hamming.prototype.compute = function (s1, s2) {

    // if the strands are of unequal length
    if (s1.length !== s2.length) {
        throw new Error('DNA strands must be of equal length.');
    }
    var dist = 0;

    for (var i = 0; i < s1.length; i += 1) {
        // if the ith character in strand 1 is NOT
        // equal to the ith character in strand 2
        if (s1.charAt(i) !== s2.charAt(i)) {
            dist += 1;
        }
    }
    return dist;
};
// console.log(Hamming.prototype.compute("AA", "AB"));

module.exports = Hamming;