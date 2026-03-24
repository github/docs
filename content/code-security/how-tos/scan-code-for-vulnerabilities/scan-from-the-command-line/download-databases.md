---
title: Downloading CodeQL databases from GitHub
intro: Expand the coverage of the {% data variables.product.prodname_codeql_cli %} by adding ready-made databases.
shortTitle: Download databases
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
category:
  - Customize vulnerability detection with CodeQL
---

{% data variables.product.github %} stores {% data variables.product.prodname_codeql %} databases for over 200,000 repositories on {% data variables.product.prodname_dotcom_the_website %}, which you can download using the REST API. The list of repositories is constantly growing and evolving to make sure that it includes the most interesting codebases for security research.

## Searching for databases

You can check if a repository has any {% data variables.product.prodname_codeql %} databases available for download using the `/repos/OWNER/REPOSITORY/code-scanning/codeql/databases` endpoint. To check for {% data variables.product.prodname_codeql %} databases using the [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_api), run:

```shell
gh api /repos/OWNER/REPOSITORY/code-scanning/codeql/databases
```

This command returns information about any {% data variables.product.prodname_codeql %} databases that are available for a repository, including the language the database represents, and when the database was last updated. If no {% data variables.product.prodname_codeql %} databases are available, the response is empty.

## Downloading a database

When you have confirmed that a {% data variables.product.prodname_codeql %} database exists for the language you are interested in, you can download it using the following command:

```shell
gh api /repos/OWNER/REPOSITORY/code-scanning/codeql/databases/LANGUAGE -H 'Accept: application/zip' > LOCAL-DATABASE-FILE.zip
```

For more information, see the documentation for the [Get {% data variables.product.prodname_codeql %} database endpoint](/rest/code-scanning/code-scanning#get-a-codeql-database-for-a-repository).

Before running an analysis with the {% data variables.product.prodname_codeql_cli %}, you must unzip the databases.

## Further reading

You can also analyze databases from {% data variables.product.prodname_dotcom_the_website %} using the {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode_shortname %} extension. For more information, see [AUTOTITLE](/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/running-codeql-queries).
