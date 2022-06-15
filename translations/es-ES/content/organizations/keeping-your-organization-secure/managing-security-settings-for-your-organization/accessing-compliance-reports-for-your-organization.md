---
title: Acceder a los reportes de cumplimiento de tu organización
intro: 'Puedes acceder a los reportes de cumplimiento de {% data variables.product.company_short %}, tales como los de SOC y a la autoevaluación del CAIQ de la Alianza de Seguridad en la Nube (CSA CAIQ) para tu organización.'
versions:
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Teams
permissions: Organization owners can access compliance reports for the organization.
shortTitle: Acceso a los reportes de cumplimiento
---

## Acerca de los reportes de cumplimiento de {% data variables.product.company_short %}

Puedes acceder a los reportes de cumplimiento de {% data variables.product.company_short %} en tus ajustes de organización.

{% data reusables.security.compliance-report-list %}


{% note %}

**Nota:** Para ver los reportes de cumplimiento, tu organización debe utilizar {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Acceder a los reportes de cumplimiento de tu organización

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Debajo de "Reportes de cumplimiento", a la derecha del reporte al cuál quieres acceder, haz clic en {% octicon "download" aria-label="The Download icon" %} **Descargar** o en {% octicon "link-external" aria-label="The external link icon" %} **Ver**.

   {% data reusables.security.compliance-report-screenshot %}

## Leer más

- "[Acceder a los reportes de cumplimiento para tu empresa](/admin/overview/accessing-compliance-reports-for-your-enterprise)"
