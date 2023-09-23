---
title: Best practices for writing repository security advisories
intro: 'When you create or edit security advisories, the information you provide is easier for other users to understand when you specify the ecosystem, package name, and affected versions using the standard formats.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Best practices
redirect_from:
  - /code-security/repository-security-advisories/best-practices-for-writing-repository-security-advisories
  - /code-security/security-advisories/guidance-on-reporting-and-writing/best-practices-for-writing-repository-security-advisories
---

Anyone with admin permissions to a repository can create and edit a security advisory.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## About security advisories for repositories

{% data reusables.security-advisory.security-advisory-overview %} For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories)."

## Best practices

We recommend you use the syntax used in the {% data variables.product.prodname_advisory_database %}, especially the version formatting, when you write a repository security advisory, or make a community contribution to a global security advisory.

If you follow the syntax for the {% data variables.product.prodname_advisory_database %}, especially when you define affected versions:
- When you publish your repository advisory, we can add your advisory to the {% data variables.product.prodname_advisory_database %} as a "{% data variables.product.company_short %}-reviewed" advisory, without needing to ask for more information.
- {% data variables.product.prodname_dependabot %} will have the information to accurately identify repositories that are affected and send them {% data variables.product.prodname_dependabot_alerts %} to notify them.
- Community members are less likely to suggest edits to your advisory to fix missing or incorrect information.

You add or edit a repository advisory using the _Draft security advisory_ form. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/creating-a-repository-security-advisory)."

You suggest an improvement to an existing global advisory using the _Improve security advisory_ form. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/editing-security-advisories-in-the-github-advisory-database)."

### Ecosystem

You need to assign the advisory to one of our supported ecosystems using the **Ecosystem** field. For more information about the ecosystems we support, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/browsing-security-advisories-in-the-github-advisory-database#github-reviewed-advisories)."

![Screenshot of the "Affected products" area of the security advisory form. The "Ecosystem" field is highlighted with a dark orange outline.](/assets/images/help/security/security-advisory-ecosystem.png)

### Package name

We recommend that you use the **Package name** field to specify which packages are affected because package information is required for "{% data variables.product.company_short %}-reviewed" advisories in the {% data variables.product.prodname_advisory_database %}. Package information is optional for repository-level security advisories, but including this information early simplifies the review process when you publish your security advisory.

### Affected versions

We recommend that you use the **Affected versions** field to specify which versions are affected because this information is required for "{% data variables.product.company_short %}-reviewed" advisories in the {% data variables.product.prodname_advisory_database %}. Version information is optional for repository-level security advisories, but including this information early simplifies the review process when you publish your security advisory.

- A valid affected version string consists of one of the following:
  - A lower bound operator sequence.
  - An upper bound operator sequence.
  - Both an upper and lower bound operator sequence.
  - A specific version sequence using the equality (`=`) operator.
- Each operator sequence must be specified as the operator, a single space, and then the version.
  - Valid operators are `=`, `<`, `<=`, `>`, or `>=`.
  - The version must begin with a number followed by any number of numbers, letters, dots, dashes, or underscores (anything other than a space or comma)
  - When specifying both an upper and lower bound sequence, the lower bound must come first, followed by a comma and a single space, then the upper bound.
   {% note %}

   **Note:** Affected version strings cannot contain leading or trailing spaces.

   {% endnote %}

- Upper-bound operators can be inclusive or exclusive, i.e. `<=` or `<`, respectively.
- Lower-bound operators can be inclusive or exclusive, i.e. `>=` or `>`, respectively. However, if you publish your repository advisory, and we graduate your repository advisory into a global advisory, a different rule applies: lower-bound strings can only be inclusive, i.e. `>=`. The exclusive lower bound operator (`>`) is only allowed when the version is `0`, for example `> 0`.

  {% note %}

  **Notes:** The lower-bound limitation:
  - is due to incompatibilities with the OSV (Open Source Vulnerability) schema.
  - only applies when you make a suggestion on an existing advisory in the {% data variables.product.prodname_advisory_database %}.

  {% endnote %}

- You cannot specify multiple affected version ranges in the same field, such as `> 2.0, < 2.3, > 3.0, < 3.2`.To specify more than one range, you must create a new **Affected products** section for each range, by clicking the **+ Add another affected product** button.

  ![Screenshot of the "Affected products" area of the security advisory form. A link, labeled "Add another affected product", is highlighted with a dark orange outline.](/assets/images/help/security/security-advisory-add-another-affected-product.png)
- If the affected version range includes only a single upper or lower bound:
  - The implicit value is always `> 0` if the lower bound is not explicitly specified.
  - The implicit value is always infinity if the upper bound is not explicitly specified.

For more information about the {% data variables.product.prodname_advisory_database %}, see [https://github.com/github/advisory-database](https://github.com/github/advisory-database).
