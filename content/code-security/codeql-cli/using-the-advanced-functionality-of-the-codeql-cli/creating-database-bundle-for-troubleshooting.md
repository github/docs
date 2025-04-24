---
title: Creating CodeQL CLI database bundles
intro: 'You can create a database bundle with {% data variables.product.prodname_codeql %} troubleshooting information.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Code Security
  - Code scanning
  - CodeQL
---

> [!WARNING]
> {% data variables.product.prodname_codeql_cli %} database bundles contain a copy of the source code being analyzed by {% data variables.product.prodname_codeql %}, therefore we suggest sharing these bundles only with people who are authorized to access that source code.

## About creating {% data variables.product.prodname_codeql_cli %} database bundles

{% data reusables.code-scanning.codeql-cli-version-ghes %}

The {% data variables.product.prodname_codeql_cli %} database bundle command can be used to create a relocatable archive of a {% data variables.product.prodname_codeql %} database.

A copy of a database bundle can be used to share troubleshooting information with your team members or with {% data variables.contact.github_support %}.

The following {% data variables.product.prodname_codeql_cli %} command syntax is suggested when creating a database bundle for troubleshooting purposes:

> [!NOTE]
> This sample `database bundle` command requires {% data variables.product.prodname_codeql_cli %} version {% data variables.product.codeql_cli_version_min_version_create_bundle %} or higher.

```shell
codeql database bundle --output=codeql-debug-artifacts.zip --include-diagnostics --include-logs --include-results -- <dir>
```

For this command, `<dir>` must be the path to the directory where the {% data variables.product.prodname_codeql %} database was created.

The successful command execution creates a zip file called `codeql-debug-artifacts.zip` which contains {% data variables.product.prodname_codeql %} troubleshooting information. That file is the database bundle.

This command assumes that the `--log-dir` command line argument was not used for the `database create` and `database analyze` commands. When that command line argument is used, the log files created by those commands will not be included with the database bundle.

## Increasing the verbosity for `database create` and `database analyze`

If the `database create` and `database analyze` commands are not detailed enough for troubleshooting purposes, you can increase their verbosity.

Both commands support the `--verbosity` command line argument which can be set to `progress++` prior to creating a database bundle.
