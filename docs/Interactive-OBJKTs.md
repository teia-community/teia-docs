Below is a guide to minting an interactive OBJKT.

Also check out the [templates](https://github.com/teia-community/teia-ui/tree/develop/templates) for p5.js, shaders, html, and svg.


***

author: @pichiste (Daniel Massey)

# About

Teia enables you to publish web-based interactive and generative artworks by uploading a zip archive. If you're starting on a new project, have a look at our starter [templates](https://github.com/teia-community/teia-ui/tree/main/templates). The following guide walks you through the process of minting your first interactive OBJKT.

# Getting Started

Whether you're starting fresh or have an existing artwork, there are some important guidelines you'll need to follow in order to successfully mint:

## Folder Structure

Put all your project files into a single folder if they are not already in one. The main file in your project needs to be called `index.html`. Subfolders are ok, but make sure all paths referenced in your code are relative (`path/to/file.js`, not `/path/to/file.js`).

## Cover Image

Your work is required to have a cover image. This can be any image inside your project folder. In the `<head>` tag of your `index.html` file, add the following meta tag, replacing the value of the `property` attribute with the relative path to your cover image:

```html
<meta property="og:image" content="path/to/your/cover.jpg" />
```

The cover image can be a JPEG, PNG, or GIF.

## Resources

You will need to include all libraries, scripts, styles, and other assets referenced in your code inside your project folder. References to most external resources will  be blocked. While there are some exceptions to this, it's generally best practice to bundle everything and avoid external dependencies. See allowed domains below:

## Features

The following features will be enabled on the iframe displaying your work on [teia.art](https://teia.art):
```
accelerometer
camera
gyroscope
microphone
xr-spatial-tracking
```

## Allowed Domains
Interactive OBJKTS can access the following external domains:

| domain        | img-src | media-src | font-src | prefetch-src | connect-src |
| ------------- |:-------------:| -----:| -----:| -----:| -----:|
| https://ipfs.infura.io/ | ✅ | ✅ | ✅ | ✅ |
| https://*.infura.io/ | | | | ✅ |
| https://infura.io/ | | | | ✅ |
| https://cloudflare-ipfs.com/ | ✅ | ✅ | ✅ | ✅ |
| https://ipfs.io/ | ✅ | ✅ | ✅ | ✅ |
| https://gateway.pinata.cloud/ | ✅ | ✅ | ✅ | ✅ |
| https://fonts.googleapis.com/ | | | ✅ | ✅ |
| https://better-call.dev/ | | | | | ✅ |
| https://*.better-call.dev/ | | | | | ✅ |
| https://*.cryptonomic-infra.tech/ | | | | | ✅ |
| https://cryptonomic-infra.tech/ | | | | | ✅ |
| bootstrap.libp2p.io | | | | | ✅ |
| preload.ipfs.io | | | | | ✅ |
| https://api.etherscan.io/ | | | | | ✅ |
| https://api.thegraph.com/ | | | | | ✅ |
| https://*.tzkt.io/ | | | | | ✅ |
| https://api.tzstats.com/ | | | | | ✅ |
| https://*.wikidata.org/ | | | | | ✅ |
| https://*.coinmarketcap.com/ | | | | | ✅ |
| https://api.openweathermap.org/ | | | | | ✅ |
| https://teia.art/ | | | | | ✅ |
| https://*.teia.art/ | | | | | ✅ |
| https://api.hicdex.com/ | | | | | ✅ |
| services.tzkt.io |✅ | | | |  |
## User Data

Your project will be displayed within a sandboxed iframe, meaning it won't have access to any user data from the [teia.art](http://teia.art) site. However, the viewer and creator addresses are passed into the iframe via URL query parameters:

```
?viewer={VIEWER_ADDRESS}&creator={CREATOR_ADDRESS}
```

You can parse these query parameters in javascript and use them in your project as you wish:

```jsx
const creator = new URLSearchParams(window.location.search).get('creator')
const viewer = new URLSearchParams(window.location.search).get('viewer')
```

## Minting

- Once your project folder is ready to be minted, go ahead and compress it into a zip file.
- Head to [https://teia.art/mint](https://teia.art/mint), fill out the information for your work, and upload your zip file.
- You should now see a preview of your work embedded on the page. Make sure to test it thoroughly to make sure it works as expected.
- If everything looks good, make sure your wallet is synced and press the "mint" button at the bottom of the page.
- Congratulations! You have just minted your first interactive OBJKT 🎉

## Minting AR OBJKTS
[Please see the tutorial by FREEBOID](http://www.freeboid.com/xrobjkts-at-hen/)

## Minting Unity WebGL Builds
https://github.com/hicetnunc2000/hicetnunc/issues/602

# Known Issues

- If you are using Brave and notice the HTML preview not working on the mint page, you will need to disable your shields for this site, or reconfigure them to allow service workers.

# Help

If you find a bug, please open an issue on [Github](https://github.com/teia-community/teia-ui/issues). Otherwise, seek help on [Discord](https://discord.com/invite/jKNy6PynPK).