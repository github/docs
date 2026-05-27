---
title: Code security risk assessment
intro: 'Generate a free code security risk assessment to understand your organization''s exposure to vulnerabilities.'
product: '{% data reusables.gated-features.secret-risk-assessment-report %} <br><a href="https://github.com/get_started?with=risk-assessment&ref_product=code-scanning&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Get started with security risk assessments</span> {% octicon "link-external" height:16 %}</a>'
permissions: '{% data reusables.permissions.secret-risk-assessment-report-generation %}'
versions:
  feature: code-security-risk-assessment
contentType: concepts
category:
  - Find and fix code vulnerabilities
---

The {% data variables.product.prodname_code_security_risk_assessment %} is a free, self-serve scan that helps you understand your organization's exposure to code vulnerabilities. The assessment scans up to 20 of your organization's repositories and produces a report showing the vulnerabilities found, their severity, and how many can be fixed with {% data variables.copilot.copilot_autofix_short %}.

The assessment is completely free. You won't be charged for any {% data variables.product.prodname_GH_code_security_always %} licenses, and the {% data variables.product.prodname_actions %} minutes used during the scan are provided at no cost.

## Who can run the assessment

**Organization owners** and **security managers** can run the {% data variables.product.prodname_code_security_risk_assessment %} for organizations on {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} plans.

## What the assessment scans

By default, the assessment pre-selects up to 20 of your organization's private and internal repositories based on commit activity in the last 90 days. You can change this selection before running the scan. Only repositories containing at least one language supported by code scanning can be selected.

Scans have a one-hour timeout. If all languages in a repository fail to scan, that repository is counted as failed. If at least one language scans successfully, the repository's results are included in the report.

You can rerun the assessment every 90 days. For each rerun, you can change which repositories are scanned.

## Relationship to the {% data variables.product.prodname_secret_risk_assessment %}

{% data variables.product.github %} offers two free security risk assessments for organizations: the {% data variables.product.prodname_code_security_risk_assessment %} and the {% data variables.product.prodname_secret_risk_assessment %}. The two assessments run independently and their results are displayed in separate tabs in the Assessments view. Each assessment can be rerun every 90 days.

For more information about the {% data variables.product.prodname_secret_risk_assessment %}, see [AUTOTITLE](/code-security/concepts/secret-security/about-secret-security-with-github#secret-risk-assessment).

## Next steps

To generate a {% data variables.product.prodname_code_security_risk_assessment %} for your organization, see [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-vulnerability-risk).
