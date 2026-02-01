---
title: About secret security with GitHub
shortTitle: Secret protection tools
intro: Learn how {% data variables.product.github %}'s security tools can help you identify, remediate, and prevent secret leaks.
product: '{% data reusables.gated-features.secret-protection %}'
permissions: Organizations on {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %}
contentType: concepts
versions:
  feature: secret-risk-assessment
topics:
  - Code Security
  - Secret scanning
  - Secret Protection
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/about-secret-risk-assessment
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/about-secret-security-with-github
---

{% data variables.product.github %} provides tools to help you understand and address your organization's exposure to leaked secrets:

- **Secret risk assessment**: A free, on-demand scan that reveals your organization's current exposure to leaked secrets.
- **{% data variables.product.prodname_GH_secret_protection %}**: A comprehensive suite of features that detects existing secrets and prevents new leaks across your repositories.

## Secret risk assessment

The secret risk assessment provides organization owners and security managers with a free point-in-time scan of their organization's repositories to identify leaked secrets like API keys, tokens, and passwords.

{% data variables.secret-scanning.secret-risk-assessment-cta-product %}

### What the assessment shows

The assessment report includes:

- **Total secrets detected**: The aggregate count of exposed secrets in your organization.
- **Public leaks**: Secrets found in public repositories that are accessible to anyone.
- **Preventable leaks**: Secrets that could have been blocked with push protection enabled.
- **Secret categories**: The distribution of secret types (such as AWS keys, {% data variables.product.github %} tokens, or generic passwords).

### Why assess your risk

Regular assessment helps prevent:
* Unauthorized access to your systems and data
* Service disruptions from compromised credentials
* Regulatory compliance issues
* Financial loss from resource misuse
* Reputational damage from security incidents

## {% data variables.product.prodname_GH_secret_protection %}

{% data variables.product.prodname_GH_secret_protection %} is a {% data variables.product.prodname_GH_advanced_security %} product containing a suite of features designed to prevent, detect, and assist in remediating secret leaks in your organization.

While the {% data variables.product.prodname_secret_risk_assessment %} provides a point-in-time view of your organization's current secret exposure, {% data variables.product.prodname_GH_secret_protection %}:

* **Implements continuous monitoring** and expands scanned surfaces beyond code to include pull requests, issues, wikis, and discussions
* **Prevents secret leaks** by blocking commits containing secrets before they are saved to {% data variables.product.github %}
* **Creates actionable alerts** that can be grouped into campaigns and assigned to team members for remediation
* **Meets your specific needs** by scanning for patterns unique to your organization and unstructured secrets like passwords
* **Supports governance at scale** with settings dictating who can bypass protections and dismiss alerts
* **Surfaces key analytics** through a view dedicated to your organization's secret security

Through these features, {% data variables.product.prodname_GH_secret_protection %} provides complete coverage for your organization, reducing the risk of costly secret leaks and high-effort remediation processes.

For more information about the specific features of {% data variables.product.prodname_GH_secret_protection %}, see [AUTOTITLE](/code-security/getting-started/github-security-features#available-with-github-secret-protection).

## Next steps

Now that you know how {% data variables.product.github %} can help keep your secrets safe, you should assess your organization's current exposure to leaked secrets. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/assess-your-secret-risk).
