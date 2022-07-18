---
title: Updating a user's SAML NameID
shortTitle: Update SAML NameID
intro: 'Cuando el `NameID` de una cuenta cambia en tu proveedor de identidad (IdP) y la persona ya no puede {% ifversion ghes or ghae %}iniciar sesión en {% data variables.product.product_location %}{% elsif ghec %}autenticarse para acceder a los recursos de tu empresa{% endif %}, debes {% ifversion ghec %}ya sea contactar al soporte de {% data variables.product.company_short %} o revocar la identidad vinculada de la persona{% elsif ghes %}actualizar el mapeo de la `NameID` en {% data variables.product.product_location %}{% elsif ghae %}contactar al soporte de {% data variables.product.company_short %}{% endif %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## About updates to users' SAML `NameID`

In some situations, you may need to update values associated with a person's account on your SAML IdP. If that identifier is also the `NameID` that you use for authentication on {% data variables.product.product_name %}, you must update the `NameID` mapping on your instance so the person can continue to authenticate successfully. Para obtener más información, consulta la sección "[Consideraciones de nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

## Actualizar la `NameID` de SAML de un usuario

Enterprise owners can update a user's SAML `NameID` on a {% data variables.product.product_name %} instance.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Selecciona **SAML**. ![Elemento de "Todos los usuarios" en la barra lateral en la configuración de administrador de sitio](/assets/images/enterprise/site-admin-settings/all-users.png)
3. En la lista de usuarios, da clic en el nombre de usuario del cual te gustaría actualizar el mapeo de la `NameID`. ![Nombre de usuario en la lista de cuentas de usuario de la instancia](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. To the right of "Update SAML NameID", click **Edit** . ![Botón de "Editar" debajo de "Autenticación de SAML" y a la derecha de "Actualizar la NameID de SAML"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. En el campo de "NameID", teclea la `NameID` nueva para el usuario. ![Campo de "NameID" en diálogo modal con el valor de NameID ingresado](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Da clic en **Actualizar NameID**. ![Botón de "Actualizar NameID" debajo del valor actualizado de la NameID dentro del modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
