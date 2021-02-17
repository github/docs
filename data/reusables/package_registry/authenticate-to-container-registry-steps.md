1. Create a new personal access token (PAT) with the appropriate scopes for the tasks you want to accomplish. If your organization requires SSO, you must enable SSO for your new token.
  {% warning %}

  **Note:** Granting the `write:packages` scope on the PAT also grants the `repo` scope! If you save this PAT for use from an Action, any collaborators can configure an Actions workflow to use this PAT to get full permissions to all repositories accessable from the PAT owner's account. We recommend creating a separate account with access only to the specific repositories that want to push Docker images (see "[Security hardening for GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)").

  {% endwarning %}

    - Select the `read:packages` scope to download container images and read their metadata.
    - Select the `write:packages` scope to download and upload container images and read and write their metadata.
    - Select the `delete:packages` scope to delete container images.

  For more information, see "[Creating a personal access token for the command line](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)."

2. Save your PAT. We recommend saving your PAT as an environment variable.
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. Using the CLI for your container type, sign in to the {% data variables.product.prodname_github_container_registry %} service at `ghcr.io`.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
