---
title: Lanzamientos de GitHub Enterprise Server
intro: '{% data variables.product.company_short %} lanza versiones nuevas de {% data variables.product.product_name %} con frecuencia. Puedes revisar versiones compatibles, ver fechas de obsolescencia y buscar documentación de los lanzamientos que hayas desplegado.'
allowTitleToDifferFromFilename: true
versions:
  ghes: '*'
topics:
  - Enterprise
  - Upgrades
shortTitle: Lanzamientos
---

## Acerca de los lanzamientos de {% data variables.product.product_name %}

{% data reusables.enterprise.constantly-improving %} {% data variables.product.company_short %} es compatible con los cuatro lanzamientos de características más recientes. Para obtener más información, consulta la sección "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)".

Puedes ver lo nuevo de cada lanzamiento en las [notas de lanzamiento](/admin/release-notes) y puedes ver la documentación de usuario y de administrador de todos los lanzamientos aquí en {% data variables.product.prodname_docs %}. Cuando leas la documentación, asegúrate de seleccionar la versión que refleje tu producto. Para obtener más información, consulta la sección "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

## Lanzamientos con compatibilidad actual

{% data variables.product.company_short %} es compatible con los siguientes lanzamientos de {% data variables.product.product_name %}. Para obtener más información sobre el lanzamiento más reciente, consulta el sitio web de [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise).

| Versión | Lanzamiento | Obsolesencia | Notas de lanzamiento | Documentación |
|:------- |:----------- |:------------ |:-------------------- |:------------- |
|         |             |              |                      |               |
{%- for version in enterpriseServerReleases.supported %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [notas de lanzamiento de la {{version}}](/enterprise-server@{{version}}/admin/release-notes) | [documentación de la {{version}}](/enterprise-server@{{version}}) |
{%- endfor %}

## Lanzamientos obsoletos

{% data variables.product.company_short %} proporciona documentación para versiones obsoletas, pero no la mantiene ni actualiza.

| Versión | Lanzamiento | Obsolesencia | Notas de lanzamiento | Documentación |
|:------- |:----------- |:------------ |:-------------------- |:------------- |
|         |             |              |                      |               |
{%- for version in enterpriseServerReleases.deprecatedReleasesWithNewFormat %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [notas de lanzamiento de la {{version}}](/enterprise-server@{{version}}/admin/release-notes) | [documentación de la {{version}}](/enterprise-server@{{version}}) |
{%- endfor %}
{%- for version in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [notas de lanzamiento de la {{version}}](https://enterprise.github.com/releases/series/{{version}}) | [documentación de la {{version}}](/enterprise/{{version}}) |
{%- endfor %}

### Documentación obsoletizada para desarrolladores

{% data variables.product.company_short %} hospedó documentación para desarrolladores para {% data variables.product.product_name %} en un sitio diferente hasta el lanzamiento 2.17. {% data variables.product.company_short %} sigue proporcionando documentación para desarrolladores para la versión 2.16 y anteriores, pero no la mantiene ni la actualiza.

| Versión | Lanzamiento | Obsolesencia | Documentación para desarrolladores |
|:------- |:----------- |:------------ |:---------------------------------- |
|         |             |              |                                    |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %}
| {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [documentación para desarrolladores de la {{version}}](https://developer.github.com/enterprise/{{version}}) |
{%- endfor %}
