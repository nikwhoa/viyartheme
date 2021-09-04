// eslint-disable-next-line no-unused-vars
function videoPlay( button ) {
    let youTubeButton = document.querySelectorAll( button );

    youTubeButton.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            e.target.previousElementSibling.setAttribute( 'src', e.target.previousElementSibling.getAttribute( 'data-src' ) );

            e.target.parentNode.classList.add( 'videoWrapperActive' );

        });
    });
}

