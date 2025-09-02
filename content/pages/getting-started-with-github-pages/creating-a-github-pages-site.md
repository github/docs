---
title: Creating a GitHub Pages site
intro: 'You can create a {% data variables.product.prodname_pages %} site in a new or existing repository.'
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
  ghec: '*'
topics:
  - Pages
shortTitle: Create a GitHub Pages site
---



## Creating a repository for your site

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% indented_data_reference reusables.pages.emu-org-only spaces=3 %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

## Creating your site

{% data reusables.pages.must-have-repo-first %}
{% data reusables.pages.private_pages_are_public_warning %}
{% data reusables.pages.navigate-site-repo %}
1. Decide which publishing source you want to use. See [AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
1. Create the entry file for your site. {% data variables.product.prodname_pages %} will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site.

   If your publishing source is a branch and folder, the entry file must be at the top level of the source folder on the source branch. For example, if your publishing source is the `/docs` folder on the `main` branch, your entry file must be located in the `/docs` folder on a branch called `main`.

   If your publishing source is a {% data variables.product.prodname_actions %} workflow, the artifact that you deploy must include the entry file at the top level of the artifact. Instead of adding the entry file to your repository, you may choose to have your {% data variables.product.prodname_actions %} workflow generate your entry file when the workflow runs.
1. Configure your publishing source. See [AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
{% data reusables.pages.check-workflow-run %}

## Viewing your published site

{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{%- ifversion ghec %}
1. Optionally, if you're publishing a project site from a private or internal repository, choose the visibility for your site. Under "{% data variables.product.prodname_pages %}," select the visibility dropdown menu, then select public or private.
   ![Screenshot of Pages settings for a repository. The visibility dropdown, currently set to "Private," is outlined in dark orange.](/assets/images/help/pages/public-or-private-visibility.png)
   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3 %}
{%- endif %}
1. To see your published site, under "{% data variables.product.prodname_pages %}," click **{% octicon "link-external" aria-hidden="true" aria-label="link-external" %} Visit site**.

{% data reusables.pages.twenty-minutes-to-publish %}
{% data reusables.pages.admin-must-push %}

## Static site generators

{% data variables.product.prodname_pages %} publishes any static files that you push to your repository. You can create your own static files or use a static site generator to build your site for you. You can also customize your own build process locally or on another server.

If you use a custom build process or a static site generator other than Jekyll, you can write a {% data variables.product.prodname_actions %} workflow to build and publish your site. {% data variables.product.github %} provides workflow templates for several static site generators. For more information, see [AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

If you publish your site from a source branch, {% data variables.product.prodname_pages %} will use Jekyll to build your site by default. If you want to use a static site generator other than Jekyll, we recommend that you write a {% data variables.product.prodname_actions %} to build and publish your site instead. Otherwise, disable the Jekyll build process by creating an empty file called `.nojekyll` in the root of your publishing source, then follow your static site generator's instructions to build your site locally.

>[!NOTE] {% data variables.product.prodname_pages %} does not support server-side languages such as PHP, Ruby, or Python.

## MIME types on {% data variables.product.prodname_pages %}

A MIME type is a header that a server sends to a browser, providing information about the nature and format of the files the browser requested. {% data variables.product.prodname_pages %} supports more than 750 MIME types across thousands of file extensions. The list of supported MIME types is generated from the [mime-db project](https://github.com/jshttp/mime-db).

While you can't specify custom MIME types on a per-file or per-repository basis, you can add or modify MIME types for use on {% data variables.product.prodname_pages %}. For more information, see [the mime-db contributing guidelines](https://github.com/jshttp/mime-db#adding-custom-media-types).

## Next steps

You can add more pages to your site by creating more new files. Each file will be available on your site in the same directory structure as your publishing source. For example, if the publishing source for your project site is the `gh-pages` branch, and you create a new file called `/about/contact-us.md` on the `gh-pages` branch, the file will be available at {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html`.

You can also add a theme to customize your site’s look and feel. For more information, see [AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll).

## Further reading

* [AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll).
* [AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)
* [AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)
* [AUTOTITLE](/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)
