Your OBJKTs are uploaded to The Interplanetary File System, or [IPFS](https://www.ipfs.com/). The Teia smart contract stores the IPFS hash and a reference to IPFS metadata with information like title and description [(example)](https://ipfs.io/ipfs/QmbUHQWw1pQ7GwPxgDtAUdRKaJPQjsymKviZCcNEjMj1oM).

## What is IPFS and why is IPFS pinning important?
"_The Interplanetary File System, or [IPFS](https://www.ipfs.com/), is a distributed storage network made up of “nodes” or computers all over the world where people and apps are storing and sharing data. When an IPFS node retrieves data from the network it keeps a local cache of that data for future usage, taking up space on that particular IPFS node. IPFS nodes frequently clear this cache out in order to make room for new content..._" —[source](https://medium.com/pinata/what-is-an-ipfs-pinning-service-f6ed4cd7e475)

## Why does data on IPFS need to be pinned?

According to IPFS, "_IPFS has a fairly aggressive caching mechanism that will keep an object local for a short time after you perform any IPFS operation on it, but these objects may get garbage-collected regularly. To prevent that garbage collection, simply pin the CID you care about_". —[source](https://docs.ipfs.io/how-to/pin-files/)

## Does Teia pin my OBJKTs for me?

Metadata & OBJKT files are uploaded with Teia's own IPFS node, ipfsproxy.teia.art (see [github code here](https://github.com/teia-community/ipfs-upload-proxy/)). OBJKT artifacts and metadata are automatically pinned. The Teia UI uses an image proxy,  imgproxy.teia.rocks, for fast access to thumbnails and uses cache.teia.rocks to download content from IPFS.

## Do I need to pin my own OBJKTs?

This is a personal decision. Since Teia pins content for you, you could say that it is safe, but some people would prefer to be in control of their data. For the very long-term, it is important to understand that you are responsible for the artwork as an artist and/or collector. It is also important to keep in mind the idea of "content persistence". You can read a good article regarding content persistence by Filecoin blog [here](https://filecoin.io/blog/posts/ipfs-filecoin-and-content-persistence/).

"_When you “pin” data on an IPFS node, you are telling that node that the data is important and it should be saved. Pinning prevents important data from being deleted from your node when the clearing process happens. However, you can only control and pin data on your node(s). You can not force other nodes on the IPFS network to pin your content for you. So, to guarantee your content stays pinned, you have to run your own IPFS nodes._" — [source](https://medium.com/pinata/what-is-an-ipfs-pinning-service-f6ed4cd7e475)

***

To run your own node, you can use the following Tools/Guides:

## IPFS Pinning

* [Hicetnunc IPFS Pinning](https://gist.github.com/mattdesl/47f4ea12ea131eed8401bdacf95a1f47) by Matt DesLauriers
* [Running IPFS node to pin content](https://twitter.com/antic/status/1374417104489697283?s=20) by Adam Eivy
* [Pinata Pinning Tool](https://www.youtube.com/watch?v=FFNF0RX2O_k) (_Good for non-tech savvy people_)
* [Browser extension to pin from the browser](https://github.com/ipfs/ipfs-companion)

### Further Reading
* [What is an IPFS Pinning Service?](https://medium.com/pinata/what-is-an-ipfs-pinning-service-f6ed4cd7e475)
* [Do You Really* Own Your NFT? Chances Are, You Don’t](https://thedefiant.io/do-you-really-own-your-nft-chances-are-you-dont/)
* [Pin files using IPFS](https://docs.ipfs.io/how-to/pin-files/)
* [IPFS, Filecoin, and ‘Content Persistence’](https://filecoin.io/blog/posts/ipfs-filecoin-and-content-persistence/)
* [Content addressing and CIDs](https://docs.ipfs.io/concepts/content-addressing)