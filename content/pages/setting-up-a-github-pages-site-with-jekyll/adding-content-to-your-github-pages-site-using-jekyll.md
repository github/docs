---
title: Adding content to your GitHub Pages site using Jekyll
intro: 'You can add a new page or post to your Jekyll site on {% data variables.product.prodname_pages %}.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/adding-content-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-content-to-your-github-pages-site-using-jekyll
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Add content to Pages site
---

People with write permissions for a repository can add content to a {% data variables.product.prodname_pages %} site using Jekyll.

## About content in Jekyll sites

Before you can add content to a Jekyll site on {% data variables.product.prodname_pages %}, you must create a Jekyll site. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)."

The main types of content for Jekyll sites are pages and posts. A page is for standalone content that isn't associated with a specific date, such as an "About" page. The default Jekyll site contains a file called `about.md`, which renders as a page on your site at `YOUR-SITE-URL/about`. You can edit the contents of that file to personalize your "About" page, and you can use the "About" page as a template to create new pages. For more information, see "[Pages](https://jekyllrb.com/docs/pages/)" in the Jekyll documentation.

A post is a blog post. The default Jekyll site contains a directory named `_posts` that contains a default post file. You can edit the contents of that post, and you can use the default post as a template to create new posts. For more information, see "[Posts](https://jekyllrb.com/docs/posts/)" in the Jekyll documentation.

Your theme includes default layouts, includes, and stylesheets that will automatically be applied to new pages and posts on your site, but you can override any of these defaults. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#themes)."

{% data reusables.pages.about-front-matter %}

{% data reusables.pages.test-locally %}

## Adding a new page to your site

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
1. In the root of your publishing source, create a new file for your page called `PAGE-NAME.md`, replacing PAGE-NAME with a meaningful filename for the page.
1. Add the following YAML frontmatter to the top of the file, replacing PAGE-TITLE with the page's title and URL-PATH with a path you want for the page's URL. For example, if the base URL of your site is `https://octocat.github.io` and your URL-PATH is `/about/contact/`, your page will be located at `https://octocat.github.io/about/contact`.

   ```shell
   layout: page
   title: "PAGE-TITLE"
   permalink: /URL-PATH
   ```

1. Below the frontmatter, add content for your page.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
{% data reusables.files.choose_pull_request %}
{% data reusables.files.merge_pull_request %}
{% data reusables.files.write_commit_message_pull_request %}
{% data reusables.files.confirm_merge %}
{% data reusables.files.delete_branch %}

## Adding a new post to your site

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
1. Navigate to the `_posts` directory.
1. Create a new file called `YYYY-MM-DD-NAME-OF-POST.md`, replacing YYYY-MM-DD with the date of your post and NAME-OF-POST with the name of your post.
1. Add the following YAML frontmatter to the top of the file, including the post's title enclosed in quotation marks, the date and time for the post in YYYY-MM-DD hh:mm:ss -0000 format, and as many categories as you want for your post.

   ```shell
   layout: post
   title: "POST-TITLE"
   date: YYYY-MM-DD hh:mm:ss -0000
   categories: CATEGORY-1 CATEGORY-2
   ```

1. Below the frontmatter, add content for your post.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
{% data reusables.files.choose_pull_request %}
{% data reusables.files.merge_pull_request %}
{% data reusables.files.write_commit_message_pull_request %}
{% data reusables.files.confirm_merge %}
{% data reusables.files.delete_branch %}

Your post should now be up on your site! If the base URL of your site is `https://octocat.github.io`, then your new post will be located at `https://octocat.github.io/YYYY/MM/DD/TITLE.html`.

## Next steps

{% data reusables.pages.add-jekyll-theme %} For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)."
