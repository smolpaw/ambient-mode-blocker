const checkAmbientMode = () => {
    const am = document.getElementsByClassName('ytp-menuitem')[0]

    if (am.hasAttribute('aria-checked')) {
        if (am.getAttribute('aria-checked') === "true") {
            console.log('Ambient mode is ON')
            am.click()
            setTimeout(checkAmbientMode, 50)
        } else {
            console.log('Ambient mode is OFF')
        }
    }
}

function main() {
    if (window.location.pathname !== "/watch") return

    document.getElementsByClassName('ytp-settings-button')[0].click()
    document.getElementsByClassName('ytp-settings-button')[0].click()

    setTimeout(checkAmbientMode, 50)
}

(document || window).addEventListener("yt-navigate-finish", main, true);