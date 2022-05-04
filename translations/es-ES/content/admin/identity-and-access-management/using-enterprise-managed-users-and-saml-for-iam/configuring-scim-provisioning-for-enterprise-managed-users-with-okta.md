---
title: Configurar el aprovisionamiento de SCIM para los Usuarios Administrados Empresariales con Okta
shortTitle: Configura el aprovisionamiento con Okta
intro: Puedes aprovisionar usuarios nuevos y administrar la membrecía de tu empresa y equipos utilizando Okta como tu proveedor de identidad.
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
  - /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

## Acerca del aprovisionamiento con Okta

Puedes utilizar los {% data variables.product.prodname_emus %} con Okta como tu proveedor de identidad para aprovisionar cuentas nuevas, administrar la membrecía empresarial y administrar las membrecías de equipo para las organizaciones de tu empresa. Para obtener más información sobre cómo aprovisionar para los {% data variables.product.prodname_emus %}, consulta la sección "[Configurar el aprovisionamiento de SCIM para los usuarios administrados empresariales](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users)".

Antes de que puedas configurar el aprovisionamiento con Okta, debes configurar el inicio de sesión único de SAML. Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML para los Usuarios Administrados Empresariales](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)".

Para configurar el aprovisionamiento con Okta, debes configurar el nombre de tu empresa en la aplicación de {% data variables.product.prodname_emu_idp_application %} e ingresar el token de acceso personal del usuario de configuración. Entonces podrás aprovisionar usuarios en Okta.

## Características compatibles

{% data variables.product.prodname_emus %} es compatible con muchas características de aprovisionamiento en Okta.

| Característica                    | Descripción                                                                                                                                                                                                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Subir Usuarios Nuevos             | Los usuarios que se asignan a la aplicación de {% data variables.product.prodname_emu_idp_application %} en Okta se crean automáticamente en la empresa en {% data variables.product.product_name %}.                                                          |
| Subir la Actualización de Perfil  | Las actualizaciones que se hacen al perfil del usuario en Oktan se subirán a {% data variables.product.product_name %}.                                                                                                                                            |
| Grupos de Subida                  | Los Grupos en Okta que se hayan asignado a la aplicación de {% data variables.product.prodname_emu_idp_application %} como Grupos de Subida se crearán automáticamente en la empresa en {% data variables.product.product_name %}.                             |
| Subir Desactivaciones de Usuarios | El desasignar al usuario de la aplicación de {% data variables.product.prodname_emu_idp_application %} en Okta lo inhabilitará en {% data variables.product.product_name %}. El usuario no podrá iniciar sesión, pero la información del usuario se mantendrá. |
| Reactivar Usuarios                | Se habilitarán los usuarios en Okta cuyas cuentas de Okta se reactiven y quienes se asignen de vuelta a la aplicación de {% data variables.product.prodname_emu_idp_application %}.                                                                              |

{% note %}

**Nota:** {% data variables.product.prodname_emus %} no es compatible con la modificación de nombres de usuario.

{% endnote %}

## Configurar el nombre de tu empresa

Después de que se haya creado tu {% data variables.product.prodname_emu_enterprise %}, puedes comenzar a configurar el aprovisionamiento configurando el nombre de tu empresa en Okta.

1. Navega a tu aplicación de {% data variables.product.prodname_emu_idp_application %} en Okta.
1. Haz clic en la pestaña **Iniciar sesión**.
1. Para hacer cambios, haz clic en **Editar**.
1. Debajo de "Ajustes avanzados de inicio de sesión", en la caja de texto de "Nombre de empresa", teclea el nombre de tu empresa. Por ejemplo, si accedes a tu empresa en `https://github.com/enterprises/octoinc`, tu nombre de empresa será "octoinc". ![Captura de pantalla del campo de Nombre de Empresa en Okta](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. Para guardar el nombre de tu empresa, haz clic en **Guardar**.

## Configurar el aprovisionamiento

Después de que configures el nombre de tu empresa, puedes proceder a configurar los ajustes de aprovisionamiento.

Para configurar el aprovisionamiento, el usuario de configuración con el nombre de usuario **@<em>SHORT-CODE</em>_admin** necesitará aprovisionar un token de acceso personal con el alcance **admin:enterprise**. Para obtener más información sobre cómo crear un token nuevo, consulta la sección [Crear un token de acceso personal](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)".

1. Navega a tu aplicación de {% data variables.product.prodname_emu_idp_application %} en Okta.
1. Haz clic en la pestaña de **Aprovisionamiento**.
1. En el menú de configuración, haz clic en ** integración**.
1. Para hacer cambios, haz clic en **Editar**.
1. Selecciona **Habilitar la Integraciòn de la API**.
1. En el campo de "Token de la API", ingresa el token de acceso personal con el alcance **admin:enterprise** que pertenece al usuario de configuración. ![Captura de pantalla que muestra el campo de Token de la API en Okta](/assets/images/help/enterprises/okta-emu-token.png)
1. Haz clic en **Probar las credenciales de la API**. Si la prueba tiene éxito, se mostrará un mensaje de verificación en la parte superior de la pantalla.
1. Para guardar el token, haz clic en **Guardar**.
1. En el menú de configuración, haz clic en **A la App**. ![Captura de pantalla que muestra el elemento de menú "A la App" en Okta](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. A la derecha de "Aprovisionamiento a la App", para permitir que se hagan cambios, haz clic en **Editar**.
1. Selecciona **Habilitar** para **Crear usuarios**. **Actualizar atributos de usuarios** y **Desactivar usuarios**. ![Captura de pantalla que muestra las opciones de aprovisionamiento en Okta](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. Para finalizar la configuración del aprovisionamiento, haz clic en **Guardar**.

## Asignar usuarios y grupos

Después de haber configurado el SSO de SAML y el aprovisionamiento, podrás aprovisionar usuarios nuevos en {% data variables.product.prodname_dotcom_the_website %} asignando a los usuarios a la aplicación de {% data variables.product.prodname_emu_idp_application %}.

{% data reusables.scim.emu-scim-rate-limit %}

También puedes administrar las membrecías organizacionales automáticamente si asignas grupos a la aplicación y los agregas a la pestaña de "Push Groups" en Okta. Cuando el grupo se aprovisione con éxito, este estará disponible para conectarse a los equipos en las organizaciones de la empresa. Para obtener más información sobre cómo administrar los equipos, consulta la sección "[Administrar las membrecías de los quipos con grupos de proveedor de identidad](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)".

Cuando asignas usuarios, puedes utilizar el atributo de "Roles" en la aplicación de {% data variables.product.prodname_emu_idp_application %} para configurar el rol de un usuario en tu empresa en {% data variables.product.product_name %}. Para obtener más información sobre los roles, consulta la sección "[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)".

![Captura de pantalla que muestra las opciones de roles para el usuario aprovisionado en Okta](/assets/images/help/enterprises/okta-emu-user-role.png)
