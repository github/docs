---
title: Uploading CodeQL analysis results to GitHub
shortTitle: Uploading results to GitHub
intro: 'You can use the {% data variables.product.prodname_codeql_cli %} to upload {% data variables.product.prodname_codeql %} analysis results to {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codeql %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---

## About SARIF output

{% data variables.product.prodname_dotcom %} creates {% data variables.product.prodname_code_scanning %} alerts in a repository using information from Static Analysis Results Interchange Format (SARIF) files. SARIF is designed to represent the output of a broad range of static analysis tools, and there are many features in the SARIF specification that are considered "optional". The results must use SARIF version 2.1.0. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning)."

After analyzing a {% data variables.product.prodname_codeql %} database using the {% data variables.product.prodname_codeql_cli %}, you will have a SARIF file that contains the results. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/analyzing-your-code-with-codeql-queries)." You can then use the {% data variables.product.prodname_codeql_cli %} to upload results to {% data variables.product.prodname_dotcom %}.

If you used a method other than the {% data variables.product.prodname_codeql_cli %} to generate results, you can use other upload methods. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github)."

{% data reusables.code-scanning.upload-sarif-ghas %}

## Generating a token for authentication with {% data variables.product.product_name %}

Before you can upload your results to {% data variables.product.product_name %}, you will first need to generate a {% data variables.product.pat_generic %} with the `security_events` write permission. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

If you have installed the {% data variables.product.prodname_codeql_cli %} in a third-party CI system to create results to display in {% data variables.product.prodname_dotcom %} as code scanning alerts, you can use a {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} to upload results to {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system#generating-a-token-for-authentication-with-github)."

## Uploading results to {% data variables.product.product_name %}

{% data reusables.code-scanning.upload-sarif-alert-limit %}

Before you can upload results to {% data variables.product.product_name %}, you must determine the best way to pass the {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} you created in the previous section to the {% data variables.product.prodname_codeql_cli %}. We recommend that you review your CI system's guidance on the secure use of a secret store. The {% data variables.product.prodname_codeql_cli %} supports:

* Interfacing with a secret store using the `--github-auth-stdin` option (recommended).
* Saving the secret in the environment variable `GITHUB_TOKEN` and running the CLI without including the `--github-auth-stdin` option.
* For testing purposes you can pass the `--github-auth-stdin` command-line option and supply a temporary token via standard input.

When you have decided on the most secure and reliable method for your configuration, run `codeql github upload-results` on each SARIF results file and include `--github-auth-stdin` unless the token is available in the environment variable `GITHUB_TOKEN`.

```shell
# {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} available from a secret store
<call-to-retrieve-secret> | codeql github upload-results \
    --repository=<repository-name> \
    --ref=<ref> --commit=<commit> \
    --sarif=<file> {% ifversion ghes %}--github-url=<URL> \
    {% endif %}--github-auth-stdin

# {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} available in GITHUB_TOKEN
codeql github upload-results \
    --repository=<repository-name> \
    --ref=<ref> --commit=<commit> \
    --sarif=<file> {% ifversion ghes %}--github-url=<URL> \
    {% endif %}
```

| Option | Required | Usage |
| ------ | :------: | ----- |
| <code><span style="white-space: nowrap;">--repository</span></code> | {% octicon "check" aria-label="Required" %} | Specify the _OWNER/NAME_ of the repository to upload data to. The owner must be an organization within an enterprise that has a license for {% data variables.product.prodname_GH_advanced_security %} and {% data variables.product.prodname_GH_advanced_security %} must be enabled for the repository{% ifversion fpt or ghec %}, unless the repository is public{% endif %}. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)." |
| <code><span style="white-space: nowrap;">--ref</span></code> | {% octicon "check" aria-label="Required" %} | Specify the name of the `ref` you checked out and analyzed so that the results can be matched to the correct code. For a branch use: `refs/heads/BRANCH-NAME`, for the head commit of a pull request use `refs/pull/NUMBER/head`, or for the {% data variables.product.prodname_dotcom %}-generated merge commit of a pull request use `refs/pull/NUMBER/merge`. |
| <code><span style="white-space: nowrap;">--commit</span></code> | {% octicon "check" aria-label="Required" %} | Specify the full SHA of the commit you analyzed. |
| <code><span style="white-space: nowrap;">--sarif</span></code> | {% octicon "check" aria-label="Required" %} | Specify the SARIF file to load. |
|  {% ifversion ghes %} |
| <code><span style="white-space: nowrap;">--github-url</span></code> | {% octicon "check" aria-label="Required" %} | Specify the URL for {% data variables.product.product_name %}. |
|  {% endif %} |
| <code><span style="white-space: nowrap;">--github-auth-stdin</span></code> | {% octicon "x" aria-label="Optional" %}  | Pass the CLI the {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} created for authentication with {% data variables.product.company_short %}'s REST API from your secret store via standard input. This is not needed if the command has access to a `GITHUB_TOKEN` environment variable set with this token. |

For more information, see "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/github-upload-results)."

{% note %}

**Note:** If you analyzed more than one {% data variables.product.prodname_codeql %} database for a single commit, you must have specified a SARIF category for each set of results generated by this command. When you upload the results to {% data variables.product.product_name %}, {% data variables.product.prodname_code_scanning %} uses this category to store the results for each language separately. If you forget to do this, each upload overwrites the previous results. For more information, see "[AUTOTITLE](/code-security/codeql-cli/getting-started-with-the-codeql-cli/analyzing-your-code-with-codeql-queries#running-codeql-database-analyze)."

{% endnote %}

### Basic example of uploading results to {% data variables.product.product_name %}

The following example uploads results from the SARIF file `temp/example-repo-js.sarif` to the repository `my-org/example-repo`. It tells the {% data variables.product.prodname_code_scanning %} API that the results are for the commit `deb275d2d5fe9a522a0b7bd8b6b6a1c939552718` on the `main` branch. The example assumes that the {% data variables.product.prodname_github_app %} or {% data variables.product.pat_generic %} created for authentication with {% data variables.product.company_short %}'s REST API uses the `GITHUB_TOKEN` environment variable.

```shell
codeql github upload-results \
    --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes %}--github-url=https://HOSTNAME \
    {% endif %}
```

There is no output from this command unless the upload was unsuccessful. The command prompt returns when the upload is complete and data processing has begun. On smaller codebases, you should be able to explore the {% data variables.product.prodname_code_scanning %} alerts in {% data variables.product.product_name %} shortly afterward. You can see alerts directly in the pull request or on the **Security** tab for branches, depending on the code you checked out. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)" and "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)."

## Uploading diagnostic information to {% data variables.product.product_name %} if the analysis fails

When {% data variables.product.prodname_codeql_cli %} finishes analyzing a database successfully, it gathers diagnostic information such as file coverage, warnings, and errors, and includes it in the SARIF file with the results. When you upload the SARIF file to {% data variables.product.company_short %} the diagnostic information is displayed on the {% data variables.product.prodname_code_scanning %} {% data variables.code-scanning.tool_status_page %} for the repository to make it easy to see how well {% data variables.product.prodname_codeql %} is working and debug any problems. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/about-the-tool-status-page)."

However, if `codeql database analyze` fails for any reason there is no SARIF file to upload to {% data variables.product.company_short %} and no diagnostic information to show on the {% data variables.product.prodname_code_scanning %} {% data variables.code-scanning.tool_status_page %} for the repository. This makes it difficult for users to troubleshoot analysis unless they have access to log files in your CI system.

We recommend that you configure your CI workflow to export and upload diagnostic information to {% data variables.product.product_name %} when an analysis fails. You can do this using the following simple commands to export diagnostic information and upload it to {% data variables.product.company_short %}.

### Exporting diagnostic information if the analysis fails

You can create a SARIF file for the failed analysis using "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/database-export-diagnostics)", for example:

```shell
$ codeql database export-diagnostics codeql-dbs/example-repo \
    --sarif-category={% ifversion codeql-language-identifiers-311 %}javascript-typescript{% else %}javascript{% endif %} --format={% ifversion fpt or ghec %}sarif-latest{% else %}sarifv2.1.0{% endif %} \
    --output=/temp/example-repo-js.sarif
```

This SARIF file will contain diagnostic information for the failed analysis, including any file coverage information, warnings, and errors generated during the analysis.

### Uploading diagnostic information if the analysis fails

You can make this diagnostic information available on the {% data variables.code-scanning.tool_status_page %} by uploading the SARIF file to {% data variables.product.product_name %} using "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/github-upload-results)", for example:

```shell
codeql github upload-results \
    --repository=my-org/example-repo \
    --ref=refs/heads/main --commit=deb275d2d5fe9a522a0b7bd8b6b6a1c939552718 \
    --sarif=/temp/example-repo-js.sarif {% ifversion ghes %}--github-url=https://HOSTNAME \
    {% endif %}
```

This is the same as the process for uploading SARIF files from successful analyses.
