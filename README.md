# Ambient Mode Blocker

Ambient mode on firefox is cpu intensive. This lightweight Firefox extension automatically turns off Ambient Mode on YouTube videos.

## Manual Installation

To install this extension manually in Firefox, follow these steps:

1. Download the extension files:

    - `manifest.json`
    - `content.js`

2. Open Firefox and navigate to `about:debugging`.

3. Click on "This Firefox" in the left sidebar.

4. Click the "Load Temporary Add-on" button.

5. Navigate to the folder containing the extension files and select the `manifest.json` file.

6. The extension should now be loaded and active. You can verify this by checking the "Temporary Extensions" section on the debugging page.

## Usage

Once installed, the extension will automatically attempt to turn off Ambient Mode when you watch YouTube videos. No further action is required on your part.

## Troubleshooting

-   If the extension doesn't seem to be working, try refreshing the YouTube page.
-   Make sure you're on a YouTube watch page (URL should contain "youtube.com/watch").
-   Check the browser console for any error messages from the extension.

## Limitations

-   This is a temporary installation. The extension will be removed when you close Firefox.
-   For a permanent installation, you would need to package and sign the extension, which is beyond the scope of this README.
-   Alternatively you can install the extension directly from Add-ons store : https://addons.mozilla.org/en-US/firefox/addon/ambient-mode-blocker/

## Contributing

Feel free to fork this repository and submit pull requests for any improvements or bug fixes.
