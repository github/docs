---
title: Setting your default editor for GitHub Codespaces
shortTitle: Definir o editor padrão
intro: 'Você pode definir seu editor padrão para {% data variables.product.prodname_codespaces %} na sua página de configurações pessoais.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
  - /codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces
topics:
  - Codespaces
type: how_to
---

Na página de configurações você pode definir sua preferência de editor para que todos os codespaces sejam abertos automaticamente em {% data variables.product.prodname_vscode %} para a web ou em {% data variables.product.prodname_vscode %} para aplicativos de desktop.

Se você quiser usar {% data variables.product.prodname_vscode %} como seu editor padrão para {% data variables.product.prodname_codespaces %}, você deverá instalar {% data variables.product.prodname_vscode %} e a extensão de {% data variables.product.prodname_github_codespaces %} para {% data variables.product.prodname_vscode %}. Para obter mais informações, consulte a página de download de [para {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) e a extensão de [{% data variables.product.prodname_github_codespaces %} no marketplace de {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

## Configurando o seu editor padrão

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Em "Editor de preferência", selecione a opção que você desejar. ![Setting your editor](/assets/images/help/codespaces/select-default-editor.png) Se você escolher **{% data variables.product.prodname_vscode %}**, {% data variables.product.prodname_codespaces %} será automaticamente aberto no aplicativo da área de trabalho na próxima vez que você criar um codespace. Talvez seja necessário permitir o acesso ao seu navegador e ao {% data variables.product.prodname_vscode %} para que seja aberto com sucesso. ![Configurando seu editor](/assets/images/help/codespaces/launch-default-editor.png)
