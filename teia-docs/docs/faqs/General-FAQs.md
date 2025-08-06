---
id: general-faqs
title: General FAQs
sidebar_label: General FAQs
sidebar_position: 1
---


## I received some tez, so I suppose I sold work. But where do I see which OBJKT I sold?

First of all, congratulations.

You can check your recent sales activity using your wallet interface (such as [Temple Wallet](https://templewallet.com/)). Click on your tez balance to open the **Activity** tab, which shows incoming and outgoing transactions. For more detail, click on a transaction to view it in a blockchain explorer like [TzKT.io](https://tzkt.io/) or [Better Call Dev](https://better-call.dev/), where you can see which specific OBJKT was transferred or sold.

For more advanced tools, including notification bots and artist dashboards, see the [Selling Tools section](https://github.com/teia-community/teia-docs/wiki/Tools-made-by-the-community#selling-tools) of the community tools page.

## How do I get a notification when something sells?
You can use the telegram notification bot or Cryptonoises bot that we have listed in the [Tools/Selling Tools](https://github.com/teia-community/teia-docs/wiki/Tools-made-by-the-community#selling-tools) section

## How do I add my name and avatar to my profile?
Please see [Editing your profile](https://github.com/teia-community/teia-docs/wiki/Edit-your-profile)

## What video formats/codecs are supported?
We recommend mp4 (with a H.264 codec), although you can mint webm, mov, and ogv. 

The H.265 codec for mp4 is currently [not supported by many browsers](https://caniuse.com/?search=h265), we recommend using the widely compatible  H.264 codec or checking out [other codecs' browser compatibilities](https://caniuse.com/?search=video) before minting/swapping. 

## Are there any file-size limits for objkts I mint?
Yes, currently (March 2023) the file size limit is 2 GB. 
Please note that filze sizes above 80mb might lead to problems or delays displaying the pieces!

## How are the files being stored? Can I be sure that the content of the OBJKTs won't disappear?

We upload minted files to nftstorage (which uploads to IPFS+Filecoin) and also pin everything on 2 dedicated servers.

As a reference, currently (April 2023), there are at 2,364,833 pins, totaling around 6TB of data for all of Hicetnunc+Teia OBJKTs.

This setup should be fairly resilient; however, the more people who pin the files, the better their access and safety. You can use tools like [NFTBikers' pinning tool](https://nftbiker.xyz/pin) to pin your collection or creations via a pinning service.

Additionally, we highly recommend backing up your collection on your local hard drive. Should the file get unpinned and become inaccessible on IPFS for some reason, you can restore any IPFS file from a local copy of the same file. [[ClubNFT](https://app.clubnft.com/)](https://app.clubnft.com/) offers a great tool for artists and collectors to locally backup their collection!

## I have an idea for a new feature or an improvement! Where can I submit it?
The official way to submit features to the developers is on the [github issues](https://github.com/teia-community/teia-ui/issues). There is also the #feature-requests channel in the [Teia Discord](https://discord.gg/94mdtxcY).

## Why does my swap not appear on other marketplaces/mirrors like hic.af?

Since we switched to the Teia marketplace contract for new swaps on teia, in order for those swaps to appear on other platforms, those platforms need to index the Teia swaps. We are currently working towards getting as many marketplaces as possible to support teia swaps. Hic.af plans to support teia swaps soon.

See also: [visibility of Teias swaps](https://github.com/teia-community/teia-docs/wiki/Visibility-of-Teia-swaps)

## Can I sell my OBJKTs on Opensea/Rarible?
**Opensea** - No. 
Opensea announced in February 2021 that they will be working with Tezos. They haven't announced any news since then. We can only hope this will be an option in the future.

**Rarible** - Yes, you can trade OBJKTs on Rarible. 

## Can I sell my objktcom collection on teia?
 
If you minted a collection on objkt.com it will only be visible and tradeable on objkt.com since it uses a different minting contract than Teia and Teia is currently only indexing OBJKTs minted with the hicetnunc minting contract (on objkts these OBJKTs appear as the "hicetnunc" collection)

## What's the difference between hicetnunc and teia? 

Hicetnunc (hen) is the first tezos nft platform and commenced officially on the first of March 2021. On the 11th of November, due to a number of reasons it was discontinued. A number of mirrors quickly appeared, using the open source code for hen. A team that has come to be called the teia community were given use of the mirror that used the domain hicetnunc.art. After much discussion it was agreed that the original name should not be used or referenced, and that a new name and an open source fork of the hen code would be pursued. A two month long naming process with several voting stages eventuated with the name Teia, and the domain teia.art went live on the second of February 2022. The original hen - hicetnunc.xyz - came back online on the 25th January 2022. The domain hicetnunc.art now points to the original hen site. [hen history](https://github.com/i3games/hen-timeline/blob/main/timeline.md)

## Why is my OBJKT not showing up on the latest feed?

You need to have registered/updated a profile. the current default feed shows the last OBJKTs purchased.

## I want to report a copyminter

Report a copyminter in the Teia [#report-copyminters](https://discord.gg/TKeybhYhNe) channel. Provide the following information for the copyminting team to investigate:
* A link to the offending account with the OBJKT in question.
* A link to the original artwork.

All copyminter operations are handled via the Teia account [restricted list](https://github.com/teia-community/teia-report/commits/main/restricted.json).
(see also: [About restricted accounts](https://github.com/teia-community/teia-docs/wiki/Core-Values-Code-of-Conduct-Terms-and-Conditions#3-terms-and-conditions---account-restrictions))

## How to avoid copyminters

see also: [Collecting NFTs safely](https://github.com/teia-community/teia-docs/wiki/Collecting-NFTs-Safely)

We take fraud and theft of artwork very seriously. A team works to remove inauthentic work and artists from the platform.
Ideally, verify every account you collect from. First, have they added artist information in the objkt description (check that it looks genuine)? Next, click on the artist name and check the profile of the account. Have they named the profile or is it just a tez wallet? Have they added profile verification in the form of twitter, web, discord, tzprofile etc? If they have none of these, you can check the wallet by clicking on it on their profile page directly by clicking on it on their profile page. It takes you to the tzkt block explorer. Check how old the account is. Warning signs - an account that is very new (< 2 days) esp if it has many objkts; no profile information; no verification information; brand new twitter account.

Unfortunately, there are people minting NFTs who did not create what they upload. These copyminters, as we call them, try to make a quick buck with art from other people. Collectors have to be very careful and use their own judgement to find out who the artists are and if the art is genuine.
Be aware that devious copyminters attempt to fool collectors by using very similar artist-names especially of big-selling artists or prior to popular notified drops (eg adding an extra letter or even just a fullstop at the end of the name). 
If the work seems very professional, has obvious signs of artistic effort and the price is very low with no artist information at all, be very careful - if you collect a work that is later found to be copyminted, it gets tagged as restricted and is essentially valueless. We recommend that you burn such objkts. [How to burn](https://github.com/teia-community/teia-docs/wiki/How-to-burn-%F0%9F%94%A5)

**Artists** - to make it easier for collectors, please [verify your profile](https://github.com/teia-community/teia-docs/wiki/Edit-your-profile#tezos-profiles-optional). Leave a link to any social profile or website in the description of your artwork, so potential buyers can validate the authenticity. 

## How can I promote my NFT or my NFT exhibition?
On the Teia Discord please only use the channel #shill for self-promotion. If you shill in other channels a big black cloud will descend on you (and your post will be deleted, possibly with unsmiling emojis).

## Where can I see overall statistics for the site?
https://nftbiker.xyz/stats/marketplace

## I want to create my own gallery. How do I do it?

This is currently being developed. We are not taking any pull requests at the moment to have a gallery featured but you will be able to make your own in the future. Meanwhile have a look at the various tools [Tools/Gallery Tools](https://github.com/teia-community/teia-docs/wiki/Tools-made-by-the-community#gallery-tools), some might need coding knowledge.

## Do you support multiple languages?
We are working on multiple language support on Teia. we also try to translate as many documents as possible to keep everything accessible. But currently teia.art is only available in English.

## General tips for participating in minting events

Of course, everyone is welcome to celebrate however they want (provided that they stay within our [rules and code of conduct](https://github.com/teia-community/teia-docs/wiki/Core-Values-Code-of-Conduct-Terms-and-Conditions)) but here are some voluntary guidelines and learnings from the past milestone events:

- Don't feel pressured into participating - it is supposed to be fun!
- Use the event tag without the hashtag in the tags when minting (e.g. “700kOBJKTs” or “objkt4objkt4”), so that your pieces will show up in the event filters of tools like [nftbiker.xyz](https://nftbiker.xyz/)
- use the event hashtag when tweeting out your piece on twitter
- **Open edition size and prices**: Generally, milestone events tend to work well with high edition numbers and low prices, but of course that's totally up to the artistalso for freebies using [hicetdono](https://dono.xtz.tools/) can be used to prevent hoarding
- Share your favorite pieces with artist and collector friends
- Collect 2 or 3 copies max of a particular mint so that as many people as possible can collect

## I want to do a OBJKT giveaway, what is the best way to do it?

Here are three suggested options for setting up giveaways:

- https://dono.xtz.tools - a tool that allows you to put up editions for free that can be claimed on dono.xtz.tools. The big advantage with this is that every wallet can only claim 1 edition (preventing hoarding) and you dont have to send the editions around. Those editions can only be claimed on dono.xtz.tools

- If you want to send giveaways to a number of wallet adresses, you can use [nftbikers giveaway tool](https://nftbiker.xyz/giveaway). You just have to put the adresses in the form and then it sends 1 edition from your wallet to all of the adresses.  

- You could just swap editions for 0 tez or a little bit like 0.01 tez on teia directly. The advantage here is that it can be collected on teia and objktcom directly, but if people want they can grab more than 1 edition, sometimes resulting in hoarding of free pieces.


