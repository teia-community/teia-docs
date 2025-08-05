# How to Contribute to Teias Code

The Teia Marketplace is maintained by the community and relies on volunteer work for updates and new features. Every little help is welcome: No matter if you only have a little bit of your time to give or just want to bring in that one feature you want to contribute.
If you are just getting started with coding or want to learn more about the Teia codebase, please feel free to come to the #general-dev channel of [the Teia Discord Server](https://discord.gg/QckkbVMcWu) and ask for assistance! If Git flow is something new to you, don't feel intimidated, come and join us on Discord and we'll take the time to help.

Thanks for your willingness to help with this project.

You can contribute to Teia in the following ways: 
* Fix bugs
* Code development
* Maintain documents
* Translate documents

You will need to have basic Git skills and have a GitHub account.

## Getting started

If you want to start helping with developing, you can take a look at the [Github issues tagges as "good firt issue"](https://github.com/teia-community/teia-ui/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) - those should be easy and quick to do and can help with getting started with the code base

## How to set up a pull request

We will be using a Git flow approach. This means that you will need to create a feature branch from the `develop` branch, write all your code there, and then when you submit your PR you submit it against the `develop` branch. Once the features on `develop` are tested and ready to push to production, an Admin will create a PR from `develop` to `main` and kick off a deployment.

Keep your pull request as small as possible so it's easier to add it to the main repository. 

### Here are the steps to contribute
- Create a fork of [https://github.com/teia-community/teia-ui](https://github.com/teia-community/teia-ui)
- Create a feature/fix branch on the fork using the following fork naming convention: `<feature-or-fix>/<feature-name-or-issue-id>`
- Implement the feature/fix
- Create a pull request to teia-ui
- Verify the [automated build](https://github.com/teia-community/teia-ui/actions) succeeded
- Request a code review

If all goes well, your pull request is merged. 


## Learning Resources
[OBJKT NFTs](https://leonnicholls.medium.com/hic-et-nunc-nfts-61743765b2ac?source=user_profile---------6----------------------------)

[Hicdex: the Hic Et Nunc indexer](https://leonnicholls.medium.com/hicdex-the-hic-et-nunc-indexer-bd45f27a228f)

[OBJKT Metadata](https://leonnicholls.medium.com/hic-et-nunc-metadata-40e594530e31)

[Minters for Hic Et Nunc](https://leonnicholls.medium.com/minters-for-hic-et-nunc-8b244b3d7ce0?source=user_profile---------1----------------------------)

[Hic Et Nunc Smart Contracts (Part 1)](https://leonnicholls.medium.com/hic-et-nunc-smart-contracts-part-1-e4ad5d0934b9)

## Components

When creating a component you need to provide a few properties in order to render the component properly. Try to avoid creating prop drilling, or even accessing react context in a component. The components should be as dumb as possible. The only place where you should have access to API requests, or React.Context is at the page level (`src/pages/*`).

In terms of standard its a good practice to first do global imports, then relative imports and finally scss imports. So a component would look something like this:

```jsx
import React from 'react' // a global import
import { Button } from '../button' // a relative import
import styles from './styles.module.scss' // a sass import

export const MyComponent = () => {
  return <div className={styles.container}>My Component</div>
}
```

There are some auxiliary components that aren't doing much besides aiding with the layout. A good example of that is the `/src/pages/objkt-display` where you have `<Container/>` and `<Padding />`. These components are similar to what `reactstrap` provides, but we're trying to minimize our bundle size, so we're reducing on dependencies.







