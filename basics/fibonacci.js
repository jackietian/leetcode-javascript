const fib = (n) => {
    if(n <= 1) return 1;
    return fib(n-1) + fib(n-2);
}


fib(1000)// take a long time

// optimised version

const cache = {};
const fib = (n) => {
    if(n <= 1) return n;
    if(!cache[n-1]) {
        cache[n-1] = fib(n-1);
    }

    if(!cache[n-2]) {
        cache[n-2] = fib(n-2);
    }
    
    return cache[n-1] + cache[n-2];
}
