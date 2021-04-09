1. 针对要完成的任务，新创具有适当作用域的个人访问令牌 (PAT)。 如果您的组织需要 SSO，则必须为新令牌启用 SSO。
  {% warning %}

  **注：**如果选择 `write:packages` 作用域，请在创建 PAT 时取消选择 `repo` 作用域。 将具有 `repo` 作用域的 PAT 添加为仓库中的机秘，可让仓库中的所有协作者访问该机密。 这会在操作中使用作用域为 `repo` 的 PAT 时授予不必要的额外访问权限。 有关操作安全最佳实践的更多信息，请参阅“[GitHub Actions 的安全强化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)”。

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
