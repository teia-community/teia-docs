# Teia Documentation

Welcome to the official Teia documentation repository. This repo hosts both the **Teia Docs Site** — published at [docs.teia.art](https://docs.teia.art) — and the **Teia Wiki** for early drafts and notes.

## ✍️ Teia Docs Site

The official Teia documentation is built with [Docusaurus](https://docusaurus.io/) and deployed to GitHub Pages from the [`teia-docs/`](https://github.com/teia-community/teia-docs/tree/main/teia-docs) folder in this repository.

As decided in [poll #46](https://teia.art/poll/46), the GitHub Pages site is now configured to use the **teia.art** domain.

### 🛠️ How to Update Teia Docs

➡️  https://docs.teia.art/dev-howtos/howto-update-teia-docs

## Repository Structure

- `DocumentArchive/` — Historical and reference documents preserved for archival purposes (not actively maintained).
- `teia-docs/` — Source for the Docusaurus-powered documentation site.  
- `wiki/` — Mirror of the GitHub Wiki for drafts and early notes.  
- `.github/workflows/` — Actions to sync wiki content and deploy the docs site.

## 📚 Teia Wiki

The [Teia Wiki](https://github.com/teia-community/teia-docs/wiki) serves as a **staging area** for documentation drafts and early notes.  
It is not the final home for documentation — use it to outline ideas or propose edits before they move to the main docs site.

- Members of the [Teia Community](https://github.com/teia-community) GitHub organization can edit the wiki directly.  
- The wiki content is mirrored in the [`wiki/`](https://github.com/teia-community/teia-docs/tree/main/wiki) folder, so edits can also be made via pull requests if review is desired.  
- A GitHub Action keeps the `wiki/` folder and the GitHub Wiki in sync automatically.

## 🤝 Contributing

You can help improve Teia documentation in several ways:

- 🛠️ [Follow the how-to guide](https://docs.teia.art/dev-howtos/howto-update-teia-docs) to update the docs site.  
- ✍️ Draft or edit pages in the [Teia Wiki](https://github.com/teia-community/teia-docs/wiki).  
- 💬 Review pull requests and participate in issue discussions.  
- 🌍 Contribute translations and accessibility improvements.

Together we're building clear, welcoming documentation for the Teia community.

## 🔧 Updating Dependencies

The docs site is a static Docusaurus build and not exposed to user input, so it's low-risk for security vulnerabilities. However, we aim to keep dependencies patched to track the latest stable versions.

To update dependencies:

```bash
cd teia-docs # Docusaurus is in a sub directory of this repo
rm -rf node_modules package-lock.json  # Remove old packages and lock file
npm install           # Regenerate with latest compatible versions
git add package.json package-lock.json
git commit -m "chore: update npm dependencies"
git push
```

Dependabot PRs are not always able to be created automatically so sometimes you have to do this.
