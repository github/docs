---
title: Publishing and using CodeQL packs
shortTitle: Publish and use packs
intro: Share or download a {% data variables.product.prodname_codeql %} pack, then analyze your {% data variables.product.prodname_codeql %} database.
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/codeql-cli/publishing-and-using-codeql-packs
  - /code-security/codeql-cli/using-the-codeql-cli/publishing-and-using-codeql-packs
  - /code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs
  - /code-security/tutorials/customize-code-scanning/publishing-and-using-codeql-packs
contentType: how-tos
category:
  - Customize vulnerability detection with CodeQL
---

{% ifversion ghec or ghes %}

## Working with {% data variables.product.prodname_codeql %} packs on {% data variables.enterprise.gh_enterprise %}

By default, the {% data variables.product.prodname_codeql_cli %} expects to download {% data variables.product.prodname_codeql %} packs from and publish packs to the {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %}. However, you can also work with {% data variables.product.prodname_codeql %} packs in a {% data variables.product.prodname_container_registry %} on {% data variables.enterprise.gh_enterprise %} by creating a `qlconfig.yml` file to tell the CLI which {% data variables.product.prodname_container_registry %} to use for each pack.

Create a `~/.codeql/qlconfig.yml` file on Linux/MacOS or `%HOMEPATH%\.codeql\qlconfig.yml` on Windows using your preferred text editor, and add entries to specify which registry to use for one or more package name patterns.
For example, the following `qlconfig.yml` file associates all packs with the {% data variables.product.prodname_container_registry %} at `{% data variables.enterprise.gh_enterprise_domain %}`, except packs matching `codeql/\*` or the `other-org/*` organization, which are associated with the {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %}:

```yaml
registries:
- packages:
  - 'codeql/*'
  - 'other-org/*'
  # {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %}
  url: https://ghcr.io/v2/
- packages: '*'
  # {% data variables.product.prodname_container_registry %} hosted at `{% data variables.enterprise.gh_enterprise_domain %}`
  url: {% data variables.enterprise.gh_enterprise_container_registry %}
```

The {% data variables.product.prodname_codeql_cli %} will determine which registry to use for a given package name by finding the first item in the `registries` list with a `packages` property that matches that package name.
This means that you’ll generally want to define the most specific package name patterns first. The `packages` property may be a single package name, a glob pattern, or a YAML list of package names and glob patterns.

The `registries` list can also be placed inside a `codeql-workspace.yml` file. Doing so will allow you to define the registries to be used within a specific workspace, so that it can be shared amongst other {% data variables.product.prodname_codeql %} users of the workspace. The `registries` list in `codeql-workspace.yml` will be merged with and take precedence over the list in the global `qlconfig.yml`. For more information about `codeql-workspace.yml`, see [AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/about-codeql-workspaces#about-codeql-workspaces).

You can now use `codeql pack publish`, `codeql pack download`, and `codeql database analyze` to manage packs on {% data variables.enterprise.gh_enterprise %}.

{% endif %}

## Authenticating to {% data variables.product.github %} {% data variables.product.prodname_container_registries %}

You can publish packs and download private packs by authenticating to the appropriate {% data variables.product.github %} {% data variables.product.prodname_container_registry %}.

{% ifversion ghec or ghes %}

### Authenticating to {% data variables.product.prodname_container_registries %} on {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

You can authenticate to the {% data variables.product.prodname_container_registry %} in two ways:

1. Pass the `--github-auth-stdin` option to the {% data variables.product.prodname_codeql_cli %}, then supply a {% data variables.product.prodname_github_apps %} token or {% data variables.product.pat_generic %} via standard input.
1. Set the `GITHUB_TOKEN` environment variable to a {% data variables.product.prodname_github_apps %} token or {% data variables.product.pat_generic %}.

{% ifversion ghec or ghes %}

### Authenticating to {% data variables.product.prodname_container_registries %} on {% data variables.enterprise.gh_enterprise %}

Similarly, you can authenticate to a {% data variables.product.prodname_container_registry %} on {% data variables.enterprise.gh_enterprise %}, or authenticate to multiple registries simultaneously (for example, to download or run private packs from multiple registries) in two ways:

1. Pass the `--registries-auth-stdin` option to the {% data variables.product.prodname_codeql_cli %}, then supply a registry authentication string via standard input.
1. Set the `CODEQL_REGISTRIES_AUTH` environment variable to a registry authentication string.

A registry authentication string is a comma-separated list of `<registry-url>=<token>` pairs, where `registry-url` is a {% data variables.product.prodname_container_registry %} URL, such as `{% data variables.enterprise.gh_enterprise_container_registry %}`, and `token` is a {% data variables.product.prodname_github_apps %} token or {% data variables.product.pat_generic %} for that {% data variables.product.prodname_container_registry %}.
This ensures that each token is only passed to the {% data variables.product.prodname_container_registry %} you specify.

For example, the following registry authentication string specifies that the {% data variables.product.prodname_codeql_cli %} should authenticate as follows:

* Use the token `<token1>` to authenticate to {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %}.
* Use the token `<token2>` to authenticate to the {% data variables.product.prodname_container_registry %} for the enterprise at `{% data variables.enterprise.gh_enterprise_container_registry %}`.

```shell
https://ghcr.io/v2/=<token1>,{% data variables.enterprise.gh_enterprise_container_registry %}=<token2>
```

{% endif %}

## Publishing your {% data variables.product.prodname_codeql %} pack

To share your {% data variables.product.prodname_codeql %} pack with other people, you can publish it to the {% data variables.product.prodname_container_registry %}.

### Configuring the `qlpack.yml` file before publishing

{% data reusables.code-scanning.codeql-cli-version-ghes %}

You can check and modify the configuration details of your {% data variables.product.prodname_codeql %} pack prior to publishing. Open the `qlpack.yml` file in your preferred text editor.

```yaml
library: # set to true if the pack is a library. Set to false or omit for a query pack
name: <scope>/<pack>
version: <x.x.x>
description: <Description to publish with the package>
defaultSuite: # optional, one or more queries in the pack to run by default
    - query: <relative-path>/query-file>.ql
defaultSuiteFile: default-queries.qls # optional, a pointer to a query-suite in this pack
license: # optional, the license under which the pack is published
dependencies: # map from CodeQL pack name to version range
```

* `name:` must follow the `<scope>/<pack>` format, where `<scope>` is the {% data variables.product.prodname_dotcom %} organization that you will publish to and `<pack>` is the name for the pack.

* A maximum of one of `defaultSuite` or `defaultSuiteFile` is allowed. These are two different ways to define a default query suite to be run, the first by specifying queries directly in the qlpack.yml file and the second by specifying a query suite in the pack.

### Running `codeql pack publish`

When you are ready to publish a pack to the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %}, you can run the following command in the root of the pack directory:

```shell
codeql pack publish
```

The published package will be displayed in the packages section of {% data variables.product.prodname_dotcom %} organization specified by the scope in the `qlpack.yml` file.

> [!NOTE]
> If you're publishing model packs to the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %} in order to extend coverage to all repositories in an organization as part of a default setup configuration, then you need to ensure that repositories running code scanning can access those model packs. For more information, see [AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup) and [AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).

## Downloading an existing {% data variables.product.prodname_codeql %} pack

To run a pack that someone else has created, you must first download it by running the following command:

```shell
codeql pack download <scope>/<pack>@x.x.x
```

* `<scope>`: the name of the {% data variables.product.prodname_dotcom %} organization that you will download from.
* `<pack>`: the name for the pack that you want to download.
* `@x.x.x`: an optional version number. If omitted, the latest version will be downloaded.

This command accepts arguments for multiple packs.

If you write scripts that specify a particular version number of a
query pack to download, keep in mind that when you update your version of
{% data variables.product.prodname_codeql %} to a newer one, you may
also need to switch to a newer version of the query pack. Newer
versions of {% data variables.product.prodname_codeql %} _may_ provide
degraded performance when used with query packs that have been pinned
to a very old version. For more information, see [AUTOTITLE](/code-security/reference/code-scanning/codeql/codeql-cli/codeql-query-packs#codeql-pack-compatibility).

## Using a {% data variables.product.prodname_codeql %} pack to analyze a {% data variables.product.prodname_codeql %} database

To analyze a {% data variables.product.prodname_codeql %} database with a {% data variables.product.prodname_codeql %} pack, run the following command:

```shell
codeql database analyze <database> <scope>/<pack>@x.x.x:<path>
```

* `<database>`: the {% data variables.product.prodname_codeql %} database to be analyzed.
* `<scope>`: the name of the {% data variables.product.prodname_dotcom %} organization that the pack is published to.
* `<pack>`: the name for the pack that you are using.
* `@x.x.x`: an optional version number. If omitted, the latest version will be used.
* `:<path>`: an optional path to a query, directory, or query suite. If omitted, the pack’s default query suite will be used.

The `analyze` command will run the default suite of any specified {% data variables.product.prodname_codeql %} packs. You can specify multiple {% data variables.product.prodname_codeql %} packs to be used for analyzing a {% data variables.product.prodname_codeql %} database. For example:

```shell
codeql <database> analyze <scope>/<pack> <scope>/<other-pack>
```

> [!NOTE]
> The `codeql pack download` command stores the pack it downloads in an internal location that is not intended for local modification. Unexpected (and hard to troubleshoot) behavior may result if the pack is modified after downloading. For more information about customizing packs, see [AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs).
