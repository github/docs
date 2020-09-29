---
title: 关于 web 挂钩
redirect_from:
  - /post-receive-hooks/
  - /articles/post-receive-hooks/
  - /articles/creating-webhooks/
  - /articles/about-webhooks
intro: Web 挂钩是一种通知方式，只要仓库或组织上发生特定操作，就会发送通知到外部 web 服务器。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**提示：** {% data reusables.organizations.owners-and-admins-can %} 为组织管理 web 挂钩。 {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

只要在仓库或组织上执行特定的操作，就可触发 web 挂钩。 例如，您可以配置 web 挂钩在以下情况下执行：

* 推送到仓库
* 打开拉取请求
* 构建 {% data variables.product.prodname_pages %} 网站
* 团队新增成员

使用 {% data variables.product.product_name %} API 可以让这些 web 挂钩更新外部议题跟踪器、触发 CI 构建、更新备份镜像，甚至部署到生产服务器。

要设置新的 web 挂钩，您需要访问外部服务器并熟悉所涉及的技术程序。 有关构建 web 挂钩的帮助，包括可以关联的完整操作列表，请参阅“[web 挂钩](/webhooks)”。
