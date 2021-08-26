window.addEventListener( 'DOMContentLoaded', () => {
    const navWrapper = document.querySelector( '.nav-wrapper' );

    window.addEventListener( 'scroll', () => {
        if ( 200 < window.pageYOffset /* added pageYOffset for ie */ ) {
            navWrapper.classList.add( 'sticky-nav' );
        } else if ( 100 > window.pageYOffset ) {
            navWrapper.classList.remove( 'sticky-nav' );
        }
    });
});

