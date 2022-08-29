---
title: Setting your default editor for GitHub Codespaces
shortTitle: Configurar el editor predeterminado
intro: 'Puedes configurar tu editor predeterminado para {% data variables.product.prodname_codespaces %} en tu página de ajustes personal.'
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

En la página de ajustes, puedes configurar las preferencias de tu editor para que los codespaces recién creados se abran automáticamente, ya sea en {% data variables.product.prodname_vscode %} para la Web o en {% data variables.product.prodname_vscode %} para escritorio.

Si quieres utilizar {% data variables.product.prodname_vscode %} como tu editor predeterminado para {% data variables.product.prodname_codespaces %}, necesitas instalar {% data variables.product.prodname_vscode %} y la extensión de {% data variables.product.prodname_github_codespaces %} para {% data variables.product.prodname_vscode %}. Para obtener más información, consulta la [página de descarga de {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) y la [ extensión de {% data variables.product.prodname_github_codespaces %} en el mercado de {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

## Configurar tu editor predeterminado

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Debajo de "Preferencia de editor", selecciona la opción que desees. ![Setting your editor](/assets/images/help/codespaces/select-default-editor.png)Si eliges **{% data variables.product.prodname_vscode %}**, los {% data variables.product.prodname_codespaces %} se abrirán automáticamente en la aplicación de escritorio cuando crees el siguiente codespace. Podrías necesitar permitir acceso tanto a tu buscador como a {% data variables.product.prodname_vscode %} para que abra con éxito. ![Configurar tu editor](/assets/images/help/codespaces/launch-default-editor.png)
