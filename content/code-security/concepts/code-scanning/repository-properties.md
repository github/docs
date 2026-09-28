---
title: Repository properties for {% data variables.product.prodname_code_scanning %}
shortTitle: Repository properties
intro: You can use repository properties to adjust {% data variables.product.prodname_code_scanning %} to suit your needs.
versions:
  feature: codeql-custom-properties
contentType: concepts
category:
  - Find and fix code vulnerabilities
---

## Prerequisites

For the repository properties described here to have an effect, you need to have set up {% data variables.product.prodname_code_scanning %}. See [AUTOTITLE](/code-security/concepts/code-scanning/setup-types).

Repository properties which affect {% data variables.product.prodname_code_scanning %} must be created manually for your organization. You can then set values for them that apply to your entire organization or allow them to be configured differently for each repository. See [AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization).

## Testing changes before applying them

You may wish to test that configurations applied through repository properties have the desired effects before rolling them out to your entire organization. Repository properties can be set to specific values for individual repositories. If you are configuring a repository property for the first time, create it for your organization but do not set it to a value. Instead, set it to a value for a specific test repository where you can validate the change first. Once validated on a test repository, you can then set the value for your entire organization or the desired repositories.

When changing the value of a supported repository property, you can use the same approach. Override or set the value of the repository property for a test repository, validate the change, and then roll it out to your organization or other repositories.

## Supported repository properties for {% data variables.product.prodname_code_scanning %}

Some {% data variables.product.prodname_code_scanning %} functionality can be configured using repository properties. Organizations can use repository properties to both enforce configurations across all repositories and for individual repositories. If {% data variables.product.prodname_code_scanning %} is customized using repository properties, the customization applies to all setup types.

The following is an overview of repository properties you can set up which affect {% data variables.product.prodname_code_scanning %} analyses when configured:

| Name | Type |
|------|------|
| {% ifversion codeql-config-property %} |
| `github-codeql-config-file` | Text |
| {% endif %} |
| `github-codeql-extra-queries` | Text |
| `github-codeql-disable-overlay` | True/false |
| `github-codeql-file-coverage-on-prs` | True/false |

> [!NOTE]
> The repository properties which are supported depend on the version of the [github/codeql-action](https://github.com/github/codeql-action/) that is used by your {% data variables.product.prodname_code_scanning %} analyses. For {% data variables.product.prodname_code_scanning %} advanced setup, check that your workflow is referencing the latest major version. {% data variables.product.prodname_code_scanning_caps %} default setup automatically uses the latest version.{% ifversion ghes %} If the server on which you are running {% data variables.product.prodname_ghe_server %} is not connected to the internet, you may need to use the {% data variables.product.prodname_codeql %} action sync tool. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).{% endif %}

{% ifversion codeql-config-property %}

### Custom configuration files

You can set the `github-codeql-config-file` property to the local or remote path of a configuration file. Accepted values for this property are the same as for the `config-file` parameter of the `codeql-action/init` action. For more information about accepted path formats and possible contents of configuration files, see [AUTOTITLE](/code-security/reference/code-scanning/workflow-configuration-options#custom-configuration-files).

{% data reusables.code-scanning.remote-config-file-registry %}

Advanced setup does not use organization-level private registry configurations. To use a configuration file from an internal or private repository with advanced setup, pass a token that can access the repository to the `external-repository-token` input of the `codeql-action/init` action. See [AUTOTITLE](/code-security/reference/code-scanning/workflow-configuration-options#custom-configuration-files).

A value specified for the `github-codeql-config-file` property will apply to both {% data variables.product.prodname_code_scanning %} default setup and {% data variables.product.prodname_code_scanning %} advanced setup. If an advanced setup workflow specifies an explicit input for the `config-file` parameter of the `codeql-action/init` action, then that input will take precedence over the value configured in the repository property. This allows advanced workflows to use different configurations than those applied to default setup workflows, if desired.

{% data reusables.code-scanning.config-file-merged-with-default-setup %} See [AUTOTITLE](/code-security/concepts/code-scanning/setup-types#configuration-options) for more information about available configuration options in {% data variables.product.prodname_code_scanning %} default setup.

### Other analysis customization
{% else %}
### Analysis customization
{% endif %}

The `github-codeql-extra-queries` property allows you to configure additional queries that should be run. This is useful to add queries to all relevant analyses in your organization without needing to modify individual workflows or switch to an advanced setup. This accepts the same values as the `queries` input of the [github/codeql-action](https://github.com/github/codeql-action/). See [AUTOTITLE](/code-security/reference/code-scanning/workflow-configuration-options).

### Enabling or disabling features

You can disable improved incremental analysis by setting the `github-codeql-disable-overlay` property to `true`. This may be useful if improved incremental analysis is failing because of increased hardware requirements.

File coverage information is not calculated for analyses of pull requests. If you want to enable file coverage information for pull requests, you can set the `github-codeql-file-coverage-on-prs` property to `true`.
