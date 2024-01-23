function outerFunction() {

    

    function innerFunction() {
        let count = 0;
        count++;
        console.log('Count:', count);
    }

    innerFunction();
    innerFunction();
    innerFunction();

}

outerFunction();
