---
title: Using GitHub Codespaces for pull requests
shortTitle: Solicitudes de cambios
intro: 'Puedes utilizar los {% data variables.product.prodname_github_codespaces %} en tu flujo de trabajo de desarrollo para crear las solicitudes de cambios, revisar solicitudes de cambios y dirigir comentarios de revisión.'
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
---

## Acerca de las solicitudes de extracción en {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} te proporciona muchas de las capacidades que podrías necesitar para trabajar con las solicitudes de cambios:

- [Crear una solicitud de cambios](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) - Si utilizas ya sea la Terminal y los comandos de Git o la vista de Control de Código Fuente, puedes crear solicitudes de cambios tal como lo harías en {% data variables.product.prodname_dotcom_the_website %}. Si el repositorio utiliza una plantilla de solicitud de cambios, podrás utilizarla dentro de la vista de Control de Código Fuente.
- [Abre una solicitud de cambios](#opening-a-pull-request-in-codespaces) – Puedes abrir una solicitud de cambios existente en un codespace, tomando en cuenta que tengas acceso al codespace de la rama que se está fusionando.
- [Revisar una solicitud de cambios](#reviewing-a-pull-request-in-codespaces) - Una vez que hayas abierto una solicitud de cambios en un codespace, puedes utilizar la vista de "Solicitud de Cambios de GitHub" para agregar comentarios de revisión y aprobar las solicitudes de cambios. También puedes utilizar los {% data variables.product.prodname_codespaces %} para [ver los comentarios de revisión](#view-comments-from-a-review-in-codespaces).

## Abrir una solicitud de cambios en {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

2. En la lista de solicitudes de cambios, haz clic en aquella que quieras abrir en {% data variables.product.prodname_codespaces %}.
3. A la derecha de tu pantalla, haz clic en **{% octicon "code" aria-label="The code icon" %} Código**.
4. En la pestaña de {% data variables.product.prodname_codespaces %}, haz clic en **Crear un codespace en RAMA**. ![Opción para abrir una solicitud de cambios en un codespace](/assets/images/help/codespaces/open-with-codespaces-pr.png)

## Revisar una solicitud de cambios en {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.review-pr %}

Para obtener más información sobre cómo revisar una solicitud de cambios, consulta la sección "[Revisar los cambios propuestos en una solicitud de cambios](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

## Ver los comentarios de una revisión en {% data variables.product.prodname_codespaces %}

Una vez que hayas recibido retroalimentación en una solicitud de cambios, puedes [Abrirla en un codespace](#opening-a-pull-request-in-codespaces) para ver los [comentarios de revisión](#reviewing-a-pull-request-in-codespaces). Desde ahí, puedes responder a los comentarios, agregar reacciones o descartar la revisión.

  ![Opción para abrir una solicitud de cambios en un codespace](/assets/images/help/codespaces/incorporating-codespaces.png)
