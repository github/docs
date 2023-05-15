## Adding a port to the codespace configuration

You can add a forwarded port to the {% data variables.product.prodname_github_codespaces %} configuration for the repository, so the port will automatically be forwarded for all codespaces created from the repository. After you update the configuration, any previously created codespaces must be rebuilt for the change to apply. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)."

You can manually configure forwarded ports in a `.devcontainer.json` file using the `forwardPorts` property, or you can use the "Ports" panel in a codespace that you've opened in the browser or the {% data variables.product.prodname_vscode_shortname %} desktop application.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port you want to add to the codespace configuration, then click **Set Label and Update devcontainer.json**.

  ![Screenshot of the pop-up menu for a forwarded port, with the "Set Label and Update devcontainer.json" option highlighted with an orange outline.](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png)

{% data reusables.codespaces.type-port-label %}
