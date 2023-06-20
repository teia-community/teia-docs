# Don't Worry This Is A Placeholder

This file will not wipe out the wiki.

The wiki is a seperate repo, and will need to be synced up manually to this
folder after this PR is accepted.

Before merging this PR create a branch in the wiki repo like this:

```
teia-docs.wiki [master|✔]
$ git checkout -b pre-wiki-sync-action-pr
Switched to a new branch 'pre-wiki-sync-action-pr'
teia-docs.wiki [pre-wiki-sync-action-pr L|✔] 
$ git push origin pre-wiki-sync-action-pr
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/floydwilde/teia-docs.wiki.git
 * [new branch]      pre-wiki-sync-action-pr -> pre-wiki-sync-action-pr
```

This will allow you to restore the wiki if you accidently commit this file to
the master branch.
