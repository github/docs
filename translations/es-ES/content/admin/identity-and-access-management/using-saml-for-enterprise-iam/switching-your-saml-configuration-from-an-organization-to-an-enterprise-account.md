---
title: Cambiar tu configuración de SAML de una cuenta organizacional a una empresarial
intro: Aprende sobre las consideraciones especiales y mejores prácticas para reemplazar una configuración de SAML a nivel organizacional con una configuración de SAML a nivel empresarial.
permissions: Enterprise owners can configure SAML single sign-on for an enterprise account.
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
  - Organizations
type: how_to
shortTitle: From organization to enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
---

## Acerca del inicio de sesión único de SAML para las cuentas empresariales

{% data reusables.saml.dotcom-saml-explanation %}{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.switching-from-org-to-enterprise %}

Cuando configuras el SSO de SAML a nivel de organización, cada organización debe configurarse con un inquilino de SSO único en tu IdP, lo cual significa que tus miembros se asociarán con un registro de identidad único de SAML para cada organización con la cual se hayan autenticado exitosamente. Si configuras el SSO de SAML para que se utilice en su lugar en tu empresa, cada miembro de ella tendrá una identidad de SAML que se utilizará para todas las organizaciones que pertenezcan a la cuenta empresarial.

Después de que configures el SSO de SAML para tu cuenta empresarial, la configuración nueva anulará cualquier configuración de SSO de SAML para las organizaciones que pertenezcan a esta cuenta.

No se notificará a los miembros de la empresa cuando un propietario habilite SAML para la cuenta empresarial. Si el SSO de SAML se requirió previamente a nivel organizacional, los miembros no deberían ver una diferencia mayor al navegar directamente a los recursos organizacinales. Se les seguirá pidiendo a los miembros autenticarse por SAML. Si los miembros navegan a los recursos organizacionales a través de su tablero de IdP, necesitarán hacer clic en una sección nueva para la app a nivel empresarial en vez de en la anterior para la de nivel organizacional. Entonces los miembros podrán elegir la organización a la cual quieren navegar.

Cualquier token de acceso personal (PAT), llave de SSH, {% data variables.product.prodname_oauth_apps %} y {% data variables.product.prodname_github_apps %} que se hayan autorizado previamente para la organización seguirán autorizadas para esta. Sin embargo, los miembros necesitarán autorizar cualquier PAT, llaves SSH, {% data variables.product.prodname_oauth_apps %} y {% data variables.product.prodname_github_apps %} que nunca se hayan autorizado para utilizarse con el SSO de SAML en la organización.

El aprovisionamiento de SCIM no es compatible actualmente cuando el SSO de SAML se configura para una cuenta empresarial. Si actualmente estás utilizando SCIM para una organización que pertenece a tu cuenta empresarial, perderás esta funcionalidad cuando cambies a una configuración a nivel empresarial.

No se te requiere eliminar ninguna configuración de SAML a nivel organizacional antes de configurar el SSO de SAML para tu cuenta empresarial, pero deberías considerar hacerlo. Si en algún momento se inhabilita SAML para la cuenta empresarial en el futuro, cualquier configuración de SAML a nivel organizacional tomará efecto. El eliminar las configuraciones a nivel organizacional puede prevenir problemas inesperados en el futuro.

## Cambiar tu configuración de SAML de una cuenta organizacional a una empresarial

1. Requerir el SSO de SAML para tu cuenta empresarial, asegurándote de que todos los miembros organizacionales se asignen o se les de acceso a la app del IdP que se utiliza para la cuenta empresarial. Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML para tu empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".
1. Opcionalmente, elimina cualquier configuración existente de SAML para las organizaciones que pertenecen a la cuenta empresarial. Para ayudarte a decidir si quieres eliminar o no las configuraciones, consulta la sección "[Acerca del inicio de sesión único de SAML para las cuentas empresariales](#about-saml-single-sign-on-for-enterprise-accounts)".
1. Si mantuviste activa cualquier configuración de SAML a nivel organizacional, para prevenir la confusión, considera ocultar la sección en las apps a nivel organizacional en tu IdP.
1. Notifica a los miembros de tu empresa sobre este cambio.
   -  Los miembros ya no podrán acceder a las organizaciones si hacen clic en la app de SAML de la organización en el tablero del IdP. Necesitarán utilizar la app nueva que se configuró para la cuenta empresarial.
   - Los miembros necesitarán autorizar cualquier PAT o llave SSH que no se hayan autorizado antes para utilizarlos con el SSO de SAML en su organización. Para obtener más información, consulta las secciones "[Autorizar que un token de acceso personal se utilice con el inicio de sesión único de SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" y "[Autorizar a una llave SSH para que se utilice con el inicio de sesión único de SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".
   - Los miembros podrían necesitar volver a autorizar las {% data variables.product.prodname_oauth_apps %} que se autorizaran anteriormente en la organización. Para obtener más información, consulta la sección "[Acerca de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)".
