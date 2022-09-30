---
title: Acerca de los debates de equipo
intro: 'Tu equipo puede planificar de manera conjunta, actualizarse unos a otros o hablar sobre cualquier tema que quieran en las publicaciones de debates en la página de tu equipo en una organización.'
redirect_from:
  - /articles/about-team-discussions
  - /github/building-a-strong-community/about-team-discussions
  - /github/setting-up-and-managing-organizations-and-teams/about-team-discussions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 173a067c99ff6ab10ceb6d7f0a7ef288de58b658
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135210'
---
{% data reusables.organizations.team-discussions-purpose %}

Todo miembro de una organización puede publicar en la página de tu equipo o participar de un debate público. {% data reusables.organizations.team-discussions-permissions %}

![Pestaña Debayes de la página del equipo con debates privados y públicos](/assets/images/help/organizations/team-page-discussions-tab.png)

Puedes vincularte a cualquier debate de equipo para hacer referencia al mismo en otro lugar. Puedes anclar publicaciones importantes a la página de tu equipo para una referencia rápida a futuro. Para obtener más información, vea "[Anclaje de un debate de equipo](/organizations/collaborating-with-your-team/pinning-a-team-discussion)".

![Pestaña Debates anclados de la página del equipo con debate anclado](/assets/images/help/organizations/team-discussions-pinned.png)

{% data reusables.organizations.team-discussions-default %} Los propietarios pueden desactivar debates del equipo para toda la organización. Para más información, vea "[Deshabilitación de los debates de equipo para la organización](/articles/disabling-team-discussions-for-your-organization)".

## Notificaciones para los debates del equipo

Cuando alguien publica o responde a un debate público en la página de un equipo, los miembros del equipo y los miembros de cualquier equipo hijo reciben un correo electrónico o notificaciones web. Cuando alguien publica o responde a un debate privado en la página de un equipo, solo los miembros del equipo reciben notificaciones.

{% tip %}

**Sugerencia**: En función de los parámetros de la notificación, recibirá actualizaciones por correo electrónico, la página de notificaciones web en {% data variables.product.product_name %} o por ambos medios. Para más información, vea "[Configuración de notificaciones](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)".

{% endtip %}

Por defecto, si se menciona tu nombre de usuario en un debate del equipo, recibirás notificaciones por la publicación que menciona tu nombre de usuario y toda respuesta a esa publicación. Además, por defecto, si respondes a una publicación, recibirás notificaciones por otras respuestas a la publicación.

Para apagar las notificaciones para los debates del equipo, puedes cancelar la suscripción a una publicación de debate específica o cambiar tus parámetros de notificación para dejar de ver o ignorar por completo los debtaes de un equipo específico. Te puedes suscribir a las notificaciones para la publicación de un debate específico incluso si dejaste de ver los debates de ese equipo.

Para más información, consulta "[Vista de las suscripciones](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)" y "[Equipos anidados](/articles/about-teams/#nested-teams)".

{% ifversion fpt or ghec %}

## Debates de la organización

También puedes usar los debates de la organización para facilitar las conversaciones en toda la organización. Para obtener más información, consulta "[Habilitación o deshabilitación de los debates de GitHub para una organización](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)".

{% endif %}

## Información adicional

- "[Inicio rápido para comunicarse en {% data variables.product.prodname_dotcom %}](/github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github)"
- "[Acerca de los equipos](/articles/about-teams)"
- "[Crear un debate del equipo](/organizations/collaborating-with-your-team/creating-a-team-discussion)"
- "[Editar o eliminar un debate de equipo](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)"
