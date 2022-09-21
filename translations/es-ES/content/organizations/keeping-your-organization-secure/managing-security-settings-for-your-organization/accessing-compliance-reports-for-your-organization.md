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
ms.openlocfilehash: fd195f8d15e89cf3e1ff9b76ce258d736ffc068f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060406'
---
## Acerca de los reportes de cumplimiento de {% data variables.product.company_short %}

Puede acceder a los informes de cumplimiento de {% data variables.product.company_short %} en la configuración de la organización.

{% data reusables.security.compliance-report-list %}


{% note %}

**Nota:** Para ver los informes de cumplimiento, la organización debe usar {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Acceder a los reportes de cumplimiento de tu organización

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. En "Informes de cumplimiento", a la derecha del informe al que quiera acceder, haga clic en {% octicon "download" aria-label="The Download icon" %} **Descargar** o {% octicon "link-external" aria-label="The external link icon" %} **Ver**.

   {% data reusables.security.compliance-report-screenshot %}

## Información adicional

- "[Acceso a los informes de cumplimiento de la empresa](/admin/overview/accessing-compliance-reports-for-your-enterprise)"
