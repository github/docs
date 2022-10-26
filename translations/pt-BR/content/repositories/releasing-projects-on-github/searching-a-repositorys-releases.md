---
title: Pesquisando versões de um repositório
intro: 'É possível usar palavras-chave, tags e outros qualificadores para procurar determinadas versões em um repositório.'
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: Searching releases
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '>= 3.4'
topics:
  - Repositories
ms.openlocfilehash: a61e49521452befdcddf2724cad837062c7d54a1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108011'
---
## Procurando as versões em um repositório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. Para pesquisar as versões do repositório, no campo de pesquisa na parte superior da página Versões, digite sua consulta e pressione **ENTER**.
![Campo de pesquisa Versões](/assets/images/help/releases/search-releases.png)

## Pesquisar sintaxe para versões em um repositório

Você pode fornecer o texto na sua consulta de pesquisa que será comparado com o título, texto e tag das versões do repositório. Você também pode combinar os seguintes qualificadores em versões específicas de destino.

| Qualificador        | Exemplo
| ------------- | -------------
| `draft:true` | **draft:true** corresponderá apenas às versões de rascunho.
| `draft:false` | **draft:false** corresponderá apenas às versões publicadas.
| `prerelease:true` | **prerelease:true** corresponderá apenas aos pré-lançamentos.
| `prerelease:false` | **prerelease:false** corresponderá apenas às versões que não são pré-lançamentos.
| <code>tag:<em>TAG</em></code> | **tag:v1** corresponde a uma versão com a tag v1 e a todas as versões secundárias ou de patch na v1, como v1.0, v1.2 e v1.2.5.
| <code>created:<em>DATE</em></code> | **created:2021** corresponderá às versões criadas durante 2021. Você também pode fornecer intervalos de datas. Para obter mais informações, confira "[Noções básicas sobre a sintaxe de pesquisa](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)".
