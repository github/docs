---
title: Viewing your repository's releases and tags
intro: You can view the chronological history of your repository by release name or tag version number.
redirect_from:
  - /articles/working-with-tags/
  - /articles/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-tags
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also view a release using the {% data variables.product.prodname_cli %}. For more information, see "[`gh release view`](https://cli.github.com/manual/gh_release_view)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### Viewing releases

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. At the top of the Releases page, click **Releases**.

### Viewing tags

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. At the top of the Releases page, click **Tags**. ![Tags page](/assets/images/help/releases/tags-list.png)

### Дополнительная литература

- "[Signing tags](/articles/signing-tags)"
