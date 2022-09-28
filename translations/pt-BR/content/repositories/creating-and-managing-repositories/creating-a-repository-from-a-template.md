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
ms.openlocfilehash: 8f2ba1bcda417f3202e0c43c693afe50434130ec
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127096'
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
2. Acima da lista de arquivos, selecione **Usar este modelo**.
  ![Botão Usar este modelo](/assets/images/help/repository/use-this-template-button.png) {% data reusables.repositories.owner-drop-down %} {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
6. Opcionalmente, para incluir a estrutura de diretório e os arquivos de todos os branches no modelo e não apenas o branch padrão, selecione **Incluir todos os branches**.
  ![Caixas de seleção Incluir todos os branches](/assets/images/help/repository/include-all-branches.png) {% data reusables.repositories.select-marketplace-apps %}
8. Clique em **Criar repositório do modelo**.
