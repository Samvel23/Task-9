(function(window, document, undefined) {
    const myInput = document.querySelector('input');
    const btn = document.querySelector(".btn");
    
    btn.addEventListener('click', () => {
        const inputValue = myInput.value;
        if(inputValue.trim() == '') {
            alert('Please enter a value');
        }
    });
})(window, document);