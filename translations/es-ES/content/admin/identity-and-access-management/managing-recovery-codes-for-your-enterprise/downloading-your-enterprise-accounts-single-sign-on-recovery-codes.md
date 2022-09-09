---
title: Descarga de los códigos de recuperación de inicio de sesión único de la cuenta de la empresa
shortTitle: Download recovery codes
intro: 'Para asegurarte de que puedes acceder a {% data variables.product.product_name %} si el proveedor de identidades (IdP) no está disponible, debes descargar los códigos de recuperación de inicio de sesión único (SSO) de la cuenta de empresa.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-saml-single-sign-on-recovery-codes
permissions: Enterprise owners can download the SSO recovery codes for the enterprise account.
ms.openlocfilehash: 82f44654b18a36d2fb29797fe8b6e0426785522b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063598'
---
En caso de que el IdP no esté disponible, puede usar un código de recuperación para iniciar sesión y acceder a la empresa en {% data variables.product.product_location %}. Para más información, vea "[Acceso a la cuenta de empresa si el proveedor de identidades no está disponible](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)".

Si no has guardado los códigos de recuperación al configurar el inicio de sesión único, todavía puede acceder a ellos desde la configuración de la empresa.



{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. En{% ifversion oidc-for-emu %}, ya sea{% endif %} "Requerir autenticación SAML"{% ifversion oidc-for-emu %} o "Requerir autenticación OIDC"{% endif %}, haz clic en **Guardar códigos de recuperación**.{% ifversion oidc-for-emu %} {% note %}
  
  **Nota:** el inicio de sesión único de OIDC solo está disponible para {% data variables.product.prodname_emus %}. Para obtener más información, vea "[Acerca de los usuarios administrados empresariales](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".
  
  {% endnote %}{% endif %}
  
  ![Captura de pantalla del Botón para probar la configuración de SAML antes de aplicarla](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. Para guardar los códigos de recuperación, haga clic en **Descargar**, **Imprimir** o **Copiar**.
  ![Captura de pantalla de los botones para descargar, imprimir o copiar los códigos de recuperación](/assets/images/help/saml/saml_recovery_code_options.png)
