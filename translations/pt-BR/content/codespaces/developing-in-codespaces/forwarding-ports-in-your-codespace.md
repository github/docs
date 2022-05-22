---
title: Encaminhar portas no seu código
intro: '{% data reusables.codespaces.about-port-forwarding %}'
versions:
  free-pro-team: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### Sobre as portas encaminhadas

O redirecionamento de porta dá acesso a portas TCP que estão em execução no seu codespace. Por exemplo, se você estiver executando um aplicativo web na porta 4000, você poderá acessá-lo a partir do seu navegador para testar e depurar o aplicativo.

Quando um aplicativo que se executa dentro de um codespace tem uma saída na porta para o console, o {% data variables.product.prodname_codespaces %} detecta o padrão do URL do host local e encaminha a porta automaticamente. Você pode clicar na URL no terminal para abrir a porta em um navegador. Por exemplo, se um aplicativo gerar `http://127.0.0.:4000` ou `http://localhost:4000` para o console, o registro irá converter automaticamente a saída em uma URL para a porta 4000 em que se pode clicar.

![Encaminhamento de porta automático](/assets/images/help/codespaces/automatic-port-forwarding.png)

Você também pode encaminhar uma porta manualmente, etiquetar portas encaminhadas, compartilhar portas anunciadas publicamente e adicionar portas encaminhadas para a configuração do código.

### Encaminhar uma porta

Você pode encaminhar manualmente uma porta que não foi encaminhada automaticamente.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Na lista de portas, clique em **Adicionar porta**. ![Botão adicionar porta](/assets/images/help/codespaces/add-port-button.png)
1. Digite o número da porta ou endereço e, em seguida, pressione enter. ![Caixa de texto para o botão digitar porta](/assets/images/help/codespaces/port-number-text-box.png)

### Etiquetar uma porta

Você pode etiquetar uma porta para tornar a porta mais facilmente identificável em uma lista.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Passe o mouse sobre a porta que você deseja etiquetar, em seguida, clique no ícone da etiqueta. ![Ícone da etiqueta para a porta](/assets/images/help/codespaces/label-icon.png)
{% data reusables.codespaces.type-port-label %}

### Compartilhar uma porta

Se você quiser compartilhar uma porta encaminhada com outras pessoas, você poderá tornar a porta pública. Após tornar uma porta pública, qualquer pessoa com a URL da porta poderá ver o aplicativo em execução sem precisar efetuar a autenticação.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Clique com o botão direito na porta que você deseja compartilhar e clique em **Tornar pública**. ![Opção para tornar a porta pública no menu com o clique com o botão direito](/assets/images/help/codespaces/make-public-option.png)
1. À direita do endereço local para a porta, clique no ícone copiar. ![Copy icon for port URL](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envie a URL copiada para a pessoa com quem você deseja compartilhar a porta.

### Adicionar uma porta à configuração do código

É possível adicionar uma porta encaminhada para a configuração {% data variables.product.prodname_codespaces %} do repositório para que a porta seja automaticamente encaminhada para todos os códigos criados a partir do repositório. Depois de atualizar a configuração, todos os codespaces criados anteriormente deverão ser reconstruídos para que a alteração seja aplicada. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)".

Você pode configurar manualmente as portas predefinidas em um arquivo `.devcontainer.json` usando a propriedade `forwardPorts`, ou você pode usar o painel "Portas" no seu codespace.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Clique com o botão direito na porta que você deseja adicionar à configuração do codespace e, em seguida, clique em **Definir etiqueta e atualizar devcontainer.json**. ![Opção para definir a etiqueta e adicionar a porta ao devcontainer.json no menu com o clique no botão direito](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png)
{% data reusables.codespaces.type-port-label %}

