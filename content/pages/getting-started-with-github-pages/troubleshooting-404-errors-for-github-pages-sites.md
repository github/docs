---
title: Troubleshooting 404 errors for GitHub Pages sites
intro: 'This guide will help you troubleshoot common reasons you may be seeing a 404 error.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot 404 errors
---

## Troubleshooting 404 errors

In this guide you'll find common reasons you may be seeing a 404 error while building your {% data variables.product.prodname_pages %} site.

- [{% data variables.product.prodname_dotcom %}'s Status page](#githubs-status-page){% ifversion fpt or ghec %}
- [DNS setup](#dns-setup){% endif %}
- [Browser cache](#browser-cache)
- [`index.html` file](#indexhtml-file)
- [Directory contents](#directory-contents){% ifversion fpt or ghec %}
- [Custom domain](#custom-domain){% endif %}
- [Repository](#repository)

### {% data variables.product.prodname_dotcom %}'s Status page

If you see a 404 error while building a {% data variables.product.prodname_pages %} site, first check {% data variables.product.prodname_dotcom %}'s [Status page](https://githubstatus.com) for any active incidents. {% ifversion fpt or ghec %}

### DNS setup

Make sure {% data variables.product.prodname_dotcom %}'s DNS records are set up correctly with your DNS provider. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)."{% endif %}

### Browser cache

If your {% data variables.product.prodname_pages %} site is private and you see a 404 error, you may need to clear your browser's cache. For more information on clearing your cache, see your browser's documentation.

### `index.html` file

{% data variables.product.prodname_pages %} will look for an `index.html` file as the entry file for your site.

- Make sure you have an `index.html` file in the repository for your site on {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)."
- The entry file must be at the top level of your chosen publishing source. For example, if your publishing source is the `/docs` directory on the `main` branch, your entry file must be located in the `/docs` directory on a branch called `main`.

  If your publishing source is a branch and directory, the entry file must be at the top level of the source directory on the source branch. For example, if your publishing source is the `/docs` directory on the `main` branch, your entry file must be located in the `/docs` directory on a branch called `main`.

  If your publishing source is a {% data variables.product.prodname_actions %} workflow, the artifact that you deploy must include the entry file at the top level of the artifact. Instead of adding the entry file to your repository, you may choose to have your {% data variables.product.prodname_actions %} workflow generate your entry file when the workflow runs.

- The name of the `index.html` file is case sensitive. For example, `Index.html` will not work.
- The name of the file should be `index.html`, not `index.HTML` or any other variation.

### Directory contents

Check that your directory contents are in the root directory.

{% ifversion fpt or ghec %}

### Custom domain

If you're using a custom domain, make sure it's set up correctly. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)."

- The `CNAME` record should always point to `<USER>.github.io` or `<ORGANIZATION>.github.io`, excluding the repository name. {% data reusables.pages.contact-dns-provider %}
- If you are able to access your landing page, but encounter broken links throughout, it is likely because you either didn't have a custom domain name before or are reverting back from having a custom domain name. In such cases, changing the routing path does not initiate a rebuild of the page. The recommended solution is to ensure that your site rebuilds automatically when adding or removing a custom domain name. This may involve configuring a commit author and modifying the custom domain name settings.{% endif %}

### Repository

Check whether your repository meets the following requirements.

- The branch you are using to publish your site must be the `main` or default branch.
- The repository must have a commit pushed to it by someone with admin permissions for the repository, such as the repository owner.
- Switching the repository's visibility from public to private or vice versa will change the URL of your {% data variables.product.prodname_pages %} site, which will result in broken links until the site is rebuilt.

If you are still receiving a 404 error, start a [{% data variables.product.prodname_github_community %} discussion](https://github.com/orgs/community/discussions/categories/pages) in the Pages category.
