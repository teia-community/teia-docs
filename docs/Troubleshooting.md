## My profile isn't loading
## I just minted an OBJKT and its not showing in my assets
## I just collected an OBJKT but its not showing in the collection
## The OBJKTs I burned are still showing up in my assets

New mint not showing up, can’t swap Objkts, just collect an Objkt but not showing in the collection … etc. In fact, Hicetnunc is rarely down. All these problems are related to indexer lagging.
If the indexer is lagging, the Hicetnunc website displays old data. So the collect fails (because the Objkt might have already been bought) and the swap doesn’t show up (exists in new data, not in the current data).

If the transaction shows on your wallet just wait until the site catches up, usually about 24 hours.

Read more here:
https://medium.com/newyellow-crypto-notebook/is-hicetnunc-down-what-to-do-and-info-about-indexer-e2ae92c188be

## My OBJKT is stuck on "metadata on queue"
Please try swapping your objkt. Metadata issue gets fixed when you swap

## I'm using Firefox and I get the white page whenever I try to visit HEN or objkt
Try clearing browser's cache.

## Someone sent me an unsolicited OBJKT. What do I do?
These are called "airdrops", and they are common in the crypto community. You can keep it or burn it.

## Is there a way to tell how many hDAO have been assigned to an objkt in the curated list?
Use this https://hicdex.com/objkt
The hDAO is one of the parameters you will see in the list

## I found a bug. How do I report it?
Head over to the [github issues](https://github.com/teia-community/teia-ui/issues) to see if the issue hasn't already been reported. If it hasn't, you can submit it.

## I'm having trouble syncing.
Try opening an incognito tab or clearing your cookies/cache to restart the wallet connection. You can also try a different browser. Also, try clicking the hamburger menu to "unsync" and then sync again.

## How do I edit the description of my NFT after I minted it?
A transaction on a blockchain is irreversible. Once minted, you cannot edit the title, description, or tags. We recommend you consider burning it.

## Nothing is working and I've tried all the troubleshooting possible. What should I do?
We recommend to wait at least one day. The developers are constantly pushing updates to the site, and sometimes patience is the best answer.

## Wallet Errors
### I got "Storage quota exceeded for the operation" error - what happened?

The error _"Storage quota exceeded for the operation. A script or one of its callee wrote more bytes than the operation said it would"_ arises when the Tezos blockchain network is busy with lots of transactions. You might see this as "Backtracked" in the list of operations in your wallet.

The action you were trying to do will not have been completed, and you can retry it safely. Some wallets may have offered you the opportunity to increase the amount of storage fees, and increasing by, say, 3% usually results in a successful transaction.

**It's worth noting that all transaction attempts, including failed ones, do incur small blockchain network fees which are not recoverable.**

### I got "FA_2 insufficient balance" error when swapping - what happened?

The usual cause for this is trying to swap more items that were minted. If you minted 10 items and try to swap 20, you'll receive this error.

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
If raising storage fees doesn't work, you'll have to switch to using kukai wallet. You don't need to make a new wallet to do this. [Here](https://youtu.be/_9TwCzBBJGU) is a video tutorial on how to import your wallet to Kukai.


