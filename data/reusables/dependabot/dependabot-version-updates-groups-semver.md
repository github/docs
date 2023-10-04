You can also specify grouping settings based on how updates affect a specific ecosystem and follow semantic versioning (SemVer). This means you can, for example, group all patch updates together. This approach helps {% data variables.product.prodname_dependabot %} create as few pull requests as possible, while also reducing the chances of accidentally accepting changes that could cause issues. If a package follows SemVer, there's a higher chance (but not a guarantee) that minor and patch updates will be backwards compatible.

{% note %}

**Note:** SemVer is an accepted standard for defining versions of software packages, in the form `x.y.z`. {% data variables.product.prodname_dependabot %} assumes that versions in this form are always `major.minor.patch`.

{% endnote %}
