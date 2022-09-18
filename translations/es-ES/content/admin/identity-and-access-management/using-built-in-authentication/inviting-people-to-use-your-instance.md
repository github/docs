---
title: Invitar a personas a usar la instancia
intro: 'Cuando usas la autenticación integrada para {% data variables.product.product_name %}, puedes invitar personas por dirección de correo electrónico para que creen una cuenta de usuario en tu instancia.'
versions:
  ghes: '*'
permissions: 'Enterprise owners can invite people to create a user account on a {% data variables.product.product_name %} instance.'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Invite people
ms.openlocfilehash: d7ccb5e06f297a11ba97fa41d8250821909e5e3d
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717801'
---
## Acerca de las invitaciones para nuevos usuarios

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %}

Puedes deshabilitar los registros no autenticados y solicitar una invitación para crear una nueva cuenta de usuario en la instancia. Para más información, consulta "[Deshabilitación de los registros no autenticados](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)".

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %} 

## Invitar a personas a crear una cuenta de usuario

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

Si has configurado el correo electrónico para las notificaciones en {% data variables.product.product_location %}, la instancia enviará la invitación a la dirección de correo electrónico proporcionada. Para más información, vea "[Configuración del correo electrónico para notificaciones](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)".
