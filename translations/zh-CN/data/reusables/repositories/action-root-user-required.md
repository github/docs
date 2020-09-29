**注：**{% data variables.product.prodname_actions %} 必须由默认 Docker 用户 (root) 运行。 确保您的 Dockerfile 未设置 `USER` 指令，否则您将无法访问 `GITHUB_WORKSPACE`。
