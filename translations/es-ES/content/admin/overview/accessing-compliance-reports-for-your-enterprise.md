---
title: Acceder a los reportes de cumplimiento de tu empresa
intro: 'Puedes acceder a los informes de cumplimiento de {% data variables.product.company_short %}, como los informes del SOC y la autoevaluación de Cloud Security Alliance CAIQ (CSA CAIQ), para tu empresa.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Enterprise owners can access compliance reports for the enterprise.
shortTitle: Access compliance reports
ms.openlocfilehash: d9391e9bb029620ee9c034a5ad3092588e914c36
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148009677'
---
## Acerca de los reportes de cumplimiento de {% data variables.product.company_short %}

Puede acceder a los informes de cumplimiento de {% data variables.product.company_short %} en la configuración de la empresa.

{% data reusables.security.compliance-report-list %}

## Acceder a los reportes de cumplimiento de tu empresa

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. En "Recursos", a la derecha del informe al que quiera acceder, haga clic en {% octicon "download" aria-label="The Download icon" %} **Descargar** o {% octicon "link-external" aria-label="The external link icon" %} **Ver**.

   {% data reusables.security.compliance-report-screenshot %}

## Información adicional

- "[Acceso a los informes de cumplimiento de la organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/accessing-compliance-reports-for-your-organization)"{% ifversion enterprise-member-csv %}
- "[Exportación de la información de pertenencia de la empresa](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise)"{% endif %}
