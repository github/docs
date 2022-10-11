---
title: Publicar ações no GitHub Marketplace
intro: 'Você pode publicar ações em {% data variables.product.prodname_marketplace %} e compartilhar as ações que você criou com a comunidade {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
shortTitle: Publish in GitHub Marketplace
ms.openlocfilehash: e16f65116d7aa7c327e937dc2eba8964195e547d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884298'
---
Você deve aceitar os termos de serviço para publicar ações em {% data variables.product.prodname_marketplace %}.

## Sobre a publicação de ações

Antes de poder publicar uma ação, você deverá criar uma ação no seu repositório. Para obter mais informações, confira "[Como criar ações](/actions/creating-actions)".

Ao planejar publicar a sua ação em {% data variables.product.prodname_marketplace %}, você deverá garantir que o repositório inclui apenas o arquivo de metadados, o código e os arquivos necessários para a ação. Criar um repositório único para a ação permite que você identifique, lance e empacote o código em uma única unidade. {% data variables.product.prodname_dotcom %} também usa os metadados da ação na sua página {% data variables.product.prodname_marketplace %}.

As ações são publicadas em {% data variables.product.prodname_marketplace %} imediatamente e não são revisadas por {% data variables.product.prodname_dotcom %}, desde que esses requisitos sejam satisfeitos:

- A ação precisa estar em um repositório público.
- Cada repositório precisa conter uma única ação.
- O arquivo de metadados da ação (`action.yml` ou `action.yaml`) precisa estar no diretório raiz do repositório.
- O arquivo de metadados da ação `name` precisa ser exclusivo.
  - O `name` não pode corresponder a um nome de ação existente publicado no {% data variables.product.prodname_marketplace %}.
  - O `name` não pode corresponder a um usuário ou a uma organização do {% data variables.product.prodname_dotcom %}, a menos que o usuário ou o proprietário da organização esteja publicando a ação. Por exemplo, somente a organização do {% data variables.product.prodname_dotcom %} pode publicar uma ação chamada `github`.
  - O `name` não pode corresponder a uma categoria existente do {% data variables.product.prodname_marketplace %}.
  - {% data variables.product.prodname_dotcom %} reserva os nomes de recursos {% data variables.product.prodname_dotcom %}.

## Publicando uma ação

Você pode adicionar a ação que você criou em {% data variables.product.prodname_marketplace %} identificando-a como uma nova versão e publicando-a.

Para compartilhar uma nova versão e publicar a ação em {% data variables.product.prodname_marketplace %}, siga essas instruções:

{% data reusables.repositories.navigate-to-repo %}
1. Navegue até o arquivo de metadados da ação em seu repositório (`action.yml` ou `action.yaml`) e você verá um banner para publicar a ação no {% data variables.product.prodname_marketplace %}. Clique em **Criar rascunho de uma versão**.

   ![Botão Publicar ação no marketplace](/assets/images/help/repository/publish-github-action-to-marketplace-button.png)
1. Em "Ação de liberar", selecione a caixa de seleção para publicar a ação no {% data variables.product.prodname_marketplace %}. Se você não puder selecionar a caixa de seleção, primeiro clique no link para ler e aceitar o Contrato de Desenvolvedor do {% data variables.product.prodname_marketplace %}.
![Seleção de Publicar no Marketplace](/assets/images/help/repository/marketplace_actions_publish.png)
1. Se as etiquetas do seu arquivo de metadados tiverem algum problema, você receberá uma mensagem de erro.
![Visualização da notificação](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. Se você ver alguma sugestão na tela, resolva-as atualizando o arquivo de metadados. Após a conclusão, você verá a mensagem "Está tudo certo!" .
](/assets/images/help/repository/marketplace_actions_looksgood.png)Correção de erros![
1. Escolha uma "categoria primária" e, opcionalmente, "outra categoria", que ajudará as pessoas a encontrar a sua ação em {% data variables.product.prodname_marketplace %}.
![Escolha da categoria](/assets/images/help/repository/marketplace_actions_categories.png)
1. Marque a sua Ação com uma versão e adicione um título de versão. Isso ajuda as pessoas a saber quais alterações ou recursos estão incluídos na versão. As pessoas verão a versão na página dedicada da ação {% data variables.product.prodname_marketplace %}.
![Marcação de uma versão](/assets/images/help/repository/marketplace_actions_version.png)
1. Preencha todos os outros campos e clique em **Publicar versão**. A publicação exige a utilização de uma autenticação de dois fatores. Para obter mais informações, confira "[Como configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication/)".
![Publicar a versão](/assets/images/help/repository/marketplace_actions_publishrelease.png)

## Remover uma ação de {% data variables.product.prodname_marketplace %}

Para remover uma ação publicada de {% data variables.product.prodname_marketplace %}, você deverá atualizar cada versão publicada. Realize as etapas a seguir para cada versão da ação que você publicou em {% data variables.product.prodname_marketplace %}.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Na página Versões, à direita da versão que deseja editar, clique em **Editar**.
![Botão Editar para a versão](/assets/images/help/releases/release-edit-btn.png)
4. Selecione **Publicar esta ação no {% data variables.product.prodname_marketplace %}** para remover a seleção da caixa.
![Botão Publicar esta ação](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. Clique em **Atualizar versão** na parte inferior da página.
![Botão Atualizar versão](/assets/images/help/repository/actions-marketplace-update-release.png)
