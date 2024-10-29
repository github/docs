---
title: Managing CodeQL databases
shortTitle: Manage CodeQL databases
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'You can work with {% data variables.product.prodname_codeql %} databases using the extension.'
---

## About {% data variables.product.prodname_codeql %} databases

To analyze a project, you need to select a {% data variables.product.prodname_codeql %} database for that project. You can select a database locally (from a ZIP archive or an unarchived folder), from a public URL, or from a project's URL on {% data variables.product.prodname_dotcom_the_website %}. To read about how to create a database with the {% data variables.product.prodname_codeql_cli %}, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/creating-codeql-databases)."

### Downloading a database from {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} stores {% data variables.product.prodname_codeql %} databases for over 200,000 repositories on {% data variables.product.prodname_dotcom_the_website %}.

You can check if a repository has any {% data variables.product.prodname_codeql %} databases available for download, and if so download it, using the REST API. For more information, see "[List {% data variables.product.prodname_codeql %} databases for a repository](/rest/code-scanning/code-scanning#list-codeql-databases-for-a-repository)" and "[Get a {% data variables.product.prodname_codeql %} database for a repository](/rest/code-scanning/code-scanning#get-a-codeql-database-for-a-repository)" in the {% data variables.product.prodname_dotcom %} REST API documentation.

## Choosing a database to analyze

1. Hover over the title bar of the "Databases" view and choose the appropriate icon to select your database. You can select a local database (from a ZIP archive or an unarchived folder), from a public URL, or from a project's URL on {% data variables.product.prodname_dotcom_the_website %}.

1. Once you've chosen a database, it will be displayed in the "Databases" view. To see the menu options for interacting with a database, right-click an entry in the list. You can select multiple databases at once.

{% note %}

**Note:** You can also analyze test databases. Test databases (folders with a `.testproj` extension) are generated when you run regression tests on custom queries using the {% data variables.product.prodname_codeql_cli %}. If a query fails a regression test, you may want to import the test database into {% data variables.product.prodname_vscode %} to debug the failure. For more information about running query tests, see "[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/testing-custom-queries)."

{% endnote %}

## Filtering databases and queries by language

Optionally, to see databases containing a specific language and queries written for that language, you can apply a language filter using the language selector.

1. To see available language filters, in the sidebar, open the "Language" view.

1. Hover over the language filter you would like to apply, then click **Select**.

## Next steps

To learn how to use the extension to analyze your projects by running queries on {% data variables.product.prodname_codeql %} databases, see "[AUTOTITLE](/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/running-codeql-queries)."
