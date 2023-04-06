---
title: Publishing and using CodeQL packs
intro: 'You can publish your own {% data variables.product.prodname_codeql %} packs and use packs published by other people.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  feature: codeql-packs
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---

{% data reusables.codeql-cli.codeql-site-migration-note %}

{% data reusables.codeql-cli.beta-note-package-management %}

## Configuring the `qlpack.yml` file before publishing

{% data reusables.code-scanning.codeql-cli-version-ghes %}

You can check and modify the configuration details of your {% data variables.product.prodname_codeql %} pack prior to publishing. Open the `qlpack.yml` file in your preferred text editor.

```yml
library: # set to true if the pack is a library. Set to false or omit for a query pack
name: <scope>/<pack>
version: <x.x.x>
description: <Description to publish with the package>
default-suite: # optional, one or more queries in the pack to run by default
    - query: <relative-path>/query-file>.ql
default-suite-file: default-queries.qls # optional, a pointer to a query-suite in this pack
license: # optional, the license under which the pack is published
dependencies: # map from CodeQL pack name to version range
```

* `name:` must follow the <scope>/<pack> format, where <scope> is the {% data variables.product.prodname_dotcom %} organization that you will publish to and <pack> is the name for the pack.


* A maximum of one of `default-suite` or `default-suite-file` is allowed. These are two different ways to define a default query suite to be run, the first by specifying queries directly in the qlpack.yml file and the second by specifying a query suite in the pack.

## Running `codeql pack publish`

When you are ready to publish a pack to the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %}, you can run the following command in the root of the pack directory:

```
codeql pack publish
```

The published package will be displayed in the packages section of {% data variables.product.prodname_dotcom %} organization specified by the scope in the `qlpack.yml` file.

## Running `codeql pack download <scope>/<pack>`

To run a pack that someone else has created, you must first download it by running the following command:

```
codeql pack download <scope>/<pack>@x.x.x
```

* `<scope>`: the name of the {% data variables.product.prodname_dotcom %} organization that you will download from.
* `<pack>`: the name for the pack that you want to download.
* `@x.x.x`: an optional version number. If omitted, the latest version will be downloaded.

This command accepts arguments for multiple packs.

{% ifversion query-pack-compatibility %}
If you write scripts that specify a particular version number of a
query pack to download, keep in mind that when you update your version of
{% data variables.product.prodname_codeql %} to a newer one, you may
also need to switch to a newer version of the query pack.  Newer
versions of {% data variables.product.prodname_codeql %} _may_ provide
degraded performance when used with query packs that have been pinned
to a very old version. For more information, see "[About {% data variables.product.prodname_codeql %}
pack compatibility](#about-codeql-pack-compatibility)."
{% endif %}

## Using a {% data variables.product.prodname_codeql %} pack to analyze a {% data variables.product.prodname_codeql %} database

To analyze a {% data variables.product.prodname_codeql %} database with a {% data variables.product.prodname_codeql %} pack, run the following command:

```
codeql database analyze <database> <scope>/<pack>@x.x.x:<path>
```
* `<database>`: the {% data variables.product.prodname_codeql %} database to be analyzed.
* `<scope>`: the name of the {% data variables.product.prodname_dotcom %} organization that the pack is published to.
* `<pack>`: the name for the pack that you are using.
* `@x.x.x`: an optional version number. If omitted, the latest version will be used.
* `:<path>`: an optional path to a query, directory, or query suite. If omitted, the pack’s default query suite will be used.

The `analyze` command will run the default suite of any specified {% data variables.product.prodname_codeql %} packs. You can specify multiple {% data variables.product.prodname_codeql %} packs to be used for analyzing a {% data variables.product.prodname_codeql %} database. For example:

```
codeql <database> analyze <scope>/<pack> <scope>/<other-pack>
```

{% ifversion query-pack-compatibility %}
{% note %}

**Note:** The `codeql pack download` command stores the pack it downloads in an internal location that is not intended for local modification.  Unexpected (and hard to troubleshoot) behavior may result if the pack is modified after downloading. For more information about customizing packs, see "[Creating and working with {% data variables.product.prodname_codeql %} packs](#creating-and-working-with-codeql-packs)."

{% endnote %}

## About {% data variables.product.prodname_codeql %} pack compatibility

When a query pack is published, it includes pre-compiled representations of all the queries in it. These pre-compiled queries are generally much faster to execute than it is to compile the QL source from scratch during the analysis. However, the pre-compiled queries also depend on certain internals of the QL evaluator, so if the version of {% data variables.product.prodname_codeql %} that performs the analysis is too different from the version that ran `codeql pack publish`, it may be necessary to compile the queries from source instead during analysis. The recompilation happens automatically and will not affect the _results_ of the analysis, but it can make the
analysis significantly slower.

It can generally be assumed that if a pack is published with one release of {% data variables.product.prodname_codeql %}, the precompiled queries in it can be used directly by _later_ releases of {% data variables.product.prodname_codeql %}, as long as there is no more than 6 months between the release dates. We will make reasonable efforts to keep new releases compatible for longer than that, but make no promises.

It can also be assumed that a pack published by the _latest_ public release of {% data variables.product.prodname_codeql %} will be useable by the version of {% data variables.product.prodname_codeql %} that is used by {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_actions %}, even though that is often a slightly older release.

As an exception to the above, packs published with versions of {% data variables.product.prodname_codeql %} _earlier than 2.12.0_ are not compatible with any earlier or later versions. These old versions did not write pre-compiled queries in a format that supported compatibility between releases. Packs published by these versions can still be _used_ by newer versions, but the analysis will be slower because the queries have to be recompiled first.

As a user of a published query pack, you can check that the {% data variables.product.prodname_codeql %} makes use of the precompiled queries in it by inspecting the terminal output from an analysis runs that uses the query pack. If it contains lines looking like the following, then the precompiled queries were used successfully:
```
[42/108] Loaded /long/path/to/query/Filename.qlx.
```
However, if they instead look like the following, then usage of the precompiled queries failed:
```
Compiling query plan for /long/path/to/query/Filename.ql.
[42/108 comp 25s] Compiled /long/path/to/query/Filename.ql.
```
The results of the analysis will still be good in this case, but to get optimal performance you may need to upgrade to a newer version of the {% data variables.product.prodname_codeql %} CLI and/or of the query pack.

If you publish query packs on the {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %} for others to use, we recommend that you use a recent release of {% data variables.product.prodname_codeql %} to run `codeql pack publish`, and that you publish a fresh version of your pack with an updated {% data variables.product.prodname_codeql %} version before the version you used turns 6 months old. That way you can ensure that users of your pack who keep _their_ {% data variables.product.prodname_codeql %} up to date will benefit from the pre-compiled queries in your pack.

If you publish query packs with the intention of using them on a {% data variables.product.prodname_ghe_server %} installation that uses its bundled {% data variables.product.prodname_codeql %} binaries, use the same {% data variables.product.prodname_codeql %} version to run `codeql pack publish`. Newer versions might produce pre-compiled queries that the one in {% data variables.product.prodname_ghe_server %} may not recognize. Your {% data variables.product.prodname_ghe_server %} administrator may choose to upgrade to a newer version of {% data variables.product.prodname_codeql %} periodically. If so, follow their lead.

{% endif %}

{% ifversion ghes %}

## Working with {% data variables.product.prodname_codeql %} packs on {% data variables.product.prodname_ghe_server %}

By default, the {% data variables.product.prodname_codeql_cli %} expects to download {% data variables.product.prodname_codeql %} packs from and publish packs to the {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %}. However, you can also work with {% data variables.product.prodname_codeql %} packs in a {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_ghe_server %} by creating a `qlconfig.yml` file to tell the CLI which {% data variables.product.prodname_container_registry %} to use for each pack.

Create a `~/.codeql/qlconfig.yml` file using your preferred text editor, and add entries to specify which registry to use for one or more package name patterns.
For example, the following `qlconfig.yml` file associates all packs with the {% data variables.product.prodname_container_registry %} for the {% data variables.product.prodname_ghe_server %} at `GHE_HOSTNAME`, except packs matching `codeql/\*`, which are associated with the {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %}:

```yaml
registries:
- packages:
  - 'codeql/*'
  - 'other-org/*'
  url: https://ghcr.io/v2/
- packages: '*'
  url: https://containers.GHE_HOSTNAME/v2/
```

The {% data variables.product.prodname_codeql_cli %} will determine which registry to use for a given package name by finding the first item in the `registries` list with a `packages` property that matches that package name.
This means that you’ll generally want to define the most specific package name patterns first. The `packages` property may be a single package name, a glob pattern, or a YAML list of package names and glob patterns.

The `registries` list can also be placed inside of a `codeql-workspace.yml` file. Doing so will allow you to define the registries to be used within a specific workspace, so that it can be shared amongst other {% data variables.product.prodname_codeql %} users of the workspace. The `registries` list in the `codeql-workspace.yml` will be merged with and take precedence over the list in the global `qlconfig.yml`. For more information about `codeql-workspace.yml`, see [About {% data variables.product.prodname_codeql %} workspaces](/code-security/codeql-cli/codeql-cli-reference/about-codeql-workspaces#about-codeql-workspaces).

You can now use `codeql pack publish`, `codeql pack download`, and `codeql database analyze` to manage packs on {% data variables.product.prodname_ghe_server %}.

{% endif %}

## Authenticating to {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registries %}

You can publish packs and download private packs by authenticating to the appropriate {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %}.

You can authenticate to the {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %} in two ways:

1. Pass the `--github-auth-stdin` option to the {% data variables.product.prodname_codeql_cli %}, then supply a {% data variables.product.prodname_github_apps %} token or {% data variables.product.pat_generic %} via standard input.
2. Set the `GITHUB_TOKEN` environment variable to a {% data variables.product.prodname_github_apps %} token or {% data variables.product.pat_generic %}.

{% ifversion ghes %}

Similarly, you can authenticate to a {% data variables.product.prodname_ghe_server %} {% data variables.product.prodname_container_registry %}, or authenticate to multiple registries simultaneously (for example, to download or run private packs from multiple registries) in two ways:

1. Pass the `--registries-auth-stdin` option to the {% data variables.product.prodname_codeql_cli %}, then supply a registry authentication string via standard input.
2. Set the `CODEQL_REGISTRIES_AUTH` environment variable to a registry authentication string.

A registry authentication string is a comma-separated list of `<registry-url>=<token>` pairs, where `registry-url` is a {% data variables.product.prodname_container_registry %} URL, such as `https://containers.GHE_HOSTNAME/v2/`, and `token` is a {% data variables.product.prodname_github_apps %} token or {% data variables.product.pat_generic %} for that {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %}.
This ensures that each token is only passed to the {% data variables.product.prodname_container_registry %} you specify.
For instance, the following registry authentication string specifies that the {% data variables.product.prodname_codeql_cli %} should authenticate to the {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %} using the token `<token1>` and to the {% data variables.product.prodname_container_registry %} for the GHES instance at `GHE_HOSTNAME` using the token `<token2>`:

```
https://ghcr.io/v2/=<token1>,https://containers.GHE_HOSTNAME/v2/=<token2>
```

{% endif %}
