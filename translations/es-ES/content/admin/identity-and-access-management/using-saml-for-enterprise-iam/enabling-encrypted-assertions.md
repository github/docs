---
title: Habilitar las aserciones cifradas
shortTitle: Enable encrypted assertions
intro: 'Puedes mejorar la seguridad de {% data variables.product.product_location %}con el inicio de sesión único (SSO) de SAML cifrando los mensajes que envía el proveedor de identidades (IdP) de SAML.'
permissions: 'Site administrators can configure encrypted assertions for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '> 3.3'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
ms.openlocfilehash: ecb60a4398993155fa7498f26e7628660e88e54a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063782'
---
## Acerca de las aserciones cifradas

Si tu IdP es compatible con el cifrado de aserciones, puedes configurarlas en {% data variables.product.product_name %} para aumentar la seguridad durante el proceso de autenticación.

## Requisitos previos

Para habilitar las aserciones cifradas para la autenticación en {% data variables.product.product_name %}, debes configurar la autenticación SAML y el IdP debe admitir las aserciones cifradas.

## Habilitar las aserciones cifradas

Para habilitar las aserciones cifradas, debes proporcionar un certificado público de {% data variables.product.product_location %} a tu IdP y configurar los ajustes de cifrado que coincidan con este.

{% note %}

**Nota**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. Opcionalmente, habilita la depuración de SAML. La depuración de SAML registra las entradas verbosas en la bitácora de autenticación de {% data variables.product.product_name %} y podría ayudarte a solucionar problemas de los intentos de autenticación fallidos. Para obtener más información, consulta "[Solución de problemas de autenticación SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)".
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. Seleccione **Require encrypted assertions** (Requerir aserciones cifradas).

   ![Captura de pantalla de la casilla "Habilitar aserciones cifradas" en la sección "Autenticación" de la consola de administración](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. A la derecha de "Encryption Certificate" (Certificado de cifrado), haga clic en **Download** (Descargar) para guardar una copia del certificado público de {% data variables.product.product_location %} en su máquina local.

   ![Captura de pantalla del botón "Descargar" del certificado público para aserciones cifradas](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. Inicia sesión en tu IdP de SAML como administrador.
1. En la aplicación de {% data variables.product.product_location %}, habilita las aserciones cifradas.
   - Anota el método de cifrado y de transporte de llave.
   - Proporciona el certificado público que descargaste en el paso 7.
1. Regresa a la consola de administración en {% data variables.product.product_location %}.
1. A la derecha de "Método de cifrado", selecciona el método de cifrado para tu IdP desde el paso 9.

   ![Captura de pantalla de "Método de cifrado" para aserciones cifradas](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. A la derecha de "Método de transporte de llave", selecciona el método de transporte de llave para tu IdP desde el paso 9.

   ![Captura de pantalla de "Método de transporte de claves" para aserciones cifradas](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. Haga clic en **Save settings** (Guardar configuración).
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

Si habilitaste la depuración de SAML para probar la autenticación con las aserciones cifradas, inhabilita la depuración de SAML cuando termines de hacer las pruebas. Para obtener más información, consulta "[Solución de problemas de autenticación SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)".
