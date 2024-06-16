{% note %}

**Note:** Queries run with `database analyze` have strict [metadata requirements](https://codeql.github.com/docs/codeql-cli/using-custom-queries-with-the-codeql-cli/#including-query-metadata). You can also execute queries using the following plumbing-level subcommands:

* [AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/database-run-queries), which outputs non-interpreted results in an intermediate binary format called [BQRS](https://codeql.github.com/docs/codeql-overview/codeql-glossary/#bqrs-file).
* [AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/query-run), which will output BQRS files, or print results tables directly to the command line. Viewing results directly in the command line may be useful for iterative query development using the CLI.

Queries run with these commands don’t have the same metadata requirements. However, to save human-readable data you have to process each BQRS results file using the [AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/bqrs-decode) plumbing subcommand. Therefore, for most use cases it’s easiest to use database analyze to directly generate interpreted results.

{% endnote %}
