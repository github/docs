## Labeling a port

When you open a codespace in the browser, or in the {% data variables.product.prodname_vscode_shortname %} desktop application, you can label a forwarded port to make it easier to identify in a list.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right-click the port you want to label, then click **Set Port Label**.

   ![Screenshot of the pop-up menu for a forwarded port, with the "Set Port Label" option highlighted with an orange outline.](/assets/images/help/codespaces/set-port-label.png)

{% data reusables.codespaces.type-port-label %}

### Automatically labeling a forwarded port

You can label a port and write the change to a dev container configuration file for the repository. If you do this for a port that is automatically forwarded, using the `forwardPorts` property, then the label will be automatically applied to that forwarded port for all future codespaces created from the repository using that configuration file.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right-click the port whose label attribute you want to add to the codespace configuration, then click **Set Label and Update devcontainer.json**.

   ![Screenshot of the pop-up menu for a forwarded port, with the "Set Label and Update devcontainer.json" option highlighted with an orange outline.](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png)

{% data reusables.codespaces.type-port-label %}
1. If your repository has more than one dev container configuration file, you will be prompted to choose which file you want to update.

   The dev container configuration file is updated to include the new label in the `portsAttributes` property. For example:

   ```jsonc
   // Use 'forwardPorts' to make a list of ports inside the container available locally.
   "forwardPorts": [3333, 4444],

   "portsAttributes": {
     "3333": {
       "label": "app-standard-preview"
     },
     "4444": {
       "label": "app-pro-preview"
     }
   }
   ```
