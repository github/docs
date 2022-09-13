---
title: 配置 GitHub Pages 站点的发布源
intro: '{% ifversion pages-custom-workflow %}可以将 {% data variables.product.prodname_pages %} 站点配置为在将更改推送到特定分支时进行发布，也可以编写 {% data variables.product.prodname_actions %} 工作流来发布站点。{% else%}如果使用 {% data variables.product.prodname_pages %} 站点的默认发布源，会自动发布你的站点。 你也可以选择从不同的分支或文件夹发布你的站点。{% endif %}'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
  - /github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Configure publishing source
ms.openlocfilehash: d08b5c150da5be18700312237c374059228c563d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529637'
---
## 关于发布源

{% data reusables.pages.pages-about-publishing-source %}

{% data reusables.pages.private_pages_are_public_warning %}

## 从分支进行发布

1. 确保你要用作发布源的分支已经存在于你的存储库中。
{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% ifversion pages-custom-workflow %}
1. 在“生成和部署”的“源”下，选择“从分支进行部署”。
1. 在“生成和部署”的“分支”下，使用“无”或“分支”下拉菜单并选择发布源 。

   ![用于选择发布源的下拉菜单](/assets/images/help/pages/publishing-source-drop-down.png) {% else %}
3. 在“{% data variables.product.prodname_pages %}”下，使用“无”或“分支”下拉菜单，选择发布源 。
  ![用于选择发布源的下拉菜单](/assets/images/help/pages/publishing-source-drop-down.png) {% endif %}
4. （可选）使用下拉菜单选择发布源的文件夹。
  ![用于选择发布源文件夹的下拉菜单](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. 单击“ **保存**”。
  ![用于保存对发布源设置的更改的按钮](/assets/images/help/pages/publishing-source-save.png)

### 从分支进行发布疑难解答

{% data reusables.pages.admin-must-push %}

如果选择任意分支上的 `docs` 文件夹作为发布源，稍后从存储库中的该分支中删除 `/docs` 文件夹，则站点不会生成，并且你将收到缺失 `/docs` 文件夹的页面生成错误消息。 有关详细信息，请参阅“[对 {% data variables.product.prodname_pages %} 站点的 Jekyll 生成错误进行故障排除](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)”。

{% ifversion build-pages-with-actions %}

{% data variables.product.prodname_pages %} 站点将始终使用 {% data variables.product.prodname_actions %} 工作流程运行进行部署，即使您已将 {% data variables.product.prodname_pages %} 站点配置为使用其他 CI 工具构建也是如此。 大多数外部 CI 工作流通过将生成输出提交到存储库的 `gh-pages` 分支来“部署”到 GitHub Pages，且通常包含 `.nojekyll` 文件。 发生这种情况时， {% data variables.product.prodname_actions %} 工作流程将检测分支不需要构建步骤的状态，并且仅执行将站点部署到 {% data variables.product.prodname_pages %} 服务器所需的步骤。

若要查找构建或部署的潜在错误，可以通过查看仓库的工作流程运行来检查 {% data variables.product.prodname_pages %} 站点的工作流程运行情况。 有关详细信息，请参阅“[查看工作流运行历史记录](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”。 有关如何在出现错误时重新运行工作流的详细信息，请参阅“[重新运行工作流和作业](/actions/managing-workflow-runs/re-running-workflows-and-jobs)”。

{% endif %}

{% ifversion pages-custom-workflow %}

## 使用自定义 {% data variables.product.prodname_actions %} 工作流进行发布

{% data reusables.pages.pages-custom-workflow-beta %}

若要将站点配置为使用 {% data variables.product.prodname_actions %} 进行发布，请执行以下操作：

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. 在“生成和部署”的“源”下，选择“GitHub Actions”。
1. {% data variables.product.product_name %} 将推荐多个入门工作流。 如果已有用于发布站点的工作流，可跳过此步骤。 否则，请选择其中一个选项来创建 {% data variables.product.prodname_actions %} 工作流。 有关创建自定义工作流的详细信息，请参阅“[创建自定义 {% data variables.product.prodname_actions %} 工作流以发布站点](#creating-a-custom-github-actions-workflow-to-publish-your-site)”。

   {% data variables.product.prodname_pages %} 不会将特定工作流与 {% data variables.product.prodname_pages %} 设置相关联。 但 {% data variables.product.prodname_pages %} 设置将链接到最近部署你的站点的工作流运行。

### 创建自定义 {% data variables.product.prodname_actions %} 工作流以发布站点

有关 {% data variables.product.prodname_actions %} 的详细信息，请参阅“[Actions](/actions)”。

将站点配置为使用 {% data variables.product.prodname_actions %} 进行发布时，{% data variables.product.product_name %} 将针对常见发布方案推荐入门工作流。 工作流的一般流程如下：

1. 在推送到存储库的默认分支时，或者在已打开、已重新打开或已更新针对默认分支的拉取请求时触发。
1. 使用 [`actions/checkout`](https://github.com/actions/checkout) 操作签出存储库内容。
1. 如果站点需要，请生成任何静态站点文件。
1. 使用 [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) 操作将静态文件作为项目上传。
1. 如果推送到默认分支触发了工作流，请使用 [`actions/deploy-pages`](https://github.com/actions/deploy-pages) 操作来部署项目。 如果拉取请求触发了工作流，则跳过此步骤。

入门工作流使用名为 `github-pages` 的部署环境。 如果存储库尚未包含名为 `github-pages` 的环境，则自动创建该环境。 建议添加环境保护规则，确保仅默认分支可部署到该环境。 有关详细信息，请参阅“[使用环境进行部署](/actions/deployment/targeting-different-environments/using-environments-for-deployment)”。

{% note %}

**注意**：存储库文件中的 `CNAME` 文件不会自动添加或删除自定义域。 必须通过存储库设置或 API 配置自定义域。 有关详细信息，请参阅“[管理 GitHub Pages 站点的自定义域](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)”和 [Pages API 参考文档](/rest/pages#update-information-about-a-github-pages-site)。

{% endnote %}

### 使用自定义 {% data variables.product.prodname_actions %} 工作流进行发布故障排除

有关如何对 {% data variables.product.prodname_actions %} 工作流进行故障排除的信息，请参阅“[关于监视和故障排除](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)”。

{% endif %}
