let question = document.querySelectorAll( '.question-item' );

    question.forEach(el => {
        el.addEventListener('click', (e) => {
            hideAll();
            el.children[1].classList.add( 'show' );
        });
    });

    function hideAll() {
        for ( let i = 0; i < question.length; i++ ) {
            question[i].children[1].classList.toggle( 'show', false );
        }
    };