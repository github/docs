---
title: 'Viewing the secret risk assessment report for your organization'
shortTitle: 'View secret risk assessment'
intro: 'You can generate and view the {% data variables.product.prodname_secret_risk_assessment %} report for your organization from the "Security" tab.'
product: '{% data reusables.gated-features.secret-risk-assessment-report %}'
permissions: '{% data reusables.permissions.secret-risk-assessment-report-generation %}'
allowTitleToDifferFromFilename: true
type: how_to
versions:
  feature: secret-risk-assessment
topics:
  - Code Security
  - Secret scanning
  - Secret Protection
  - Organizations
  - Security
---

{% data reusables.secret-risk-assessment.report-intro %} {% data reusables.secret-risk-assessment.link-conceptual-information %}

You can generate the {% data variables.product.prodname_secret_risk_assessment %} report for your organization, review it, and export the results to CSV.

{% data reusables.secret-risk-assessment.public-preview-note %}

## Generating an initial {% data variables.product.prodname_secret_risk_assessment %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-assessments-view %}
{% data reusables.security-overview.generate-secret-risk-assessment-report %}

{% data reusables.secret-risk-assessment.notification-report-ready %}

{% note %}

Did you successfully generate the {% data variables.product.prodname_secret_risk_assessment %} report for your organization?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}

## Rerunning the {% data variables.product.prodname_secret_risk_assessment %}

{% data reusables.security-overview.secret-risk-assessment-report-generation-cadence %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-assessments-view %}
1. Towards the top right side of the existing report, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
1. Select **Rerun scan**.

    {% data reusables.secret-risk-assessment.notification-report-ready %}

## Viewing the {% data variables.product.prodname_secret_risk_assessment %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-assessments-view %} You can see the most recent report on this page.

## Exporting the {% data variables.product.prodname_secret_risk_assessment %} to CSV

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-assessments-view %}
1. Towards the top right side of the report, click {% octicon "kebab-horizontal" aria-label="More options" %}.
1. Select **Download CSV**.

The {% data variables.product.prodname_secret_risk_assessment %} CSV file includes the following information.

| CSV column | Name                   | Description                                               |
| ---------- | ---------------------- | --------------------------------------------------------- |
| A          | `Organization Name`    | The name of the organization the secret was detected in |
| B          | `Name`                 | The token name for the type of secret |
| C          | `Slug`                 | The normalized string for the token. This corresponds to `Token` in the table of supported secrets. See [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets). |
| D          | `Push Protected`       | A `boolean` to indicate whether the secret would be detected and blocked by push protection if it were enabled |
| E          | `Non-Provider Pattern` | A `boolean` to indicate whether the secret matched a non-provider pattern and would generate an alert if {% data variables.product.prodname_secret_scanning %} with non-provider patterns were enabled |
| F          | `Secret Count`         | An aggregate count of the active and inactive secrets found for the token type |
| G          | `Repository Count`         | An aggregate count of distinct repositories in which the secret type was found, including public, private,{% ifversion ghec or ghes %} internal{% endif %}, and archived repositories |

## Next steps

Now that you've generated {% data variables.product.prodname_secret_risk_assessment %} for your organization, learn how to interpret the results. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/interpreting-secret-risk-assessment-results).
