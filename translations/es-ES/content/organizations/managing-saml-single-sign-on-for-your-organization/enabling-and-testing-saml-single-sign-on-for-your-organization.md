---
title: Habilitar y probar el inicio de sesión único SAML para tu organización
intro: Los administradores y los propietarios de la organización pueden habilitar el inicio de sesión único SAML para agregar una capa más de seguridad a su organización.
redirect_from:
  - /articles/enabling-and-testing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enable & test SAML SSO
ms.openlocfilehash: f9b60931978f80de33c0e6a2d5268287e208040a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126206'
---
## Acerca del inicio de sesión único de SAML

Puedes habilitar SAML SSO (inicio de sesión único) en tu organización sin requerir que todos los miembros lo usen. Habilitar pero no exigir SAML SSO en tu organización puede facilitar la adopción de SAML SSO por parte de la organización. Una vez que la mayoría de los miembros usen SAML SSO, podrás exigirlo en toda la organización.

{% data reusables.saml.ghec-only %}

Si habilitas pero no exiges SAML SSO, los miembros de la organización que elijan no usar SAML SSO pueden seguir siendo miembros de esta. Para más información sobre la aplicación del inicio de sesión único de SAML, vea "[Aplicación del inicio de sesión único de SAML para la organización](/articles/enforcing-saml-single-sign-on-for-your-organization)".

{% data reusables.saml.outside-collaborators-exemption %}

{% data reusables.saml.saml-disabled-linked-identities-removed %}

## Habilitar y probar el inicio de sesión único SAML para tu organización

Antes de requerir el SSO de SAML en tu organización, asegúrate de que la hayas preparado. Para más información, vea "[Preparación para aplicar el inicio de sesión único de SAML en la organización](/articles/preparing-to-enforce-saml-single-sign-on-in-your-organization)".

Para más información sobre los proveedores de identidades (IDP) que admite {% data variables.product.company_short %} para el inicio de sesión único de SAML, vea "[Conexión del proveedor de identidades a la organización](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. En "Inicio de sesión único de SAML", seleccione **Habilitar autenticación SAML**.
![Casilla para habilitar el SSO de SAML](/assets/images/help/saml/saml_enable.png)

  {% note %}

  **Nota:** Después de habilitar el SSO de SAML, puede descargar los códigos de recuperación de inicio de sesión único para poder acceder a la organización incluso cuando el IdP no esté disponible. Para más información, vea "[Descarga de los códigos de recuperación de inicio de sesión único de SAML de la organización](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)".

  {% endnote %}

6. En el campo "URL de inicio de sesión único", escribe el extremo del HTTPS de tu IdP para las solicitudes de inicio de sesión único. Este valor se encuentra en la configuración de tu IdP.
![Campo para la URL a la que se dirigirá a los miembros cuando inicien sesión](/assets/images/help/saml/saml_sign_on_url.png)
7. También puedes escribir tu nombre de emisor SAML en el campo "Emisor". Esto verifica la autenticidad de los mensajes enviados.
![Campo para el nombre del emisor de SAML](/assets/images/help/saml/saml_issuer.png)
8. En "Certificado público", copia un certificado para verificar las respuestas SAML.
![Campo para el certificado público del proveedor de identidades](/assets/images/help/saml/saml_public_certificate.png)
9. Haga clic en {% octicon "pencil" aria-label="The edit icon" %} y, después, en los menús desplegables Método de firma y Método de resumen, elija el algoritmo de hash que usa el emisor de SAML para comprobar la integridad de las solicitudes.
![Menús desplegables para los algoritmos de hash del método de firma y del método de resumen usados por el emisor de SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Antes de habilitar el SSO de SAML para la organización, haga clic en **Probar la configuración de SAML** para asegurarse de que la información que ha escrito sea correcta. ![Botón para probar la configuración de SAML antes de aplicarla](/assets/images/help/saml/saml_test.png)

  {% tip %}

  **Sugerencia:** {% data reusables.saml.testing-saml-sso %}

  {% endtip %}
11. Para aplicar el SSO de SAML y eliminar a todos los miembros de la organización que no se hayan autenticado mediante el IdP, seleccione **Requerir autenticación de SSO de SAML para todos los miembros de la organización _nombre de la organización_**. Para más información sobre la aplicación del inicio de sesión único de SAML, vea "[Aplicación del inicio de sesión único de SAML para la organización](/articles/enforcing-saml-single-sign-on-for-your-organization)".
![Casilla para exigir el SSO de SAML en la organización](/assets/images/help/saml/saml_require_saml_sso.png)
12. Haga clic en **Save**(Guardar).
![Botón para guardar la configuración del SSO de SAML](/assets/images/help/saml/saml_save.png)

## Información adicional

- "[Acerca de la administración de acceso e identidad con el inicio de sesión único de SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Referencia de configuración de SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)"
