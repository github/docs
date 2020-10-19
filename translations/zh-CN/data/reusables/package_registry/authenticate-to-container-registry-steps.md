1. 针对要完成的任务，新创具有适当作用域的个人访问令牌 (PAT)。 如果您的组织需要 SSO，则必须为新令牌启用 SSO。
  {% warning %}

  **Note:** If you select the `write:packages` scope, deselect the `repo` scope when creating the PAT. Adding a PAT with the `repo` scope as a secret in your repository allows the credential to be accessible to all collaborators in the repository. This gives unnecessary additional access when a PAT with the `repo` scope is used within an action. For more information on security best practices for actions, see "[Security hardening for GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)."

  {% endwarning %}

    - 选择 `read:packs` 作用域以下载容器映像并读取其元数据。
    - 选择 `write:packages` 作用域以下载和上传容器映像并读取和写入其元数据。
    - 选择 `delete:packages` 作用域以删除容器映像。

  更多信息请参阅“[创建用于命令行的个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)。”

2. 保存您的 PAT。 我们建议将 PAT 保存为环境变量。
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
