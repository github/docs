---
title: Releases und Tags Deines Repository anzeigen
intro: Du kannst den chronologischen Verlauf Deines Repository nach Release-Name oder Tag-Nummer der Version anzeigen.
redirect_from:
  - /articles/working-with-tags/
  - /articles/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-releases-and-tags
  - /github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags
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

## Releases anzeigen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. Klicke oben auf der Releases-Seite auf **Releases**.

## Tags anzeigen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. Klicke oben auf der Releases-Seite auf **Tags**. ![Tags-Seite](/assets/images/help/releases/tags-list.png)

## Weiterführende Informationen

- „[Tags signieren](/articles/signing-tags)“
