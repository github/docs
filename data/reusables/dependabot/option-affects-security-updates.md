When used alone, the `ignore.versions` key affects both {% data variables.product.prodname_dependabot %} updates, but the `ignore.update-types` key affects only {% data variables.product.prodname_dependabot_version_updates %}. 

However, if `versions` and `update-types` are used together in the same `ignore` rule, both {% data variables.product.prodname_dependabot %} updates are affected, unless the configuration uses `target-branch` to check for version updates on a non-default branch.
