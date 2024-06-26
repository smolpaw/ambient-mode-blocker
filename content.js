var attemptsLeft = 5;

const checkAmbientMode = () => {
    //max attempts to prevent endless loop if YT changes page
    attemptsLeft -= 1;
    if(attemptsLeft == 0){
        return
    }
    const playerOptions = Array.from(document.getElementsByClassName('ytp-menuitem-label'))
    const amLabel = playerOptions.filter(o => o.textContent == 'Ambient mode')
    if(amLabel.length > 0){
        const am = amLabel[0].parentElement

        if (am.hasAttribute('aria-checked')) {
            if (am.getAttribute('aria-checked') === "true") {
                console.log('Ambient mode is ON')
                am.click()
                setTimeout(checkAmbientMode, 500)
            } else {
                console.log('Ambient mode is OFF')
            }
        }
    } else {
        setTimeout(checkAmbientMode, 500)
    }
}

function main() {
    if (window.location.pathname !== "/watch") return

    document.getElementsByClassName('ytp-settings-button')[0].click()
    document.getElementsByClassName('ytp-settings-button')[0].click()

    setTimeout(checkAmbientMode, 500)
}

(document || window).addEventListener("yt-navigate-finish", main, true);
