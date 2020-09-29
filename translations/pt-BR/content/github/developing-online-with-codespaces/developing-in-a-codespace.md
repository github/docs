---
title: Desenvolver em um codespace
intro: 'Você pode abrir um codespace em {% data variables.product.product_name %} e, em seguida, desenvolver usando os recursos do {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: Qualquer pessoa pode desenvolver um codespace que pertence à sua conta de usuário.
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.use-chrome %} Para obter mais informações, consulte "[Solucionar problemas do seu codespace](/github/developing-online-with-codespaces/troubleshooting-your-codespace)".

### Conectando-se a um codespace de {% data variables.product.prodname_vscode %}
{% data reusables.codespaces.connect-to-codespace-from-vscode %}

### Navegando para o seu codespace
{% data reusables.codespaces.navigate-to-codespaces %}
2. Clique no nome do codespace em que você deseja desenvolver. ![Nome do codespace](/assets/images/help/codespaces/click-name-codespace.png)

### Encaminhando portas

O redirecionamento de porta dá acesso a portas TCP que estão em execução no seu codespace. Por exemplo, se você estiver executando um aplicativo web na porta 3000, você pode acessá-lo a partir do seu navegador para testá-lo e depurá-lo.

Quando um aplicativo que se executa dentro de um codespace tem uma saída na porta para o console, o {% data variables.product.prodname_codespaces %} detecta o padrão do URL do localhost e encaminha essas portas automaticamente . Você pode clicar na URL no terminal para abri-la em um navegador. Por exemplo, se um aplicativo gerar `http://127.0.0.:3000` ou `http://localhost:3000` para o console, o registro irá converter automaticamente a saída em uma URL para a porta 3000 em que se pode clicar.

![Encaminhamento automático da porta](/assets/images/help/codespaces/automatic-port-forwarding.png)

Como alternativa, você também pode usar qualquer uma das seguintes maneiras para encaminhar uma porta.

* Você pode encaminhar uma porta sob demanda acionando a paleta de comandos (`shift control P` / `shift control P`) e digitando "Codespaces: Porta de Encaminhamento". Em seguida, você pode digitar o número da porta que deseja encaminhar.

    ![Paleta de comando para o encaminhamento de portas](/assets/images/help/codespaces/command-palette-port-forwarding.png)

* Você pode configurar automaticamente as portas encaminhadas em um arquivo `.devcontainer.json` usando a propriedade `forwardPorts`.

* Você pode adicionar ou remover portas encaminhadas dentro da extensão do Explorador remoto. A partir do Explorador Remoto você pode copiar e colar os links para portas encaminhadas, o que permite que você os acesse por meio do seu navegador.

    ![Encaminhamento de portas para o Explorador Remoto](/assets/images/help/codespaces/remote-explorer-port-forwarding.png)
