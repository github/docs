---
title: 关于连接到 GitHub
intro: '{% data variables.product.prodname_desktop %} 使用 HTTPS 与 {% data variables.product.prodname_dotcom %} 安全地交换数据。'
redirect_from:
  - /desktop/getting-started-with-github-desktop/about-connections-to-github
  - /desktop/installing-and-configuring-github-desktop/about-connections-to-github
versions:
  free-pro-team: '*'
---
当您对远程仓库执行拉取、推送、克隆和复刻操作时，{% data variables.product.prodname_desktop %} 将连接到 {% data variables.product.prodname_dotcom %}。 要从 {% data variables.product.prodname_desktop %} 连接到 {% data variables.product.prodname_dotcom %}，您必须验证您的帐户。 更多信息请参阅“[向 {% data variables.product.prodname_dotcom %} 验证](/desktop/getting-started-with-github-desktop/authenticating-to-github)”。

在向 {% data variables.product.prodname_dotcom %} 验证后，您可以通过 {% data variables.product.prodname_desktop %} 连接远程仓库。 {% data variables.product.prodname_desktop %} 缓存您的凭据（用户名和密码或个人访问令牌），并使用凭据验证到远程存储库的每个连接。

{% data variables.product.prodname_desktop %} 使用 HTTPS 连接到 {% data variables.product.prodname_dotcom %}。 如果使用 {% data variables.product.prodname_desktop %} 访问使用 SSH 克隆的仓库，可能会遇到错误。 要连接到使用 SSH 克隆的仓库，请更改远程 URL。 更多信息请参阅“[管理远程仓库](/github/getting-started-with-github/managing-remote-repositories)”。

### 延伸阅读
- “[从 GitHub Desktop 克隆和复刻仓库](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)”
