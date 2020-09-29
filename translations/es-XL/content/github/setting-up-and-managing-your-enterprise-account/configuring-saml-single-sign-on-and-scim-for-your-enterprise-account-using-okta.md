---
title: Configurar el inicio de sesión único de SAML y SCIM para tu cuenta empresarial utilizando Okta
intro: 'Puedes utilizar el inicio de sesión único (SSO, por sus siglas en inglés) del Lenguaje de Marcado para Confirmaciones (SAML, por sus siglas en inglés) y la Adminsitración de Identidad a Través de Dominios (SCIM, por sus siglas en inglés) con Okta para adminsitrar automáticamente el acceso a tu cuenta empresarial en {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/configuring-single-sign-on-and-scim-for-your-enterprise-account-using-okta
versions:
  free-pro-team: '*'
---

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

### Acerca de SAML y SCIM con Okta

Puedes controlar el acceso a tu cuenta empresarial en {% data variables.product.product_name %} y en otras aplicaciones web desde una interface central si configuras dicha cuenta para que utilice el SSO de SAML y SCIM con Okta, un proveedor de identidad (IdP).

El SSO de SAML controla y protege el acceso a los recursos de la cuenta empresarial como las organizaciones, repositorios, informes de problemas y solicitudes de extracción. El SCIM agrega, administra y elimina automáticamente el acceso de los miembros a las organizaciones que pertenezcan a tu cuenta empresarial cuando haces cambios en Okta. Para obtener más información, consulta "[Requerir configuraciónes de seguridad en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account)".

Después de que habilites SCIM, las siguientes características de aprovisionamiento estarán disponibles para cualquier usuario al que asignes tu aplicación de {% data variables.product.prodname_ghe_cloud %} en Okta.

| Característica                    | Descripción                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subir Usuarios Nuevos             | Los usuarios nuevos que se crean en Okta obtendrán acceso a los recursos de la cuenta empresarial y, opcionalmente, se pueden invitar a cualquiera de las organizaciones que pertenezcan a esta cuenta                                                                                                         |
| Subir Desactivaciones de Usuarios | Desactivar un usuario en Okta revocará el acceso del mismo a los recursos de la cuenta empresarial y eliminará al usuario de todas las organizaciones que pertenezcan a esta cuenta                                                                                                                            |
| Subir Actualizaciones de Perfil   | Las actualizaciones que se hagan al perfil de usuario en Okta se subirán a los metadatos de la cuenta empresarial del usuario                                                                                                                                                                                  |
| Reactivar Usuarios                | Reactivar al usuario en Okta rehabilitará el acceso del mismo a la cuenta empresarial y, opcionalmente, enviará invitaciones por correo electrónico al usuario para volverse a unir a cualquiera de las organizaciones que pertenezcan a la cuenta empresarial de la cual era miembro este usuario previamente |

### Prerrequisitos

{% data reusables.saml.use-classic-ui %}

### Agregar la aplicación {% data variables.product.prodname_ghe_cloud %} en Okta

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
1. Da clic en "{% data variables.product.prodname_ghe_cloud %} - Cuentas Empresariales".
1. Da clic en **Agregar**.
1. Opcionalmente, a la derecha de la "Etiqueta de aplicación", teclea un nombre descriptivo para la aplicación. ![Campo de etiqueta de la aplicación](/assets/images/help/saml/okta-application-label.png)
1. A la derecha de "Empresas de {% data variables.product.prodname_dotcom %}", teclea el nombre de tu cuenta empresarial. Por ejemplo, si la URL de tu cuenta empresarial es `https://github.com/enterprises/octo-corp`, teclea `octo-corp`. ![Campo de Github Enterprises](/assets/images/help/saml/okta-github-enterprises.png)
1. Haz clic en **Done** (listo).

### Habilitar y probar el SSO de SAML

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
1. A la derecha de los Ajustes, da clic en **Editar**.
1. Debajo de "Atributos de SAML Configurados", a la derecha de "grupos"; utiliza el menú desplegable y selecciona **Coincidencias de regex**.
1. A la derecha del menú desplegable, teclea `.*.*`.
1. Haz clic en **Save (Guardar)**.
{% data reusables.saml.okta-view-setup-instructions %}
1. Habilita SAML para tu cuenta empresarial utilizando la información en las instrucciones de configuración. Para obtener más información, consulta la sección "[Requerir los parámetros de seguridad en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)".

### Crear grupos en Okta

1. En Okta, crea un grupo para que empate con la organización que pertenezca a tu cuenta empresarial. El nombre de cada grupo debe coincidir con el nombre de cuenta de la organización (no así, con el nombre mostrado de la misma). Por ejemplo, si la URL de la organización es `https://github.com/octo-org`, nombra `octo-org` al grupo.
1. Asigna la aplicación que creaste para tu cuenta empresarial a cada grupo. {% data variables.product.prodname_dotcom %} recibirá todos los datos de los `groups` para cada usuario.
1. Agrega usuarios a los grupos basándote en las organizaciones a las cuales quisieras que pertenezcan dichos usuarios.

### Configurar el aprovisionamiento de usuarios con SCIM en Okta

{% data reusables.scim.enterprise-account-scim %}

Para configurar el aprovisionamiento de usuarios con SCIM en Okta, debes autorizar una aplicación de OAuth para que cree un token que Okta pueda utilizar para autenticarse en {% data variables.product.product_name %} a tu nombre. Okta creó la aplicación okta-oauth en asociación con {% data variables.product.prodname_dotcom %}.

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}
1. Da clic en **Autenticarse con GitHub Enterprise Cloud - Cuentas Empresariales**. ![Botón para autenticarse con {% data variables.product.prodname_dotcom %}](/assets/images/help/business-accounts/authenticate-with-github-button.png)
1. A la derecha del nombre de tu cuenta empresarial, da clic en **Otorgar**.
1. Da clic en **Autorizar a okta-oauth**.
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}
1. Debajo del nombre de la aplicación, da clic en **Grupos de Subida**. ![Pestaña de Grupos de Subida](/assets/images/help/business-accounts/okta-push-groups-tab.png)
1. Utiliza el menú desplegable de **Grupos de Subida** y selecciona **Encontrar grupos por nombre**. ![Menú desplegable de Grupos de Subida](/assets/images/help/business-accounts/okta-push-groups-drop-down.png)
1. Agrega un grupo de subida para cada organización en tu cuenta empresarial en la cual quieras habilitar el aprovisionamiento de usuarios.
   - Debajo de "GRUPOS DE SUBIDA POR NOMBRE", busca el grupo que corresponda a una organización que pertenezca a tu cuenta empresarial, luego da clic en el grupo dentro de los resultados de la búsqueda.
   - A la derecha del nombre de grupo, en el menú desplegable de "Empatar resultados & acción de subida", verifica que se encuentre seleccionada la opción **Crear Grupo**. ![Menú desplegable con resultados coincidentes para la opción Crear Grupo seleccionada](/assets/images/help/saml/create-group-okta.png)
   - Haz clic en **Save (Guardar)**.
   - Repite esto para cada organización.
1. Debajo del nombre de tu aplicación, da clic en **Tareas**. ![Pestaña de tareas](/assets/images/help/business-accounts/okta-assignments-tab.png)
1. Si ves la opción **Aprovisionar usuarios**, los usuarios que fuesen miembros de un grupo de Okta antes de que agregaras un grupo de subida para este grupo no se han aprovisionado. Para enviar datos de SCIM de estos usuarios a {% data variables.product.product_name %}, da clic en **Aprovisionar usuarios**.

### Habilitar SAML utilizando el aprovisionamiento

Después de que habilitas el aprovisionamiento y desaprovisionamiento de SCIM, puedes habilitar opcionalmente el aprovisionamiento y desaprovisionamiento de usuarios de SAML.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Debajo de "Aprovisionamiento de Usuarios de SAML", selecciona **Habilitar el aprovisionamiento de usuarios de SAML**. ![Casilla para habilitar el aprovisionamiento de usuarios con SAML](/assets/images/help/business-accounts/user-provisioning.png)
1. Haz clic en **Save (Guardar)**.
1. Opcionalmente, habilita el desaprovisionamiento de usuarios de SAML.
   - Selecciona **Habilitar el resaprovisionamiento de usuarios de SAML**, y luego da clic en **Guardar**. ![Casilla para habilitar el desaprovisionamiento de usuarios con SAML](/assets/images/help/business-accounts/saml-deprovisioning.png)
   - Lee la advertencia y da clic en **Habilitar el desaprovisionamiento de SAML**. ![Botón para habilitar el desaprovisionamiento de usuarios de SAML](/assets/images/help/business-accounts/saml-deprovisioning-confirm.png)
