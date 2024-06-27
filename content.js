const MAX_ATTEMPTS = 10;
const ATTEMPT_INTERVAL = 250;

function checkAmbientMode() {
    const playerOptions = document.querySelectorAll(
        ".ytp-settings-menu .ytp-menuitem-label"
    );
    if (!playerOptions.length) {
        console.warn("Player options not found");
        return false;
    }

    const ambientOption = Array.from(playerOptions).find((label) =>
        label.textContent.toLowerCase().includes("ambient")
    );

    // Currently ambient menu item renders late so we check for it's existence
    if (!ambientOption) return false;

    const ambientModeToggle = ambientOption.parentElement;
    const attribute = ambientModeToggle.getAttribute("aria-checked");

    if (attribute === "true") {
        console.log("Ambient mode is ON");
        ambientModeToggle.click();
        return false;
    } else if (attribute === "false") {
        console.log("Ambient mode is OFF");
        return true;
    }

    // attribute doesn't exist and is null
    return false;
}

function sleep(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}

async function main() {
    // Settings menu items doesn't exist in the dom
    // So we click settings button twice to make it appear
    const settingsButton = document.querySelector(".ytp-settings-button");
    if (settingsButton) {
        settingsButton.click();
        settingsButton.click();
    }

    let attempts = 0;
    while (attempts < MAX_ATTEMPTS) {
        const isAmbientModeOff = checkAmbientMode();
        if (isAmbientModeOff) break;
        await sleep(ATTEMPT_INTERVAL);
        attempts++;
    }

    if (attempts >= MAX_ATTEMPTS) {
        console.error("Failed to turn off ambient mode. Max attempts reached.");
    }
}

main();
