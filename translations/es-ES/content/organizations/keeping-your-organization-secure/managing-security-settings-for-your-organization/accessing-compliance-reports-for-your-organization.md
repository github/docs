---
title: Acceder a los reportes de cumplimiento de tu organización
intro: 'Puedes acceder a los informes de cumplimiento de {% data variables.product.company_short %}, como los informes del SOC y la autoevaluación de Cloud Security Alliance CAIQ (CSA CAIQ), de tu empresa.'
versions:
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Teams
permissions: Organization owners can access compliance reports for the organization.
shortTitle: Access compliance reports
ms.openlocfilehash: a260c5a13ed92d6cd3ead55cce1c2ff2a61c8d57
ms.sourcegitcommit: 2ff4a43f0b14939da79d56c54402cfee8d90ae23
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169577'
---
## Acerca de los reportes de cumplimiento de {% data variables.product.company_short %}

Puede acceder a los informes de cumplimiento de {% data variables.product.company_short %} en la configuración de la organización.

{% data reusables.security.compliance-report-list %}


{% note %}

**Nota:** Para ver los informes de cumplimiento, la organización debe usar {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Acceder a los reportes de cumplimiento de tu organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.compliance %}
1. A la derecha del informe al que quieras acceder, haz clic en {% octicon "download" aria-label="The Download icon" %} **Descargar** o {% octicon "link-external" aria-label="The external link icon" %} **Ver**.

   {% data reusables.security.compliance-report-screenshot %}

## Información adicional

- "[Acceso a los informes de cumplimiento de la empresa](/admin/overview/accessing-compliance-reports-for-your-enterprise)"
