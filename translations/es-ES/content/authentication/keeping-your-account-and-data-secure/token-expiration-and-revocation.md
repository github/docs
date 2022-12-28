---
title: Vencimiento y revocación de tokens
intro: 'Tus tokens pueden vencer y también los puedes revocar tú, las aplicaciones que hayas autorizado y el mismo {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Token expiration
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation
ms.openlocfilehash: 00ccfc3117401bfa9464da9599067fe1d2f514dd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107001'
---
Cuando un token ha expirado o se ha revocado, ya no se puede usar para autenticar solicitudes de Git y de API. No es posible restablecer un token revocado o vencido, ya seas tú o la aplicación necesitarán crear un token nuevo.

Este artículo te explica las posibles razones por las cuales tu token de {% data variables.product.product_name %} podría revocarse o vencer.

{% note %}

**Nota:** Cuando un {% data variables.product.pat_generic %} o de OAuth expira o se revoca, es posible que veas una acción `oauth_authorization.destroy` en el registro de seguridad. Para más información, vea "[Revisión del registro de seguridad](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log)".

{% endnote %}

## El token se revocó después de llegar a su fecha de vencimiento

Cuando creas un {% data variables.product.pat_generic %}, te recomendamos que configures una fecha de vencimiento para este. Al alcanzar la fecha de vencimiento de tu token, este se revocará automáticamente. Para obtener más información, consulta "[Creación de una {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".

{% ifversion fpt or ghec %}
## El token se revocó cuando se subió a un repositorio o gist público

Si un token de OAuth, un token de {% data variables.product.prodname_github_app %} o un {% data variables.product.pat_generic %} válido se sube a un repositorio o gist público, este se revocará automáticamente. 

{% endif %}

{% ifversion fpt or ghec %}
## El token venció debido a la falta de uso

{% data variables.product.product_name %} revocará el token de OAuth o el {% data variables.product.pat_generic %} automáticamente cuando no se haya utilizado en un año.
{% endif %}

## El usuario revocó el token

Puedes revocar tu autorización de una {% data variables.product.prodname_github_app %} o {% data variables.product.prodname_oauth_app %} desde tus ajustes de cuenta, lo cual revocará cualquier token asociado con la app. Para más información, vea "[Revisión de las integraciones autorizadas](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations)" y "[Revisión de las aplicaciones autorizadas (OAuth)](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth)".

Una vez que se revoca una autorización, cualquier token asociado con la autorización también se revocará. Para volver a autorizar una aplicación, sigue las instrucciones de la aplicación de terceros o sitio web para conectarte nuevamente a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.

## La {% data variables.product.prodname_oauth_app %} revocó el token

El propietario de una {% data variables.product.prodname_oauth_app %} puede revocar una autorización de su app en una cuenta, esto también revocará cualquier token asociado con esa autorización. Para más información sobre cómo revocar las autorizaciones de la aplicación de OAuth, vea "[Eliminación de una autorización de aplicación](/rest/reference/apps#delete-an-app-authorization)".

Los propietarios de {% data variables.product.prodname_oauth_app %} también pueden revocar tokens individuales asociados a una autorización. Para obtener más información sobre cómo revocar tokens individuales para la aplicación de OAuth, consulta "[Eliminar un token de aplicación](/rest/apps/oauth-applications#delete-an-app-token)".

## El token se revocó debido a un exceso de tokens para una {% data variables.product.prodname_oauth_app %} con el mismo alcance

{% data reusables.apps.oauth-token-limit %}

## El token de usuario se revocó debido a la configuración de la {% data variables.product.prodname_github_app %}

Los tokens de usuario a servidor que creó una {% data variables.product.prodname_github_app %} vencerán después de ocho horas, predeterminadamente. Los propietarios de las {% data variables.product.prodname_github_apps %} pueden configurar sus apps para que los tokens de usuario a servidor no venzan. Para más información sobre cómo cambiar el comportamiento de los tokens de usuario a servidor de la aplicación {% data variables.product.prodname_dotcom %}, vea "[Activación de características opcionales para aplicaciones](/developers/apps/getting-started-with-apps/activating-optional-features-for-apps)".
