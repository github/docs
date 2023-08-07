{% data variables.product.prodname_codeql %} analyzes the {% data variables.code-scanning.compiled_languages %} source files in your repository that are built. You can use the `autobuild` action in the {% data variables.code-scanning.codeql_workflow %} to build your code. Alternatively, you can disable `autobuild` and instead specify explicit build commands to analyze only the files that are built by these custom commands.

{% ifversion code-scanning-without-workflow-310 %}

If you enable default setup, the `autobuild` action will be used to build your code, as part of your automatically configured {% data variables.code-scanning.codeql_workflow %}. If you enable advanced setup, the basic {% data variables.code-scanning.codeql_workflow %} uses `autobuild`, but you can override this setting.

{% else %}

The basic {% data variables.code-scanning.codeql_workflow %} uses the `autobuild` action to build your code, but you can override this setting.

{% endif %}