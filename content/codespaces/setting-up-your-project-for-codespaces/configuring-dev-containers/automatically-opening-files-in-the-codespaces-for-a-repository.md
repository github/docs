---
title: Automatically opening files in the codespaces for a repository
shortTitle: Automatically opening files
intro: 'You can set particular files to be opened automatically whenever someone creates a codespace for your repository and opens the codespace in the {% data variables.product.prodname_vscode %} web client.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
redirect_from:
  - /codespaces/setting-up-your-project-for-codespaces/automatically-opening-files-in-the-codespaces-for-a-repository
---

## Overview

If there's a particular file that's useful for people to see when they create a codespace for your repository, you can set this file to be opened automatically in the {% data variables.product.prodname_vscode_shortname %} web client. You set this up in the dev container configuration file for your repository.

The file, or files, you specify are only opened the first time a codespace is opened in the web client. If the person closes the specified files, those files are not automatically reopened the next time that person opens or restarts the codespace.

{% note %}

**Note**: This automation only applies to the {% data variables.product.prodname_vscode_shortname %} web client, not to the {% data variables.product.prodname_vscode_shortname %} desktop application, or other supported editors.

{% endnote %}

## Setting files to be opened automatically

{% data reusables.codespaces.edit-devcontainer-json %}
1. Edit the `devcontainer.json` file, adding a `customizations.codespaces.openFiles` property. The `customizations` property resides at the top level of the file, within the enclosing JSON object. For example:

   ```json copy
   "customizations": {
     "codespaces": {
       "openFiles": [
         "README.md",
         "scripts/tsconfig.json",
         "docs/main/CODING_STANDARDS.md"
       ]
     }
   }
   ```

   The value of the `openFiles` property is an array of one or more files in your repository. The paths are relative to the root of the repository (absolute paths are not supported). The files are opened in the web client in the order specified, with the first file in the array displayed in the editor.

1. Save the file and commit your changes to the required branch of the repository.

## Further reading

* "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)"
