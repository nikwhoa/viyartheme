let question = document.querySelectorAll('.question'),
    answers = document.querySelectorAll('.answer');

   
for ( let i = 0; i < question.length; i++ ) {
    question[i].addEventListener('click', function() {

        let setClasses = ! this.classList.contains('active');
        setClass(question, 'active', 'remove');
        setClass(answers, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
        }
    });
}

function setClass(els, className, fnName) {
    for (let i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}


    // question.forEach(el => {
    //     el.addEventListener('click', (e) => {
    //         hideAll();
    //         el.children[1].classList.toggle( 'show' );
    //     });
    // });

    // function hideAll() {
    //     for ( let i = 0; i < question.length; i++ ) {

    //         question[i].children[1].classList.toggle( 'show', false );
    //     }
    // };