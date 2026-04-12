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

## What are secrets?

Secrets are credentials that grant access to sensitive systems and data. Common examples include:

* API keys and tokens used to authenticate with external services
* Database passwords and connection strings
* Cloud provider credentials and service account tokens
* Certificates and encryption keys

When secrets are committed to repositories, they become **hardcoded credentials** that are embedded directly in your source code or configuration files. These hardcoded secrets become part of your Git history and remain accessible even after being removed from the latest commit. This means that addressing a credential leak requires more than deleting the file; you must also revoke and replace the credential to prevent unauthorized access.

## How secrets get exposed

**Secret sprawl** occurs when credentials proliferate across repositories, teams, and systems without centralized management or visibility. This makes it difficult to track which secrets exist, where they're used, and whether they've been exposed. Secrets typically enter repositories through several common patterns.

### Development workflows

* Hardcoded credentials added during local testing and inadvertently committed
* Secrets in configuration files such as `.env` files or infrastructure-as-code templates
* Example credentials containing real API keys or tokens in documentation, wikis, or README files

### Repository management

* Legacy repositories containing forgotten but still-active credentials
* Secrets shared in {% data variables.product.github %} issues, pull request comments, discussions, or gists
* Credentials introduced by external contributors or contractors

### Version control propagation

* Secrets persist in Git history even after removal from current code.
* Credentials propagate to forked repositories, backup systems, and CI/CD logs.
* Public repositories with exposed secrets are indexed by search engines and specialized scanning services.

## Security risks

Exposed secrets can lead to several types of security incidents.

### Unauthorized access

Credential leaks give unauthorized users direct access to your systems. Once exposed, hardcoded secrets can be exploited to:

* Provision infrastructure or services on your account using leaked cloud provider credentials
* Access sensitive customer or organizational data through compromised database credentials
* Gain entry to production systems via exposed service account tokens

### Data breaches

Credential leaks give unauthorized users direct access to your systems, leading to data breaches. Once attackers gain access using exposed credentials, they can exfiltrate sensitive data, modify or delete critical information, and compromise customer trust. Data breaches require immediate incident response, including credential revocation, system remediation, and assessment of the breach's scope and impact.

### Supply chain attacks

Exposed package registry tokens can be used to publish malicious versions of your software, affecting downstream users and organizations that depend on your packages.

## Financial impact

Exposed secrets can cost your organization money in several ways.

* **Unexpected cloud bills**: Leaked API keys let attackers use your cloud resources. They can run compute instances, store data, or mine cryptocurrency on your account, generating large bills.
* **Incident response**: Investigating breaches, rotating credentials, and auditing systems takes significant engineering time and resources.
* **Legal costs**: Data breaches can result in fines, legal fees, and notification expenses.
* **Long-term damage**: Lost customers, higher insurance costs, and missed business opportunities after security incidents become public.

## Secret security with {% data variables.product.github %}

{% data variables.product.github %} provides tools to help you prevent, detect, and remediate secret leakage:

### 1. Prevent new secrets from being committed

Enable **Push protection** to scan code during `git push` operations and block commits containing detected secrets before they enter your repository. This prevents hardcoded credentials from being added to your codebase and provides real-time feedback to developers at the point of risk, covering both provider patterns for known services and non-provider patterns such as private keys and generic API keys.

Encourage individual developers to enable push protection for their personal accounts to protect all their pushes across {% data variables.product.github %}, regardless of organization policies. This helps prevent secret sprawl by catching leaked credentials before they reach your repositories.

### 2. Detect existing secrets

Use **{% data variables.product.prodname_secret_scanning %}** to continuously monitor your repositories for hardcoded secrets and generate alerts when credentials are detected, enabling you to revoke and rotate compromised credentials quickly. Beyond default detection of provider patterns, you can expand scanning to non-provider patterns and define custom patterns for organization-specific secrets. This helps you gain visibility into secret sprawl across your organization.

## Next steps

To protect your organization from secret leakage:
{% ifversion secret-risk-assessment %}
1. Run a free secret risk assessment to understand your current exposure. {% data variables.secret-scanning.secret-risk-assessment-cta-product %}
{% endif %}
1. Enable push protection to prevent new secrets from being committed.
1. Enable {% data variables.product.prodname_secret_scanning %} to begin detecting existing secret leaks.
1. Establish secure credential management practices for your development teams.

{% ifversion secret-risk-assessment %}
For an overview of {% data variables.product.github %}'s secret security features, see [AUTOTITLE](/code-security/concepts/secret-security/about-secret-security-with-github).
{% endif %}