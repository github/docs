---
title: Customizing analysis with CodeQL packs
intro: 'You can use {% data variables.product.prodname_codeql %} packs to run {% data variables.product.prodname_codeql %} queries maintained by other people, or to share {% data variables.product.prodname_codeql %} queries that you''ve developed.'
shortTitle: Customizing analysis
product: '{% data reusables.gated-features.codeql %}'
versions:
  feature: codeql-packs
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/codeql-cli/about-codeql-packs
  - /code-security/codeql-cli/codeql-cli-reference/about-codeql-packs
---

{% data reusables.codeql-cli.beta-note-package-management %}

## About {% data variables.product.prodname_codeql %} packs

{% data reusables.code-scanning.codeql-cli-version-ghes %}

{% data variables.product.prodname_codeql %} packs are used to create, share, depend on, and run {% data variables.product.prodname_codeql %} queries and libraries. You can publish your own {% data variables.product.prodname_codeql %} packs and download packs created by others. {% data variables.product.prodname_codeql %} packs contain queries, library files, query suites, and metadata.

There are two types of {% data variables.product.prodname_codeql %} packs: query packs and library packs.

- Query packs are designed to be run. When a query pack is published, the bundle includes all the transitive dependencies and {% ifversion query-pack-compatibility %}pre-compiled representations of each query, in addition to the query sources{% else %}a compilation cache{% endif %}. This ensures consistent and efficient execution of the queries in the pack.

- Library packs are designed to be used by query packs (or other library packs) and do not contain queries themselves. The libraries are not compiled {% ifversion query-pack-compatibility %}separately{% else %}and there is no compilation cache included when the pack is published{% endif %}.

You can use the package management commands in the {% data variables.product.prodname_codeql_cli %} to create {% data variables.product.prodname_codeql %} packs, add dependencies to packs, and install or update dependencies. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs#creating-and-working-with-codeql-packs)." You can also publish and download {% data variables.product.prodname_codeql %} packs using the {% data variables.product.prodname_codeql_cli %}. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs)."

The standard {% data variables.product.prodname_codeql %} packages for all supported languages are published in the [{% data variables.product.prodname_container_registry %}](https://github.com/orgs/codeql/packages).
The [{% data variables.product.prodname_codeql %} repository](https://github.com/github/codeql) contains source files for the standard {% data variables.product.prodname_codeql %} packs for all supported languages.

## {% data variables.product.prodname_codeql %} pack structure

A {% data variables.product.prodname_codeql %} pack must contain a file called `qlpack.yml` in its root directory. In the `qlpack.yml` file, the `name:` field must have a value that follows the format of `<scope>/<pack>`, where `<scope>` is the {% data variables.product.prodname_dotcom %} organization or user account that the pack will be published to and `<pack>` is the name of the pack. Additionally, query packs and library packs with {% data variables.product.prodname_codeql %} tests contain a `codeql-pack.lock.yml` file that contains the resolved dependencies of the pack. This file is generated during a call to the `codeql pack install` command, is not meant to be edited by hand, and should be added to your version control system.

The other files and directories within the pack should be logically organized. For example, typically:

- Queries are organized into directories for specific categories.

- Queries for specific products, libraries, and frameworks are organized into
their own top-level directories.

{% ifversion codeql-packs %}
## Downloading and using {% data variables.product.prodname_codeql %} query packs

{% data reusables.code-scanning.beta-codeql-packs-cli %}

The {% data variables.product.prodname_codeql_cli %} bundle includes queries that are maintained by {% data variables.product.company_short %} experts, security researchers, and community contributors. If you want to run queries developed by other organizations, {% data variables.product.prodname_codeql %} query packs provide an efficient and reliable way to download and run queries. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."

Before you can use a {% data variables.product.prodname_codeql %} pack to analyze a database, you must download any packages you require from the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}. This can be done either by using the `--download` flag as part of the `codeql database analyze` command. If a package is not publicly available, you will need to use a {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} to authenticate. For more information and an example, see "[Uploading results to {% data variables.product.product_name %}](#uploading-results-to-github)".

| Option | Required | Usage |
|--------|:--------:|-----|
| <nobr>`<scope/name@version:path>`</nobr> | {% octicon "check" aria-label="Required" %} | Specify the scope and name of one or more {% data variables.product.prodname_codeql %} query packs to download using a comma-separated list. Optionally, include the version to download and unzip. By default the latest version of this pack is downloaded. Optionally, include a path to a query, directory, or query suite to run. If no path is included, then run the default queries of this pack. |
| <nobr>`--github-auth-stdin`</nobr> | {% octicon "x" aria-label="Optional" %}  | Pass the CLI the {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} created for authentication with {% data variables.product.company_short %}'s REST API from your secret store via standard input. This is not needed if the command has access to a `GITHUB_TOKEN` environment variable set with this token.

{% ifversion query-pack-compatibility %}
{% note %}

**Note:** If you specify a particular version of a query pack to use, be aware that the version you specify may eventually become too old for the latest version of {% data variables.product.prodname_codeql %} to make efficient use of. To ensure optimal performance, if you need to specify exact query pack versions, you should reevaluate which versions you pin to whenever you upgrade the {% data variables.product.prodname_codeql_cli %} you're using.

For more information about pack compatibility, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs#about-codeql-pack-compatibility)."

{% endnote %}
{% endif %}

### Basic example of downloading and using query packs

This example runs the `codeql database analyze` command with the `--download` option to:

1. Download the latest version of the `octo-org/security-queries` pack.
2. Download a version of the `octo-org/optional-security-queries` pack that is _compatible_ with version 1.0.1 (in this case, it is version 1.0.2). For more information on semver compatibility, see [npm's semantic version range documentation](https://github.com/npm/node-semver#ranges).
3. Run all the default queries in `octo-org/security-queries`.
4. Run only the query `queries/csrf.ql` from `octo-org/optional-security-queries`

```shell
$ echo $OCTO-ORG_ACCESS_TOKEN | codeql database analyze --download /codeql-dbs/example-repo \
    octo-org/security-queries \
    octo-org/optional-security-queries@~1.0.1:queries/csrf.ql \
    --format=sarif-latest --output=/temp/example-repo-js.sarif

> Download location: /Users/mona/.codeql/packages
> Installed fresh octo-org/security-queries@1.0.0
> Installed fresh octo-org/optional-security-queries@1.0.2
> Running queries.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> [1/2] Found in cache: /Users/mona/.codeql/packages/octo-org/security-queries/1.0.0/potential-sql-injection.ql.
> Starting evaluation of octo-org/security-queries/query1.ql.
> Compiling query plan for /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> [2/2] Found in cache: /Users/mona/.codeql/packages/octo-org/optional-security-queries/1.0.2/queries/csrf.ql.
> Starting evaluation of octo-org/optional-security-queries/queries/csrf.ql.
> [2/2 eval 694ms] Evaluation done; writing results to octo-org/security-queries/query1.bqrs.
> Shutting down query evaluator.
> Interpreting results.
```

### Direct download of {% data variables.product.prodname_codeql %} packs

If you want to download a {% data variables.product.prodname_codeql %} pack without running it immediately, then you can use the `codeql pack download` command. This is useful if you want to avoid accessing the internet when running {% data variables.product.prodname_codeql %} queries. When you run the {% data variables.product.prodname_codeql %} analysis, you can specify packs, versions, and paths in the same way as in the previous example:

```shell
echo $OCTO-ORG_ACCESS_TOKEN | codeql pack download <scope/name@version:path> <scope/name@version:path> ...
```

### Downloading {% data variables.product.prodname_codeql %} packs from multiple {% data variables.product.company_short %} container registries

If your {% data variables.product.prodname_codeql %} packs reside on multiple container registries, then you must instruct the {% data variables.product.prodname_codeql_cli %} where to find each pack. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/customizing-code-scanning#downloading-codeql-packs-from-github-enterprise-server)."
{% endif %}

## Specifying which queries to run in a {% data variables.product.prodname_codeql %} pack

Query specifiers are used by `codeql database analyze` and other commands that operate on a set of queries.
The complete form of a query specifier is `scope/name@range:path`, where:

- `scope/name` is the qualified name of a {% data variables.product.prodname_codeql %} pack.
- `range` is a [semver range](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges).
- `path` is a file system path to a single query, a directory containing queries, or a query suite file.

When you specify a `scope/name`, the `range` and `path` are
optional. If you omit a `range` then the latest version of the
specified pack is used. If you omit a `path` then the default query suite
of the specified pack is used.

The `path` can be one of: a `.ql` query file, a directory
containing one or more queries, or a `.qls` query suite file. If
you omit a pack name, then you must provide a `path`,
which will be interpreted relative to the working directory
of the current process. Glob patterns are not supported.

If you specify both a `scope/name` and `path`, then the `path` cannot
be absolute. It is considered relative to the root of the {% data variables.product.prodname_codeql %}
pack.

### Example query specifiers

- `codeql/python-queries` - All the queries in the default query suite of the latest version of the `codeql/python-queries` pack.

- `codeql/python-queries@1.2.3` - All the queries in the default query suite of version `1.2.3` of the `codeql/python-queries` pack.

- `codeql/python-queries@~1.2.3` - All the queries in the default query suite of the latest version of the `codeql/python-queries` pack that is >= `1.2.3` and < `1.3.0`.

- `codeql/python-queries:Functions` - All queries in the `Functions` directory in the latest version of the `codeql/python-queries` pack.

- `codeql/python-queries@1.2.3:Functions` - All queries in the `Functions` directory in version 1.2.3 of the `codeql/python-queries` pack.

- `codeql/python-queries@1.2.3:codeql-suites/python-code-scanning.qls` - All queries in the `codeql-suites/python-code-scanning.qls` directory in version 1.2.3 of the `codeql/python-queries` pack.

- `suites/my-suite.qls` - All queries in the `suites/my-suite.qls` file relative to the current working directory.

{% note %}

**Tip**

The default query suite of the standard {% data variables.product.prodname_codeql %} query packs are `codeql-suites/<lang>-code-scanning.qls`. Several other useful query suites can also be found in the `codeql-suites` directory of each pack. For example, the `codeql/cpp-queries` pack contains the following query suites:

- `cpp-code-scanning.qls` - Standard Code Scanning queries for C++. The default query suite for this pack.

- `cpp-security-extended.qls` - Queries from the default  `cpp-code-scanning.qls` suite for C++, plus lower severity and precision queries.

- `cpp-security-and-quality.qls` - Queries from `cpp-security-extended.qls`, plus maintainability and reliability queries.

You can see the sources for these query suites in the [{% data variables.product.prodname_codeql %} repository](https://github.com/github/codeql/tree/main/cpp/ql/src/codeql-suites). Query suites for other languages are similar.

{% endnote %}

{% ifversion query-pack-compatibility %}
### About published packs

When a pack is published for use in analyses, the `codeql pack create` or `codeql pack publish` command verifies that the content is complete and also adds some additional pieces of content to it:
 
- For query packs, a copy of each of the library packs it depends on, in the precise versions it has been developed with. Users of the query pack won't need to download these library packs separately.

- For query packs, precompiled representations of each of the queries. These are faster to execute than it would be to compile the QL source for the query at each analysis.

Most of this data is located in a directory named `.codeql` in the published pack, but precompiled queries are in files with a `.qlx` suffix next to the `.ql` source for each query. When analyzing a database with a query from a published pack, {% data variables.product.prodname_codeql %} will load these files instead of the `.ql` source. If you need to modify the content of a _published_ pack, be sure to remove all of the `.qlx` files, since they may prevent modifications in the `.ql` files from taking effect.
{% endif %}
