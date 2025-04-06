---
title: About the detection of generic secrets with secret scanning
shortTitle: Generic secret detection
intro: 'Learn how {% data variables.product.prodname_secret_scanning %} uses AI to scan and create alerts for unstructured secrets, such as passwords.'
versions:
  feature: secret-scanning-ai-generic-secret-detection
  fpt: '*'
type: rai
topics:
  - Secret scanning
  - Advanced Security
  - AI
redirect_from:
  - /code-security/secret-scanning/about-the-detection-of-generic-secrets-with-secret-scanning
---

<!--Note on the versioning above ^. This article is visible to free, pro, team users for transparency. They cannot use the feature so `fpt` is not included in the feature definition.-->

{% data reusables.rai.secret-scanning.generic-secret-detection-ai %}

## About generic secret detection for {% data variables.product.prodname_secret_scanning %}

Generic secret detection is an AI-powered expansion of {% data variables.product.prodname_secret_scanning %} that identifies unstructured secrets (passwords) in your source code and then generates an alert.

{% data variables.product.prodname_GH_advanced_security %} users can already receive {% data variables.secret-scanning.alerts %} for partner or custom patterns found in their source code, but unstructured secrets are not easily discoverable. AI-powered generic secret detection uses large language models (LLMs) to identify this type of secret.

When a password is detected, an alert is displayed in the list of {% data variables.product.prodname_secret_scanning %} alerts (under the **Security** tab of the repository, organization, or enterprise), so that maintainers and security managers can review the alert and, where necessary, remove the credential or implement a fix.

To use the feature, an enterprise owner sets a policy at the enterprise level that controls whether repositories can enable or disable AI detection. This policy is set to "allowed" by default. The feature must then be enabled for repositories and organizations.

### Input processing

Input is limited to text (typically code) that a user has checked into a repository. The system provides this text to the LLM along with a meta prompt asking the LLM to find passwords within the scope of the input. The user does not interact with the LLM directly.

The system scans for passwords using the LLM. No additional data is collected by the system, other than what is already collected by the existing {% data variables.product.prodname_secret_scanning %} feature.

### Output and display

The LLM scans for strings that resemble passwords and verifies that the identified strings included in the response actually exist in the input.

These detected strings are surfaced as alerts on the {% data variables.product.prodname_secret_scanning %} alerts page, but they are displayed in an additional list that is separate from regular {% data variables.secret-scanning.alerts %}. The intent is that this separate list is triaged with more scrutiny to verify the validity of the findings. Each alert notes that it was detected using AI. {% ifversion secret-scanning-ai-generic-secret-detection %}For information on how to view alerts for generic secrets, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts)."{% endif %}

## Improving the performance of generic secret detection

To improve the performance of generic secret detection, we recommend closing false positive alerts appropriately and providing feedback when you encounter issues.

### Verify the accuracy of alerts and close as appropriate

Since AI-powered generic secret detection may generate more false positives than the existing {% data variables.product.prodname_secret_scanning %} feature for partner patterns, it's important that you review the accuracy of these alerts. When you verify an alert to be a false positive, be sure to close the alert and mark the reason as "False positive" in the {% data variables.product.prodname_dotcom %} UI. The {% data variables.product.prodname_dotcom %} development team will use this information to improve the model.

### Provide feedback

Generic secret detection is currently in beta. If you encounter any issues or limitations with the feature, we recommend that you provide feedback through the **Give feedback** button listed under each detected secret in the list of alerts for the repository, organization, or enterprise. This can help the developers improve the tool and address any concerns or limitations.

## Limitations of generic secret detection

When using generic secret detection for {% data variables.product.prodname_secret_scanning %}, you should consider the following limitations.

### Limited scope

AI-powered generic secret detection currently only looks for instances of passwords in git content. The feature does not look for other types of generic secrets, and it does not look for secrets in non-git content, such as {% data variables.product.prodname_github_issues %}.

### Potential for false positive alerts

AI-powered generic secret detection may generate more false positive alerts when compared to the existing {% data variables.product.prodname_secret_scanning %} feature (which detects partner patterns, and which has a very low false positive rate). To mitigate this excess noise, alerts are grouped in a separate list from partner pattern alerts, and security managers and maintainers should triage each alert to verify its accuracy.

### Potential for incomplete reporting

AI-powered generic secret detection may miss instances of credentials checked into a repository. The LLM will improve over time. You retain ultimate responsibility for ensuring the security of your code.

## Evaluation of generic secret detection

Generic secret detection has been subject to Responsible AI Red Teaming and {% data variables.product.prodname_dotcom %} will continue to monitor the efficacy and safety of the feature over time.

{% ifversion secret-scanning-ai-generic-secret-detection %}

## Next steps

* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/generic-secret-detection/enabling-ai-powered-generic-secret-detection)
* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)

{% endif %}

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)
* [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-to-manage-the-use-of-generic-secret-detection-for-secret-scanning-in-your-enterprises-repositories)
