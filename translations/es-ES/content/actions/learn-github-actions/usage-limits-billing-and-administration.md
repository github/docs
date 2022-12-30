---
title: 'Límites de uso, facturación y administración'
intro: 'Hay límites de uso para los flujos de trabajo de {% data variables.product.prodname_actions %}. Los cargos de uso aplican a los repositorios que salen de la cantidad de minutos y almacenamiento gratuitos de un repositorio.'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
shortTitle: Workflow billing & limits
ms.openlocfilehash: 5abd041d41ab2227aa87c383f39c94876544718c
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191858'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de la facturación para {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} Para obtener más información, consulta "[Descripción de {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}".{% elsif ghes or ghec %}" y "[Acerca de {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)".{% endif %}

{% ifversion fpt or ghec %} {% data reusables.actions.actions-billing %} Para obtener más información, consulta "[Acerca de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".
{% else %} El uso de Acciones de GitHub es gratuito para las instancias de {% data variables.product.prodname_ghe_server %} que utilizan ejecutores auto-hospedados. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners).
{% endif %}


{% ifversion fpt or ghec %}

## Disponibilidad

{% data variables.product.prodname_actions %} está disponible en todos los productos de {% data variables.product.prodname_dotcom %}, pero {% data variables.product.prodname_actions %} no está disponible para los repositorios privados que pertenezcan a cuentas que utilicen planes tradicionales por repositorio. {% data reusables.gated-features.more-info %}

{% endif %}

## Límites de uso

{% ifversion fpt or ghec %} Hay algunos límites de utilización de {% data variables.product.prodname_actions %} cuando se utilizan ejecutores hospedados en {% data variables.product.prodname_dotcom %}. Estos límites están sujetos a cambios.

{% note %}

**Nota:** En el caso de los ejecutores autohospedados, se aplican límites de utilización diferentes. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits).

{% endnote %}

- **Tiempo de ejecución del trabajo**: cada trabajo de un flujo de trabajo se puede ejecutar durante un tiempo de ejecución máximo de 6 horas. Si un job llega a este límite, éste se terminará y fallará en completarse.
{% data reusables.actions.usage-workflow-run-time %} {% data reusables.actions.usage-api-requests %}
- **Trabajos simultáneos**: la cantidad de trabajos que puedes ejecutar simultáneamente en tu cuenta depende de tu plan de GitHub, y también del tipo de ejecutor utilizado. Si eso se excede, cualquier job adicional se pondrá en cola de espera.

  **Ejecutores hospedados en {% data variables.product.prodname_dotcom %} estándar**

  | Plan de GitHub | Jobs simultáneos totales | Jobs simultáneos de macOS máximos |
  |---|---|---|
  | Gratuito | 20 | 5 |
  | Pro | 40 | 5 |
  | Team | 60 | 5 |
  | Enterprise | 180 | 50 |

  **{% data variables.actions.hosted_runner %}s hospedados en {% data variables.product.prodname_dotcom %}**

  | Plan de GitHub | Jobs simultáneos totales | Jobs simultáneos de macOS máximos |
  |---|---|---|
  | All | 500 | N/D |

  {% note %}

  **Nota:** Si es necesario, los clientes de planes empresariales pueden solicitar un límite mayor para trabajos simultáneos. Para más información, póngase en contacto con {% data variables.contact.contact_ent_support %} o su representante de ventas.

  {% endnote %}
  
- **Matriz de trabajos**: {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

{% else %} Los límites de utilización se aplican a los ejecutores autohospedados. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits).
{% endif %}

{% ifversion fpt or ghec %}
## Política de uso

Además de los límites de utilización, debes asegurarte de usar {% data variables.product.prodname_actions %} dentro de los [Términos del servicio de GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service/). Para obtener más información sobre los términos específicos de {% data variables.product.prodname_actions %}, consulta los [Términos adicionales de los productos de GitHub](/free-pro-team@latest/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}
## Facturación para los flujos de trabajo reutilizables

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Si reutilizas un flujo de trabajo, la facturación siempre se asociará con el flujo de trabajo llamante. La asignación de los ejecutores hospedados en {% data variables.product.prodname_dotcom %} siempre se evalúa utilizando únicamente el contexto del llamador. El llamador no puede utilizar ejecutores hospedados en {% data variables.product.prodname_dotcom %} desde el repositorio llamado. 

Para obtener más información, consulta "[Reutilización de flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".
{% endif %}

## Directiva de retención de artefactos y registros

Puedes configurar el periodo de retenciòn de artefactos y bitàcoras para tu repositorio, organizaciòn o cuenta empresarial.

{% data reusables.actions.about-artifact-log-retention %}

Para más información, consulte:

- "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)"
- "[Configuración del período de retención de {% data variables.product.prodname_actions %} para los artefactos y registros de la organización](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)"
- "[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## Inhabilitar o limitar {% data variables.product.prodname_actions %} para tu repositorio u organización

{% data reusables.actions.disabling-github-actions %}

Para más información, consulte:
- "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)"
- "[Deshabilitación o limitación de {% data variables.product.prodname_actions %} para la organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"
- "[Aplicación de directivas para {% data variables.product.prodname_actions %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## Inhabilitar y habilitar flujos de trabajo

Puedes habilitar e inhabilitar flujos de trabajo independientes en tu repositorio de {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

Para obtener más información, consulta "[Deshabilitación y habilitación de un flujo de trabajo](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
