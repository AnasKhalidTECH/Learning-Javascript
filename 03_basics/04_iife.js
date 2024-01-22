// Immediately Invoked Function Expression (IIFE)


(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`DB Connected Two ${name}`);
})("Anas Khalid")