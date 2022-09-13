---
title: URLs e referências autovinculadas
intro: 'As referências a URLs, problemas, pull requests e commits são automaticamente reduzidas e convertidas em links.'
redirect_from:
  - /articles/autolinked-references-and-urls
  - /github/writing-on-github/autolinked-references-and-urls
  - /github/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Auto linked references
ms.openlocfilehash: 6f6548dbe931a7a6adb809aa4e5616db4358c242
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147419686'
---
## URLs

O {% data variables.product.product_name %} cria links automaticamente de URLs padrão.

`Visit https://github.com`

![URL vinculado automaticamente renderizado](/assets/images/help/writing/url-autolink-rendered.png)

Para obter mais informações sobre a criação de links, confira "[Sintaxe básica de escrita e formatação](/articles/basic-writing-and-formatting-syntax/#links)".

## Problemas e pull requests

Nas conversas do {% data variables.product.product_name %}, as referências a problemas e pull request são convertidas automaticamente em links curtos.

{% note %}

**Observação:** as referências vinculadas automaticamente não são criadas em wikis nem arquivos em um repositório.

{% endnote %}

| Tipo de referência | Referência bruta | Link curto |
| --- | --- | --- |
| URL do problema ou da solicitação de pull | https://github.com/jlord/sheetsee.js/issues/26 | [#26](https://github.com/jlord/sheetsee.js/issues/26)
| `#` e o número do problema ou da solicitação de pull | #26 | [#26](https://github.com/jlord/sheetsee.js/issues/26) |
| `GH-` e o número do problema ou da solicitação de pull | GH-26 | [GH-26](https://github.com/jlord/sheetsee.js/issues/26) |
| `Username/Repository#` e o número do problema ou da solicitação de pull | jlord/sheetsee.js#26 | [jlord/sheetsee.js#26](https://github.com/jlord/sheetsee.js/issues/26)
| `Organization_name/Repository#` e o número do problema ou da solicitação de pull | github/linguist#4039 | [github/linguist#4039](https://github.com/github/linguist/pull/4039)

{% ifversion fpt or ghec %} Se você fizer referência a um problema, pull request ou discussão em uma lista, a referência irá desenrolar-se para mostrar o título e o estado. Para obter mais informações sobre listas de tarefas, confira "[Sobre as listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".
{% endif %}

## Rótulos
Ao referenciar a URL de uma etiqueta em Markdown, a etiqueta é renderizada automaticamente. Somente as etiquetas do mesmo repositório são renderizadas, as URLs que apontam para uma etiqueta de um repositório diferente são renderizadas como qualquer [URL](/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#urls).

Para encontrar a URL de uma etiqueta, navegue até a página de etiquetas e clique em uma etiqueta. Por exemplo, a URL da etiqueta "melhoria" em nosso [repositório de documentos](https://github.com/github/docs/) públicos é

```md
https://github.com/github/docs/labels/enhancement
```

## SHAs de commit

As referências em um hash SHA de commit são convertidas automaticamente em links curtos para o commit no {% data variables.product.product_name %}.

| Tipo de referência | Referência bruta | Link curto |
| --- | --- | --- |
| URL da confirmação | [`https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| SHA | a5c3785ed8d6a35868bc169f07e40e889087fd2e | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| User@SHA | jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e | [jlord@a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)
| `Username/Repository@SHA` | `jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e` | [`jlord/sheetsee.js@a5c3785`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |

## Links automáticos personalizados para recursos externos

{% data reusables.repositories.autolink-references %}

## Leitura adicional

- "[Sintaxe básica de escrita e formatação](/articles/basic-writing-and-formatting-syntax)"
