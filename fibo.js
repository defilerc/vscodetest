function myfibo(n) {
    if (n < 1) { 
        let b = 1; return 1;
    }

    return n * myfibo(n-1);
}

console.log(myfibo(3));
