---
title: Publicando ações no Marketplace do GitHub 
intro: 'Você pode publicar ações em {% data variables.product.prodname_marketplace %} e compartilhar as ações que você criou com a  and share actions you''ve created with the {% data variables.product.prodname_dotcom %} comunidade.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
shortTitle: Publicando ações no Marketplace do GitHub 
---

Você deve aceitar os termos de serviço para publicar ações em {% data variables.product.prodname_marketplace %}.

## Sobre publicando ações

Antes de publicar uma ação, você precisará criar uma ação em seu repositório. Para obter mais informações, consulte "[Creating actions](/actions/creating-actions)."

Ao planejar a publcação da sua ação em {% data variables.product.prodname_marketplace %}, você precisará garantir que o repositório inclua apenas o arquivo de metadados, o código e os arquivos necessários para a ação. A criação de um único repositório para a ação permite marcar, liberar e empacotar o código em uma única unidade. {% data variables.product.prodname_dotcom %} também usa os metadados da ação em sua página {% data variables.product.prodname_marketplace %}.

As ações são publicadas em {% data variables.product.prodname_marketplace %} imediatamente e não são revisadas por {% data variables.product.prodname_dotcom %} desde que atendam a estes requisitos:

- A ação deve estar em um repositório público.
- Cada repositório deve conter uma única ação.
- O arquivo de metadados da ação (`action.yml` ou `action.yaml`) deve estar no diretório raiz do repositório.
- O `name` no arquivo de metadados da ação deve ser exclusivo.
  - O `name` não pode corresponder a um nome de ação existente publicado em {% data variables.product.prodname_marketplace %}.
  - O `name` não pode corresponder a um usuário ou organização em {% data variables.product.prodname_dotcom %}, a menos que o usuário ou proprietário da organização esteja publicando a ação. Por exemplo, apenas a organização {% data variables.product.prodname_dotcom %} pode publicar uma ação chamada `github`.
  - O `name` não pode corresponder a uma categoria {% data variables.product.prodname_marketplace %} existente.
  - {% data variables.product.prodname_dotcom %} reserva nomes de recursos {% data variables.product.prodname_dotcom %}.

## Publicando uma ação

Você pode adicionar a ação que criou no {% data variables.product.prodname_marketplace %} marcando-a como uma nova versão e publicando-a.

Para redigir uma nova versão e publicar a ação no {% data variables.product.prodname_marketplace %}, siga estas instruções:

{% data reusables.repositories.navigate-to-repo %}
1. Navegue até o arquivo de metadados da ação em seu repositório (`action.yml` ou `action.yaml`) e você verá um banner para publicar a ação em {% data variables.product.prodname_marketplace %}. Clique em **Draft a release*****.

   ![Publicar esta ação no botão do marketplace](/assets/images/help/repository/publish-github-action-to-marketplace-button.png)
1. Em "Liberar ação", marque a caixa de seleção para publicar a ação no {% data variables.product.prodname_marketplace %}. Se você não puder marcar a caixa de seleção, primeiro clique no link para ler e aceitar o Contrato do desenvolvedor {% data variables.product.prodname_marketplace %}.
![Selecione publicar no Marketplace](/assets/images/help/repository/marketplace_actions_publish.png)
1. Se os rótulos em seu arquivo de metadados contiverem algum problema, você verá uma mensagem de erro.
![Ver notificação](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. Se você ver sugestões na tela, resolva-as atualizando seu arquivo de metadados. Depois de concluído, você verá uma mensagem "Tudo parece bom!".
![Corrigir erros](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. Escolha uma "Categoria principal" e, opcionalmente, "Outra categoria" que ajudará as pessoas a encontrar sua ação no {% data variables.product.prodname_marketplace %}.
![Escolha a categoria](/assets/images/help/repository/marketplace_actions_categories.png)
1. Marque sua ação com uma versão e adicione um título de lançamento. Isso ajuda as pessoas a saber quais alterações ou recursos a versão inclui. As pessoas verão a versão na página {% data variables.product.prodname_marketplace %} dedicada à ação.
![Marque uma versão](/assets/images/help/repository/marketplace_actions_version.png)
1. Preencha todos os outros campos e clique em **Publicar versão**. A publicação exige que você use a autenticação de dois fatores. Para obter mais informações, consulte "[Configurando a autenticação de dois fatores](/articles/configuring-two-factor-authentication/)."
![Publicar a versão](/assets/images/help/repository/marketplace_actions_publishrelease.png)

## Removendo uma ação do {% data variables.product.prodname_marketplace %}

Para remover uma ação publicada no {% data variables.product.prodname_marketplace %}, você precisará atualizar cada versão publicada. Execute as etapas a seguir para cada versão da ação que você publicou no {% data variables.product.prodname_marketplace %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Na página de Versões, à direita da versão que você deseja editar, clique em **Editar**.
![Liberar botão de edição](/assets/images/help/releases/release-edit-btn.png)
4. Selecione **Publicar esta ação no {% data variables.product.prodname_marketplace %}** para remover a seleção da caixa.
![Publicar este botão de ação](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. Clique em **Atualizar versão** na parte inferior da página.
![Botão de atualização de versão](/assets/images/help/repository/actions-marketplace-update-release.png)
