---
title: Running the secret risk assessment for your organization
shortTitle: Assess your secret risk
intro: Determine your organization's exposure to leaked secrets by generating a {% data variables.product.prodname_secret_risk_assessment %} report.
product: '{% data reusables.gated-features.secret-risk-assessment-report %}'
permissions: '{% data reusables.permissions.secret-risk-assessment-report-generation %}'
versions:
  feature: secret-risk-assessment
topics:
  - Code Security
  - Secret scanning
  - Secret Protection
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/assess-your-secret-risk
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets
contentType: how-tos
---

## Generating an initial {% data variables.product.prodname_secret_risk_assessment %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-assessments-view %}
{% data reusables.security-overview.generate-secret-risk-assessment-report %}

    {% data reusables.secret-risk-assessment.notification-report-ready %}

## Rerunning the {% data variables.product.prodname_secret_risk_assessment %}

> [!NOTE]
> You can only generate a secret risk assessment report once every 90 days.
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-assessments-view %}
1. Towards the top right side of the existing report, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
1. Select **Rerun scan**.

    {% data reusables.secret-risk-assessment.notification-report-ready %}

## Next steps

Now that you've generated a {% data variables.product.prodname_secret_risk_assessment %} report for your organization, learn how to interpret the results. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/interpreting-secret-risk-assessment-results).
