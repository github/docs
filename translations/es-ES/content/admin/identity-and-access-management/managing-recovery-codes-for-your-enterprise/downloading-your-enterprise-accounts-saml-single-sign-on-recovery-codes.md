---
title: Descarga de los códigos de recuperación de inicio de sesión único de SAML de la cuenta de la empresa
shortTitle: Download recovery codes
intro: To ensure that you can access {% data variables.product.product_name %} if your identity provider (IdP) is unavailable, you should download your enterprise account's SAML single sign-on (SSO) recovery codes.
versions:
  ghec: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- SSO
permissions: Enterprise owners can download the SAML SSO recovery codes for the enterprise account.
ms.openlocfilehash: cd06d34b2dbf3e0c3b0a96bc3b92b2fb2b78e080
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116618"
---
En caso de que el IdP no esté disponible, puede usar un código de recuperación para iniciar sesión y acceder a la empresa en {% data variables.product.product_location %}. Para más información, vea "[Acceso a la cuenta de empresa si el proveedor de identidades no está disponible](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)".

Si no ha guardado los códigos de recuperación al configurar el inicio de sesión único de SAML, todavía puede acceder a ellos desde la configuración de la empresa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. En "Requerir autenticación SAML", haga clic en **Guardar los códigos de recuperación**.
![Captura de pantalla del Botón para probar la configuración de SAML antes de aplicarla](/assets/images/help/enterprises/saml-recovery-codes-link.png)

2. Para guardar los códigos de recuperación, haga clic en **Descargar**, **Imprimir** o **Copiar**.
![Captura de pantalla de los botones para descargar, imprimir o copiar los códigos de recuperación](/assets/images/help/saml/saml_recovery_code_options.png)
