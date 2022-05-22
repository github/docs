{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
The {% data variables.product.prodname_codeql_cli %} is a standalone product that you can use to analyze code. Its main purpose is to generate a database representation of a codebase, a {% data variables.product.prodname_codeql %} database. Once the database is ready, you can query it interactively, or run a suite of queries to generate a set of results in SARIF format and upload the results to {% data variables.product.product_location %}.
{% endif %}
