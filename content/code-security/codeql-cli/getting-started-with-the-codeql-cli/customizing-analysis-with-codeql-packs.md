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

## About {% data variables.product.prodname_codeql %} packs

{% data reusables.code-scanning.codeql-cli-version-ghes %}

 {% data variables.product.prodname_codeql %} packs are used to create, share, depend on, and run {% data variables.product.prodname_codeql %} queries and libraries. {% data variables.product.prodname_codeql %} packs contain queries, library files, query suites, and metadata. You can customize your {% data variables.product.prodname_codeql %} analysis by downloading packs created by others and running them on your codebase.

There are{% ifversion codeql-model-packs %} three{% else %} two{% endif %} types of {% data variables.product.prodname_codeql %} packs: {% ifversion codeql-model-packs %}query packs, library packs, and model packs{% else %} query packs and library packs{% endif %}.

- Query packs contain a set of pre-compiled queries that can be evaluated on a {% data variables.product.prodname_codeql %} database. Query packs are designed to be run. When a query pack is published, the bundle includes all the transitive dependencies and {% ifversion query-pack-compatibility %}pre-compiled representations of each query, in addition to the query sources{% else %}a compilation cache{% endif %}. This ensures consistent and efficient execution of the queries in the pack.

- Library packs are designed to be used by query packs (or other library packs) and do not contain queries themselves. The libraries are not compiled {% ifversion query-pack-compatibility %}separately{% else %}and there is no compilation cache included when the pack is published{% endif %}.{% ifversion codeql-model-packs %}

- Model packs can be used to expand {% data variables.product.prodname_code_scanning %} analysis to recognize libraries and frameworks that are not supported by default. Model packs are currently in beta and subject to change. {% data reusables.code-scanning.codeql-model-packs-availability %} For more information about creating your own model packs, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs#creating-a-codeql-model-pack)."

{% endif %}

The standard {% data variables.product.prodname_codeql %} packs for all supported languages are published in the [{% data variables.product.prodname_container_registry %}](https://github.com/orgs/codeql/packages). If you installed the {% data variables.product.prodname_codeql_cli %} in the standard way, using the {% data variables.product.prodname_codeql_cli %} bundle, the core query packs are already downloaded and available to you. They are:

  - `codeql/cpp-queries`
  - `codeql/csharp-queries`
  - `codeql/go-queries`
  - `codeql/java-queries`
  - `codeql/javascript-queries`
  - `codeql/python-queries`
  - `codeql/ruby-queries` {% ifversion codeql-swift-beta %}
  - `codeql/swift-queries` {% endif %}

You can also use the {% data variables.product.prodname_codeql_cli %} to create your own {% data variables.product.prodname_codeql %} packs, add dependencies to packs, and install or update dependencies. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs#creating-and-working-with-codeql-packs)."

You can publish {% data variables.product.prodname_codeql %} packs that you have created, using the {% data variables.product.prodname_codeql_cli %}. For more information on publishing and downloading {% data variables.product.prodname_codeql %} packs, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs)."

## Downloading and using {% data variables.product.prodname_codeql %} query packs

The {% data variables.product.prodname_codeql_cli %} bundle includes queries that are maintained by {% data variables.product.company_short %} experts, security researchers, and community contributors. If you want to run queries developed by other organizations, {% data variables.product.prodname_codeql %} query packs provide an efficient and reliable way to download and run queries{% ifversion codeql-model-packs %}, while model packs (beta) can be used to expand {% data variables.product.prodname_code_scanning %} analysis to recognize libraries and frameworks that are not supported by default{% endif %}. For more information about query packs, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql-queries)." {% ifversion codeql-model-packs %} For information about writing your own model packs, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs#creating-a-model-pack)."{% endif %}

Before you can use a {% data variables.product.prodname_codeql %} query pack to analyze a database, you must download any packages you require from the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}. This can be done either by using the `--download` flag as part of the `codeql database analyze` command, or running `codeql pack download`. If a package is not publicly available, you will need to use a {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} to authenticate. For more information and an example, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/uploading-codeql-analysis-results-to-github#uploading-results-to-github)."

| Option | Required | Usage |
|--------|:--------:|-----|
| <code><span style="white-space: nowrap;"><scope/name@version:path></span></code> | {% octicon "check" aria-label="Required" %} | Specify the scope and name of one or more {% data variables.product.prodname_codeql %} query packs to download using a comma-separated list. Optionally, include the version to download and unzip. By default the latest version of this pack is downloaded. Optionally, include a path to a query, directory, or query suite to run. If no path is included, then run the default queries of this pack. |
| <code><span style="white-space: nowrap;">--github-auth-stdin</span></code> | {% octicon "x" aria-label="Optional" %}  | Pass the CLI the {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} created for authentication with {% data variables.product.company_short %}'s REST API from your secret store via standard input. This is not needed if the command has access to a `GITHUB_TOKEN` environment variable set with this token.

{% ifversion query-pack-compatibility %}
{% note %}

**Note:** If you specify a particular version of a query pack to use, be aware that the version you specify may eventually become too old for the latest version of {% data variables.product.prodname_codeql %} to make efficient use of. To ensure optimal performance, if you need to specify exact query pack versions, you should reevaluate which versions you pin to whenever you upgrade the {% data variables.product.prodname_codeql_cli %} you're using.

For more information about pack compatibility, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs#about-codeql-pack-compatibility)."

{% endnote %}
{% endif %}

### Basic example of downloading and using query packs

This example runs the `codeql database analyze` command with the `--download` option to:

1. Download the latest version of the `octo-org/security-queries` pack.
1. Download a version of the `octo-org/optional-security-queries` pack that is _compatible_ with version 1.0.1 (in this case, it is version 1.0.2). For more information on semver compatibility, see [npm's semantic version range documentation](https://github.com/npm/node-semver#ranges).
1. Run all the default queries in `octo-org/security-queries`.
1. Run only the query `queries/csrf.ql` from `octo-org/optional-security-queries`

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

If your {% data variables.product.prodname_codeql %} packs reside on multiple container registries, then you must instruct the {% data variables.product.prodname_codeql_cli %} where to find each pack. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#downloading-codeql-packs-from-github-enterprise-server)."

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

{% ifversion codeql-model-packs %}

## Using model packs to analyze calls to custom dependencies

You can include published model packs in a {% data variables.product.prodname_code_scanning %} analysis with the `--model-packs` option. For example:

```shell
$ codeql database analyze /codeql-dbs/my-company --format=sarif-latest \
  --model-packs my-repo/my-java-model-pack \
  --output=/temp/my-company.sarif codeql/java-queries
```

In this example, the relevant queries in the standard query pack `codeql/java-queries` will use the dependency information from the model pack, `my-repo/my-java-model-pack`, to check for vulnerabilities in code that calls those dependencies.

You can specify multiple published model packs in an analysis.

For more information about writing your own model packs, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs#creating-a-model-pack)."

{% endif %}

{% ifversion query-pack-compatibility %}

### About published packs

When a pack is published for use in analyses, the `codeql pack create` or `codeql pack publish` command verifies that the content is complete and also adds some additional pieces of content to it:

- For query packs, a copy of each of the library packs it depends on, in the precise versions it has been developed with. Users of the query pack won't need to download these library packs separately.

- For query packs, precompiled representations of each of the queries. These are faster to execute than it would be to compile the QL source for the query at each analysis.

Most of this data is located in a directory named `.codeql` in the published pack, but precompiled queries are in files with a `.qlx` suffix next to the `.ql` source for each query. When analyzing a database with a query from a published pack, {% data variables.product.prodname_codeql %} will load these files instead of the `.ql` source. If you need to modify the content of a _published_ pack, be sure to remove all of the `.qlx` files, since they may prevent modifications in the `.ql` files from taking effect.

{% endif %}
