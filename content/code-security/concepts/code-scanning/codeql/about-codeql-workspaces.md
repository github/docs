---
title: About CodeQL workspaces
shortTitle: CodeQL workspaces
intro: '{% data variables.product.prodname_codeql %} workspaces let you develop and maintain multiple related {% data variables.product.prodname_codeql %} packs together, resolving dependencies between them directly from source.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Code Security
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/codeql-cli/about-codeql-workspaces
  - /code-security/codeql-cli/codeql-cli-reference/about-codeql-workspaces
  - /code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/about-codeql-workspaces
contentType: concepts
---

## About {% data variables.product.prodname_codeql %} workspaces

{% data reusables.code-scanning.codeql-action-version-ghes %}

A {% data variables.product.prodname_codeql %} workspace is typically used to develop a set of library and query packs that depend on each other. When you use a {% data variables.product.prodname_codeql %} workspace, all the {% data variables.product.prodname_codeql %} packs in the workspace are available as _source dependencies_ for each other when you run a {% data variables.product.prodname_codeql %} command that resolves queries. This makes it easier to develop, maintain, and publish multiple, related {% data variables.product.prodname_codeql %} packs. For more information on {% data variables.product.prodname_codeql %} packs, see [AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs).

Workspaces are commonly stored in a single Git repository so that related packs can be developed and published together.

## Source dependencies

In a {% data variables.product.prodname_codeql %} workspace, all packs included in the workspace are treated as **source dependencies** of each other. This means they are resolved directly from the local file system rather than from the {% data variables.product.prodname_codeql %} package cache.

Because workspace packs resolve from source:

* Local changes in one pack are immediately visible to other packs in the workspace.
* Dependencies found in the workspace override versions in the package cache.
* Version constraints in `qlpack.yml` files are ignored for workspace dependencies, since the version is determined by the workspace content.

This behavior is particularly useful when developing multiple related packs at the same time. For example:

* A dependency has not yet been published and exists only locally.
* You are making coordinated changes across several packs and need them to resolve against each other during testing.

Outside of a workspace, dependencies are resolved from the package cache and must match the version constraints defined in `qlpack.yml`. Inside a workspace, resolution prioritizes local source content instead.

## {% data variables.product.prodname_codeql %} workspaces and query resolution

The workspace dependency model affects how packs are installed and published.

* During installation, dependencies found in the workspace are not downloaded into the package cache and are not written to the `codeql-pack.lock.yml` file.
* During publishing, dependencies provided by the workspace are bundled using their local source content rather than versions from the package cache.

For example, running `codeql pack install` in a pack directory within a workspace uses any dependencies found in the workspace instead of downloading them into the package cache or recording them in the `codeql-pack.lock.yml` file. See [AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/creating-and-working-with-codeql-packs#adding-and-installing-dependencies).

### Example

A {% data variables.product.prodname_codeql %} workspace is defined by a YAML file named `codeql-workspace.yml`. Consider the following `codeql-workspace.yml` file:

```yaml
provide:
  - "**/qlpack.yml"
```

And the following {% data variables.product.prodname_codeql %} library pack `qlpack.yml` file in the workspace:

```yaml
name: my-company/my-library
library: true
version: 1.0.0
```

And the following {% data variables.product.prodname_codeql %} query pack `qlpack.yml` file in the workspace:

```yaml
name: my-company/my-queries
version: 1.0.0
dependencies:
  my-company/my-library: "*"
  codeql/cpp-all: ~0.2.0
```

Notice that the `dependencies` block for the {% data variables.product.prodname_codeql %} query pack, `my-company/my-queries`, specifies `"*"` as the version of the library pack. Since the library pack is already defined as a source dependency in `codeql-workspace.yml`, the library pack’s content is always resolved from inside the workspace. Any version constraint you define will be ignored in this case. Using `"*"` for source dependencies makes it explicit that the version is inherited from the workspace.

When you execute `codeql pack install` from the query pack directory, an appropriate version of `codeql/cpp-all` is downloaded to the local package cache. Also, a `codeql-pack.lock.yml` file is created that contains the resolved version of `codeql/cpp-all`. The lock file won’t contain an entry for `my-company/my-library` since it is resolved from source dependencies. The `codeql-pack.lock.yml` file will look something like this:

```yaml
dependencies:
  codeql/cpp-all:
    version: 0.2.2
```

When you execute `codeql pack publish` from the query pack directory, the `codeql/cpp-all` dependency from the package cache and the `my-company/my-library` from the workspace are bundled with `my-company/my-queries` and published to the {% data variables.product.prodname_dotcom %} container registry.

## Example of a `codeql-workspace.yml` file

A {% data variables.product.prodname_codeql %} workspace is defined by a YAML file named `codeql-workspace.yml`. This file contains a `provide` block, and optionally `ignore` and `registries` blocks.

* The `provide` block contains a list of glob patterns that define the {% data variables.product.prodname_codeql %} packs that are available in the workspace.

* The `ignore` block contains a list of glob patterns that define {% data variables.product.prodname_codeql %} packs that are not available in the workspace.

* The `registries` block contains a list of GHES URLs and package patterns that control which container registry is used for publishing {% data variables.product.prodname_codeql %} packs. See [AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs#working-with-codeql-packs-on-ghes).

Each entry in the `provide` or `ignore` section must map to the location of a `qlpack.yml` file. All glob patterns are defined relative to the directory that contains the workspace file. For a list of patterns accepted in this file, see [@actions/glob](https://github.com/actions/toolkit/tree/main/packages/glob#patterns).

For example, the following `codeql-workspace.yml` file defines a workspace that contains all the {% data variables.product.prodname_codeql %} packs recursively found in the `codeql-packs` directory, except for the packs in the `experimental` directory. The `registries` block specifies that `codeql/\*` packs should be downloaded from `https://ghcr.io/v2/`, which is {% data variables.product.prodname_dotcom %}’s default container registry. All other packs should be downloaded from and published to the registry at `GHE_HOSTNAME`.

```yaml
provide:
  - "*/codeql-packs/**/qlpack.yml"
ignore:
  - "*/codeql-packs/**/experimental/**/qlpack.yml"

registries:
 - packages: 'codeql/*'
   url: https://ghcr.io/v2/

 - packages: '*'
   url: https://containers.GHE_HOSTNAME/v2/
```

You can list the packs included in a workspace by running `codeql pack ls` in the workspace directory.

## Using `${workspace}` as a version range in `qlpack.yml` files

{% data variables.product.prodname_codeql %} packs in a workspace can use the special `${workspace}`, `~${workspace}`, and `^${workspace}` version range placeholders. These placeholders indicate that this pack depends on the version of the specified pack that is currently in the workspace. This placeholder is typically used for dependencies inside of library packs to ensure that when they are published, the dependencies in their `qlpack.yml` file reflect the state of the workspace when they were published.

### Example

Consider the following two library packs in the same workspace:

```yaml
name: my-company/my-library
library: true
version: 1.2.3
dependencies:
  my-company/my-library2: ${workspace}
```

```yaml
name: my-company/my-library2
library: true
version: 4.5.6
```

When `my-company/my-library` is published to the {% data variables.product.prodname_dotcom %} container registry, the version of the `my-company/my-library2` dependency in the published `qlpack.yml` file will be written as `4.5.6`.

Similarly, if the dependency is `my-company/my-library2: ^${workspace}` in the source pack, and then the pack is published, the version of the `my-company/my-library2` dependency in the published `qlpack.yml` file will be written as `^4.5.6`, indicating that versions `>= 4.5.6` and `< 5.0.0` are all compatible with this library pack.

If the dependency is `my-company/my-library2: ~${workspace}` in the source pack, and then the pack is published, the version of the `my-company/my-library2` dependency in the published `qlpack.yml` file will be written as `~4.5.6`, indicating that versions `>= 4.5.6` and `< 4.6.0` are all compatible with this library pack.
