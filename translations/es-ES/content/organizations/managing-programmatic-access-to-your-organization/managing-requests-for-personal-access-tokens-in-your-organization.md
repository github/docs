---
title: Administración de solicitudes de tokens de acceso personal en la organización
intro: 'Los propietarios de la organización pueden aprobar o denegar un {% data variables.product.pat_v2 %} que solicite acceso a la organización.'
versions:
  feature: pat-v2
shortTitle: Manage token requests
ms.openlocfilehash: 3925b74ad29268ec80eca8dd5355c58987e52843
ms.sourcegitcommit: d309541e8f0e28bc1ec333a85b00218627e54fe1
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/03/2022
ms.locfileid: '148131389'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Acerca de las solicitudes de {% data variables.product.pat_v2 %}

Cuando los miembros de la organización crean un {% data variables.product.pat_v2 %} para acceder a los recursos que pertenecen a la organización, si esta requiere que se apruebe el {% data variables.product.pat_v2 %}, un propietario de la organización deberá aprobar el token para que pueda usarse con el fin de acceder a recursos que no sean públicos. Para obtener más información, consulta "[Configuración de una directiva de {% data variables.product.pat_generic %} para la organización](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".

{% data variables.product.company_short %} enviará a los propietarios de la organización un correo electrónico diario sobre cada {% data variables.product.pat_v2 %} que está pendiente de aprobación. Cuando se deniegue o apruebe un token, el usuario que lo creó recibirá una notificación por correo electrónico.

{% note %}

**Nota**: Solo están sujetos a aprobación los {% data variables.product.pat_v2 %}, no los {% data variables.product.pat_v1_plural %}. A menos que la organización tenga acceso restringido por {% data variables.product.pat_v1_plural %}, cualquier {% data variables.product.pat_v1 %} puede acceder a los recursos de la organización sin aprobación previa. Para obtener más información, consulta "[Configuración de una directiva de {% data variables.product.pat_generic %} para la organización](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".

{% endnote %}

## Administración de solicitudes de {% data variables.product.pat_v2 %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la barra lateral izquierda, en **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , haz clic en **Solicitudes pendientes**. Si hay algún token pendiente de aprobación para la organización, aparecerá aquí.
1. Haz clic en el nombre del token que quieres aprobar o denegar.
1. Revisa el acceso y los permisos que solicita el token.
1. Para conceder al token acceso a la organización, haz clic en **Aprobar**. Para impedir que el token tenga acceso a la organización, haz clic en **Denegar**.
1. Si deniegas la solicitud, en el cuadro de confirmación, puedes indicar a qué motivo se debe. Este motivo se incluirá en la notificación que se envía al propietario del token. Después, haz clic en **Denegar**.

Como alternativa, puedes aprobar o denegar varios tokens a la vez:

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. En la barra lateral izquierda, en **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , haz clic en **Solicitudes pendientes**. Si hay algún token pendiente de aprobación para la organización, aparecerá aquí.
{% data reusables.user-settings.patv2-filters %}
1. Selecciona cada token que quieras aprobar o rechazar.
1. Selecciona el menú desplegable **Solicitud seleccionada…** y haz clic en **Aprobar…** o **Denegar…**
