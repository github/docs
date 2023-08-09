---
title: Creating and working with CodeQL packs
intro: 'You can use {% data variables.product.prodname_codeql %} packs to create, share, depend on, and run {% data variables.product.prodname_codeql %} queries and libraries.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  feature: codeql-packs
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/codeql-cli/creating-and-working-with-codeql-packs
  - /code-security/codeql-cli/using-the-codeql-cli/creating-and-working-with-codeql-packs
---

{% data reusables.codeql-cli.codeql-site-migration-note %}

{% data reusables.codeql-cli.beta-note-package-management %}

## About {% data variables.product.prodname_codeql %} packs and the {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.codeql-cli-version-ghes %}

With {% data variables.product.prodname_codeql %} packs and the package management commands in the {% data variables.product.prodname_codeql_cli %}, you can publish your custom queries and integrate them into your codebase analysis.

There are two types of {% data variables.product.prodname_codeql %} packs: query packs and library packs.

- Query packs are designed to be run. When a query pack is published, the bundle includes all the transitive dependencies and {% ifversion query-pack-compatibility %}pre-compiled representations of each query, in addition to the query sources{% else %}a compilation cache{% endif %}. This ensures consistent and efficient execution of the queries in the pack.
  
- Library packs are designed to be used by query packs (or other library packs) and do not contain queries themselves. The libraries are not compiled {% ifversion query-pack-compatibility %}separately{% else %}and there is no compilation cache included when the pack is published{% endif %}.

You can use the `pack` command in the {% data variables.product.prodname_codeql_cli %} to create {% data variables.product.prodname_codeql %} packs, add dependencies to packs, and install or update dependencies. You can also publish and download {% data variables.product.prodname_codeql %} packs using the `pack` command. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs)."

{% ifversion query-pack-compatibility %}
For more information about compatibility between published query packs and different {% data variables.product.prodname_codeql %} releases, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs#about-codeql-pack-compatibility)."
{% endif %}

## Creating a {% data variables.product.prodname_codeql %} pack

You can create a {% data variables.product.prodname_codeql %} pack by running the following command from the checkout root of your project:

```shell
codeql pack init <scope>/<pack>
```

You must specify:

- `<scope>`: the name of the {% data variables.product.prodname_dotcom %} organization or user account that you will publish to.

- `<pack>`: the name for the pack that you are creating.

The `codeql pack init` command creates the directory structure and configuration files for a {% data variables.product.prodname_codeql %} pack. By default, the command creates a query pack. If you want to create a library pack, you must edit the `qlpack.yml` file to explicitly declare the file as a library pack by including the `library:true` property.

## Modifying an existing legacy QL pack to create a {% data variables.product.prodname_codeql %} pack

If you already have a `qlpack.yml` file, you can edit it manually to convert it into a {% data variables.product.prodname_codeql %} pack.

1. Edit the `name` property so that it matches the format `<scope>/<name>`, where `<scope>` is the name of the {% data variables.product.prodname_dotcom %} organization or user account that you will publish to.

1. In the `qlpack.yml` file, include a `version` property with a semver identifier, as well as an optional `dependencies` block.

1. Migrate the list of dependencies in `libraryPathDependencies` to the `dependencies` block. Specify the version range for each dependency. If the range is unimportant, or you are unsure of compatibility, you can specify `"\*"`, which indicates that any version is acceptable and will default to the latest version when you run `codeql pack install`.

For more information about the properties, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs)."

## Adding and installing dependencies to a {% data variables.product.prodname_codeql %} pack

You can add dependencies on {% data variables.product.prodname_codeql %} packs using the command `codeql pack add`. You must specify the scope, name, and (optionally) a compatible version range.

```shell
codeql pack add <scope>/<name>@x.x.x <scope>/<other-name>
```

If you don’t specify a version range, the latest version will be added. Otherwise, the latest version that satisfies the requested range will be added.

This command updates the `qlpack.yml` file with the requested dependencies and downloads them into the package cache. Please note that this command will reformat the file and remove all comments.

You can also manually edit the `qlpack.yml` file to include dependencies and install the dependencies with the command:

```shell
codeql pack install
```

This command downloads all dependencies to the shared cache on the local disk.

{% note %}

**Notes:**

- Running the `codeql pack add` and `codeql pack install` commands will generate or update the `codeql-pack.lock.yml` file. This file should be checked-in to version control. The `codeql-pack.lock.yml` file contains the precise version numbers used by the pack. For more information, see "[About codeql-pack.lock.yml files](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs##about-codeql-packlockyml-files)."

- By default `codeql pack install` will install dependencies from the {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %}. You can install dependencies from a {% data variables.product.prodname_ghe_server %} {% data variables.product.prodname_container_registry %} by creating a `qlconfig.yml` file. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs)."

{% endnote %}

{% ifversion query-pack-compatibility %}

## Customizing a downloaded {% data variables.product.prodname_codeql %} pack

The recommended way to experiment with changes to a pack is to clone the repository containing its source code.

If no source repository is available and you need to base modifications on a pack downloaded from the {% data variables.product.prodname_container_registry %}, be aware that these packs are not intended to be modified or customized after downloading, and their format may change in the future without much notice.  We recommend taking the following steps after downloading a pack if you need to modify the content:

- Change the pack _name_ in `qlpack.yml` so you avoid confusion with results from the unmodified pack.

- Remove all files named `*.qlx` anywhere in the unpacked directory structure. These files contain precompiled versions of the queries, and in some situations {% data variables.product.prodname_codeql %} will use them in preference to the QL source you have modified.

{% endif %}
