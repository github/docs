---
title: Buscar los lanzamientos de un repositorio
intro: 'Puedes utilizar palabras clave, etiquetas y otros calificadores para buscar lanzamientos particulares en un repositorio.'
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: Buscar lanzamientos
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
  ghae-issue-4974: '*'
topics:
  - Repositories
---

## Buscar lanzamientos en un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
1. Para buscar los lanzamientos del repositorio, en el campo de búsqueda de la parte superior de la página de lanzamientos, teclea tu consulta y presiona **Enter**. ![Campo de búsqueda de lanzamientos](/assets/images/help/releases/search-releases.png)

## Search syntax for searching releases in a repository

You can provide text in your search query which will be matched against the title, body, and tag of the repository's releases. You can also combine the following qualifiers to target specific releases.

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `draft:true`              | **draft:true** will only match draft releases.                                                                                                                                                                                                                                               |
| `draft:false`             | **draft:false** will only match published releases.                                                                                                                                                                                                                                          |
| <code>tag:<em>TAG</em></code> | **tag:v1** matches a release with the v1 tag and any minor or patch versions within v1, such as v1.0, v1.2, and v1.2.5.                                                                                                                                                                      |
| <code>created:<em>DATE</em></code> | **created:2021** will match releases created during 2021. You can also provide date ranges. Para obtener más información, consulta la sección "[Entender la sintaxis de búsqueda](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)". |
