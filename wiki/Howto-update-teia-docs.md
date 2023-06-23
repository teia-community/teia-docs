## Update Documentation in the Teia Docs Repository

This guide provides step-by-step instructions on how to update a documentation file stored in the /wiki folder of this GitHub repository. The process involves navigating to the file, accessing the editing interface, and making changes using the built-in Markdown editor.

Note that formerly files were stored in the wiki repo of this, the Teia Docs repository, but they have now been moved to the /wiki folder.  When you edit a file in the /wiki folder on the main branch, a GitHub action will be triggered and that file will be pushed to the internal GitHub wiki repo.  Likewise when any update is made using the GitHub wiki interface, that changed will be synced back to the /wiki folder.  This is only temporary until we have decied on another publishing workflow for our documentation using a tool like Docusaurus or Tinacms.

Eventually this documentation, this page you are reading now, describing how to update the
documentation, will be stored in the GitHub wiki for this repo, the Teia Docs
repo. Along with maybe a few other pages which explain what the Teia Docs repo
is for, how to update the documentation, and how to manage the documentation tools we decide to use.

## For Teia Organization members

### Just use the wiki interface as usual
For members of the Teia Community organization, you can update files using the GitHub wiki interface as usual.  You might want to do this if you normally use that interface which has a toolbar for adding headers, images and links etc...

In the future we might adopt another documentation editing tool, but for now this option to use the Github Wiki editing interface is available to you. 

### What if I want to create a PR for the change?

Optionally if you want to create a PR for your update, to to the Teia Docs code repository and find the /wiki folder mentioned above.  You will see a listing of .md files.  Click on the file name of any of those files and you will be taken to a markdown editing interface for that page.  Click the pencil icon to edit the page.  

![A screenshot of the code repository browser.](https://raw.githubusercontent.com/teia-community/teia-docs/main/wiki/img/howto_teia_docs/updatedocs.png)

You will find it doesn't have a handy toolbar for editing the file, but you may want to use this interface if you are just making some substantial updates to the text of the document and would like to start a peer review process.  When you have made your edits click the green "Commit changes..." button: 

![Code repository editor screen.](https://raw.githubusercontent.com/teia-community/teia-docs/main/wiki/img/howto_teia_docs/updatedocs2.png)

### I want to create a new page
Use the wiki interface, in the code repository browser click the + sign above the file listing on the left side navigation menu and click "Add file", or clone the repository locally and add your file using your terminal or IDE.

## For any GitHub user not a member of the Teia Organization

If you are not a member of the Teia Organization but you wish to contribute
a documentation update, the process is similar but you must first fork the Teia
Docs repository.

Once you have your own fork, proceed to make the changes or updates you wish to
make then commit your changes to your fork and issue a Pull Request.
