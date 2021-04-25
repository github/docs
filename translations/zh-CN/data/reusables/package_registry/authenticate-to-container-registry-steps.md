1. 针对要完成的任务，新创具有适当作用域的个人访问令牌 (PAT)。 如果您的组织需要 SSO，则必须为新令牌启用 SSO。
  {% warning %}

  **注意：** 默认情况下， 当您在用户界面中选择 `write:packages` 范围的个人访问令牌 (PAT) 时，`repo` 范围也将被选中。 `repo` 范围提供了不必要和广泛的访问权限，我们建议您尤其避免使用 GitHub Actions 工作流程。 更多信息请参阅“[GitHub Actions 的安全性增强](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)”。 作为一种解决方法，您可以在以下 URL 的用户界面中为 PAT 选择 `write:packages` 范围：`https://github.com/settings/tokens/new?scopes=write:packages`。

  {% endwarning %}

    - 选择 `read:packs` 作用域以下载容器映像并读取其元数据。
    - 选择 `write:packages` 作用域以下载和上传容器映像并读取和写入其元数据。
    - 选择 `delete:packages` 作用域以删除容器映像。

  更多信息请参阅“[创建用于命令行的个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)。”

2. 保存您的 PAT。 我们建议将 PAT 保存为环境变量。
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. 使用您的容器类型的 CLI 登录到
`ghcr.io` 上的 {% data variables.product.prodname_github_container_registry %} 服务。
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
