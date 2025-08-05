if you want to use objktcom to dedicate a % of your swap towards a given charity address, you can set up an "advanced" split swap. 
This is especially useful when you want to donate a Token that you have already minted, so [Teias split contract](https://github.com/teia-community/teia-docs/wiki/Collab-contract-Guide#setting-up-a-contract-for-fundraisers) is not an option.

Note that advanced listings are only possible on primary market.

[You can also check out the guide on the same topic on objktcoms wiki (click)](https://docs.objkt.com/product/product-guides/token-buy-sell/advanced-sale)



This is how it goes:

![listings guide gif by klick.dev](https://user-images.githubusercontent.com/97635650/219485699-9296ae81-e8c5-42b1-b70c-f0080aafd1b4.PNG)
*(guide-gif by [Klick.dev](https://twitter.com/klickdotdev))*

of course you need to be logged into the acc you want to swap from, then head over to the page of the token and to the "action" tab (1) and hit "advanced sale" (2)

![ob01](https://user-images.githubusercontent.com/97635650/194743600-a4ee2aa3-fde7-4890-a70e-7ad78fea8cd7.JPG)

like with any other swap, fill out the number of editions you want to swap and at which priche (3) and hit the "+" to add more beneficiaries to the swap

![ob02](https://user-images.githubusercontent.com/97635650/194743602-e333e413-7416-4fe0-9ce2-e8c7c211a466.JPG)

Put in the donation address (5), set the splits in % (in the case of this example 10% will go towards the creators address and 90 % will go towards the donation address.

Finally, hit "list token" (7), approve the transaction in your wallet and you are done!

![last](https://user-images.githubusercontent.com/97635650/217669931-bad917b7-3b0b-47d3-b691-3642da80a9ca.PNG)



if the token sells via this listing, 10% of the proceeds will go towards the seller and 90% towards the donation address


## Check the splits of a objktcom listing on TzKT


You'll be able to identify a "advanced swap" on objktcom by looking at the listings tab: if there is a split on the listing, you will be able to see a "group" icon!

![listings](https://user-images.githubusercontent.com/97635650/219139084-63cc0ac6-7f91-4642-b8b0-abe49fcc5a18.PNG)


You can easily check out the split %s by hovering your mouse over the group icon:

![shares_mouseover](https://user-images.githubusercontent.com/97635650/219139056-a5b0f24e-e8b9-4efa-913b-5a2c4adce54c.PNG)

### Secondary Royality splits

if you are collecting on **secondary market (= swaps that have been done by a collector, not the NFTs creator), ythere is currently no way of setting advanced listings: The revenue will go towards the wallet that has listed the token. 

However, The artist can set a % of secondary royalities - these roxalities (usually between 10-25%) will go toward sthe addresses the artist defines upon mint. If an artist donates their royalities % to a donation address, it means that on every secondary trade, a % of the royalities will go towards the donation address the artist has defined while minting.

Tokens that donate royalities, will get displayed with a banner stating the cause:

![banner](https://user-images.githubusercontent.com/97635650/218900430-cef5c714-3013-4bb1-968a-8f3c642947ae.PNG)


if you want to check the address(es) the donations go to, simply click on the "royalities %"

![sec_01](https://user-images.githubusercontent.com/97635650/218901055-5f96476d-6dfc-4569-915b-f2170bbb3adb.PNG)


a pop up will show you the addresses set for royalities

![sec_02](https://user-images.githubusercontent.com/97635650/218901134-05988df1-c1c5-47e2-a4c8-6bc37decfe1e.PNG)


***


For the curious ones and all the blockchain fanatics: how to identify these shares on the blockchain explorer ... read on here:


### checking shares on TzKT

If you are collecting pieces **swapped by their artist (=primary market)** you can check if a "split" goes towards a donation wallet by looking at tezos blockchain explorer.

Similar to checking [Teias split contracts](https://github.com/teia-community/teia-docs/wiki/Collab-contract-Guide#how-to-verify-collab-contract-splits-with-tzkt) on chain for verifying the split addresses and their shares we will need to take a look at the blockchain because objktcoms UI doesnt yet show primary splits in their user interface.

First lets go to the token page on objktcom, scroll down and open the "history" tab (1) of said token, and look for the "listing" action in the history. to the very right of that operation you can see a link symbol (2). click it!

![01](https://user-images.githubusercontent.com/97635650/218350883-a459b700-8e50-4363-b8b9-4484f395f15a.PNG)


This is where it should land you: TzKTs page for this blockchain event. on the left, you can see theres two things happening with the listing operation: "update_operators" and "ask". what we are looking for is the "ask" one (3), **for primary listings** click on that and then click on the "storage" symbol (4) for that operation. a new window should pop up.

![02](https://user-images.githubusercontent.com/97635650/218350870-248fd09c-5413-4f70-b2ff-898bdbc16c2d.PNG)

and here we are! under "amount" you can see how many shares go towards which address (5). in the first example, all shares available go towards the donation contract for "TezQuakeAid"


**ATTENTION: for secondary listings** the "parameters" in the storage tab will only give you the shares of **secondary royalities** 



![03](https://user-images.githubusercontent.com/97635650/218350856-d1743d75-c77d-40cc-b565-39db3dd5b2bd.PNG)

in the second one 8770 shares go towards the donation address and 980 shares go towards the artists own wallet. if we want to get the % we just have to divide the two: 10% for the artist, 90% for the fundraiser.

![03 2](https://user-images.githubusercontent.com/97635650/218350819-b6522a54-ebd2-4359-bd9e-c6d3faa3ff19.PNG)





