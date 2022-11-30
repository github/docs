---
title: Adicionar recursos de suporte ao projeto
intro: Você pode criar um arquivo SUPPORT para permitir que as pessoas conheçam diferentes maneiras de obter ajuda com o seu projeto.
redirect_from:
  - /articles/adding-support-resources-to-your-project
  - /github/building-a-strong-community/adding-support-resources-to-your-project
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add support resources
ms.openlocfilehash: 12819511ac3784720398175ef2d313eca7d03afe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084093'
---
Para direcionar as pessoas para recursos de suporte específicos, adicione um arquivo SUPPORT à raiz do repositório, a `docs` ou à pasta `.github`. Quando uma pessoa cria um problema no seu repositório, ela vê um link para o arquivo SUPPORT do projeto.

![Diretrizes de suporte](/assets/images/help/issues/support_guidelines_in_issue.png)

{% ifversion fpt or ghes or ghec %}

Você pode criar recursos padrão de suporte para sua organização ou conta pessoal. Para obter mais informações, confira "[Como criar um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

{% tip %}

**Dica:** para ajudar as pessoas a encontrar suas diretrizes de suporte, vincule o arquivo SUPPORT de outros locais no repositório, como o [arquivo LEIAME](/articles/about-readmes/).

{% endtip %}

## Adicionar recursos de suporte ao projeto

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. No campo de nome do arquivo, digite *SUPPORT.md* (com todas as letras em maiúsculas).
4. Na guia **Editar novo arquivo**, adicione informações sobre como as pessoas podem obter suporte para seu projeto.
5. Para revisar o arquivo SUPPORT, clique em **Visualizar**.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
