---
title: Troubleshooting code scanning in your CI system
shortTitle: Troubleshooting in your CI
intro: 'If you''re having problems with the {{ site.data.variables.product.prodname_codeql_runner }}, you can troubleshoot by using these tips.'
product: '{{ site.data.reusables.gated-features.code-scanning }}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.code-scanning.beta }}
{{ site.data.reusables.code-scanning.enterprise-enable-code-scanning }}

### The `init` command takes too long

Before the {{ site.data.variables.product.prodname_codeql_runner }} can build and analyze code, it needs access to the {{ site.data.variables.product.prodname_codeql }} bundle, which contains the {{ site.data.variables.product.prodname_codeql }} CLI and the {{ site.data.variables.product.prodname_codeql }} libraries.

When you use the {{ site.data.variables.product.prodname_codeql_runner }} for the first time on your machine, the `init` command downloads the {{ site.data.variables.product.prodname_codeql }} bundle to your machine. This download can take a few minutes.
The {{ site.data.variables.product.prodname_codeql }} bundle is cached between runs, so if you use the {{ site.data.variables.product.prodname_codeql_runner }} again on the same machine, it won't download the {{ site.data.variables.product.prodname_codeql }} bundle again.

To avoid this automatic download, you can manually download the {{ site.data.variables.product.prodname_codeql }} bundle to your machine and specify the path using the `--codeql-path` flag of the `init` command.

### No code found during the build

If the `analyze` command for the {{ site.data.variables.product.prodname_codeql_runner }} fails with an error `No source code was seen during the build`, this indicates that {{ site.data.variables.product.prodname_codeql }} was unable to trace your code. Several reasons can explain such a failure.

1. Automatic language detection identified a supported language, but there is no analyzable code of that language in the repository. A typical example is when our language detection service finds a file associated with a particular programming language like a `.h`, or `.gyp` file, but no corresponding executable code is present in the repository. To solve the problem, you can manually define the languages you want to analyze by using the `--languages` flag of the `init` command. For more information, see "[Configuring {{ site.data.variables.product.prodname_code_scanning }} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system)."

1. You're analyzing a compiled language without using the `autobuild` command and you run the build steps yourself after the `init` step. For the build to work, you must set up the environment such that the {{ site.data.variables.product.prodname_codeql_runner }} can trace the code. The `init` command generates instructions for how to export the required environment variables, so you can copy and run the script. For more information, see "[Running {{ site.data.variables.product.prodname_code_scanning }} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system#compiled-language-example)."

1. The code is built in a container or on a separate machine. If you use a containerized build or if you outsource the build to another machine, make sure to run the {{ site.data.variables.product.prodname_codeql_runner }} in the container or on the machine where your build task takes place.
