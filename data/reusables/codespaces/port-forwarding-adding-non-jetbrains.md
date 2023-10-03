## Automatically forwarding a port

You can add a forwarded port to the {% data variables.product.prodname_github_codespaces %} configuration for the repository, so that the port will be automatically forwarded for all codespaces created from the repository. After you update the configuration, any previously created codespaces must be rebuilt for the change to apply. For more information about the dev container configuration file, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)."

1. In your codespace, open the dev container configuration file you want to update. Typically this file is `.devcontainer/devcontainer.json`.
1. Add the `forwardPorts` property.

   ```json
   "forwardPorts": [NUMBER],
   ```

   Replace `NUMBER` with the port number you want to forward. This can be a comma-separated list of port numbers.

1. Save the file.
