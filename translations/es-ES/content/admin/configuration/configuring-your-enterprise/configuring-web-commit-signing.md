---
title: Configuración de la firma de confirmación web
shortTitle: Configure web commit signing
intro: 'Puedes habilitar la firma automática de confirmaciones realizadas en la interfaz web de {% data variables.product.product_name %}.'
versions:
  ghes: '>=3.5'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Identity
  - Security
permissions: 'Site administrators can configure web commit signing for {% data variables.product.product_location %}.'
ms.openlocfilehash: 759b158235e5727b474441d10b33016b58277c7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068038'
---
## Acerca de la firma de confirmación web

Si habilitas la firma de confirmación web, {% data variables.product.product_name %} usará automáticamente GPG para firmar confirmaciones que los usuarios realizan en la interfaz web de {% data variables.product.product_location %}. Las confirmaciones firmadas por {% data variables.product.product_name %} tendrán un estado comprobado. Para obtener más información, consulte "[Acerca de la comprobación de firmas de confirmación](/authentication/managing-commit-signature-verification/about-commit-signature-verification)".

Puedes habilitar la firma de confirmación web, rotar la clave privada usada para la firma de confirmación web y deshabilitar la firma de confirmación web.

## Habilitación de la firma de confirmación web

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - Si tienes una dirección de correo electrónico sin respuesta definida en {% data variables.enterprise.management_console %}, usa esa dirección de correo electrónico. Si no es así, usa cualquier dirección de correo electrónico, como `web-flow@my-company.com`. No es necesario que la dirección de correo electrónico sea válida.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
1. Habilita la firma de confirmación web.

    ```bash{:copy}
    ghe-config app.github.web-commit-signing-enabled true
    ```
1. Aplica la configuración y espera a que se complete la ejecución de la configuración.

   ```bash{:copy}
   ghe-config-apply
   ```
1. Crea un nuevo usuario en {% data variables.product.product_location %} a través de la autenticación integrada o la autenticación externa. Para obtener más información, consulta "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".
   - El nombre de usuario del usuario debe ser `web-flow`.
   - La dirección de correo electrónico del usuario debe ser la misma dirección que usaste para la clave PGP. {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %} {% data reusables.enterprise_site_admin_settings.email-settings %}
1. En "Dirección de correo electrónico sin respuesta", escribe la misma dirección de correo electrónico que usaste para la clave PGP. 

   {% note %}

   **Nota:** El campo "Dirección de correo electrónico sin respuesta" solo se mostrará si has habilitado el correo electrónico para {% data variables.product.product_location %}. Para más información, vea "[Configuración del correo electrónico para notificaciones](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications#configuring-smtp-for-your-enterprise)".

   {% endnote %} {% data reusables.enterprise_management_console.save-settings %}

## Rotación de la clave privada usada para la firma de confirmación web

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - Usa la dirección de correo electrónico sin respuesta definida en {% data variables.enterprise.management_console %}, que debe ser la misma que la dirección de correo electrónico del usuario `web-flow`.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %} {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}

## Deshabilitación de la firma de confirmación web

Puedes deshabilitar la firma de confirmación web para {% data variables.product.product_location %}.

1. En el shell administrativo, ejecuta el siguiente comando.

   ```bash{:copy}
   ghe-config app.github.web-commit-signing-enabled false
   ```
1. Aplique la configuración.

   ```bash{:copy}
   ghe-config-apply
   ```
