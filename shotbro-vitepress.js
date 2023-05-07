



export function scanForEmbeds() {
    console.log('scanForEmbeds');
    setTimeout(async () => {

        console.log('DOMContentLoaded');
        console.log('scanForEmbeds');
        const embedCandidates = document.getElementsByClassName('shotbro-embed');
        console.log('embedCandidates', embedCandidates);
    for (let i = 0; i < embedCandidates.length; i++) {

        const ec = embedCandidates[i];
        const cite = ec.getAttribute('cite');
        if (cite && ec.getAttribute('data-shotbro-embed-added') !== 'yes') {
            ec.setAttribute('data-shotbro-embed-added', 'yes');

            const res = await fetch(`http://127.0.0.1:5014/api/embed/oembed-json?url=${cite}`);
            const resJson = await res.json();

            const en = document.createElement('div');
            const frag = new DOMParser().parseFromString(resJson.html, 'text/html').body;
            const iframes = frag.getElementsByTagName('iframe');
            const scripts = frag.getElementsByTagName('script');

            const iframe = iframes[0];
            const src = scripts[0].src;

            console.log('src', src);
            const script = document.createElement('script');
            script.setAttribute('src', src);

            en.appendChild(iframe);
            en.appendChild(script);

            ec.parentNode.insertBefore(en, ec);
            ec.style.display = 'none';
        }
    }
    }, 1000);


}