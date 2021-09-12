

// Get the modal
let modalCall = document.querySelector('.hf-form[data-id=\'56\']');
let modalRegister = document.querySelector('.hf-form[data-id=\'57\']');
let callBtn = document.querySelectorAll('#call-order');
let registerBtn = document.querySelectorAll('.register-btn');
let closeModal = document.querySelectorAll('.close-modal');
let formModal = document.querySelectorAll('.hf-form');
let backToHomeBtns = [document.querySelector('.form__success-56'), document.querySelector('.form__success-57')];



callBtn.forEach(el => {
    el.addEventListener('click', () => {

        modalCall.style.display = 'block';

    });
});
closeModal.forEach(el => {
    el.addEventListener('click', () => {
        formModal.forEach(element => {
            element.style.display = 'none';
        });
    });
    document.addEventListener('keydown', (e) => {
        if ('Escape' === e.key) {
            formModal.forEach(element => {
                element.style.display = 'none';
            });
        }
    })
})

registerBtn.forEach(el => {
    el.addEventListener('click', () => {
        modalRegister.style.display = 'block';
    });
});


let mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.oldValue === 'hf-form hf-form-56 mc4wp-loading') {
            backToHomeBtns[0].style.display = 'block';
        } else if (mutation.oldValue === 'hf-form hf-form-57 mc4wp-loading') {
            backToHomeBtns[1].style.display = 'block';
        }
    });
});

formModal.forEach( form => {
    mutationObserver.observe( form, {
        attributes: true,
        attributeOldValue: true
    });
});

