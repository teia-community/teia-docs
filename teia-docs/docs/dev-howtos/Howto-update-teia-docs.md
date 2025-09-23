---
id: howto-update-teia-docs
title: How to Update Teia Docs
sidebar_position: 5
---

# How to Update Teia Docs

Teia documentation is now published on our [Docusaurus site](https://docs.teia.art).

Drafts can be created anywhere you like—Google Docs, the GitHub wiki, Microsoft Word, or your favorite editor. Once a document is ready to be published, it should be added to the **`//teia-docs/docs/`** folder in this repository. Essentially, the documentation lives as Markdown files grouped in folders under this directory.

Once your pull request is approved and merged into `main`, the Docusaurus site will rebuild and your changes will be published automatically.

:::note Repo-root path syntax
We use `//` as syntactical sugar to indicate the **root of the repository**.  
For example, `//teia-docs/docs/` refers to the `docs/` folder inside the top-level `teia-docs/` directory at the repo root.
:::

For more information about the GitHub pull request workflow, see:
- https://docs.github.com/en/pull-requests

---

## Why Docusaurus?

We chose [Docusaurus](https://docusaurus.io/) as the foundation for Teia Docs because it gives us:

- **A modern static site** – Documentation is built into a fast, searchable website.  
- **Markdown-based workflow** – Writers can focus on simple Markdown files without worrying about web design.  
- **Structure** – Content can be structured in folders with sidebars and navigation automatically generated.  
- **Version control** – All docs live in Git, so we get history, reviews, and collaboration via pull requests.  
- **Extensibility** – Docusaurus supports themes, plugins, and customizations if we need to expand in the future.  

The goal is to make Teia’s documentation easy to maintain, easy to contribute to, and pleasant to read — while keeping everything in a single, open, and reviewable workflow.

---

## Drafting Documentation

- **Google Docs**: [gdocs.teia.art](https://gdocs.teia.art)  
- **GitHub Wiki**: The repo still has a [wiki](https://github.com/teia-community/teia-docs/wiki) if you prefer its interface.  
- **Other Tools**: Use whatever writing environment works best for you.

The important step is moving your finished draft into this repo’s `//teia-docs/docs/` folder. This is the Docusaurus site content, where finished docs are approved and published.

---

## Publishing Documentation (Teia Org Members)

1. Clone the [Teia Docs repository](https://github.com/teia-community/teia-docs) or edit directly in GitHub.  
2. Create a branch for your changes:

   ~~~bash
   git checkout -b docs/update-howto-docusaurus
   ~~~

3. Add or update the appropriate Markdown file inside `//teia-docs/docs/`.  
   - Example for this page’s location: `//teia-docs/docs/dev-howtos/Howto-update-teia-docs.md`  
4. Commit your changes and push the branch.  
5. Open a Pull Request.  
   - Ask one or two reviewers from the Teia Community to check it.  
   - Once merged, the Docusaurus site will rebuild and publish your changes.

---

## For Contributors Outside the Teia Org

If you’re not a member of the Teia GitHub organization:

1. Fork the Teia Docs repository.  
2. Make your changes in your fork.  
3. Open a Pull Request back to the main repo.

---

## Creating a New Page

To add a new document:

- Place the Markdown file in the most appropriate folder under `//teia-docs/docs/`.  
- Use frontmatter at the top of the file to define its ID, title, and sidebar position, e.g.:

  ~~~markdown
  ---
  id: new-doc-id
  title: My New Documentation Page
  sidebar_position: 3
  ---
  ~~~

- Submit it through a PR as described above.

---

## Notes on Legacy Wiki Content

Historically, Teia documentation lived in the GitHub wiki. That content was synced into this repo’s `/wiki` folder, but finished docs have since been migrated into the Docusaurus site (`//teia-docs/docs/`).

You can still use the wiki (or any other tool you wish) for drafting, but if you want to update or work directly on the published site, new work should go into the `//teia-docs/docs/` folder.
