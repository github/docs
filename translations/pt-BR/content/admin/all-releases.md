---
title: Versões do GitHub Enterprise Server
intro: '{% data variables.product.company_short %} lança novas versões de {% data variables.product.product_name %} regularmente. Você pode examinar as versões com suporte, ver as datas de substituição e procurar a documentação da versão implantada.'
allowTitleToDifferFromFilename: true
versions:
  ghes: '*'
topics:
  - Enterprise
  - Upgrades
shortTitle: Releases
ms.openlocfilehash: 85b0848f77b12920ba853bc674327392b6a89389
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062903'
---
## Sobre versões do {% data variables.product.product_name %}

{% data reusables.enterprise.constantly-improving %} {% data variables.product.company_short %} dá suporte às quatro versões de recursos mais recentes. Para obter mais informações, confira "[Sobre os upgrades para novas versões](/admin/overview/about-upgrades-to-new-releases)".

Você pode ver as novidades de cada versão nas [notas de versão](/admin/release-notes) e exibir a documentação do administrador e do usuário para todas as versões aqui no {% data variables.product.prodname_docs %}. Ao ler a documentação, selecione a versão que reflete seu produto. Para obter mais informações, confira "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

## Versões com suporte no momento

O {% data variables.product.company_short %} dá suporte às seguintes versões do {% data variables.product.product_name %}. Para obter informações sobre a versão mais recente, confira o site do [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise).

| Versão | Versão | Reprovação | Notas de versão | Documentação |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.supported %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [Notas de versão da {{version}}](/enterprise-server@{{version}}/admin/release-notes) | [Documentação da {{version}}](/enterprise-server@{{version}}) | {%- endfor %}

## Versões preteridas

O {% data variables.product.company_short %} fornece documentação para versões preteridas, mas não mantém nem atualiza a documentação.

| Versão | Versão | Reprovação | Notas de versão | Documentação |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesWithNewFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [Notas de versão da {{version}}](/enterprise-server@{{version}}/admin/release-notes) | [Documentação da {{version}}](/enterprise-server@{{version}}) | {%- endfor %} {%- for version in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [Notas de versão da {{version}}](https://enterprise.github.com/releases/series/{{version}}) | [Documentação da {{version}}](/enterprise/{{version}}) | {%- endfor %}

### Documentação de desenvolvedor descontinuada

Documentação do desenvolvedor hospedado do {% data variables.product.company_short %} para {% data variables.product.product_name %} em um site separado até a versão 2.17. O {% data variables.product.company_short %} continua fornecendo a documentação do desenvolvedor para a versão 2.16 e anterior, mas não mantém nem atualiza a documentação.

| Versão | Versão | Reprovação | Documentação do desenvolvedor |
| :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [Documentação do desenvolvedor da {{version}}](https://developer.github.com/enterprise/{{version}}) | {%- endfor %}
