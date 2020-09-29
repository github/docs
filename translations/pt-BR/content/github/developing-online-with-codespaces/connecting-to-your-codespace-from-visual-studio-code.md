---
title: Conectar-se ao seu codespace do Visual Studio Code
intro: 'Você pode desenvolver seu codespace diretamente em {% data variables.product.prodname_vscode %}, conectando a extensão de {% data variables.product.prodname_vs_codespaces %} à sua conta no {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### Conectar a extensão de {% data variables.product.prodname_vs_codespaces %} à sua conta {% data variables.product.prodname_dotcom %}

Antes de poder desenvolver em um código diretamente em {% data variables.product.prodname_vscode %}, você deverá configurar a extensão {% data variables.product.prodname_vs_codespaces %} para conectar-se à sua conta do {% data variables.product.product_name %}.

1. Use o {% data variables.product.prodname_vs %} Marketplace para instalar a extensão [{% data variables.product.prodname_vs_codespaces %}](https://marketplace.visualstudio.com/items?itemName=ms-vsonline.vsonline). Para obter mais informações, consulte [Extensão do Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery) na documentação do {% data variables.product.prodname_vscode %}.
2. Clique no ícone Extensões na barra lateral esquerda do {% data variables.product.prodname_vscode %}. ![O ícone das extensões em {% data variables.product.prodname_vscode %}](/assets/images/help/codespaces/click-extensions-icon-vscode.png)
3. Abaixo do {% data variables.product.prodname_vs_codespaces %}, clique no ícone Gerenciar e, em seguida, clique em **Configurações de extensão**. ![A opção Configurações de extensão](/assets/images/help/codespaces/select-extension-settings.png)
4. Use o menu suspenso "Vsonline: Provedor de Conta", e selecione {% data variables.product.prodname_dotcom %}. ![Definir o provedor de conta para {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/select-account-provider-vscode.png)
{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
6. Se {% data variables.product.prodname_codespaces %} não estiver selecionado no cabeçalho, clique em **{% data variables.product.prodname_codespaces %}**. ![Cabeçalho do {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)
7. Clique em **Iniciar sessão para visualizar {% data variables.product.prodname_codespaces %}...**. ![Registrar-se para visualizar {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
8. Para autorizar o {% data variables.product.prodname_vscode %} a acessar sua conta no {% data variables.product.product_name %}, clique em **Permitir**.
9. Registre-se e, {% data variables.product.product_name %} para aprovar a extensão.

### Abrir um codespace em {% data variables.product.prodname_vscode %}

Depois de conectar a sua conta do {% data variables.product.product_name %} à extensão de {% data variables.product.prodname_vs_codespaces %}, você poderá desenvolver em codespace criado no {% data variables.product.product_name %} diretamente em {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Em Codespaces, clique no codespace que você deseja desenvolver.
3. Clique no ícone Conectar-se ao Codespace. ![Ícone de conectar-se a um Codespace em {% data variables.product.prodname_vscode %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)
