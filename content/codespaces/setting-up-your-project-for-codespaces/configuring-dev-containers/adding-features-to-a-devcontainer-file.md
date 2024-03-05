---
title: Adding features to a devcontainer.json file
shortTitle: Adding features
intro: 'With features, you can quickly add tools, runtimes, or libraries to your dev container configuration.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
redirect_from:
  - /codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file
---

{% data reusables.codespaces.about-features %} Use the tabs in this article to display instructions for each of these ways of adding features.

## Adding features to a `devcontainer.json` file

{% webui %}

1. Navigate to your repository on {% data variables.product.prodname_dotcom_the_website %}, find your `devcontainer.json` file, and click {% octicon "pencil" aria-label="Edit this file" %} to edit the file.

   If you don't already have a `devcontainer.json` file, you can create one now. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)."
1. To the right of the file editor, in the **Marketplace** tab, browse or search for the feature you want to add, then click the name of the feature.

   ![Screenshot of the "Marketplace" tab with "Terra" in the search box and the Terraform feature listed in the search results.](/assets/images/help/codespaces/feature-marketplace.png)

1. Under "Installation," click the code snippet to copy it to your clipboard, then paste the snippet into the `features` object in your `devcontainer.json` file.

   ![Screenshot of the "Marketplace" tab showing the installation code snippet for Terraform.](/assets/images/help/codespaces/feature-installation-code.png)

   ```jsonc
   "features": {
        // ...
        "ghcr.io/devcontainers/features/terraform:1": {},
        // ...
	}
    ```

1. By default, the latest version of the feature will be used. To choose a different version, or configure other options for the feature, expand the properties listed under "Options" to view the available values, then add the options by manually editing the object in your `devcontainer.json` file.

   ![Screenshot of the "Options" section of the "Marketplace" tab, with the "version" and "tflint" properties expanded.](/assets/images/help/codespaces/feature-options.png)

   ```jsonc
   "features": {
        // ...
        "ghcr.io/devcontainers/features/terraform:1": {
            "version": "1.1",
            "tflint": "latest"
        },
        // ...
	}
    ```

1. Commit the changes to your `devcontainer.json` file.

The configuration changes will take effect in new codespaces created from the repository. To make the changes take effect in existing codespaces, you will need to pull the updates to the `devcontainer.json` file into your codespace, then rebuild the container for the codespace. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)."

{% endwebui %}

{% vscode %}

{% note %}

To add features in {% data variables.product.prodname_vscode_shortname %} while you are working locally, and not connected to a codespace, you must have the "Dev Containers" extension installed and enabled. For more information about this extension, see the [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

{% endnote %}

{% data reusables.codespaces.command-palette %}
1. Start typing "add dev" then click **Codespaces: Add Dev Container Configuration Files**.

   ![Screenshot of the Command Palette, with "add dev" entered and "Codespaces: Add Dev Container Configuration Files" listed.](/assets/images/help/codespaces/add-prebuilt-container-command.png)

1. Click **Modify your active configuration**.
1. Update your feature selections, then click **OK**.
1. If you're working in a codespace, a prompt will appear in the lower-right corner. To rebuild the container and apply the changes to the codespace you're working in, click **Rebuild Now**.

   ![Screenshot of the message: "We've noticed a change to the dev container configuration." Below this is the "Rebuild Now" button.](/assets/images/help/codespaces/rebuild-prompt.png)

{% endvscode %}
