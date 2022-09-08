---
ms.openlocfilehash: bc73b3b92f131cf0af80606a2650ac5ce898055e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145109921"
---
Antes de habilitar la sincronización de equipos para Okta, tú o tu administrador de IdP deben:

- Configurar la integración con SAML, SSO y SCIM en tu organización utilizando Okta. Para obtener más información, vea "[Configuración del inicio de sesión único de SAML y SCIM mediante Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)".
- Proporcionar la dirección URL del inquilino para la instancia de Okta.
- Generar un token de SSWS válido con permisos administrativos de solo lectura para la instalación de Okta como usuario de servicio. Para obtener más información, vea [Creación del token](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/) y [Usuarios del servicio](https://help.okta.com/asa/en-us/Content/Topics/Adv_Server_Access/docs/service-users.htm) en la documentación de Okta.
