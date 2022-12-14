---
title: Actualización de NameID de SAML de un usuario
shortTitle: Update SAML NameID
intro: 'Cuando el `NameID` de una cuenta cambia en el proveedor de identidades (IdP) y la persona ya no {% ifversion ghes or ghae %}inicia sesión {% data variables.product.product_location %}{% elsif ghec %}se autentica para acceder a los recursos de la empresa{% endif %}, debes {% ifversion ghec %}ponerte en contacto con el Soporte técnico de {% data variables.product.company_short %} o revocar la identidad vinculada de la persona{% elsif ghes %}actualizar la asignación de `NameID` en {% data variables.product.product_location %}{% elsif ghae %}ponerte en contacto con el Soporte técnico de {% data variables.product.company_short %}{% endif %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 7a151143219fc0885861beedb69a2608983c5588
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717905'
---
## Acerca de las actualizaciones de `NameID` de SAML de un usuario

En algunas situaciones, es posible que tengas que actualizar los valores asociados a la cuenta de una persona en el IdP de SAML. Si ese identificador también es el `NameID` que utilizas para la autenticación en {% data variables.product.product_name %}, debes actualizar la asignación de `NameID` en la instancia para que el usuario se pueda seguir autenticado correctamente. Para más información, consulta "[Consideraciones sobre el nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

## Actualización del elemento `NameID` de SAML de un usuario

Los propietarios de una empresa pueden actualizar el `NameID` de SAML de un usuario en una instancia de {% data variables.product.product_name %}.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. En la barra lateral izquierda, haga clic en **All users** (Todos los usuarios).
  ![Elemento de barra lateral "Todos los usuarios" en la configuración del administrador del sitio](/assets/images/enterprise/site-admin-settings/all-users.png)
3. En la lista de usuarios, haga clic en el nombre de usuario para el que quiere actualizar la asignación `NameID`.
  ![Nombre de usuario en la lista de cuentas de usuario de instancia](/assets/images/enterprise/site-admin-settings/all-users-click-username.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
5. A la derecha de "Update SAML NameID" (Actualizar NameID de SAML), haga clic en **Edit** (Editar).
  ![Botón "Editar" en "Autenticación SAML" y a la derecha de "Actualizar NameID de SAML"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. En el campo "NameID", escriba el elemento `NameID` nuevo para el usuario.
  ![Campo "NameID" en el cuadro de diálogo modal con un NameID escrito](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Haga clic en **Update NameID** (Actualizar NameID).
  ![Botón "Update NameID" (Actualizar NameID) en el valor NameID actualizado en el modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
