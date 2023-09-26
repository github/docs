Because {% data variables.product.company_short %} uses the `File::FNM_PATHNAME` flag for the `File.fnmatch` syntax, the `*` wildcard does not match directory separators (`/`). For example, `qa/*` will match all branches beginning with `qa/` and containing a single slash, but will not match `qa/foo/bar`. You can include any number of slashes after `qa` with `qa/**/*`, which would match, for example, `qa/foo/bar/foobar/hello-world`. You can also extend the `qa` string with `qa**/**/*` to make the rule more inclusive.

For more information about syntax options, see the [fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

{% data reusables.repositories.rulesets-unsupported-fnmatch-syntax %}
