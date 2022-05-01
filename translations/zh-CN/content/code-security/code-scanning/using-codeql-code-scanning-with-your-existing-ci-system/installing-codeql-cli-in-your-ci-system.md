---
title: Installing CodeQL CLI in your CI system
shortTitle: Install CodeQL CLI
intro: 'You can install the {% data variables.product.prodname_codeql_cli %} and use it to perform {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in a third-party continuous integration system.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## About using the {% data variables.product.prodname_codeql_cli %} for {% data variables.product.prodname_code_scanning %}

You can use the {% data variables.product.prodname_codeql_cli %} to run {% data variables.product.prodname_code_scanning %} on code that you're processing in a third-party continuous integration (CI) system. {% data reusables.code-scanning.about-code-scanning %} For information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)." For recommended specifications (RAM, CPU cores, and disk) for running {% data variables.product.prodname_codeql %} analysis, see "[Recommended hardware resources for running {% data variables.product.prodname_codeql %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql)."

{% data reusables.code-scanning.what-is-codeql-cli %}

Alternatively, you can use {% data variables.product.prodname_actions %} to run {% data variables.product.prodname_code_scanning %} within {% data variables.product.product_name %}. For information about {% data variables.product.prodname_code_scanning %} using actions, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)." For an overview of the options for CI systems, see "[About CodeQL {% data variables.product.prodname_code_scanning %} in your CI system](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)".

{% data reusables.code-scanning.licensing-note %}

## Downloading the {% data variables.product.prodname_codeql_cli %}

You should download the {% data variables.product.prodname_codeql %} bundle from https://github.com/github/codeql-action/releases. The bundle contains:

- {% data variables.product.prodname_codeql_cli %} product
- A compatible version of the queries and libraries from https://github.com/github/codeql
- Precompiled versions of all the queries included in the bundle

{% ifversion ghes %}

{% note %}
{% ifversion ghes = 3.1 %}For {% data variables.product.prodname_ghe_server %} 3.1, we recommend {% data variables.product.prodname_codeql_cli %} version 2.6.3.{% endif %}
{% ifversion ghes = 3.2 %}For {% data variables.product.prodname_ghe_server %} 3.2, we recommend {% data variables.product.prodname_codeql_cli %} version 2.6.3.{% endif %}
{% ifversion ghes > 3.2 %}For {% data variables.product.prodname_ghe_server %} 3.3 and greater, we recommend {% data variables.product.prodname_codeql_cli %} version 2.7.6 or greater.{% endif %}
{% endnote %}

{% endif %}

You should always use the {% data variables.product.prodname_codeql %} bundle as this ensures compatibility and also gives much better performance than a separate download of the {% data variables.product.prodname_codeql_cli %} and checkout of the {% data variables.product.prodname_codeql %} queries. If you will only be running the CLI on one specific platform, download the appropriate `codeql-bundle-PLATFORM.tar.gz` file. Alternatively, you can download `codeql-bundle.tar.gz`, which contains the CLI for all supported platforms.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

## Setting up the {% data variables.product.prodname_codeql_cli %} in your CI system

You need to make the full contents of the {% data variables.product.prodname_codeql_cli %} bundle available to every CI server that you want to run CodeQL {% data variables.product.prodname_code_scanning %} analysis on. For example, you might configure each server to copy the bundle from a central, internal location and extract it. Alternatively, you could use the REST API to get the bundle directly from {% data variables.product.prodname_dotcom %}, ensuring that you benefit from the latest improvements to queries. Updates to the {% data variables.product.prodname_codeql_cli %} are released every 2-3 weeks. For example:

```shell
$ wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ./codeql-bundle-linux64.tar.gz
```

After you extract the {% data variables.product.prodname_codeql_cli %} bundle, you can run the `codeql` executable on the server:

- By executing `/<extraction-root>/codeql/codeql`, where `<extraction-root>` is the folder where you extracted the {% data variables.product.prodname_codeql_cli %} bundle.
- By adding `/<extraction-root>/codeql` to your `PATH`, so that you can run the executable as just `codeql`.

## Testing the {% data variables.product.prodname_codeql_cli %} set up

After you extract the {% data variables.product.prodname_codeql_cli %} bundle, you can run the following command to verify that the CLI is correctly set up to create and analyze databases.

- `codeql resolve qlpacks` if `/<extraction-root>/codeql` is on the `PATH`.
- `/<extraction-root>/codeql/codeql resolve qlpacks` otherwise.

**Extract from successful output:**
```
codeql/cpp-all (/<extraction-root>/qlpacks/codeql/cpp-all/<version>)
codeql/cpp-examples (/<extraction-root>/qlpacks/codeql/cpp-examples/<version>)
codeql/cpp-queries (/<extraction-root>/qlpacks/codeql/cpp-queries/<version>)
codeql/csharp-all (/<extraction-root>/qlpacks/codeql/charp-all/<version>)
codeql/csharp-examples (/<extraction-root>/qlpacks/codeql/charp-examples/<version>)
codeql/csharp-queries (/<extraction-root>/qlpacks/codeql/charp-queries/<version>)
codeql/java-all (/<extraction-root>/qlpacks/codeql/java-all/<version>)
codeql/java-examples (/<extraction-root>/qlpacks/codeql/java-examples/<version>)
codeql/java-queries (/<extraction-root>/qlpacks/codeql/java-queries/<version>)
codeql/javascript-all (/<extraction-root>/qlpacks/codeql/javascript-all/<version>)
codeql/javascript-examples (/<extraction-root>/qlpacks/codeql/javascript-examples/<version>)
codeql/javascript-queries (/<extraction-root>/qlpacks/codeql/javascript-queries/<version>)
codeql/python-all (/<extraction-root>/qlpacks/codeql/python-all/<version>)
codeql/python-examples (/<extraction-root>/qlpacks/codeql/python-examples/<version>)
codeql/python-queries (/<extraction-root>/qlpacks/codeql/python-queries/<version>)
codeql/ruby-all (/<extraction-root>/qlpacks/codeql/ruby-all/<version>)
codeql/ruby-examples (/<extraction-root>/qlpacks/codeql/ruby-examples/<version>)
codeql/ruby-queries (/<extraction-root>/qlpacks/codeql/ruby-queries/<version>)
...
```

You should check that the output contains the expected languages and also that the directory location for the qlpack files is correct. The location should be within the extracted {% data variables.product.prodname_codeql_cli %} bundle, shown above as `<extraction root>`, unless you are using a checkout of `github/codeql`. If the {% data variables.product.prodname_codeql_cli %} is unable to locate the qlpacks for the expected languages, check that you downloaded the {% data variables.product.prodname_codeql %} bundle and not a standalone copy of the {% data variables.product.prodname_codeql_cli %}.

## Generating a token for authentication with {% data variables.product.product_name %}

Each CI server needs a {% data variables.product.prodname_github_app %} or personal access token for the {% data variables.product.prodname_codeql_cli %} to use to upload results to {% data variables.product.product_name %}. You must use an access token or a {% data variables.product.prodname_github_app %} with the `security_events` write permission. If CI servers already use a token with this scope to checkout repositories from {% data variables.product.product_name %}, you could potentially allow the {% data variables.product.prodname_codeql_cli %} to use the same token. Otherwise, you should create a new token with the `security_events` write permission and add this to the CI system's secret store. For information, see "[Building {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" and "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

## Next steps

You're now ready to configure the CI system to run {% data variables.product.prodname_codeql %} analysis, generate results, and upload them to {% data variables.product.product_name %} where the results will be matched to a branch or pull request and displayed as {% data variables.product.prodname_code_scanning %} alerts. For detailed information, see "[Configuring {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)."
