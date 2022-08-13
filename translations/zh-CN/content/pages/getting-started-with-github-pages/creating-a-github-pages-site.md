---
title: 创建 GitHub Pages 站点
intro: '您可以在新仓库或现有仓库中创建 {% data variables.product.prodname_pages %} 站点。'
redirect_from:
  - /articles/creating-pages-manually
  - /articles/creating-project-pages-manually
  - /articles/creating-project-pages-from-the-command-line
  - /articles/creating-project-pages-using-the-command-line
  - /articles/creating-a-github-pages-site
  - /github/working-with-github-pages/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: 创建 GitHub Pages 站点
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## 为站点创建仓库

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% indented_data_reference reusables.pages.emu-org-only spaces=3 %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

## 创建站点

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.decide-publishing-source %}
1. Create the entry file for your site. {% data variables.product.prodname_pages %} will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site.

   {% ifversion pages-custom-workflow %}If your publishing source is a branch and folder, the entry file must be at the top level of the source folder on the source branch. For example, if your publishing source is the `/docs` folder on the `main` branch, your entry file must be located in the `/docs` folder on a branch called `main`.

   If your publishing source is a {% data variables.product.prodname_actions %} workflow, the artifact that you deploy must include the entry file at the top level of the artifact. Instead of adding the entry file to your repository, you may choose to have your {% data variables.product.prodname_actions %} workflow generate your entry file when the workflow runs.{% else %} The entry file must be at the top level of your chosen publishing source. For example, if your publishing source is the `/docs` folder on the `main` branch, your entry file must be located in the `/docs` folder on a branch called `main`.{% endif %}
{% data reusables.pages.configure-publishing-source %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% data reusables.pages.choose-visibility %}
{% data reusables.pages.visit-site %}
{% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## 后续步骤

您可以通过创建更多新文件向网站添加更多页面。 每个文件都将在网站上与发布源相同的目录结构中。 例如，如果项目网站的发布源是 `gh-pages` 分支，并且您在 `gh-pages` 分支上创建了名为 `/about/contact-us.md` 的新文件，该文件将在 {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html` 下。

您还可以添加主题以自定义网站的外观。 更多信息请参阅{% ifversion fpt or ghec %}“[使用主题选择器添加主题到 {% data variables.product.prodname_pages %} 站点](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}”[使用 Jekyll 添加主题到 {% data variables.product.prodname_pages %} 站点](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}”。

要更多地自定义您的站点，您可以使用 Jekyl - 内置 {% data variables.product.prodname_pages %} 支持的静态站点生成器。 更多信息请参阅“[关于 {% data variables.product.prodname_pages %} 和 Jekyll](/articles/about-github-pages-and-jekyll)”。

## 延伸阅读

- "[排查 {% data variables.product.prodname_pages %} 站点的 Jekyll 构建错误](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
- “[在仓库内创建和删除分支](/articles/creating-and-deleting-branches-within-your-repository)”
- "[创建新文件](/articles/creating-new-files)"
