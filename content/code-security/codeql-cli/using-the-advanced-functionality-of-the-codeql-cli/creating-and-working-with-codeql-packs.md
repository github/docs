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

## About {% data variables.product.prodname_codeql %} packs and the {% data variables.product.prodname_codeql_cli %}

{% data reusables.code-scanning.codeql-cli-version-ghes %}

{% data variables.product.prodname_codeql %} packs are used to create, share, depend on, and run {% data variables.product.prodname_codeql %} queries and libraries. {% data variables.product.prodname_codeql %} packs contain queries, library files, query suites, and metadata. With {% data variables.product.prodname_codeql %} packs and the package management commands in the {% data variables.product.prodname_codeql_cli %}, you can publish your custom queries and integrate them into your codebase analysis.

There are{% ifversion codeql-model-packs %} three{% else %} two{% endif %} types of {% data variables.product.prodname_codeql %} packs: {% ifversion codeql-model-packs %}query packs, library packs, and model packs{% else %} query packs and library packs{% endif %}.

* Query packs are designed to be run. When a query pack is published, the bundle includes all the transitive dependencies and {% ifversion query-pack-compatibility %}pre-compiled representations of each query, in addition to the query sources{% else %}a compilation cache{% endif %}. This ensures consistent and efficient execution of the queries in the pack.

* Library packs are designed to be used by query packs (or other library packs) and do not contain queries themselves. The libraries are not compiled {% ifversion query-pack-compatibility %}separately{% else %}and there is no compilation cache included when the pack is published{% endif %}.{% ifversion codeql-model-packs %}

* Model packs can be used to expand {% data variables.product.prodname_code_scanning %} analysis to include dependencies that are not supported by default. Model packs are currently in beta and subject to change. During the beta, model packs are available for {% data variables.code-scanning.codeql_model_packs_support %} analysis. For more information about creating your own model packs, see "[Creating a {% data variables.product.prodname_codeql %} model pack](#creating-a-codeql-model-pack)."{% endif %}

You can use the `pack` command in the {% data variables.product.prodname_codeql_cli %} to create {% data variables.product.prodname_codeql %} packs, add dependencies to packs, and install or update dependencies. You can also publish and download {% data variables.product.prodname_codeql %} packs using the `pack` command. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs)."

{% ifversion query-pack-compatibility %}
For more information about compatibility between published query packs and different {% data variables.product.prodname_codeql %} releases, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs#about-codeql-pack-compatibility)."
{% endif %}

The standard {% data variables.product.prodname_codeql %} packages for all supported languages are published in the [{% data variables.product.prodname_container_registry %}](https://github.com/orgs/codeql/packages). The [{% data variables.product.prodname_codeql %} repository](https://github.com/github/codeql) contains source files for the standard {% data variables.product.prodname_codeql %} packs for all supported languages. The core query packs, which are included in the {% data variables.product.prodname_codeql %} CLI bundle, but you can otherwise download, are:

  * `codeql/cpp-queries`
  * `codeql/csharp-queries`
  * `codeql/go-queries`
  * `codeql/java-queries`
  * `codeql/javascript-queries`
  * `codeql/python-queries`
  * `codeql/ruby-queries`

## {% data variables.product.prodname_codeql %} pack structure

A {% data variables.product.prodname_codeql %} pack must contain a file called `qlpack.yml` in its root directory. In the `qlpack.yml` file, the `name:` field must have a value that follows the format of `<scope>/<pack>`, where `<scope>` is the {% data variables.product.prodname_dotcom %} organization or user account that the pack will be published to and `<pack>` is the name of the pack. Additionally, query packs and library packs with {% data variables.product.prodname_codeql %} tests contain a `codeql-pack.lock.yml` file that contains the resolved dependencies of the pack. This file is generated during a call to the `codeql pack install` command, is not meant to be edited by hand, and should be added to your version control system.

The other files and directories within the pack should be logically organized. For example, typically:

* Queries are organized into directories for specific categories.

* Queries for specific products, libraries, and frameworks are organized into
their own top-level directories.

## Creating a {% data variables.product.prodname_codeql %} pack

You can create a {% data variables.product.prodname_codeql %} pack by running the following command from the checkout root of your project:

```shell
codeql pack init <scope>/<pack>
```

You must specify:

* `<scope>`: the name of the {% data variables.product.prodname_dotcom %} organization or user account that you will publish to.

* `<pack>`: the name for the pack that you are creating.

The `codeql pack init` command creates the directory structure and configuration files for a {% data variables.product.prodname_codeql %} pack. By default, the command creates a query pack. If you want to create a library pack, you must edit the `qlpack.yml` file to explicitly declare the file as a library pack by including the `library:true` property.

{% ifversion codeql-model-packs %}

## Creating a {% data variables.product.prodname_codeql %} model pack

{% data reusables.code-scanning.beta-model-packs %}

Model packs can be used to expand {% data variables.product.prodname_code_scanning %} analysis to recognize libraries and frameworks that are not supported by default. Model packs use data extensions, which are implemented as YAML and describe how to add data for new dependencies. When a model pack is specified, the data extensions in that pack will be added to the {% data variables.product.prodname_code_scanning %} analysis automatically. For more information about {% data variables.product.prodname_codeql %} model packs and data extensions, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/using-the-codeql-model-editor)."

A model pack is a {% data variables.product.prodname_codeql %} pack with the following characteristics in the `qlpack.yml` file:

* It defines `library: true`.
* It has no dependencies.
* It has one or more `extensionTargets`.
* It has a `dataExtensions` property that points to one or more data extension files.

A model pack will inject its specified data extensions into each query pack that is named in `extensionTargets`, if it falls within the specified version range. For example:

```yaml
name: my-repo/my-java-model-pack
version: 1.2.3
extensionTargets:
  codeql/java-all: ~1.2.3
  codeql/util: ~4.5.6
dataExtensions:
  - models/**/*.yml
```

In this example, the model pack will inject all the data extensions in `models/**/` into a `codeql/java-all` query pack that is at a version from `1.2.3` up to and including `1.3.0`, and a `codeql/util` query pack that is at a version from `4.5.6` up to and including `4.6.0`. For more information, see "[Using semantic versioning](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)" in the npm documentation and the "[Semantic versioning specification](https://semver.org/)."

Once you've created a model pack, you can publish it in the same way as other {% data variables.product.prodname_codeql %} packs. For more information, see "[AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs)." You can then use published model packs in a {% data variables.product.prodname_code_scanning %} analysis with the `--model-packs` option. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs#using-model-packs-to-analyze-calls-to-custom-dependencies)."

{% endif %}

## Adding and installing dependencies on a {% data variables.product.prodname_codeql %} pack

{% note %}

**Note:** This is only supported for {% data variables.product.prodname_codeql %} query and library packs.

{% endnote %}

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

* Running the `codeql pack add` and `codeql pack install` commands will generate or update the `codeql-pack.lock.yml` file. This file should be checked-in to version control. The `codeql-pack.lock.yml` file contains the precise version numbers used by the pack. For more information, see "[About codeql-pack.lock.yml files](/code-security/codeql-cli/getting-started-with-the-codeql-cli/customizing-analysis-with-codeql-packs##about-codeql-packlockyml-files)."

* By default `codeql pack install` will install dependencies from the {% data variables.product.prodname_container_registry %} on {% data variables.product.prodname_dotcom_the_website %}. You can install dependencies from a {% data variables.product.prodname_ghe_server %} {% data variables.product.prodname_container_registry %} by creating a `qlconfig.yml` file. For more information, see "[AUTOTITLE](/enterprise-server@latest/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/publishing-and-using-codeql-packs)" in the {% data variables.product.prodname_ghe_server %} documentation.

{% endnote %}

{% ifversion query-pack-compatibility %}

## Customizing a downloaded {% data variables.product.prodname_codeql %} pack

The recommended way to experiment with changes to a pack is to clone the repository containing its source code.

If no source repository is available and you need to base modifications on a pack downloaded from the {% data variables.product.prodname_container_registry %}, be aware that these packs are not intended to be modified or customized after downloading, and their format may change in the future without much notice.  We recommend taking the following steps after downloading a pack if you need to modify the content:

* Change the pack _name_ in `qlpack.yml` so you avoid confusion with results from the unmodified pack.

* Remove all files named `*.qlx` anywhere in the unpacked directory structure. These files contain precompiled versions of the queries, and in some situations {% data variables.product.prodname_codeql %} will use them in preference to the QL source you have modified.

{% endif %}
