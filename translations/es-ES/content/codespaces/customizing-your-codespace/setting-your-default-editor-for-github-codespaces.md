---
title: Configuración del editor predeterminado para GitHub Codespaces
shortTitle: Set the default editor
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
ms.openlocfilehash: 7cfc188cb265482ea9dd40f3fc653af870aa6982
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111669'
---
En la página de ajustes, puedes configurar las preferencias de tu editor para que los codespaces recién creados se abran automáticamente, ya sea en {% data variables.product.prodname_vscode %} para la Web o en {% data variables.product.prodname_vscode %} para escritorio.

Si quieres utilizar {% data variables.product.prodname_vscode %} como tu editor predeterminado para {% data variables.product.prodname_codespaces %}, necesitas instalar {% data variables.product.prodname_vscode %} y la extensión de {% data variables.product.prodname_github_codespaces %} para {% data variables.product.prodname_vscode %}. Para más información, vea la [página de descarga de {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) y la [extensión {% data variables.product.prodname_github_codespaces %} en el marketplace de {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

## Configurar tu editor predeterminado

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Debajo de "Preferencia de editor", selecciona la opción que desees.
   ![Configuración del editor](/assets/images/help/codespaces/select-default-editor.png) Si elige **{% data variables.product.prodname_vscode %}** , {% data variables.product.prodname_codespaces %} se abrirá automáticamente en la aplicación de escritorio la próxima vez que cree un codespace. Podrías necesitar permitir acceso tanto a tu buscador como a {% data variables.product.prodname_vscode %} para que abra con éxito.
   ![Configuración del editor](/assets/images/help/codespaces/launch-default-editor.png)
