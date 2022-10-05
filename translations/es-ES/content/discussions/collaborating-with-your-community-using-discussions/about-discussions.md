---
title: Acerca de los debates
intro: 'Utiliza los debates para preguntar y responder preguntas, compartir información, hacer anuncios y moderar o participar en una conversación sobre un proyecto en {% data variables.product.product_name %}.'
versions:
  feature: discussions
ms.openlocfilehash: 4ac74c35b34310b62595bd5ac9a5588a7ef3476a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147433416'
---
## Acerca de {% data variables.product.prodname_discussions %}

Con {% data variables.product.prodname_discussions %}, la comunidad de tu proyecto puede crear y participar en conversaciones dentro del repositorio del proyecto u organización. Los debates fotalecen a los mantenedores del proyecto, contribuyentes y visitantes para que se reunan y logren sus metas en una ubicación centralizada, sin herramientas de terceros.

- Comparte anuncios e información, recolecta comentarios, planea y toma decisiones
- Haz preguntas, debate y respóndelas, y marca los debates como respondidos
- Creación de sondeos para medir la opinión de la comunidad
- Fomenta un ambiente amigable para los visitantes y contribuyentes para que se debatan las metas, el desarrollo, la administración y los flujos de trabajo

![Pestaña de debates en un repositorio](/assets/images/help/discussions/hero.png)

Puedes usar los debates del repositorio para analizar temas específicos del repositorio. Si el proyecto abarca varios repositorios, puedes usar debates de la organización para analizar temas que no son específicos de un único repositorio de la organización.

No necesitas cerrar un debate de la misma forma en que cierras una propuesta o una solicitud de cambios.

Si un administrador de repositorio o mantenedor de proyecto habilita los {% data variables.product.prodname_discussions %} para un repositorio, cualquiera que tenga acceso al repositorio podrá crear y participar en los debates de este. Si un propietario de la organización habilita {% data variables.product.prodname_discussions %} para una organización, cualquier persona que pueda ver el repositorio de origen puede crear un debate de la organización.

Los administradores del repositorio y los mantenedores del proyecto pueden administrar los debates y las categorías de los mismos en un repositorio y fijarlos para incrementar la visibilidad de éstos. Los moderadores y colaboradores pueden marcar los comentarios como respuestas, fijar debates, y convertir las propuestas en debates. Del mismo modo, para los debates de la organización, el rol de un usuario en el repositorio de origen determina el modo en que un usuario puede interactuar con los debates de la organización. Para más información, vea "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Para obtener más información sobre la administración de debates, consulta "[Administración de debates](/discussions/managing-discussions-for-your-community/managing-discussions)".

## Acerca de los sondeos

Puedes crear sondeos en la categoría de sondeos para medir el interés en las nuevas ideas y la dirección del proyecto. Cualquier persona con acceso de lectura al repositorio puede crear sondeos, votar en sondeos y ver sus resultados.{% ifversion fpt or ghec %} Los usuarios con sesión iniciada pueden ver los resultados de los sondeos en repositorios públicos.{% endif %}

Los sondeos requieren una pregunta y al menos dos opciones. Puedes agregar un máximo de 8 opciones y las opciones pueden contener un máximo de 128 caracteres. 

Los votantes no pueden cambiar su voto. La edición de un sondeo restablecerá los votos que ya se hayan emitido.

Para obtener más información sobre cómo crear sondeos, consulta "[Creación de un sondeo](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#creating-a-poll)".

## Acerca de la organización de debates

Puedes organizar debates con categorías y etiquetas.

{% data reusables.discussions.you-can-categorize-discussions %} {% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.repository-category-limit %}

Para los debates con un formato de pregunta/respuesta, un comentario individual dentro del debate puede marcarse como la respuesta a éste. {% data reusables.discussions.github-recognizes-members %}

{% data reusables.discussions.about-announcement-format %}

Para más información, consulta "[Administración de categorías para debates](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)".

{% data reusables.discussions.you-can-label-discussions %}

## Mejores prácticas para los {% data variables.product.prodname_discussions %}

Como mantenedor o miembro de la comunidad, inicia un debate para hacer una pregunta o debatir información que les afecte. Para más información, vea "[Colaboración con mantenedores mediante debates](/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions)".

Participa en un debate para hacer y responder preguntas, proporcionar retroalimentación e interactuar con la comunidad del proyecto. Para más información, vea "[Participar en un debate](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)".

Puedes destacar los debates que contengan conversaciones importantes, útiles o ejemplares entre los miembros de la comunidad. Para más información, consulta "[Administración de debates](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)".

{% data reusables.discussions.you-can-convert-an-issue %} Para más información, consulta "[Moderación de debates](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)."

## Compartir la retroalimentación

Puedes compartir tu retroalimentación sobre los {% data variables.product.prodname_discussions %} con {% data variables.product.company_short %}. Para unirte a la conversación, consulta los debates [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/discussions).

## Información adicional

- "[Acerca de la escritura y el formato en {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github)".
- "[Búsqueda de debates](/search-github/searching-on-github/searching-discussions)"
- "[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications)"
- "[Moderación de comentarios y conversaciones](/communities/moderating-comments-and-conversations)"{% ifversion fpt or ghec %}
- "[Mantenimiento de la seguridad en {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)"{% endif %}
