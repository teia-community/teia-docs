---
id: howto-update-teia-docs
title: How to Update Teia Docs
sidebar_position: 5
---


## Update Documentation in the Teia Docs Repository

*Note*: We are in the process of migrating the wiki documentation to a Docusaurus
based site, so this guide may change in the future.  For now, the wiki
documentation is still available and can be updated as described below.

See:

* https://github.com/teia-community/teia-docs/pull/18

---

This guide provides instructions on how to update a documentation file stored in the /wiki folder of this GitHub repository.

Note that formerly files were stored in the "internal wiki repo" of this, the Teia Docs repository, but they have now been moved to the /wiki folder.  When you edit a file in the /wiki folder on the main branch, a GitHub action will be triggered to push the change to the internal GitHub wiki repo.  Likewise when any update is made using the GitHub wiki interface, that change will be synced back to the /wiki folder.

## For Teia Organization members

### Just use the wiki interface as usual
For members of the Teia Community organization, you can update files using the GitHub wiki interface as usual.  You might want to do this if you normally use that interface which has a toolbar for adding headers, images and links etc...

In the future we might adopt another documentation editing tool, but for now this option to use the Github Wiki editing interface is available to you. 

### What if I want to create a PR for the change?

Optionally if you want to create a PR for your update, you can go to the [Teia docs code repository](https://github.com/teia-community/teia-docs) and find the [/wiki](https://github.com/teia-community/teia-docs/tree/main/wiki) folder mentioned above.  You will see a listing of .md files.  Click on the file name of any of those files and you will be taken to a markdown editing interface for that page.  Click the pencil icon to edit the page.  You will find that the markdown editor in the code repository, does not have the handy wiki editing toolbar for adding headings, links, images etc... so you might prefer to continue to use the wiki for editing, and the changes you make there will be synced back to the /wiki folder.

![A screenshot of the code repository browser.](https://raw.githubusercontent.com/teia-community/teia-docs/main/wiki/img/howto_teia_docs/updatedocs.png)

You may want to use this interface if you are making some substantial updates to the text of the document and would like to start a peer review process.  When you have made your edits click the green "Commit changes..." button: 

![Code repository editor screen.](https://raw.githubusercontent.com/teia-community/teia-docs/main/wiki/img/howto_teia_docs/updatedocs2.png)

And this will help you create a new branch and make a PR with a "Propose Changes" dialog box.  Be sure to click the option for "create new branch" and Github will suggest a branch name for you.  

![Screenshot from 2023-06-23 10-42-54](https://github.com/floydwilde/teia-docs/assets/201620/30a608ef-fe15-4e48-93a8-cea4ccac3590)

### I want to create a new page

Use the wiki interface, or in the code repository browser click the + sign above the file listing on the left side navigation menu and click "Add file", or clone the repository locally and add your file using your terminal or IDE.

## For any GitHub user not a member of the Teia Organization

If you are not a member of the Teia Organization but you wish to contribute
a documentation update, the process is similar but you must first fork the Teia
Docs repository.

Once you have your own fork, proceed to make the changes or updates you wish to
make then commit your changes to your fork and issue a Pull Request.

You can even use the wiki editing feature in your fork to edit files, which will be synced back to the main branch of your fork where you can then prepare a PR back to the main Teia Docs repo. 
