---
title: Configuring code scanning for your appliance
shortTitle: Configuring code scanning
intro: 'You can enable, configure and disable {% data variables.product.prodname_code_scanning %} for {% data variables.product.product_location %}. {% data variables.product.prodname_code_scanning_capc %} allows users to scan code for vulnerabilities and errors.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/advanced-security/configuring-code-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
---

{% data reusables.code-scanning.beta %}

## About {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

You can configure {% data variables.product.prodname_code_scanning %} to run {% data variables.product.prodname_codeql %} analysis and third-party analysis. {% data variables.product.prodname_code_scanning_capc %} also supports running analysis natively using {% data variables.product.prodname_actions %} or externally using existing CI/CD infrastructure. The table below summarizes all the options available to users when you configure {% data variables.product.product_location %} to allow {% data variables.product.prodname_code_scanning %} using actions.

{% data reusables.code-scanning.enabling-options %}

## Checking whether your license includes {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Prerequisites for {% data variables.product.prodname_code_scanning %}

- A license for {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)"){% endif %}

- {% data variables.product.prodname_code_scanning_capc %} enabled in the management console (see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

- A VM or container for {% data variables.product.prodname_code_scanning %} analysis to run in.

## Running {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_actions %}

### Setting up a self-hosted runner

{% data variables.product.prodname_ghe_server %} can run {% data variables.product.prodname_code_scanning %} using a {% data variables.product.prodname_actions %} workflow. First, you need to provision one or more self-hosted {% data variables.product.prodname_actions %} runners in your environment. You can provision self-hosted runners at the repository, organization, or enterprise account level. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

You must ensure that Git is in the PATH variable on any self-hosted runners you use to run {% data variables.product.prodname_codeql %} actions.

### Provisioning the actions for {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}
If you want to use actions to run {% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_ghe_server %}, the actions must be available on your appliance.

The {% data variables.product.prodname_codeql %} action is included in your installation of {% data variables.product.prodname_ghe_server %}. If {% data variables.product.prodname_ghe_server %} has access to the internet, the action will automatically download the {% data variables.product.prodname_codeql %} bundle required to perform analysis. Alternatively, you can use a synchronization tool to make the {% data variables.product.prodname_codeql %} analysis bundle available locally. For more information, see "[Configuring {% data variables.product.prodname_codeql %} analysis on a server without internet access](#configuring-codeql-analysis-on-a-server-without-internet-access)" below.

You can also make third-party actions available to users for {% data variables.product.prodname_code_scanning %}, by setting up {% data variables.product.prodname_github_connect %}. For more information, see "[Configuring {% data variables.product.prodname_github_connect %} to sync {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)" below.

### Configuring {% data variables.product.prodname_codeql %} analysis on a server without internet access
If the server on which you are running {% data variables.product.prodname_ghe_server %} is not connected to the internet, and you want to allow users to enable {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for their repositories, you must use the {% data variables.product.prodname_codeql %} action sync tool to copy the {% data variables.product.prodname_codeql %} analysis bundle from {% data variables.product.prodname_dotcom_the_website %} to your server. The tool, and details of how to use it, are available at [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

If you set up the {% data variables.product.prodname_codeql %} action sync tool, you can use it to sync the latest releases of the {% data variables.product.prodname_codeql %} action and associated {% data variables.product.prodname_codeql %} analysis bundle. These are compatible with {% data variables.product.prodname_ghe_server %}.

{% endif %}

### Configuring {% data variables.product.prodname_github_connect %} to sync {% data variables.product.prodname_actions %}
1. If you want to download action workflows on demand from {% data variables.product.prodname_dotcom_the_website %}, you need to enable {% data variables.product.prodname_github_connect %}. For more information, see "[Enabling {% data variables.product.prodname_github_connect %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud#enabling-github-connect)."
2. You'll also need to enable {% data variables.product.prodname_actions %} for {% data variables.product.product_location %}. For more information, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)."
3. The next step is to configure access to actions on {% data variables.product.prodname_dotcom_the_website %} using {% data variables.product.prodname_github_connect %}. For more information, see "[Enabling automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)."
4. Add a self-hosted runner to your repository, organization, or enterprise account. For more information, see "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

## Running code scanning using the {% data variables.product.prodname_codeql_cli %}

If you don't want to use {% data variables.product.prodname_actions %}, you should run {% data variables.product.prodname_code_scanning %} using the {% data variables.product.prodname_codeql_cli %}. 

The {% data variables.product.prodname_codeql_cli %} is a command-line tool that you use to analyze codebases on any machine, including a third-party CI/CD system. For more information, see "[Installing CodeQL CLI in your CI system](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)."

{% if codeql-runner-supported %}

## Running {% data variables.product.prodname_code_scanning %} using the {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

If you don't want to use {% data variables.product.prodname_actions %}, you can run {% data variables.product.prodname_code_scanning %} using the {% data variables.product.prodname_codeql_runner %}. 

The {% data variables.product.prodname_codeql_runner %} is a command-line tool that you can add to your third-party CI/CD system. The tool runs {% data variables.product.prodname_codeql %} analysis on a checkout of a {% data variables.product.prodname_dotcom %} repository. For more information, see "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)."

{% endif %}
