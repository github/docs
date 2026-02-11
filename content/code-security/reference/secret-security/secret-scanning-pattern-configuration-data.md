---
title: Secret scanning pattern configuration data
shortTitle: Secret pattern data
intro: Understand the data displayed in the {% data variables.product.prodname_secret_scanning %} pattern configuration page to make informed decisions about push protection settings.
permissions: '{% data reusables.permissions.secret-risk-assessment-report-generation %}'
versions:
  feature: security-configurations
topics:
  - Code Security
  - Secret scanning
  - Secret Protection
  - Organizations
  - Security
  - Advanced Security
  - Enterprise
contentType: reference

---

When configuring push protection, you can view performance data for each secret pattern to make informed enablement decisions. Use metrics like alert volume and false positive rates to balance security with developer experience. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configuring-global-security-settings-for-your-organization#specifying-patterns-to-include-in-push-protection){% ifversion security-configuration-enterprise-level %} or [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/configuring-additional-secret-scanning-settings-for-your-enterprise#specifying-patterns-to-include-in-push-protection-for-your-enterprise){% endif %}.

{% data reusables.secret-scanning.pattern-enablement-org-enterprise-chart %}
 