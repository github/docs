---
title: Publicar ações no GitHub Marketplace
intro: 'Você pode publicar ações em {% data variables.product.prodname_marketplace %} e compartilhar as ações que você criou com a comunidade {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  free-pro-team: '*'
type: how_to
---

{% data reusables.actions.ae-beta %}

Você deve aceitar os termos de serviço para publicar ações em {% data variables.product.prodname_marketplace %}.

### Sobre a publicação de ações

Antes de poder publicar uma ação, você deverá criar uma ação no seu repositório. Para obter mais informações, consulte "[Criar ações](/actions/creating-actions)".

Ao planejar publicar a sua ação em {% data variables.product.prodname_marketplace %}, você deverá garantir que o repositório inclui apenas o arquivo de metadados, o código e os arquivos necessários para a ação. Criar um repositório único para a ação permite que você identifique, lance e empacote o código em uma única unidade. {% data variables.product.prodname_dotcom %} também usa os metadados da ação na sua página {% data variables.product.prodname_marketplace %}.

As ações são publicadas em {% data variables.product.prodname_marketplace %} imediatamente e não são revisadas por {% data variables.product.prodname_dotcom %}, desde que esses requisitos sejam satisfeitos:

- A ação deve estar em um repositório público.
- Cada repositório deve conter uma ação única.
- O arquivo de metadados da ação (`action.yml` ou `action.yaml`) deve estar no diretório-raiz do repositório.
- O `nome` do arquivo de metadados da ação deve ser único.
  - O `nome` não pode corresponder ao nome de uma ação publicado em {% data variables.product.prodname_marketplace %}.
  - O `nome` não pode corresponder a um usuário ou organização em {% data variables.product.prodname_dotcom %}, a menos que o usuário ou o proprietário da organização esteja publicando a ação. Por exemplo, somente {% data variables.product.prodname_dotcom %} a organização pode publicar uma ação denominada `GitHub`.
  - O `nome` não pode corresponder a uma categoria {% data variables.product.prodname_marketplace %}.
  - {% data variables.product.prodname_dotcom %} reserva os nomes de recursos {% data variables.product.prodname_dotcom %}.

### Publicar uma ação

Você pode adicionar a ação que você criou em {% data variables.product.prodname_marketplace %} identificando-a como uma nova versão e publicando-a.

Para compartilhar uma nova versão e publicar a ação em {% data variables.product.prodname_marketplace %}, siga essas instruções:

{% data reusables.repositories.navigate-to-repo %}
1. Se um repositório contiver um arquivo de metadados da ação (`action.yml` ou `action.yaml`), você verá um banner para publicar a ação em {% data variables.product.prodname_marketplace %}. Clique em **Elaborar uma versão**. ![Publique esta ação no botão marketplace](/assets/images/help/repository/publish-github-action-to-markeplace-button.png)
1. Selecione **Publicar esta ação em {% data variables.product.prodname_marketplace %}**. Se não for possível marcar a caixa de seleção **Publicar esta ação em {% data variables.product.prodname_marketplace %}**, você deverá ler e aceitar o Contrato {% data variables.product.prodname_marketplace %} primeiro. ![Selecione publicar no "Marketplace"](/assets/images/help/repository/marketplace_actions_publish.png)
1. Se as etiquetas do seu arquivo de metadados tiverem algum problema, você receberá uma mensagem de erro. ![Veja a notificação](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. Se você ver alguma sugestão na tela, resolva-as atualizando o arquivo de metadados. Após a conclusão, você receberá a mensagem "Tudo está OK". ![Corrigir erros](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. Escolha uma "categoria primária" e, opcionalmente, "outra categoria", que ajudará as pessoas a encontrar a sua ação em {% data variables.product.prodname_marketplace %}. ![Escolha a categoria](/assets/images/help/repository/marketplace_actions_categories.png)
1. Marque a sua Ação com uma versão e adicione um título de versão. Isso ajuda as pessoas a saber quais alterações ou recursos estão incluídos na versão. As pessoas verão a versão na página dedicada da ação {% data variables.product.prodname_marketplace %}. ![Marque uma versão](/assets/images/help/repository/marketplace_actions_version.png)
1. Preencha todos os outros campos e clique em **Publicar versão**. A publicação exige a utilização de uma autenticação de dois fatores. Para obter mais informações, consulte "[Configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication/)". ![Publique a versão](/assets/images/help/repository/marketplace_actions_publishrelease.png)

### Remover uma ação de {% data variables.product.prodname_marketplace %}

Para remover uma ação publicada de {% data variables.product.prodname_marketplace %}, você deverá atualizar cada versão publicada. Realize as etapas a seguir para cada versão da ação que você publicou em {% data variables.product.prodname_marketplace %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Na página Releases (Versões), à direita da versão que deseja editar, clique em **Edit** (Editar). ![Botão Release edit (Edição de versão)](/assets/images/help/releases/release-edit-btn.png)
4. Selecione **Publicar esta ação em {% data variables.product.prodname_marketplace %}** para remover a seleção da caixa. ![Botão "publicar esta ação"](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. Clique em **Atualizar versão** na parte inferior da página. ![Atualize o botão da versão](/assets/images/help/repository/actions-marketplace-update-release.png)
