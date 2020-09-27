# Liquid helpers <!-- omit in toc -->

We use the [liquid template language](https://shopify.github.io/liquid/basics/introduction/) (specifically, [this Node.js port](https://github.com/docs/liquid)) to create different versions of our content.

Note: If you are an open source contributor, you should not worry about versioning content. This document is only here as reference.

## Versioning documentation for GitHub Enterprise <!-- omit in toc -->

**In this guide**
- [Versioned documentation types for GitHub Enterprise](#versioned-documentation-types-for-github-enterprise)
- [Liquid conditional operators](#liquid-conditional-operators)
  - [Comparison operators](#comparison-operators)
  - [Logical operators](#logical-operators)
- [Liquid conditional statements for GitHub Enterprise](#liquid-conditional-statements-for-github-enterprise)
  - [Including content in *all* supported versions](#including-content-in-all-supported-versions)
  - [Including content that *only applies to Dotcom*](#including-content-that-only-applies-to-dotcom)
  - [Including content for *new Dotcom features* that will be included in Enterprise](#including-content-for-new-dotcom-features-that-will-be-included-in-enterprise)
  - [Including content for *changed* Dotcom features that will also change in Enterprise](#including-content-for-changed-dotcom-features-that-will-also-change-in-enterprise)
  - [Including content for *changed* Dotcom features that will also change in Enterprise but don't exist in some older versions](#including-content-for-changed-dotcom-features-that-will-also-change-in-enterprise-but-dont-exist-in-some-older-versions)
  - [Including content for *new Enterprise features* that don't exist on Dotcom](#including-content-for-new-enterprise-features-that-dont-exist-on-dotcom)
  - [Including content for *changed Enterprise features* that don't exist on Dotcom](#including-content-for-changed-enterprise-features-that-dont-exist-on-dotcom)

### Versioned documentation types for GitHub Enterprise

We provide versioned documentation for GitHub Enterprise users. This means the material on docs.github.com is scoped to specific product offerings.

Documentation for GitHub Enterprise can generally be divided into three types: documentation for the latest release, documentation for any previous supported release, and documentation for a deprecated release.


### Liquid conditional operators

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
{% if page.version != "dotcom" and page.version ver_gt "2.6" %}
```

In statements where **at least one** operand must be true for the condition to be true, use the operator `or`:

```
{% if page.version == "dotcom" or page.version ver_gt "2.6" %}
```

Do **not** use the operators `&&` or `||`. If you do, the content will not render in the intended versions. Only use `and` or `or`.

### Liquid conditional statements for GitHub Enterprise

Use the custom `ver_gt` and `ver_lt` Liquid operators to conditionally include or exclude GitHub Enterprise content.

- `ver_lt` stands for "version less than"
- `ver_gt` stands for "version" greater than"

See the [Semantic Versioning specification](https://semver.org/#spec-item-11) for more details on version precedence.

#### Including content in *all* supported versions

If your content is included in all versions of Enterprise, you need not include any Liquid logic at all. The Markdown source will automatically generate the HTML content for all supported versions.

#### Including content that *only applies to Dotcom*

If your content only applies to GitHub.com, such as billing information, use this logic:

```
{% if page.version == "dotcom" %}This is how you pay for your personal account, which is something you wouldn't do in Enterprise.{% endif %}
```

In this example:
- `if page.version == "dotcom"` will include the content for Dotcom output and *only* Dotcom.
- `{% endif %}` ends the statement.

#### Including content for *new Dotcom features* that will be included in Enterprise

If your content is describing a new feature that was added to GitHub.com and will be automatically included in the next release of GitHub Enterprise, use this logic:

```
{% if page.version == "dotcom" or page.version ver_gt "2.6" %}This is a brand new feature, the likes of which have never been seen at this company before!{% endif %}
```

In this example:

- `if page.version == "dotcom"` will include the content for GitHub.com output.
- `or page.version ver_gt "2.6"` will include the content for releases *after* Enterprise 2.6, which means the content will be included for 2.7+.
- `{% endif %}` ends the statement.

#### Including content for *changed* Dotcom features that will also change in Enterprise

If your content is describing a change to existing functionality in Dotcom, such as changed UI text or a more simple means of completing a task, use this logic:

```
{% if page.version == "dotcom" or page.version ver_gt "2.10" %}This is the new way of doing things {% else %}This is the old way of doing things {% endif %}
```

In this example:

- `if page.version == "dotcom"` will include the content for GitHub.com output.
- `or page.version ver_gt "2.6"` will include the content for releases *after* Enterprise 2.6, which means the content will be included for 2.7+.
- `{% else %}` means if the above is NOT true, then display the content that follows, `This is the old way of doing things`.
- `{% endif %}` ends the statement.

#### Including content for *changed* Dotcom features that will also change in Enterprise but don't exist in some older versions

If your content is describing a change to existing functionality in Dotcom, and that functionality doesn't exist in all older Enterprise versions, use logic like this:

```
{% if page.version == 'dotcom' or page.version ver_gt "2.10" %}

This is the new way of doing things.

{% elsif page.version ver_gt "2.8" and page.version ver_lt "2.11" %}

This is the old way of doing things (which did not exist before 2.9).

{% endif %}
```

In this example:

- `if page.version == "dotcom"` will include the content for GitHub.com output.
- `or page.version ver_gt "2.10"` will include the content for releases *after* Enterprise 2.10, which means the content will be included for 2.11+.
- `elsif page.version ver_gt "2.8" and page.version ver_lt "2.11"` means if the above is NOT true, and the version is either 2.9 or 2.10, then display the content that follows, `This is the old way of doing things`. No content will be displayed for versions older than 2.9.
- `{% endif %}` ends the statement.

#### Including content for *new Enterprise features* that don't exist on Dotcom

If your content is describing a new feature that was added to GitHub Enterprise but not GitHub, such as LDAP support, use this logic:

```
{% if page.version != "dotcom" and page.version ver_gt "2.6" %}This is a brand new feature, admin-type people!{% endif %}
```

In this example:

- `if page.version != "dotcom"` will exclude the content for GitHub.com output.
- `and page.version ver_gt "2.6"` will *additionally* include the content for releases *after* Enterprise 2.6, which means the content will be included for 2.7+.
- `{% endif %}` ends the statement.

#### Including content for *changed Enterprise features* that don't exist on Dotcom

If your content is describing a change to existing functionality in GitHub Enterprise, such as changed UI text or a more simple means of completing a task in the Management Console, use this logic:

```
{% if page.version != "dotcom" and page.version ver_gt "2.6" %}This is the new way of doing things, admins! {% else %}This is the old way of doing things, admins! {% endif %}
```

In this example:

- `if page.version != "dotcom"` will exclude the content for GitHub.com output.
- `and page.version ver_gt "2.6"` will *additionally* include the content for releases *after* Enterprise 2.6, which means the content will be included for 2.7+.
- `{% else %}` means if the above is NOT true, then display the content that follows, `This is the old way of doing things, admins!`.
- `{% endif %}` ends the statement.
