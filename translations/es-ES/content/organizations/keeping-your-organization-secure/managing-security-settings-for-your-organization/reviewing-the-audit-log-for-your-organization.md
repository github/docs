---
title: Revisar el registro de auditoría de tu organización
intro: 'El registro de auditoría les permite a los administradores de la organización revisar rápidamente las acciones que realizaron los miembros de la organización. Incluye detalles como quién realizó la acción, de qué acción se trata y cuándo se realizó.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
  - /organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Review audit log
ms.openlocfilehash: 430cf928f91cad2851c9ad0c661f159177866463
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180681'
---
## Acceder al registro de auditoría

La bitácora de auditoría lista eventos que activan las actividades que afectan tu organización dentro del mes actual y los seis meses anteriores. Solo los propietarios pueden acceder al registro de auditoría de una organización.

{% data reusables.audit_log.only-three-months-displayed %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Buscar el registro de auditoría

{% data reusables.audit_log.audit-log-search %}

### Búsqueda basada en la acción realizada

Para buscar eventos específicos, usa el calificador `action` en la consulta. Las acciones detalladas en el registro de auditoría se agrupan dentro de las siguientes categorías:

| Nombre de categoría | Descripción |------------------|-------------------{% ifversion fpt or ghec %} | [`account`](#account-category-actions) | Contiene todas las actividades relacionadas con la cuenta de la organización.{% endif %}{% ifversion fpt or ghec %} | [`advisory_credit`](#advisory_credit-category-actions) | Contiene todas las actividades relacionadas con la acreditación de un colaborador para un aviso de seguridad en {% data variables.product.prodname_advisory_database %}. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_dotcom %} Avisos de seguridad](/github/managing-security-vulnerabilities/about-github-security-advisories)".{% endif %}{% ifversion pat-v2%} | [`auto_approve_personal_access_token_requests`](#auto_approve_personal_access_token_requests-category-actions) | Contiene actividades relacionadas con la directiva de aprobación de la organización para {% data variables.product.pat_v2 %}. Para obtener más información, consulta "[Establecimiento de una directiva de {% data variables.product.pat_generic %} para tu organización](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".{% endif %}{% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | Contiene todas las actividades relacionadas con la facturación de la organización.{% endif %}{% ifversion fpt or ghec %} | [`business`](#business-category-actions) | Contiene actividades relacionadas con la configuración del negocio de una empresa. |{% endif %}{% ifversion fpt or ghec %} | [`codespaces`](#codespaces-category-actions) | Contiene las todas actividades relacionadas con los codespaces de la organización. |{% endif %} | [`dependabot_alerts`](#dependabot_alerts-category-actions) | Contiene actividades de configuración a nivel de organización para {% data variables.product.prodname_dependabot_alerts %} en los repositorios existentes. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions) | Contiene las actividades de configuración de nivel de organización para {% data variables.product.prodname_dependabot_alerts %} en los repositorios nuevos creados en la organización.{% ifversion fpt or ghec or ghes %} | [`dependabot_security_updates`](#dependabot_security_updates-category-actions) | Contiene las actividades de configuración de nivel de organización para {% data variables.product.prodname_dependabot_security_updates %} en los repositorios existentes. Para obtener más información, consulta "[Configuración de {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)".
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions) | Contiene las actividades de configuración de nivel de organización para {% data variables.product.prodname_dependabot_security_updates %} para los repositorios nuevos creados en la organización.{% endif %}{% ifversion fpt or ghec %} | [`dependency_graph`](#dependency_graph-category-actions) | Contiene las actividades de configuración de nivel de organización para los gráficos de dependencias de los repositorios. Para obtener más información, consulta "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions) | Contiene actividades de configuración de nivel de organización para los nuevos repositorios creados en la organización.{% endif %} | [`discussion_post`](#discussion_post-category-actions) | Contiene todas las actividades relacionadas con las discusiones publicadas en una página de equipo.
| [`discussion_post_reply`](#discussion_post_reply-category-actions) | Contiene todas las actividades relacionadas con las respuestas a los debates publicados en una página de equipo.{% ifversion fpt or ghes or ghec %} | [`enterprise`](#enterprise-category-actions) | Contiene las actividades relacionadas con la configuración empresarial. |{% endif %} | [`hook`](#hook-category-actions) | Contiene todas las actividades relacionadas con los webhooks.
| [`integration_installation`](#integration_installation-category-actions) | Contiene las actividades relacionadas con las integraciones instaladas en una cuenta. | | [`integration_installation_request`](#integration_installation_request-category-actions) | Contiene todas las actividades relacionadas con las solicitudes de los miembros de la organización para que los propietarios aprueben las integraciones para el uso en la organización. |{% ifversion ghec or ghae %} | [`ip_allow_list`](#ip_allow_list-category-actions) | Contiene las actividades relacionadas con la habilitación o deshabilitación de la lista de direcciones IP permitidas de una organización.
| [`ip_allow_list_entry`](#ip_allow_list_entry-category-actions) | Contiene las actividades relacionadas con la creación, eliminación y edición de una entrada de lista de direcciones IP permitidas de una organización.{% endif %} | [`issue`](#issue-category-actions) | Contiene las actividades relacionadas con la eliminación de una incidencia. {% ifversion fpt or ghec %} | [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Contiene todas las actividades relacionadas con la firma del Acuerdo del desarrollador de {% data variables.product.prodname_marketplace %}.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Contiene todas las actividades relacionadas con la enumeración de aplicaciones en {% data variables.product.prodname_marketplace %}.{% endif %}{% ifversion fpt or ghes or ghec %} | [`members_can_create_pages`](#members_can_create_pages-category-actions) | Contiene todas las actividades relacionadas con la administración de la publicación de sitios de {% data variables.product.prodname_pages %} para los repositorios de la organización. Para obtener más información, consulta "[Administración de la publicación de sitios de {% data variables.product.prodname_pages %} para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)". | {% endif %} | [`org`](#org-category-actions) | Contiene las actividades relacionadas con la pertenencia a la organización.{% ifversion ghec %} | [`org_credential_authorization`](#org_credential_authorization-category-actions) | Contiene todas las actividades relacionadas con la autorización de credenciales para el uso con el inicio de sesión único SAML.{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`org_secret_scanning_custom_pattern`](#org_secret_scanning_custom_pattern-category-actions) | Contiene las actividades de nivel de organización relacionada con los patrones personalizados de análisis de secretos. Para obtener más información, consulta "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)". {% endif %} | [`organization_default_label`](#organization_default_label-category-actions) | Contiene todas las actividades relacionadas con las etiquetas predeterminadas para los repositorios de tu organización.
| [`oauth_application`](#oauth_application-category-actions) | Contiene todas las actividades relacionadas con las aplicaciones de OAuth.
| [`packages`](#packages-category-actions) | Contiene todas las actividades relacionadas con {% data variables.product.prodname_registry %}.{% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | Contiene todas las actividades relacionadas con la manera en que la organización paga GitHub.{% endif %}{% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | Contiene actividades relacionadas con {% data variables.product.pat_v2 %} de la organización. Para obtener más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".{% endif %} | [`profile_picture`](#profile_picture-category-actions) | Contiene todas las actividades relacionadas con la imagen de perfil de la organización.
| [`project`](#project-category-actions) | Contiene todas las actividades relacionadas con los paneles de proyecto.
| [`protected_branch`](#protected_branch-category-actions) | Contiene todas las actividades relacionadas con las ramas protegidas.
| [`repo`](#repo-category-actions) | Contiene las actividades relacionadas con los repositorios que son propiedad de la organización.{% ifversion fpt or ghec %} | [`repository_advisory`](#repository_advisory-category-actions) | Contiene las actividades de nivel de repositorio relacionadas con los avisos de seguridad en {% data variables.product.prodname_advisory_database %}.  Para obtener más información, consulta "[Acerca de los avisos de seguridad de {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
| [`repository_content_analysis`](#repository_content_analysis-category-actions) | Contiene todas las actividades relacionadas con la [habilitación o deshabilitación del uso de datos para un repositorio privado](/articles/about-github-s-use-of-your-data).{% endif %}{% ifversion fpt or ghec %} | [`repository_dependency_graph`](#repository_dependency_graph-category-actions) | Contiene las actividades de nivel de repositorio relacionadas con la habilitación o deshabilitación del gráfico de dependencias de un {% ifversion fpt or ghec %}repositorio {% endif %}privado. Para obtener más información, consulta "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."{% endif %}{% ifversion ghes or ghae or ghec %} | [`repository_secret_scanning`](#repository_secret_scanning-category-actions) | Contiene las actividades de nivel de repositorio relacionadas con el análisis de secretos. Para obtener más información, consulta "[Acerca del análisis de secretos](/github/administering-a-repository/about-secret-scanning)". {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_custom_pattern`](#repository_secret_scanning_custom_pattern-category-actions) | Contiene las actividades de nivel de repositorio relacionadas con los patrones personalizados de análisis de secretos. Para más información, vea "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)". {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_push_protection`](#repository_secret_scanning_push_protection-category-actions) | Contiene las actividades de nivel de repositorio relacionadas con los patrones personalizados de análisis de secretos. Para más información, vea "[Protección de inserciones para el examen de secretos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)". {% endif %} | [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions) | Contiene todas las actividades relacionadas con [{% data variables.product.prodname_dependabot_alerts %} ](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).{% ifversion fpt or ghec %} | [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions) | Contiene las actividades de nivel de repositorio para {% data variables.product.prodname_dependabot_alerts %}.{% endif %}{% ifversion custom-repository-roles %} | [`role`](#role-category-actions) | Contiene todas las actividades relacionadas con [roles de repositorio personalizados](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).{% endif %}{% ifversion ghes or ghae or ghec %} | [`secret_scanning`](#secret_scanning-category-actions) | Contiene las actividades de configuración de nivel de organización para el análisis de secretos en los repositorios existentes. Para obtener más información, consulta "[Acerca del análisis de secretos](/github/administering-a-repository/about-secret-scanning)".
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions) | Contiene las actividades de configuración a nivel de organización para el análisis de secretos para los repositorios nuevos que se crean en ella. {% endif %}{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | Contiene todos los eventos relacionados con los botones de patrocinador (consulta "[Mostrar un botón de patrocinador en el repositorio](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %} | [`team`](#team-category-actions) | Contiene todas las actividades relacionadas con los equipos de la organización.
| [`team_discussions`](#team_discussions-category-actions) | Contiene las actividades relacionadas con la administración de debates de equipo para una organización.
| [`workflows`](#workflows-category-actions) | Contiene actividades relacionadas con los flujos de trabajo de las {% data variables.product.prodname_actions %}.

Puedes buscar conjuntos específicos de acciones utilizando estos términos. Por ejemplo:

  * `action:team` busca todos los eventos agrupados dentro de la categoría de equipo.
  * `-action:hook` excluye todos los eventos de la categoría de webhook.

Cada categoría tiene un conjunto de acciones asociadas que puedes filtrar. Por ejemplo:

  * `action:team.create` busca todos los eventos en los que se ha creado un equipo.
  * `-action:hook.events_changed` excluye todos los eventos en los que se han modificado los eventos de un webhook.

### Búsqueda basada en el momento de la acción

Use el calificador `created` para filtrar los eventos del registro de auditoría en función de cuándo se hayan producido. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Por ejemplo:

  * `created:2014-07-08` busca todos los eventos que se han producido el 8 de julio de 2014.
  * `created:>=2014-07-08` busca todos los eventos que se han producido el 8 de julio de 2014 o después.
  * `created:<=2014-07-08` busca todos los eventos que se han producido el 8 de julio de 2014 o antes.
  * `created:2014-07-01..2014-07-31` busca todos los eventos que se han producido durante el mes de julio de 2014.

{% note %}

**Nota**: El registro de auditoría contiene datos para el mes actual y todos los días de los seis meses anteriores.

{% endnote %}

### Búsqueda basada en la ubicación

Con el calificador `country`, puede filtrar los eventos del registro de auditoría en función del país de origen. Puedes utilizar un código corto de dos letras del país o el nombre completo. Ten presente que los países con espacios en sus nombres se deben poner entre comillas. Por ejemplo:

  * `country:de` busca todos los eventos que se han producido en Alemania.
  * `country:Mexico` busca todos los eventos que se han producido en México.
  * `country:"United States"` busca todos los eventos que se han producido en Estados Unidos.

{% ifversion fpt or ghec %}
## Exportar el registro de auditoría

{% data reusables.audit_log.export-log %}

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %} {% endif %}

## Utilizar la API de bitácoras de auditoría

{% ifversion fpt %}

Las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} pueden interactuar con el registro de auditoría mediante GraphQL API y la API REST. Para obtener más información, consulte la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api).

{% else %}

Puedes interactuar con el registro de auditoría mediante GraphQL API{% ifversion fpt or ghec %} o la API REST{% endif %}.{% ifversion read-audit-scope %} Puedes usar el ámbito `read:audit_log` para acceder al registro de auditoría a través de las API.{% endif %}

{% ifversion ghec %}

{% note %}

**Nota:** Para utilizar la API del registro de auditoría, la organización debe usar {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

### Utilizar la API de GraphQL

{% endif %}

Para garantizar la protección de la propiedad intelectual y que se mantiene el cumplimiento de la organización, puedes usar la API de GraphQL del registro de auditoría para el mantenimiento de copias de los datos del registro de auditoría y la supervisión: {% data reusables.audit_log.audit-log-api-info %}

{% ifversion ghec %} Ten en cuenta que no puedes recuperar los eventos de Git mediante GraphQL API. Para recuperar eventos de Git, utiliza mejor la API de REST. Para obtener más información, consulta "[Acciones de la categoría `git`](#git-category-actions)".
{% endif %}

La respuesta de GraphQL puede incluir datos de hasta 90 a 120 días.

Por ejemplo, puedes hacer una solicitud de GraphQL para ver todos los miembros nuevos de la organización agregados a tu organización. Para obtener más información, consulta "[Registro de auditoría de la API de GraphQL](/graphql/reference/interfaces#auditentry/)".

{% ifversion ghec %}

### Mediante la API de REST

Para garantizar la protección de la propiedad intelectual y que se mantiene el cumplimiento de la organización, puedes usar la API de REST del registro de auditoría para el mantenimiento de copias de los datos del registro de auditoría y la supervisión: {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.audit-log-git-events-retention %}

De manera predeterminada, solo se devuelven los eventos de los últimos tres meses. Para incluir eventos anteriores, debes especificar una marca de tiempo en la consulta.

Para obtener más información sobre la API de REST del registro de auditoría, consulta "[Organizaciones](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

{% endif %} {% endif %}

## Acciones de la bitácora de auditoría

Un resumen de algunas de las acciones más comunes que se registran como eventos en la bitácora de auditoría.

{% ifversion fpt or ghec %}
### Acciones de la categoría `account`

| Acción | Descripción
|------------------|-------------------
| `billing_plan_change` | Se desencadena cuando cambia el [período de facturación](/articles/changing-the-duration-of-your-billing-cycle) de una organización.
| `plan_change` | Se desencadena cuando cambia la [suscripción](/articles/about-billing-for-github-accounts) de una organización.
| `pending_plan_change` | Se desencadena cuando el propietario o el administrador de facturación de una organización [cancela una suscripción de pago o la cambia a una categoría inferior](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/).
| `pending_subscription_change` | Se desencadena cuando [empieza o expira una prueba gratuita de {% data variables.product.prodname_marketplace %}](/articles/about-billing-for-github-marketplace/).
{% endif %}

{% ifversion fpt or ghec %}
### Acciones de la categoría `advisory_credit`

| Acción | Descripción
|------------------|-------------------
| `accept` | Se activa cuando alguien acepta el crédito de una asesoría de seguridad. Para obtener más información, consulta "[Edición de un aviso de seguridad](/github/managing-security-vulnerabilities/editing-a-security-advisory)".
| `create` | Se activa cuando el administrador de una asesoría de seguridad agrega a alguien a la sección de crédito.
| `decline` | Se activa cuando alguien rechaza el crédito para una asesoría de seguridad.
| `destroy` | Se activa cuando el administrador de una asesoría de seguridad elimina a alguien de la sección de crédito.
{% endif %}

{% ifversion pat-v2 %}

### Acciones de la categoría `auto_approve_personal_access_token_requests`

| Acción | Descripción
|------------------|-------------------
| `disable` | Se desencadena cuando la organización debe aprobar {% data variables.product.pat_v2 %} antes de que los tokens puedan acceder a los recursos de la organización. Para obtener más información, consulta "[Configuración de una directiva de {% data variables.product.pat_generic %} para la organización](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".
| `enable` | Se desencadena cuando {% data variables.product.pat_v2 %} pueden acceder a los recursos de la organización sin aprobación previa. Para obtener más información, consulta "[Configuración de una directiva de {% data variables.product.pat_generic %} para la organización](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".

{% endif %}

{% ifversion fpt or ghec %}
### Acciones de la categoría `billing`

| Acción | Descripción
|------------------|-------------------
| `change_billing_type` | Se desencadena cuando la organización [cambia la forma en que paga {% data variables.product.prodname_dotcom %}](/articles/adding-or-editing-a-payment-method).
| `change_email` | Se desencadena cuando cambia la [dirección de correo electrónico de facturación](/articles/setting-your-billing-email) de la organización.
{% endif %}

### Acciones de la categoría `business`

| Acción | Descripción |------------------|-------------------{% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | Se desencadena cuando cambia la configuración para las aprobaciones necesarias para los flujos de trabajo desde las bifurcaciones públicas de una empresa. Para obtener más información, consulta "[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)."{% endif %} | `set_actions_retention_limit` | Se desencadena cuando cambia el período de retención de los artefactos y registros de {% data variables.product.prodname_actions %} de una empresa. Para obtener más información, consulta "[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)."{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | Se desencadena cuando cambia la directiva para los flujos de trabajo del repositorio privado. Para obtener más información, consulta "{% ifversion fpt or ghec%}[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Habilitación de flujos de trabajo para las bifurcaciones del repositorio privado](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}."{% endif %}

{% ifversion fpt or ghec %}
### Acciones de la categoría `codespaces`

| Acción | Descripción
|------------------|-------------------
| `create` | Se desencadena cuando un usuario [crea un codespace](/github/developing-online-with-codespaces/creating-a-codespace).
| `resume` | Se activa cuando un usuario reanuda un codesapce suspendido.
| `delete` | Se desencadena cuando un usuario [elimina un codespace](/github/developing-online-with-codespaces/deleting-a-codespace).
| `create_an_org_secret` | Se desencadena cuando un usuario crea un [secreto a nivel de organización para {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `update_an_org_secret` | Se desencadena cuando un usuario actualiza un [secreto a nivel de organización para {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `remove_an_org_secret` | Se desencadena cuando un usuario quita un [secreto a nivel de organización para {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `manage_access_and_security` | Se desencadena cuando un usuario actualiza [los repositorios a los que puede acceder un codespace](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
{% endif %}

### Acciones de la categoría `dependabot_alerts`

| Acción | Descripción
|------------------|-------------------
| `disable` | Se activa cuando un propietario de organización inhabilita las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios {% ifversion fpt or ghec %}privados {% endif %}existentes. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `enable` | Se activa cuando un propietario de la organización habilita las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios {% ifversion fpt or ghec %}privados {% endif %} existentes.

### Acciones de la categoría `dependabot_alerts_new_repos`

| Acción | Descripción
|------------------|-------------------
| `disable` | Se activa cuando el propietario de una organización inhabilita las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios {% ifversion fpt or ghec %}privados {% endif %} nuevos. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `enable` | Se activa cuando un propietario de organización habilita las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios {% ifversion fpt or ghec %}privados {% endif %}nuevos.

{% ifversion fpt or ghec or ghes %}
### Acciones de la categoría `dependabot_security_updates`

| Acción | Descripción
|------------------|-------------------
| `disable` | Se activa cuando un propietario de la organización inhabilita las {% data variables.product.prodname_dependabot_security_updates %} para todos los repositorios existentes. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `enable` | Se activa cuando un propietario de organización habilita las {% data variables.product.prodname_dependabot_security_updates %} para todos los repositorios existentes.

### Acciones de la categoría `dependabot_security_updates_new_repos`

| Acción | Descripción
|------------------|-------------------
| `disable` | Se activa cuando un propietario de la organización inhabilita las {% data variables.product.prodname_dependabot_security_updates %} para todos los repositorios nuevos. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `enable` | Se activa cuando un propietario de la organización habilita las {% data variables.product.prodname_dependabot_security_updates %} para todos los repositorios nuevos.
{% endif %}

{% ifversion fpt or ghec %}
### Acciones de la categoría `dependency_graph`

| Acción | Descripción
|------------------|-------------------
| `disable` | Se activa cuando un propietario de la organización inhabilita la gráfica de dependencias para todos los repositorios existentes. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `enable` | Se activa cuando un propietario de la organización habilita la gráfica de dependencias para todos los repositorios existentes.

### Acciones de la categoría `dependency_graph_new_repos`

| Acción | Descripción
|------------------|-------------------
| `disable` | Se activa cuando un propietario de la organización inhabilita la gráfica de dependencias para todos los repositorios nuevos. Para más información, vea "[Administración de la configuración de seguridad y análisis para la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
| `enable` | Se activa cuando un propietario de la organización habilita la gráfica de dependencias para todos los repositorios nuevos.
{% endif %}

### Acciones de la categoría `discussion_post`

| Acción | Descripción
|------------------|-------------------
| `update` | Se desencadena cuando [se edita una publicación de debate de un equipo](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Se desencadena cuando [se elimina una publicación de debate de un equipo](/articles/managing-disruptive-comments/#deleting-a-comment).

### Acciones de la categoría `discussion_post_reply`

| Acción | Descripción
|------------------|-------------------
| `update` | Se desencadena cuando [se edita una respuesta a una publicación de debate de un equipo](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Se desencadena cuando [se elimina una respuesta a una publicación de debate de un equipo](/articles/managing-disruptive-comments/#deleting-a-comment).

{% ifversion fpt or ghes or ghec %}
### Acciones de la categoría `enterprise`

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% ifversion fpt or ghec %}
### Acciones de la categoría `environment`

| Acción | Descripción
|------------------|-------------------
| `create_actions_secret` | Se activa cuando se crea un secreto en un ambiente. Para más información, vea "[Secretos de entorno](/actions/reference/environments#environment-secrets)".
| `delete` | Se activa cuando se borra un ambiente. Para más información, vea "[Eliminación de un entorno](/actions/reference/environments#deleting-an-environment)".
| `remove_actions_secret` |  Se activa cuando se elimina a un secreto de un ambiente. Para más información, vea "[Secretos de entorno](/actions/reference/environments#environment-secrets)".
| `update_actions_secret` | Se activa cuando se actualiza a un secreto en un ambiente. Para más información, vea "[Secretos de entorno](/actions/reference/environments#environment-secrets)".
{% endif %}

{% ifversion ghae %}
### Acciones de la categoría `external_group`

{% data reusables.saml.external-group-audit-events %}

{% endif %}

{% ifversion ghae %}
### Acciones de la categoría `external_identity`

{% data reusables.saml.external-identity-audit-events %}

{% endif %}

{% ifversion fpt or ghec %}
### Acciones de la categoría `git`

{% note %}

**Nota:** Para acceder a los eventos de Git en el registro de auditoría, debes usar la API de REST del registro de auditoría. La API de REST de la bitácora de auditoría se encuentra disponible únicamente para los usuarios de {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta "[Organizaciones](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| Acción  | Descripción
|---------|----------------------------
| `clone` | Se activa cuando se clona un repositorio.
| `fetch` | Se activa cuando se recuperan cambios de un repositorio.
| `push`  | Se activa cuando se suben cambios a un repositorio.

{% endif %}

### Acciones de la categoría `hook`

| Acción | Descripción
|------------------|-------------------
| `create` | Se desencadena cuando [se agrega un nuevo enlace](/articles/creating-webhooks) a un repositorio que pertenece a la organización.
| `config_changed` | Se activa cuando se modifica la configuración de un enlace existente.
| `destroy` | Se activa cuando se eliminó un enlace existente de un repositorio.
| `events_changed` | Se activa cuando se modificaron los eventos en un enlace.

### Acciones de la categoría `integration_installation`

| Acción | Descripción
|--------|-------------
| `contact_email_changed` | Se ha cambiado un correo electrónico de contacto para una integración.
| `create` | Se ha instalado una integración.
| `destroy` | Se ha desinstalado una integración.
| `repositories_added` | Se han agregado repositorios a una integración.
| `repositories_removed` | Se han quitado repositorios de una integración.
{%- ifversion fpt or ghec %} | `suspend` | Se ha suspendido una integración.
| `unsuspend` | Se ha anulado la suspensión de una integración.
{%- endif %} | `version_updated` | Se han actualizado los permisos de una integración.

### Acciones de la categoría `integration_installation_request`

| Acción | Descripción
|------------------|-------------------
| `create` | Se activa cuando un miembro de la organización solicita que un propietario de la organización instale una integración para utilizar en la organización.
| `close` | Se activa cuando un propietario de la organización aprueba o rechaza una solicitud para instalar una integración para que se utilice en una organización, o cuando la cancela el miembro de la organización que abrió la solicitud.

{% ifversion ghec or ghae %}
### Acciones de la categoría `ip_allow_list`

| Acción | Descripción
|------------------|-------------------
| `enable` | Se activa cuando se habilita una lista de direcciones IP permitidas para una organización.
| `disable` | Se activa cuando se inhabilita una lista de direcciones IP permitidas para una organización.
| `enable_for_installed_apps` | Se activa cuando una lista de IP permitidas se habilitó para las {% data variables.product.prodname_github_apps %} instaladas.
| `disable_for_installed_apps` | Se activa cuando se inhabilitó una lista de direcciones IP permitidas para las {% data variables.product.prodname_github_apps %} instaladas.

### Acciones de la categoría `ip_allow_list_entry`

| Acción | Descripción
|------------------|-------------------
| `create` | Se activa cuando una dirección IP se agregó a una lista de direcciones IP permitidas.
| `update` | Se activa cuando una dirección IP o su descripción se cambió.
| `destroy` | Se activa cuando una dirección IP se eliminó de una lista de direcciones IP permitidas.
{% endif %}

### Acciones de la categoría `issue`

| Acción | Descripción
|------------------|-------------------
| `destroy`        | Se activa cuando un propietario de la organización o alguna persona con permisos de administrador en un repositorio elimina una propuesta de un repositorio que le pertenece a la organización.

{% ifversion fpt or ghec %}

### Acciones de la categoría `marketplace_agreement_signature`

| Acción | Descripción
|------------------|-------------------
| `create` | Se activa cuando firmas el {% data variables.product.prodname_marketplace %} Acuerdo del programador.

### Acciones de la categoría `marketplace_listing`

| Acción | Descripción
|------------------|-------------------
| `approve` | Se activa cuando se aprueba tu lista para ser incluida en {% data variables.product.prodname_marketplace %}.
| `create` | Se activa cuando creas una lista para tu app en {% data variables.product.prodname_marketplace %}.
| `delist` | Se activa cuando se elimina tu lista de {% data variables.product.prodname_marketplace %}.
| `redraft` | Se activa cuando tu lista se vuelve a colocar en estado de borrador.
| `reject` | Se activa cuando no se acepta la inclusión de tu lista en {% data variables.product.prodname_marketplace %}.

{% endif %}

{% ifversion fpt or ghes or ghec %}

### Acciones de la categoría `members_can_create_pages`

Para obtener más información, consulta "[Administración de la publicación de sitios de {% data variables.product.prodname_pages %} para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".

| Acción | Descripción |
| :- | :- |
| `enable` | Se activa cuando el propietario de una organización habilita la publicación de sitios de {% data variables.product.prodname_pages %} para los repositorios en la organización. |
| `disable` | Se activa cuando el propietario de una organización inhabilita la publicación de sitios de {% data variables.product.prodname_pages %} para los repositorios en la organización. |

{% endif %}

### Acciones de la categoría `oauth_application`

| Acción | Descripción
|------------------|-------------------
| `create` | Se activa cuando se crea una {% data variables.product.prodname_oauth_app %} nueva.
| `destroy` | Se activa cuando se elimina una {% data variables.product.prodname_oauth_app %} existente.
| `reset_secret` | Se activa cuando se restablece un secreto de cliente de {% data variables.product.prodname_oauth_app %}.
| `revoke_tokens` | Se activa cuando se revocan los tokens de usuario de una {% data variables.product.prodname_oauth_app %}.
| `transfer` |  Se activa cuando se transfiere una {% data variables.product.prodname_oauth_app %} existente a una organización nueva.

### Acciones de la categoría `org`

| Acción | Descripción
|------------------|-------------------
| `add_member` | Se desencadena cuando un usuario se une a una organización.
| `advanced_security_policy_selected_member_disabled` | Se activa cuando un propietario de empresa previene que las carcaterísticas de la {% data variables.product.prodname_GH_advanced_security %} se habiliten para los repositorios que pertenecen a la organización. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled` | Se activa cuando un propietario de empresa permite que se habiliten las características de la {% data variables.product.prodname_GH_advanced_security %} en los repositorios que pertenecen a la organización. {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% ifversion fpt or ghec %}
| `audit_log_export` | Se desencadena cuando el administrador de una organización [crea una exportación del registro de auditoría de la organización](#exporting-the-audit-log). Si la exportación incluía una consulta, el registro detallará la consulta utilizada y la cantidad de entradas en el registro de auditoría que coinciden con esa consulta.
| `block_user` | Se desencadena cuando el propietario de una organización [bloquea el acceso de un usuario a los repositorios de la organización](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).
| `cancel_invitation` | Se activa cuando se revocó una invitación de la organización. {% endif %}{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` | Se activa cuando un secreto de {% data variables.product.prodname_actions %} se crea para una organización. Para obtener más información, consulta "[Creación de secretos cifrados para una organización](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)."{% endif %} {% ifversion fpt or ghec %}
| `disable_oauth_app_restrictions` | Se desencadena cuando un propietario [deshabilita las restricciones de acceso de {% data variables.product.prodname_oauth_app %}](/articles/disabling-oauth-app-access-restrictions-for-your-organization) para la organización.{% ifversion ghec %}
| `disable_saml` | Se activa cuando un administrador de la organización inhabilita el inicio de sesión único SAML para una organización.{% endif %}{% endif %}
| `disable_member_team_creation_permission` | Se activa cuando un propietario de la organización limita la creación de equipos para los propietarios. Para obtener más información, consulta "[Configuración de permisos de creación de equipos en la organización](/articles/setting-team-creation-permissions-in-your-organization)". |{% ifversion not ghae %}
| `disable_two_factor_requirement` | Se activa cuando un propietario inhabilita el requisito de autenticación bifactorial para todos los miembros{% ifversion fpt or ghec %}, gerentes de facturación, {% endif %} y colaboradores externos en una organización.{% endif %}{% ifversion fpt or ghec %}
| `enable_oauth_app_restrictions` | Se desencadena cuando un propietario [habilita las restricciones de acceso de {% data variables.product.prodname_oauth_app %}](/articles/enabling-oauth-app-access-restrictions-for-your-organization) para la organización.{% ifversion ghec %}
| `enable_saml` | Se desencadena cuando el administrador de una organización [habilita el inicio de sesión único SAML](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) para una organización.{% endif %}{% endif %}
| `enable_member_team_creation_permission` | Se activa cuando un propietario de la organización permite que los miembros creen equipos. Para obtener más información, consulta "[Configuración de permisos de creación de equipos en la organización](/articles/setting-team-creation-permissions-in-your-organization)". |{% ifversion not ghae %}
| `enable_two_factor_requirement` | Se activa cuando un propietario requiere la autenticación bifactorial para todos los miembros{% ifversion fpt or ghec %}, gerentes de facturación{% endif %} y colaboradores externos en una organización.{% endif %}{% ifversion fpt or ghec %}
| `invite_member` | Se desencadena cuando [se invita a un nuevo usuario a unirse a la organización](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).
| `oauth_app_access_approved` | Se desencadena cuando un propietario [concede acceso a la organización a un {% data variables.product.prodname_oauth_app %}](/articles/approving-oauth-apps-for-your-organization/).
| `oauth_app_access_denied` | Se desencadena cuando un propietario [deshabilita un acceso de {% data variables.product.prodname_oauth_app %} aprobado anteriormente](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization) a la organización.
| `oauth_app_access_requested` | Se activa cuando un miembro de la organización solicita que un propietario otorgue un acceso de {% data variables.product.prodname_oauth_app %} para tu organización.{% endif %}
{%- ifversion ghec %} | `org.transfer` | Se activa cuando se transfiere una organización entre cuentas de empresa. Para obtener más información, consulta "[Transferencia de una organización entre cuentas de empresa](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts)".
{%- endif %} | `register_self_hosted_runner` | Se desencadena cuando se registra un ejecutor auto-hospedado nuevo. Para más información, vea "[Adición de un ejecutor autohospedado a una organización](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)".
| `remove_actions_secret` | Se activa cuando se elimina un secreto de {% data variables.product.prodname_actions %}. {% ifversion fpt or ghec %} | `remove_billing_manager` | Se activa cuando un [propietario elimina un administrador de facturación de una organización](/articles/removing-a-billing-manager-from-your-organization/) o cuando [se requiere la autenticación en dos fases en una organización](/articles/requiring-two-factor-authentication-in-your-organization) y un administrador de facturación no usa la 2FA o la deshabilita. |{% endif %} | `remove_member` | Se activa cuando un [propietario elimina un miembro de una organización](/articles/removing-a-member-from-your-organization/){% ifversion not ghae %} o cuando se requiere la [autenticación en dos fases en una organización](/articles/requiring-two-factor-authentication-in-your-organization) y un miembro de la organización no usa la 2FA o la deshabilita{% endif %}. También se activa cuando un [miembro de una organización se elimina](/articles/removing-yourself-from-an-organization/) de ella.| | `remove_outside_collaborator` | Se activa cuando un propietario elimina a un colaborador externo de una organización{% ifversion not ghae %} o cuando [se requiere la autenticación en dos fases en una organización](/articles/requiring-two-factor-authentication-in-your-organization) y un colaborador externo no usa la 2FA o la deshabilita{% endif %}. | | `remove_self_hosted_runner` | Se activa cuando se elimina un ejecutor autohospedado. Para más información, vea "[Eliminación de un ejecutor de una organización](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)". {% ifversion ghec %} | `revoke_external_identity` | Se activa cuando un dueño de una organización retira la identidad vinculada de un miembro. Para más información, vea "[Visualización y administración del acceso SAML de un miembro a la organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".
| `revoke_sso_session` | Se activa cuando el dueño de una organización retira la sesión de SAML de un miembro. Para más información, vea "[Visualización y administración del acceso SAML de un miembro a la organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)". {% endif %} | `runner_group_created` | Se activa cuando se crea un grupo de ejecutores autohospedados. Para más información, vea "[Creación de un grupo de ejecutores autohospedados para una organización](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)".
| `runner_group_removed` | Se activa cuando se elimina un grupo de ejecutores autohospedado. Para más información, vea "[Eliminación de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)".
| `runner_group_updated` | Se activa cuando se cambia la configuración de un grupo de ejecutores autohospedados. Para más información, vea "[Cambio de la directiva de acceso de un grupo de ejecutores autohospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".
| `runner_group_runners_added` | Se activa cuando se agrega un ejecutor autohospedado a un grupo. Para más información, vea "[Adición de un ejecutor autohospedado a un grupo](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)".
| `runner_group_runner_removed` |  Se activa cuando se utiliza la API de REST para eliminar un ejecutor autohospedado de un grupo. Para más información, vea "[Eliminación de un ejecutor autohospedado de un grupo en una organización](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)".
| `runner_group_runners_updated`|  Se activa cuando se actualiza la lista de miembros de un grupo de ejecutores. Para más información, vea "[Establecimiento de los ejecutores autohospedados en un grupo para una organización](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)".
{%- ifversion code-security-audit-log-events %} | `secret_scanning_push_protection_custom_message_disabled` | Se desencadena cuando un propietario o administrador de la organización deshabilita el mensaje personalizado que desencadena un intento de inserción en un repositorio protegido contra inserciones. Para más información, vea "[Protección de inserciones con {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)".
| `secret_scanning_push_protection_custom_message_enabled` | Se desencadena cuando un propietario o administrador de la organización habilita el mensaje personalizado que desencadena un intento de inserción en un repositorio protegido contra inserciones. Para más información, vea "[Protección de inserciones con {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)".
| `secret_scanning_push_protection_custom_message_updated` | Se desencadena cuando un propietario o administrador de la organización actualiza el mensaje personalizado que desencadena un intento de inserción en un repositorio protegido contra inserciones. Para más información, vea "[Protección de inserciones con {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)".
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `secret_scanning_push_protection_disable ` | Se desencadena cuando un propietario de la organización o una persona con acceso de administrador deshabilita la protección de inserciones para el análisis de secretos. Para más información, vea "[Protección de inserciones para el examen de secretos](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
| `secret_scanning_push_protection_enable ` | Se desencadena cuando un propietario de la organización o una persona con acceso de administrador habilita la protección de inserción para {% data variables.product.prodname_secret_scanning %}.{%- endif %} | `self_hosted_runner_online` | Se desencadena cuando se inicia la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `self_hosted_runner_offline` | Se desencadena cuando se detiene la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para obtener más información, consulta "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".{% ifversion fpt or ghes or ghec %} | `self_hosted_runner_updated` | Se desencadena cuando se actualiza la aplicación del ejecutor. Se puede ver utilizando la API de REST y la IU; no se puede ver en la exportación de JSON/CSV. Para obtener más información, consulta "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)".{% endif %}{% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | Se desencadena cuando se cambia la configuración a fin de requerir aprobaciones para flujos de trabajo de bifurcaciones públicas para una organización. Para obtener más información, consulta "[Requerimiento de aprobación para flujos de trabajo de bifurcaciones públicas](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)".{% endif %} | `set_actions_retention_limit` | Se desencadena cuando se cambia la duración de retención de los artefactos y registros de {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)."{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | Se desencadena cuando cambia la directiva para los flujos de trabajo del repositorio privado. Para obtener más información, consulta "[Habilitación de flujos de trabajo para bifurcaciones de repositorio privado](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)".{% endif %}{% ifversion fpt or ghec %} | `unblock_user` | Se desencadena cuando un propietario de la organización [desbloquea a un usuario de una organización](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization).{% endif %}{% ifversion fpt or ghes or ghec %} | `update_actions_secret` | Se desencadena cuando se actualiza un secreto de {% data variables.product.prodname_actions %}.{% endif %} | `update_new_repository_default_branch_setting` | Se desencadena cuando un propietario cambia el nombre de la rama predeterminada para los nuevos repositorios de la organización. Para más información, vea "[Administración del nombre de la rama predeterminada para los repositorios de la organización](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)"
| `update_default_repository_permission` | Se desencadena cuando un propietario cambia el nivel de permiso al repositorio predeterminado para los miembros de la organización.
| `update_member` | Se desencadena cuando un propietario cambia el rol de una persona de propietario a miembro o de miembro a propietario.
| `update_member_repository_creation_permission` | Se desencadena cuando un propietario cambia el permiso de creación del repositorio para los miembros de la organización.{% ifversion fpt or ghec %} | `update_saml_provider_settings` | Se desencadena cuando se actualiza la configuración del proveedor SAML de una organización.
| `update_terms_of_service` | Se desencadena cuando una organización cambia de los Términos del servicio estándar a los Términos del servicio corporativos. Para obtener más información, consulta "[Actualizar a los términos del servicio corporativos](/articles/upgrading-to-the-corporate-terms-of-service)".{% endif %}

{% ifversion ghec %}
### Acciones de la categoría `org_credential_authorization`

| Acción | Descripción
|------------------|-------------------
| `grant` | Se desencadena cuando un miembro [autoriza las credenciales para el uso con el inicio de sesión único SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `deauthorized` | Se desencadena cuando un miembro [desautoriza las credenciales para el uso con el inicio de sesión único SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `revoke` | Se desencadena cuando un propietario [revoca las credenciales autorizadas](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### Acciones de la categoría `org_secret_scanning_custom_pattern`

| Acción | Descripción
|------------------|-------------------
| `create` | Se desencadena cuando se publica un patrón personalizado para el análisis de secretos en una organización. Para obtener más información, consulta "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)".
| `update` | Se desencadena cuando se guardan los cambios en un patrón personalizado para el análisis de secretos en una organización. Para obtener más información, consulta "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)".
| `delete` | Se desencadena cuando se quita un patrón personalizado del análisis de secretos en una organización. Para obtener más información, consulta "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)".

{% endif %}
### Acciones de la categoría `organization_default_label`

| Acción | Descripción
|------------------|-------------------
| `create` | Se activa cuando se crea una etiqueta por defecto.
| `update` | Se activa cuando se edita una etiqueta por defecto.
| `destroy` | Se activa cuando se elimina una etiqueta por defecto.

### Acciones de la categoría `packages`

| Acción | Descripción |
|--------|-------------|
| `package_version_published` | Se activa cuando se publica una versión del paquete. |
| `package_version_deleted` | Se activa cuando se borra una versión de paquete específica. Para más información, consulta "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".
| `package_deleted` | Se activa cuando se borra un paquete completo. Para más información, consulta "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".
| `package_version_restored` | Se activa cuando se borra una versión de paquete específica. Para más información, consulta "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".
| `package_restored` | Se activa cuando se restablece un paquete completo. Para más información, consulta "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)".

{% ifversion fpt or ghec %}

### Acciones de la categoría `payment_method`

| Acción | Descripción
|------------------|-------------------
| `create` |  Se activa cuando se agrega un nuevo método de pago, como una tarjeta de crédito o una cuenta de PayPal nueva.
| `update` | Se activa cuando se actualiza un método de pago existente.

{% endif %}

{% ifversion pat-v2 %}

### Acciones de la categoría `personal_access_token`

| Acción | Descripción
|------------------|-------------------
| `access_granted` | Se desencadena cuando se concede acceso a un {% data variables.product.pat_v2 %} a los recursos de la organización. Para obtener más información, consulta "[Administración de solicitudes de {% data variables.product.pat_generic %} en la organización](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)".
| `access_revoked` | Se desencadena cuando se revoca el acceso a los recursos de la organización mediante un {% data variables.product.pat_v2 %}. El token sigue pudiendo leer los recursos públicos de la organización. Para obtener más información, consulta "[Revisión y revocación de un {% data variables.product.pat_generic %} en la organización](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)".
| `request_cancelled` | Se desencadena cuando un miembro de la organización cancela una solicitud de sus {% data variables.product.pat_v2 %} para acceder a los recursos de la organización.
| `request_created` | Se desencadena cuando un miembro de la organización crea un {% data variables.product.pat_v2 %} para acceder a los recursos de la organización y la organización requiere aprobación antes de que un {% data variables.product.pat_v2 %} pueda acceder a estos recursos de la organización. Para obtener más información, consulta "[Administración de solicitudes de {% data variables.product.pat_generic %} en la organización](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)".
| `request_denied` | Se desencadena cuando se deniega una solicitud de {% data variables.product.pat_v2 %} para acceder a los recursos de la organización. Para obtener más información, consulta "[Administración de solicitudes de {% data variables.product.pat_generic %} en la organización](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)".

{% endif %}

### Acciones de la categoría `profile_picture`
| Acción | Descripción
|------------------|-------------------
| update | Se activa cuando estableces o actualizas la foto de perfil de tu organización.

### Acciones de la categoría `project`

| Acción | Descripción
|--------------------|---------------------
| `create` | Se activa cuando se crea un tablero de proyecto.
| `link` | Se activa cuando un repositorio se vincula a un tablero de proyecto.
| `rename` | Se activa cuando se renombra un tablero de proyecto.
| `update` | Se activa cuando se actualiza un tablero de proyecto.
| `delete` | Se activa cuando se elimina un tablero de proyecto.
| `unlink` | Se activa cuando se anula el enlace a un repositorio desde un tablero de proyecto.
| `update_org_permission` | Se activa cuando se cambia o elimina el permiso al nivel de base para todos los miembros de la organización. |
| `update_team_permission` | Se activa cuando se cambia el nivel de permiso del tablero de proyecto de un equipo o cuando se agrega un equipo a un tablero de proyecto o se elimina de este. |
| `update_user_permission` | Se activa cuando un miembro de la organización o colaborador externo se agrega a un tablero de proyecto o se elimina de este, o cuando se le cambia su nivel de permiso.|

### Acciones de la categoría `protected_branch`

| Acción | Descripción
|--------------------|---------------------
| `create ` | Se activa cuando se habilita la protección de rama en una rama.
| `destroy` | Se activa cuando se inhabilita la protección de rama en una rama.
| `update_admin_enforced ` | Se activa cuando se aplica la protección de rama para los administradores del repositorio.
| `update_require_code_owner_review ` | Se activa cuando se actualiza en una rama la aplicación de revisión del propietario del código requerida.
| `dismiss_stale_reviews ` | Se activa cuando se actualiza en una rama la aplicación de las solicitudes de extracción en espera descartadas.
| `update_signature_requirement_enforcement_level ` | Se activa cuando se actualiza la aplicación de la firma de confirmación requerida en una rama.
| `update_pull_request_reviews_enforcement_level ` | Se activa cuando se actualiza el cumplimiento de las revisiones de solicitudes de extracción requeridas en una rama. Puede ser: `0`(desactivada), `1`(no administradores) o `2`(todos).
| `update_required_status_checks_enforcement_level ` | Se activa cuando se actualiza en una rama la aplicación de verificaciones de estado requeridas.
| `update_strict_required_status_checks_policy` | Se activa cuando se cambia el requisito para que una rama se encuentre actualizada antes de la fusión.
| `rejected_ref_update ` | Se activa cuando se rechaza el intento de actualización de una rama.
| `policy_override ` | Se activa cuando un administrador del repositorio anula el requisito de protección de una rama.
| `update_allow_force_pushes_enforcement_level ` | Se activa cuando se habilitan o inhabilitan las subidas de información forzadas en una rama protegida.
| `update_allow_deletions_enforcement_level ` | Se activa cuando se habilita o inhabilita el borrado de ramas en una rama protegida.
| `update_linear_history_requirement_enforcement_level ` | Se activa cuando se habilita o inhabilita el historial de confirmaciones linear requerido para una rama protegida.

### Acciones de la categoría `pull_request`

| Acción | Descripción
|------------------|-------------------
| `create` | Se activa cuando se crea una solicitud de cambios.
| `close` | Se activa cuando se cierra una solicitud de cambios sin haberse fusionado.
| `reopen` | Se activa cuando se vuelve a abrir una solicitud de cambios después de haberse cerrado previamente.
| `merge` | Se activa cuando se fusiona una solicitud de cambios.
| `indirect_merge` | Se activa cuando una solicitud de cambios se considera como fusionada porque sus confirmaciones se fusionaron en la rama destino.
| `ready_for_review` | Se activa cuando una solicitud de cambios se marca como lista para revisión.
| `converted_to_draft` | Se activa cuando una solicitud de cambios se convierte en borrador.
| `create_review_request` | Se activa cuando se solicita una revisión.
| `remove_review_request` | Se activa cuando se elimina una solicitud de revisión.

### Acciones de la categoría `pull_request_review`

| Acción | Descripción
|------------------|-------------------
| `submit` | Se activa cuando se envía una revisión.
| `dismiss` | Se activa cuando se descarta una revisión.
| `delete` | Se activa cuando se borra una revisión.

### Acciones de la categoría `pull_request_review_comment`

| Acción | Descripción
|------------------|-------------------
| `create` | Se activa cuando se agrega un comentario de revisión.
| `update` | Se activa cuando se cambia un comentario de revisión.
| `delete` | Se activa cuando se borra un comentario de revisión.

### Acciones de la categoría `repo`

| Acción | Descripción
|------------------|-------------------
| `access` | Se desencadena cuando un usuario [cambia la visibilidad](/github/administering-a-repository/setting-repository-visibility) de un repositorio de la organización.
| `actions_enabled` | Se activa cuando {% data variables.product.prodname_actions %} se habilita en un repositorio. Puede visualizarse utilizando la IU. Este evento no se incluye cuando accedes a la bitácora de auditoría utilizando la API de REST. Para obtener más información, consulta "[Uso de la API REST](#using-the-rest-api)".
| `add_member` | Se desencadena cuando un usuario acepta una [invitación para tener acceso de colaboración a un repositorio](/articles/inviting-collaborators-to-a-personal-repository).
| `add_topic` | Se desencadena cuando el administrador de un repositorio [agrega un tema](/articles/classifying-your-repository-with-topics) a un repositorio.
| `advanced_security_disabled` | Se activa cuando un adminsitrador de repositorio inhabilita las características de {% data variables.product.prodname_GH_advanced_security %} en este. Para más información, vea "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
| `advanced_security_enabled` | Se activa cuando un administrador de repositorio habilita las características de la {% data variables.product.prodname_GH_advanced_security %} para este. Para obtener más información, consulta "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".
| `archived` | Se desencadena cuando el administrador de un repositorio [archiva un repositorio](/articles/about-archiving-repositories).{% ifversion ghes %}
| `config.disable_anonymous_git_access` | Se desencadena cuando el [acceso de lectura de Git anónimo está deshabilitado](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) en un repositorio público.
| `config.enable_anonymous_git_access` | Se desencadena cuando el [acceso de lectura de Git anónimo está habilitado](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) en un repositorio público.
| `config.lock_anonymous_git_access` | Se desencadena cuando [la configuración de acceso de lectura de Git anónimo](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) de un repositorio está bloqueada.
| `config.unlock_anonymous_git_access` | Se desencadena cuando [la configuración de acceso de lectura de Git anónimo](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) de un repositorio está desbloqueada.{% endif %}
| `create` | Se desencadena cuando [se crea un nuevo repositorio](/articles/creating-a-new-repository).{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` |Se crea cuando un secreto de {% data variables.product.prodname_actions %} se crea para un repositorio. Para obtener más información, consulta "[Creación de secretos cifrados para un repositorio](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)."{% endif %}
| `destroy` | Se desencadena cuando [se elimina un repositorio](/articles/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Se desencadena cuando se deshabilita un repositorio (por ejemplo, por [fondos insuficientes](/articles/unlocking-a-locked-account)).{% endif %}
| `enable` | Se desencadena cuando se vuelve a habilitar un repositorio.{% ifversion fpt or ghes or ghec %}
| `remove_actions_secret` | Se activa cuando se elimina un secreto de {% data variables.product.prodname_actions %}.{% endif %}
| `remove_member` | Se desencadena cuando [se quita a un usuario como colaborador de un repositorio](/articles/removing-a-collaborator-from-a-personal-repository).
| `register_self_hosted_runner` | Se crea cuando se registra un ejecutor auto-hospedado nuevo. Para más información, vea "[Adición de un ejecutor autohospedado a un repositorio](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)".
| `remove_self_hosted_runner` | Se activa cuando se elimina un ejecutor auto-hospedado. Para obtener más información, consulta "[Eliminación de un ejecutor de un repositorio](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)".
| `remove_topic` | Se activa cuando un administrador del repositorio elimina un tema de un repositorio.
| `rename` | Se desencadena cuando [se cambia el nombre de un repositorio](/articles/renaming-a-repository).
| `self_hosted_runner_online` | Se activa cuando la aplicación del ejecutor se inicia. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para más información, vea "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".
| `self_hosted_runner_offline` | Se activa cuando se detiene la aplicación del ejecutor. Solo se puede ver utilizando la API de REST; no está visible en la IU o en la exportación de JSON/CSV. Para obtener más información, consulta "[Comprobación del estado de un ejecutor autohospedado](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)".{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | Se activa cuando se actualiza la aplicación ejecutora. Se puede ver utilizando la API de REST y la IU; no se puede ver en la exportación de JSON/CSV. Para obtener más información, consulta "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)".{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | Se activa cuando se cambia la configuración para requerir aprobaciones para los flujos de trabajo de las bifurcaciones públicas. Para obtener más información, consulta "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)".{% endif %}
| `set_actions_retention_limit` | Se activa cuando se cambia el periodo de retención para los artefactos y bitácoras de las {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)".{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | Se activa cuando se cambia la política para flujos de trabajo en las bifurcaciones de los repositorios privados. Para obtener más información, consulta "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)".{% endif %}
| `staff_unlock` | Se desencadena cuando el propietario de una empresa o {% data variables.contact.github_support %} (con permiso de un administrador del repositorio) desbloquea temporalmente el repositorio. No se cambia la visibilidad del repositorio.
| `transfer` | Se desencadena cuando [se transfiere un repositorio](/articles/how-to-transfer-a-repository).
| `transfer_start` | Se activa cuando está por ocurrir una transferencia de repositorio.
| `unarchived` | Se desencadena cuando un administrador del repositorio desarchiva un repositorio. {% ifversion fpt or ghes or ghec %}
| `update_actions_secret` | Se activa cuando se actualiza un secreto de {% data variables.product.prodname_actions %}.{% endif %}

{% ifversion fpt or ghec %}

### Acciones de la categoría `repository_advisory`

| Acción | Descripción
|------------------|-------------------
| `close` | Se activa cuando alguien cierra una asesoría de seguridad. Para obtener más información, consulta "[Acerca de los avisos de seguridad de {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
| `cve_request` | Se activa cuando alguien solicita un número de CVE (Vulnerabilidades y Exposiciones Comunes) de {% data variables.product.prodname_dotcom %} para un borrador de asesoría de seguridad.
| `github_broadcast` | Se activa cuando {% data variables.product.prodname_dotcom %} hace pública una asesoría de seguridad en la {% data variables.product.prodname_advisory_database %}.
| `github_withdraw` | Se activa cuando {% data variables.product.prodname_dotcom %} retira una asesoría de seguridad que se publicó por error.
| `open` | Se activa cuando alguien abre un borrador de asesoría de seguridad.
| `publish` | Se activa cuando alguien publica una asesoría de seguridad.
| `reopen` | Se activa cuando alguien vuelve a abrir un borrador de asesoría de seguridad.
| `update` | Se activa cuando alguien edita un borrador de asesoría de seguridad o una asesoría de seguridad publicada.

### Acciones de la categoría `repository_content_analysis`

| Acción | Descripción
|------------------|-------------------
| `enable` | Se desencadena cuando el propietario o la persona con acceso de administrador al repositorio de una organizacción [habilita la configuración de uso de datos de un repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
| `disable` | Se desencadena cuando el propietario o la persona con acceso de administrador al repositorio de una organizacción [deshabilita la configuración de uso de datos de un repositorio privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

{% endif %}{% ifversion fpt or ghec %}

### Acciones de la categoría `repository_dependency_graph`

| Acción | Descripción
|------------------|-------------------
| `disable` | Se desencadena cuando el propietario o la persona con acceso de administrador al repositorio de una organización deshabilita el gráfico de dependencias de un repositorio privado de {% ifversion fpt or ghec %}{% endif %}. Para obtener más información, consulta "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
| `enable` | Se desencadena cuando el propietario o la persona con acceso de administrador al repositorio de una organización habilita el gráfico de dependencias de un repositorio privado de {% ifversion fpt or ghec %}{% endif %}.

{% endif %}{% ifversion ghec or ghes or ghae %}
### Acciones de la categoría `repository_secret_scanning`

| Acción | Descripción
|------------------|-------------------
| `disable` | Se desencadena cuando el propietario o la persona con acceso de administrador del repositorio deshabilita el análisis de secretos de un repositorio. Para obtener más información, consulta "[Acerca del análisis de secretos](/github/administering-a-repository/about-secret-scanning)".
| `enable` | Se desencadena cuando el propietario o la persona con acceso de administrador del repositorio habilita el análisis de secretos de un repositorio.

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### Acciones de la categoría `repository_secret_scanning_custom_pattern`

| Acción | Descripción
|------------------|-------------------
| `create` | Se desencadena cuando se publica un patrón personalizado para el análisis de secretos de un repositorio. Para obtener más información, consulta "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)".
| `update` | Se desencadena cuando se guardan los cambios en un patrón personalizado para el análisis de secretos de un repositorio. Para obtener más información, consulta "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)".
| `delete` | Se desencadena cuando se quita un patrón personalizado del análisis de secretos de un repositorio. Para obtener más información, consulta "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)".

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### Acciones de la categoría `repository_secret_scanning_push_protection`

| Acción | Descripción
|------------------|-------------------
| `disable` | Se desencadena cuando el propietario o la persona con acceso de administrador del repositorio deshabilita el análisis de secretos de un repositorio. Para obtener más información, consulta "[Protección de inserciones para el análisis de secretos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
| `enable` | Se desencadena cuando el propietario o la persona con acceso de administrador del repositorio habilita el análisis de secretos de un repositorio.

{% endif %}
### Acciones de la categoría `repository_vulnerability_alert`

| Acción | Descripción
|------------------|-------------------
| `create` | Se activa cuando {% data variables.product.product_name %} crea una alerta del {% data variables.product.prodname_dependabot %} para un repositorio que utiliza una dependencia vulnerable. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
| `dismiss` | Se activa cuando un propietario de organización o persona con acceso administrativo al repositorio descarta una alerta del {% data variables.product.prodname_dependabot %} sobre una dependencia vulnerable.
| `resolve` | Se activa cuando alguien con acceso de escritura en un repositorio sube cambios para actualizar y resolver una vulnerabilidad en una dependencia de proyecto.
{% ifversion fpt or ghec %}
### Acciones de la categoría `repository_vulnerability_alerts`

| Acción | Descripción
|------------------|-------------------
| `authorized_users_teams` | Se desencadena cuando un propietario de la organización o un miembro con permisos de administrador en el repositorio actualiza la lista de personas o equipos autorizados para recibir las {% data variables.product.prodname_dependabot_alerts %} para el repositorio. Para más información, vea "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
| `disable` | Se activa cuando un propietario del repositorio o persona con acceso administrativo a este inhabilita las {% data variables.product.prodname_dependabot_alerts %}.
| `enable` | Se activa cuando un propietario del repositorio o persona con acceso administrativo a este habilita las {% data variables.product.prodname_dependabot_alerts %}.

{% endif %}{% ifversion custom-repository-roles %}
### Acciones de la categoría `role`
| Acción | Descripción
|------------------|-------------------
|`create` | Se activa cuando un propietario de una organización crea un rol de repositorio personalizado nuevo. Para más información, vea "[Administración de roles de repositorio personalizados para una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
|`destroy` | Se desencadena cuando el propietario de una organización elimina un rol de repositorio personalizado. Para más información, vea "[Administración de roles de repositorio personalizados para una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
|`update` | Se activa cuando un propietario de una organización edita un rol de repositorio personalizado existente. Para más información, vea "[Administración de roles de repositorio personalizados para una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".

{% endif %} {% ifversion ghec or ghes or ghae %}
### Acciones de la categoría `secret_scanning`

| Acción | Descripción
|------------------|-------------------
| `disable` | Se activa cuando el propietario de una organización inhabilita el escaneo de secretos para todos los repositorios{% ifversion ghec %} privados o internos{% endif %} existentes. Para obtener más información, consulta "[Acerca del análisis de secretos](/github/administering-a-repository/about-secret-scanning)".
| `enable` | Se activa cuando un propietario de organización habilita el escaneo de secretos para todos los repositorios {% ifversion ghec %} privados o internos{% endif %} existentes.
{% endif %}

{% ifversion secret-scanning-alert-audit-log %}
### Acciones de la categoría `secret_scanning_alert`

| Acción | Descripción
|------------------|-------------------
| `create` | Se desencadena cuando {% data variables.product.prodname_dotcom %} detecta un secreto expuesto y crea una alerta del {% data variables.product.prodname_secret_scanning %}. Para obtener más información, consulta "[Administración de alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".
| `reopen` | Se desencadena cuando un usuario vuelve a abrir una alerta del {% data variables.product.prodname_secret_scanning %}.
| `resolve` | Se desencadena cuando un usuario resuelve una alerta del {% data variables.product.prodname_secret_scanning %}.
{% endif %}

{% ifversion ghec or ghes or ghae %}
### Acciones de la categoría `secret_scanning_new_repos`

| Acción | Descripción
|------------------|-------------------
| `disable` | Se activa cuando un propietario de organización inhabilita el escaneo de secretos para todos los repositorios {% ifversion ghec %}privados o internos {% endif %}nuevos. Para obtener más información, consulta "[Acerca del análisis de secretos](/github/administering-a-repository/about-secret-scanning)".
| `enable` | Se activa cuando un propietario de organización habilita el escaneo de secretos para todos los repositorios {% ifversion ghec %}privados o internos {% endif %}nuevos.
{% endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
### Acciones de la categoría `secret_scanning_push_protection`

| Acción | Descripción
|------------------|-------------------
| `bypass` | Se desencadena cuando un usuario omite la protección de inserciones en un secreto detectado por el examen de secretos. Para obtener más información, consulta "[Omitir la protección de inserción para un secreto](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)".
{% endif %}

{% ifversion fpt or ghec %}
### Acciones de la categoría `sponsors`

| Acción | Descripción
|------------------|-------------------
| `custom_amount_settings_change` | Se desencadena al habilitar o deshabilitar importes personalizados, o bien al cambiar el importe personalizado sugerido (vea "[Administración de los niveles de patrocinio](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)")
| `repo_funding_links_file_action` | Se desencadena al cambiar el archivo FUNDING en el repositorio (vea "[Representación de un botón de patrocinador en el repositorio](/articles/displaying-a-sponsor-button-in-your-repository)")
| `sponsor_sponsorship_cancel` | Se desencadena al cancelar un patrocinio (vea "[Cambio de un patrocinio a una versión anterior](/articles/downgrading-a-sponsorship)")
| `sponsor_sponsorship_create` | Se desencadena al patrocinar una cuenta (vea "[Patrocinio de un colaborador de código abierto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_payment_complete` | Se desencadena después de patrocinar una cuenta y procesar el pago (consulta "[Patrocinio de un colaborador de código abierto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_preference_change` | Se desencadena al cambiar si recibes actualizaciones de correo electrónico de una cuenta patrocinada (consulta "[Administración del patrocinio](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)")
| `sponsor_sponsorship_tier_change` | Se desencadena al actualizar o cambiar el patrocinio a una versión anterior (consulta "[Actualización de un patrocinio](/articles/upgrading-a-sponsorship)" y "[Cambio de un patrocinio a una versión anterior](/articles/downgrading-a-sponsorship)")
| `sponsored_developer_approve` | Se desencadena cuando se aprueba la cuenta de {% data variables.product.prodname_sponsors %} (consulta "[Configuración de {% data variables.product.prodname_sponsors %} para la organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_create` | Se desencadena cuando se crea la cuenta de {% data variables.product.prodname_sponsors %} (consulta "[Configuración de {% data variables.product.prodname_sponsors %} para la organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_disable` | Se activa cuando se inhabilita tu cuenta de {% data variables.product.prodname_sponsors %}
| `sponsored_developer_redraft` | Se activa cuando tu cuenta de {% data variables.product.prodname_sponsors %} se devuelve a un estado de borrador desde un estado aprobado
| `sponsored_developer_profile_update` | Se desencadena al editar el perfil de organización patrocinado (consulta "[Edición de los detalles del perfil para {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)")
| `sponsored_developer_request_approval` | Se desencadena cuando se envía la aplicación de {% data variables.product.prodname_sponsors %} para su aprobación (consulta "[Configuración de {% data variables.product.prodname_sponsors %} para la organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_tier_description_update` | Se desencadena al cambiar la descripción de un nivel de patrocinio (consulta "[Administración de los niveles de patrocinio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)")
| `sponsored_developer_update_newsletter_send` | Se desencadena al enviar una actualización por correo electrónico a los patrocinadores (consulta "[Contacto con los patrocinadores](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)")
| `waitlist_invite_sponsored_developer` | Se desencadena cuando se le invita a unirse a {% data variables.product.prodname_sponsors %} desde la lista de espera (vea "[Configuración de {% data variables.product.prodname_sponsors %} para la organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `waitlist_join` | Se desencadena cuando se une a la lista de espera para convertirse en organización patrocinada (consulta "[Configuración de {% data variables.product.prodname_sponsors %} para la organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
{% endif %}

### Acciones de la categoría `team`

| Acción | Descripción
|------------------|-------------------
| `add_member` | Se desencadena cuando un miembro de una organización [se agrega a un equipo](/articles/adding-organization-members-to-a-team).
| `add_repository` | Se activa cuando se le otorga el control de un repositorio a un equipo.
| `change_parent_team` | Se desencadena cuando se crea un equipo secundario o [se cambia el elemento primario de un equipo secundario](/articles/moving-a-team-in-your-organization-s-hierarchy).
| `change_privacy` | Se activa cuando se modifica el nivel de privacidad de un equipo.
| `create` | Se activa cuando se crea un equipo nuevo.
| `demote_maintainer` | Se activa cuando se baja de categoría a un usuario de mantenedor de equipo a miembro de equipo. Para más información, vea "[Asignación del rol de mantenedor de equipo a un miembro del equipo](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)".
| `destroy` | Se activa cuando se elimina un equipo de la organización.
| `team.promote_maintainer` | Se activa cuando se promueve a un usuario de miembro de equipo a mantenedor de equipo. Para más información, vea "[Asignación del rol de mantenedor de equipo a un miembro del equipo](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)".
| `remove_member` | Se desencadena cuando un miembro de una organización [se quita de un equipo](/articles/removing-organization-members-from-a-team).
| `remove_repository` | Se activa cuando un repositorio deja de estar bajo el control de un equipo.

### Acciones de la categoría `team_discussions`

| Acción | Descripción
|---|---|
| `disable` | Se activa cuando un propietario de la organización inhabilita los debates de equipo para una organización. Para obtener más información, consulta "[Deshabilitación de los debates de equipo para la organización](/articles/disabling-team-discussions-for-your-organization)".
| `enable` | Se activa cuando un propietario de la organización habilita los debates de equipo para una organización.

### Acciones de la categoría `workflows`

{% data reusables.actions.actions-audit-events-workflow %}
## Información adicional

- "[Protección de la organización](/articles/keeping-your-organization-secure)"{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {%- ifversion fpt or ghec %}
- "[Exportación de la información de los miembros de la organización](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization)"{% endif %} {%- endif %}
