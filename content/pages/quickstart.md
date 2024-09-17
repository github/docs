---
title: Quickstart for GitHub Pages
intro: 'You can use {% data variables.product.prodname_pages %} to showcase some open source projects, host a blog, or even share your résumé. This guide will help get you started on creating your next website.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: quick_start
topics:
  - Pages
shortTitle: Quickstart
product: '{% data reusables.gated-features.pages %}'
---

## Introduction

{% data variables.product.prodname_pages %} are public webpages hosted and published through {% data variables.product.product_name %}. The quickest way to get up and running is by using the Jekyll Theme Chooser to load a pre-made theme. You can then modify your {% data variables.product.prodname_pages %}' content and style.

This guide will lead you through creating a user site at `username.github.io`.

## Creating your website

{% data reusables.repositories.create_new %}
1. Enter `username.github.io` as the repository name. Replace `username` with your {% data variables.product.prodname_dotcom %} username. For example, if your username is `octocat`, the repository name should be `octocat.github.io`.
   ![Screenshot of {% data variables.product.prodname_pages %} settings in a repository. The repository name field contains the text "octocat.github.io" and is outlined in dark orange.](/assets/images/help/pages/create-repository-name-pages.png)
{% data reusables.repositories.choose-repo-visibility %}  
{% data reusables.repositories.initialize-with-readme %}  
{% data reusables.repositories.create-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Under "Build and deployment", under "Source", select **Deploy from a branch**.
1. Under "Build and deployment", under "Branch", use the branch dropdown menu and select a publishing source.
   ![Screenshot of Pages settings in a {% data variables.product.prodname_dotcom %} repository. A menu to select a branch for a publishing source, labeled "None," is outlined in dark orange.](/assets/images/help/pages/publishing-source-drop-down.png)
1. Optionally, open the `README.md` file of your repository. The `README.md` file is where you will write the content for your site. You can edit the file or keep the default content for now.
1. Visit `username.github.io` to view your new website. Note that it can take up to 10 minutes for changes to your site to publish after you push the changes to {% data variables.product.product_name %}.

## Changing the title and description

By default, the title of your site is `username.github.io`. You can change the title by editing the `_config.yml` file in your repository. You can also add a description for your site.

1. Click the **Code** tab of your repository.
1. In the file list, click `_config.yml` to open the file.
1. Click {% octicon "pencil" aria-label="The edit icon" %} to edit the file.
1. The `_config.yml` file already contains a line that specifies the theme for your site. Add a new line with `title:` followed by the title you want. Add a new line with `description:` followed by the description you want. For example:

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. When you are done editing the file, click **Commit changes**.

## Next Steps

For more information about how to add additional pages to your site, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)."

For more information about setting up a {% data variables.product.prodname_pages %} site with Jekyll, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)."
