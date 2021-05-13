# Liquid helpers <!-- omit in toc -->

We use the [Liquid template language](https://shopify.github.io/liquid/basics/introduction/) (specifically, [this Node.js port](https://github.com/docs/liquid)) to create different versions of our content.

Note: If you are an open source contributor, you should not worry about versioning content. This document is only here as reference.

## Versioning documentation for GitHub.com, GitHub Enterprise Server, and GitHub AE<!-- omit in toc -->

**In this guide**
- [Versioned documentation](#versioned-documentation)
  - [Dotcom](#dotcom)
  - [GitHub Enterprise Server](#github-enterprise-server)
  - [GitHub AE](#github-ae)
- [Versioning in the YAML front matter](#versioning-in-the-yaml-front-matter)
- [Liquid conditional operators](#liquid-conditional-operators)
  - [Comparison operators](#comparison-operators)
  - [Logical operators](#logical-operators)
- [Liquid conditional statements for Dotcom](#liquid-conditional-statements-for-dotcom)
  - [Including content that *only applies to Dotcom*](#including-content-that-only-applies-to-dotcom)
- [Liquid conditional statements for GitHub Enterprise Server](#liquid-conditional-statements-for-github-enterprise-server)
  - [Including content that only applies to all supported versions of Enterprise Server](#including-content-that-only-applies-to-all-supported-versions-of-enterprise-server)
  - [Including content for *new Dotcom features* that will be included in Enterprise Server](#including-content-for-new-dotcom-features-that-will-be-included-in-enterprise-server)
  - [Including content for *changed* Dotcom features that will also change in Enterprise Server](#including-content-for-changed-dotcom-features-that-will-also-change-in-enterprise-server)
  - [Including content for *changed* Dotcom features that will also change in Enterprise Server but don't exist in some older versions](#including-content-for-changed-dotcom-features-that-will-also-change-in-enterprise-server-but-dont-exist-in-some-older-versions)
  - [Including content for *new Enterprise Server features* that don't exist on Dotcom](#including-content-for-new-enterprise-server-features-that-dont-exist-on-dotcom)
  - [Including content for *changed Enterprise Server features* that don't exist on Dotcom](#including-content-for-changed-enterprise-server-features-that-dont-exist-on-dotcom)
- [Liquid conditional statements for GitHub AE](#liquid-conditional-statements-for-github-ae)
  - [Including content that *only applies to GitHub AE*](#including-content-that-only-applies-to-github-ae)
  - [Including content that only applies to *GitHub AE and Enterprise Server*](#including-content-that-only-applies-to-github-ae-and-github-enterprise-server)
  - [Including content for features that will be included in the *next release* of GitHub AE](#including-content-for-features-that-will-be-included-in-the-next-release-of-github-ae)

### Versioned documentation

We provide versioned documentation for users of GitHub.com (Dotcom), GitHub Enterprise Server, and GitHub AE. This means the material on docs.github.com is scoped to specific product offerings. If multiple versions of content exist, readers can choose the version from the version picker at the top of the page.

#### Dotcom

Documentation for Dotcom has one version: the latest version.

#### GitHub Enterprise Server

Documentation for GitHub Enterprise Server can generally be divided into three types: documentation for the latest release, documentation for any previous supported release, and documentation for a deprecated release.

#### GitHub AE

Documentation for GitHub AE is similar to Dotcom: we only offer one version of the content for the product, the latest version.

### Versioning in the YAML front matter

Use the `versions` key within the file's YAML front matter to define which products an entire page applies to. For more information, see [the _content_ directory's README](/content#versions).

By default, any text in the body of the Markdown file will display for all product versions that you define in the `versions` key.

### Liquid conditional operators

If you define multiple products in the `versions` key within a page's YAML front matter, you can use the conditional operators `if`/`else` and `if`/`elsif`/`else` in the page's body to control how the site renders content on the page for a particular product. For example, a feature may have more options on Dotcom than on GitHub Enterprise Server, so you can version the content for both Dotcom and GitHub Enterprise Server via the `versions` front matter, then use Liquid conditionals to describe the additional options for Dotcom within the rendered HTML.

Use the operators in Liquid tags (`{% ... %}`). Do not use `else if`. If you do, the content in that portion of the block will not render.

#### Comparison operators

|Operator | Meaning|
|--|--|
|`ver_gt`| Greater than|
|`ver_lt`| Less than|
|`==`| Equal to|
|`!=`| Not equal to**|

#### Logical operators

Note: The below examples are only intended to show Liquid syntax and operators. The variables may not reflect what's currently in the content files.

In statements where **all** operands must be true for the condition to be true, use the operator `and`:

```
{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}
```

In statements where **at least one** operand must be true for the condition to be true, use the operator `or`:

```
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
```

Do **not** use the operators `&&` or `||`. If you do, the content will not render in the intended versions. Only use `and` or `or`.

### Liquid conditional statements for Dotcom

If the Markdown source's `versions` front matter includes Dotcom and you want the content to display for Dotcom, do not include any Liquid logic at all. Deploying the site will automatically generate the HTML content for Dotcom.

#### Including content that *only applies to Dotcom*

If your content only applies to GitHub.com, such as billing information, use this logic:

```
{% if currentVersion == "free-pro-team@latest" %}This is how you pay for your personal account, which is something you wouldn't do in Enterprise.{% endif %}
```

In this example:
- `if currentVersion == "free-pro-team@latest"` will include the content for Dotcom output and *only* Dotcom.
- `{% endif %}` ends the statement.

### Liquid conditional statements for GitHub Enterprise Server

Use the custom `ver_gt` and `ver_lt` Liquid operators to conditionally include or exclude GitHub Enterprise Server content.

- `ver_lt` stands for "version less than"
- `ver_gt` stands for "version greater than"

See the [Semantic Versioning specification](https://semver.org/#spec-item-11) for more details on version precedence.

If the Markdown source's `versions` front matter includes a version or versions of GitHub Enterprise Server and you want the content to display for those versions of GitHub Enterprise Server, do not include any Liquid logic at all. Deploying the site will automatically generate the HTML content for the supported versions of GitHub Enterprise Server.

#### Including content that *only applies to all supported versions of Enterprise Server*

If your content only applies to Enterprise Server, and the content applies to all supported versions, such as subdomain isolation, use this logic:

```
{% if enterpriseServerVersions contains currentVersion %}Remember to isolate your subdomains, administrator.{% endif %}
```

In this example:
- `if enterpriseServerVersions contains currentVersion` checks to see if the version of the article you're viewing, `currentVersion`, is a supported version of Enterprise Server within an array of the supported versions of Enterprise Server, `enterpriseServerVersions`.
- `{% endif %}` ends the statement.

#### Including content for *new Dotcom features* that will be included in Enterprise Server

If your content is describing a new feature that was added to GitHub.com and will be automatically included in the next release of GitHub Enterprise Server, use this logic:

```
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}This is a brand new feature, the likes of which have never been seen at this company before!{% endif %}
```

In this example:

- `if currentVersion == "free-pro-team@latest"` will include the content for GitHub.com output.
- `or currentVersion ver_gt "enterprise-server@2.21"` will include the content for releases *after* Enterprise Server 2.21, which means the content will be included for 2.22+.
- `{% endif %}` ends the statement.

#### Including content for *changed* Dotcom features that will also change in Enterprise Server

If your content is describing a change to existing functionality in Dotcom, such as changed UI text or a more simple means of completing a task, use this logic:

```
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}This is the new way of doing things {% else %}This is the old way of doing things {% endif %}
```

In this example:

- `if currentVersion == "free-pro-team@latest"` will include the content for GitHub.com output.
- `or currentVersion ver_gt "enterprise-server@2.21"` will include the content for releases *after* Enterprise Server 2.21, which means the content will be included for 2.22+.
- `{% else %}` means if the above is NOT true, then display the content that follows, `This is the old way of doing things`.
- `{% endif %}` ends the statement.

#### Including content for *changed* Dotcom features that will also change in Enterprise Server but don't exist in some older versions

If your content is describing a change to existing functionality in Dotcom, and that functionality doesn't exist in all older Enterprise versions, use logic like this:

```
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

This is the new way of doing things.

{% elsif currentVersion ver_gt "enterprise-server@2.19" and currentVersion ver_lt "enterprise-server@2.21" %}

This is the old way of doing things (which did not exist before 2.20).

{% endif %}
```

In this example:

- `if currentVersion == "free-pro-team@latest"` will include the content for GitHub.com output.
- `or currentVersion ver_gt "enterprise-server@2.20"` will include the content for releases *after* Enterprise Server 2.20, which means the content will be included for 2.21+.
- `elsif currentVersion ver_gt "enterprise-server@2.19" and currentVersion ver_lt "enterprise-server@2.21"` means if the above is NOT true, and the version is 2.20, then display the content that follows, `This is the old way of doing things`. No content will be displayed for versions older than 2.20.
- `{% endif %}` ends the statement.

#### Including content for *new Enterprise Server features* that don't exist on Dotcom

If your content is describing a new feature that was added to GitHub Enterprise Server but not GitHub, such as LDAP support, use this logic:

```
{% if currentVersion ver_gt "enterprise-server@2.21" %}This is a brand new feature, admin-type people!{% endif %}
```

In this example:

- `if currentVersion != "free-pro-team@latest"` will exclude the content for GitHub.com output.
- `and currentVersion ver_gt "enterprise-server@2.21"` will *additionally* include the content for releases *after* Enterprise Server 2.21, which means the content will be included for 2.22+.
- `{% endif %}` ends the statement.

#### Including content for *changed Enterprise Server features* that don't exist on Dotcom

If your content is describing a change to existing functionality in GitHub Enterprise Server, such as changed UI text or a more simple means of completing a task in the Management Console, use this logic:

```
{% if currentVersion ver_gt "enterprise-server@2.21" %}This is the new way of doing things, admins! {% else %}This is the old way of doing things, admins! {% endif %}
```

In this example:

- `if currentVersion != "free-pro-team@latest"` will exclude the content for GitHub.com output.
- `and currentVersion ver_gt "enterprise-server@2.21"` will *additionally* include the content for releases *after* Enterprise Server 2.21, which means the content will be included for 2.22+.
- `{% else %}` means if the above is NOT true, then display the content that follows, `This is the old way of doing things, admins!`.
- `{% endif %}` ends the statement.

### Liquid conditional statements for GitHub AE

If the Markdown source's `versions` front matter includes GitHub AE and you want the content to display for GitHub AE, do not include any Liquid logic at all. Deployment of the site will automatically generate the HTML content for GitHub AE.

#### Including content that *only applies to GitHub AE*

If your content only applies to GitHub AE, use this logic:

```
{% if currentVersion == "github-ae@latest" %}This content describes something you can only do on GitHub AE.{% endif %}
```

In this example:
- `if currentVersion == "github-ae@latest"` will include the content for GitHub AE output and *only* GitHub AE.
- `{% endif %}` ends the statement.

#### Including content that *only applies to GitHub AE and Enterprise Server*

If your content only applies to GitHub AE and all supported versions of GitHub Enterprise Server, use this logic:

```
{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}This content describes something you can only do on GitHub Enterprise Server or GitHub AE.{% endif %}
```

In this example:
- `if enterpriseServerVersions contains currentVersion` will include the content for all supported versions of GitHub Enterprise Server.
- `or currentVersion == "github-ae@latest"` will include the content for GitHub AE output.
- `{% endif %}` ends the statement.

#### Including content for features that will be included in the *next release* of GitHub AE

If your content is describing a feature that will be included in the next release of GitHub AE, you can use a placeholder version string, `github-ae@next`. Before the next GitHub AE release, replace the instances of the placeholder with `github-ae@latest`. For example, you can use this logic:

```
{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" %}This is a brand new feature, the likes of which have never been seen at this company before!{% endif %}
```

In this example:

- `if currentVersion == "free-pro-team@latest"` will include the content for GitHub.com output.
- `or currentVersion == "github-ae@next"` indicates that the content should also appear for the next release of GitHub AE, when we replace any instances of `github-ae@next` with `github-ae@latest`.
- `{% endif %}` ends the statement.
