---
title: Buscar los lanzamientos de un repositorio
intro: 'Puedes utilizar palabras clave, etiquetas y otros calificadores para buscar lanzamientos particulares en un repositorio.'
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: Buscar lanzamientos
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
  ghae: issue-4974
topics:
  - Repositories
---

## Buscar lanzamientos en un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
1. Para buscar los lanzamientos del repositorio, en el campo de búsqueda de la parte superior de la página de lanzamientos, teclea tu consulta y presiona **Enter**. ![Campo de búsqueda de lanzamientos](/assets/images/help/releases/search-releases.png)

## Sintaxis de búsqueda para buscar lanzamientos en un repositorio

Puedes proporcionar texto en tu consulta de búsqueda, el cual se empatará contra el título, cuerpo y etiqueta de los lanzamientos del repositorio. También puedes combinar los siguientes calificadores para apuntar a lanzamientos específicos.

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                                                                                                     |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `draft:true`              | **draft:true** solo concidirá con borradores de lanzamientos.                                                                                                                                                                                                                                                               |
| `draft:false`             | **draft:false** solo coincidirá con lanzamientos publicados.                                                                                                                                                                                                                                                                |
| `prerelease:true`         | **prerelease:true** solo coincidirá con lanzamientos previos.                                                                                                                                                                                                                                                               |
| `prerelease:false`        | **prerelease:false** solo coincidierá con lanzamientos que no sean previos.                                                                                                                                                                                                                                                 |
| <code>tag:<em>TAG</em></code> | **tag:v1** coincide con un lanzamiento con la etiqueta de v1 y con cualquier versión menor o parchada dentro de dicha v1, tal como v1.0, v1.2 y v1.2.5.                                                                                                                                                                     |
| <code>created:<em>DATE</em></code> | **created:2021** coincidirá con lanzamientos que se crearon durante el 2021. También puedes proporcionar rangos de fechas. Para obtener más información, consulta la sección "[Entender la sintaxis de búsqueda](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)". |
