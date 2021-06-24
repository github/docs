---
title: Viewing your repository's releases and tags
intro: You can view the chronological history of your repository by release name or tag version number.
redirect_from:
  - /articles/working-with-tags/
  - /articles/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-releases-and-tags
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: View releases & tags
---
{% ifversion fpt or ghae or ghes %}
{% tip %}

**Tip**: You can also view a release using the {% data variables.product.prodname_cli %}. For more information, see "[`gh release view`](https://cli.github.com/manual/gh_release_view)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

## Viewing releases

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. At the top of the Releases page, click **Releases**.

## Viewing tags

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. At the top of the Releases page, click **Tags**.
![Tags page](/assets/images/help/releases/tags-list.png)

## Further reading

- "[Signing tags](/articles/signing-tags)"
