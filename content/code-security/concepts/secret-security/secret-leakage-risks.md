---
title: Secret leakage risks
shortTitle: Secret leakage risks
intro: 'Secrets like API keys, passwords, and tokens committed to repositories can be exploited by unauthorized users, creating security, compliance, and financial risk to your organization.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: concepts
---

## Secrets and credentials

Secrets are credentials that grant access to sensitive systems and data, including API keys, passwords, authentication tokens, certificates, and encryption keys. When secrets are committed to repositories, they become part of your Git history and remain accessible even after being removed from the latest commit.

Secrets in code repositories can be discovered by automated scanning tools and unauthorized users. Public repositories are particularly vulnerable, but leaked credentials from private repositories can also spread through forks, CI/CD logs, or third-party integrations.

## Security impact of exposed secrets

Exposed secrets can lead to several types of security incidents:

**Unauthorized access and usage**
* Leaked cloud provider credentials can be used to provision infrastructure or services on your account
* Database credentials allow access to sensitive customer or organizational data
* Service account tokens provide entry points to production systems

**Operational and compliance issues**
* Infrastructure can be modified or deleted using leaked credentials
* Data breaches from exposed secrets may result in regulatory penalties under GDPR, CCPA, and other frameworks
* Organizations face costs for incident response, credential rotation, and system remediation

**Organizational risk**
* Public disclosure of leaked secrets affects customer trust and organizational reputation
* Exposed package registry tokens can be used to publish malicious versions of your software
* Proprietary API keys or service credentials may be exploited

## Financial impact of exposed secrets

Secret leakage can result in direct and indirect costs to your organization, ranging from immediate expenses to long-term business consequences.

**Immediate costs**
* Unauthorized cloud resource usage from leaked API keys can generate charges for compute instances, storage, or data transfer
* Cryptocurrency mining operations on compromised accounts can result in substantial infrastructure bills
* Emergency incident response requires resources for forensic investigation, security audits, and credential rotation across systems

**Data breach costs**
* Regulatory fines for data protection violations can reach millions of dollars under GDPR, CCPA, and industry-specific regulations
* Legal costs include investigation, notification requirements, and potential litigation
* Credit monitoring and identity protection services for affected customers

**Operational impact**
* Service disruptions from compromised infrastructure result in lost revenue and productivity
* Engineering time spent responding to security incidents diverts resources from product development
* Increased security tooling and monitoring costs following incidents

**Long-term business impact**
* Customer churn following public disclosure of security incidents
* Increased insurance premiums for cyber liability coverage
* Lost business opportunities due to failed security assessments or compliance audits

## Common secret leakage scenarios

Secrets typically enter repositories through several common patterns:

**Development workflows**
* Credentials hardcoded during local testing and inadvertently committed
* Secrets in configuration files like `.env` files or infrastructure-as-code templates
* Example credentials containing real tokens in documentation, wikis, or README files

**Repository management**
* Legacy repositories containing forgotten but still-active credentials
* Secrets shared in GitHub issues, pull request comments, discussions, or gists
* Credentials introduced by external contributors or contractors

**Version control challenges**
* Secrets persist in Git history even after removal from current code
* Credentials propagate to forked repositories, backup systems, and logs
* Public repositories with exposed secrets are indexed by search engines and specialized scanning services

## Secret security with {% data variables.product.github %}

{% data variables.product.github %} provides tools to help you prevent, detect, and remediate secret leakage:

### 1. Prevent new secrets from being leaked

Enable **push protection for repositories** to scan code during `git push` operations and block commits containing detected secrets. This prevents credentials from entering your repositories while providing real-time feedback to developers.

Encourage your contributors to enable push protection for their personal accounts (the feature is referred to as "push protection for users") to protect all their pushes to their repositories, forks, and any repositories they contribute to across {% data variables.product.github %}. This allows individual developers to prevent secret leakage without waiting for organization-level policies.

### 2. Detect existing secrets

Use **{% data variables.product.prodname_secret_scanning %}** to continuously monitor repositories for committed secrets and receive alerts when credentials are detected. This enables you to revoke and rotate compromised credentials quickly.

## Next steps

To protect your organization from secret leakage:{% ifversion secret-risk-assessment %}
1. Run a free secret risk assessment to understand your current exposure.
{% data variables.secret-scanning.secret-risk-assessment-cta-product %}
{% endif %}
1. Enable push protection to prevent new secrets from being committed.
1. Enable {% data variables.product.prodname_secret_scanning %} with a click to begin detecting secret leaks.
1. Establish secure credential management practices for your development teams.

{% ifversion secret-risk-assessment %}
For an overview of {% data variables.product.github %}'s secret security features, see [AUTOTITLE](/code-security/concepts/secret-security/about-secret-security-with-github).
{% endif %}