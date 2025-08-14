---
id: collab-contract-guide
title: Collab contract Guide
sidebar_label: Collab contract Guide
sidebar_position: 3
---

## Collab contract Guide
This article covers how two or more wallets can collaborate to put up a work jointly on teia.art 
It is based on this video by @ktorn:

[![collabhowto](https://user-images.githubusercontent.com/97635650/157613103-23da4af4-b349-41c9-8905-241d70cbd1ac.JPG)](https://youtu.be/o-S6n4-cRvk)

Note that one artist will need to be the lead collaborator, or manager, in the sense that they will manage the collab contract and do all minting and swapping. There is a higher initial fee for collab contracts (currently around 1.5 tez) because a new smart contract is being created. The lead collaborator will pay all fees.
Once an OBJKT is minted, all collaborators will need to sign the work, to verify that they are in fact part of the collab. The OBJKT will appear under ‘collabs’ on each wallet that is a collaborator. It will show as 'unverified' until all collaborators have verified it.
Some wallet operations will take a little more time – up to a minute or two usually.

For Creating a contract for fundraiser events we highly recommend using the process as described below, with only one core contributor (the artists address) and the donation address(es) as BENEFICIARY, not contributors. This way, the donation addresses which are oft Contract addresses don't need to sign the piece in order for it to be verified and appearing on the artists profile.

You can set up multiple Core Collaborators (which would usually be the artists involved with the project) and multiple Beneficiaries (who are usually not creators, but who will get some share when the OBJKT is collected). These might be charities or other organisations who will receive a donation etc.
Referring to ktorns video, we call the manager or lead collaborator Alice, and the 2nd collaborator Bob. Each has a separate wallet.


## Setting up the collab contract

1)	To begin the setup as contract manager, sync wallet with teia.art then click on Collaborate on the menu.
2)	There are two tabs – Manage, for dealing with existing collabs, and Create, for creating new. Go to the Create tab.
3)	Add the Core Collaborators by adding their addresses in. Use the ‘add another collaborator’ link to add each. The collaboration contract supports upwards of 108 collaborators
4)	Set up the Shares, eg 2 collaborators who share equally, you can add equal numbers in the Shares field. Ytorn recommends treating shares as percentages. NOTE that shares cannot be changed after they have been committed.
5)	Click Next and you will see Beneficiaries. This is where you can add charity donations to the contract. (You can skip this with the Skip button)
6)	Add beneficiaries by adding their wallet address or choose from a project on the list of known projects. You can add multiple.
7)	Add the share amount for the beneficiary.
8)	Click the Next button allows you to review the Collaborators, Beneficiaries and their respective shares.
9)	Double, triple check this setup before clicking Create Collaborative Contract. Your wallet should open in order to confirm and pay for the creation of the contract (which is more expensive in storage fees than minting and swapping). As usual, this will take some moments to finalise.
10)	The collab contract is now set up, and the manager (Alice) is the only one who can mint and swap OBJKTs and manage other aspects.

Notes – the manager of the collab sets it up and as a consequence, they pay the fees (storage fee and gas).
Secondary collaborators will now see the collab contract under their Collabs but will not be able to manage it.
The manager of the collab cannot change collaborators or beneficiaries or the shares in the contract, once it is finalised.

### Managing the finalised contract

The manager of a contract can change the name and profile associated with the collab, by signing in to the collab contract.
On your own account (in this example, Alice’s) make sure it is synced
1)	Go to Collaborate on the menu, then click Sign In on the collab you wish to manage.
2)	The displayed wallet will now include both your own and the collab addresses. Now, menu items will relate to the collab contract rather than you personally (eg Edit Profile refers to the profile of the collab contract) 
3)	Edit the collab name and profile pic by clicking Edit Profile. This will cost you a small fee.
4)	To finish managing, click the menu and you should see Exit Collab, as well as Unsync.


In order to add (mint) OBJKTs, the collab manager must be signed in to the collab. (Or, on the Minting page, they can change who they are minting as). Note that only the manager can mint. Other collaborators will not be able to mint on this contract (and may see a message ‘you are not part of any collaborations..’ which is not quite accurate, because they are just not *manager* of any contracts)

### Minting an OBJKT
1)	The collab manager (Alice, in our example) will sign in to the collab. Then click on OBJKT(mint), on the menu.
2)	The Mint page is much the same as minting as an individual, but it will note that you are minting as the collab 
3)	Fill out the Mint form as usual, including royalties. When you are happy, Preview, then mint OBJKT. Again, the manager will pay the small minting fee.


### Verifying the OBJKT for all collaborators

1)	Once the OBJKT is minted, all collaborators (eg Bob in this case) will need to click on Collabs, when synced (synced with their own wallet) . You should see all the OBJKTs associated with the collab.
2)	click on the OBJKT. You will see initially a message that you are a participant but haven’t signed and also see UNVERIFIED beside the OBJKT.  Click  the ‘sign work now’ button
After artists have verified, the OBJKT will appear when they Manage Assets and look in Collabs.

### Swapping a minted collab OBJKT

The collab manager (Alice, in our example) has to swap the OBJKT
1)	The manager should sync their wallet then sign in to the collab. Click ‘manage assets’ to see the collab OBJKTs
2)	The option to Swap should appear. Click on ‘swap’ and fill out the form as normal.

The OBJKT is now swapped and ready to be collected.

## Setting up a contract for fundraisers

First, sync your wallet (1), go to the menu and select "collaborate" (2)

![01](https://user-images.githubusercontent.com/97635650/218320091-ec31201e-8cef-44e5-a2d0-97cc34691af4.PNG)


Then go to the "create" tab (3), add your wallet address to "Addresses" (4) and give your address shares for the split (this will determine how much shares of the sales revenue will be distributed to your wallet, more on this later. Then, hit "next" (6)

![02_02](https://user-images.githubusercontent.com/97635650/218322192-f54133a3-e8d1-4095-8062-a74bc1185650.PNG)



Under "Beneficiaries" set the fundraiser donation address (7.1) or - if available - select it from the suggested addresses/causes (7.2)

You can add other addresses manually or from that list if you want to, depending on which fundraiser address you want to donate to. of course you can also donate to multiple addresses. 

You have to give the Beneficiary address shares too (8): The ratio between the shares will be used to calculate the percentage split of revenues between the addresses you listed. This applies to both primary and secondary sales and can't be changed after the contract has been created. 

Note: For most fundraisers there are dedicated feeds on Teia's frontpage. For your Fundraiser Pieces to be included in these Feeds, at least 50% of the split needs to go to the events address.

Tip: If you want to donate 100%, put in 1 share for your wallet and 100000 shares for the beneficiary address.

Next, hit ... well ... "next" (9)

![03](https://user-images.githubusercontent.com/97635650/218320264-61f25a80-d898-4c53-88c2-946c4d016c36.PNG)


Click on "create collaborative contract" - confirm the transaction with your wallet and wait a few moments. 
Congratulations, you got your collab contract!

![04](https://user-images.githubusercontent.com/97635650/218320375-7d828e2f-6e64-4583-8aca-7eb82fa4d3b5.PNG)


The contract is now ready! To mint, you need to "log in" to your new contract, you can do that in the "manage" tab of the "collaborate" menu point (11+12)

![re06](https://user-images.githubusercontent.com/97635650/193135821-02e0cc31-49ad-4800-83c4-bb4edbd8703a.JPG)

![re07](https://user-images.githubusercontent.com/97635650/193135824-57534ecb-8dc4-440d-a575-cdbb83163890.JPG)

Now you should see the collab contract address in the top right corner and can now mint like you would do normally.
Pro tip: As long as you are logged into your collab contract, you can also give it a profile name on teia in the "settings" option of the menue.

![re08](https://user-images.githubusercontent.com/97635650/193135829-89bfe248-82ae-4116-9d34-c5ca32f08be8.JPG)

To make the collab piece appear in your "collab" tab on your teia profile, you have to sign the collab. you can do that on the objkt page of your piece minted with the contract directly under the image: "sign your contract now"

Congratulations, you are done!

## How to verify collab contract splits with tzkt

At the moment (Feb '23) Teias UI doesn't (yet) show the splits of a collab contract in the User interface. However, there is a quick and absolutely trustless way of checking the splits set in a Teia Collab contract: On the Profile page of a Collab contract, click on the Contract address (1). it will take you to tzkt, one of Tezos Blockchain explorers.

If its a collab contract, it must start with a "KT" (smart contract address) instead of a "tz" (normal wallet address).

![01](https://user-images.githubusercontent.com/97635650/218322621-b85a4623-d666-47d9-8e80-241eca3db308.PNG)

Lets first double check the address is the correct one (2). Then click on "storage"(3) to see the parameters set in the contract.

![02](https://user-images.githubusercontent.com/97635650/218322730-579d492d-f95e-453c-b9cf-dea6318a8ad8.PNG)

Here you can see how the splits are set: 10000 shares go towards the artists wallet (the one with "tz" in the beginning)
and 90000 towards the donation address (the one with the "KT" in the beginning, in this case its savepakistans donation address, it could be any other address. please check which event has which address). The % is calculated by the ratio of the shares. This means in this case, 90% of the sales will go towards the donation address, while 10% of the shares go towards the artists wallet.

![03](https://user-images.githubusercontent.com/97635650/218322706-2eab076f-9e77-4799-a556-1c4910df8835.PNG)


## Further info

more detailed write ups about the contract:
Here is the hicathon write up https://docs.hicathon.xyz/wg-32-sales-improvement-split-sales-and-royalties
This is a link to all the WG docs https://docs.hicathon.xyz/ 

