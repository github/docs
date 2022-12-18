---
title: Cambio del nombre de un codespace
intro: 'Puedes cambiar el nombre para mostrar del codespace a uno de tu elección mediante {% data variables.product.prodname_dotcom_the_website %} o la {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Rename a codespace
ms.openlocfilehash: dcb4558cce7ca0768524917a46cde2a49bacd1ce
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158721'
---
## Acerca del cambio del nombre de un codespace

A cada codespace se le asigna un nombre para mostrar generado automáticamente. Si tienes varios codespaces, el nombre para mostrar te ayuda a diferenciar entre ellos. Por ejemplo: `literate space parakeet`. Puedes cambiar el nombre para mostrar del codespace.

Para encontrar el nombre para mostrar de un codespace:

- En {% data variables.product.product_name %}, consulta la lista de codespaces en https://github.com/codespaces.

  ![Captura de pantalla de la lista de codespaces en GitHub](/assets/images/help/codespaces/codespaces-list-display-name.png)

- En la aplicación de escritorio {% data variables.product.prodname_vscode %} o el cliente web {% data variables.product.prodname_vscode_shortname %}, haz clic en el Explorador remoto. El nombre para mostrar es el segundo elemento de la lista. Por ejemplo: `symmetrical space telegram` en la captura de pantalla siguiente.

  ![Captura de pantalla del Explorador remoto en VS Code](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- En una ventana de terminal de la máquina local, usa este comando de {% data variables.product.prodname_cli %}: `gh codespace list`. 

### Nombres permanentes de codespace

Además del nombre para mostrar, al crear un codespace, también se le asigna un nombre permanente. El nombre es una combinación de tu identificador de {% data variables.product.company_short %} y el nombre para mostrar autogenerado. Por ejemplo: `octocat-literate-space-parakeet-mld5`. No se puede cambiar el nombre permanente.

Para encontrar el nombre de un codespace:

* En {% data variables.product.product_name %}, el nombre permanente se muestra en un elemento emergente al mantener el puntero sobre el nombre para mostrar de un codespace en https://github.com/codespaces. 

   ![Captura de pantalla del nombre del codespace que se muestra al mantener el puntero](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* En un codespace, use este comando en el terminal: `echo $CODESPACE_NAME`.
* En una ventana de terminal de la máquina local, usa este comando de {% data variables.product.prodname_cli %}: `gh codespace list`.

## Cambio del nombre de un codespace

Cambiar el nombre para mostrar de un codespace puede ser útil si tienes varios codespaces que vas a usar durante un período prolongado. Un nombre adecuado te ayuda a identificar un codespace que se usa para un propósito determinado. 

{% cli %}

Puedes cambiar el nombre para mostrar de tu codespace mediante {% data variables.product.prodname_cli %}.

Para cambiar el nombre de un codespace, usa el subcomando `gh codespace edit`:

```shell
gh codespace edit -c PERMANENT-CODESPACE-NAME -d NEW-DISPLAY-NAME
```

En este ejemplo, reemplaza `PERMANENT-CODESPACE-NAME` por el nombre permanente del codespace cuyo nombre para mostrar quieres cambiar. Reemplaza `NEW-DISPLAY-NAME` por el nombre para mostrar que quieres usar para este codespace.

Para obtener más información, consulta "[Uso de {% data variables.product.prodname_github_codespaces %} con la {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#rename-a-codespace)".

{% endcli %}

{% webui %}

Puedes cambiar el nombre para mostrar de tu codespace en {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.codespaces.your-codespaces-procedure-step %}

    The current display name for each of your codespaces is displayed.

{% data reusables.codespaces.ellipsis-settings %}
1. Haga clic en **Rename**.

1. En el símbolo del sistema, en "Cambiar el nombre para mostrar a…", escribe el nombre para mostrar que quieras y haz clic en **Aceptar**.

{% endwebui %}
