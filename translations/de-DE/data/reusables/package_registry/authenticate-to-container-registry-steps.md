1. Create a new personal access token (PAT) with the appropriate scopes for the tasks you want to accomplish. If your organization requires SSO, you must enable SSO for your new token.
  {% warning %}

  **Note:** By default, when you select the `write:packages` scope for your personal access token (PAT) in the user interface, the `repo` scope will also be selected. The `repo` scope offers unnecessary and broad access, which we recommend you avoid using for GitHub Actions workflows in particular. For more information, see "[Security hardening for GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)." As a workaround, you can select just the `write:packages` scope for your PAT in the user interface with this url: `https://github.com/settings/tokens/new?scopes=write:packages`.

  {% endwarning %}

    - Select the `read:packages` scope to download container images and read their metadata.
    - Select the `write:packages` scope to download and upload container images and read and write their metadata.
    - Select the `delete:packages` scope to delete container images.

  Weitere Informationen findest Du unter „[Ein persönliches Zugriffstoken für die Befehlszeile erstellen](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).“

2. Save your PAT. We recommend saving your PAT as an environment variable.
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. Using the CLI for your container type, sign in to the
{% data variables.product.prodname_github_container_registry %} service at `ghcr.io`.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
