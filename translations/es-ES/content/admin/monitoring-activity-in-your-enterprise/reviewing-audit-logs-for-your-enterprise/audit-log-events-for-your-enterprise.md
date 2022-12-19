---
title: Eventos de registro de auditoría de la empresa
intro: Aprende sobre los eventos de registro de auditoría registrados para tu empresa.
shortTitle: Audit log events
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can interact with the audit log.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/articles/audited-actions
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
  - /admin/user-management/audited-actions
  - /admin/user-management/monitoring-activity-in-your-enterprise/audited-actions
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: 5a936791aff8706cd04773bb0f7428cd11f29329
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183952'
---
{% ifversion ghec%}
## Acerca de los eventos de registro de auditoría de la empresa

El ámbito de los eventos que aparecen en el registro de auditoría de la empresa depende de si la empresa usa {% data variables.product.prodname_emus %}. Para más información sobre {% data variables.product.prodname_emus %}, consulta "[Acerca de {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".

- Si tu empresa no usa {% data variables.product.prodname_emus %}, el registro de auditoría solo incluye eventos relacionados con la cuenta de empresa y las organizaciones de la cuenta de empresa, que se enumeran en este artículo.
- Si la empresa usa {% data variables.product.prodname_emus %}, el registro de auditoría también incluye eventos de usuario para {% data variables.enterprise.prodname_managed_users %}, como cada vez que el usuario inicia sesión en {% data variables.product.product_name %} y las acciones que toma dentro de su cuenta de usuario. Para ver una lista de estos eventos de cuenta de usuario, consulta "[Revisión del registro de seguridad](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log#security-log-actions)".
{% endif %}

{%- ifversion fpt or ghec %}
## Acciones de la categoría `account`

| Acción | Descripción
|--------|-------------
| `account.billing_plan_change` | Ha cambiado el ciclo de facturación de una organización. Para más información, vea "[Cambio de la duración del ciclo de facturación](/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle)".
| `account.plan_change` | Ha cambiado la suscripción de una organización. Para más información, vea "[Acerca de la facturación de las cuentas de GitHub](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts)".
| `account.pending_plan_change` | El propietario de una organización o el administrador de facturación ha cancelado una suscripción de pago o la ha cambiado a una categoría inferior. Para más información, vea "[¿Cómo afecta el cambio a una categoría inferior o superior al proceso de facturación?](/billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process)".
| `account.pending_subscription_change` | Se ha iniciado o ha expirado una evaluación gratuita de {% data variables.product.prodname_marketplace %}. Para más información, vea "[Acerca de la facturación de GitHub Marketplace](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace)".
{%- endif %}

{%- ifversion fpt or ghec %}
## Acciones de la categoría `advisory_credit`

| Acción | Descripción
|--------|-------------
| `advisory_credit.accept` | Alguien ha aceptado crédito por un aviso de seguridad. Para más información, vea "[Edición de un aviso de seguridad](/github/managing-security-vulnerabilities/editing-a-security-advisory)".
| `advisory_credit.create` | El administrador de un aviso de seguridad ha agregado a alguien a la sección de crédito.
| `advisory_credit.decline` | Alguien ha rechazado crédito por un aviso de seguridad.
| `advisory_credit.destroy` | El administrador de un aviso de seguridad ha quitado a alguien de la sección de crédito.
{%- endif %}

## Acciones de la categoría `artifact`

| Acción | Descripción
|--------|-------------
| `artifact.destroy`    | Se ha eliminado manualmente un artefacto de ejecución de flujos de trabajo.

{%- ifversion audit-log-streaming %}
## Acciones de la categoría `audit_log_streaming`

| Acción | Descripción
|--------|-------------
| `audit_log_streaming.check` | Se ha realizado una comprobación manual del punto de conexión configurado para el streaming de registros de auditoría.
| `audit_log_streaming.create` | Se ha agregado un punto de conexión para el streaming de registros de auditoría.
| `audit_log_streaming.update` | Se ha actualizado la configuración de un punto de conexión para el streaming de registros de auditoría, p. ej., el streaming se ha pausado, habilitado o deshabilitado.
| `audit_log_streaming.destroy` | Se ha eliminado un punto de conexión de streaming de registros de auditoría.
{%- endif %}

{%- ifversion fpt or ghec %}
## Acciones de la categoría `billing`

| Acción | Descripción
|--------|-------------
| `billing.change_billing_type` | Una organización ha cambiado su método de pago de {% data variables.product.prodname_dotcom %}. Para más información, vea "[Adición o edición de un método de pago](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)".
| `billing.change_email` | Ha cambiado la dirección de correo electrónico de facturación de una organización. Para más información, vea "[Configuración del correo electrónico de facturación](/billing/managing-your-github-billing-settings/setting-your-billing-email)".
{%- endif %}

## Acciones de la categoría `business`

| Acción | Descripción
|--------|-------------
| `business.add_admin` | Se ha agregado un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} a una empresa.
{%- ifversion ghec %} | `business.add_billing_manager` | Se ha agregado un administrador de facturación a una empresa.
{%- endif %} | `business.add_organization` | Se ha agregado una organización a una empresa.
{%- ifversion ghec %} | `business.add_support_entitlee` | Se ha agregado un derecho de soporte técnico a un miembro de una empresa. Para más información, vea "[Administración de derechos de soporte técnico para su empresa](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".
{%- endif %} {%- ifversion ghes or ghae %} | `business.advanced_security_policy_update` | Un propietario de empresa{% ifversion ghes %} o un administrador del sitio{% endif %} ha creado, actualizado o quitado una directiva para {% data variables.product.prodname_GH_advanced_security %}. Para más información, vea "[Aplicación de directivas para {% data variables.product.prodname_advanced_security %} en la empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".
{%- endif %} {%- ifversion ghec %} | `business.cancel_admin_invitation` | Se ha cancelado una invitación para que alguien sea propietario{% ifversion ghes %} o administrador de sitio{% endif %} de una empresa.
| `business.cancel_billing_manager_invitation` | Se ha cancelado una invitación para que alguien sea administrador de facturación de una empresa.
{%- endif %} {%- ifversion ghes %} | `business.clear_actions_settings` | Un propietario de empresa o un administrador de sitio ha borrado la configuración de directiva de {% data variables.product.prodname_actions %} de una empresa. Para más información, vea "[Aplicación de directivas de Acciones de GitHub en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)".
{%- endif %} | `business.clear_default_repository_permission` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha borrado la configuración de directiva de los permisos del repositorio base de una empresa. Para más información, vea "[Aplicación de una directiva de permisos del repositorio base](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)".
| `business.clear_members_can_create_repos`      | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha borrado una restricción de creación de repositorios en las organizaciones de la empresa. Para más información, vea "[Aplicación de directivas de administración de repositorios en la empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)".
| `business.create`                              | Se ha creado una empresa.
{%- ifversion ghec %} | `business.disable_oidc` | Se ha deshabilitado el inicio de sesión único de OIDC para una empresa. Para obtener más información, consulta "[Configuración de OIDC para {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)."
| `business.disable_saml` | Se ha deshabilitado el inicio de sesión único de SAML para una empresa.
{%- endif %} | `business.disable_two_factor_requirement` | Se ha deshabilitado el requerimiento de que los miembros tengan habilitada la autenticación en dos fases para acceder a una empresa.
{%- ifversion ghec %} | `business.enable_oidc` | Se ha habilitado el inicio de sesión único de OIDC para una empresa. Para obtener más información, consulta "[Configuración de OIDC para {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)."
| `business.enable_saml` | Se ha habilitado el inicio de sesión único de SAML para una empresa.
{%- endif %} | `business.enable_two_factor_requirement` | Se ha habilitado el requerimiento de que los miembros tengan habilitada la autenticación en dos fases para acceder a una empresa.
{%- ifversion ghec %} | `business.enterprise_server_license_download` | Se ha descargado una licencia de {% data variables.product.prodname_ghe_server %}.
| `business.import_license_usage` | La información de uso de licencias se ha importado desde una instancia de {% data variables.product.prodname_ghe_server %} en una cuenta de empresa en {% data variables.product.prodname_dotcom_the_website %}.
| `business.invite_admin` | Se ha enviado una invitación para que alguien sea propietario de empresa{% ifversion ghes %} o administrador de sitio{% endif %} de una empresa.
| `business.invite_billing_manager` | Se ha enviado una invitación para que alguien sea administrador de facturación de una empresa.
{%- endif %} | `business.members_can_update_protected_branches.clear` | Un propietario de empresa{% ifversion ghes %} o administrador de sitio{% endif %} ha anulado una directiva que determina si los miembros de una empresa pueden actualizar las ramas protegidas en los repositorios de organizaciones individuales. Los administradores de cada organización pueden elegir si se permite actualizar la configuración de las ramas protegidas.
| `business.members_can_update_protected_branches.disable` | Se ha deshabilitado la capacidad para que los miembros de la empresa actualicen las reglas de protección de ramas. Solo los propietarios de la empresa pueden actualizar las ramas protegidas.
| `business.members_can_update_protected_branches.enable` | Se ha habilitado la capacidad para que los miembros de la empresa actualicen las reglas de protección de ramas. Los propietarios y los miembros de la empresa pueden actualizar las ramas protegidas.
| `business.remove_admin` | Se ha quitado a un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} de una empresa.
{%- ifversion ghes %} | `business.referrer_override_enable` | Un propietario de empresa o un administrador del sitio ha habilitado la invalidación de la directiva de referencia. Para más información, vea "[Configuración de la directiva de referencia de la empresa](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)".
| `business.referrer_override_disable` | Un propietario de empresa o un administrador de sitio ha deshabilitado la invalidación de la directiva de referencia. Para más información, vea "[Configuración de la directiva de referencia de la empresa](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)".
{%- endif %} {%- ifversion ghec %} | `business.remove_billing_manager` | Se ha quitado a un administrador de facturación de una empresa.
| `business.remove_member` | Se ha quitado a un miembro de una empresa.
{%- endif %} | `business.remove_organization` | Se ha quitado una organización de una empresa.
{%- ifversion ghec %} | `business.remove_support_entitlee` | Se ha quitado un derecho de soporte técnico a un miembro de una empresa. Para más información, vea "[Administración de derechos de soporte técnico para su empresa](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".
{%- endif %} | `business.rename_slug` | Se ha cambiado el nombre del slug de la dirección URL de la empresa.
{%- ifversion ghec %} | `business.revoke_external_identity` | Se ha revocado la identidad externa de un miembro de una empresa.
| `business.revoke_sso_session` | Se ha revocado la sesión de inicio de sesión único de SAML para un miembro de una empresa.
{%- endif %} {%- ifversion ghec %} | `business.set_actions_fork_pr_approvals_policy` | La configuración para requerir aprobaciones para la ejecución de flujos de trabajo desde bifurcaciones públicas se ha cambiado para una empresa. Para más información, vea "[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)".
{%- endif %} | `business.set_actions_retention_limit` | Se ha cambiado el periodo de retención de los artefactos y los registros de {% data variables.product.prodname_actions %} de una empresa. Para más información, vea "[Aplicación de directivas para {% data variables.product.prodname_actions %} en una empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)".
{%- ifversion ghec or ghes %} | `business.set_fork_pr_workflows_policy` | Se ha cambiado la directiva para los flujos de trabajo en bifurcaciones de repositorios privados. Para más información, vea "{% ifversion ghec %}[Aplicación de directivas para {% data variables.product.prodname_actions %} en una empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Habilitación de flujos de trabajo para bifurcaciones de repositorios privados](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}".
{%- endif %} {%- ifversion audit-log-sso-response-events %} |`business.sso_response` | Se ha generado una respuesta de inicio de sesión único (SSO) de SAML cuando un miembro ha intentado autenticarse con tu organización. Este evento solo está disponible a través del streaming del registro de auditoría y la API REST.
{%- endif %} {%- ifversion ghes %} | `business.update_actions_settings` | Un propietario de empresa o un administrador de sitio ha actualizado la configuración de directiva de {% data variables.product.prodname_actions %} de una empresa. Para más información, vea "[Aplicación de directivas de Acciones de GitHub en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)".
{%- endif %} | `business.update_default_repository_permission` | La configuración de permisos del repositorio base se ha actualizado para todas las organizaciones de una empresa. Para más información, vea "[Aplicación de una directiva de permisos del repositorio base](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)".
| `business.update_member_repository_creation_permission` | Se ha actualizado la configuración para la creación de repositorios de una empresa. Para más información, vea "[Aplicación de una directiva para crear repositorios](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)".
| `business.update_member_repository_invitation_permission` | Se ha actualizado la configuración de directiva para los miembros de la empresa que invitan a colaboradores externos a los repositorios. Para obtener más información, consulte "[Aplicación de una directiva para invitar a colaboradores externos a los repositorios](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)".
{%- ifversion ghec %} | `business.update_saml_provider_settings` | Se ha actualizado la configuración del proveedor de inicio de sesión único de SAML para una empresa.
{%- endif %}

{% ifversion code-security-audit-log-events %}

## Acciones de la categoría `business_advanced_security`

| Acción | Descripción
|--------|-------------
| `business_advanced_security.disabled` | {% data variables.product.prodname_GH_advanced_security %} está deshabilitado en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_advanced_security.enabled` | {% data variables.product.prodname_GH_advanced_security %} está habilitado en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_advanced_security.disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} está deshabilitado para todos los repositorios nuevos en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_advanced_security.enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} está habilitado para todos los repositorios nuevos en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".

{% endif %}

{% ifversion code-security-audit-log-events %}

## Acciones de la categoría `business_secret_scanning`

| Acción | Descripción
|--------|-------------
| `business_secret_scanning.disable` | El {% data variables.product.prodname_secret_scanning_caps %} está deshabilitado en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning.enable` | El {% data variables.product.prodname_secret_scanning_caps %} está habilitado en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning.disabled_for_new_repos` | El {% data variables.product.prodname_secret_scanning_caps %} está deshabilitado para todos los repositorios nuevos en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning.enabled_for_new_repos` | El {% data variables.product.prodname_secret_scanning_caps %} está habilitado para todos los repositorios nuevos en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".

{% endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## Acciones de la categoría `business_secret_scanning_custom_pattern`

Acción                        | Descripción
----------------------------- | -----------------------------------------------
| `business_secret_scanning_custom_pattern.create` | Se ha publicado un patrón personalizado de nivel empresarial para el examen de secretos. Para más información, vea "[Definición de patrones personalizados para el examen de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-enterprise-account)".
| `business_secret_scanning_custom_pattern.delete` | Se ha quitado un patrón personalizado de nivel empresarial del examen de secretos.
| `business_secret_scanning_custom_pattern.update` | Los cambios en un patrón personalizado de nivel empresarial se han guardado para el examen de secretos.
{%- endif %}

{% ifversion code-security-audit-log-events %}

## Acciones de la categoría `business_secret_scanning_push_protection`

| Acción | Descripción
|--------|-------------
| `business_secret_scanning_push_protection.disable` | La protección de inserción en el {% data variables.product.prodname_secret_scanning %} está deshabilitado en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning_push_protection.enable` | La protección de inserción en el {% data variables.product.prodname_secret_scanning %} está habilitado en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning_push_protection.disabled_for_new_repos` | La protección de inserción en el {% data variables.product.prodname_secret_scanning %} está deshabilitado para todos los repositorios nuevos en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning_push_protection.enabled_for_new_repos` | La protección de inserción en el {% data variables.product.prodname_secret_scanning %} está habilitado para todos los repositorios nuevos en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".

{% endif %}

{% ifversion code-security-audit-log-events %}

## Acciones de la categoría `business_secret_scanning_push_protection_custom_message`

| Acción | Descripción
|--------|-------------
| `business_secret_scanning_push_protection_custom_message.disable` | El mensaje personalizado que se activa con los intentos de inserción en un repositorio con protección de inserción está deshabilitado en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning_push_protection_custom_message.enable` | El mensaje personalizado que se activa con los intentos de inserción en un repositorio con protección de inserción está habilitado en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning_push_protection_custom_message.update` | El mensaje personalizado que se activa con los intentos de inserción en un repositorio con protección de inserción se ha actualizado en tu empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".

{% endif %}

## Acciones de la categoría `checks`

| Acción | Descripción
|--------|-------------
| `checks.auto_trigger_disabled` | La creación automática de conjuntos de comprobaciones se ha deshabilitado en un repositorio de la organización o de la empresa. Para más información, vea "[Actualización de las preferencias del repositorio para conjuntos de comprobaciones](/rest/reference/checks#update-repository-preferences-for-check-suites)".
| `checks.auto_trigger_enabled` | La creación automática de conjuntos de comprobaciones se ha habilitado en un repositorio de la organización o de la empresa. Para más información, vea "[Actualización de las preferencias del repositorio para conjuntos de comprobaciones](/rest/reference/checks#update-repository-preferences-for-check-suites)".
{%- ifversion fpt or ghec %} | `checks.delete_logs` | Se han eliminado los registros de un conjunto de comprobación.
{%- endif %}

{%- ifversion fpt or ghec %}
## Acciones de la categoría `codespaces`

| Acción | Descripción
|--------|-------------
| `codespaces.connect` | Se ha iniciado un codespace.
| `codespaces.create` | Un usuario [ha creado un codespace](/github/developing-online-with-codespaces/creating-a-codespace).
| `codespaces.destroy` | Un usuario [ha eliminado un codespace](/github/developing-online-with-codespaces/deleting-a-codespace).
| `codespaces.allow_permissions` | Se ha iniciado un codespace que usa permisos personalizados de su archivo `devcontainer.json`.
| `codespaces.attempted_to_create_from_prebuild` | Se ha intentado crear un codespace a partir de una precompilación.
| `codespaces.create_an_org_secret` | Un usuario ha creado un [secreto a nivel de organización para {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `codespaces.update_an_org_secret` | Un usuario ha actualizado un [secreto a nivel de organización para {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `codespaces.remove_an_org_secret` | Un usuario ha quitado un [secreto a nivel de organización para {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `codespaces.manage_access_and_security` | Un usuario ha actualizado [los repositorios a los que puede acceder un codespace](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
{%- endif %}

{%- ifversion fpt or ghec %}
## Acciones de la categoría `commit_comment`

| Acción | Descripción
|--------|-------------
| `commit_comment.destroy` | Se ha eliminado un comentario de confirmación.
| `commit_comment.update` | Se ha actualizado un comentario de confirmación.
{%- endif %}

{%- ifversion ghes %}
## Acciones de la categoría `config_entry`

| Acción | Descripción
|--------|-------------
| `config_entry.create` | Se ha creado un valor de configuración. Estos eventos solo son visibles en el registro de auditoría del administrador del sitio. El tipo de eventos registrados se relaciona con lo siguiente:</br>- Configuración y directivas de empresa</br>- Configuración y permisos de organización y repositorio</br>- Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, el proyecto y la configuración de seguridad del código.
| `config_entry.destroy` | Se ha eliminado un valor de configuración. Estos eventos solo son visibles en el registro de auditoría del administrador del sitio. El tipo de eventos registrados se relaciona con lo siguiente:</br>- Configuración y directivas de empresa</br>- Configuración y permisos de organización y repositorio</br>- Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, el proyecto y la configuración de seguridad del código.
| `config_entry.update` | Se ha editado un valor de configuración. Estos eventos solo son visibles en el registro de auditoría del administrador del sitio. El tipo de eventos registrados se relaciona con lo siguiente:</br>- Configuración y directivas de empresa</br>- Configuración y permisos de organización y repositorio</br>- Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, el proyecto y la configuración de seguridad del código.
{%- endif %}

## Acciones de la categoría `dependabot_alerts`

| Acción | Descripción
|--------|-------------
| `dependabot_alerts.disable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha deshabilitado las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios {% ifversion fpt or ghec %}privados {% endif %}existentes. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `dependabot_alerts.enable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha habilitado las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios {% ifversion fpt or ghec %}privados {% endif %}existentes.

## Acciones de la categoría `dependabot_alerts_new_repos`

| Acción | Descripción
|--------|-------------
| `dependabot_alerts_new_repos.disable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha deshabilitado las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios {% ifversion fpt or ghec %}privados {% endif %}nuevos. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `dependabot_alerts_new_repos.enable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha habilitado las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios {% ifversion fpt or ghec %}privados {% endif %}nuevos.

## Acciones de la categoría `dependabot_repository_access`

| Acción | Descripción
|--------|-------------
| `dependabot_repository_access.repositories_updated` | Se han actualizado los repositorios a los que puede acceder {% data variables.product.prodname_dependabot %}.

{%- ifversion fpt or ghec or ghes %}
## Acciones de la categoría `dependabot_security_updates`

| Acción | Descripción
|--------|-------------
| `dependabot_security_updates.disable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha deshabilitado las {% data variables.product.prodname_dependabot_security_updates %} para todos los repositorios existentes. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `dependabot_security_updates.enable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha habilitado las {% data variables.product.prodname_dependabot_security_updates %} para todos los repositorios existentes.

## Acciones de la categoría `dependabot_security_updates_new_repos`

| Acción | Descripción
|--------|-------------
| `dependabot_security_updates_new_repos.disable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha deshabilitado las {% data variables.product.prodname_dependabot_security_updates %} para todos los repositorios nuevos. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `dependabot_security_updates_new_repos.enable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha habilitado las {% data variables.product.prodname_dependabot_security_updates %} para todos los repositorios nuevos.
{%- endif %}

## Acciones de la categoría `dependency_graph`

| Acción | Descripción
|--------|-------------
| `dependency_graph.disable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha deshabilitado el gráfico de dependencias para todos los repositorios existentes. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `dependency_graph.enable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha habilitado el gráfico de dependencias para todos los repositorios existentes.

## Acciones de la categoría `dependency_graph_new_repos`

| Acción | Descripción
|--------|-------------
| `dependency_graph_new_repos.disable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha deshabilitado el gráfico de dependencias para todos los repositorios nuevos. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `dependency_graph_new_repos.enable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha habilitado el gráfico de dependencias para todos los repositorios nuevos.

{%- ifversion fpt or ghec %}
## Acciones de la categoría `discussion`

| Acción | Descripción
|--------|-------------
| `discussion.destroy` | Se ha eliminado un debate de equipo.

## Acciones de la categoría `discussion_comment`

| Acción | Descripción
|--------|-------------
| `discussion_comment.destroy` | [Se ha eliminado un comentario en una publicación de un debate de equipo](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_comment.update` | [Se ha editado un comentario en una publicación de un debate de equipo](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).

## Acciones de la categoría `discussion_post`

| Acción | Descripción
|--------|-------------
| `discussion_post.destroy` | [Se ha eliminado una publicación de un debate de equipo](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).
| `discussion_post.update` | [Se ha editado una publicación de un debate de equipo](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).

## Acciones de la categoría `discussion_post_reply`

| Acción | Descripción
|--------|-------------
| `discussion_post_reply.destroy` | [Se ha eliminado una respuesta a una publicación de un debate de equipo](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_post_reply.update` | [Se ha editado una respuesta a una publicación de un debate de equipo](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).
{%- endif %}

{%- ifversion ghec or ghes %}
## Acciones de la categoría `dotcom_connection`

| Acción | Descripción
|--------|-------------
| `dotcom_connection.create` | Se ha creado una conexión de {% data variables.product.prodname_github_connect %} a {% data variables.product.prodname_dotcom_the_website %}.
| `dotcom_connection.destroy` | Se ha eliminado una conexión de {% data variables.product.prodname_github_connect %} a {% data variables.product.prodname_dotcom_the_website %}.
| `dotcom_connection.token_updated` | Se ha actualizado el token de conexión de {% data variables.product.prodname_github_connect %} para {% data variables.product.prodname_dotcom_the_website %}.
| `dotcom_connection.upload_license_usage` | Se ha actualizado manualmente el uso de licencias de usuario de {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_ghe_cloud %}.
| `dotcom_connection.upload_usage_metrics` | Las métricas de uso de {% data variables.product.prodname_ghe_server %} se han cargado en {% data variables.product.prodname_dotcom_the_website %}.
{%- endif %}

## Acciones de la categoría `enterprise`

| Acción | Descripción
|--------|-------------
| `enterprise.config.disable_anonymous_git_access`   | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha deshabilitado el acceso de lectura anónimo de Git para los repositorios de la empresa. Para más información, vea "[Aplicación de directivas de administración de repositorios en la empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".
| `enterprise.config.enable_anonymous_git_access`   | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha habilitado el acceso de lectura anónimo de Git para los repositorios de la empresa. Para más información, vea "[Aplicación de directivas de administración de repositorios en la empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".
| `enterprise.config.lock_anonymous_git_access`   | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha bloqueado el acceso de lectura anónimo de Git para impedir que los administradores de los repositorios cambien la configuración existente de dicho acceso para los repositorios de la empresa. Para más información, vea "[Aplicación de directivas de administración de repositorios en la empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".
| `enterprise.config.unlock_anonymous_git_access` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha desbloqueado el acceso de lectura anónimo de Git para permitir que los administradores de los repositorios cambien la configuración existente de dicho acceso para los repositorios de la empresa. Para más información, vea "[Aplicación de directivas de administración de repositorios en la empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".
| `enterprise.register_self_hosted_runner` | Se ha registrado un nuevo ejecutor autohospedado de {% data variables.product.prodname_actions %}. Para más información, vea "[Adición de un ejecutor autohospedado a un repositorio](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)".
| `enterprise.remove_self_hosted_runner` | Se ha eliminado un ejecutor autohospedado de {% data variables.product.prodname_actions %}. Para más información, vea "[Eliminación de un ejecutor de un repositorio](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)".
| `enterprise.runner_group_created` | Se ha creado un grupo de ejecutores autohospedados de {% data variables.product.prodname_actions %}. Para más información, vea "[Creación de un grupo de ejecutores autohospedados para una organización](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)".
| `enterprise.runner_group_removed` | Se ha eliminado un grupo de ejecutores autohospedados de {% data variables.product.prodname_actions %}. Para más información, vea "[Eliminación de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
| `enterprise.runner_group_renamed` | Se ha cambiado el nombre de un grupo de ejecutores autohospedados de {% data variables.product.prodname_actions %}. Para más información, vea "[Cambio de la directiva de acceso de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `enterprise.runner_group_updated` | Se ha cambiado la configuración de un grupo de ejecutores autohospedados de {% data variables.product.prodname_actions %}. Para más información, vea "[Cambio de la directiva de acceso de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `enterprise.runner_group_runner_removed` |  La API REST se ha usado para quitar un ejecutor autohospedado de {% data variables.product.prodname_actions %} de un grupo. Para más información, vea "[Eliminación de un ejecutor autohospedado de un grupo en una organización](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)".
| `enterprise.runner_group_runners_added` | Se ha agregado un ejecutor autohospedado de {% data variables.product.prodname_actions %} a un grupo. Para más información, vea "[Adición de un ejecutor autohospedado a un grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".
| `enterprise.runner_group_runners_updated`|  Se ha actualizado la lista de miembros del grupo de ejecutores de {% data variables.product.prodname_actions %}. Para más información, vea "[Establecimiento de los ejecutores autohospedados en un grupo para una organización](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
{%- ifversion ghec %} | `enterprise.runner_group_visiblity_updated` | Se ha actualizado la visibilidad de un grupo de ejecutores autohospedado de {% data variables.product.prodname_actions %} por medio de la API REST. Para más información, vea "[Actualización de un grupo de ejecutores autohospedados para una organización](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)".
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `enterprise.self_hosted_runner_online` | Se ha iniciado la aplicación del ejecutor de {% data variables.product.prodname_actions %}. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `enterprise.self_hosted_runner_offline` | Se ha detenido la aplicación del ejecutor de {% data variables.product.prodname_actions %}. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
{%- endif %} {%- ifversion ghec or ghes %} | `enterprise.self_hosted_runner_updated` | Se ha actualizado la aplicación del ejecutor de {% data variables.product.prodname_actions %}. Se puede ver utilizando la API de REST y la IU; no se puede ver en la exportación de JSON/CSV. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners).
{%- endif %}

{%- ifversion ghec %}
## Acciones de la categoría `enterprise_domain`

| Acción | Descripción
|--------|-------------
| `enterprise_domain.approve` | Se ha aprobado un dominio de empresa para una empresa. Para más información, vea "[Aprobación de un dominio para la cuenta empresarial](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#approving-a-domain-for-your-enterprise-account)".
| `enterprise_domain.create` | Se ha agregado un dominio de empresa a una empresa. Para más información, vea "[Comprobación de un dominio para la cuenta empresarial](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)".
| `enterprise_domain.destroy` | Se ha quitado un dominio de empresa de una empresa. Para más información, vea "[Eliminación de un dominio aprobado o comprobado](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#removing-an-approved-or-verified-domain)".
| `enterprise_domain.verify` | Se ha comprobado un dominio de empresa para una empresa. Para más información, vea "[Comprobación de un dominio para la cuenta empresarial](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)".

## Acciones de la categoría `enterprise_installation`

| Acción | Descripción
|--------|-------------
| `enterprise_installation.create` | Se ha creado la {% data variables.product.prodname_github_app %} asociada a una conexión empresarial de {% data variables.product.prodname_github_connect %}.
| `enterprise_installation.destroy` | Se ha eliminado la {% data variables.product.prodname_github_app %} asociada a una conexión empresarial de {% data variables.product.prodname_github_connect %}.
| `enterprise_installation.token_updated` | Se ha actualizado el token de la {% data variables.product.prodname_github_app %} asociada a una conexión empresarial de {% data variables.product.prodname_github_connect %}.
{%- endif %}

{%- ifversion fpt or ghec %}
## Acciones de la categoría `environment`

| Acción | Descripción
|--------|-------------
| `environment.add_protection_rule` | Se ha creado una regla de protección del entorno de {% data variables.product.prodname_actions %} mediante la API. Para más información, vea "[Reglas de protección del entorno](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)".
| `environment.create_actions_secret` | Se ha creado un secreto para un entorno de {% data variables.product.prodname_actions %} mediante la API. Para más información, vea "[Secretos de entorno](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".
| `environment.delete` | Se ha eliminado un entorno mediante la API. Para más información, vea "[Eliminación de un entorno](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deleting-an-environment)".
| `environment.remove_actions_secret` | Se ha eliminado un secreto para un entorno de {% data variables.product.prodname_actions %} mediante la API. Para más información, vea "[Secretos de entorno](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".
| `environment.remove_protection_rule` | Se ha eliminado una regla de protección del entorno de {% data variables.product.prodname_actions %} mediante la API. Para más información, vea "[Reglas de protección del entorno](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)".
| `environment.update_actions_secret` | Se ha actualizado un secreto para un entorno de {% data variables.product.prodname_actions %} mediante la API. Para más información, vea "[Secretos de entorno](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)".
| `environment.update_protection_rule` | Se ha actualizado una regla de protección del entorno de {% data variables.product.prodname_actions %} mediante la API. Para más información, vea "[Reglas de protección del entorno](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)".
{%- endif %}

{%- ifversion ghae %}
## Acciones de la categoría `external_group`

| Acción | Descripción
|--------|-------------
| `external_group.delete` | Se ha eliminado un grupo de Okta. Para más información, vea "[Asignación de grupos de Okta a equipos](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_group.link` | Se ha asignado un grupo de Okta a un equipo de {% data variables.product.prodname_ghe_managed %}. Para más información, vea "[Asignación de grupos de Okta a equipos](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_group.provision` | Se ha asignado un grupo de Okta a un equipo en {% data variables.product.prodname_ghe_managed %}. Para más información, vea "[Asignación de grupos de Okta a equipos](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_group.unlink` | Se ha desasignado un grupo de Okta de un equipo de {% data variables.product.prodname_ghe_managed %}. Para más información, vea "[Asignación de grupos de Okta a equipos](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_group.update` | Se ha actualizado la configuración de un grupo de Okta. Para más información, vea "[Asignación de grupos de Okta a equipos](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

## Acciones de la categoría `external_identity`
| Acción | Descripción
|--------|-------------
| `external_identity.deprovision` | Se ha quitado a un usuario de un grupo de Okta y posteriormente se ha desaprovisionado de {% data variables.product.prodname_ghe_managed %}. Para más información, vea "[Asignación de grupos de Okta a equipos](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_identity.provision` | Se ha agregado un usuario a un grupo de Okta y posteriormente se ha aprovisionado en el equipo asignado de {% data variables.product.prodname_ghe_managed %}. Para más información, vea "[Asignación de grupos de Okta a equipos](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
| `external_identity.update` | Se ha actualizado la configuración de un usuario de Okta. Para más información, vea "[Asignación de grupos de Okta a equipos](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".
{%- endif %}

## Acciones de la categoría `gist`

| Acción | Descripción
|--------|-------------
| `gist.create` | Se crea un gist.
| `gist.destroy` | Se elimina un gist.
| `gist.visibility_change` | Se cambia la visibilidad de un gist.

{% ifversion git-events-audit-log %}
## Acciones de la categoría `git`

{% ifversion enable-git-events %} Para ver `git` acciones de categoría, tienes que habilitar los eventos de Git en el registro de auditoría. Para más información, consulta "[Configuración del registro de auditoría de la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise#managing-git-events-in-the-audit-log)".
{% endif %}

{% data reusables.audit_log.git-events-not-in-search-results %}

| Acción | Descripción
|--------|-------------
| `git.clone` | Se ha clonado un repositorio.
| `git.fetch` | Se han recuperado los cambios de un repositorio.
| `git.push`  | Se han insertado cambios en un repositorio.
{% endif %}

## Acciones de la categoría `hook`

| Acción | Descripción
|--------|-------------
{%- ifversion ghes or ghae %} | `hook.active_changed`             | Se ha actualizado el estado activo de un enlace.
{%- endif %} | `hook.config_changed`             | Se ha cambiado la configuración de un enlace.
| `hook.create`                     | Se ha agregado un nuevo enlace.
| `hook.destroy`                    | Se ha eliminado un enlace.
| `hook.events_changed`             | Se han cambiado los eventos configurados de un enlace.

## Acciones de la categoría `integration`

| Acción | Descripción
|--------|-------------
| `integration.create` | Se ha creado una integración.
| `integration.destroy` | Se ha eliminado una integración.
| `integration.manager_added` | Se ha agregado un miembro de una empresa u organización como administrador de integración.
| `integration.manager_removed` | Se ha quitado a un miembro de una empresa u organización como administrador de integración.
| `integration.transfer` | La propiedad de una integración se ha transferido a otro usuario u organización.
| `integration.remove_client_secret` | Se ha quitado un secreto de cliente de una integración.
| `integration.revoke_all_tokens` | Se ha solicitado la revocación de todos los tokens de usuario para una integración.
| `integration.revoke_tokens` | Se han revocado los tokens para una integración.

## Acciones de la categoría `integration_installation`

| Acción | Descripción
|--------|-------------
| `integration_installation.contact_email_changed` | Se ha cambiado un correo electrónico de contacto para una integración.
| `integration_installation.create` | Se ha instalado una integración.
| `integration_installation.destroy` | Se ha desinstalado una integración.
| `integration_installation.repositories_added` | Se han agregado repositorios a una integración.
| `integration_installation.repositories_removed` | Se han quitado repositorios de una integración.
{%- ifversion fpt or ghec %} | `integration_installation.suspend` | Se ha suspendido una integración.
| `integration_installation.unsuspend` | Se ha anulado la suspensión de una integración.
{%- endif %} | `integration_installation.version_updated` | Se han actualizado los permisos de una integración.

## Acciones de la categoría `integration_installation_request`

| Acción | Descripción
|--------|-------------
| `integration_installation_request.create` | Un miembro ha solicitado que un propietario instale una integración para su uso en una empresa u organización.
| `integration_installation_request.close` | Una solicitud para instalar una integración para su uso en una organización ha sido aprobada o rechazada por un propietario, o bien la solicitud ha sido cancelada por el miembro que la abrió.

{%- ifversion ghec or ghae %}
## Acciones de la categoría `ip_allow_list`

| Acción | Descripción
|--------|-------------
| `ip_allow_list.enable`               | Se habilitó una lista de IP permitidas.
| `ip_allow_list.enable_for_installed_apps` | Se habilitó una lista de IP permitidas para las {% data variables.product.prodname_github_apps %} instaladas.
| `ip_allow_list.disable`              | Se inhabilitó una lista de IP permitidas.
| `ip_allow_list.disable_for_installed_apps` | Se inhabilitó una lista de IP permitidas para las {% data variables.product.prodname_github_apps %} instaladas.

## Acciones de la categoría `ip_allow_list_entry`

| Acción | Descripción
|--------|-------------
| `ip_allow_list_entry.create` | Se agregó una dirección IP a una lista de IP permitidas.
| `ip_allow_list_entry.update` | Se cambió una dirección IP o su descripción.
| `ip_allow_list_entry.destroy` | Se borró una dirección IP de una lista de IP permitidas.
{%- endif %}

## Acciones de la categoría `issue`

| Acción | Descripción
|--------|-------------
| `issue.destroy`                      | Se eliminó un problema del repositorio. Para más información, vea "[Eliminación de una incidencia](/issues/tracking-your-work-with-issues/deleting-an-issue)".
| `issue.pinned`                       | Se ha anclado una incidencia a un repositorio. Para más información, vea "[Anclaje de una incidencia al repositorio](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)".
| `issue.transfer`                     | Se ha transferido una incidencia a otro repositorio. Para más información, vea "[Transferencia de una incidencia a otro repositorio](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)".
| `issue.unpinned`                     | Se ha desanclado una incidencia de un repositorio. Para más información, vea "[Anclaje de una incidencia al repositorio](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)".

## Acciones de la categoría `issue_comment`

| Acción | Descripción
|--------|-------------
| `issue_comment.destroy`  | Se ha eliminado del repositorio un comentario de una incidencia.
| `issue_comment.pinned`   | Se ha anclado un comentario de una incidencia en un repositorio.
| `issue_comment.unpinned` | Se ha desanclado un comentario de una incidencia de un repositorio.
| `issue_comment.update`   | Cambió un comentario sobre un problema (diferente al inicial).

## Acciones de la categoría `issues`

| Acción | Descripción
|--------|-------------
| `issues.deletes_disabled` | Se ha deshabilitado la capacidad para que los miembros de la empresa eliminen incidencias. Los miembros no pueden eliminar incidencias en ninguna organización de una empresa. Para más información, vea "[Aplicación de una directiva de eliminación de incidencias](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)".
| `issues.deletes_enabled` | Se ha habilitado la capacidad para que los miembros de la empresa eliminen incidencias. Los miembros pueden eliminar incidencias en cualquier organización de una empresa. Para más información, vea "[Aplicación de una directiva de eliminación de incidencias](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)".
| `issues.deletes_policy_cleared` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha borrado la configuración de directiva para permitir que los miembros eliminen incidencias en una empresa. Para más información, vea "[Aplicación de una directiva de eliminación de incidencias](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)".

{%- ifversion fpt or ghec %}
## Acciones de la categoría `marketplace_agreement_signature`

| Acción | Descripción
|--------|-------------
| `marketplace_agreement_signature.create` | Un usuario ha firmado el acuerdo para desarrolladores de {% data variables.product.prodname_marketplace %} en nombre de una organización.

## Acciones de la categoría `marketplace_listing`

| Acción | Descripción
|--------|-------------
| `marketplace_listing.approve` | Se ha aprobado una lista para su inclusión en {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.change_category` | Se ha cambiado una categoría de una lista para una aplicación en {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.create` | Se ha creado una lista para una aplicación en {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.delist` | Se ha eliminado una lista de {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.redraft` | Una lista se ha vuelto poner en estado de borrador.
| `marketplace_listing.reject` | No se ha aceptado una lista para su inclusión en {% data variables.product.prodname_marketplace %}.
{%- endif %}

## Acciones de la categoría `members_can_create_pages`

| Acción | Descripción
|--------|-------------
| `members_can_create_pages.disable` | Se ha deshabilitado la capacidad de los miembros para publicar sitios de {% data variables.product.prodname_pages %}. Los miembros no pueden publicar sitios de {% data variables.product.prodname_pages %} en una organización. Para más información, vea "[Administración de la publicación de sitios de GitHub Pages para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
| `members_can_create_pages.enable` | Se ha habilitado la capacidad de los miembros para publicar sitios de {% data variables.product.prodname_pages %}. Los miembros pueden publicar sitios de {% data variables.product.prodname_pages %} en una organización. Para más información, vea "[Administración de la publicación de sitios de GitHub Pages para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".

## Acciones de la categoría `members_can_create_private_pages`

| Acción | Descripción
|--------|-------------
| `members_can_create_private_pages.disable` | Se ha deshabilitado la capacidad de los miembros para publicar sitios privados de {% data variables.product.prodname_pages %}. Los miembros no pueden publicar sitios privados de {% data variables.product.prodname_pages %} en una organización. Para más información, vea "[Administración de la publicación de sitios de GitHub Pages para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
| `members_can_create_private_pages.enable` |  Se ha habilitado la capacidad de los miembros para publicar sitios privados de {% data variables.product.prodname_pages %}. Los miembros pueden publicar sitios privados de {% data variables.product.prodname_pages %} en una organización. Para más información, vea "[Administración de la publicación de sitios de GitHub Pages para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".

## Acciones de la categoría `members_can_create_public_pages`

| Acción | Descripción
|--------|-------------
| `members_can_create_public_pages.disable` |  Se ha deshabilitado la capacidad de los miembros para publicar sitios públicos de {% data variables.product.prodname_pages %}. Los miembros no pueden publicar sitios públicos de {% data variables.product.prodname_pages %} en una organización. Para más información, vea "[Administración de la publicación de sitios de GitHub Pages para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
| `members_can_create_public_pages.enable` |  Se ha habilitado la capacidad de los miembros para publicar sitios públicos de {% data variables.product.prodname_pages %}. Los miembros pueden publicar sitios públicos de {% data variables.product.prodname_pages %} en una organización. Para más información, vea "[Administración de la publicación de sitios de GitHub Pages para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".

{%- ifversion ghec or ghes or ghae %}
## Acciones de la categoría `members_can_delete_repos`

| Acción | Descripción
|--------|-------------
| `members_can_delete_repos.clear` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha borrado la configuración de directiva para eliminar o transferir repositorios en cualquier organización de una empresa. Para más información, vea "[Aplicación de una directiva para la eliminación y la transferencia de repositorios](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)".
| `members_can_delete_repos.disable` | Se ha deshabilitado la capacidad para que los miembros de la empresa eliminen repositorios. Los miembros no pueden eliminar ni transferir repositorios en ninguna organización de una empresa. Para más información, vea "[Aplicación de una directiva para la eliminación y la transferencia de repositorios](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)".
| `members_can_delete_repos.enable` |  Se ha habilitado la capacidad para que los miembros de la empresa eliminen repositorios. Los miembros pueden eliminar y transferir repositorios en cualquier organización de una empresa. Para más información, vea "[Aplicación de una directiva para la eliminación y la transferencia de repositorios](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)".

## Acciones de la categoría `members_can_view_dependency_insights`

| Acción | Descripción
|--------|-------------
| `members_can_view_dependency_insights.clear` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha borrado la configuración de directiva para ver la información de dependencias de cualquier organización de una empresa.{% ifversion ghec %} Para más información, vea "[Aplicación de una directiva para ver información de dependencias](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)".{% endif %}
| `members_can_view_dependency_insights.disable` | Se ha deshabilitado la capacidad de los miembros de la empresa para ver la información de dependencias. Los miembros no pueden ver la información de dependencias de ninguna organización de una empresa.{% ifversion ghec %} Para más información, vea "[Aplicación de una directiva para ver información de dependencias](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)".{% endif %}
| `members_can_view_dependency_insights.enable` |  Se ha habilitado la capacidad de los miembros de la empresa para ver la información de dependencias. Los miembros pueden ver la información de dependencias de cualquier organización de una empresa.{% ifversion ghec %} Para más información, vea "[Aplicación de una directiva para ver información de dependencias](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)".{% endif %}

## Acciones de la categoría `migration`

| Acción | Descripción
|--------|-------------
| `migration.create` | Se ha creado un archivo de migración para transferir datos desde una ubicación de *origen* (por ejemplo, una organización de {% data variables.product.prodname_dotcom_the_website %} o una instancia de {% data variables.product.prodname_ghe_server %}) a una instancia de *destino* de {% data variables.product.prodname_ghe_server %}.
| `migration.destroy_file` | Se ha eliminado un archivo de migración para transferir datos desde una ubicación de *origen* (por ejemplo, una organización de {% data variables.product.prodname_dotcom_the_website %} o una instancia de {% data variables.product.prodname_ghe_server %}) a una instancia de *destino* de {% data variables.product.prodname_ghe_server %}.
|  `migration.download` | Se ha descargado un archivo de migración para transferir datos desde una ubicación de *origen* (por ejemplo, una organización de {% data variables.product.prodname_dotcom_the_website %} o una instancia de {% data variables.product.prodname_ghe_server %}) a una instancia de *destino* de {% data variables.product.prodname_ghe_server %}.
{%- endif %}

## Acciones de la categoría `oauth_access`

| Acción | Descripción
|--------|-------------
`oauth_access.create`   | Se ha generado un [token de acceso de OAuth][] para una cuenta de usuario. Para obtener más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".
`oauth_access.destroy`  | Se ha eliminado un [token de acceso de OAuth][] de una cuenta de usuario.

  [Token de acceso de OAuth]: /developers/apps/building-oauth-apps/authorizing-oauth-apps

## Acciones de la categoría `oauth_application`

| Acción | Descripción
|--------|-------------
| `oauth_application.create`           | Se ha creado una [aplicación de OAuth][] para una cuenta de usuario o de organización.
| `oauth_application.destroy`          | Se ha eliminado una [aplicación de OAuth][] de una cuenta de usuario o de organización.
{%- ifversion fpt or ghec %} | `oauth_application.generate_client_secret`   | Se ha generado una clave secreta de una [aplicación de OAuth][].
| `oauth_application.remove_client_secret`     | Se ha eliminado la clave secreta de una [aplicación de OAuth][].
{%- endif %} | `oauth_application.reset_secret`      | Se ha restablecido la clave secreta de una [aplicación de OAuth][].
{%- ifversion fpt or ghec %} | `oauth_application.revoke_all_tokens` | Se ha solicitado la revocación de todos los tokens de usuario para una [aplicación de OAuth][].
{%- endif %} | `oauth_application.revoke_tokens`     | Se han revocado los tokens para una [aplicación de OAuth][].
| `oauth_application.transfer`          | Se ha transferido una [aplicación de OAuth][] de una cuenta de usuario o de organización a otra.
{%- ifversion ghes or ghae %} | `oauth_application.unsuspend`         | Se ha anulado la suspensión de una [aplicación de OAuth][] para una cuenta de usuario o de organización.
{%- endif %}

  [Aplicación de OAuth]: /guides/basics-of-authentication/#registering-your-app

{%- ifversion fpt or ghec %}
## Acciones de la categoría `oauth_authorization`

| Acción | Descripción
|--------|-------------
| `oauth_authorization.create`          | Se ha creado una autorización para una aplicación de OAuth. Para más información, vea "[Autorización de aplicaciones de OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)".
| `oauth_authorization.destroy`          | Se ha eliminado una autorización para una aplicación de OAuth. Para más información, vea "[Autorización de aplicaciones de OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)".
| `oauth_authorization.update`          | Se ha actualizado una autorización para una aplicación de OAuth. Para más información, vea "[Autorización de aplicaciones de OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)".
{%- endif %}

## Acciones de la categoría `org`

| Acción | Descripción
|--------|-------------
| `org.accept_business_invitation` | Se ha aceptado una invitación enviada a una organización para unirse a una empresa. {% ifversion ghec %} Para más información, vea "[Invitación a una organización a unirse a la cuenta empresarial](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)".{% endif %}
| `org.add_billing_manager` | Se ha agregado un administrador de facturación a una organización. {% ifversion fpt or ghec %}Para más información, vea "[Adición de un administrador de facturación a la organización](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)".{% endif %}
| `org.add_member` | Un usuario se ha unido a una organización.
| `org.advanced_security_disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} se ha deshabilitado para todos los repositorios nuevos de una organización.
| `org.advanced_security_disabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} se ha deshabilitado para todos los repositorios de una organización.
| `org.advanced_security_enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} se ha habilitado para los repositorios nuevos de una organización.
| `org.advanced_security_enabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} se ha habilitado para todos los repositorios de una organización.
| `org.advanced_security_policy_selected_member_disabled` | Un propietario de empresa ha impedido que se habiliten características de {% data variables.product.prodname_GH_advanced_security %} para los repositorios propiedad de la organización. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_selected_member_enabled` | Un propietario de empresa ha permitido la habilitación de características de {% data variables.product.prodname_GH_advanced_security %} para los repositorios propiedad de la organización. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_update` | Un propietario de la organización ha actualizado las directivas de {% data variables.product.prodname_GH_advanced_security %} de una empresa. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.async_delete` | Un usuario inició una tarea en segundo plano para eliminar una organización.
{%- ifversion ghec %} | `org.audit_log_export` | Un propietario de una organización ha creado una exportación del registro de auditoría de la organización. Si la exportación incluía una consulta, el registro detallará la consulta utilizada y la cantidad de entradas en el registro de auditoría que coinciden con esa consulta. Para más información, vea "[Exportación de la actividad del registro de auditoría de la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)".
{%- endif %} | `org.block_user` | Un propietario de una organización ha bloqueado el acceso de un usuario a los repositorios de la organización. {% ifversion fpt or ghec %}Para más información, vea "[Bloqueo de usuarios de la organización](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)".{% endif %} | `org.cancel_business_invitation` | Se ha revocado una invitación para que una organización se una a una empresa. {% ifversion ghec %}Para más información, vea "[Invitación a una organización a unirse a la cuenta empresarial](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)".{% endif %} | `org.cancel_invitation` | Se ha revocado una invitación enviada a un usuario para unirse a una organización.
| `org.clear_actions_settings` |  Un propietario de una organización ha borrado la configuración de directiva de {% data variables.product.prodname_actions %} de una organización. Para más información, vea "[Administración de permisos de Acciones de GitHub para la organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)".
| `org.clear_default_repository_permission` | Un propietario de una organización ha borrado la configuración de directiva de permisos del repositorio base de una organización. Para más información, vea "[Definición de permisos base](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)".
| `org.clear_member_team_creation_permission` | Un propietario de una organización ha borrado la configuración de creación de equipos de una organización. Para más información, vea "[Configuración de permisos de creación de equipos en la organización](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)".
| `org.clear_reader_discussion_creation_permission` | Un propietario de una organización ha borrado la configuración de creación de debates de una organización. {% ifversion fpt or ghec %} Para más información, vea "[Permiso o denegación del permiso para que los usuarios con acceso de lectura creen debates](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)".{% endif %} | `org.clear_members_can_create_repos`                 | Un propietario de organización ha borrado una restricción para la creación de repositorios en una organización. Para más información, vea "[Restricción de la creación de repositorios en la organización](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)".
| `org.clear_members_can_invite_outside_collaborators` | Un propietario de una organización ha borrado la directiva de invitación de colaboradores externos para una organización. Para más información, vea "[Establecimiento de permisos para agregar colaboradores externos](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)".
| `org.clear_new_repository_default_branch_setting`    | Un propietario de una organización ha borrado el nombre de la rama predeterminada en la configuración de los nuevos repositorios para una organización. Para más información, vea "[Establecimiento del nombre de la rama predeterminada](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization#setting-the-default-branch-name)".
{%- ifversion fpt or ghec %} | `org.codespaces_trusted_repo_access_granted`         | Se ha concedido a {% data variables.product.prodname_github_codespaces %} acceso de confianza al resto de repositorios de una organización. Para más información, vea "[Administración del acceso a los repositorios para los codespaces de la organización](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)".
| `org.codespaces_trusted_repo_access_revoked`         | Se ha revocado el acceso de confianza de {% data variables.product.prodname_github_codespaces %} al resto de repositorios de una organización. Para más información, vea "[Administración del acceso a los repositorios para los codespaces de la organización](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)".
{%- endif %}                                                                                                             | | `org.config.disable_collaborators_only` | Se ha deshabilitado el límite de interacción de los colaboradores solo para una organización. {% ifversion fpt or ghec %}Para más información, vea "[Limitación de las interacciones en la organización](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)".{% endif %} | `org.config.disable_contributors_only` | Se ha deshabilitado el límite de interacción de los colaboradores anteriores solo para una organización. {% ifversion fpt or ghec %}Para más información, vea "[Limitación de las interacciones en la organización](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)".{% endif %} | `org.config.disable_sockpuppet_disallowed` | Se ha deshabilitado el límite de interacción de los usuarios existentes solo para una organización. {% ifversion fpt or ghec %}Para más información, vea "[Limitación de las interacciones en la organización](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)".{% endif %} | `org.config.enable_collaborators_only` | Se ha habilitado el límite de interacción de los colaboradores solo para una organización. {% ifversion fpt or ghec %}Para más información, vea "[Limitación de las interacciones en la organización](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)".{% endif %} | `org.config.enable_contributors_only` | Se ha habilitado el límite de interacción de los colaboradores anteriores solo para una organización. {% ifversion fpt or ghec %}Para más información, vea "[Limitación de las interacciones en la organización](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)".{% endif %} | `org.config.enable_sockpuppet_disallowed` | Se ha habilitado el límite de interacción de los usuarios existentes solo para una organización. {% ifversion fpt or ghec %}Para más información, vea "[Limitación de las interacciones en la organización](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)".{% endif %} | `org.confirm_business_invitation` | Se ha confirmado una invitación para que una organización se una a una empresa. {% ifversion ghec %}Para más información, vea "[Invitación a una organización a unirse a la cuenta empresarial](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)".{% endif %} | `org.create` | Se ha creado una organización. Para más información, vea consulte "[Creación de una organización desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".
{%- ifversion fpt or ghec or ghes %} | `org.create_actions_secret` | Se ha creado un secreto de {% data variables.product.prodname_actions %} para una organización. Para más información, vea "[Creación de secretos cifrados para una organización](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)".
{%- endif %} | `org.create_integration_secret` | Se ha creado un secreto de integración de {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} o {% data variables.product.prodname_github_codespaces %}{% endif %} para una organización.
| `org.delete`       | Un trabajo en segundo plano iniciado por un usuario ha eliminado una organización.
| `org.disable_member_team_creation_permission` | Un propietario de organización ha limitado la creación de equipos a los propietarios. Para más información, vea "[Configuración de permisos de creación de equipos en la organización](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)".
| `org.disable_reader_discussion_creation_permission` | Un propietario de organización ha limitado la creación de debates a los usuarios con al menos permiso de evaluación de prioridades en una organización. {% ifversion fpt or ghec %} Para más información, vea "[Permiso o denegación del permiso para que los usuarios con acceso de lectura creen debates](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)".{% endif %} {%- ifversion fpt or ghec %} | `org.disable_oauth_app_restrictions` | Se han deshabilitado las restricciones de acceso a aplicaciones de terceros para una organización. Para más información, vea "[Deshabilitación de las restricciones de acceso a aplicaciones de OAuth para la organización](/organizations/restricting-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization)".
{%- endif %} {%- ifversion ghec %} | `org.disable_saml` | Un propietario de organización ha deshabilitado el inicio de sesión único de SAML para una organización.
{%- endif %} {%- ifversion not ghae %} | `org.disable_two_factor_requirement` | Un propietario de organización ha deshabilitado un requerimiento de autenticación en dos fases para todos los miembros{% ifversion fpt or ghec %}, administradores de facturación{% endif %} y colaboradores externos de una organización.
{%- endif %} | `org.display_commenter_full_name_disabled` | Un propietario de organización ha deshabilitado la visualización del nombre completo de los autores de los comentarios en una organización. Los miembros no pueden ver el nombre completo de los autores de los comentarios.
| `org.display_commenter_full_name_enabled` | Un propietario de organización ha habilitado la visualización del nombre completo de los autores de los comentarios en una organización. Los miembros pueden ver el nombre completo de los autores de los comentarios.
| `org.enable_member_team_creation_permission` | Un propietario de organización ha permitido que los miembros creen equipos. Para más información, vea "[Configuración de permisos de creación de equipos en la organización](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)".
| `org.enable_reader_discussion_creation_permission` | Un propietario de organización ha permitido que los usuarios con acceso de lectura creen debates en una organización. {% ifversion fpt or ghec %} Para más información, vea "[Permiso o denegación del permiso para que los usuarios con acceso de lectura creen debates](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)".{% endif %} {%- ifversion fpt or ghec %} | `org.enable_oauth_app_restrictions` | Se han habilitado las restricciones de acceso a aplicaciones de terceros para una organización. Para más información, vea "[Habilitación de las restricciones de acceso a aplicaciones de OAuth para la organización](/organizations/restricting-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization)".
{%- endif %} {%- ifversion ghec %} | `org.enable_saml` | Un propietario de organización [ha habilitado el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization) para una organización.
{%- endif %} {%- ifversion not ghae %} | `org.enable_two_factor_requirement` | Un propietario de organización ha requerido la autenticación en dos fases para todos los miembros{% ifversion fpt or ghec %}, administradores de facturación{% endif %} y colaboradores externos de una organización.
{%- endif %} | `org.integration_manager_added` | Un propietario de organización ha concedido a un miembro acceso para administrar todas las aplicaciones de GitHub que son propiedad de una organización.
| `org.integration_manager_removed`| Un propietario de organización ha revocado el acceso de un miembro de una organización para administrar todas las aplicaciones de GitHub que son propiedad de una organización.
| `org.invite_member` | Se ha invitado a un nuevo usuario a unirse a una organización. {% ifversion fpt or ghec %} Para más información, vea "[Invitación a los usuarios a unirse a la organización](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)".{% endif %} | `org.invite_to_business` | Se ha invitado a una organización a unirse a una empresa.
| `org.members_can_update_protected_branches.clear` | Un propietario de organización ha anulado una directiva que determina si los miembros de una organización pueden actualizar las ramas protegidas en los repositorios de una organización. Los administradores de cada organización pueden elegir si se permite actualizar la configuración de las ramas protegidas.
| `org.members_can_update_protected_branches.disable` | Se ha deshabilitado la capacidad para que los miembros de la empresa actualicen las ramas protegidas. Solo los propietarios de la empresa pueden actualizar las ramas protegidas.
| `org.members_can_update_protected_branches.enable` | Se ha habilitado la capacidad para que los miembros de la empresa actualicen las ramas protegidas. Los miembros de una organización pueden actualizar las ramas protegidas.
{%- ifversion fpt or ghec %} | `org.oauth_app_access_approved` | Un propietario [ha concedido a una organización acceso a una {% data variables.product.prodname_oauth_app %}](/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization).
| `org.oauth_app_access_denied` | Un propietario [ha deshabilitado el acceso de una {% data variables.product.prodname_oauth_app %} aprobada previamente](/organizations/restricting-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization) a una organización.
| `org.oauth_app_access_requested` | Un miembro de una organización ha solicitado que un propietario conceda acceso a una {% data variables.product.prodname_oauth_app %} a una organización.
{%- endif %} | `org.recreate` | Se ha restaurado una organización.
| `org.register_self_hosted_runner` | Se ha registrado un nuevo ejecutor autohospedado. Para más información, vea "[Adición de un ejecutor autohospedado a una organización](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)".
| `org.remove_actions_secret` | Se ha quitado un secreto de {% data variables.product.prodname_actions %}.
| `org.remove_integration_secret` | Se ha quitado un secreto de integración de {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} o {% data variables.product.prodname_github_codespaces %}{% endif %} de una organización.
| `org.remove_billing_manager` | Un propietario ha quitado a un administrador de facturación de una organización. {% ifversion fpt or ghec %} Para más información, vea "[Eliminación de un administrador de facturación de la organización](/organizations/managing-peoples-access-to-your-organization-with-roles/removing-a-billing-manager-from-your-organization)"{% endif %}{% ifversion not ghae %}, o bien consulte "[ Exigencia de la autenticación en dos fases en la organización](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)" cuando un administrador de facturación no ha usado o ha deshabilitado la autenticación en dos fases.{% endif %} | `org.remove_member` | Un [propietario ha quitado a un miembro de una organización](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization){% ifversion not ghae %} o [se requiere la autenticación en dos fases en una organización](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) y un miembro de la organización no ha usado o ha deshabilitado autenticación en dos fases{% endif %}. O bien un [miembro de una organización se ha quitado a sí mismo](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization) de una organización.
| `org.remove_outside_collaborator` | Un propietario ha quitado a un colaborador externo de una organización{% ifversion not ghae %} o [se requiere la autenticación en dos fases en una organización](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) y un colaborador externo no ha usado o ha deshabilitado la autenticación en dos fases{% endif %}.
| `org.remove_self_hosted_runner` | Se ha quitado un ejecutor autohospedado. Para más información, vea "[Eliminación de un ejecutor de una organización](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)".
| `org.rename` | Se ha cambiado el nombre de una organización.
| `org.restore_member` | Se ha restaurado un miembro de una organización. Para más información, vea "[Readmisión de un antiguo miembro de la organización](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)".
{%- ifversion ghec %} | `org.revoke_external_identity` | Un propietario de una organización ha revocado la identidad vinculada de un miembro. Para más información, vea "[Visualización y administración del acceso SAML de un miembro a la organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".
| `org.revoke_sso_session` | Un propietario de una organización ha revocado la sesión SAML de un miembro. Para más información, vea "[Visualización y administración del acceso SAML de un miembro a la organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".
{%- endif %} | `org.runner_group_created` | Se ha creado un grupo de ejecutores autohospedados. Para más información, vea "[Creación de un grupo de ejecutores autohospedados para una organización](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)".
| `org.runner_group_removed` | Se ha quitado un grupo de ejecutores autohospedados. Para más información, vea "[Eliminación de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
{%- ifversion fpt or ghec %} | `org.runner_group_renamed` | Se ha cambiado el nombre de un grupo de ejecutores autohospedados. Para más información, vea "[Cambio de la directiva de acceso de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
{%- endif %} | `org.runner_group_updated` | Se ha cambiado la configuración de un grupo de ejecutores autohospedados. Para más información, vea "[Cambio de la directiva de acceso de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `org.runner_group_runner_removed` |  La API REST se ha usado para quitar un ejecutor autohospedado de un grupo. Para más información, vea "[Eliminación de un ejecutor autohospedado de un grupo en una organización](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)".
| `org.runner_group_runners_added` | Se ha agregado un ejecutor autohospedado a un grupo. Para más información, vea "[Adición de un ejecutor autohospedado a un grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".
| `org.runner_group_runners_updated`|  Se ha actualizado la lista de miembros de un grupo de ejecutores. Para más información, vea "[Establecimiento de los ejecutores autohospedados en un grupo para una organización](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
{%- ifversion fpt or ghec %} | `org.runner_group_visiblity_updated` | Se ha actualizado la visibilidad de un grupo de ejecutores autohospedado mediante la API REST. Para más información, vea "[Actualización de un grupo de ejecutores autohospedados para una organización](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)".
{%- endif %} {%- ifversion code-security-audit-log-events %} | `org.secret_scanning_push_protection_custom_message_disabled` | El mensaje personalizado que se activa con los intentos de inserción en un repositorio con protección de inserción está deshabilitado en tu organización. Para más información, vea "[Protección de inserciones con {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)".
| `org.secret_scanning_push_protection_custom_message_enabled` | El mensaje personalizado que se activa con los intentos de inserción en un repositorio con protección de inserción está habilitado en tu organización. Para más información, vea "[Protección de inserciones con {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)".
| `org.secret_scanning_push_protection_custom_message_updated` | El mensaje personalizado que se activa con los intentos de inserción en un repositorio con protección de inserción se ha actualizado en tu organización. Para más información, vea "[Protección de inserciones con {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)".
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org.secret_scanning_push_protection_disable` | Un propietario o un administrador de una organización ha deshabilitado la protección contra inserción para el examen de secretos. Para más información, vea "[Protección de inserciones para el examen de secretos](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
| `org.secret_scanning_push_protection_enable` | Un propietario o un administrador de una organización ha habilitado la protección de inserciones para el examen de secretos.
{%- endif %} | `org.self_hosted_runner_online` | Se inició la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `org.self_hosted_runner_offline` | Se ha detenido la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
{%- ifversion fpt or ghec or ghes %} | `org.self_hosted_runner_updated` | Se actualizó la aplicación del ejecutor. Se puede ver utilizando la API de REST y la IU; no se puede ver en la exportación de JSON/CSV. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners).
{%- endif %} {%- ifversion fpt or ghec %} | `org.set_actions_fork_pr_approvals_policy` | La configuración para requerir aprobaciones para la ejecución de flujos de trabajo desde bifurcaciones públicas se ha cambiado para una organización. Para más información, vea "[Requerimiento de aprobación para los flujos de trabajo de bifurcaciones públicas](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)".
{%- endif %} | `org.set_actions_retention_limit` | Se ha cambiado el periodo de retención de los artefactos y los registros de {% data variables.product.prodname_actions %} en una organización. Para más información, vea "[Configuración del período de retención para los artefactos y los registros de {% data variables.product.prodname_actions %} en la organización](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)".
{%- ifversion fpt or ghec or ghes %} | `org.set_fork_pr_workflows_policy` | Se ha cambiado la directiva para los flujos de trabajo en bifurcaciones de repositorios privados. Para más información, vea "[Habilitación de flujos de trabajo para bifurcaciones de repositorios privados](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)".
{%- endif %} {%- ifversion ghes or audit-log-sso-response-events %} | `org.sso_response` | Se ha generado una respuesta de inicio de sesión único (SSO) de SAML cuando un miembro ha intentado autenticarse con tu organización. Este evento solo está disponible a través del streaming del registro de auditoría y la API REST.
{%- endif %} {%- ifversion ghec %} | `org.transfer` | Se transfirió una organización entre cuentas empresariales. Para más información, vea "[Adición de organizaciones a la empresa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts)".
{%- endif %} {%- ifversion not ghae %} | `org.transform`    | Una cuenta de usuario se ha convertido en una organización. Para más información, vea "[Conversión de un usuario en una organización](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)".
{%- endif %} | `org.unblock_user` | Un propietario de una organización ha desbloqueado a un usuario de una organización. {% ifversion fpt or ghec %} Para más información, vea "[Desbloqueo de usuarios de la organización](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)".{% endif %} {%- ifversion fpt or ghec or ghes %} | `org.update_actions_secret` | Se ha actualizado un secreto de {% data variables.product.prodname_actions %}.
{%- endif %} | `org.update_integration_secret` | Se ha actualizado un secreto de integración de {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} o {% data variables.product.prodname_github_codespaces %}{% endif %} de una organización.
| `org.update_default_repository_permission` | Un propietario de una organización ha cambiado el nivel de permisos de repositorio predeterminado para los miembros de la organización.
| `org.update_member` | Un propietario de una organización ha cambiado el rol de una persona de propietario a miembro o de miembro a propietario.
| `org.update_member_repository_creation_permission` | Un propietario de una organización ha cambiado el permiso de creación de repositorios para los miembros de la organización.
| `org.update_member_repository_invitation_permission` | Un propietario de una organización ha cambiado la configuración de directiva para los miembros de la organización que invitan a colaboradores externos a los repositorios. Para más información, vea "[Establecimiento de permisos para agregar colaboradores externos](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)".
| `org.update_new_repository_default_branch_setting` | Un propietario de una organización ha cambiado el nombre de la rama predeterminada para los nuevos repositorios de la organización. Para más información, vea "[Administración del nombre de la rama predeterminada para los repositorios de la organización](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)"
{%- ifversion ghec or ghae %} | `org.update_saml_provider_settings` | Se ha actualizado la configuración del proveedor de SAML de una organización.
| `org.update_terms_of_service` | Una organización ha cambiado los términos de servicio estándar a los términos de servicio corporativos. {% ifversion ghec %}Para más información, vea "[Actualización a los términos de servicio corporativos](/organizations/managing-organization-settings/upgrading-to-the-corporate-terms-of-service)".{% endif %} {%- endif %}

{%- ifversion ghec or ghes or ghae %}
## Acciones de la categoría `org_credential_authorization`

| Acción | Descripción
|--------|-------------
| `org_credential_authorization.deauthorized` | Un miembro ha desautorizado credenciales para su uso con el inicio de sesión único de SAML. {% ifversion ghec or ghae %}Para más información, vea "[Autenticación con el inicio de sesión único de SAML](/authentication/authenticating-with-saml-single-sign-on)".{% endif %}
| `org_credential_authorization.grant` | Un miembro ha autorizado credenciales para su uso con el inicio de sesión único de SAML. {% ifversion ghec or ghae %}Para más información, vea "[Autenticación con el inicio de sesión único de SAML](/authentication/authenticating-with-saml-single-sign-on)".{% endif %}
| `org_credential_authorization.revoke` | Un propietario ha revocado credenciales autorizadas. {% ifversion ghec %}Para más información, vea "[Visualización y administración de las sesiones activas de SAML](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)".{% endif %}
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## Acciones de la categoría `org_secret_scanning_custom_pattern`

| Acción | Descripción
|--------|---------------
| `org_secret_scanning_custom_pattern.create` | Se ha publicado un patrón personalizado para el examen de secretos en una organización. Para más información, vea "[Definición de patrones personalizados para el examen de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)".
| `org_secret_scanning_custom_pattern.delete` | Se ha quitado un patrón personalizado del examen de secretos en una organización. Para más información, vea "[Definición de patrones personalizados para el examen de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)".
| `org_secret_scanning_custom_pattern.update` |Los cambios en un patrón personalizado se han guardado para el examen de secretos en una organización. Para más información, vea "[Definición de patrones personalizados para el examen de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)".
{%- endif %}

## Acciones de la categoría `organization_default_label`

| Acción | Descripción
|--------|-------------
| `organization_default_label.create` | Se ha creado una etiqueta predeterminada para los repositorios de una organización. Para más información, vea "[Creación de una etiqueta predeterminada](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#creating-a-default-label)".
| `organization_default_label.update` | Se ha editado una etiqueta predeterminada para los repositorios de una organización. Para más información, vea "[Edición de una etiqueta predeterminada](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#editing-a-default-label)".
| `organization_default_label.destroy` | Se ha eliminado una etiqueta predeterminada para los repositorios de una organización. Para más información, vea "[Eliminación de una etiqueta predeterminada](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#deleting-a-default-label)".

{%- ifversion fpt or ghec or ghes %}
## Acciones de la categoría `organization_domain`

| Acción | Descripción
|--------|-------------
| `organization_domain.approve` | Se ha aprobado un dominio de empresa para una organización. Para más información, vea "[Aprobación de un dominio para la organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#approving-a-domain-for-your-organization)".
| `organization_domain.create` | Se ha agregado un dominio de empresa a una organización. Para más información, vea "[Comprobación de un dominio para la organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)".
| `organization_domain.destroy` | Se ha quitado un dominio de empresa de una organización. Para más información, vea "[Eliminación de un dominio aprobado o comprobado](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#removing-an-approved-or-verified-domain)".
| `organization_domain.verify` | Se ha comprobado un dominio de empresa para una organización. Para más información, vea "[Comprobación de un dominio para la organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)".

## Acciones de la categoría `organization_projects_change`

| Acción | Descripción
|--------|-------------
| `organization_projects_change.clear` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha borrado la configuración de directiva para los paneles de proyecto a nivel de organización en una empresa. Para más información, consulta "[Requerir políticas para proyectos en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)".
| `organization_projects_change.disable` | Los proyectos a nivel de organización se han deshabilitado para todas las organizaciones de una empresa. Para más información, consulta "[Requerir políticas para proyectos en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)".
| `organization_projects_change.enable` | Los proyectos a nivel de organización se han habilitado para todas las organizaciones de una empresa. Para más información, consulta "[Requerir políticas para proyectos en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)".
{%- endif %}

## Acciones de la categoría `packages`

| Acción | Descripción
|--------|-------------
| `packages.insecure_hash` | Maven ha publicado un hash no seguro para una versión específica de un paquete.
| `packages.package_deleted` | Se ha eliminado un paquete de una organización.{% ifversion fpt or ghec or ghes %} Para más información, consulta "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% endif %}
| `packages.package_published` | Se ha publicado o se ha vuelto a publicar un paquete en una organización.
| `packages.package_restored` | Se ha restaurado un paquete completo.{% ifversion fpt or ghec or ghes %} Para más información, consulta "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% endif %}
| `packages.package_version_deleted` | Se ha eliminado una versión específica de un paquete.{% ifversion fpt or ghec or ghes %} Para más información, consulta "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% endif %}
| `packages.package_version_published` | Se ha publicado o se ha vuelto a publicar una versión específica de un paquete.
| `packages.package_version_restored` | Se ha eliminado una versión específica de un paquete.{% ifversion fpt or ghec or ghes %} Para más información, consulta "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".{% endif %}
| `packages.part_upload` | Se ha cargado parcialmente una versión específica de un paquete en una organización.
| `packages.upstream_package_fetched` | Se ha capturado una versión específica de un paquete del proxy ascendente de npm.
| `packages.version_download` | Se ha descargado una versión específica de un paquete.
| `packages.version_upload` | Se ha cargado una versión específica de un paquete.

{%- ifversion fpt or ghec %}
## Acciones de la categoría `pages_protected_domain`

| Acción | Descripción
|--------|-------------
| `pages_protected_domain.create` | Se ha creado un dominio comprobado de {% data variables.product.prodname_pages %} para una organización o empresa. Para más información, vea "[Comprobación de un dominio personalizado para {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)".
| `pages_protected_domain.delete` | Se ha eliminado un dominio comprobado de {% data variables.product.prodname_pages %} de una organización o empresa. Para más información, vea "[Comprobación de un dominio personalizado para {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)".
| `pages_protected_domain.verify`  | Se ha comprobado un dominio de {% data variables.product.prodname_pages %} para una organización o empresa. Para más información, vea "[Comprobación de un dominio personalizado para {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)".

## Acciones de la categoría `payment_method`

| Acción | Descripción
|--------|-------------
| `payment_method.create` | Se ha agregado un nuevo método de pago, como una nueva tarjeta de crédito o una cuenta de PayPal.
| `payment_method.remove` | Se ha quitado un método de pago.
| `payment_method.update` | Se ha actualizado un método de pago existente.

## Acciones de la categoría `prebuild_configuration`

| Acción | Descripción
|--------|-------------
| `prebuild_configuration.create` | Se ha creado una configuración de precompilación de {% data variables.product.prodname_github_codespaces %} de un repositorio. Para más información, consulta "[Acerca de las precompilaciones de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)".
| `prebuild_configuration.destroy` | Se ha eliminado una configuración de precompilación de {% data variables.product.prodname_github_codespaces %} de un repositorio. Para más información, consulta "[Acerca de las precompilaciones de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)".
| `prebuild_configuration.run_triggered` | Un usuario ha iniciado la ejecución de una configuración de precompilación de {% data variables.product.prodname_github_codespaces %} para la rama de un repositorio. Para más información, consulta "[Acerca de las precompilaciones de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)".
| `prebuild_configuration.update` | Se ha editado una configuración de precompilación de {% data variables.product.prodname_github_codespaces %} de un repositorio. Para más información, consulta "[Acerca de las precompilaciones de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)".
{%- endif %}

{%- ifversion ghes %}
## Acciones de la categoría `pre_receive_environment`

| Acción | Descripción
| ------ | -----------
| `pre_receive_environment.create` | Se ha creado un entorno de enlace de recepción previa. Para más información, vea "[Creación de un entorno de enlace de recepción previa](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)".
| `pre_receive_environment.destroy` | Se ha eliminado un entorno de enlace de recepción previa. Para más información, vea "[Creación de un entorno de enlace de recepción previa](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)".
| `pre_receive_environment.download` | Se ha descargado un entorno de enlace de recepción previa. Para más información, vea "[Creación de un entorno de enlace de recepción previa](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)".
| `pre_receive_environment.update` | Se ha actualizado un entorno de enlace de recepción previa. Para más información, vea "[Creación de un entorno de enlace de recepción previa](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)".

## Acciones de la categoría `pre_receive_hook`

| Acción | Descripción
|--------|-------------
| `pre_receive_hook.create` | Se ha creado un enlace de recepción previa. Para más información, vea "[Creación de enlaces de recepción previa](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#creating-pre-receive-hooks)".
| `pre_receive_hook.destroy` | Se ha eliminado un enlace de recepción previa. Para más información, vea "[Eliminación de enlaces de recepción previa](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#deleting-pre-receive-hooks)".
| `pre_receive_hook.enforcement` | Se ha habilitado o deshabilitado una configuración de cumplimiento del enlace de recepción previa que permite a los administradores del repositorio y de la organización invalidar la configuración del enlace. Para más información, vea "[Administración de enlaces de recepción previa en el dispositivo de GitHub Enterprise Server](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance)".
| `pre_receive_hook.rejected_push` | Un enlace de recepción previa ha rechazado una inserción.
| `pre_receive_hook.update` | Se ha creado un enlace de recepción previa. Para más información, vea "[Edición de enlaces de recepción previa](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#editing-pre-receive-hooks)".
| `pre_receive_hook.warned_push` | Un enlace de recepción previa ha emitido una advertencia sobre una inserción.
{%- endif %}

## Acciones de la categoría `private_repository_forking`

| Acción | Descripción
|--------|-------------
| `private_repository_forking.clear` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha borrado la configuración de directiva para permitir bifurcaciones de repositorios privados e internos en un repositorio, un organización o una empresa. Para más información, vea "[Administración de la directiva de bifurcación para el repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)", "[Administración de la directiva de bifurcación para la organización](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)" y, para empresas, "[Aplicación de una directiva de bifurcación para repositorios privados o internos](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)".
| `private_repository_forking.disable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha deshabilitado la configuración de directiva para permitir bifurcaciones de repositorios privados e internos en un repositorio, un organización o una empresa. Los repositorios privados e internos nunca se pueden bifurcar. Para más información, vea "[Administración de la directiva de bifurcación para el repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)", "[Administración de la directiva de bifurcación para la organización](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)" y, para empresas, "[Aplicación de una directiva de bifurcación para repositorios privados o internos](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)".
| `private_repository_forking.enable` | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha habilitado la configuración de directiva para permitir bifurcaciones de repositorios privados e internos en un repositorio, un organización o una empresa. Los repositorios privados e internos se pueden bifurcar siempre. Para más información, vea "[Administración de la directiva de bifurcación para el repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)", "[Administración de la directiva de bifurcación para la organización](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)" y, para empresas, "[Aplicación de una directiva de bifurcación para repositorios privados o internos](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)".

{%- ifversion fpt or ghec %}
## Acciones de la categoría `profile_picture`

| Acción | Descripción
|--------|-------------
| `profile_picture.update` | Se ha actualizado una imagen de perfil.
{%- endif %}

## Acciones de la categoría `project`

| Acción | Descripción
|--------|-------------
| `project.access` | Se ha cambiado la visibilidad de un panel de proyecto. Para más información, vea "[Cambio de la visibilidad del panel de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)".
| `project.close` | Se ha cerrado un panel de proyecto. Para más información, vea "[Cierre de un panel de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)".
| `project.create` | Se ha creado un panel de proyecto. Para más información, vea "[Creación de un panel de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board)".
| `project.delete` | Se ha eliminado un panel de proyecto. Para más información, vea "[Eliminación de un panel de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board)".
| `project.link` | Se ha vinculado un repositorio a un panel de proyecto. Para más información, vea "[Vinculación de un repositorio a un panel de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)".
| `project.open` | Se ha vuelto a abrir un panel de proyecto. Para más información, vea "[Reapertura de un panel de proyecto cerrado](/issues/organizing-your-work-with-project-boards/managing-project-boards/reopening-a-closed-project-board)".
| `project.rename` | Se ha cambiado el nombre de un panel de proyecto. Para más información, vea "[Edición de un panel de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board)".
| `project.unlink` | Un repositorio se ha desvinculado de un panel de proyecto. Para más información, vea "[Vinculación de un repositorio a un panel de proyecto](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)".
| `project.update_org_permission` | Se ha cambiado o quitado el permiso de nivel base del proyecto para todos los miembros de la organización. Para más información, vea "[Administración del acceso a un panel de proyecto para los miembros de la organización](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members)".
| `project.update_team_permission` | Se ha cambiado el nivel de permiso del panel de proyecto de un equipo, o bien se ha agregado o quitado un equipo de un panel de proyecto. Para más información, vea "[Administración del acceso de equipo a un panel de proyecto de la organización](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)".
| `project.update_user_permission` | Se ha cambiado el nivel de permiso de un miembro de la organización o de un colaborador externo, o bien uno de estos se ha agregado a un panel de proyecto o se ha quitado de uno. Para más información, vea "[Administración del acceso de un usuario a un panel de proyecto de la organización](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board)".

{%- ifversion projects-v2 %}
## Acciones de la categoría `project_field`

| Acción | Descripción
|--------|-------------
| `project_field.create` | Se ha creado un campo en un panel de proyecto. Para más información, consulta "[Descripción de los tipos de campo](/issues/planning-and-tracking-with-projects/understanding-field-types)".
| `project_field.delete` | Se ha eliminado un campo en un panel de proyecto. Para más información, consulta "[Eliminación de campos](/issues/planning-and-tracking-with-projects/understanding-field-types/deleting-fields)".

## Acciones de la categoría `project_view`

| Acción | Descripción
|--------|-------------
| `project_view.create` | Se ha creado una vista en un panel de proyecto. Para obtener más información, consulta "[Administración de las vistas](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views)".
| `project_view.delete` | Se ha eliminado una vista en un panel de proyecto. Para obtener más información, consulta "[Administración de las vistas](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views)".
{%- endif %}

## Acciones de la categoría `protected_branch`

| Acción | Descripción
|--------|-------------
| `protected_branch.create ` | La protección de rama se ha habilitado para una rama.
| `protected_branch.destroy` | La protección de rama se ha deshabilitado para una rama.
| `protected_branch.dismiss_stale_reviews ` | Se ha actualizado la aplicación del descarte de solicitudes de incorporación de cambios obsoletas en una rama.
{%- ifversion ghes %} | `protected_branch.dismissal_restricted_users_teams` | La aplicación de la restricción de usuarios o equipos que pueden descartar las revisiones se ha actualizado en una rama.
{%- endif %} | `protected_branch.policy_override ` | Un administrador del repositorio ha invalidado un requisito de protección de ramas.
| `protected_branch.rejected_ref_update ` | Se ha rechazado un intento de actualizar una rama.
| `protected_branch.required_status_override` | Un administrador del repositorio ha invalidado el requisito de protección de ramas mediante las comprobaciones de estado necesarias.
| `protected_branch.review_policy_and_required_status_override` | Un administrador del repositorio ha invalidado los requisitos de protección de ramas mediante las comprobaciones de estado y las revisiones necesarias.
| `protected_branch.review_policy_override` | Un administrador del repositorio ha invalidado el requisito de protección de ramas mediante las revisiones necesarias.
| `protected_branch.update_admin_enforced ` | Se ha aplicado la protección de ramas para los administradores de repositorios.
{%- ifversion ghes %} | `protected_branch.update_allow_deletions_enforcement_level` | La aplicación del permiso para los usuarios con acceso de inserción para eliminar ramas coincidentes se ha actualizado en una rama.
| `protected_branch.update_allow_force_pushes_enforcement_level` | La aplicación del permiso para realizar inserciones forzadas para todos los usuarios con acceso de inserción se ha actualizado en una rama.
| `protected_branch.update_linear_history_requirement_enforcement_level` | La aplicación del requerimiento del historial de confirmaciones lineales se ha actualizado en una rama.
{%- endif %} | `protected_branch.update_pull_request_reviews_enforcement_level ` | La aplicación de las revisiones necesarias de las solicitudes de incorporación de cambios se ha actualizado en una rama. Puede ser: `0`(desactivada), `1`(no administradores) o `2`(todos).
| `protected_branch.update_require_code_owner_review ` | La aplicación de la revisión necesaria del propietario del código se ha actualizado en una rama.
| `protected_branch.update_required_approving_review_count` | La aplicación del número necesario de aprobaciones antes de la combinación se ha actualizado en una rama.
| `protected_branch.update_required_status_checks_enforcement_level ` | La aplicación de las comprobaciones de estado necesarias se ha actualizado en una rama.
| `protected_branch.update_signature_requirement_enforcement_level ` | La aplicación de las firmas de confirmación necesarias se ha actualizado en una rama.
| `protected_branch.update_strict_required_status_checks_policy` | La aplicación de las comprobaciones de estado necesarias se ha actualizado en una rama.
| `protected_branch.update_name` | Se ha actualizado un patrón de nombre de rama para una rama.

## Acciones de la categoría `public_key`

| Acción | Descripción
|--------|-------------
| `public_key.create` | Se [ha agregado][add key] una clave SSH a una cuenta de usuario o una [clave de implementación][] a un repositorio.
| `public_key.delete` | Se ha quitado una clave SSH de una cuenta de usuario o una [clave de implementación][] de un repositorio.
| `public_key.update` | Se ha actualizado la clave SSH de una cuenta de usuario o la [clave de implementación][] de un repositorio.
| `public_key.unverification_failure` | No se ha podido dejar sin comprobar la clave SSH de una cuenta de usuario o la [clave de implementación][] de un repositorio.
| `public_key.unverify` | Se ha dejado sin comprobar la clave SSH de una cuenta de usuario o la [clave de implementación][] de un repositorio.
| `public_key.verification_failure` | No se ha podido comprobar la clave SSH de una cuenta de usuario o la [clave de implementación][] de un repositorio.
| `public_key.verify` | Se ha comprobado la clave SSH de una cuenta de usuario o la [clave de implementación][] de un repositorio.

  [add key]: /authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
  [clave de implementación]: /developers/overview/managing-deploy-keys#deploy-keys

## Acciones de la categoría `pull_request`

| Acción | Descripción
|--------|-------------
| `pull_request.close` | Se ha cerrado una solicitud de incorporación de cambios sin combinarse. Para más información, vea "[Cierre de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)".
| `pull_request.converted_to_draft` | La solicitud de incorporación de cambios se ha convertido en un borrador. Para más información, vea "[Cambio de la fase de una solicitud de incorporación de cambios](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft)".
| `pull_request.create` | Se ha creado una solicitud de incorporación de cambios. Para más información, vea "[Creación de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)".
| `pull_request.create_review_request` | Se ha solicitado una revisión en una solicitud de incorporación de cambios. Para más información, vea "[Acerca de las revisiones de solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)".
| `pull_request.in_progress` | Una solicitud de incorporación de cambios se ha marcado como en curso.
| `pull_request.indirect_merge` | Se ha considerado una solicitud de incorporación de cambios como combinada porque las confirmaciones de dicha solicitud se han combinado en la rama de destino.
| `pull_request.merge` | Se ha combinado una solicitud de incorporación de cambios. Para más información, vea "[Combinación de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)".
| `pull_request.ready_for_review` | Una solicitud de incorporación de cambios se ha marcado como lista para su revisión. Para más información, vea "[Cambio de la fase de una solicitud de incorporación de cambios](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review)".
| `pull_request.remove_review_request` | Se ha quitado una solicitud de revisión de una solicitud de incorporación de cambios. Para más información, vea "[Acerca de las revisiones de solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)".
| `pull_request.reopen` | Una solicitud de incorporación de cambios se ha vuelto a abrir después de haberse cerrado anteriormente.
| `pull_request_review.delete` | Se ha eliminado una revisión de una solicitud de incorporación de cambios.
| `pull_request_review.dismiss` | Se ha descartado una revisión de una solicitud de incorporación de cambios. Para más información, vea "[Descarte de la revisión de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".
| `pull_request_review.submit` | Se ha enviado una revisión para una solicitud de incorporación de cambios. Para más información, vea "[Acerca de las revisiones de solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)".

## Acciones de la categoría `pull_request_review`

| Acción | Descripción
|--------|-------------
| `pull_request_review.delete` | Se ha eliminado una revisión de una solicitud de incorporación de cambios.
| `pull_request_review.dismiss` | Se ha descartado una revisión de una solicitud de incorporación de cambios. Para más información, vea "[Descarte de la revisión de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".
| `pull_request_review.submit` | Se ha enviado una revisión de una solicitud de incorporación de cambios. Para más información, vea "[Envío de revisiones](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request#submitting-your-review)".

## Acciones de la categoría `pull_request_review_comment`

| Acción | Descripción
|--------|-------------
| `pull_request_review_comment.create` | Se ha agregado un comentario de revisión a una solicitud de incorporación de cambios. Para más información, vea "[Acerca de las revisiones de solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)".
| `pull_request_review_comment.delete` | Se ha eliminado un comentario de revisión en una solicitud de incorporación de cambios.
| `pull_request_review_comment.update` | Se ha cambiado un comentario de revisión en una solicitud de incorporación de cambios.

## Acciones de la categoría `repo`

| Acción | Descripción
|--------|-------------
| `repo.access`         | La visibilidad de un repositorio ha cambiado a privada{%- ifversion ghes %}, pública{% endif %} o interna.
| `repo.actions_enabled` | Se ha habilitado {% data variables.product.prodname_actions %} para un repositorio.
| `repo.add_member`     | Se agregó un colaborador a un repositorio.
| `repo.add_topic`     | Se ha agregado un tema a un repositorio.
| `repo.advanced_security_disabled` | Se ha deshabilitado {% data variables.product.prodname_GH_advanced_security %} para un repositorio.
| `repo.advanced_security_enabled` | Se ha habilitado {% data variables.product.prodname_GH_advanced_security %} para un repositorio.
| `repo.advanced_security_policy_selected_member_disabled` | Un administrador de repositorios ha impedido que se habiliten las características de {% data variables.product.prodname_GH_advanced_security %} para un repositorio.
| `repo.advanced_security_policy_selected_member_enabled` | Un administrador de repositorios ha permitido que se habiliten las características de {% data variables.product.prodname_GH_advanced_security %} para un repositorio.
| `repo.archived`       | Se archivó un repositorio. Para más información, vea "[Archivado de un repositorio de {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)".
| `repo.code_scanning_analysis_deleted` | Se ha eliminado el análisis de examen de código de un repositorio. Para más información, vea "[Eliminación de un análisis de examen de código de un repositorio](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository)".
| `repo.change_merge_setting` | Se han cambiado las opciones de combinación de solicitudes de incorporación de cambios para un repositorio.
| `repo.clear_actions_settings` | Un administrador de repositorios ha borrado la configuración de directiva de {% data variables.product.prodname_actions %} de un repositorio.
| `repo.config`         | Un administrador de repositorios ha bloqueado las inserciones forzadas. Para más información, vea "[Bloqueo de inserciones forzadas en un repositorio](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)".
{%- ifversion fpt or ghec %} | `repo.config.disable_collaborators_only` | Se ha deshabilitado el límite de interacción solo para los colaboradores. Para más información, vea "[Limitación de las interacciones en el repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
| `repo.config.disable_contributors_only` | Se ha deshabilitado el límite de interacción solo para los colaboradores anteriores en un repositorio. Para más información, vea "[Limitación de las interacciones en el repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
| `repo.config.disable_sockpuppet_disallowed` | Se ha deshabilitado el límite de interacción solo para los usuarios existentes en un repositorio. Para más información, vea "[Limitación de las interacciones en el repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
| `repo.config.enable_collaborators_only` | Se ha habilitado el límite de interacción solo para los colaboradores en un repositorio. Los usuarios que no son colaboradores o miembros de la organización no podían interactuar con un repositorio durante un tiempo establecido. Para más información, vea "[Limitación de las interacciones en el repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
| `repo.config.enable_contributors_only` | Se ha habilitado el límite de interacción solo para los colaboradores anteriores en un repositorio. Los usuarios que no son colaboradores, colaboradores anteriores o miembros de la organización no podían interactuar con un repositorio durante un tiempo establecido. Para más información, vea "[Limitación de las interacciones en el repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
| `repo.config.enable_sockpuppet_disallowed` | Se ha habilitado el límite de interacción para los usuarios existentes en un repositorio. Los nuevos usuarios no pueden interactuar con un repositorio durante un tiempo establecido. Los usuarios existentes del repositorio, los colaboradores o los miembros de la organización pueden interactuar con un repositorio. Para más información, vea "[Limitación de las interacciones en el repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
{%- endif %} {%- ifversion ghes %} | `repo.config.disable_anonymous_git_access`| El acceso de lectura anónimo de Git se ha deshabilitado para un repositorio. Para más información, vea "[Habilitación del acceso de lectura anónimo de Git para un repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)".
| `repo.config.enable_anonymous_git_access` | Se ha habilitado el acceso de lectura anónimo de Git para un repositorio. Para más información, vea "[Habilitación del acceso de lectura anónimo de Git para un repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)".
| `repo.config.lock_anonymous_git_access` | Se ha bloqueado la configuración del acceso de lectura anónimo de Git de un repositorio, lo que impide que los administradores del repositorio cambien esta configuración (habilitándola o deshabilitándola). Para más información, vea "[Prevención del cambio del acceso de lectura anónimo de Git por parte de los usuarios](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)".
| `repo.config.unlock_anonymous_git_access` | Se ha desbloqueado la configuración del acceso de lectura anónimo de Git de un repositorio, lo que permite a los administradores del repositorio cambiar esta configuración (habilitándola o deshabilitándola). Para más información, vea "[Prevención del cambio del acceso de lectura anónimo de Git por parte de los usuarios](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)".
{%- endif %} | `repo.create` | Se ha creado un repositorio.
| `repo.create_actions_secret` | Se ha creado un secreto de {% data variables.product.prodname_actions %} para un repositorio. Para más información, vea "[Creación de secretos cifrados para un repositorio](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".
| `repo.create_integration_secret` | Se ha creado un secreto de integración de {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} o {% data variables.product.prodname_github_codespaces %}{% endif %} de un repositorio.
| `repo.destroy` | Se ha eliminado un repositorio.
{%- ifversion ghes %} | `repo.disk_archive`  | Se ha archivado un repositorio en el disco. Para más información, vea "[Archivado de repositorios](/repositories/archiving-a-github-repository/archiving-repositories)".
{%- endif %} | `repo.download_zip` | Un archivo de código fuente de un repositorio se ha descargado como un archivo ZIP.
| `repo.pages_cname` | Se ha modificado un dominio personalizado de {% data variables.product.prodname_pages %} en un repositorio.
| `repo.pages_create` | Se ha creado un sitio de {% data variables.product.prodname_pages %}.
| `repo.pages_destroy` | Se ha eliminado un sitio de {% data variables.product.prodname_pages %}.
| `repo.pages_https_redirect_disabled` | Las redirecciones HTTPS se han deshabilitado para un sitio de {% data variables.product.prodname_pages %}.
| `repo.pages_https_redirect_enabled` | Las redirecciones HTTPS se han habilitado para un sitio de {% data variables.product.prodname_pages %}.
| `repo.pages_source` | Se ha modificado un origen de {% data variables.product.prodname_pages %}.
| `repo.pages_private` | Se ha cambiado la visibilidad de un sitio de {% data variables.product.prodname_pages %} a privada.
| `repo.pages_public` | Se ha cambiado la visibilidad de un sitio de {% data variables.product.prodname_pages %} a pública.
| `repo.register_self_hosted_runner` | Se ha registrado un nuevo ejecutor autohospedado. Para más información, vea "[Adición de un ejecutor autohospedado a un repositorio](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)".
| `repo.remove_self_hosted_runner` | Se ha quitado un ejecutor autohospedado. Para más información, vea "[Eliminación de un ejecutor de un repositorio](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)".
| `repo.remove_actions_secret` | Se ha eliminado un secreto de {% data variables.product.prodname_actions %} para un repositorio.
| `repo.remove_integration_secret` | Se ha eliminado un secreto de integración de {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} o {% data variables.product.prodname_github_codespaces %}{% endif %} de un repositorio.
| `repo.remove_member` | Se ha quitado a un colaborador de un repositorio.
| `repo.remove_topic` | Se ha quitado un tema de un repositorio.
| `repo.rename` | Se ha cambiado el nombre de un repositorio.
{%- ifversion fpt or ghec %} | `repo.set_actions_fork_pr_approvals_policy` | La configuración para requerir aprobaciones para la ejecución de flujos de trabajo desde bifurcaciones públicas se ha cambiado para un repositorio. Para más información, vea "[Configuración de la aprobación necesaria para los flujos de trabajo de bifurcaciones públicas](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)".
{%- endif %} | `repo.set_actions_retention_limit` | Se ha cambiado el periodo de retención de los artefactos y los registros de {% data variables.product.prodname_actions %} en un repositorio. Para más información, vea "[Configuración del período de retención para los artefactos y los registros de {% data variables.product.prodname_actions %} en el repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)".
| `repo.self_hosted_runner_online` | Se inició la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `repo.self_hosted_runner_offline` | Se ha detenido la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `repo.self_hosted_runner_updated` | Se ha actualizado la aplicación del ejecutor. Se puede ver utilizando la API de REST y la IU; no se puede ver en la exportación de JSON/CSV. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners).
| `repo.staff_unlock` | Un administrador de empresa o un empleado de GitHub (con permiso de un administrador de repositorios) ha desbloqueado temporalmente el repositorio.
| `repo.transfer` | Un usuario ha aceptado una solicitud para recibir un repositorio transferido.
| `repo.transfer_outgoing` | Se ha transferido un repositorio a otra red de repositorios.
| `repo.transfer_start` | Un usuario ha enviado una solicitud para transferir un repositorio a otro usuario u organización.
| `repo.unarchived` | No se ha archivado un repositorio. Para más información, vea "[Archivado de un repositorio de {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)".
| `repo.update_actions_settings` | Un administrador de repositorios ha cambiado la configuración de directiva de {% data variables.product.prodname_actions %} de un repositorio.
| `repo.update_actions_secret` | Se ha actualizado un secreto de {% data variables.product.prodname_actions %}.
| `repo.update_actions_access_settings` | Se ha cambiado la configuración para controlar cómo han usado un repositorio los flujos de trabajo de {% data variables.product.prodname_actions %} en otros repositorios.
| `repo.update_default_branch` | Se ha cambiado la rama predeterminada de un repositorio.
| `repo.update_integration_secret` | Se ha actualizado un secreto de integración de {% data variables.product.prodname_dependabot %} o {% data variables.product.prodname_github_codespaces %} de un repositorio.
| `repo.update_member` | Se ha cambiado el permiso de un usuario para un repositorio.

{%- ifversion fpt or ghec %}
## Acciones de la categoría `repository_advisory`

| Acción | Descripción
|--------|-------------
| `repository_advisory.close` | Alguien ha cerrado un aviso de seguridad. Para más información, vea "[Acerca de los avisos de seguridad de {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
| `repository_advisory.cve_request` | Alguien ha solicitado un número de CVE (vulnerabilidades y exposiciones comunes) de {% data variables.product.prodname_dotcom %} para un borrador de un aviso de seguridad.
| `repository_advisory.github_broadcast` | {% data variables.product.prodname_dotcom %} ha publicado un aviso de seguridad en {% data variables.product.prodname_advisory_database %}.
| `repository_advisory.github_withdraw` | {% data variables.product.prodname_dotcom %} ha retirado un aviso de seguridad publicado por error.
| `repository_advisory.open` | Alguien ha abierto un borrador de un aviso de seguridad.
| `repository_advisory.publish` | Alguien ha publicado un aviso de seguridad.
| `repository_advisory.reopen` | Alguien ha reabierto un borrador de un aviso de seguridad.
| `repository_advisory.update` | Alguien ha editado un borrador o ha publicado un aviso de seguridad.

## Acciones de la categoría `repository_content_analysis`

| Acción | Descripción
|--------|-------------
| `repository_content_analysis.enable` | Un propietario de organización o un administrador de repositorios [ha habilitado la configuración de uso de datos para un repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
| `repository_content_analysis.disable` | Un propietario de organización o un administrador de repositorios [ha deshabilitado la configuración de uso de datos para un repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

## Acciones de la categoría `repository_dependency_graph`

| Acción | Descripción
|--------|-------------
| `repository_dependency_graph.disable` | Un propietario o administrador de repositorios ha deshabilitado el gráfico de dependencias de un repositorio privado. Para más información, vea "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
| `repository_dependency_graph.enable` | Un propietario o administrador de repositorios ha habilitado el gráfico de dependencias de un repositorio privado.
{%- endif %}

## Acciones de la categoría `repository_image`

| Acción | Descripción
|--------|-------------
| `repository_image.create` | Se ha cargado una imagen de representación de un repositorio.
| `repository_image.destroy` | Se ha eliminado una imagen de representación de un repositorio.

## Acciones de la categoría `repository_invitation`

| Acción | Descripción
|--------|-------------
| `repository_invitation.accept` | Se ha aceptado una invitación para unirse a un repositorio.
| `repository_invitation.create` | Se ha enviado una invitación para unirse a un repositorio.
| `repository_invitation.reject` | Se ha cancelado una invitación para unirse a un repositorio.

## Acciones de la categoría `repository_projects_change`

| Acción | Descripción
|--------|-------------
| `repository_projects_change.clear` | Se ha quitado la directiva de proyectos de repositorio para una organización o para todas las organizaciones de la empresa. Los administradores de la organización ahora pueden controlar la configuración de sus proyectos de repositorio. Para más información, consulta "[Requerir políticas para proyectos en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise)".
| `repository_projects_change.disable` | Los proyectos de repositorio se han deshabilitado para un repositorio, para todos los repositorios de una organización o para todas las organizaciones de una empresa.
| `repository_projects_change.enable` | Los proyectos de repositorio se han habilitado para un repositorio, para todos los repositorios de una organización o para todas las organizaciones de una empresa.

{%- ifversion ghec or ghes or ghae %}
## Acciones de la categoría `repository_secret_scanning`

| Acción | Descripción
|--------|-------------
| `repository_secret_scanning.disable` | Un propietario o administrador de repositorios ha deshabilitado el examen de secretos para un repositorio {% ifversion ghec %}privado o interno {% endif %}. Para más información, vea "[Acerca del examen de secretos](/github/administering-a-repository/about-secret-scanning)".
| `repository_secret_scanning.enable` | Un propietario o administrador de repositorios ha habilitado el examen de secretos para un repositorio {% ifversion ghec %}privado o interno {% endif %}.
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}

## Acciones de la categoría `repository_secret_scanning_custom_pattern`

| Acción | Descripción
|------------------|-------------------
| `repository_secret_scanning_custom_pattern.create` | Se ha publicado un patrón personalizado para el examen de secretos en un repositorio. Para más información, vea "[Definición de patrones personalizados para el examen de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)".
| `repository_secret_scanning_custom_pattern.delete` | Se ha quitado un patrón personalizado del examen de secretos en un repositorio. Para más información, vea "[Definición de patrones personalizados para el examen de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)".
| `repository_secret_scanning_custom_pattern.update` | Los cambios en un patrón personalizado se han guardado para el examen de secretos en un repositorio. Para más información, vea "[Definición de patrones personalizados para el examen de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)".

## Acciones de la categoría `repository_secret_scanning_push_protection`

| Acción | Descripción
|------------------|-------------------
| `repository_secret_scanning_push_protection.disable` | Un propietario o administrador de repositorios ha deshabilitado el examen de secretos para un repositorio. Para más información, vea "[Protección de inserciones para el examen de secretos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
| `repository_secret_scanning_push_protection.enable` | Un propietario o administrador de repositorios ha habilitado el examen de secretos para un repositorio. Para más información, vea "[Protección de inserciones para el examen de secretos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
{%- endif %}
## Acciones de la categoría `repository_visibility_change`

| Acción | Descripción
|--------|-------------
| `repository_visibility_change.clear` | Se ha borrado la configuración de cambio de visibilidad del repositorio para una organización o empresa. Para más información, vea "[Restricción de los cambios de visibilidad del repositorio en la organización](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)" y "[Aplicación de una directiva para los cambios en la visibilidad del repositorio](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-changes-to-repository-visibility) para una empresa".
| `repository_visibility_change.disable` | Se ha deshabilitado la capacidad para que los miembros de la empresa actualicen la visibilidad de un repositorio. Los miembros no pueden cambiar la visibilidad del repositorio en una organización o en todas las organizaciones de una empresa.
| `repository_visibility_change.enable` | Se ha habilitado la capacidad para que los miembros de la empresa actualicen la visibilidad de un repositorio. Los miembros pueden cambiar la visibilidad del repositorio en una organización o en todas las organizaciones de una empresa.

## Acciones de la categoría `repository_vulnerability_alert`

| Acción | Descripción
|--------|-------------
| `repository_vulnerability_alert.create` | {% data variables.product.product_name %} ha creado una alerta {% data variables.product.prodname_dependabot %} para un repositorio que usa una dependencia no segura. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)".
| `repository_vulnerability_alert.dismiss` | Un propietario de organización o un administrador de repositorios ha descartado una alerta {% data variables.product.prodname_dependabot %} sobre una dependencia vulnerable{% ifversion GH-advisory-db-supports-malware %} o malware{% endif %}.
| `repository_vulnerability_alert.resolve` | Alguien con acceso de escritura a un repositorio ha insertado cambios para actualizar y resolver una alerta {% data variables.product.prodname_dependabot %} en una dependencia de proyecto.

{%- ifversion fpt or ghec %}
## Acciones de la categoría `repository_vulnerability_alerts`

| Acción | Descripción
|--------|-------------
| `repository_vulnerability_alerts.authorized_users_teams` | Un propietario de organización o un administrador de repositorios ha actualizado la lista de personas o equipos autorizados para recibir {% data variables.product.prodname_dependabot_alerts %} en el repositorio. Para más información, vea "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
| `repository_vulnerability_alerts.disable` | Un propietario o un administrador de repositorios ha deshabilitado las {% data variables.product.prodname_dependabot_alerts %}.
| `repository_vulnerability_alerts.enable` | Un propietario o un administrador de repositorios ha habilitado las {% data variables.product.prodname_dependabot_alerts %}.
{%- endif %}

## Acciones de la categoría `required_status_check`

| Acción | Descripción
|--------|-------------
| `required_status_check.create` | Se ha marcado una comprobación de estado como necesaria para una rama protegida. Para más información, vea "[Requerimiento de comprobaciones de estado antes de la combinación](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)".
| `required_status_check.destroy` | Se ha dejado de marcar una comprobación de estado como necesaria para una rama protegida. Para más información, vea "[Requerimiento de comprobaciones de estado antes de la combinación](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)".

{%- ifversion ghec or ghes %}
## Acciones de la categoría `restrict_notification_delivery`

| Acción | Descripción
|--------|-------------
| `restrict_notification_delivery.enable` | Se han habilitado restricciones de notificación por correo electrónico para una organización o empresa. Para más información, vea "[Restricción de las notificaciones por correo electrónico para la organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)" y "[Restricción de las notificaciones por correo electrónico para la empresa](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)".
| `restrict_notification_delivery.disable` | Se han deshabilitado las restricciones de notificación por correo electrónico para una organización o empresa. Para más información, vea "[Restricción de las notificaciones por correo electrónico para la organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)" y "[Restricción de las notificaciones por correo electrónico para la empresa](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)".
{%- endif %}

{%- ifversion custom-repository-roles %}
## Acciones de la categoría `role`

| Acción | Descripción
|--------|-------------
|`create` | Un propietario de organización ha creado un nuevo rol de repositorio personalizado. Para más información, vea "[Administración de roles de repositorio personalizados para una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
|`destroy` | Un propietario de organización ha eliminado un rol de repositorio personalizado. Para más información, vea "[Administración de roles de repositorio personalizados para una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
|`update` | Un propietario de organización ha editado un rol de repositorio personalizado existente. Para más información, vea "[Administración de roles de repositorio personalizados para una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## Acciones de la categoría `secret_scanning`

| Acción | Descripción
|--------|-------------
| `secret_scanning.disable` | Un propietario de organización ha deshabilitado el examen de secretos para todos los repositorios existentes{% ifversion ghec %} privados o internos{% endif %}. Para más información, vea "[Acerca del examen de secretos](/github/administering-a-repository/about-secret-scanning)".
| `secret_scanning.enable` | Un propietario de organización ha habilitado el examen de secretos para todos los repositorios existentes{% ifversion ghec %} privados o internos{% endif %}.

{% ifversion secret-scanning-alert-audit-log %}
## Acciones de la categoría `secret_scanning_alert`

| Acción | Descripción
|------------------|-------------------
| `secret_scanning_alert.create` | {% data variables.product.prodname_dotcom %} detectó un secreto y creó una alerta {% data variables.product.prodname_secret_scanning %}. Para obtener más información, consulta "[Administración de alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".
| `secret_scanning_alert.reopen` | Un usuario ha vuelto a abrir una alerta {% data variables.product.prodname_secret_scanning %}.
| `secret_scanning_alert.resolve` | Un usuario resolvió una alerta {% data variables.product.prodname_secret_scanning %}.
{% endif %}

## Acciones de la categoría `secret_scanning_new_repos`

| Acción | Descripción
|--------|-------------
| `secret_scanning_new_repos.disable` | Un propietario de organización ha deshabilitado el examen de secretos para todos los repositorios nuevos{% ifversion ghec %} privados o internos{% endif %}. Para más información, vea "[Acerca del examen de secretos](/github/administering-a-repository/about-secret-scanning)".
| `secret_scanning_new_repos.enable` | Un propietario de organización ha habilitado el examen de secretos para todos los repositorios nuevos{% ifversion ghec %} privados o internos{% endif %}.
{%- endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
## Acciones de la categoría `secret_scanning_push_protection`

| Acción | Descripción
|--------|-------------
| `bypass` | Se desencadena cuando un usuario omite la protección contra inserciones en un secreto detectado por el examen de secretos. Para más información, consulta "[Omisión de la protección contra inserciones para un secreto](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)". {% endif %}

{%- ifversion ghec or ghes or ghae %}
## Acciones de la categoría `security_key`

| Acción | Descripción
|--------|-------------
| `security_key.register` | Se ha registrado una clave de seguridad para una cuenta.
| `security_key.remove` | Se ha quitado una clave de seguridad de una cuenta.
{%- endif %}

{%- ifversion fpt or ghec %}
## Acciones de la categoría `sponsors`

| Acción | Descripción
|--------|-------------
| `sponsors.agreement_sign` | Se ha firmado un acuerdo de {% data variables.product.prodname_sponsors %} en nombre de una organización.
| `sponsors.custom_amount_settings_change` | Se han habilitado o deshabilitado las cantidades personalizadas de {% data variables.product.prodname_sponsors %}, o bien se ha cambiado la cantidad personalizada sugerida. Para más información, vea "[Administración de los niveles de patrocinio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)".
| `sponsors.fiscal_host_change` | Se ha actualizado el host fiscal de una lista de {% data variables.product.prodname_sponsors %}.
| `sponsors.withdraw_agreement_signature` | Se ha retirado una firma de un contrato de {% data variables.product.prodname_sponsors %} que se aplica a una organización.
| `sponsors.repo_funding_links_file_action` | Se ha cambiado el archivo FUNDING de un repositorio. Para más información, vea "[Representación de un botón de patrocinador en el repositorio](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)".
| `sponsors.sponsor_sponsorship_cancel` | Se ha cancelado un patrocinio. Para más información, vea "[Cambio de un patrocinio a un nivel inferior](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)".
| `sponsors.sponsor_sponsorship_create` | Se ha creado un patrocinio, patrocinando una cuenta. Para más información, vea "[Patrocinio de un colaborador de código abierto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)".
| `sponsors.sponsor_sponsorship_payment_complete` | Después de patrocinar una cuenta y procesar un pago, el pago del patrocinio se ha marcado como completado. Para más información, vea "[Patrocinio de un colaborador de código abierto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)".
| `sponsors.sponsor_sponsorship_preference_change` | Se ha cambiado la opción de recibir actualizaciones por correo electrónico de una cuenta patrocinada. Para más información, vea "[Administración del patrocinio](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)".
| `sponsors.sponsor_sponsorship_tier_change` | Se ha cambiado un patrocinio a un nivel inferior o superior. Para más información, vea "[Cambio de un patrocinio a un nivel superior](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship)" y "[Cambio de un patrocinio a un nivel inferior](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)".
| `sponsors.sponsored_developer_approve` | Se ha aprobado una cuenta de {% data variables.product.prodname_sponsors %}. Para más información, vea "[Configuración de {% data variables.product.prodname_sponsors %} para la organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)".
| `sponsors.sponsored_developer_create` | Se ha creado una cuenta de {% data variables.product.prodname_sponsors %}. Para más información, vea "[Configuración de {% data variables.product.prodname_sponsors %} para la organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)".
| `sponsors.sponsored_developer_disable` | Se ha deshabilitado una cuenta de {% data variables.product.prodname_sponsors %}.
| `sponsors.sponsored_developer_profile_update` | Usted ha editado el perfil de una organización patrocinada. Para más información, vea "[Edición de los detalles del perfil para {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)".
| `sponsors.sponsored_developer_redraft` | Se ha devuelto una cuenta de {% data variables.product.prodname_sponsors %} del estado aprobado al estado de borrador.
| `sponsors.sponsored_developer_request_approval` | Se ha enviado una solicitud de {% data variables.product.prodname_sponsors %} para su aprobación. Para más información, vea "[Configuración de {% data variables.product.prodname_sponsors %} para la organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)".
| `sponsors.sponsored_developer_tier_description_update` | Se ha cambiado la descripción de un nivel de patrocinio. Para más información, vea "[Administración de los niveles de patrocinio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)".
| `sponsors.update_tier_welcome_message` | Se ha actualizado el mensaje de bienvenida de un nivel de {% data variables.product.prodname_sponsors %} para una organización.
| `sponsors.update_tier_repository` | Un nivel de {% data variables.product.prodname_sponsors %} ha cambiado el acceso a un repositorio.
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## Acciones de la categoría `ssh_certificate_authority`

| Acción | Descripción
|--------|-------------
| `ssh_certificate_authority.create` | Se ha creado una entidad de certificación SSH para una organización o empresa. Para más información, vea "[Administración de las entidades de certificación SSH de la organización](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" y "[Administración de las entidades de certificación SSH para la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)".
| `ssh_certificate_authority.destroy` | Se ha eliminado una entidad de certificación SSH de una organización o empresa. Para más información, vea "[Administración de las entidades de certificación SSH de la organización](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" y "[Administración de las entidades de certificación SSH para la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)".

## Acciones de la categoría `ssh_certificate_requirement`

| Acción | Descripción
|--------|-------------
| `ssh_certificate_requirement.enable` | Se ha habilitado el requerimiento de que los miembros usen certificados SSH para acceder a los recursos de una organización. Para más información, vea "[Administración de las entidades de certificación SSH de la organización](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" y "[Administración de las entidades de certificación SSH para la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)".
| `ssh_certificate_requirement.disable` | Se ha deshabilitado el requerimiento de que los miembros usen certificados SSH para acceder a los recursos de una organización. Para más información, vea "[Administración de las entidades de certificación SSH de la organización](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" y "[Administración de las entidades de certificación SSH para la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)".
{%- endif %}

{% ifversion sso-redirect %}
## Acciones de la categoría `sso_redirect`

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

| Acción | Descripción |
|--------|------------ |
`sso_redirect.enable` | Se habilitaron las redirecciones automáticas para que los usuarios utilicen el inicio de sesión único (SSO). |
`sso_redirect.disable` | Se deshabilitaron las redirecciones automáticas para que los usuarios utilicen el inicio de sesión único (SSO). |

Para obtener más información, consulte "[Aplicación de directivas de configuración de seguridad en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)".
{% endif %}

## Acciones de la categoría `staff`

| Acción | Descripción
|--------|-------------
| `staff.disable_repo`          | Un administrador de una organización{% ifversion ghes %}, un repositorio o un sitio{% else %} o un repositorio{% endif %} ha deshabilitado el acceso a un repositorio y a todas sus bifurcaciones.
| `staff.enable_repo`           | Un administrador de una organización{% ifversion ghes %}, un repositorio o un sitio{% else %} o un repositorio{% endif %} ha habilitado el acceso a un repositorio y a todas sus bifurcaciones.
{%- ifversion ghes or ghae %} | `staff.exit_fake_login`       | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha finalizado una sesión de suplantación en {% data variables.product.product_name %}.
| `staff.fake_login`            | Un propietario de empresa{% ifversion ghes %} o un administrador de sitio{% endif %} ha iniciado sesión en {% data variables.product.product_name %} como otro usuario.
{%- endif %} | `staff.repo_lock`             | Un administrador de una organización{% ifversion ghes %}, un repositorio o un sitio{% else %} o un repositorio{% endif %} ha bloqueado el repositorio privado de un usuario (es decir, ha obtenido acceso total a él temporalmente).
| `staff.repo_unlock`             | Un administrador de una organización{% ifversion ghes %}, un repositorio o un sitio{% else %} o un repositorio{% endif %} ha desbloqueado el repositorio privado de un usuario (es decir, ha finalizado su acceso temporal a él).
{%- ifversion ghes %} | `staff.search_audit_log` | Un administrador del sitio ha realizado una búsqueda del registro de auditoría del administrador del sitio.
{%- endif %} | `staff.set_domain_token_expiration` | {% ifversion ghes %}Un administrador de sitio o {% endif %}un empleado de GitHub ha establecido el tiempo de expiración del código de verificación para el dominio de una organización o empresa. {% ifversion ghec or ghes %}Para más información, consulta "[Comprobación o aprobación de un dominio para la organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" y "[Comprobación o aprobación de un dominio para la empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".{% endif %} {%- ifversion ghes %} | `staff.unlock`                | Un administrador del sitio ha desbloqueado (ha obtenido temporalmente acceso total a) todos los repositorios privados de un usuario.
{%- endif %} | `staff.unverify_domain` | {% ifversion ghes %} Un administrador de sitio o {% endif %}un empleado de GitHub no ha comprobado un dominio de organización o de empresa. {% ifversion ghec or ghes %}Para más información, consulta "[Comprobación o aprobación de un dominio para la organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" y "[Comprobación o aprobación de un dominio para la empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".{% endif %} | `staff.verify_domain` | {% ifversion ghes %}Un administrador del sitio o {% endif %}un empleado de GitHub ha comprobado un dominio de una organización o empresa. {% ifversion ghec or ghes %}Para más información, consulta "[Comprobación o aprobación de un dominio para la organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" y "[Comprobación o aprobación de un dominio para la empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".{% endif %} {%- ifversion ghes %} | `staff.view_audit_log` | Un administrador del sitio ha visto el registro de auditoría del administrador del sitio.
{%- endif %}

## Acciones de la categoría `team`

| Acción | Descripción
|--------|-------------
| `team.add_member` | Se ha agregado un miembro de una organización a un equipo. Para más información, vea "[Adición de miembros de la organización a un equipo](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)".
| `team.add_repository` | A un equipo se le han concedido permisos de un repositorio y acceso a este.
| `team.change_parent_team` | Se ha creado un equipo secundario o se ha cambiado el elemento primario de un equipo secundario. Para más información, vea "[Traslado de un equipo en la jerarquía de la organización](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)".
| `team.change_privacy` | Se ha cambiado el nivel de privacidad de un equipo. Para más información, vea "[Cambio de la visibilidad del equipo](/organizations/organizing-members-into-teams/changing-team-visibility)".
| `team.create` | Se agregó una cuenta de usuario o repositorio a un equipo.
| `team.delete` | Se eliminó una cuenta de usuario o repositorio de un equipo.
| `team.destroy` | Se eliminó un equipo.
{%- ifversion ghec or ghes or ghae %} | `team.demote_maintainer` | Un usuario ha sido degradado de mantenedor del equipo a miembro del equipo.
| `team.promote_maintainer` | Un usuario ha sido promocionado de miembro del equipo a mantenedor del equipo. Para más información, vea "[Promoción de un miembro de la organización a mantenedor de equipo](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member#promoting-an-organization-member-to-team-maintainer)".
{%- endif %} | `team.remove_member` | Se ha quitado a un miembro de una organización de un equipo. Para más información, vea "[Eliminación de miembros de la organización de un equipo](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team)".
| `team.remove_repository` | Un repositorio ha dejado de estar bajo el control de un equipo.
| `team.rename` | Se ha cambiado el nombre de un equipo.
| `team.update_permission` | Se ha cambiado el acceso de un equipo.
| `team.update_repository_permission` | Se ha cambiado el permiso de un equipo para un repositorio.

## Acciones de la categoría `team_discussions`

| Acción | Descripción
|--------|-------------
| `team_discussions.clear` | Un propietario de organización ha desactivado la configuración para permitir los debates de equipo en una organización o empresa.
| `team_discussions.disable` | Un propietario de organización ha deshabilitado los debates de equipo para una organización. Para más información, vea "[Deshabilitación de los debates de equipo para la organización](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization)".
| `team_discussions.enable` | Un propietario de organización ha habilitado los debates de equipo para una organización.

{%- ifversion ghec %}
## Acciones de la categoría `team_sync_tenant`

| Acción | Descripción
|--------|-------------
| `team_sync_tenant.disabled` | Se ha deshabilitado la sincronización de equipos con un inquilino. Para más información, vea "[Administración de la sincronización de equipos para la organización](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" y "[Administración de la sincronización de equipos para las organizaciones de la empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".
| `team_sync_tenant.enabled` | Se ha habilitado la sincronización de equipos con un inquilino. Para más información, vea "[Administración de la sincronización de equipos para la organización](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" y "[Administración de la sincronización de equipos para las organizaciones de la empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".
| `team_sync_tenant.update_okta_credentials` | Se han cambiado las credenciales de Okta para la sincronización de equipos con un inquilino.
{%- endif %}

{%- ifversion fpt or ghes %}
## Acciones de la categoría `two_factor_authentication`

| Acción | Descripción
|--------|-------------
| `two_factor_authentication.disabled` | Se ha deshabilitado la [autenticación en dos fases][2fa] para una cuenta de usuario.
| `two_factor_authentication.enabled`  | Se ha habilitado la [autenticación en dos fases][2fa] para una cuenta de usuario.
| `two_factor_authentication.password_reset_fallback_sms` | Se ha enviado un código de contraseña de un solo uso al número de teléfono de reserva de una cuenta de usuario.
| `two_factor_authentication.recovery_codes_regenerated` | Se han regenerado los códigos de recuperación de la autenticación en dos fases para una cuenta de usuario.
| `two_factor_authentication.sign_in_fallback_sms` | Se ha enviado un código de contraseña de un solo uso al número de teléfono de reserva de una cuenta de usuario.
| `two_factor_authentication.update_fallback` | Se ha cambiado el teléfono de reserva de la autenticación en dos fases para una cuenta de usuario.
{%- endif %}

  [2fa]: /authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication

{%- ifversion fpt or ghes or ghae %}
## Acciones de la categoría `user`

| Acción | Descripción
|--------|-------------
| `user.add_email`                  | Se agregó una dirección de correo electrónico a una cuenta de usuario.
| `user.async_delete`               | Se ha iniciado un trabajo asincrónico para destruir una cuenta de usuario y, finalmente, desencadenar un evento `user.delete`.
| `user.audit_log_export` | Se han exportado las entradas del registro de auditoría.
| `user.block_user` | Un usuario ha sido bloqueado por otro usuario{% ifversion ghes %} o un administrador de sitio{% endif %}.
| `user.change_password`            | Un usuario cambió su contraseña.
| `user.create`                     | Se creó una cuenta de usuario nueva.
| `user.creation_rate_limit_exceeded` | La tasa de creación de cuentas de usuario, aplicaciones, incidencias, solicitudes de incorporación de cambios u otros recursos ha superado los límites configurados o se ha seguido a demasiados usuarios demasiado rápido.
| `user.delete`                     | Se destruyó una cuenta de usuario mediante una tarea asincrónica.
{%- ifversion ghes %} | `user.demote`                     | Un administrador de sitio ha sido degradado a una cuenta de usuario normal.
{%- endif %} | `user.destroy`                    | Un usuario ha eliminado su cuenta, lo que ha desencadenado `user.async_delete`.
| `user.failed_login`               | Un usuario ha intentado iniciar sesión con un nombre de usuario, una contraseña o un código de autenticación en dos fases incorrectos.
| `user.flag_as_large_scale_contributor` | Una cuenta de usuario se ha marcado como colaborador a gran escala. Solo las contribuciones de repositorios públicos que posee el usuario se mostrarán en su gráfico de contribución, con el fin de evitar tiempos de espera.
| `user.forgot_password`            | Un usuario ha solicitado un restablecimiento de contraseña mediante la página de inicio de sesión.
| `user.hide_private_contributions_count` | Un usuario ha cambiado la visibilidad de sus contribuciones privadas. El número de contribuciones a repositorios privados en el perfil del usuario ahora está oculto. Para más información, vea "[Divulgación u ocultación de las contribuciones privadas en el perfil](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)".
| `user.lockout` | Un usuario ha sido bloqueado de su cuenta.
| `user.login`                      | Un usuario ha iniciado sesión.
{%- ifversion ghes or ghae %} | `user.mandatory_message_viewed`   | Un usuario ha visto un mensaje obligatorio. Para más información, vea "[Personalización de mensajes de usuario para la empresa](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise)".
{%- endif %} | `user.minimize_comment` | Se ha minimizado un comentario realizado por un usuario.
{%- ifversion ghes %} | `user.promote`                    | Se ha promocionado una cuenta de usuario normal a administrador de sitio.
{%- endif %} | `user.recreate` | Se ha restaurado la cuenta de un usuario.
| `user.remove_email`               | Se ha quitado una dirección de correo electrónico de una cuenta de usuario.
| `user.remove_large_scale_contributor_flag` | Una cuenta de usuario ha dejado de estar marcada como colaborador a gran escala.
| `user.rename`                     | Se ha cambiado un nombre de usuario.
| `user.reset_password` | Un usuario ha restablecido la contraseña de su cuenta.
| `user.show_private_contributions_count` | Un usuario ha cambiado la visibilidad de sus contribuciones privadas. El número de contribuciones a repositorios privados en el perfil del usuario ahora se muestra. Para más información, vea "[Divulgación u ocultación de las contribuciones privadas en el perfil](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)".
| `user.sign_in_from_unrecognized_device` | Un usuario ha iniciado sesión desde un dispositivo no reconocido.
| `user.sign_in_from_unrecognized_device_and_location` | Un usuario ha iniciado sesión desde un dispositivo y una ubicación no reconocidos.
| `user.sign_in_from_unrecognized_location` | Un usuario ha iniciado sesión desde una ubicación no reconocida.
| `user.suspend`                    | Un propietario de empresa {% ifversion ghes %} o un administrador de sitio{% endif %} ha suspendido una cuenta de usuario.
| `user.two_factor_challenge_failure` | Se ha producido un error en un desafío de autenticación en dos fases emitido para una cuenta de usuario.
| `user.two_factor_challenge_success` | Se ha superado con éxito un desafío de autenticación en dos fases emitido para una cuenta de usuario.
| `user.two_factor_recover` | Un usuario ha usado sus códigos de recuperación para la autenticación en dos fases.
| `user.two_factor_recovery_codes_downloaded` | Un usuario ha descargado los códigos de recuperación para la autenticación en dos fases de su cuenta.
| `user.two_factor_recovery_codes_printed` | Un usuario ha imprimido los códigos de recuperación para la autenticación en dos fases de su cuenta.
| `user.two_factor_recovery_codes_viewed` | Un usuario ha consultado los códigos de recuperación para la autenticación en dos fases de su cuenta.
| `user.two_factor_requested`       | Se ha solicitado un código de autenticación en dos fases a un usuario.
| `user.unblock_user` | Un usuario ha sido desbloqueado por otro usuario{% ifversion ghes %} o un administrador de sitio{% endif %}.
| `user.unminimize_comment` | Se ha maximizado un comentario realizado por un usuario.
| `user.unsuspend` | Un propietario de empresa {% ifversion ghes %} o un administrador de sitio{% endif %} ha anulado la suspensión de una cuenta de usuario.
{%- endif %}

{%- ifversion ghec or ghes %}
## Acciones de la categoría `user_license`

| Acción | Descripción
|--------|-------------
| `user_license.create` | Se ha creado una licencia de puesto para un usuario de una empresa.
| `user_license.destroy` | Se ha eliminado una licencia de puesto para un usuario de una empresa.
| `user_license.update` | Se ha cambiado una licencia de puesto para un usuario de una empresa.
{%- endif %}

## Acciones de la categoría `workflows`

{% data reusables.audit_log.audit-log-events-workflows %}
