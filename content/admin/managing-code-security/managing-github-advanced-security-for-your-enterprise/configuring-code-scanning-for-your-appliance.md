---
title: '{% ifversion ghes %}Configuring code scanning for your appliance{% elsif default-setup-self-hosted-runners-GHEC %}Configuring self-hosted runners for code scanning in your enterprise{% endif %}'
shortTitle: Configuring code scanning
intro: 'You can enable, configure, and disable {% data variables.product.prodname_code_scanning %} for {% data variables.product.product_name %}{% ifversion default-setup-self-hosted-runners-GHEC %} without {% data variables.product.prodname_dotcom %}-hosted runners{% endif %}. {% data variables.product.prodname_code_scanning_caps %} allows users to scan code for vulnerabilities and errors.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/advanced-security/configuring-code-scanning-for-your-appliance
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
---
<!--The CodeQL CLI man pages include a link to a section in this article. If you rename this article,
make sure that you also update the MS short link: https://aka.ms/code-scanning-docs/configuring-ghes.-->

{% ifversion ghes %}

## About {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

You can configure {% data variables.product.prodname_code_scanning %} to run {% data variables.product.prodname_codeql %} analysis and third-party analysis. {% data variables.product.prodname_code_scanning_caps %} also supports running analysis natively using {% data variables.product.prodname_actions %} or externally using existing CI/CD infrastructure. The bullets below summarize the options available to users when you configure {% data variables.location.product_location %} to allow {% data variables.product.prodname_code_scanning %} using actions.

{% data reusables.code-scanning.enabling-options %}

## Checking whether your license includes {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Prerequisites for {% data variables.product.prodname_code_scanning %}

* A license for {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)"){% endif %}

* {% data variables.product.prodname_code_scanning_caps %} enabled in the management console (see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)")

* A VM or container for {% data variables.product.prodname_code_scanning %} analysis to run in.

<!-- Anchor to maintain the CodeQL CLI manual pages link: https://aka.ms/code-scanning-docs/configuring-ghes -->

<a name="running-code-scanning-using-github-actions"></a>

## Running {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_actions %}

### Provisioning a self-hosted runner

{% elsif default-setup-self-hosted-runners-GHEC %}

## Provisioning a self-hosted runner

{% note %}

**Notes:**
  * If your enterprise uses {% data variables.product.prodname_dotcom %}-hosted runners with {% data variables.product.prodname_actions %}, proceed directly to configuring {% data variables.product.prodname_code_scanning %} through {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale)."
  * With the exception of Swift analysis, default setup can now run on {% data variables.actions.hosted_runners %}. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/about-larger-runners)" and "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/configuring-larger-runners-for-default-setup)."

{% endnote %}

{% endif %}

{% data variables.product.product_name %} can run {% data variables.product.prodname_code_scanning %} using a {% data variables.product.prodname_actions %} workflow. First, you need to provision one or more self-hosted {% data variables.product.prodname_actions %} runners in your environment. You can provision self-hosted runners at the repository, organization, or enterprise account level. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)."

{% ifversion code-scanning-runner-label or default-setup-self-hosted-runners-GHEC %}
If you are provisioning a self-hosted runner for {% data variables.product.prodname_codeql %} analysis, your runner must use a {% data variables.product.prodname_codeql %}-supported operating system version and CPU architecture. For more information, see the [{% data variables.product.prodname_codeql %} system requirements](https://codeql.github.com/docs/codeql-overview/system-requirements/).

If you are using default setup for {% data variables.product.prodname_code_scanning %}, assign the `code-scanning` label to your self-hosted runner. For more information about using labels with self-hosted runners, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners)."{% ifversion code-scanning-default-setup-self-hosted-310 or default-setup-self-hosted-runners-GHEC %} For more information about using default setup for code scanning analysis of compiled languages, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/codeql-code-scanning-for-compiled-languages)."{% endif %}

{% endif %}

You must ensure that Git is in the PATH variable on any self-hosted runners you use to run {% data variables.product.prodname_codeql %} actions.

{% ifversion default-setup-self-hosted-runners-GHEC or ghes %}
{% note %}

**Note:** If you use {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} to analyze code written in Python in your enterprise, you must make sure that your self-hosted runner has Python 3 installed.

{% endnote %}
{% endif %}

{% ifversion ghes %}

### Provisioning a runner scale set

You can use {% data variables.product.prodname_actions_runner_controller %} to create a dedicated runner scale set for your {% data variables.product.prodname_ghe_server %} instance. For more information, see "[AUTOTITLE](/enterprise-server@latest/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/deploying-runner-scale-sets-with-actions-runner-controller#using-arc-with-dependabot-and-code-scanning)."

### Provisioning the actions for {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}
If you want to use actions to run {% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_ghe_server %}, the actions must be available on your appliance.

The {% data variables.product.prodname_codeql %} action is included in your installation of {% data variables.product.prodname_ghe_server %}. If both {% data variables.product.prodname_ghe_server %} {{ allVersions[currentVersion].currentRelease }} and your {% data variables.product.prodname_actions %} runner have access to the internet, the action will automatically download the {% data variables.product.prodname_codeql %} {% data variables.product.codeql_cli_ghes_recommended_version %} bundle required to perform analysis. Alternatively, you can use a synchronization tool to make the latest released version of the {% data variables.product.prodname_codeql %} analysis bundle available locally. For more information, see "[Configuring {% data variables.product.prodname_codeql %} analysis on a server without internet access](#configuring-codeql-analysis-on-a-server-without-internet-access)" below.

You can also make third-party actions available to users for {% data variables.product.prodname_code_scanning %}, by setting up {% data variables.product.prodname_github_connect %}. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)" below.

### Configuring {% data variables.product.prodname_codeql %} analysis on a server without internet access

If the server on which you are running {% data variables.product.prodname_ghe_server %} is not connected to the internet, and you want to allow users to enable {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for their repositories, you must use the {% data variables.product.prodname_codeql %} action sync tool to copy the {% data variables.product.prodname_codeql %} analysis bundle from {% data variables.product.prodname_dotcom_the_website %} to your server. The tool, and details of how to use it, are available at [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

If you configure the {% data variables.product.prodname_codeql %} action sync tool, you can use it to sync the latest releases of the {% data variables.product.prodname_codeql %} action and associated {% data variables.product.prodname_codeql %} analysis bundle. These are compatible with {% data variables.product.prodname_ghe_server %}.

{% endif %}

### Configuring {% data variables.product.prodname_github_connect %} to sync {% data variables.product.prodname_actions %}

1. If you want to download action workflows on demand from {% data variables.product.prodname_dotcom_the_website %}, you need to enable {% data variables.product.prodname_github_connect %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/managing-github-connect#enabling-github-connect)."
1. You'll also need to enable {% data variables.product.prodname_actions %} for {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)."
1. The next step is to configure access to actions on {% data variables.product.prodname_dotcom_the_website %} using {% data variables.product.prodname_github_connect %}. For more information, see "[AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."
1. Add a self-hosted runner to your repository, organization, or enterprise account. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)."

## Running code scanning using the {% data variables.product.prodname_codeql_cli %}

If you don't want to use {% data variables.product.prodname_actions %}, you should run {% data variables.product.prodname_code_scanning %} using the {% data variables.product.prodname_codeql_cli %}.

The {% data variables.product.prodname_codeql_cli %} is a command-line tool that you use to analyze codebases on any machine, including a third-party CI/CD system. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)."
{% endif %}
