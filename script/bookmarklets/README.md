# Bookmarklets

The [bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet) in this directory are browser shortcuts that may help with reviewing GitHub documentation. We may eventually build the functionality they provide into Docs preview environments, but these are handy hacks for now.

## Installing bookmarklets

For each bookmarklet described below, create a new bookmark in your browser with a descriptive name, open the JavaScript file and copy its contents, and paste the JavaScript _as the bookmark's URL_.

Clicking the bookmark will then execute the JavaScript.

⚠️ For Safari, you'll need to do the following:

1. Go to **Safari** > **Preferences** > **Advanced** and enable **Show Develop menu in menu bar**. 
2. Go to **Develop** and enable **Allow JavaScript from Smart Search field**.

## "View in development" toggle

[`script/bookmarklets/view-in-development.js`](./view-in-development.js)

When you're looking at a page on docs.github.com or a preview server at preview.ghdocs.com, clicking this bookmarklet will load the same path you're viewing but on your local server running at localhost:4000.

## "View in production" toggle

[`script/bookmarklets/view-in-production.js`](./view-in-production.js)

When you're looking at a page on a preview server at preview.ghdocs.com or your local server running at localhost:4000, clicking this bookmarklet will load the same path you're viewing but on the live documentation site at docs.github.com.

## Open a docs article in VS Code

[`script/bookmarklets/open-in-vscode.js`](./open-in-vscode.js)

When you're looking at a page on either docs.github.com, preview.ghdocs.com, or localhost:400, clicking this bookmarklet will open the source Markdown file from your local checkout in VS Code.

The installation requires a few steps:

1. Copy the contents of [`script/bookmarklets/open-in-vscode.js`](./open-in-vscode.js).
1. Browse to https://chriszarate.github.io/bookmarkleter/ and paste the code into the box.
1. Find the path of **your local checkout** of the docs repo you want to open files from (for example, `/Users/<USERNAME>/repos/docs`).
1. Paste the path in place of where it says `REPLACE_ME` in line 1 (make sure to leave the single quotes around it).
1. Change the title to something like `Open in VSC`.
1. Drag the generated link onto your bookmarks bar.

## Add preview links to PRs

[`script/bookmarklets/add-pr-links.js`](./add-pr-links.js)

This bookmarklet modifies the `Files changed` page of a GitHub pull request that has a current staging deployment. For each Markdown file in the diff view, it adds links to the preview deployment of the file for each version: `FPT / GHEC / GHES / AE`. (Some of these may redirect to another version or 404 if that version of the page doesn't exist.)

Note: readable JavaScript source lives in `script/bookmarklets/pr-link-source.js`. The bookmarklet code was generated via https://chriszarate.github.io/bookmarkleter.
