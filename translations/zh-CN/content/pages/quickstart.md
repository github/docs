---
title: Quickstart for GitHub Pages
intro: 'You can use {% data variables.product.prodname_pages %} to showcase some open source projects, host a blog, or even share your résumé. This guide will help get you started on creating your next website.'
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

{% data variables.product.prodname_pages %} are public webpages hosted and published through {% data variables.product.product_name %}. The quickest way to get up and running is by using the Jekyll Theme Chooser to load a pre-made theme. You can then modify your {% data variables.product.prodname_pages %}' content and style.

This guide will lead you through creating a user site at `username.github.io`.

## Creating your website

{% data reusables.repositories.create_new %}
1. Enter `username.github.io` as the repository name. Replace `username` with your {% data variables.product.prodname_dotcom %} username. For example, if your username is `octocat`, the repository name should be `octocat.github.io`. ![Repository name field](/assets/images/help/pages/create-repository-name-pages.png)
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Click **Choose a theme**. ![选择主题按钮](/assets/images/help/pages/choose-theme.png)
2. The Theme Chooser will open. Browse the available themes, then click **Select theme** to select a theme. It's easy to change your theme later, so if you're not sure, just choose one for now. ![主题选项和选择主题按钮](/assets/images/help/pages/select-theme.png)
3. After you select a theme, your repository's `README.md` file will open in the file editor. The `README.md` file is where you will write the content for your site. You can edit the file or keep the default content for now.
4. When you are done editing the file, click **Commit changes**.
5. Visit `username.github.io` to view your new website. **注：**对站点的更改在推送到 {% data variables.product.product_name %} 后，最长可能需要 20 分钟才会发布。

## Changing the title and description

By default, the title of your site is `username.github.io`. You can change the title by editing the `_config.yml` file in your repository. You can also add a description for your site.

1. Click the **Code** tab of your repository.
1. In the file list, click `_config.yml` to open the file.
1. Click {% octicon "pencil" aria-label="The edit icon" %} to edit the file.
1. The `_config.yml` file already contains a line that specifies the theme for your site. Add a new line with `title:` followed by the title you want. Add a new line with `description:` followed by the description you want. 例如：

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. When you are done editing the file, click **Commit changes**.

## 后续步骤

For more information about how to add additional pages to your site, see "[Adding content to your GitHub Pages site using Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)."

For more information about setting up a {% data variables.product.prodname_pages %} site with Jekyll, see "[About GitHub Pages and Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)."
