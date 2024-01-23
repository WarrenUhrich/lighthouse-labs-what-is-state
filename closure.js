function outerFunction() {

    let count = 0;

    function innerFunction() {
        count++;
        console.log('Count:', count);
    }

    innerFunction();
    innerFunction();
    innerFunction();

}

outerFunction();
