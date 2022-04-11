---
title: Encaminhar portas no seu código
intro: '{% data reusables.codespaces.about-port-forwarding %}'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Encaminhar portas
---

## Sobre as portas encaminhadas

O redirecionamento de porta dá acesso a portas TCP que estão em execução no seu codespace. Por exemplo, se você estiver executando um aplicativo web em uma determinada porta no seu codespace, você pode encaminhar essa porta. Isso permite que você acesse o aplicativo do navegador na sua máquina local para testes e depuração.

Quando uma aplicação em execução dentro de um codespace imprime a saída para o terminal que contém uma URL do host local como `http://localhost:PORT` ou `http://127.0.0.1:PORT`, a porta é encaminhada automaticamente. Se você estiver usando {% data variables.product.prodname_codespaces %} no navegador ou em {% data variables.product.prodname_vscode %}, a string do URL no terminal é convertida em um link que você pode clicar para ver a página na sua máquina local. Por padrão, {% data variables.product.prodname_codespaces %} encaminha portas usando HTTP.

![Encaminhamento de porta automático](/assets/images/help/codespaces/automatic-port-forwarding.png)

Você também pode encaminhar uma porta manualmente, etiquetar portas encaminhadas, compartilhar portas encaminhadas com integrantes da sua organização, compartilhar as portas encaminhadas publicamente e adicione as portas encaminhadas à configuração do codespace.

{% note %}

**Observação**: {% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## Encaminhar uma porta

Você pode encaminhar manualmente uma porta que não foi encaminhada automaticamente.

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Na lista de portas, clique em **Adicionar porta**.

   ![Botão adicionar porta](/assets/images/help/codespaces/add-port-button.png)

1. Digite o número da porta ou endereço e, em seguida, pressione enter.

   ![Caixa de texto para o botão digitar porta](/assets/images/help/codespaces/port-number-text-box.png)

## Usando encaminhamento de HTTPS

Por padrão, {% data variables.product.prodname_codespaces %} encaminha portas usando HTTP, mas você pode atualizar qualquer porta para usar HTTPS, conforme necessário.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Clique com o botão direito na porta que você deseja atualizar e, em seguida, passe o mouse sobre **Alterar o Protocolo de Porta**. ![Opção para mudar o protocolo de porta](/assets/images/help/codespaces/update-port-protocol.png)
1. Selecione o protocolo necessário para esta porta. O protocolo que você selecionar será lembrado por esta porta durante o ciclo de vida do codespace.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Na lista de portas, clique em **Adicionar porta**.

   ![Botão adicionar porta](/assets/images/help/codespaces/add-port-button.png)

1. Digite o número da porta ou endereço e, em seguida, pressione enter.

   ![Caixa de texto para o botão digitar porta](/assets/images/help/codespaces/port-number-text-box.png)

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

Para encaminhar uma porta use o subcomando `gh codespace ports forward`. Substitua `codespace-port:local-port` pelas portas remotas e locais que você deseja conectar. Depois de entrar no comando, escolha entre a lista de codespaces exibidos.

```shell
gh codespace ports forward <em>codespace-port</em>:<em>local-port</em>
```

Para obter mais informações sobre esse comando, consulte [o manual de{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_ports_forward).

Para ver os detalhes das portas encaminhadas, digite `gh codespace ports` e, em seguida, escolha um codespace.

{% endcli %}

## Compartilhar uma porta

{% note %}

**Observação:** Você só pode tornar uma porta privada para uma organização se a sua organização usar {% data variables.product.prodname_team %} ou {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

Se você quiser compartilhar uma porta encaminhada com outras pessoas, você pode tornar a porta privada da sua organização ou tornar a porta pública. Após tornar uma porta privada para a sua organização, qualquer pessoa na organização com a URL da porta poderá ver o aplicativo em execução. Após você tornar uma porta pública, qualquer pessoa que conheça a URL e o número da porta poderá ver o aplicativo em execução sem precisar efetuar a autenticação.

{% note %}

**Observação:** A sua escolha das opções de visibilidade da porta pode ser limitada por uma política configurada para a sua organização. Para obter mais informações, consulte "[Restringindo a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports). "

{% endnote %}

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Clique com o botão direito na porta que você deseja compartilhar, selecione o menu "Visibilidade da Porta" e, em seguida, clique em **Privado para a Organização** ou **Público**. ![Opção para selecionar a visibilidade da porta no menu do botão direito](/assets/images/help/codespaces/make-public-option.png)
1. À direita do endereço local para a porta, clique no ícone copiar. ![Copiar ícone para o URL de porta](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envie a URL copiada para a pessoa com quem você deseja compartilhar a porta.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Clique com o botão direito na porta que você deseja compartilhar, selecione o menu "Visibilidade da Porta" e, em seguida, clique em **Privado para a Organização** ou **Público**. ![Opção para tornar a porta pública no menu com o clique com o botão direito](/assets/images/help/codespaces/make-public-option.png)
1. À direita do endereço local para a porta, clique no ícone copiar. ![Copiar ícone para o URL de porta](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envie a URL copiada para a pessoa com quem você deseja compartilhar a porta.

{% endvscode %}

{% cli %}

Para alterar a visibilidade de uma porta encaminhada, use a visibilidade do subcomando `gh codespace ports visibility`. {% data reusables.codespaces.port-visibility-settings %}

Substitua `codespace-port` pelo número da porta encaminhada. Substitua `configuração` por `privado`, `org` ou `público`. Depois de entrar no comando, escolha entre a lista de codespaces exibidos.

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>setting</em>
```

Você pode definir a visibilidade de várias portas com um comando. Por exemplo:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

Para obter mais informações sobre esse comando, consulte [o manual de{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_ports_visibility).

{% endcli %}

## Etiquetar uma porta

Você pode etiquetar uma porta para tornar a porta mais facilmente identificável em uma lista.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Passe o mouse sobre a porta que você deseja etiquetar, em seguida, clique no ícone da etiqueta. ![Ícone da etiqueta para a porta](/assets/images/help/codespaces/label-icon.png)
{% data reusables.codespaces.type-port-label %}

## Adicionar uma porta à configuração do código

É possível adicionar uma porta encaminhada para a configuração {% data variables.product.prodname_codespaces %} do repositório para que a porta seja automaticamente encaminhada para todos os códigos criados a partir do repositório. Depois de atualizar a configuração, todos os codespaces criados anteriormente deverão ser reconstruídos para que a alteração seja aplicada. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)".

Você pode configurar manualmente as portas encaminhadas em um arquivo `.devcontainer.json` usando a propriedade `forwardPorts` ou você pode usar o painel "Portas" no seu codespace.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Clique com o botão direito na porta que você deseja adicionar à configuração do codespace e, em seguida, clique em **Definir etiqueta e atualizar devcontainer.json**. ![Opção para definir a etiqueta e adicionar a porta ao devcontainer.json no menu com o clique no botão direito](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png)
{% data reusables.codespaces.type-port-label %}
