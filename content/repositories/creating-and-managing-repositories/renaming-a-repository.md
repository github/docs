---
title: Renaming a repository
intro: You can rename a repository if you're either an organization owner or have admin permissions for the repository.
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
  - /github/administering-a-repository/managing-repository-settings/renaming-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
When you rename a repository, all existing information, with the exception of project site URLs, is automatically redirected to the new name, including:

- Issues
- Wikis
- Stars
- Followers

For more information on project sites, see "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)."

In addition to redirecting web traffic, all `git clone`, `git fetch`, or `git push` operations targeting the previous location will continue to function as if made on the new location. However, to reduce confusion, we strongly recommend updating any existing local clones to point to the new repository URL. You can do this by using `git remote` on the command line:

```shell
git remote set-url origin NEW_URL
```

For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/managing-remote-repositories)."

{% ifversion fpt or ghec %}

If you plan to rename a repository that has a {% data variables.product.prodname_pages %} site, we recommend using a custom domain for your site. This ensures that the site's URL isn't impacted by renaming the repository. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)."

{% endif %}

{% note %}

**Note:** {% data variables.product.prodname_dotcom %} will not redirect calls to an action hosted by a renamed repository. Any workflow that uses that action will fail with the error `repository not found`. Instead, create a new repository and action with the new name and archive the old repository. For more information, see "[AUTOTITLE](/repositories/archiving-a-github-repository/archiving-repositories)."

{% endnote %}

{% warning %}

**Warning**: If you create a new repository under your account in the future, do not reuse the original name of the renamed repository. If you do, redirects to the renamed repository will no longer work.

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the **Repository Name** field, type the new name of your repository.
1. Click **Rename**.
