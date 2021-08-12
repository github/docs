---
title: Web-based editor
intro: 'Use the web-based editor from your repository to create and commit code changes.'
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Web-based editor
---

{% note %}

**Note:** This web-based editor is currently in beta preview. You can provide feedback [in our Discussions](https://github.co/browser-editor-feedback).

{% endnote %}

## About the web-based editor

The web-based editor introduces a new, lightweight editing experience that runs entirely in your browser. With the web editor, you can navigate files and source code repositories from {% data variables.product.prodname_dotcom %}, and make and commit code changes. You can open any repository, fork, or pull request in the editor.

The web-based editor is available to everyone for free on {% data variables.product.prodname_dotcom_the_website %}.

The web-based editor provides many of the benefits of {% data variables.product.prodname_vscode %}, such as search, syntax highlighting, and a source control view. You can also use Settings Sync to share your own {% data variables.product.prodname_vscode %} settings with the editor. For more information, see the [Settings Sync guide](https://code.visualstudio.com/docs/editor/settings-sync) in the {% data variables.product.prodname_vscode %} documentation.

The web editor runs entirely in your browser’s sandbox. It doesn’t clone the repository, but instead loads your code by invoking the services' APIs directly from your browser. Your work is saved in the browser’s local storage until you commit it. You can commit your changes to persist any new work.

Because there is no associated compute, you won’t be able to build and run your code or use the integrated terminal. Only a subset of extensions that can run in the web will appear in the Extensions panel and can be installed. Likewise, support for certain programming languages may be more limited in the web.

## How to use the web-based editor

You can open any {% data variables.product.prodname_dotcom %} repository in the web-based editor in the following ways:

- Pressing the dot ( . ) key while browsing any repository on {% data variables.product.prodname_dotcom %}.
- Change the URL from "github.com" to "github.dev".

## Troubleshooting

If you have issues opening the web-based editor, try the following:

- Make sure you are signed in to {% data variables.product.prodname_dotcom %}.
- Disable any ad blockers.
- Use a non-incognito window in your browser to open the web-based editor.
