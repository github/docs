When you first configure a group, you specify a group name that will display in pull request titles and branch names. You can then define other options to include or exclude specific dependencies from the group. You must use the `patterns`, `dependency-type`, or `update-types` options to define the group, or any combination thereof.

Option | Description |
-------|-------------|
| <code><span style="white-space: nowrap;">dependency-type</span></code> | Use to specify a dependency type to be included in the group. `dependency-type` can be `development` or `production`. |
| `patterns` | Use to define strings of characters that match with a dependency name (or multiple dependency names) to include those dependencies in the group. |
| <code><span style="white-space: nowrap;">exclude-patterns</span></code> | Use to exclude certain dependencies from the group. If a dependency is excluded from a group, {% data variables.product.prodname_dependabot %} will continue to raise single pull requests to update the dependency to its latest version. |
| <code><span style="white-space: nowrap;">update-types</span></code> | Use to specify the semantic versioning level to include in the group. Possible values are `minor`, `patch`, and `major`. |
