---
title: Checking out the CodeQL CLI source code
intro: Set up the {% data variables.product.prodname_codeql_cli %} directly from the source code.
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
shortTitle: Check out source code
---

Some users prefer working with {% data variables.product.prodname_codeql %} query sources directly in order to work on or contribute to open source shared queries.

## 1. Download the {% data variables.product.prodname_codeql_cli %} tar archive

{% data reusables.codeql-cli.download-codeql-cli %}

## 2. Create a new {% data variables.product.prodname_codeql %} directory

Create a new directory where you can place the CLI and any queries and libraries
you want to use. For example, `$HOME/codeql-home`.

The CLI’s built-in search operations automatically look in all of its sibling
directories for the files used in database creation and analysis. Keeping these
components in their own directory prevents the CLI searching unrelated sibling
directories while ensuring all files are available without specifying any
further options on the command line.

## 3. Obtain a local copy of the {% data variables.product.prodname_codeql %} queries

The [{% data variables.product.prodname_codeql %} repository](https://github.com/github/codeql?ref_product=code-scanning&ref_type=engagement&ref_style=text) contains
the queries and libraries required for {% data variables.product.prodname_codeql %} analysis of all supported languages.
Clone a copy of this repository into `codeql-home`.

By default, the root of the cloned repository will be called `codeql`.
Rename this folder `codeql-repo` to avoid conflicting with the {% data variables.product.prodname_codeql_cli %} that you will extract in step 1. If you use git on the command line, you can
clone and rename the repository in a single step by running
`git clone git@github.com:github/codeql.git codeql-repo` in the `codeql-home` folder.

Within this repository, the queries and libraries are organized into {% data variables.product.prodname_codeql %}
packs. Along with the queries themselves, {% data variables.product.prodname_codeql %} packs contain important metadata
that tells the {% data variables.product.prodname_codeql_cli %} how to process the query files. For more information,
see [AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs).

> [!NOTE]
> There are different versions of the {% data variables.product.prodname_codeql %} queries available for different users. Check out the correct version for your use case:
>
> * For the queries that are intended to be used with the latest {% data variables.product.prodname_codeql_cli %} release, check out the branch tagged `codeql-cli/latest`. You should use this branch for databases you’ve built using the {% data variables.product.prodname_codeql_cli %} or recently downloaded from {% data variables.product.github %}.
> * For the most up to date {% data variables.product.prodname_codeql %} queries, check out the `main` branch. This branch represents the very latest version of {% data variables.product.prodname_codeql %}’s analysis.

## 4. Extract the {% data variables.product.prodname_codeql_cli %} tar archive

Extract the tar archive into the directory you created in step 2.

For example, if the path to your copy of the {% data variables.product.prodname_codeql %} repository is `$HOME/codeql-home/codeql-repo`, then extract the CLI into
`$HOME/codeql-home/`.

## 5. Launch `codeql`

{% data reusables.codeql-cli.launch-codeql %}

## 6. Verify your {% data variables.product.prodname_codeql_cli %} setup

{% data variables.product.prodname_codeql_cli %} has subcommands you can execute to verify that you are correctly set up to create and analyze databases:

* Run `codeql resolve languages` to show which languages are available for database creation. This will list the languages supported by default in your {% data variables.product.prodname_codeql_cli %} package.
* Run `codeql resolve qlpacks` to show which {% data variables.product.prodname_codeql %} packs the CLI can find. This will display the names of all the {% data variables.product.prodname_codeql %} packs directly available to the {% data variables.product.prodname_codeql_cli %}. This should include:
  * Query packs for each supported language, for example, `codeql/{language}-queries`. These packs contain the standard queries that will be run for each analysis.
  * Library packs for each supported language, for example, `codeql/{language}-all`. These packs contain query libraries, such as control flow and data flow libraries, that may be useful to query writers.
  * Example packs for each supported language, for example, `codeql/{language}-examples`. These packs contain useful snippets of {% data variables.product.prodname_codeql %} that query writers may find useful.
  * Legacy packs that ensure custom queries and libraries created using older products are compatible with your version of {% data variables.product.prodname_codeql %}.
