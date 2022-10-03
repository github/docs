---
title: 关于 GitHub Pages 站点的 Jekyll 构建错误
intro: '如果在本地或 {% data variables.product.product_name %} 上构建 {% data variables.product.prodname_pages %} 站点发生 Jekyll 错误，您将收到一条错误消息，其中包含相关详细信息。'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages
  - /articles/generic-jekyll-build-failures
  - /articles/about-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Jekyll build errors for Pages
ms.openlocfilehash: c435d7857239ae4a8b1a09c86e10fe12b248a4b2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147648237'
---
## 关于 Jekyll 构建错误

{% ifversion pages-custom-workflow %}如果从分支发布，则将更改推送到站点的发布源后，有时，{% else %}Sometimes,{% endif %} {% data variables.product.prodname_pages %} 不会尝试生成站点。{% ifversion fpt or ghec %}
- 推送更改的人尚未验证他们的电子邮件地址。 有关详细信息，请参阅“[验证电子邮件地址](/articles/verifying-your-email-address)”。{% endif %}
- 您使用部署密钥推送。 如果要自动推送到站点的仓库，您可以改为设置计算机用户。 有关详细信息，请参阅“[管理部署密钥](/developers/overview/managing-deploy-keys#machine-users)”。
- 您使用的是未配置为构建发布源的 CI 服务。 例如，Travis CI 不会生成 `gh-pages` 分支，除非将分支添加到安全列表。 有关详细信息，请参阅 Travis CI 上的“[自定义生成](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)”或 CI 服务的文档。

{% note %}

**注意：** 对站点的更改在推送到 {% data variables.product.product_name %} 后，最长可能需要 10 分钟才会发布。

{% endnote %}

{% ifversion build-pages-with-actions %} 如果 Jekyll 尝试构建站点但遇到错误，你将收到一条构建错误消息。
{% else %} 如果 Jekyll 尝试构建站点但遇到错误，你将收到一条构建错误消息。 Jekyll 构建错误消息有两种主要类型。
- “Page build warning（页面构建警告）”消息表示构建已成功完成，但您可能需要进行更改以防止将来出现问题。
- “Page build failed（页面构建失败）”消息表示构建未能完成。 如果 Jekyll 能够检测到失败的原因，您将看到描述性错误消息。
{% endif %}

有关排查生成错误的详细信息，请参阅“[排查 {% data variables.product.prodname_pages %} 站点的 Jekyll 生成错误](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)”。

{% ifversion build-pages-with-actions %}
## 查看 {% data variables.product.prodname_actions %} 的 Jekyll 构建错误消息

默认情况下，除非已将 {% data variables.product.prodname_pages %} 网站配置为使用其他 CI 工具，否则 {% data variables.product.prodname_pages %} 网站使用 {% data variables.product.prodname_actions %} 工作流程运行构建和部署。 要查找潜在的构建错误，您可以通过查看仓库的工作流程运行来检查 {% data variables.product.prodname_pages %} 站点的工作流程运行情况。 有关详细信息，请参阅“[查看工作流运行历史记录](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”。  有关如何在出现错误时重新运行工作流的详细信息，请参阅“[重新运行工作流和作业](/actions/managing-workflow-runs/re-running-workflows-and-jobs)”。
{% endif %}

{% ifversion build-pages-with-actions %}{% else %}
## 查看 {% data variables.product.product_name %} 上的仓库构建失败

你可以在 {% data variables.product.product_name %} 上站点存储库的“设置”选项卡中查看生成失败（而不是生成警告）。
{% endif %}

## 在本地查看 Jekyll 构建错误消息

我们建议在本地测试您的站点，这样您可以在命令行上看到构建错误消息，并在更改推送到 {% data variables.product.product_name %} 之前解决任何构建失败。 有关详细信息，请参阅“[使用 Jekyll 在本地测试 {% data variables.product.prodname_pages %} 站点](/articles/testing-your-github-pages-site-locally-with-jekyll)”。

## 在拉取请求中查看 Jekyll 构建错误消息

{% ifversion pages-custom-workflow %}如果从分支发布，当{% else %}When{% endif %}创建拉取请求来更新 {% data variables.product.product_name %} 上的发布源时，拉取请求的“检查”选项卡上会显示生成错误消息。 有关详细信息，请参阅“[关于状态检查](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)”。

{% ifversion pages-custom-workflow %}如果使用自定义 {% data variables.product.prodname_actions %} 工作流进行发布，以在拉取请求中查看生成错误消息，则必须将工作流配置为在 `pull_request` 触发器上运行。 执行此操作时，如果工作流已由 `pull_request` 事件触发，则建议跳过所有部署步骤。 这样，无需将拉取请求中的更改部署到站点即可查看所有生成错误。 有关详细信息，请参阅“[触发工作流的事件](/actions/using-workflows/events-that-trigger-workflows#pull_request)”和“[表达式](/actions/learn-github-actions/expressions)”。{% endif %}

## 通过电子邮件查看 Jekyll 构建错误

{% ifversion pages-custom-workflow %}如果从分支发布，当{% else %}When{% endif %}将更改推送到 {% data variables.product.product_name %} 上的发布源时，{% data variables.product.prodname_pages %} 将尝试生成站点。 如果构建失败，您将在您的主要电子邮件地址收到一封电子邮件。 {% data reusables.pages.build-failure-email-server %}

{% ifversion pages-custom-workflow %}如果使用自定义 {% data variables.product.prodname_actions %} 工作流进行发布，以在拉取请求中接收有关生成错误的电子邮件，则必须将工作流配置为在 `pull_request` 触发器上运行。 执行此操作时，如果工作流已由 `pull_request` 事件触发，则建议跳过所有部署步骤。 这样，无需将拉取请求中的更改部署到站点即可查看所有生成错误。 有关详细信息，请参阅“[触发工作流的事件](/actions/using-workflows/events-that-trigger-workflows#pull_request)”和“[表达式](/actions/learn-github-actions/expressions)”。{% endif %}

## 使用第三方 CI 服务查看拉取请求中的 Jekyll 构建错误消息

可以将第三方服务（如 [Travis CI](https://travis-ci.org/)）配置为在每次提交后显示错误消息。

1. 如果尚未在发布源的根目录中添加名为 Gemfile 的文件并包含以下内容：
  ```ruby
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. 为您选择的测试服务配置站点仓库。 例如，使用 [Travis CI](https://travis-ci.org/) 在发布源的根目录中添加名为 _.travis.yml_ 的文件并包含以下内容：
  ```yaml
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. 您可能需要使用第三方测试服务激活仓库。 更多信息请参阅测试服务的文档。
