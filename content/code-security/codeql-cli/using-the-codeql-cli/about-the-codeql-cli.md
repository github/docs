---
title: About the CodeQL CLI
shortTitle: About the CodeQL CLI
intro: 'You can use the {% data variables.product.prodname_codeql_cli %} to run CodeQL processes locally on software projects.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/codeql-cli/about-the-codeql-cli
---

{% data reusables.codeql-cli.codeql-site-migration-note %}

## About the {% data variables.product.prodname_codeql_cli %}

Software developers and security researchers can secure their code
using the {% data variables.product.prodname_codeql_cli %}.

The {% data variables.product.prodname_codeql_cli %} is a command-line tool used to run {% data variables.product.prodname_codeql %} processes locally on
open source software projects. You can use the {% data variables.product.prodname_codeql_cli %} to:

- Run {% data variables.product.prodname_codeql %} analyses using queries provided by {% data variables.product.prodname_dotcom %} engineers and the open
source community
- Create {% data variables.product.prodname_codeql %} databases to use in the {% data variables.product.prodname_codeql %} for Visual Studio Code
- Develop and test custom {% data variables.product.prodname_codeql %} queries to use in your own analyses

For information about using the {% data variables.product.prodname_codeql_cli %}, see
"[AUTOTITLE](/code-security/codeql-cli/using-the-codeql-cli/getting-started-with-the-codeql-cli)."

You can also use {% data variables.product.prodname_actions %} or Azure DevOps pipelines to scan code using the {% data variables.product.prodname_codeql_cli %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository)" or [Configure {% data variables.product.prodname_ghas_azdo %}](https://learn.microsoft.com/en-us/azure/devops/repos/security/configure-github-advanced-security-features) in Microsoft Learn.

## About the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_codeql %} license

**License notice:** If you don’t have a {% data variables.product.prodname_enterprise %} license then, by installing this product, you are agreeing to the [{% data variables.product.prodname_dotcom %} {% data variables.product.prodname_codeql %} Terms and Conditions](https://securitylab.github.com/tools/codeql/license).

{% data variables.product.prodname_dotcom %} {% data variables.product.prodname_codeql %} is licensed on a per-user basis. Under the license restrictions, you can use {% data variables.product.prodname_codeql %} to perform the following tasks:

- To perform academic research.
- To demonstrate the software.
- To test {% data variables.product.prodname_codeql %} queries that are released under an OSI-approved License to confirm that new versions of those queries continue to find the right vulnerabilities.

Where "OSI-approved License" means an Open Source Initiative (OSI)-approved open source software license.

If you are working with an Open Source Codebase (that is, a codebase that is released under an OSI-approved License) you can also use {% data variables.product.prodname_codeql %} for the following tasks:

- To perform analysis of the Open Source Codebase.
- If the Open Source Codebase is hosted and maintained on {% data variables.product.prodname_dotcom_the_website %}, to generate CodeQL databases for or during automated analysis, continuous integration, or continuous delivery.

{% data variables.product.prodname_codeql %} can’t be used for automated analysis, continuous integration or continuous delivery, whether as part of normal software engineering processes or otherwise, except in the express cases set forth herein. For these uses, contact the [sales team](https://enterprise.github.com/contact).

## {% data variables.product.prodname_codeql_cli %} commands

The {% data variables.product.prodname_codeql_cli %} includes commands to create and analyze {% data variables.product.prodname_codeql %} databases from the
command line. To run a command, use:

```
codeql [command] [subcommand]
```

To view the reference documentation for a command, add the `--help` flag, or see
"[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual)."
