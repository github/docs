---
title: Referencing and citing content
intro: You can use third-party tools to cite and reference content on GitHub.
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
versions:
  free-pro-team: '*'
topics:
  - Repositories
---
## Issuing a persistent identifier for your repository with Zenodo

To make your repositories easier to reference in academic literature, you can create persistent identifiers, also known as Digital Object Identifiers (DOIs). You can use the data archiving tool [Zenodo](https://zenodo.org/about) to archive a {% data variables.product.product_name %} repository and issue a DOI for the archive.

{% tip %}

**Tips:**
- Zenodo can only access public repositories, so make sure the repository you want to archive is [public](/articles/making-a-private-repository-public).
- If you want to archive a repository that belongs to an organization, the organization owner may need to [approve access](/articles/approving-oauth-apps-for-your-organization) for the Zenodo application.
- Make sure to include a [license](/articles/open-source-licensing) in your repository so readers know how they can reuse your work.

{% endtip %}

1. Navigate to [Zenodo](http://zenodo.org/).
2. In the upper-left corner of the screen, click **Log in**. ![Zenodo log in button](/assets/images/help/repository/zenodo_login.png)
3. Click **Log in with GitHub**. ![Log into Zenodo with GitHub](/assets/images/help/repository/zenodo_login_with_github.png)
4. Review the information about access permissions, then click **Authorize application**. ![Authorize Zenodo](/assets/images/help/repository/zenodo_authorize.png)
5. Navigate to the [Zenodo GitHub page](https://zenodo.org/account/settings/github/). ![Zenodo GitHub page](/assets/images/help/repository/zenodo_github_page.png)
6. To the right of the name of the repository you want to archive, toggle the button from **Off** to **On** to enable it for archiving. ![Enable Zenodo archiving on repository](/assets/images/help/repository/zenodo_toggle_on.png)

Zenodo archives your repository and issues a new DOI each time you create a new {% data variables.product.product_name %} [release](/articles/about-releases/). Follow the steps at "[Creating releases](/articles/creating-releases/)" to create a new one.

## Publicizing and citing research material with Figshare

Academics can use the data management service [Figshare](http://figshare.com) to publicize and cite research material. For more information, see [Figshare's support site](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account).
