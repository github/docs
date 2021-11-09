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

O redirecionamento de porta dá acesso a portas TCP que estão em execução no seu codespace. For example, if you're running a web application on a particular port in your codespace, you can forward that port. This allows you to access the application from the browser on your local machine for testing and debugging.

When an application running inside a codespace prints output to the terminal that contains a localhost URL, such as `http://localhost:PORT` or `http://127.0.0.1:PORT`, the port is automatically forwarded. If you're using {% data variables.product.prodname_github_codespaces %} in the browser or in {% data variable.product.prodname_vscode %}, the URL string in the terminal is converted into a link that you can click to view the web page on your local machine. By default, {% data variables.product.prodname_codespaces %} forwards ports using HTTP.

![Encaminhamento de porta automático](/assets/images/help/codespaces/automatic-port-forwarding.png)

You can also forward a port manually, label forwarded ports, share forwarded ports with members of your organization, share forwarded ports publicly, and add forwarded ports to the codespace configuration.

## Encaminhar uma porta

Você pode encaminhar manualmente uma porta que não foi encaminhada automaticamente.

{% include tool-switcher %}

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Na lista de portas, clique em **Adicionar porta**.

   ![Botão adicionar porta](/assets/images/help/codespaces/add-port-button.png)

1. Digite o número da porta ou endereço e, em seguida, pressione enter.

   ![Caixa de texto para o botão digitar porta](/assets/images/help/codespaces/port-number-text-box.png)

## Using HTTPS forwarding

By default, {% data variables.product.prodname_codespaces %} forwards ports using HTTP but you can update any port to use HTTPS, as needed.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port you want to update, then hover over **Change Port Protocol**. ![Option to change port protocol](/assets/images/help/codespaces/update-port-protocol.png)
1. Select the protocol needed for this port. The protocol that you select will be remembered for this port for the lifetime of the codespace.

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

To forward a port use the `gh codespace ports forward` subcommand. Replace `codespace-port:local-port` with the remote and local ports that you want to connect. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace ports forward <em>codespace-port</em>:<em>local-port</em> 
```

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_ports_forward).

To see details of forwarded ports enter `gh codespace ports` and then choose a codespace.

{% endcli %}

## Compartilhar uma porta

{% note %}

**Note:** You can only make a port private to an organization if your organization uses {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}. This feature is not currently available in the beta version of {% data variables.product.prodname_codespaces %}.

{% endnote %}

If you want to share a forwarded port with others, you can either make the port private to your organization or make the port public. After you make a port private to your organization, anyone in the organization with the port's URL can view the running application. After you make a port public, anyone who knows the URL and port number can view the running application without needing to authenticate.

{% include tool-switcher %}

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port that you want to share, select the "Port Visibility" menu, then click **Private to Organization** or **Public**. ![Option to select port visibility in right-click menu](/assets/images/help/codespaces/make-public-option.png)
1. À direita do endereço local para a porta, clique no ícone copiar. ![Copiar ícone para o URL de porta](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envie a URL copiada para a pessoa com quem você deseja compartilhar a porta.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Clique com o botão direito na porta que você deseja compartilhar e clique em **Tornar pública**. ![Opção para tornar a porta pública no menu com o clique com o botão direito](/assets/images/help/codespaces/make-public-option.png)
1. À direita do endereço local para a porta, clique no ícone copiar. ![Copiar ícone para o URL de porta](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envie a URL copiada para a pessoa com quem você deseja compartilhar a porta.

{% endvscode %}

{% cli %}

To change the visibility of a forwarded port, use the `gh codespace ports visibility` subcommand. {% data reusables.codespaces.port-visibility-settings %}

Replace `codespace-port` with the forwarded port number. Replace `setting` with `private`, `org`, or `public`. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>setting</em> 
```

You can set the visibility for multiple ports with one command. Por exemplo:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_ports_visibility).

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
