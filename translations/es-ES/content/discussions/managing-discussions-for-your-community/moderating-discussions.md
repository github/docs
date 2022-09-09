---
title: Moderar los debates
intro: 'Puedes promover una colaboración sana si marcas los comentarios como respuestas, bloqueando y desbloqueando debates, convirtiendo propuestas en debates y editando o borrando los comentarios, debates y categorías que no se alineen con{% ifversion fpt or ghec %} el código de conducta de tu comunidad{% elsif ghes > 3.5 %} las directrices de colaboración de tu organización{% endif %}.'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  feature: discussions
ms.openlocfilehash: 7d128c9beadb190f9c22c345cf0c3124b1dfcfcb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410119'
---
## Acerca de moderar los debates

{% data reusables.discussions.about-discussions %} Si tienes permisos de evaluación de prioridades en un repositorio, puedes ayudar a moderar el debate del repositorio si marcas los comentarios como respuestas, bloqueas debates que ya no sean útiles o que perjudiquen a la comunidad, y conviertes las incidencias en debates cuando una idea aún se encuentre en una etapa temprana de desarrollo. De forma similar, si tienes permiso de evaluación de prioridades en el repositorio de origen de los debates de la organización, puedes moderar estos debates.

## Marcar un comentario como una respuesta

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## Bloquear debates

Bloquear una conversación es adecuado cuando no toda es constructiva, o infringe el código de conducta de la comunidad o de las [Directrices de la comunidad](/free-pro-team@latest/github/site-policy/github-community-guidelines) de {% data variables.product.prodname_dotcom %}. También puedes bloquear una conversación para prevenir que se hagan comentarios en un debate que quieres utilizar como un anuncio para la comunidad. Al bloquear una conversación, los usuarios con acceso de escritura al repositorio o al repositorio de origen de los debates de la organización todavía podrán realizar comentarios en el debate.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. En la lista de debates, da clic en aquél que quieras bloquear.
  ![Bloqueo de un debate](/assets/images/help/discussions/unanswered-discussion.png)
1. En el margen derecho de un debate, haga clic en **Lock conversation** (Bloquear conversación).
1. Lea la información sobre el bloqueo de conversaciones y haga clic en **Lock conversation on this discussion** (Bloquear conversación en este debate).
1. Cuando esté a punto para desbloquear la conversación, haga clic en **Unlock conversation** (Desbloquear conversación) y luego en **Unlock conversation on this discussion** (Desbloquear conversación en este debate).

## Convertir una propuesta en un debate

Cuando conviertes una propuesta en un debate, ésta se creará automáticamente utilizando el contenido de la propuesta. Los usuarios con acceso de escritura a un repositorio o al repositorio de origen de los debates de la organización pueden convertir de forma masiva las incidencias en función de las etiquetas. Para obtener más información, consulta "[Administración de debates](/discussions/managing-discussions-for-your-community/managing-discussions)".

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.repositories.sidebar-issues %}
1. En la lista de propuestas, da clic en aquella que quieras convertir.
1. En el margen derecho de una incidencia, haga clic en **Convert to discussion** (Convertir en debate).
1. Seleccione el menú desplegable **Choose a category** (Seleccionar una categoría) y haga clic en una categoría para el debate.
1. Haga clic en **I understand, convert this issue to a discussion** (Lo entiendo, convertir esta incidencia en un debate).
