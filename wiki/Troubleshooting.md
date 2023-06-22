## My profile isn't loading
If you are using [Tezos Profiles](https://tzprofiles.com/), it might take some time for the profile to be activated.

## I just minted an OBJKT and it's not showing in my assets
It usually takes a few minutes for a new mint to show in your list of creations. If the mint doesn't show after that time, there might be an issue with the indexer and you would need to wait for that to be resolved. Until the indexer is fixed, the marketplace will display old data.

## I just collected an OBJKT but it's not showing in the collection
It usually takes a few minutes for a purchase to show in your list of collections. If the purchase doesn't show after that time, there might be an issue with the indexer and you would need to wait for that to be resolved.

## The OBJKTs I burned are still showing up in my assets
It usually takes a few minutes for a transaction to be reflected in the marketplace. If the burned OBJKT still shows after that time, there might be an issue with the indexer and you would need to wait for that to be resolved.

If the transaction shows on your wallet just wait until the site catches up.

Read more here:
https://medium.com/newyellow-crypto-notebook/is-hicetnunc-down-what-to-do-and-info-about-indexer-e2ae92c188be

## A video doesn't get displayed properly/giving errors

In most cases, this is due to codec incompatibility in browsers. 

Unfortunaetly, A lot of browsers dont support the H.265 codec which is set as default output format by some software. If you want to mint mp4 files, we reccomend using the more **web compatible H.264 codec** for now. You can look up browser compatibility of codecs on [caniuse.com](https://caniuse.com/?search=video)

## My OBJKT is stuck on "metadata on queue"
Please try swapping your objkt. The metadata issue gets fixed when you swap.

## I'm using Firefox and I get the white page whenever I try to visit Teia/Hicetnunc or objkt.com
Try clearing the browser's cache.

## Someone sent me an unsolicited OBJKT. What do I do?
These are called "airdrops", and they are common in the crypto community. You can keep it or burn it.

## Is there a way to tell how many hDAO has been assigned to an objkt in the curated list?
Use this https://hicdex.com/objkt
The hDAO is one of the parameters you will see in the list

## I found a bug. How do I report it?
Head over to the [github issues](https://github.com/teia-community/teia-ui/issues) to see if the issue hasn't already been reported. If it hasn't, you can submit it.

## I'm having trouble syncing.
Try opening an incognito tab or clearing your cookies/cache to restart the wallet connection. You can also try a different browser. Also, try clicking the hamburger menu to "unsync" and then sync again.

## How do I edit the description of my NFT after I minted it?
A transaction on a blockchain is irreversible. Once minted, you cannot edit the title, description, or tags. We recommend you consider burning it and then re-minting it again.

## I am having trouble accessing Teia from the Russian Federation

https://teia.rocks/ is an alternative mirror which has been set up independently by community members and tries to use services that are available everywhere. For our blog there is an alternative domain at [blog.teia.rocks](https://blog.teia.rocks/)

Another option against geoblocking issues is using a VPN setup. You can just access teia.art via VPN or, for advanced users, you can add the following urls to your exception list:
- `teia.art` - teia's main domain
- `api.teia.art` - indexer used by teia
- `blog.teia.art` - teia's blog
- `hdapi.teztools.io` - indexer used by HEN and some alt sites
- `hdnet.teztools.net` - indexer used by some alt sites

## Nothing is working and I've tried all the troubleshooting possible. What should I do?
We recommend asking for help in the [Teia Discord](https://discord.gg/AQ56zrn55w).

## Wallet Errors
### I got "Storage quota exceeded for the operation" error - what happened?

The error _"Storage quota exceeded for the operation. A script or one of its callee wrote more bytes than the operation said it would"_ arises when the Tezos blockchain network is busy with lots of transactions. You might see this as "Backtracked" in the list of operations in your wallet.

The action you were trying to do will not have been completed, and you can retry it safely. Some wallets may have offered you the opportunity to increase the amount of storage fees, and increasing by, say, 3% usually results in a successful transaction.

**It's worth noting that all transaction attempts, including failed ones, do incur small blockchain network fees which are not recoverable.**

### I got "FA_2 insufficient balance" error when swapping - what happened?

The usual cause for this is trying to swap more items that were minted. If you minted 10 items and tried to swap 20, you'll receive this error.

### HELP! I keep getting the `BACKTRACKED` error and I'm using temple wallet! 

_also can be seen as `transaction likely to fail`_

You will have to manually set max storage fees (it only charges the storage fee that was really used in the operation). 

```suggested parameters:
mint - set storage to 310
swap - set storage to 180
```
_if these parameters fail, try going even higher_

![Storage fee adjustment in template wallet](https://i.ibb.co/7W3FNRR/Screen-Shot-2021-05-24-at-10-33-33-AM.png)

### HELP! I tried to raise the storage fees but I'm still getting the `BACKTRACKED` error!
If raising storage fees doesn't work, you'll have to switch to using Kukai wallet. You don't need to make a new wallet to do this. [Here](https://youtu.be/_9TwCzBBJGU) is a video tutorial on how to import your wallet to Kukai.


