---
title: Contents of the secret risk assessment report CSV
shortTitle: Risk report CSV contents
intro: Understand the data included in the CSV export of the {% data variables.product.prodname_secret_risk_assessment %} report.
product: '{% data reusables.gated-features.secret-risk-assessment-report %}'
permissions: '{% data reusables.permissions.secret-risk-assessment-report-generation %}'
type: reference
versions:
  feature: secret-risk-assessment
topics:
  - Code Security
  - Secret scanning
  - Secret Protection
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/risk-report-csv-contents
contentType: reference
---

The {% data variables.product.prodname_secret_risk_assessment %} report CSV file includes the following information:

| CSV column | Name                   | Description                                               |
| ---------- | ---------------------- | --------------------------------------------------------- |
| A          | `Organization Name`    | The name of the organization the secret was detected in |
| B          | `Name`                 | The token name for the type of secret |
| C          | `Slug`                 | The normalized string for the token. This corresponds to `Token` in the table of supported secrets. See [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets). |
| D          | `Push Protected`       | A `boolean` to indicate whether the secret would be detected and blocked by push protection if it were enabled |
| E          | `Non-Provider Pattern` | A `boolean` to indicate whether the secret matched a non-provider pattern and would generate an alert if {% data variables.product.prodname_secret_scanning %} with non-provider patterns were enabled |
| F          | `Secret Count`         | An aggregate count of the active and inactive secrets found for the token type |
| G          | `Repository Count`         | An aggregate count of distinct repositories in which the secret type was found, including public, private,{% ifversion ghec or ghes %} internal,{% endif %} and archived repositories |

## Next steps

To learn which secrets you should prioritize for remediation, see [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/interpreting-secret-risk-assessment-results#step-5-prioritizing-remediation-and-related-actions).
