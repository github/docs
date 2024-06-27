{% data reusables.package_registry.packages-classic-pat-only %}

1. Create a new {% data variables.product.pat_v1 %} with the appropriate scopes for the tasks you want to accomplish. If your organization requires SSO, you must enable SSO for your new token.
   {% warning %}

   **Note:** By default, when you select the `write:packages` scope for your {% data variables.product.pat_v1 %} in the user interface, the `repo` scope will also be selected. The `repo` scope offers unnecessary and broad access, which we recommend you avoid using for {% data variables.product.prodname_actions %} workflows in particular. For more information, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access)." As a workaround, you can select just the `write:packages` scope for your {% data variables.product.pat_v1 %} in the user interface with this url: `https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/settings/tokens/new?scopes=write:packages`.

   {% endwarning %}

   * Select the `read:packages` scope to download container images and read their metadata.
   * Select the `write:packages` scope to download and upload container images and read and write their metadata.
   * Select the `delete:packages` scope to delete container images.

   For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

1. Save your {% data variables.product.pat_v1 %}. We recommend saving your token as an environment variable.

   ```shell
   export CR_PAT=YOUR_TOKEN
   ```

1. Using the CLI for your container type, sign in to the {% data variables.product.prodname_container_registry %} service at `{% data reusables.package_registry.container-registry-hostname %}`.
   {% raw %}

   ```shell
   $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
   > Login Succeeded
   ```

   {% endraw %}
