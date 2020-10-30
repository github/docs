---
title: 关于 GitHub Pages 站点的 Jekyll 构建错误
intro: '如果在本地或 {% data variables.product.product_name %} 上构建 {% data variables.product.prodname_pages %} 站点发生 Jekyll 错误，您将收到一条错误消息，其中包含相关详细信息。'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages/
  - /articles/generic-jekyll-build-failures/
  - /articles/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于 Jekyll 构建错误

有时，在您推送更改到站点的发布源之后，{% data variables.product.prodname_pages %} 不会尝试构建您的站点。{% if currentVersion == "free-pro-team@latest" %}
- 推送更改的人尚未验证他们的电子邮件地址。 更多信息请参阅“[验证电子邮件地址](/articles/verifying-your-email-address)”。{% endif %}
- 您使用部署密钥推送。 如果要自动推送到站点的仓库，您可以改为设置计算机用户。 更多信息请参阅“[管理部署密钥](/v3/guides/managing-deploy-keys/#machine-users)”。
- 您使用的是未配置为构建发布源的 CI 服务。 例如，Travis CI 不会构建 `gh-pages` 分支，除非您将该分支添加到安全列表。 更多信息请参阅 Travis CI 上的“[定制构建](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)”或者 CI 服务的文档。

{% note %}

**注：**对站点的更改在推送到 {% data variables.product.product_name %} 后，最长可能需要 20 分钟才会发布。

{% endnote %}

如果 Jekyll 尝试构建站点但遇到错误，您将收到一条构建错误消息。 Jekyll 构建错误消息有两种主要类型。
- “Page build warning（页面构建警告）”消息表示构建已成功完成，但您可能需要进行更改以防止将来出现问题。
- “Page build failed（页面构建失败）”消息表示构建未能完成。 如果 Jekyll 能够检测到失败的原因，您将看到描述性错误消息。

有关排查构建错误的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %} 站点的 Jekyll 构建错误疑难排解](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)”。

### 查看 Jekyll 构建错误消息

我们建议在本地测试您的站点，这样您可以在命令行上看到构建错误消息，并在更改推送到 {% data variables.product.product_name %} 之前解决任何构建失败。 更多信息请参阅“[使用 Jekyll 在本地测试 {% data variables.product.prodname_pages %} 站点](/articles/testing-your-github-pages-site-locally-with-jekyll)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
创建拉取请求以更新您在 {% data variables.product.product_name %} 上的发布源时，您可以在拉取请求的 **Checks（检查）**选项卡上看到构建错误消息。 更多信息请参阅“[关于状态检查](/articles/about-status-checks)”。
{% endif %}

将更改推送到您在 {% data variables.product.product_name %} 上的发布源时，{% data variables.product.prodname_pages %} 将尝试构建您的站点。 如果构建失败，您将在您的主要电子邮件地址收到一封电子邮件。 您还将收到关于构建警告的电子邮件。 {% data reusables.pages.build-failure-email-server %}

您可以在 {% data variables.product.product_name %} 上站点仓库的 **Settings（设置）**选项卡中查看构建失败（而不是构建警告）。

您可以配置第三方服务（例如 [Travis CI](https://travis-ci.org/)）以在每次提交后显示错误消息。

1. 如果尚未在发布源的根目录中添加名为 _Gemfile_、包含以下内容的文件，请添加：
  ```
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. 为您选择的测试服务配置站点仓库。 例如，要使用 [Travis CI](https://travis-ci.org/)，请在发布源的根目录下添加一个名为 _.travis.yml_、包含以下内容的文件：
  ```
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. 您可能需要使用第三方测试服务激活仓库。 更多信息请参阅测试服务的文档。
