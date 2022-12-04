---
title: Trabajar con el soporte técnico de GitHub Codespaces
intro: 'Sugerencias para obtener la mejor ayuda del soporte técnico de {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Working with support
redirect_from:
  - /codespaces/troubleshooting/working-with-support-for-codespaces
ms.openlocfilehash: a4db589cb5d8de71e6e8c7d109e0156885c33848
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159899'
---
Antes de que soporte pueda ayudarte con los problemas de los codespaces, necesitas saber el nombre permanente del codespace y su ID de codespaces (identificador). Adicionalmente, soporte podría pedirte que le compartas algunas bitácoras. Para más información, consulta "[Registros de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs)" y "[Acerca del soporte técnico de GitHub](/github/working-with-github-support/about-github-support)".

## Nombres de los codespaces

Cada codespace tiene un nombre único que es una combinación de tu manejo de {% data variables.product.company_short %}, dos o tres palabras generadas automáticamente y algunos caracteres aleatorios. Por ejemplo: `octocat-literate-space-parakeet-mld5`. Las dos o tres palabras generadas automáticamente también forman el nombre para mostrar inicial del codespace, en este caso, `literate-space-parakeet`. Puedes cambiar el nombre para mostrar de un codespace, pero esto no afectará al nombre permanente. Para obtener más información, consulta "[Cambio del nombre de un codespace](/codespaces/customizing-your-codespace/renaming-a-codespace)".

Para encontrar el nombre de un codespace:

- Abre el codespace en el buscador. El subdominio de la URL es el nombre del codespace. Por ejemplo: `https://octocat-literate-space-parakeet-mld5.github.dev` es la dirección URL del URL `octocat-literate-space-parakeet-mld5`.
- Si no puede abrir un codespace, puedes acceder al nombre en {% data variables.product.product_name %} en https://github.com/codespaces. El nombre se muestra en un elemento emergente al mantener el puntero sobre el nombre para mostrar de un codespace en https://github.com/codespaces. 
  ![Nombre del codespace que se muestra al pasar el puntero del mouse](/assets/images/help/codespaces/find-codespace-name-github.png)

El nombre del codespace también se incluye en muchos otros archivos de bitácora. Por ejemplo, en el codespace se registra como el valor de `friendlyName`, en el registro de extensión {% data variables.product.prodname_github_codespaces %} después de `making GET request for` y en el registro de consola del explorador después de `clientUrl`. Para más información, consulta "[Registros de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs)".

## ID de los codespaces

Cada codespace también tiene un ID (identificador). Este no se muestra predeterminadamente en {% data variables.product.prodname_vscode %}, así que podrías tener que actualizar los ajustes para la extensión de {% data variables.product.prodname_github_codespaces %} antes de que puedas acceder a la ID.

1. En el explorador o el escritorio de {% data variables.product.prodname_vscode %}, en la barra de actividad a la izquierda, haga clic en **Explorador remoto** para mostrar los detalles del codespace.
{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}
1. Si la barra lateral incluye una sección de "Rendimiento del Codespace", pasa el puntero del mouse sobre "ID del Codespace" y haz clic en el icono de portapapeles para copiar la ID.
1. Si no se muestra la información, haz clic en {% octicon "gear" aria-label="The gear icon" %} en la esquina inferior izquierda de la barra de actividad para mostrar la pestaña de "Ajustes".
1. Expanda **Extensiones** y haga clic en **{% data variables.product.prodname_github_codespaces %}** para mostrar la configuración de la extensión. Después, habilite **Mostrar Explorador de rendimiento** para mostrar la sección "Rendimiento de Codespace" en la barra lateral.
  ![Id. y valores del codespace necesarios para mostrar la información de rendimiento](/assets/images/help/codespaces/find-codespace-id.png)
