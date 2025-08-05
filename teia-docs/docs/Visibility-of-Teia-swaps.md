## Background

### Funding through marketplace fees
  
One major difference between Web2 and Web3 platforms (such as NFT marketplaces) is the funding model: Web2 sustains through ads, data, or premium services (subscriptions). Blockchains and decentralised applications instead rely on fees paid by their users. On Tezos, most NFT marketplaces charge a 2.5% fee that is applied to each sale on the smart contract.
  
This results in a money flow dynamic that many participants miss out:  
**All of the platform fees, captured in the final step, need to fund all the preceding steps.**

The sale of an NFT and resulting fees can be independent of where this NFT was created, seen, curated or hosted. In fact, each step of the process can execute independently in various interconnected platforms, tools and services.

![life of your nft-01](https://user-images.githubusercontent.com/97635650/159985332-d161b623-1446-4c0f-a982-5a044f9713e0.jpg)

## Cross-platform compatibility

Here is a [compatibility sheet](https://docs.google.com/spreadsheets/d/11xbk3V2SfdpSSSGfkz3Tr3I2ikPEaOFAX8khX4zDvhA/edit?usp=sharing) of cross-platform NFT compatibility (**visibility** of tokens) documented by community member [crcdng](https://twitter.com/crcdng):

### Token compatibility across tezos platforms (mint)
_Which marketplays shows which type of Token?_
![Compatibility_mint](https://user-images.githubusercontent.com/97635650/163868776-feba206d-2029-42f2-86df-3333776fe09b.JPG)

### Swap/Listing compatibility across tezos platforms (swapping contract support) **THIS CHART IS NOT FULLY UP TO DATE**
_Which marketplaces supports which marketplaces swaps/listings?_
![compatibility_swap](https://user-images.githubusercontent.com/97635650/163869147-d12102b0-5c54-4778-90e1-ad8db4372581.JPG)


Free choice of many marketplaces is good for users, but it poses a challenge for service providers who typically charge all their fees during the sale step (exeption: Fxhash has mint fees and Versum has tiny utility token fee). This means that only the provider of the listing contract receives the platform fees. This is usually the same platform that the NFT was minted and displayed on, but as Teia gets its own contracts, Versum prepares to index more tokens and Objkt.com being the biggest aggregator of all, it becomes complicated. 

**Showing (indexing) a token, displaying its listings/swaps, and allowing to create new listings are all different things.** 


### The Teia marketplace contract

On March 20th Teia switched from hicetnuncs v2 marketplace contract to Teias own marketplace contract.
This means, [marketplace fees](https://github.com/teia-community/teia-docs/wiki/Marketplace-Fees) collected with these swaps are now going to the Teia community Multisig Wallet, that is controlled by about 15 rotating members of the Teia community, and can be spent on Teias voted on budget. new swaps on teia executed after the contract went live are automatically swapped onto the teia marketplace contract, old swaps need to be reswapped in order to be on the teia swapping contract.

The hicetnunc v2 marketplace contract directs its platform fees through to hicetnunc2000lab, and hicetnunc has no plans to support non-hicetnunc contracts.

teia.art will keep on supporting the hicetnunc v2 swapping contract for the foreseeable future but new swaps on teia will be created onto the new teia smartcontract.

>Teia will keep on using hicetnuncs OBJKT minting contract for the time being. that means the OBJKTs minted on teia will show up on all marketplaces that show hicetnunc OBJKTs (i.e. hicetnunc.xyz, objktcom, rarible, hic.af, etc) this won't change no matter which platform supports which swapping contract. This article is only about which “listings/swaps” will appear on which site.

## why does my swap (=listing price) not show up on hicetnunc/hic.af...?

In order for those swaps to appear on other marketplaces like hicetnunc, hic.af, those marketplace need to support and index the Teia swaps. This means the marketplaces and community tools need to [change their indexers](https://github.com/teia-community/teia-docs/wiki/Indexer-changes-for-Teia) and adjust their UI a bit and it's up to the marketplace owner(s) to decide which swaps they want to index.

>if a marketplace X supports the swapping contract of marketplace Y, it means that OBJKTs swapped for trade on the marketplace Y contract will be also tradeable on marketplace X and even though the token got traded on marketplace X the fees will go to marketplace Y (if bought through the Y contract)

![FP8F3-7aQAAayeu](https://user-images.githubusercontent.com/97635650/162614253-3caf6e3b-bbf9-484b-bdb3-b21d1aa927e1.jpg)

## Mutual Swap integrations

In the [community vote for mutual Teia/objkt.com listings](https://vote.hencommunity.quest/vote/QmPDYWmGdxae8gUxqiPa4rkuQCc8P6sggLvUi5HQrrCzug) the Teia community decided that it wants to show swaps done on objktcom on teia.art as long as objktcom supports teia swaps.
Since March 9th, 2022 mutual swap support for teia and objktcom is live

Versum.xyz is indexing OBJKT Tokens now and Teia and Versum will show swaps done on each others marketplaces. Similar to the ObjktcomxTeia swap integration, this has been decided via a [Community Vote](https://vote.hencommunity.quest/vote/QmQdgL954By1DNuam2abaQd4B8o9UzWaJgrfsK9xjabWQg#votes). The TeiaxVersum swap integration is not live yet. (October 30th, 2022)

The Teia is always looking for ways to increase the visibility of the Teia marketplace contract by getting more such swap integrations with other marketplaces ready. The OBJKT pages at Teia could become a place where collectors can find all the listing prices from different marketplaces and compare all the available listing prices. 

## which marketplace currently supports which swaps?

### If you swap on *Teia.art* 

#### your listing prices will appear on:
- Teia.art
- Objkt.com
- Versum.xyz
- Henext.xyz
- Nftbiker.xyz (live feed and other tools)

### if you swap on **Henext.xyz**, **hic.af** or **hicetnunc.miami** 

These marketplaces only use/support hicetnunc v2 marketplace contract.

#### your listings will appear on:
- Teia.art
- objktcom (reactivated)
- henext.xyz
- hic.af
- Nftbiker.xyz (live feed and other tools)
- hicetnunc.miami

### if you swap on *objkt.com* 

Special case: since the objk.com swap contract is non-custodial the tokens will remain in your wallet when you list them.

#### your listings will appear on
- objkt.com
- teia.art
- Versum.xyz (soon)
- nftbiker.xyz (live feed and other tools)

### if you swap on *Rarible* 

Special case: since the Rarible swap contract is non-custodial the tokens will remain in your wallet when you list them.
Teia is open to talk to Rarible about a possible swap support.

#### your listings will appear on
- Rarible


