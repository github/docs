---
title: Releases und Tags Deines Repository anzeigen
intro: Du kannst den chronologischen Verlauf Deines Repository nach Release-Name oder Tag-Nummer der Version anzeigen.
redirect_from:
  - /articles/working-with-tags/
  - /articles/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-tags
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also view a release using the {% data variables.product.prodname_cli %}. For more information, see "[`gh release view`](https://cli.github.com/manual/gh_release_view)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### Releases anzeigen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. Klicke oben auf der Releases-Seite auf **Releases**.

### Tags anzeigen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. Klicke oben auf der Releases-Seite auf **Tags**. ![Tags-Seite](/assets/images/help/releases/tags-list.png)

### Weiterführende Informationen

- „[Tags signieren](/articles/signing-tags)“
