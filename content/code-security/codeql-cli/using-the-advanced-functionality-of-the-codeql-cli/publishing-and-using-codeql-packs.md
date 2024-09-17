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
redirect_from:
  - /code-security/codeql-cli/publishing-and-using-codeql-packs
  - /code-security/codeql-cli/using-the-codeql-cli/publishing-and-using-codeql-packs
---

## Configuring the `qlpack.yml` file before publishing

{% data reusables.code-scanning.codeql-cli-version-ghes %}

You can check and modify the configuration details of your {% data variables.product.prodname_codeql %} pack prior to publishing. Open the `qlpack.yml` file in your preferred text editor.

```yaml
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

* `name:` must follow the `<scope>/<pack>` format, where `<scope>` is the {% data variables.product.prodname_dotcom %} organization that you will publish to and `<pack>` is the name for the pack.

* A maximum of one of `default-suite` or `default-suite-file` is allowed. These are two different ways to define a default query suite to be run, the first by specifying queries directly in the qlpack.yml file and the second by specifying a query suite in the pack.

## Running `codeql pack publish`

When you are ready to publish a pack to the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %}, you can run the following command in the root of the pack directory:

```shell
codeql pack publish
```

The published package will be displayed in the packages section of {% data variables.product.prodname_dotcom %} organization specified by the scope in the `qlpack.yml` file.

{% note %}

**Note:** If you're publishing model packs to the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %} in order to extend coverage to all repositories in an organization as part of a default setup configuration, then you need to ensure that repositories running code scanning can access those model packs. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup)" and "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."

{% endnote %}

## Running `codeql pack download <scope>/<pack>`

To run a pack that someone else has created, you must first download it by running the following command:

```shell
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

{% ifversion query-pack-compatibility %}
{% note %}

**Note:** The `codeql pack download` command stores the pack it downloads in an internal location that is not intended for local modification.  Unexpected (and hard to troubleshoot) behavior may result if the pack is modified after downloading. For more information about customizing packs, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs)."

{% endnote %}

## About {% data variables.product.prodname_codeql %} pack compatibility

When a query pack is published, it includes pre-compiled representations of all the queries in it. These pre-compiled queries are generally much faster to execute than it is to compile the QL source from scratch during the analysis. However, the pre-compiled queries also depend on certain internals of the QL evaluator, so if the version of {% data variables.product.prodname_codeql %} that performs the analysis is too different from the version that ran `codeql pack publish`, it may be necessary to compile the queries from source instead during analysis. The recompilation happens automatically and will not affect the _results_ of the analysis, but it can make the
analysis significantly slower.

It can generally be assumed that if a pack is published with one release of {% data variables.product.prodname_codeql %}, the precompiled queries in it can be used directly by _later_ releases of {% data variables.product.prodname_codeql %}, as long as there is no more than 6 months between the release dates. We will make reasonable efforts to keep new releases compatible for longer than that, but make no promises.

It can also be assumed that a pack published by the _latest_ public release of {% data variables.product.prodname_codeql %} will be useable by the version of {% data variables.product.prodname_codeql %} that is used by {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_actions %}, even though that is often a slightly older release.

As a user of a published query pack, you can check that the {% data variables.product.prodname_codeql %} makes use of the precompiled queries in it by inspecting the terminal output from an analysis runs that uses the query pack. If it contains lines looking like the following, then the precompiled queries were used successfully:

```shell
[42/108] Loaded /long/path/to/query/Filename.qlx.
```

However, if they instead look like the following, then usage of the precompiled queries failed:

```shell
Compiling query plan for /long/path/to/query/Filename.ql.
[42/108 comp 25s] Compiled /long/path/to/query/Filename.ql.
```

The results of the analysis will still be good in this case, but to get optimal performance you may need to upgrade to a newer version of the {% data variables.product.prodname_codeql_cli %} and/or of the query pack.

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

The `registries` list can also be placed inside of a `codeql-workspace.yml` file. Doing so will allow you to define the registries to be used within a specific workspace, so that it can be shared amongst other {% data variables.product.prodname_codeql %} users of the workspace. The `registries` list in the `codeql-workspace.yml` will be merged with and take precedence over the list in the global `qlconfig.yml`. For more information about `codeql-workspace.yml`, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/about-codeql-workspaces#about-codeql-workspaces)."

You can now use `codeql pack publish`, `codeql pack download`, and `codeql database analyze` to manage packs on {% data variables.product.prodname_ghe_server %}.

{% endif %}

## Authenticating to {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registries %}

You can publish packs and download private packs by authenticating to the appropriate {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %}.

You can authenticate to the {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %} in two ways:

1. Pass the `--github-auth-stdin` option to the {% data variables.product.prodname_codeql_cli %}, then supply a {% data variables.product.prodname_github_apps %} token or {% data variables.product.pat_generic %} via standard input.
1. Set the `GITHUB_TOKEN` environment variable to a {% data variables.product.prodname_github_apps %} token or {% data variables.product.pat_generic %}.

{% ifversion ghes %}

Similarly, you can authenticate to a {% data variables.product.prodname_ghe_server %} {% data variables.product.prodname_container_registry %}, or authenticate to multiple registries simultaneously (for example, to download or run private packs from multiple registries) in two ways:

1. Pass the `--registries-auth-stdin` option to the {% data variables.product.prodname_codeql_cli %}, then supply a registry authentication string via standard input.
1. Set the `CODEQL_REGISTRIES_AUTH` environment variable to a registry authentication string.

A registry authentication string is a comma-separated list of `<registry-url>=<token>` pairs, where `registry-url` is a {% data variables.product.prodname_container_registry %} URL, such as `https://containers.GHE_HOSTNAME/v2/`, and `token` is a {% data variables.product.prodname_github_apps %} token or {% data variables.product.pat_generic %} for that {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %}.
This ensures that each token is only passed to the {% data variables.product.prodname_container_registry %} you specify.
For instance, the following registry authentication string specifies that the {% data variables.product.prodname_codeql_cli %} should authenticate to the {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %} using the token `<token1>` and to the {% data variables.product.prodname_container_registry %} for the GHES instance at `GHE_HOSTNAME` using the token `<token2>`:

```shell
https://ghcr.io/v2/=<token1>,https://containers.GHE_HOSTNAME/v2/=<token2>
```

{% endif %}

## About `qlpack.yml` files

When executing query-related commands, {% data variables.product.prodname_codeql %} first looks in siblings of the installation directory (and their subdirectories) for `qlpack.yml` files.
Then it checks the package cache for {% data variables.product.prodname_codeql %} packs which have been downloaded. This means that when you are developing queries locally, the local packages
in the installation directory override packages of the same name in the package cache, so that you can test your local changes.

The metadata in each `qlpack.yml` file tells {% data variables.product.prodname_codeql %} how to compile any queries in the pack, what libraries the pack depends on, and where to
find query suite definitions.

The contents of the {% data variables.product.prodname_codeql %} pack (queries or libraries used in {% data variables.product.prodname_codeql %} analysis) is included in the same directory as `qlpack.yml`, or its subdirectories.

The directory containing the `qlpack.yml` file serves as the root directory for the content of the {% data variables.product.prodname_codeql %} pack. That is, for all `.ql` and `.qll` files in the pack, {% data variables.product.prodname_codeql %} will resolve all import statements relative to the directory containing the `qlpack.yml` file at the pack’s root.

### `qlpack.yml` properties

The following properties are supported in `qlpack.yml` files.

#### `name`

* Required by all packs.
* Defines the scope of the pack, where the {% data variables.product.prodname_codeql %} pack is published, and the name of the pack defined using alphanumeric characters and hyphens. It must be unique as {% data variables.product.prodname_codeql %} cannot differentiate between {% data variables.product.prodname_codeql %} packs with identical names. Use the pack name to specify queries to run using `database analyze` and to define dependencies between {% data variables.product.prodname_codeql %} packs (see examples below). For example:

  ```yaml
  name: octo-org/security-queries
  ```

#### `version`

* Required by all packs that are published.
* Defines a semantic version for this {% data variables.product.prodname_codeql %} pack that must adhere to the [SemVer v2.0.0 specification](https://semver.org/spec/v2.0.0.html). For example:

  ```yaml
  version: 0.0.0
  ```

{% ifversion codeql-model-packs %}

#### `dataExtensions`

* Required by model packs.
* Takes a list of glob patterns that specify where data extension files are located relative to the root of the query pack or library pack.
{% endif %}

#### `dependencies`

* Required by query and library packs that define {% data variables.product.prodname_codeql %} package dependencies on other packs. {% ifversion codeql-model-packs %}Model packs cannot define any dependencies and use `extensionTargets` instead.{% endif %}
* Defines a map from pack references to the semantic version range that is compatible with this pack. Supported for {% data variables.product.prodname_codeql_cli %} versions v2.6.0 and later. For example:

  ```yaml
  dependencies:
    codeql/cpp-all: ^0.0.2
  ```

  If you are unsure or it does not matter which version should be used, then you can use `"*"`, which indicates that any version of this dependency is compatible with this pack. In practice, this will usually resolve to the highest published version of the dependency.

  There is a special version placeholder, `${workspace}`, which indicates that this {% data variables.product.prodname_codeql %} pack depends on whatever version of the dependency is in the same workspace. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/about-codeql-workspaces#using-workspace-as-a-version-range-in-qlpackyml-files)."

#### `defaultSuiteFile`

* Required by packs that export a set of default queries to run.
* Defines the path to a query suite file relative to the package root, containing all of the queries that are run by default when this pack is passed to the `codeql database analyze` command. Supported from CLI version v2.6.0 and onwards. Only one of `defaultSuiteFile` or `defaultSuite` can be defined. For example:

  ```yaml
  defaultSuiteFile: cpp-code-scanning.qls
  ```

#### `defaultSuite`

* Required by packs that export a set of default queries to run.
* Defines an inlined query suite containing all of the queries that are run by default when this pack is passed to the `codeql database analyze` command. Supported from CLI version v2.6.0 and onwards. Only one of `defaultSuiteFile` or `defaultSuite` can be defined. For example:

  ```yaml
  defaultSuite:
    queries: .
    exclude:
      precision: medium
  ```

{% ifversion codeql-model-packs %}

#### `extensionTargets`

* Required by model packs.
* Declares which query packs the extensions in the model pack apply to. The extension pack will inject its data extensions into each pack that is named in the `extensionTargets` dictionary, if the pack falls within the specified version range and it is used in the evaluation.
{% endif %}

#### `groups`

* Optional.
* Defines logical groupings of packs in a {% data variables.product.prodname_codeql %} workspace. Using groups is a way to apply pack operations to subsets of packs in a workspace. For example, the following pack is defined to be a part of the `java` and the `experimental` groups:

  ```yaml
  groups:
    - java
    - experimental
  ```

  Running `codeql pack publish --groups java,-experimental` will publish all of the packs in the `java` group, _except_ the `experimental` packs. You can run the `codeql pack ls --groups [-]<group>[,[-]<group>...]` command to list the packs in a workspace that match the specified set of groups.

  A {% data variables.product.prodname_codeql %} pack in the given workspace is included in the list if:

  * It is in at least one of the groups listed without a minus sign (this condition is automatically satisfied if there are no groups listed without a minus sign), and
  * It is not in any group listed with a minus sign.

#### `library`

* Required by library packs.
* Defines a boolean value that indicates whether or not this pack is a library pack. Library packs do not contain queries and are not compiled. Query packs can ignore this field or explicitly set it to `false`. For example:

  ```yaml
  library: true
  ```

#### `suites`

* Optional for packs that define query suites. This allows users to run query suites stored in the specified directory by specifying the pack name, without providing the full path.
* Currently supported only for the standard query packs included in {% data variables.product.prodname_codeql %} CLI bundle.
* This option is not supported for {% data variables.product.prodname_codeql %} packs downloaded from the {% data variables.product.prodname_dotcom %} container registry.

#### `tests`

* Optional for packs containing {% data variables.product.prodname_codeql %} tests. Ignored for packs without tests.
* Defines the path to a directory within the pack that contains tests, defined relative to the pack directory. Use `.` to specify the whole pack. Any queries in this directory are run as tests when `test run` is run with the `--strict-test-discovery` option. These queries are ignored by query suite definitions that use `queries` or `qlpack` instructions to ask for all queries in a particular pack. If this property is missing, then `.` is assumed. For example:

  ```yaml
  tests: .
  ```

#### `extractor`

* Required by all packs containing {% data variables.product.prodname_codeql %} tests.
* Defines the {% data variables.product.prodname_codeql %} language extractor to use when running the {% data variables.product.prodname_codeql %} tests in the pack. For more information about testing queries, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/testing-custom-queries)." For example:

  ```yaml
  extractor: {% ifversion codeql-language-identifiers-311 %}javascript-typescript{% else %}javascript{% endif %}
  ```

#### `authors`

* Optional.
* Defines metadata that will be displayed on the packaging search page in the packages section of the account that the {% data variables.product.prodname_codeql %} pack is published to. For example:

  ```yaml
  authors: author1@github.com,author2@github.com
  ```

#### `license`

* Optional.
* Defines metadata that will be displayed on the packaging search page in the packages section of the account that the {% data variables.product.prodname_codeql %} pack is published to. For a list of allowed licenses, see [SPDX License List](https://spdx.org/licenses/) in the SPDX Specification. For example:

  ```yaml
  license: MIT
  ```

#### `description`

* Optional.
* Defines metadata that will be displayed on the packaging search page in the packages section of the account that the {% data variables.product.prodname_codeql %} pack is published to. For example:

  ```yaml
  description: Human-readable description of the contents of the {% data variables.product.prodname_codeql %} pack.
  ```

#### `libraryPathDependencies`

* Optional, deprecated. Use the `dependencies` property instead.
* Previously used to define the names of any {% data variables.product.prodname_codeql %} packs that this {% data variables.product.prodname_codeql %} pack depends on, as an array. This gives the pack access to any libraries, database schema, and query suites defined in the dependency. For example:

  ```yaml
  libraryPathDependencies: codeql/javascript-all
  ```

#### `dbscheme`

* Required by core language packs only.
* Defines the path to the [database schema](https://codeql.github.com/docs/codeql-overview/codeql-glossary/#codeql-database-schema) for all libraries and queries written for this {% data variables.product.prodname_codeql %} language (see example below). For example:

  ```yaml
  dbscheme: semmlecode.python.dbscheme
  ```

#### `upgrades`

* Required by core language packs only.
* Defines the path to a directory within the pack that contains database upgrade scripts, defined relative to the pack directory. Database upgrades are used internally to ensure that a database created with a different version of the {% data variables.product.prodname_codeql_cli %} is compatible with the current version of the CLI. For example:

  ```yaml
  upgrades: .
  ```

#### `warnOnImplicitThis`

* Optional. Defaults to `false` if the `warnOnImplicitThis` property is not defined.
* Defines a boolean that specifies whether or not the compiler should emit warnings about member predicate calls with implicit `this` call receivers, that is, without an explicit receiver. Available since {% data variables.product.prodname_codeql_cli %} v2.13.2. For example:

  ```yaml
  warnOnImplicitThis: true
  ```

## About `codeql-pack.lock.yml` files

`codeql-pack.lock.yml` files store the versions of the resolved transitive dependencies of a {% data variables.product.prodname_codeql %} pack. This file is created by the `codeql pack install` command if it does not already exist and should be added to your version control system. The `dependencies` section of the `qlpack.yml` file contains version ranges that are compatible with the pack. The `codeql-pack.lock.yml` file locks the versions to precise dependencies. This ensures that running `codeql pack install` on this the pack will always retrieve the same versions of dependencies even if newer compatible versions exist.

For example, if a `qlpack.yml` file contains the following dependencies:

```yaml
dependencies:
  codeql/cpp-all: ^0.1.2
  my-user/my-lib: ^0.2.3
  other-dependency/from-source: "*"
```

The `codeql-pack.lock.yml` file will contain something like the following:

```yaml
dependencies:
  codeql/cpp-all:
    version: 0.1.4
  my-user/my-lib:
    version: 0.2.4
  my-user/transitive-dependency:
    version: 1.2.4
```

The `codeql/cpp-all` dependency is locked to version 0.1.4. The `my-user/my-lib` dependency is locked to version 0.2.4. The `my-user/transitive-dependency`, which is a transitive dependency and is not specified in the `qlpack.yml` file, is locked to version 1.2.4. The `other-dependency/from-source` is absent from the lock file since it is resolved from source. This dependency must be available in the same {% data variables.product.prodname_codeql %} workspace as the pack. For more information about {% data variables.product.prodname_codeql %} workspaces and resolving dependencies from source, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/about-codeql-workspaces)."

In most cases, the `codeql-pack.lock.yml` file is only relevant for query packs since library packs are non-executable and usually do not need their transitive dependencies to be fixed. The exception to this is for library packs that contain tests. In this case, the `codeql-pack.lock.yml` file is used to ensure that the tests are always run with the same versions of dependencies to avoid spurious failures when there are mismatched dependencies.

## Examples of custom {% data variables.product.prodname_codeql %} packs

When you write custom queries or tests, you should save them in custom {% data variables.product.prodname_codeql %} packs. For simplicity, try to organize each pack logically. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs#codeql-pack-structure)." Save files for queries and tests in separate packs and, where possible, organize custom packs into specific folders for each target language. This is particularly useful if you intend to publish your {% data variables.product.prodname_codeql %} packs so they can be shared with others or used in code scanning. For more information, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql)."

### {% data variables.product.prodname_codeql %} packs for custom libraries

A custom {% data variables.product.prodname_codeql %} pack containing custom C++ libraries, with no queries or tests, may have a `qlpack.yml` file containing:

```yaml
name: my-github-user/my-custom-libraries
version: 1.2.3
library: true
dependencies:
  codeql/cpp-all: ^0.1.2
```

where `codeql/cpp-all` is the name of the {% data variables.product.prodname_codeql %} pack for C/C++ analysis included in the {% data variables.product.prodname_codeql %} repository. The version range `^0.1.2` indicates that this pack is compatible with all versions of `codeql/cpp-all` that are greater than or equal to `0.1.2` and less than `0.2.0`. Any {% data variables.product.prodname_codeql %} library file (a file with a `.qll` extension) defined in this pack will be available to queries defined in any query pack that includes this pack in its dependencies block.

The `library` property indicates that this pack is a library pack and does not contain any queries.

### {% data variables.product.prodname_codeql %} packs for custom queries

A custom {% data variables.product.prodname_codeql %} pack containing custom C++ queries and libraries may have a `qlpack.yml` file containing:

```yaml
name: my-github-user/my-custom-queries
version: 1.2.3
dependencies:
  codeql/cpp-all: ^0.1.2
  my-github-user/my-custom-libraries: ^1.2.3
```

where `codeql/cpp-all` is the name of the {% data variables.product.prodname_codeql %} pack for C/C++ analysis included in the {% data variables.product.prodname_codeql %} repository. The version range `^0.1.2` indicates that this pack is compatible with all versions of `codeql/cpp-all` that are greater than or equal to `0.1.2` and less than `0.2.0`. `my-github-user/my-custom-libraries` is the name of a {% data variables.product.prodname_codeql %} pack containing custom {% data variables.product.prodname_codeql %} libraries for C++. Any {% data variables.product.prodname_codeql %} library file (a file with a `.qll` extension) defined in this pack will be available to queries in the `my-github-user/my-custom-queries` pack.

### {% data variables.product.prodname_codeql %} packs for custom tests

For custom {% data variables.product.prodname_codeql %} packs containing test files, you also need to include an
`extractor` property so that the `test run` command knows how to create test
databases. You may also wish to specify the `tests` property.

{% data reusables.codeql-cli.test-qlpack %}

For more information about running tests, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/testing-custom-queries)."

## Examples of {% data variables.product.prodname_codeql %} packs in the {% data variables.product.prodname_codeql %} repository

Each of the languages in the {% data variables.product.prodname_codeql %} repository has four main {% data variables.product.prodname_codeql %} packs:

* Core library pack for the language, with the database schema
used by the language, and {% data variables.product.prodname_codeql %} libraries, and queries at `<language>/ql/lib`

* Core query pack for the language that includes the default queries for the language, along
with their query suites at `<language>/ql/src`

* Tests for the core language libraries and queries at `<language>/ql/test`

* Example queries for the language at `<language>/ql/examples`

### Core library pack

Here is an example `qlpack.yml` file for the [C/C++ analysis libraries](https://github.com/github/codeql/blob/main/cpp/ql/lib/qlpack.yml)
core language pack:

```yaml
name: codeql/cpp-all
version: x.y.z-dev
dbscheme: semmlecode.cpp.dbscheme
library: true
upgrades: upgrades
```

Some extra notes on the following properties:

* `library`: Indicates that this is a library pack with no executable queries. It is only meant to be used as a dependency for other packs.

* `dbscheme` and `upgrades`: These properties are internal to the {% data variables.product.prodname_codeql_cli %} and should only be defined in the core {% data variables.product.prodname_codeql %} query pack for a language.

### Core query pack

Here is an example `qlpack.yml` file for [C/C++ analysis queries](https://github.com/github/codeql/blob/main/cpp/ql/src/qlpack.yml)
core query pack:

```yaml
name: codeql/cpp-queries
version: x.y.z-dev
dependencies:
    codeql/cpp-all: "*"
    codeql/suite-helpers: "*"
suites: codeql-suites
defaultSuiteFile: codeql-suites/cpp-code-scanning.qls
```

Some extra notes on the following properties:

* `dependencies`: This query pack depends on `codeql/cpp-all` and `codeql/suite-helpers`. Since these dependencies are resolved from source, it does not matter what version of the {% data variables.product.prodname_codeql %} pack they are compatible with. For more information about resolving dependencies from source, see "[Source Dependencies](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/about-codeql-workspaces#source-dependencies)."

* `suites`: Indicates the directory containing "well-known" query suites.

* `defaultSuiteFile`: The name of the default query suite file that is used when no query suite is specified.

### Tests for the core {% data variables.product.prodname_codeql %} pack

Here is an example `qlpack.yml` file for [C/C++ analysis tests](https://github.com/github/codeql/blob/main/cpp/ql/src/qlpack.yml)
core test pack:

```yaml
name: codeql/cpp-tests
dependencies:
  codeql/cpp-all: "*"
  codeql/cpp-queries: "*"
extractor: cpp
tests: .
```

Some extra notes on the following properties:

* `dependencies`: This pack depends on the core {% data variables.product.prodname_codeql %} query and library packs for C++.

* `extractor`: This specifies that all the tests will use the same C++ extractor to create the database for the tests.

* `tests`: This specifies the location of the tests. In this case, the tests are in the root folder (and all sub-folders) of the pack.

* `version`: There is no `version` property for the tests pack. This prevents test packs from accidentally being published.
