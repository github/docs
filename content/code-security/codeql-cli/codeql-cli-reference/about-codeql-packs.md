---
title: About CodeQL packs
intro: 'You can use {% data variables.product.prodname_codeql %} packs to run {% data variables.product.prodname_codeql %} queries maintained by other people, or to share {% data variables.product.prodname_codeql %} queries that you''ve developed.'
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

## About {% data variables.product.prodname_codeql %} packs

{% data reusables.code-scanning.codeql-cli-version-ghes %}

{% data variables.product.prodname_codeql %} packs are used to create, share, depend on, and run {% data variables.product.prodname_codeql %} queries and libraries. You can publish your own {% data variables.product.prodname_codeql %} packs and download packs created by others. {% data variables.product.prodname_codeql %} packs contain queries, library files, query suites, and metadata.

There are two types of {% data variables.product.prodname_codeql %} packs: query packs and library packs.

- Query packs are designed to be run. When a query pack is published, the bundle includes all the transitive dependencies and {% ifversion query-pack-compatibility %}pre-compiled representations of each query, in addition to the query sources{% else %}a compilation cache{% endif %}. This ensures consistent and efficient execution of the queries in the pack.

- Library packs are designed to be used by query packs (or other library packs) and do not contain queries themselves. The libraries are not compiled {% ifversion query-pack-compatibility %}separately{% else %}and there is no compilation cache included when the pack is published{% endif %}.

You can use the package management commands in the {% data variables.product.prodname_codeql_cli %} to create {% data variables.product.prodname_codeql %} packs, add dependencies to packs, and install or update dependencies. For more information, see "[Creating and working with {% data variables.product.prodname_codeql %} packs](/code-security/codeql-cli/using-the-codeql-cli/creating-and-working-with-codeql-packs#creating-and-working-with-codeql-packs)." You can also publish and download {% data variables.product.prodname_codeql %} packs using the {% data variables.product.prodname_codeql_cli %}. For more information, see "[Publishing and using {% data variables.product.prodname_codeql %} packs](/code-security/codeql-cli/using-the-codeql-cli/publishing-and-using-codeql-packs)."

The standard {% data variables.product.prodname_codeql %} packages for all supported languages are published in the [{% data variables.product.prodname_container_registry %}](https://github.com/orgs/codeql/packages).
The [{% data variables.product.prodname_codeql %} repository](https://github.com/github/codeql) contains source files for the standard {% data variables.product.prodname_codeql %} packs for all supported languages.

## {% data variables.product.prodname_codeql %} pack structure

A {% data variables.product.prodname_codeql %} pack must contain a file called `qlpack.yml` in its root directory. In the `qlpack.yml` file, the `name:` field must have a value that follows the format of `<scope>/<pack>`, where `<scope>` is the {% data variables.product.prodname_dotcom %} organization or user account that the pack will be published to and `<pack>` is the name of the pack. Additionally, query packs and library packs with {% data variables.product.prodname_codeql %} tests contain a `codeql-pack.lock.yml` file that contains the resolved dependencies of the pack. This file is generated during a call to the `codeql pack install` command, is not meant to be edited by hand, and should be added to your version control system.

The other files and directories within the pack should be logically organized. For example, typically:

* Queries are organized into directories for specific categories.

* Queries for specific products, libraries, and frameworks are organized into
their own top-level directories.

{% ifversion query-pack-compatibility %}
### About published packs

When a pack is published for use in analyses, the `codeql pack create` or `codeql pack publish` command verifies that the content is complete and also adds some additional pieces of content to it:
 
* For query packs, a copy of each of the library packs it depends on, in the precise versions it has been developed with. Users of the query pack won't need to download these library packs separately.

* For query packs, precompiled representations of each of the queries. These are faster to execute than it would be to compile the QL source for the query at each analysis.

Most of this data is located in a directory named `.codeql` in the published pack, but precompiled queries are in files with a `.qlx` suffix next to the `.ql` source for each query. When analyzing a database with a query from a published pack, {% data variables.product.prodname_codeql %} will load these files instead of the `.ql` source. If you need to modify the content of a _published_ pack, be sure to remove all of the `.qlx` files, since they may prevent modifications in the `.ql` files from taking effect.
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

- Required by all packs. 
- Defines the scope of the pack, where the {% data variables.product.prodname_codeql %} pack is published, and the name of the pack defined using alphanumeric characters and hyphens. It must be unique as {% data variables.product.prodname_codeql %} cannot differentiate between {% data variables.product.prodname_codeql %} packs with identical names. Use the pack name to specify queries to run using `database analyze` and to define dependencies between {% data variables.product.prodname_codeql %} packs (see examples below). For example:
  ```yaml
  name: octo-org/security-queries
  ```

#### `version`

- Required by all packs that are published.
- Defines a semantic version for this {% data variables.product.prodname_codeql %} pack that must adhere to the [SemVer v2.0.0 specification](https://semver.org/spec/v2.0.0.html). For example:
  ```yaml
  version: 0.0.0
  ```

#### `dependencies`

- Required by packs that define {% data variables.product.prodname_codeql %} package dependencies on other packs.
- Defines a map from pack references to the semantic version range that is compatible with this pack. Supported for {% data variables.product.prodname_codeql_cli %} versions v2.6.0 and later. For example:
  ```yaml
  dependencies:
    codeql/cpp-all: ^0.0.2`

#### `defaultSuiteFile`

- Required by packs that export a set of default queries to run.
- Defines the path to a query suite file relative to the package root, containing all of the queries that are run by default when this pack is passed to the `codeql database analyze` command. Supported from CLI version v2.6.0 and onwards. Only one of `defaultSuiteFile` or `defaultSuite` can be defined. For example:
  ```yaml
  defaultSuiteFile: cpp-code-scanning.qls
  ```

#### `defaultSuite`

- Required by packs that export a set of default queries to run.
- Defines an inlined query suite containing all of the queries that are run by default when this pack is passed to the `codeql database analyze` command. Supported from CLI version v2.6.0 and onwards. Only one of `defaultSuiteFile` or `defaultSuite` can be defined. For example:
  ```yaml
  defaultSuite:
    queries: .
    exclude:
      precision: medium
  ```    
  
#### `library`

- Required by library packs.
- Defines a boolean value that indicates whether or not this pack is a library pack. Library packs do not contain queries and are not compiled. Query packs can ignore this field or explicitly set it to `false`. For example:
  ```yaml
  library: true
  ```

#### `suites`

- Optional for packs that define query suites.
- Defines the path to a directory in the pack that contains the query suites you want to make known to the {% data variables.product.prodname_codeql_cli %}, defined relative to the pack directory. {% data variables.product.prodname_codeql %} pack users can run "well-known" suites stored in this directory by specifying the pack name, without providing their full path. This is not supported for {% data variables.product.prodname_codeql %} packs downloaded from the Container registry. For more information about query suites, see "[Creating {% data variables.product.prodname_codeql %} query suites](/code-security/codeql-cli/using-the-codeql-cli/creating-codeql-query-suites)." For example:
  ```yaml
  suites: octo-org-query-suites
  ```

#### `tests`
- Optional for packs containing {% data variables.product.prodname_codeql %} tests. Ignored for packs without tests.
- Defines the path to a directory within the pack that contains tests, defined relative to the pack directory. Use `.` to specify the whole pack. Any queries in this directory are run as tests when `test run` is run with the `--strict-test-discovery` option. These queries are ignored by query suite definitions that use `queries` or `qlpack` instructions to ask for all queries in a particular pack. If this property is missing, then `.` is assumed. For example:
  ```yaml
  tests: .
  ```

#### `extractor`
- Required by all packs containing {% data variables.product.prodname_codeql %} tests.
- Defines the {% data variables.product.prodname_codeql %} language extractor to use when running the {% data variables.product.prodname_codeql %} tests in the pack. For more information about testing queries, see "[Testing custom queries](/code-security/codeql-cli/using-the-codeql-cli/testing-custom-queries)." For example:
  ```yaml
  extractor: javascript
  ```

#### `authors`
 - Optional.
 - Defines metadata that will be displayed on the packaging search page in the packages section of the account that the {% data variables.product.prodname_codeql %} pack is published to. For example:
  ```yaml
  authors: author1@github.com,author2@github.com 
  ```

#### `license`
- Optional. 
- Defines metadata that will be displayed on the packaging search page in the packages section of the account that the {% data variables.product.prodname_codeql %} pack is published to. For a list of allowed licenses, see [SPDX License List](https://spdx.org/licenses/) in the SPDX Specification. For example:
  ```yaml
  license: MIT
  ```

#### `description`
- Optional.
- Defines metadata that will be displayed on the packaging search page in the packages section of the account that the {% data variables.product.prodname_codeql %} pack is published to. For example:
  ```yaml
  description: Human-readable description of the contents of the {% data variables.product.prodname_codeql %} pack.
  ```

#### `libraryPathDependencies`
- Optional, deprecated. Use the `dependencies` property instead. 
- Previously used to define the names of any {% data variables.product.prodname_codeql %} packs that this {% data variables.product.prodname_codeql %} pack depends on, as an array. This gives the pack access to any libraries, database schema, and query suites defined in the dependency. For example:
  ```yaml
  libraryPathDependencies: codeql/javascript-all 
  ```

#### `dbscheme`
- Required by core language packs only.
- Defines the path to the [database schema](https://codeql.github.com/docs/codeql-overview/codeql-glossary/#codeql-database-schema) for all libraries and queries written for this {% data variables.product.prodname_codeql %} language (see example below). For example:
  ```yaml
  dbscheme: semmlecode.python.dbscheme
  ```
#### `upgrades`
- Required by core language packs only.
- Defines the path to a directory within the pack that contains database upgrade scripts, defined relative to the pack directory. Database upgrades are used internally to ensure that a database created with a different version of the {% data variables.product.prodname_codeql_cli %} is compatible with the current version of the CLI. For example:
  ```yaml
  upgrades: .
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

The `codeql/cpp-all` dependency is locked to version 0.1.4. The `my-user/my-lib` dependency is locked to version 0.2.4. The `my-user/transitive-dependency`, which is a transitive dependency and is not specified in the `qlpack.yml` file, is locked to version 1.2.4. The `other-dependency/from-source` is absent from the lock file since it is resolved from source. This dependency must be available in the same {% data variables.product.prodname_codeql %} workspace as the pack. For more information about {% data variables.product.prodname_codeql %} workspaces and resolving dependencies from source, see "[About {% data variables.product.prodname_codeql %} Workspaces](/code-security/codeql-cli/codeql-cli-reference/about-codeql-workspaces)."

In most cases, the `codeql-pack.lock.yml` file is only relevant for query packs since library packs are non-executable and usually do not need their transitive dependencies to be fixed. The exception to this is for library packs that contain tests. In this case, the `codeql-pack.lock.yml` file is used to ensure that the tests are always run with the same versions of dependencies to avoid spurious failures when there are mismatched dependencies.

## Examples of custom {% data variables.product.prodname_codeql %} packs

When you write custom queries or tests, you should save them in custom {% data variables.product.prodname_codeql %} packs. For simplicity, try to organize each pack logically. For more information, see "[{% data variables.product.prodname_codeql %} pack structure](#codeql-pack-structure)." Save files for queries and tests in separate packs and, where possible, organize custom packs into specific folders for each target language. This is particuarly useful if you intend to publish your {% data variables.product.prodname_codeql %} packs so they can be shared with others or used in code scanning. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

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
suites: my-custom-suites
```

where `codeql/cpp-all` is the name of the {% data variables.product.prodname_codeql %} pack for C/C++ analysis included in the {% data variables.product.prodname_codeql %} repository. The version range `^0.1.2` indicates that this pack is compatible with all versions of `codeql/cpp-all` that are greater than or equal to `0.1.2` and less than `0.2.0`. `my-github-user/my-custom-libraries` is the name of a {% data variables.product.prodname_codeql %} pack containing custom {% data variables.product.prodname_codeql %} libraries for C++. Any {% data variables.product.prodname_codeql %} library file (a file with a `.qll` extension) defined in this pack will be available to queries in the `my-github-user/my-custom-queries` pack.

The `suites` property indicates a directory where "well-known" query suites can be found. These suites can be used on the command line by referring to their name only, rather than their full path. For more information about query suites, see "[Creating {% data variables.product.prodname_codeql %} query suites](/code-security/codeql-cli/using-the-codeql-cli/creating-codeql-query-suites)."

### {% data variables.product.prodname_codeql %} packs for custom tests

For custom {% data variables.product.prodname_codeql %} packs containing test files, you also need to include an
`extractor` property so that the `test run` command knows how to create test
databases. You may also wish to specify the `tests` property.

{% data reusables.codeql-cli.test-qlpack %}

For more information about running tests, see "[Testing custom queries](/code-security/codeql-cli/using-the-codeql-cli/testing-custom-queries)."

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

* `dbscheme` and `upgrades`: These properties are internal to the {% data variables.product.prodname_codeql_cli %} and should only be defined in the core QL pack for a language.

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

* `dependencies`: This query pack depends on `codeql/cpp-all` and `codeql/suite-helpers`. Since these dependencies are resolved from source, it does not matter what version of the {% data variables.product.prodname_codeql %} pack they are compatible with. For more information about resolving dependencies from source, see "[Source Dependencies](/code-security/codeql-cli/codeql-cli-reference/about-codeql-workspaces#source-dependencies)."

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

