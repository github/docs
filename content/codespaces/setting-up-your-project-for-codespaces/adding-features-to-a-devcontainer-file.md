---
title: Adding features to a devcontainer.json file
shortTitle: Adding features
intro: With features, you can quickly add tools, runtimes, or libraries to your dev container configuration.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
---

{% data reusables.codespaces.about-features %} Use the tabs in this article to display instructions for each of these ways of adding features.

## Adding features to a `devcontainer.json` file

{% webui %}

1. Navigate to your repository on {% data variables.product.prodname_dotcom_the_website %}, find your `devcontainer.json` file, and click {% octicon "pencil" aria-label="The edit icon" %} to edit the file.
   
   If you don't already have a `devcontainer.json` file, you can create one now. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)."
1. To the right of the file editor, in the **Marketplace** tab, browse or search for the feature you want to add, then click the name of the feature.

   ![Screenshot of the Terraform feature in the Marketplace tab, with "Terra" in the search bar](/assets/images/help/codespaces/feature-marketplace.png)
3. Under "Installation," click the code snippet to copy it to your clipboard, then paste the snippet into the `features` object in your `devcontainer.json` file.

   ![Screenshot of a code block in the Installation section of the Marketplace tab](/assets/images/help/codespaces/feature-installation-code.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {},
        ...
	}
    ```
1. By default, the latest version of the feature will be used. To choose a different version, or configure other options for the feature, expand the properties listed under "Options" to view the available values, then add the options by manually editing the object in your `devcontainer.json` file.

   ![Screenshot of the Options section of the Marketplace tab, with "version" and "tflint" expanded](/assets/images/help/codespaces/feature-options.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {
            "version": "1.1",
            "tflint": "latest"
        },
        ...
	}
    ```
1. Commit the changes to your `devcontainer.json` file.

The configuration changes will take effect in new codespaces created from the repository. To make the changes take effect in existing codespaces, you will need to pull the updates to the `devcontainer.json` file into your codespace, then rebuild the container for the codespace. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)."

{% endwebui %}

{% vscode %}

{% note %}

To add features in {% data variables.product.prodname_vscode_shortname %} while you are working locally, and not connected to a codespace, you must have the "Dev Containers" extension installed and enabled. For more information about this extension, see the [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

{% endnote %}

{% data reusables.codespaces.command-pallette %}
2. Start typing "Configure" and select **Codespaces: Configure Dev Container Features**.

   ![The Configure Devcontainer Features command in the Command Palette](/assets/images/help/codespaces/codespaces-configure-features.png)

3. Update your feature selections, then click **OK**.

   ![The select additional features menu during container configuration](/assets/images/help/codespaces/select-additional-features.png)

4. If you're working in a codespace, a prompt will appear in the lower-right corner. To rebuild the container and apply the changes to the codespace you're working in, click **Rebuild Now**.

   !["Codespaces: Rebuild Container" in the Command Palette](/assets/images/help/codespaces/rebuild-prompt.png)

{% endvscode %}