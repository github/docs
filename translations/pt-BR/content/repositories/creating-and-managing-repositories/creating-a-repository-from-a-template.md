---
title: Criar um repositório a partir de um modelo
intro: Você pode gerar um novo repositório com os mesmos arquivos e estrutura de diretório de um repositório que já existe.
redirect_from:
  - /articles/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create from a template
ms.openlocfilehash: 16d124431426e19cf95c768e8a4cdaa5f4da2e17
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159402'
---
## Sobre modelos de repositório

Qualquer pessoa com permissões de leitura em um repositório de modelos pode criar um repositório a partir desse modelo. Para obter mais informações, confira "[Como criar um repositório de modelos](/articles/creating-a-template-repository)".

{% tip %}

**Dica**: você também pode criar um repositório com base em um modelo usando a {% data variables.product.prodname_cli %}. Para obter mais informações, confira "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" na documentação da {% data variables.product.prodname_cli %}.

{% endtip %}

Você pode optar por incluir a estrutura do diretório e os arquivos apenas a partir do branch-padrão do repositório de modelos ou incluir todos os branches. Os branches criados a partir de um modelo têm histórico não relacionado, o que significa que você não pode criar pull requests ou fazer merge entre os branches.

Criar um repositório a partir de um modelo é semelhante a bifurcar um repositório, mas há diferenças importantes:
- Uma nova bifurcação inclui o histórico de commits inteiro do repositório principal, enquanto um repositório criado de um modelo começa com um único commit.
- Os commits em uma bifurcação não aparecem no gráfico de contribuições, enquanto os commits em um repositório criado de um modelo aparecem no gráfico de contribuição.
- Uma bifurcação pode ser uma maneira temporária de contribuir com código em um projeto existente, enquanto criar um repositório de um modelo inicia um novo projeto rapidamente.

Para obter mais informações sobre forks, confira "[Sobre os forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)".

## Criar um repositório a partir de um modelo

{% data reusables.repositories.navigate-to-repo %}
1. Acima da lista de arquivos, selecione **Usar este modelo**.
{% ifversion fpt or ghec %}
1. Selecione **Criar um repositório**.

   ![Usar este botão de modelo](/assets/images/help/repository/use-this-template-button.png)

   {% note %}

   **Nota:** como alternativa, é possível abrir o modelo em um codespace e publicar seu trabalho posteriormente em um novo repositório. Para saber mais, confira "[Como criar um codespace com base em um modelo](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)".

   {% endnote %} {% endif %} {% data reusables.repositories.owner-drop-down %} {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
1. Opcionalmente, para incluir a estrutura de diretório e os arquivos de todos os branches no modelo e não apenas o branch padrão, selecione **Incluir todos os branches**.
  ![Caixas de seleção Incluir todos os branches](/assets/images/help/repository/include-all-branches.png) {% data reusables.repositories.select-marketplace-apps %}
8. Clique em **Criar repositório do modelo**.
