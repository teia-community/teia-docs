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

Not really necessary, but nice to keep a backup branch.

When the PR is merged, this placeholder will be commited to the wiki and all
other files removed from the current commit.  Remember this Git, nothing is
ever deleted.  Once the PR is merged, just roll back to the previous commit:


`git reset --hard HEAD~1`

In a test environment that looked like this for me:

```
$ git reset --hard HEAD~1
HEAD is now at ee46600 Update wiki 5f13791640302fdd2cef63bd64d752049239c3c5
✔ ~/Teia/floydwilde/teia-docs.wiki [master ↓·1|✔]
$ git push origin master --force
```

That will erase the placeholder and rollback to the previous commit with all of
the wiki files intact.
