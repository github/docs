---
title: Adding content to your GitHub Pages site using Jekyll
intro: 'You can add a new page or post to your Jekyll site on {% data variables.product.prodname_pages %}.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/adding-content-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-content-to-your-github-pages-site-using-jekyll
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pages
---

People with write permissions for a repository can add content to a {% data variables.product.prodname_pages %} site using Jekyll.

### About content in Jekyll sites

Before you can add content to a Jekyll site on {% data variables.product.prodname_pages %}, you must create a Jekyll site. For more information, see "[Creating a {% data variables.product.prodname_pages %} site with Jekyll](/articles/creating-a-github-pages-site-with-jekyll)."

The main types of content for Jekyll sites are pages and posts. A page is for standalone content that isn't associated with a specific date, such as an "About" page. The default Jekyll site contains a file called `about.md`, which renders as a page on your site at `YOUR-SITE-URL/about`. You can edit the contents of that file to personalize your "About" page, and you can use the "About" page as a template to create new pages. For more information, see "[Pages](https://jekyllrb.com/docs/pages/)" in the Jekyll documentation.

A post is a blog post. The default Jekyll site contains a directory named `_posts` that contains a default post file. You can edit the contents of that post, and you can use the default post as a template to create new posts. For more information, see "[Posts](https://jekyllrb.com/docs/posts/)" in the Jekyll documentation.

Your theme includes default layouts, includes, and stylesheets that will automatically be applied to new pages and posts on your site, but you can override any of these defaults. For more information, see "[About {% data variables.product.prodname_pages %} and Jekyll](/articles/about-github-pages-and-jekyll#themes)."

{% data reusables.pages.about-front-matter %}

{% data reusables.pages.test-locally %}

### Adding a new page to your site

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
3. In the root of your publishing source, create a new file for your page called _PAGE-NAME.md_, replacing _PAGE-NAME_ with a meaningful filename for the page.
4. Add the following YAML frontmatter to the top of the file, replacing _PAGE TITLE_ with the page's title and _URL-PATH_ with a path you want for the page's URL. For example, if the base URL of your site is `https://octocat.github.io` and your _URL-PATH_ is `/about/contact/`, your page will be located at `https://octocat.github.io/about/contact`.
  ```shell
  layout: page
  title: "<em>PAGE TITLE</em>"
  permalink: /<em>URL-PATH</em>/
  ```
5. Below the frontmatter, add content for your page.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Adding a new post to your site

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
3. Navigate to the `_posts` directory.
4. Create a new file called _YYYY-MM-DD-NAME-OF-POST.md_, replacing _YYYY-MM-DD_ with the date of your post and _NAME-OF-POST_ with the name of your post.
4. Add the following YAML frontmatter to the top of the file, replacing _POST TITLE_ with the post's title, _YYYY-MM-DD hh:mm:ss -0000_ with the date and time for the post, and _CATEGORY-1_ and _CATEGORY-2_ with as many categories you want for your post.
  ```shell
  layout: post
  title: "<em>POST TITLE</em>"
  date: </em>YYYY-MM-DD hh:mm:ss -0000</em>
  categories: <em>CATEGORY-1</em> <em>CATEGORY-2</em>
  ```
5. Below the frontmatter, add content for your post.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

Your post should now be up on your site! If the base URL of your site is `https://octocat.github.io`, then your new post will be located at `https://octocat.github.io/YYYY/MM/DD/TITLE.html`.

### Next steps

{% data reusables.pages.add-jekyll-theme %} For more information, see "[Adding a theme to your {% data variables.product.prodname_pages %} site using Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)."
