const timer = () => {
    let count = 0;

    console.log('Count:', count);

    setInterval(() => {
        count++;
        console.log('Count:', count);
    }, 1000);
};

timer();
