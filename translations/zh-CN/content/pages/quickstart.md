---
title: GitHub Pages 快速入门
intro: '您可以使用 {% data variables.product.prodname_pages %} 来展示一些开源项目、主持博客甚或分享您的简历。 本指南将帮助您开始创建下一个网站。'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pages
shortTitle: 快速入门
product: '{% data reusables.gated-features.pages %}'
---

## 简介

{% data variables.product.prodname_pages %} 是通过 {% data variables.product.product_name %} 托管和发布的公共网页。 启动和运行的最快方法是使用 Jekyll 主题选择器加载预置主题。 然后，您可以修改 {% data variables.product.prodname_pages %} 的内容和样式。

本指南将引导您完成在 `username.github.io` 创建用户站点的过程。

## 创建网站

{% data reusables.repositories.create_new %}
1. 输入 `username.github.io` 作为存储库名称。 将 `username` 替换为您的 {% data variables.product.prodname_dotcom %} 用户名。 例如，如果您的用户名是 `octocat`，则存储库名称应为 `octocat.github.io`。 ![存储库名称字段](/assets/images/help/pages/create-repository-name-pages.png)
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Under "Build and deployment", under "Source", select **Deploy from a branch**.
1. Under "Build and deployment", under "Branch", use the **None** or **Branch** drop-down menu and select a publishing source.

   ![用于选择发布源的下拉菜单](/assets/images/help/pages/publishing-source-drop-down.png)
1. Optionally, open the `README.md` file of your repository. `README.md` 文件是您将为网站编写内容的位置。 您可以编辑文件或暂时保留默认内容。
1. 访问 `username.github.io` 以查看您的新网站。 **注：**对站点的更改在推送到 {% data variables.product.product_name %} 后，最长可能需要 10 分钟才会发布。

## 更改标题和说明

默认情况下，网站的标题为 `username.github.io`。 您可以通过编辑存储库中的 `_config.yml` 文件来更改标题。 您还可以为您的网站添加说明。

1. 单击存储库的 **Code（代码）**选项卡。
1. 在文件列表中，单击 `_config.yml` 打开该文件。
1. 单击 {% octicon "pencil" aria-label="The edit icon" %} 编辑文件。
1. `_config.yml` 文件已包含指定网站主题的行。 添加一个新行，其中包含 `title:`，后跟所需的标题。 添加一个新行，其中包含 `description:`，后跟所需的说明。 例如：

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. 编辑完文件后，单击 **Commit changes（提交更改）**。

## 后续步骤

有关如何向站点添加其他页面的详细信息，请参阅“[使用 Jekyll 向 GitHub Pages 站点添加内容](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)”。

有关使用 Jekyll 设置 {% data variables.product.prodname_pages %} 站点的更多信息，请参阅“[关于 GitHub Pages 和 Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)”。
