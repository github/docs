---
title: Suche nach Paketen
intro: 'Du kannst auf {% data variables.product.product_name %} nach Paketen suchen und die Suchresultate mit Qualifizierern einschränken.'
product: '{% data reusables.gated-features.packages %}'
permissions: 'Jeder kann nach Paketen suchen, auf die er Zugriff hat.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Über die Suche nach Paketen

Du kannst global über das gesamte {% data variables.product.product_name %} nach Paketen suchen, oder nur innerhalb einer bestimmten Organisation. Weitere Informationen findest Du unter „[Informationen zur Suche auf {% data variables.product.prodname_dotcom %}](/articles/about-searching-on-github).“

{% if currentVersion != "free-pro-team@latest" %}
Um Pakete zu finden, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, benutze die Qualifizierer `user` oder `org`.
{% endif %}

{% data reusables.search.syntax_tips %}

### Suche in den Paketen eines Benutzers oder einer Organisation

Um Pakete zu finden, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, benutze die Qualifizierer `user` oder `org`.

| Qualifizierer             | Beispiel                                                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>user:<em>USERNAME</em></code> | [**user:codertocat**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) findet Pakete die @codertocat gehören                                               |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) findet Pakete, die der {% data variables.product.prodname_dotcom %}-Organisation gehören |

### Pakete nach Sichtbarkeit filtern

Um Deine Suche nach öffentlichen oder privaten Paketen zu filtern, benutze den Qualifizierer `is`.

| Qualifizierer | Beispiel                                                                                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:public`   | [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) findet öffentliche Pakete, die das Wort „angular" beinhalten |
| `is:private`  | [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) findet private Pakete, die das Wort „php" beinhalten               |
