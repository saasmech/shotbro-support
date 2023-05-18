export function scanForEmbeds() {
    const loggerDebug = (...args) => {
        //console.log(...args);
    }
    setTimeout(async () => {
        loggerDebug('look for attr');
        if (document.body.getAttribute('data-shotbro-script-added') !== 'yes') {
            loggerDebug('attr not found');
            const embedCandidates = document.getElementsByClassName('shotbro-embed');
            for (let i = 0; i < embedCandidates.length; i++) {
                loggerDebug('on ec', i);
                const ec = embedCandidates[i];
                const scriptNeeded = ec.getAttribute('data-shotbro-loader');
                if (scriptNeeded) {
                    loggerDebug('scriptNeeded', scriptNeeded);
                    const script = document.createElement('script');
                    script.setAttribute('src', scriptNeeded);
                    document.body.appendChild(script)
                    document.body.setAttribute('data-shotbro-script-added', 'yes');
                }
            }
        }
    }, 1000);
}