---
title: Responsible detection of generic secrets with Copilot secret scanning
shortTitle: Generic secret detection
intro: 'Learn how {% data variables.secret-scanning.copilot-secret-scanning %} uses AI responsibly to scan and create alerts for unstructured secrets, such as passwords.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.copilot-secret-scanning %}'
versions:
  feature: secret-scanning-ai-generic-secret-detection
  fpt: '*'
type: rai
topics:
  - Secret scanning
  - Secret Protection
  - AI
  - Copilot
redirect_from:
  - /code-security/secret-scanning/about-the-detection-of-generic-secrets-with-secret-scanning
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/generic-secret-detection/about-the-detection-of-generic-secrets-with-secret-scanning
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/generic-secret-detection/responsible-ai-generic-secrets
---

<!--Note on the versioning above ^. This article is visible to free, pro, team users for transparency. They cannot use the feature so `fpt` is not included in the feature definition.-->

## About {% data variables.secret-scanning.generic-secret-detection %} with {% data variables.secret-scanning.copilot-secret-scanning %}

{% data variables.secret-scanning.copilot-secret-scanning %}'s {% data variables.secret-scanning.generic-secret-detection %} is an AI-powered expansion of {% data variables.product.prodname_secret_scanning %} that identifies unstructured secrets (passwords) in your source code and then generates an alert.

{% data reusables.rai.secret-scanning.copilot-secret-scanning-generic-secrets-subscription-note %}

{% data variables.product.prodname_GH_advanced_security %} users can already receive {% data variables.secret-scanning.alerts %} for partner or custom patterns found in their source code, but unstructured secrets are not easily discoverable. {% data variables.secret-scanning.copilot-secret-scanning %} uses large language models (LLMs) to identify this type of secret.

When a password is detected, an alert is displayed in the "Experimental" list of {% data variables.product.prodname_secret_scanning %} alerts (under the **Security** tab of the repository, organization, or enterprise), so that maintainers and security managers can review the alert and, where necessary, remove the credential or implement a fix.

{% data reusables.rai.secret-scanning.generic-secret-detection-policy-note %} The feature must then be enabled for repositories and organizations.

### Input processing

Input is limited to text (typically code) that a user has checked into a repository. The system provides this text to the LLM along with a meta prompt asking the LLM to find passwords within the scope of the input. The user does not interact with the LLM directly.

The system scans for passwords using the LLM. No additional data is collected by the system, other than what is already collected by the existing {% data variables.product.prodname_secret_scanning %} feature.

### Output and display

The LLM scans for strings that resemble passwords and verifies that the identified strings included in the response actually exist in the input.

These detected strings are surfaced as alerts on the {% data variables.product.prodname_secret_scanning %} alerts page, but they are displayed in an additional list that is separate from regular {% data variables.secret-scanning.alerts %}. The intent is that this separate list is triaged with more scrutiny to verify the validity of the findings. Each alert notes that it was detected using AI. {% ifversion secret-scanning-ai-generic-secret-detection %}For information on how to view alerts for generic secrets, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts).{% endif %}

## Improving the performance of {% data variables.secret-scanning.generic-secret-detection %}

To improve the performance of {% data variables.secret-scanning.generic-secret-detection %}, we recommend closing false positive alerts appropriately.

### Verify the accuracy of alerts and close as appropriate

Since {% data variables.secret-scanning.copilot-secret-scanning %}'s {% data variables.secret-scanning.generic-secret-detection %} may generate more false positives than the existing {% data variables.product.prodname_secret_scanning %} feature for partner patterns, it's important that you review the accuracy of these alerts. When you verify an alert to be a false positive, be sure to close the alert and mark the reason as "False positive" in the {% data variables.product.prodname_dotcom %} UI. The {% data variables.product.prodname_dotcom %} development team will use information on false positive volume and detection locations to improve the model. {% data variables.product.prodname_dotcom %} does not have access to the secret literals themselves.

## Limitations of {% data variables.secret-scanning.generic-secret-detection %}

When using {% data variables.secret-scanning.copilot-secret-scanning %}'s {% data variables.secret-scanning.generic-secret-detection %}, you should consider the following limitations.

### Limited scope

{% data variables.secret-scanning.generic-secret-detection-caps %} currently only looks for instances of passwords in git content. The feature does not look for other types of generic secrets, and it does not look for secrets in non-git content, such as {% data variables.product.prodname_github_issues %}.

### Potential for false positive alerts

{% data variables.secret-scanning.generic-secret-detection-caps %} may generate more false positive alerts when compared to the existing {% data variables.product.prodname_secret_scanning %} feature (which detects partner patterns, and which has a very low false positive rate). To mitigate this excess noise, alerts are grouped in a separate list from partner pattern alerts, and security managers and maintainers should triage each alert to verify its accuracy.

### Potential for incomplete reporting

{% data variables.secret-scanning.generic-secret-detection-caps %} may miss instances of credentials checked into a repository. The LLM will improve over time. You retain ultimate responsibility for ensuring the security of your code.

### Limitations by design

{% data variables.secret-scanning.generic-secret-detection-caps %} has the following limitations by design:

* {% data variables.secret-scanning.copilot-secret-scanning %} will not detect secrets that are obviously fake or test passwords, or passwords with low entropy.
* {% data variables.secret-scanning.copilot-secret-scanning %} will only detect a maximum of 100 passwords per push.
* If five or more detected secrets within a single file are marked as false positive, {% data variables.secret-scanning.copilot-secret-scanning %} will stop generating new alerts for that file.
* {% data variables.secret-scanning.copilot-secret-scanning %} does not detect secrets in generated or vendored files.
* {% data variables.secret-scanning.copilot-secret-scanning %} does not detect secrets in encrypted files.
* {% data variables.secret-scanning.copilot-secret-scanning %} does not detect secrets in file types: SVG, PNG, JPEG, CSV, TXT, SQL, or ITEM.
* {% data variables.secret-scanning.copilot-secret-scanning %} does not detect secrets in test code. {% data variables.secret-scanning.copilot-secret-scanning %} skips detections when both conditions are met:
   * The file path contains "test", "mock", or "spec", AND
   * The file extension is `.cs`, `.go`, `.java`, `.js`, `.kt`, `.php`, `.py`, `.rb`, `.scala`, `.swift`, or `.ts`.

## Evaluation of {% data variables.secret-scanning.generic-secret-detection %}

{% data variables.secret-scanning.generic-secret-detection-caps %} has been subject to Responsible AI Red Teaming and {% data variables.product.prodname_dotcom %} will continue to monitor the efficacy and safety of the feature over time.

{% ifversion secret-scanning-ai-generic-secret-detection %}

## Next steps

* [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/enabling-ai-powered-generic-secret-detection)
* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)

{% endif %}

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning){% ifversion ghec %}
* [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise#enforcing-a-policy-to-manage-the-use-of-generic-secret-detection-for-secret-scanning-in-your-enterprises-repositories){% endif %}
