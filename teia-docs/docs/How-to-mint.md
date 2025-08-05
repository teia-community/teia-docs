### **mint**

1: _(verb)_ to create an OBJKT (NFT)
***

## Important Rules and considerations

If you mint NFTs on Teia we expect you to respect the [Core Values](https://github.com/teia-community/teia-docs/wiki/Core-Values-Code-of-Conduct-Terms-and-Conditions) and especially note the detail on [copyminting](https://github.com/teia-community/teia-docs/wiki/Core-Values-Code-of-Conduct-Terms-and-Conditions#about-copyminting). 

_**Copyminting** is the act of taking another's work and minting it as your own. It also includes the act of minting the same work twice, either on the same or separate platforms/blockchains. Your account will get restricted if you do this._

**Please note that minting the same media file twice, even accidentally leads to an account restriction! if you made a mistake and want to re-mint your OBJKT, make sure to burn the old one first!** [(How to burn)](https://github.com/teia-community/teia-docs/wiki/How-to-burn-%F0%9F%94%A5)

**If your account gets restricted check [how to unrestrict](https://objkt.com/asset/KT1XcFQv9EB2hoT484Cv58S2MvyMGX4C9TJq/1) it.**

## Step by step guide
Minting is the operation of creating an NFT - at this point you define the quantity of the NFT and information about it such as title and description. Once created, you will choose the number you want to make available and a price - this is a Swap operation.

It might be useful to prepare a text file with all the information you will need for minting - if the minting operation is interrupted you might lose what you typed in. OGs know from experience how frustrating it can be, especially if you wrote a classy and long description without saving a copy. 

1. You should have already created a wallet (we recommend [Temple](https://templewallet.com/) or [Kukai](https://wallet.kukai.app/)). The wallet needs to have enough funds to mint. Click on “Sync". Your browser will show a pop-up asking you to sync with your wallet.

   ![sync button](https://i.ibb.co/25CWLk3/sync.png)
   
   ![beacon wallet popup](https://user-images.githubusercontent.com/6487972/226333131-7487d30a-a622-4e57-b037-1d442fe2597f.jpg)


2. Approve the sync with your wallet.

3. Click the "Mint" link in the hamburger drop-down menu.

   ![minting page white ](https://user-images.githubusercontent.com/6487972/226333939-3dc61a26-73a1-4b8a-b4b4-d164f530e719.jpg)

4. Fill out the information for your OBJKT. Because all this information is stored on the tezos blockchain the edition size (quantity) you set is final; you can't add (although you can reduce by burning). 
   Title, descriptions, tags, and royalties are also final. You price the OBJKT (a Swap operation) after the minting. 
   You can upload display images/gifs depending on the media type (eg for mpgs). 

   You can also select a license (default is None (all rights reserved) and a language

### **Text Mints on Teia**

The Teia NFT marketplace now supports text mints of mimetype: text/plain. This allows for stories, poems, ASCII, and similar types of text-based art. The token's content is stored in IPFS.


### **How to Mint Text**



1. A new field on the minting page: "This is a text mint." Check this box.
2. The text mint input will automatically hide and replace the description box.
3. You will see the following fields on the minting form:
    * A checkbox for "Monospace Font Required."
    * There is a text area labeled "Typed Art Input." Depending on the monospace font required checkbox value, the text area renders the monospace (Iosevka font) or non-monospace (Source Sans Pro font).
4. As you type text into the text area, a rendered preview of that text is displayed below it.
5. The preview page is displayed once you click the "Submit" button.

![textminting](https://github.com/teia-community/teia-docs/assets/564979/d339a271-6322-4b1f-b804-99423f2368ee)

**Note:** The "monospace" tag is automatically added. The cover and thumbnail images are automatically generated based on the text input and the font selected. The description will also automatically be replaced by the text mint input.

You can view an example: [OBJKT 850488](https://teia.art/objkt/850488)

Source Sans Pro was selected for text mints as it's the default font (non-mono) on Objkt.com. This ensures text is encoded correctly and displayed as intended on Objkt.com and Teia.art. Currently, it seems that Objkt.com does not provide much monospace support for text mints, and a feature request has been raised here:[ https://roadmap.objkt.com/b/software-feature-request/use-a-monospaced-font-for-text-tokens/](https://roadmap.objkt.com/b/software-feature-request/use-a-monospaced-font-for-text-tokens/)

