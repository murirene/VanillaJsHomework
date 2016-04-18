define([], function () {

    function findSumPairs(intArr, sumTotal){
    var hash = {};
    var pairs = [];
    for(var i = 0; i < intArr.length; i++) {
        var diff = sumTotal - intArr[i];

        if( hash[diff.toString()]) {
            pairs.push( "{" + (diff).toString() + ", " + intArr[i].toString() + "}");
            hash[diff.toString()] -= 1;
            if(hash[diff.toString()] === 0){
                hash[diff.toString()] = undefined;
            }
        } else if(hash[intArr[i].toString()]) {
            hash[intArr[i].toString()] += 1;
        } else {
            hash[intArr[i].toString()] = 1;
        }
    }

    return pairs;
}
    function getSumPairs(entry, sum){
        var list = entry.split(",");
        return findSumPairs(list, sum).toString();
    }

    return {
        getSumPairs: getSumPairs
    };

});
