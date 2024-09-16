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

Anyone with admin permissions to a public repository can create and edit a security advisory.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## About security advisories for repositories

{% data reusables.security-advisory.security-advisory-overview %} For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories)."

We recommend you use the syntax used in the {% data variables.product.prodname_advisory_database %}, especially the version formatting, when you write a repository security advisory, or make a community contribution to a global security advisory.

If you follow the syntax for the {% data variables.product.prodname_advisory_database %}, especially when you define affected versions:
* When you publish your repository advisory, we can add your advisory to the {% data variables.product.prodname_advisory_database %} as a "{% data variables.product.company_short %}-reviewed" advisory, without needing to ask for more information.
* {% data variables.product.prodname_dependabot %} will have the information to accurately identify repositories that are affected and send them {% data variables.product.prodname_dependabot_alerts %} to notify them.
* Community members are less likely to suggest edits to your advisory to fix missing or incorrect information.

You add or edit a repository advisory using the _Draft security advisory_ form. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/creating-a-repository-security-advisory)."

You suggest an improvement to an existing global advisory using the _Improve security advisory_ form. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/editing-security-advisories-in-the-github-advisory-database)."

## Ecosystem

You need to assign the advisory to one of our supported ecosystems using the **Ecosystem** field. For more information about the ecosystems we support, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/browsing-security-advisories-in-the-github-advisory-database#github-reviewed-advisories)."

![Screenshot of the "Affected products" area of the security advisory form. The "Ecosystem" field is highlighted with a dark orange outline.](/assets/images/help/security/security-advisory-ecosystem.png)

## Package name

We recommend that you use the **Package name** field to specify which packages are affected because package information is required for "{% data variables.product.company_short %}-reviewed" advisories in the {% data variables.product.prodname_advisory_database %}. Package information is optional for repository-level security advisories, but including this information early simplifies the review process when you publish your security advisory.

## Affected versions

We recommend that you use the **Affected versions** field to specify which versions are affected because this information is required for "{% data variables.product.company_short %}-reviewed" advisories in the {% data variables.product.prodname_advisory_database %}. Version information is optional for repository-level security advisories, but including this information early simplifies the review process when you publish your security advisory.

For more information about the {% data variables.product.prodname_advisory_database %}, see [https://github.com/github/advisory-database](https://github.com/github/advisory-database).

### Glossary

* **Vulnerable Version Range (VVR)**: the range of versions that are vulnerable to a particular software bug.
* **Operator**: any symbol that indicates the boundary of a vulnerable version range.
* **Open Source Vulnerability format (OSV)**: format that the {% data variables.product.prodname_advisory_database %} data strives to be compatible with.

### Version syntax

* Smaller numbers are earlier versions than larger numbers. for example, `1.0.0` is a lower version than `2.0.0`
* Earlier letters in the alphabet are earlier versions than later letters in the alphabet. For example, `2.0.0-a` is an earlier version than `2.0.0-b`.
* Any letters that come after a number are considered part of a prerelease, so any versions with letters after the numbers are earlier versions than numbers without letters in the version number. For example,  `2.0.0-alpha`, `2.0.0-beta`, and `2.0.0-rc` are earlier than `2.0.0`.
* A fixed version cannot be smaller than the largest number in the VVR. For example, a vulnerable version is released and the maintainer recommends downgrading. The maintainer cannot label that lower version as a fixed or patched version in the `Fixed` field because that version is smaller than the vulnerable version.

### Supported operators

* `>=` for “greater than or equal to this version”.
* `>` for “greater than this version”.

   >[!WARNING] Although {% data variables.product.prodname_dotcom %} supports the use of the `>` operator, using this operator is not recommended because it's not supported by the OSV format.

* `=` for “equal to this version”.
* `<=` for “less than or equal to this version”.
* `<` for “less than this version”.

### Specifying affected versions on {% data variables.product.prodname_dotcom %}

It is important to clearly define the affected versions for an advisory. {% data variables.product.prodname_dotcom %} provides several options in the **Affected versions** field for you to specify vulnerable version ranges.

For examples showing how affected versions are defined in some existing advisories, see [Examples](#examples).

* A valid affected version string consists of one of the following:
  * A lower bound operator sequence.
  * An upper bound operator sequence.
  * Both an upper and lower bound operator sequence. The lower bound must come first, followed by a comma and a single space, then the upper bound.
  * A specific version sequence using the equality (`=`) operator.
  * Each operator sequence must be specified as the operator, a single space, and then the version. For more information about valid operators, see [Supported operators](#supported-operators) above.
  * The version must begin with a number followed by any number of numbers, letters, dots, dashes, or underscores (anything other than a space or comma). For more information about version formatting, see [Version syntax](#version-syntax) above.

   {% note %}

   **Note:** Affected version strings cannot contain leading or trailing spaces.

   {% endnote %}

* Upper-bound operators can be inclusive or exclusive, i.e. `<=` or `<`, respectively.
* Lower-bound operators can be inclusive or exclusive, i.e. `>=` or `>`, respectively. However, if you publish your repository advisory, and we graduate your repository advisory into a global advisory, a different rule applies: lower-bound strings can only be inclusive, i.e. `>=`. The exclusive lower bound operator (`>`) is only allowed when the version is `0`, for example `> 0`.
* Proper use of spaces
   * Use a space between an operator and a version number.
   * Do not use a space in `>=` or `<=`.
   * Do not use a space between a number and a comma in `>= lower bound, <= upper bound`.
   * Use a space between a comma and the upper bound operator.

  {% note %}

  **Notes:** The lower-bound limitation:
  * Is due to incompatibilities with the OSV schema.
  * Only applies when you make a suggestion on an existing advisory in the {% data variables.product.prodname_advisory_database %}.

  {% endnote %}

* You cannot specify multiple affected version ranges in the same field, such as `> 2.0, < 2.3, > 3.0, < 3.2`.To specify more than one range, you must create a new **Affected products** section for each range, by clicking the **+ Add another affected product** button.

  ![Screenshot of the "Affected products" area of the security advisory form. A link, labeled "Add another affected product", is highlighted with a dark orange outline.](/assets/images/help/security/security-advisory-add-another-affected-product.png)
* If the affected version range includes only a single upper or lower bound:
  * The implicit value is always `> 0` if the lower bound is not explicitly specified.
  * The implicit value is always infinity if the upper bound is not explicitly specified.

### Setting an upper bound only on a VVR

* If you set only an upper bound, use `<=` or `<`.
* The {% data variables.product.prodname_advisory_database %} uses the PyPA database as one of its data sources. However, {% data variables.product.prodname_dotcom %} doesn't match the PyPA VVR format exactly (PyPa security advisories often use `>= 0, <= n` or `>= 0, < n` to refer to version ranges that only have an upper bound).
* There is no need to include `>= 0` in a range that only has an upper bound.

### Setting a lower bound only on a VVR

* The advisory curation team doesn't recommend setting lower bounds only on any advisory other than malware.
This is because, if a fixed version is ever released, users of the fixed version will continue to receive unnecessary {% data variables.product.prodname_dependabot_alerts %} until the advisory is manually updated.
* Use `>= 0` for all versions
* `> 0` is generally not used.

### Specifying only one affected version

* `= n` for the single affected version
* Keep in mind that the `=` will not automatically include any pre-releases, alpha, or beta versions, _only_ the version specified.

### Common errors

* Avoid using the `< n` vulnerable version range and then saying `n+1` is patched.
   * `< n` should only be used when `n` is not vulnerable.
   * In this case, the VVR should be `<= n` or `< n+1`.

* Avoid using only a number when describing fixed versions with official version numbers that have letters. Say your software has two branches, `linux` and `windows`. When you release `2.0.0-linux` and `2.0.0-windows`, using `< 2.0.0` as the vulnerable version will mark `2.0.0-linux` and `2.0.0-windows` as vulnerable because the version logic interprets `-linux` and `-windows` as prereleases. You will need to mark `2.0.0-linux`, the earliest branch in the alphabet, as the first patched version to avoid `2.0.0-linux` and `2.0.0-windows` being considered vulnerable.

### Examples

#### Advisory with multiple VVRs and multiple operators

[Etcd Gateway TLS authentication only applies to endpoints detected in DNS SRV records (GHSA-wr2v-9rpq-c35q)](https://github.com/advisories/GHSA-wr2v-9rpq-c35q) has two vulnerable version ranges:
* `< 3.3.23`, which has an upper bound with no lower bound and uses the `<` operator.
* `>= 3.4.0-rc.0, <= 3.4.9`, which has both an upper bound and a lower bound, and uses the `>=` and `<=` operators.

#### Advisory showing the relationship between a prerelease and a regular release

[XWiki Platform allows XSS through XClass name in string properties (GHSA-wcg9-pgqv-xm5v)](https://github.com/advisories/GHSA-wcg9-pgqv-xm5v) has four vulnerable version ranges:

* `>= 1.1.2, < 14.10.21`
* `>= 15.0-rc-1, < 15.5.5`
* `>= 15.6-rc-1, < 15.10.6`
* `= 16.0.0-rc-1`

Three of these VVRs include prereleases in the range of vulnerable versions. The last VVR, `= 16.0.0-rc-1`, shows that only `16.0.0-rc-1` is vulnerable, while the regular release that came after it, `16.0.0`, isn't. The logic considers `16.0.0-rc-1` and `16.0.0` as separate versions, with `16.0.0-rc-1` being an earlier release than `16.0.0`.

The patch for this vulnerability was published on Jan 24, 2024, for version 16.0.0. For more information see [commit 27eca84](https://github.com/xwiki/xwiki-platform/commit/27eca8423fc1ad177518077a733076821268509c) in the `xwiki/xwiki-platform ` repository. The [XWiki Platform Old Core](https://mvnrepository.com/artifact/org.xwiki.platform/xwiki-platform-oldcore) page in the MVN Repository site shows that `16.0.0-rc-1` was published on Jan 22, 2024, before the fix was added to XWiki, and `16.0.0` was published on Jan 29, 2024, after the fix was committed.

#### Advisory with branch names in version numbers

[Google Guava](https://mvnrepository.com/artifact/com.google.guava/guava) has two branches, `android` and `jre`, in its version releases. [Guava vulnerable to insecure use of temporary directory (GHSA-7g45-4rm6-3mm3)](https://github.com/advisories/GHSA-7g45-4rm6-3mm3) and [Information Disclosure in Guava (GHSA-5mg8-w23w-74h3)](https://github.com/advisories/GHSA-5mg8-w23w-74h3) are advisories about vulnerabilities that affect Guava. Both advisories set `32.0.0-android` as the patched version.

* The version range logic interprets letters after `32.0.0` as prereleases, so if you set the patched version to `32.0.0`, then both `32.0.0-android` and `32.0.0-jre` would be incorrectly marked as vulnerable.
* The version range logic interprets letters later in the alphabet as being a later version than letters earlier in the alphabet, so if you set the patched version to `32.0.0-jre`, then `32.0.0-android` would be incorrectly marked as vulnerable.

The best way to indicate that both `32.0.0-android` and `32.0.0-jre` are patched is to use `32.0.0-android` as the patched version, and the logic will interpret everything after `32.0.0-android` in the alphabet as patched.
