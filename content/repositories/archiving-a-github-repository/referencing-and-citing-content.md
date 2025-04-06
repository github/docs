---
title: Referencing and citing content
intro: You can use third-party tools to cite and reference content on GitHub.
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/referencing-and-citing-content
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Reference & cite content
---
## Issuing a persistent identifier for your repository with Zenodo

To make your repositories easier to reference in academic literature, you can create persistent identifiers, also known as Digital Object Identifiers (DOIs). You can use the data archiving tool [Zenodo](https://about.zenodo.org/) to archive a repository on {% data variables.product.prodname_dotcom %} and issue a DOI for the archive.

{% tip %}

**Tips:**
* Zenodo can only access public repositories, so make sure the repository you want to archive is [public](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility).
* If you want to archive a repository that belongs to an organization, the organization owner may need to [approve access](/organizations/managing-oauth-access-to-your-organizations-data/approving-oauth-apps-for-your-organization) for the Zenodo application.
* Make sure to include a [license](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) in your repository so readers know how they can reuse your work.

{% endtip %}

1. Navigate to the [login page](https://zenodo.org/login) for Zenodo.
1. Click **Log in with {% data variables.product.prodname_dotcom %}**.
1. Review the information about access permissions, then click **Authorize zenodo**.
1. Navigate to the [Zenodo {% data variables.product.prodname_dotcom %} page](https://zenodo.org/account/settings/github/).
1. To the right of the name of the repository you want to archive, toggle the button to **On**.

Zenodo archives your repository and issues a new DOI each time you create a new {% data variables.product.product_name %} [release](/repositories/releasing-projects-on-github/about-releases). Follow the steps at "[AUTOTITLE](/repositories/releasing-projects-on-github/managing-releases-in-a-repository)" to create a new one.

## Publicizing and citing research material with Figshare

Academics can use the data management service [Figshare](http://figshare.com) to publicize and cite research material. For more information, see [Figshare's support site](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account).
