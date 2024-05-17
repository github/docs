{% ifversion code-scanning-without-workflow-310 %}

If you enable default setup, the `autobuild` build mode will be used to build compiled languages, as part of your automatically configured {% data variables.code-scanning.codeql_workflow %}. If you enable advanced setup, the basic {% data variables.code-scanning.codeql_workflow %} uses the `autobuild` build mode. Alternatively, you can change the build mode for your compiled languages to `manual` and instead specify explicit build commands to analyze only the files that are built by these custom commands.

{% else %}

The basic {% data variables.code-scanning.codeql_workflow %} uses the `autobuild` action to build your code. Alternatively, you can disable `autobuild` and instead specify explicit build commands to analyze only the files that are built by these custom commands.

{% endif %}
