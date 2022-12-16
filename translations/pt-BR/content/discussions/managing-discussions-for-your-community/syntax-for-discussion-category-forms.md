---
title: Sintaxe para formulários de categoria de discussão
shortTitle: Syntax for discussion category forms
intro: Você pode usar a sintaxe YAML para definir os campos em seus formulários de categoria de discussão.
versions:
  feature: discussion-category-forms
ms.openlocfilehash: 73bb77967d5a7db3452e067c35d567a8279a0cb2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193185'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## Sobre a sintaxe YAML para formulários de categoria de discussão

Você pode criar formulários de categoria de discussão personalizados adicionando um arquivo de definição de formulário YAML à pasta `/.github/DISCUSSION_TEMPLATE/` no repositório. {% data reusables.actions.learn-more-about-yaml %} 

{% data reusables.discussions.discussion-category-forms-name %}

Para cada campo, você pode definir o tipo de entrada, a validação e um rótulo padrão.

Quando um membro da comunidade preenche um formulário de discussão, suas respostas para cada entrada são convertidas em Markdown e adicionadas ao corpo de uma discussão. Os membros da comunidade podem editar suas discussões que foram criadas com um formulário de discussão e outras pessoas podem interagir com a discussão, como uma discussão criada por meio de outros métodos.

Este arquivo de configuração YAML de exemplo define um formulário de categoria de discussão geral.

{% data reusables.discussions.discussion-category-forms-sample %}

## Sintaxe de nível superior

O arquivo de configuração para um formulário de categoria de discussão deve conter uma chave `body` e o `body` deve conter pelo menos 1 campo não Markdown.

```YAML{:copy}
body:
- type: input
  id: suggestion
  attributes:
    label: Suggestion
    description: "How might we make this project better?"
    placeholder: "Adding a CODE_OF_CONDUCT.md file would be a great idea."
  validations:
    required: true
```

Você pode definir as seguintes chaves de nível superior para cada formulário de problema.

| Chave | Descrição | Obrigatório | Tipo |
| :-- | :-- | :-- | :-- | :-- |
| `body` | Definição dos tipos de entrada no formulário de discussão. | Obrigatório | Array |
| `labels` | Etiquetas que serão adicionadas automaticamente a discussões criadas com este modelo. | Opcional | Matriz ou strings delimitadas por vírgula |
| `title` | Um título padrão que será preenchido previamente no formulário de envio de discussão. | Opcional | String |

Para adicionar campos ao formulário, inclua uma matriz de elementos de formulário na chave `body`. Para obter uma lista de elementos disponíveis e suas sintaxes, confira "[Sintaxe para o esquema do formulário do {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)."
