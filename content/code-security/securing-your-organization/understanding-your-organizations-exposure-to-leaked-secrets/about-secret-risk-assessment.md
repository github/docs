---
title: 'About the secret risk assessment'
shortTitle: 'Secret risk assessment'
intro: 'Learn why it''s so important to understand your organization''s exposure to data leaks and how the {% data variables.product.prodname_secret_risk_assessment %} report gives an overview of your organization’s secret leak footprint.'
product: '{% data reusables.gated-features.secret-risk-assessment-report %}<br>{% data variables.secret-scanning.secret-risk-assessment-cta-product %}'
allowTitleToDifferFromFilename: true
type: overview
versions:
  feature: secret-risk-assessment
topics:
  - Secret scanning
  - Secret Protection
  - Code Security
  - Organizations
  - Security
---

## About exposure to leaked secrets

Assessing your exposure to leaked secrets is crucial if you want to prevent:

* **Exploitation by bad actors**. Malicious actors can use leaked secrets such as API keys, passwords, and tokens to gain unauthorized access to systems, databases, and sensitive information. Leaked secrets can lead to data breaches, compromising user data and potentially causing significant financial and reputational damage.

* **Regulatory problems**. Many industries have strict regulatory requirements for data protection, and leaked secrets can result in non-compliance with regulations, leading to legal penalties and fines.

* **Service disruptions**. Unauthorized access to systems can lead to service disruptions, impacting the availability and reliability of services provided to users.

* **Loss of trust**. Customers expect robust security measures to protect their data, and exposure to leaked secrets can erode trust and confidence in your organization's ability to safeguard information.

* **Costly fallout**. Addressing the fallout from leaked secrets can be costly, involving incident response efforts, security audits, and potential compensation for affected parties.

Regularly assessing your exposure to leaked secrets is good practice to help identify vulnerabilities, implement necessary security measures, and ensure that any compromised secrets are promptly rotated and invalidated. See industry examples and in-depth discussion in [Understanding your organization's exposure to secret leaks](https://resources.github.com/enterprise/understanding-secret-leak-exposure) in {% data variables.product.github %} Executive Insights.

## About {% data variables.product.prodname_secret_risk_assessment %}

{% data reusables.secret-risk-assessment.public-preview-note %}

{% ifversion fpt %}

>[!TIP] This report is only available if you are on the {% data variables.product.prodname_team %} plan. For information about the plan and how to upgrade, see [{% data variables.product.prodname_team %}](/get-started/learning-about-github/githubs-plans#github-team) and [Upgrading your organization's plan](/billing/managing-the-plan-for-your-github-account/upgrading-your-accounts-plan#upgrading-your-organizations-plan).

{% endif %}

{% data reusables.secret-risk-assessment.report-intro %}

The {% data variables.product.prodname_secret_risk_assessment %} report provides the following insights:

   * **Total secrets**—Aggregate count of exposed secrets detected within the organization.
   * **Public leaks**—Distinct secrets found in your organization's public repositories.
   * **Preventable leaks**—Secrets that could have been protected, using {% data variables.product.prodname_GH_secret_protection %} features such as {% data variables.product.prodname_secret_scanning %} and push protection.
   * **Secret locations**—Locations that are scanned for the report. {% data reusables.secret-risk-assessment.what-is-scanned %}
   * **Secret categories**—Distribution of the types of secrets that are leaked. Secrets can be partner secrets, which are strings that match secrets issued by service providers in our partner program, or generic secrets, which are non-provider patterns such as SSH keys, database connection strings, and JSON web tokens.
   * **Repositories with leaks**—Repositories where leaked secrets were detected, out of all the repositories scanned.

{% data reusables.security-overview.secret-risk-assessment-report-generation-cadence %}

Because the {% data variables.product.prodname_secret_risk_assessment %} report is based on **your repositories**, regardless of the enablement status of {% data variables.product.prodname_GH_secret_protection %} features, you can see your current exposure to leaked secrets, and understand better how {% data variables.product.github %} can help you prevent future secret leaks.

## Next steps

Now that you know about the {% data variables.product.prodname_secret_risk_assessment %} report, you may want to learn how to:

* Generate the report to see your organization risk. Navigate to {% data reusables.security-overview.navigate-to-risk-assessment %}.
* Interpret the results of the report. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/interpreting-secret-risk-assessment-results).
* Enable {% data variables.product.prodname_GH_secret_protection %} to improve your secret leak footprint. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/choosing-github-secret-protection#enabling-secret-protection).
