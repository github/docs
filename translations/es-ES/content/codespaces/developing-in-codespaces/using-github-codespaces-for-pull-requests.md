---
title: Uso de GitHub Codespaces para las solicitudes de incorporación de cambios
shortTitle: Pull requests
intro: 'Puedes utilizar {% data variables.product.prodname_github_codespaces %} en el flujo de trabajo de desarrollo para crear solicitudes de incorporación de cambios, revisarlas y enviar comentarios de revisión.'
product: '{% data reusables.gated-features.codespaces %}'
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
ms.openlocfilehash: d4ac4d4b8003600c95293f3939f547cd73639884
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111652'
---
## Acerca de las solicitudes de incorporación de cambios en {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} te proporciona muchas de las funcionalidades que podrías necesitar para trabajar con solicitudes de incorporación de cambios:

- [Creación de una solicitud de incorporación de cambios](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request): mediante el uso del terminal y los comandos de Git o la vista de control de código fuente, puede crear solicitudes de incorporación de cambios igual que haría en {% data variables.product.prodname_dotcom_the_website %}. Si el repositorio utiliza una plantilla de solicitud de cambios, podrás utilizarla dentro de la vista de Control de Código Fuente.
- [Apertura de una solicitud de incorporación de cambios](#opening-a-pull-request-in-codespaces): puede abrir una solicitud de incorporación de cambios existente en un codespace, siempre que tenga acceso al codespace y a la rama en la que se va a combinar.
- [Revisión de una solicitud de incorporación de cambios](#reviewing-a-pull-request-in-codespaces): una vez que haya abierto una solicitud de incorporación de cambios en un codespace, puede usar la vista "GitHub Pull Request" (Solicitud de incorporación de cambios de GitHub) para agregar comentarios de revisión y aprobar solicitudes de incorporación de cambios. También puede usar {% data variables.product.prodname_codespaces %} para [ver los comentarios de revisión](#view-comments-from-a-review-in-codespaces).

## Abrir una solicitud de cambios en {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

2. En la lista de solicitudes de cambios, haz clic en aquella que quieras abrir en {% data variables.product.prodname_codespaces %}.
3. En el lado derecho de la pantalla, haga clic en **{% octicon "code" aria-label="The code icon" %} Code** (Código). 
4. En la pestaña {% data variables.product.prodname_codespaces %}, haz clic en **Create codespace on BRANCH** (Crear codespace en BRANCH).
  ![Opción para abrir una solicitud de incorporación de cambios en un codespace](/assets/images/help/codespaces/open-with-codespaces-pr.png)

## Revisar una solicitud de cambios en {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.review-pr %}

Para obtener más información sobre cómo revisar una solicitud de incorporación de cambios, vea "[Revisión de los cambios propuestos en una solicitud de incorporación de cambios](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

## Ver los comentarios de una revisión en {% data variables.product.prodname_codespaces %}

Una vez que haya recibido comentarios sobre una solicitud de incorporación de cambios, puede [abrirla en un codespace](#opening-a-pull-request-in-codespaces) para ver los [comentarios de revisión](#reviewing-a-pull-request-in-codespaces). Desde ahí, puedes responder a los comentarios, agregar reacciones o descartar la revisión. 

  ![Opción para abrir una solicitud de incorporación de cambios en un codespace](/assets/images/help/codespaces/incorporating-codespaces.png)
