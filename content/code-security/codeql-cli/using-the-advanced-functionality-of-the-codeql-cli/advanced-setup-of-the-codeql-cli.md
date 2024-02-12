---
title: Advanced setup of the CodeQL CLI
intro: 'You can modify your {% data variables.product.prodname_codeql_cli %} setup to use a local checkout of the {% data variables.product.prodname_codeql %} repository for analysis, set up multiple versions of the {% data variables.product.prodname_codeql_cli %}, and analyze databases you have downloaded from {% data variables.product.prodname_dotcom_the_website %}.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---

## About advanced setup of the {% data variables.product.prodname_codeql_cli %}

If you plan to use {% data variables.product.prodname_codeql %} for more than just code scanning, you may prefer an advanced setup of the {% data variables.product.prodname_codeql_cli %}.

- If you want to contribute to open source shared {% data variables.product.prodname_codeql %} queries, you may prefer working with the {% data variables.product.prodname_codeql %} source code directly.
- If you want to use the latest {% data variables.product.prodname_codeql %} features to generate code scanning alerts for a codebase, but also want to analyze another codebase that is only compatible with a specific version of the {% data variables.product.prodname_codeql_cli %}, you may want to install multiple versions of the {% data variables.product.prodname_codeql_cli %}.
- If you are researching or developing queries, you may want to download interesting or unique databases from {% data variables.product.prodname_dotcom_the_website %}.

For information on the most simple setup of the {% data variables.product.prodname_codeql_cli %}, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)."

## Checking out the {% data variables.product.prodname_codeql %} source code directly

Some users prefer working with {% data variables.product.prodname_codeql %} query sources directly in order to work on or contribute to the Open Source shared queries. In order to do this, the following steps are recommended.

### 1. Download the {% data variables.product.prodname_codeql_cli %} zip

{% data reusables.codeql-cli.download-codeql-cli-zip %}

#### Download information for macOS "Catalina" (or newer) users

{% data reusables.codeql-cli.download-info-macos-catalina-or-newer %}

### 2. Create a new {% data variables.product.prodname_codeql %} directory

Create a new directory where you can place the CLI and any queries and libraries
you want to use. For example, `$HOME/codeql-home`.

The CLI’s built-in search operations automatically look in all of its sibling
directories for the files used in database creation and analysis. Keeping these
components in their own directory prevents the CLI searching unrelated sibling
directories while ensuring all files are available without specifying any
further options on the command line.

### 3. Obtain a local copy of the {% data variables.product.prodname_codeql %} queries

The [{% data variables.product.prodname_codeql %} repository](https://github.com/github/codeql) contains
the queries and libraries required for {% data variables.product.prodname_codeql %} analysis of all supported languages.
Clone a copy of this repository into `codeql-home`.

By default, the root of the cloned repository will be called `codeql`.
Rename this folder `codeql-repo` to avoid conflicting with the {% data variables.product.prodname_codeql_cli %} that you will extract in step 1. If you use git on the command line, you can
clone and rename the repository in a single step by running
`git clone git@github.com:github/codeql.git codeql-repo` in the `codeql-home` folder.

{% ifversion ghae < 3.6 %}
{% note %}

**Note:** The {% data variables.product.prodname_codeql %} libraries and queries for Go analysis used to live in a separate [{% data variables.product.prodname_codeql %} for Go repository](https://github.com/github/codeql-go/). These have been moved to the `github/codeql` repository. It is no longer necessary to clone the `github/codeql-go` into a separate `codeql-home/codeql-go` folder.

For more information, see the [Relocation announcement](https://github.com/github/codeql-go/issues/741).

{% endnote %}
{% endif %}

{% ifversion codeql-packs %}

Within this repository, the queries and libraries are organized into {% data variables.product.prodname_codeql %}
packs. Along with the queries themselves, {% data variables.product.prodname_codeql %} packs contain important metadata
that tells the {% data variables.product.prodname_codeql_cli %} how to process the query files. For more information,
see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs)."
{% endif %}

{% note %}

**Note:** There are different versions of the {% data variables.product.prodname_codeql %} queries available for different users. Check out the correct version for your use case:

- For the queries that are intended to be used with the latest {% data variables.product.prodname_codeql_cli %} release, check out the branch tagged `codeql-cli/latest`. You should use this branch for databases you’ve built using the {% data variables.product.prodname_codeql_cli %} or recently downloaded from {% data variables.product.prodname_dotcom_the_website %}.
- For the most up to date {% data variables.product.prodname_codeql %} queries, check out the `main` branch. This branch represents the very latest version of {% data variables.product.prodname_codeql %}’s analysis.

{% endnote %}

### 4. Extract the zip archive

For Linux, Windows, and macOS users (version 10.14 "Mojave", and earlier) simply extract the zip archive into the directory you created in step 2.

For example, if the path to your copy of the {% data variables.product.prodname_codeql %} repository is `$HOME/codeql-home/codeql-repo`, then extract the CLI into
`$HOME/codeql-home/`.

#### Extraction information for macOS "Catalina" (or newer) users

{% data reusables.codeql-cli.extraction-info-macos-catalina-or-newer %}

### 5. Launch `codeql`

{% data reusables.codeql-cli.launch-codeql %}

### 6. Verify your {% data variables.product.prodname_codeql_cli %} setup

{% data variables.product.prodname_codeql_cli %} has subcommands you can execute to verify that you are correctly set up to create and analyze databases:

- Run `codeql resolve languages` to show which languages are available for database creation. This will list the languages supported by default in your {% data variables.product.prodname_codeql_cli %} package.
- Run `codeql resolve qlpacks` to show which {% data variables.product.prodname_codeql %} packs the CLI can find. This will display the names of all the {% data variables.product.prodname_codeql %} packs directly available to the {% data variables.product.prodname_codeql_cli %}. This should include:
- Query packs for each supported language, for example, `codeql/{language}-queries`. These packs contain the standard queries that will be run for each analysis.
- Library packs for each supported language, for example,  `codeql/{language}-all`. These packs contain query libraries, such as control flow and data flow libraries, that may be useful to query writers.
- Example packs for each supported language, for example, `codeql/{language}-examples`. These packs contain useful snippets of {% data variables.product.prodname_codeql %} that query writers may find useful.
- Legacy packs that ensure custom queries and libraries created using older products are compatible with your version of {% data variables.product.prodname_codeql %}.

## Using two versions of the {% data variables.product.prodname_codeql_cli %}

If you want to use the latest {% data variables.product.prodname_codeql %} features to execute queries or {% data variables.product.prodname_codeql %} tests, but also want to prepare databases that are compatible with a specific version of {% data variables.product.prodname_codeql %} code scanning on {% data variables.product.prodname_ghe_server %}, you may need to install two versions of the CLI. You can download the versions of the {% data variables.product.prodname_codeql_cli %} that you want, and unpack both CLI archives in the same parent directory.

## Downloading databases from {% data variables.product.prodname_dotcom_the_website %}

{% data variables.product.prodname_dotcom %} stores {% data variables.product.prodname_codeql %} databases for over 200,000 repos on {% data variables.product.prodname_dotcom_the_website %}, which you can download using the REST API. The list of repos is constantly growing and evolving to make sure that it includes the most interesting codebases for security research.

You can also analyze databases from {% data variables.product.prodname_dotcom_the_website %} using the {% data variables.product.prodname_codeql %} for VS Code extension. For more information, see "[Analyzing your projects](https://codeql.github.com/docs/codeql-for-visual-studio-code/analyzing-your-projects)."

You can check if a repository has any {% data variables.product.prodname_codeql %} databases available for download using the `/repos/<owner>/<repo>/code-scanning/codeql/databases` endpoint. For example, to check for {% data variables.product.prodname_codeql %} databases using the [{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_api) you would run:

```shell
gh api /repos/<owner>/<repo>/code-scanning/codeql/databases
```

This command returns information about any {% data variables.product.prodname_codeql %} databases that are available for a repository, including the language the database represents, and when the database was last updated. If no {% data variables.product.prodname_codeql %} databases are available, the response is empty.

When you have confirmed that a {% data variables.product.prodname_codeql %} database exists for the language you are interested in, you can download it using the following command:

```shell
gh api /repos/<owner>/<repo>/code-scanning/codeql/databases/<language> -H 'Accept: application/zip' > path/to/local/database.zip
```

For more information, see the documentation for the [Get {% data variables.product.prodname_codeql %} database endpoint](/rest/code-scanning?apiVersion=2022-11-28#get-a-codeql-database-for-a-repository).

Before running an analysis with the {% data variables.product.prodname_codeql_cli %}, you must unzip the databases.
