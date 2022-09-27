---
title: Desbloquear un usuario desde tu organización
intro: Los propietarios y moderadores de la organización pueden desbloquear un usuario que se haya bloqueado previamente y restaurar su acceso a los repositorios de la organización.
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
  - /github/building-a-strong-community/unblocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Unblock from your org
ms.openlocfilehash: 0c7099c21e3342717605f59a94e0025a7949b1cc
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145117665'
---
Después de desbloquear un usuario desde tu organización, este podrá contribuir con los repositorios de tu organización.

Si seleccionaste una cantidad de tiempo específica para bloquear al usuario, se desbloqueará de forma automática cuando termine ese período de tiempo. Para obtener más información, vea "[Bloquear a un usuario de su organización](/articles/blocking-a-user-from-your-organization)".

{% tip %}

**Sugerencia**: Las configuraciones que se hayan quitado cuando bloqueó al usuario de su organización, como el estado de colaborador, las estrellas y las observaciones, no se restaurarán cuando desbloquee al usuario.

{% endtip %}

## Desbloquear un usuario en un comentario

1. Navega hasta el comentario cuyo autor quieres desbloquear.
2. En la esquina superior derecha del comentario, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Unblock user**. (Desbloquear usuario).
![Icono kebab horizontal y menú de moderación de comentarios en el que se muestra la opción de desbloquear usuario](/assets/images/help/repository/comment-menu-unblock-user.png)
3. Para confirmar que quiere desbloquear al usuario, haga clic en **OK** (Aceptar).

## Desbloquear un usuario en los parámetros de la organización


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
1. En "Blocked users" (Usuarios bloqueados), junto al usuario que quiera desbloquear, haga clic en **Unblock** (Desbloquear).
![Botón Unblock user (Desbloquear usuario)](/assets/images/help/organizations/org-unblock-user-button.png)

## Información adicional

- "[Bloquear a un usuario desde su organización](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)"
- "[Bloquear a un usuario desde su cuenta personal](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)"
- "[Desbloquear a un usuario desde su cuenta personal](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
- "[Notificar un abuso o correo no deseado](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
