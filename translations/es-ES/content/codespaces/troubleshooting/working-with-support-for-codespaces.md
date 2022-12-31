---
title: Trabajar con el soporte para Codespaces
intro: Tips para obtener la mejor ayuda del soporte para {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Working with support
ms.openlocfilehash: f072b48eebd5bdc613da725a0ac7a1b5bb0fbb8d
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145092456"
---
Antes de que soporte pueda ayudarte con los problemas de los codespaces, necesitas saber el nombre del codespace y su ID de codespaces (identificador). Adicionalmente, soporte podría pedirte que le compartas algunas bitácoras. Para más información, vea "[Registros de Codespaces](/codespaces/troubleshooting/codespaces-logs)" y "[Acerca del soporte técnico de GitHub](/github/working-with-github-support/about-github-support)".

### <a name="codespace-names"></a>Nombres de los codespaces

Cada codespace tiene un nombre único que es una combinación de tu manejo de {% data variables.product.company_short %}, el nombre del repositorio, y algunos caracteres aleatorios. Los caracteres adicionales te permiten tener codespaces para ramas diferentes en el mismo repositorio. Por ejemplo: `octocat-myrepo-gmc7`.

Para encontrar el nombre de un codespace:

- Abre el codespace en el buscador. El subdominio de la URL es el nombre del codespace. Por ejemplo: `https://octocat-myrepo-gmc7.github.dev` es la dirección URL del URL `octocat-myrepo-gmc7`.
- Si no puede abrir un codespace, puedes acceder al nombre en {% data variables.product.product_name %} en https://github.com/codespaces. El nombre se muestra en un elemento emergente al mantener el puntero sobre la opción **Abrir en el explorador** en https://github.com/codespaces. 
  ![Nombre del codespace que se muestra al pasar el puntero del mouse](/assets/images/help/codespaces/find-codespace-name-github.png)

El nombre del codespace también se incluye en muchos otros archivos de bitácora. Por ejemplo, en el codespace se registra como el valor de `friendlyName`, en el registro de extensión {% data variables.product.prodname_github_codespaces %} después de `making GET request for` y en el registro de consola del explorador después de `clientUrl`. Para más información, vea "[Registros de Codespaces](/codespaces/troubleshooting/codespaces-logs)".

### <a name="codespaces-ids"></a>ID de los codespaces

Cada codespace también tiene un ID (identificador). Este no se muestra predeterminadamente en {% data variables.product.prodname_vscode %}, así que podrías tener que actualizar los ajustes para la extensión de {% data variables.product.prodname_github_codespaces %} antes de que puedas acceder a la ID.

1. En el explorador o el escritorio de {% data variables.product.prodname_vscode %}, en la barra de actividad a la izquierda, haga clic en **Explorador remoto** para mostrar los detalles del codespace.
2. Si la barra lateral incluye una sección de "Rendimiento del Codespace", pasa el puntero del mouse sobre "ID del Codespace" y haz clic en el icono de portapapeles para copiar la ID.
3. Si no se muestra la información, haz clic en {% octicon "gear" aria-label="The gear icon" %} en la esquina inferior izquierda de la barra de actividad para mostrar la pestaña de "Ajustes".
4. Expanda **Extensiones** y haga clic en **{% data variables.product.prodname_github_codespaces %}** para mostrar la configuración de la extensión. Después, habilite **Mostrar Explorador de rendimiento** para mostrar la sección "Rendimiento de Codespace" en la barra lateral.
  ![Id. y valores del codespace necesarios para mostrar la información de rendimiento](/assets/images/help/codespaces/find-codespace-id.png)
