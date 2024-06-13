{% note %}

**Note:** Not all expressions from the `fnmatch` syntax are supported in branch protection rules. Please be aware of the following constraints:

* You cannot use the backslash (`\`) character as a quoting character, as {% data variables.product.prodname_dotcom %} does not support the use of backslashes in branch protection rules.
* You can specify character sets within square brackets (`[]`), but you cannot currently complement a set with the `^` operator (e.g., `[^charset]`).
* Although {% data variables.product.prodname_dotcom %} supports `File::FNM_PATHNAME` in `fnmatch` syntax, `File::FNM_EXTGLOB` is not supported.

{% endnote %}
