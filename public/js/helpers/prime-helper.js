"use strict";
define([], function () {

function getPrimes(n) {
    var primes = [2];

    for (var x = 3; x <= Number.MAX_VALUE && primes.length < n; x += 2) {
        var current = 0;
        var isPrime = true;
        while (current < primes.length && isPrime && primes[current] < (x / 2)) {
            if (x % primes[current] === 0) {
                isPrime = false;
            }
            current++;
        }

        if (isPrime) {
            primes.push(x);
        }
    }
    var result = "";
    for(var i = 0; i < primes.length; i++) {
        result += (i > 0? ", " + primes[i]: primes[i]);
    }
    return result;
}

    return {
        getPrimes: getPrimes
    };

});
