// youtube cover

/* --
    1. пройтись по всем детям js-youtube и собрать все js-videoWrapper

--
*/


function videoPlay( selector ) {
    console.log( selector );
    alert('ff')
}

/* const videoPoster = document.querySelector( '.js-videoPoster' );
const videoIframe = document.querySelector( '.js-videoIframe' );
const videoWrapper = document.querySelector( '.js-videoWrapper' );

function videoPlay( wrapper, iframe, button, videoPoster ) {
    
    let iframe = wrapper;
    
    let src = iframe.childNodes[3].attributes[5].nodeValue;
    videoWrapper.classList.add( 'videoWrapperActive' );
    videoIframe.setAttribute( 'src', videoIframe.getAttribute( 'data-src' ) );
    
}

videoPoster.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('ff');
    videoPlay( videoWrapper );
});

export {videoPlay}; */
