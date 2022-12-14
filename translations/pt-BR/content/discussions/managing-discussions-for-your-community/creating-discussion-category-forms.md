---
title: Como criar formulários de categoria de discussão
shortTitle: Create discussion category forms
intro: Você pode personalizar os modelos disponíveis para os membros da comunidade usarem quando abrirem novas discussões em seu repositório.
versions:
  feature: discussion-category-forms
ms.openlocfilehash: f87bd6369bcb4f1b6e2e47fe11cd61626b1fbe7d
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193165'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## Sobre formulários de categoria de discussão

Você pode incentivar os membros da comunidade a incluir informações específicas e estruturadas em suas discussões usando formulários de discussão em seu repositório. Com os formulários de categoria de discussão, você pode criar modelos de discussão com campos de formulário da Web personalizáveis. Os formulários de discussão são escritos em YAML usando o esquema de formulário {% data variables.product.prodname_dotcom %} Para obter mais informações, confira "[Sintaxe do esquema de formulário do {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)". 

{% data reusables.actions.learn-more-about-yaml %}

Para usar um formulário de categoria de discussão em seu repositório, você deve criar um novo arquivo `/.github/DISCUSSION_TEMPLATE/` e adicioná-lo à pasta em seu repositório. 

Você também pode criar formulários de categoria de discussão para sua organização. Para obter mais informações, confira "[Como criar um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

Não há suporte para formulários de categoria de discussão para enquetes. Para obter mais informações sobre enquetes, confira "[Sobre enquetes](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-polls)".

Aqui está a versão renderizada do formulário de problema.

  ![Captura de tela de um formulário de categoria de discussão renderizado](/assets/images/help/discussions/discussion-category-form-sample.png)

## Como criar formulários de categoria de discussão

Pessoas com acesso de gravação a um repositório podem criar um formulário de categoria de discussão. 

1. Navegue até o repositório em que você deseja criar um formulário de categoria de discussão. 
2. Em seu repositório, crie um arquivo chamado `/.github/DISCUSSION_TEMPLATE/FORM-NAME.yml`, substituindo `FORM-NAME` pelo nome do seu formulário de categoria de discussão. {% data reusables.discussions.discussion-category-forms-name %} Para obter mais informações sobre como criar arquivos no GitHub, confira "[Como criar arquivos](/github/managing-files-in-a-repository/creating-new-files)".
3. No corpo do novo arquivo, digite o conteúdo do formulário de categoria de discussão. Para obter mais informações, confira "[Sintaxe para formulários de categoria de discussão](/discussions/managing-discussions-for-your-community/syntax-for-discussion-category-forms)".
4. Faça o commit do seu arquivo para o branch padrão do seu repositório. Para obter mais informações, confira "[Como criar arquivos](/github/managing-files-in-a-repository/creating-new-files)".
