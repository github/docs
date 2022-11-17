---
title: Uso de GitHub Codespaces para las solicitudes de incorporación de cambios
shortTitle: Pull requests
intro: 'Puedes utilizar {% data variables.product.prodname_github_codespaces %} en el explorador web o en {% data variables.product.prodname_vscode %} para crear solicitudes de incorporación de cambios, revisarlas y enviar comentarios de revisión.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-for-pull-requests
ms.openlocfilehash: 6932f8eb9095987bfe808080983970c8807b6d93
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160011'
---
## Acerca de las solicitudes de incorporación de cambios en {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} te proporciona muchas de las funcionalidades que podrías necesitar para trabajar con solicitudes de incorporación de cambios:

- [Creación de una solicitud de incorporación de cambios](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request): mediante el uso del terminal y los comandos de Git o la vista de control de código fuente, puede crear solicitudes de incorporación de cambios igual que haría en {% data variables.product.prodname_dotcom_the_website %}. Si el repositorio utiliza una plantilla de solicitud de cambios, podrás utilizarla dentro de la vista de Control de Código Fuente.
- [Apertura de una solicitud de incorporación de cambios](#opening-a-pull-request-in-codespaces): puede abrir una solicitud de incorporación de cambios existente en un codespace, siempre que tenga acceso al codespace y a la rama en la que se va a combinar.
- [Revisión de una solicitud de incorporación de cambios](#reviewing-a-pull-request-in-codespaces): una vez que haya abierto una solicitud de incorporación de cambios en un codespace, puede usar la vista "GitHub Pull Request" (Solicitud de incorporación de cambios de GitHub) para agregar comentarios de revisión y aprobar solicitudes de incorporación de cambios. También puedes usar {% data variables.product.prodname_github_codespaces %} para [ver los comentarios de revisión](#view-comments-from-a-review-in-codespaces).

## Abrir una solicitud de cambios en {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

1. En la lista de solicitudes de cambios, haz clic en aquella que quieras abrir en {% data variables.product.prodname_codespaces %}.
1. En el lado derecho de la pantalla, haga clic en **{% octicon "code" aria-label="The code icon" %} Code** (Código). 
1. En la pestaña {% data variables.product.prodname_codespaces %}, haz clic en el signo más ({% octicon "plus" aria-label="The plus icon" %}).

   ![Opción para abrir una solicitud de incorporación de cambios en un codespace](/assets/images/help/codespaces/open-with-codespaces-pr.png)

   Se crea un codespace para la rama de solicitud de incorporación de cambios y se abre en el editor predeterminado para {% data variables.product.prodname_github_codespaces %}.

## Revisar una solicitud de cambios en {% data variables.product.prodname_codespaces %}

1. Con el editor predeterminado establecido en {% data variables.product.prodname_vscode %} o {% data variables.product.prodname_vscode %} para Web, abre la solicitud de incorporación de cambios en un codespace, tal como se describe más arriba en "[Apertura de una solicitud de incorporación de cambios](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces)".
2. En la barra de actividad, haga clic en la vista **GitHub Pull Request**. Esta vista solo se muestra cuando abres una solicitud de cambios en un codespace.
  ![Opción para abrir una solicitud de incorporación de cambios en un codespace](/assets/images/help/codespaces/github-pr-view.png)
3. Para revisar un archivo específico, haz clic en el icono **Abrir archivo** en la barra lateral.
  ![Opción para abrir una solicitud de incorporación de cambios en un codespace](/assets/images/help/codespaces/changes-in-files.png)
4. Para agregar comentarios de revisión, haga clic en el icono **+** situado junto al número de línea. Escriba el comentario de revisión y, después, haga clic en **Start Review**.
  ![Opción para abrir una solicitud de incorporación de cambios en un codespace](/assets/images/help/codespaces/start-review.png)
5. Cuando termines de agregar los comentarios de revisión, desde la barra lateral, puedes elegir enviarlos, aprobar los cambios o solicitar cambios.
  ![Opción para abrir una solicitud de incorporación de cambios en un codespace](/assets/images/help/codespaces/submit-review.png)

Para obtener más información sobre cómo revisar una solicitud de incorporación de cambios, vea "[Revisión de los cambios propuestos en una solicitud de incorporación de cambios](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

## Ver los comentarios de una revisión en {% data variables.product.prodname_codespaces %}

Una vez que hayas recibido comentarios sobre una solicitud de incorporación de cambios, puedes [abrirlos en un codespace](#opening-a-pull-request-in-codespaces) en el explorador web, o bien en {% data variables.product.prodname_vscode_shortname %} para ver los [comentarios de revisión](#reviewing-a-pull-request-in-codespaces). Desde ahí, puedes responder a los comentarios, agregar reacciones o descartar la revisión. 

  ![Opción para abrir una solicitud de incorporación de cambios en un codespace](/assets/images/help/codespaces/incorporating-codespaces.png)



