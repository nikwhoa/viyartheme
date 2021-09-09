

// Get the modal
let modalCall = document.querySelector( '.hf-form[data-id=\'56\']' );
let modalRegister = document.querySelector( '.hf-form[data-id=\'57\']' );
let callBtn = document.querySelectorAll( '#call-order' );
let registerBtn = document.querySelectorAll( '.register-btn' );
let closeModal = document.querySelectorAll('.close-modal');


callBtn.forEach( el => {
    el.addEventListener( 'click', () => {
        
        modalCall.style.display = 'block';
        
    });
});
closeModal.forEach(el => {
    el.addEventListener( 'click', () => {
        el.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
    });
    document.addEventListener( 'keydown', (e) => {
        if ('Escape' === e.key) {
            el.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
        }
    })
})

registerBtn.forEach( el => {
    el.addEventListener( 'click', () => {
        modalRegister.style.display = 'block';
    });
});
// Get the button that opens the modal

document.querySelector('.hf-form-56').on('hf-message-success', function(e) {
    alert( 'wow!' );
 });

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }