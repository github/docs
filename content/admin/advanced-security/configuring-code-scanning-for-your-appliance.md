---
title: Configuring code scanning for your appliance
shortTitle: Configuring code scanning
intro: 'You can enable, configure and disable {% data variables.product.prodname_code_scanning %} for {% data variables.product.product_location %}. {% data variables.product.prodname_code_scanning_capc %} allows users to scan code for vulnerabilities and errors.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
versions:
  enterprise-server: '>=2.22'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
---

{% data reusables.code-scanning.beta %}

### About {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

You can configure {% data variables.product.prodname_code_scanning %} to run {% data variables.product.prodname_codeql %} analysis and third-party analysis. {% data variables.product.prodname_code_scanning_capc %} also supports running analysis natively using {% data variables.product.prodname_actions %} or externally using existing CI/CD infrastructure. The table below summarizes all the options available to users when you configure {% data variables.product.product_location %} to allow {% data variables.product.prodname_code_scanning %} using actions.

{% data reusables.code-scanning.enabling-options %}

### Prerequisites for {% data variables.product.prodname_code_scanning %}

- A license for {% data variables.product.prodname_GH_advanced_security %}{% if currentVersion ver_gt "enterprise-server@3.0" %} (see "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/about-licensing-for-github-advanced-security)"){% endif %}

- {% data variables.product.prodname_code_scanning_capc %} enabled in the management console (see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

- A VM or container for {% data variables.product.prodname_code_scanning %} analysis to run in.

### Running {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_actions %}

#### Setting up a self-hosted runner

{% data variables.product.prodname_ghe_server %} can run {% data variables.product.prodname_code_scanning %} using a {% data variables.product.prodname_actions %} workflow. First, you need to provision one or more self-hosted {% data variables.product.prodname_actions %} runners in your environment. You can provision self-hosted runners at the repository, organization, or enterprise account level. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

You must ensure that Git is in the PATH variable on any self-hosted runners you use to run {% data variables.product.prodname_codeql %} actions.

#### Provisioning the actions for {% data variables.product.prodname_code_scanning %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
If you want to use actions to run {% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_ghe_server %}, the actions must be available on your appliance.

The {% data variables.product.prodname_codeql %} action is included in your installation of {% data variables.product.prodname_ghe_server %}. If {% data variables.product.prodname_ghe_server %} has access to the internet, the action will automatically download the {% data variables.product.prodname_codeql %} bundle required to perform analysis. Alternatively, you can use a synchronization tool to make the {% data variables.product.prodname_codeql %} analysis bundle available locally. For more information, see "[Configuring {% data variables.product.prodname_codeql %} analysis on a server without internet access](#configuring-codeql-analysis-on-a-server-without-internet-access)" below.

You can also make third-party actions available to users for {% data variables.product.prodname_code_scanning %}, by setting up {% data variables.product.prodname_github_connect %}. For more information, see "[Configuring {% data variables.product.prodname_github_connect %} to sync {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)" below.

#### Configuring {% data variables.product.prodname_codeql %} analysis on a server without internet access
If the server on which you are running {% data variables.product.prodname_ghe_server %} is not connected to the internet, and you want to allow users to enable {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} for their repositories, you must use the {% data variables.product.prodname_codeql %} action sync tool to copy the {% data variables.product.prodname_codeql %} analysis bundle from {% data variables.product.prodname_dotcom_the_website %} to your server. The tool, and details of how to use it, are available at [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

If you set up the {% data variables.product.prodname_codeql %} action sync tool, you can use it to sync the latest releases of the {% data variables.product.prodname_codeql %} action and associated {% data variables.product.prodname_codeql %} analysis bundle. These are compatible with {% data variables.product.prodname_ghe_server %}.

{% endif %}

{% if currentVersion == "enterprise-server@2.22" %}
To run {% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_actions %}, the appropriate actions must be available locally. You can make the actions available in three ways.

- **Recommended**: You can use [{% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) to automatically download actions from {% data variables.product.prodname_dotcom_the_website %}. The machine that hosts your instance must be able to access {% data variables.product.prodname_dotcom_the_website %}. This approach ensures that you get the latest software automatically. For more information, see "[Configuring {% data variables.product.prodname_github_connect %} to sync {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)."
- If you want to use the {% data variables.product.prodname_codeql_workflow %}, you can sync the repository from {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.prodname_ghe_server %}, by using the {% data variables.product.prodname_codeql %} Action sync tool available at [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/). You can use this tool regardless of whether {% data variables.product.product_location %} or your {% data variables.product.prodname_actions %} runners have access to the internet, as long as you can access both {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %} simultaneously on your computer.
- You can create a local copy of an action's repository on your server, by cloning the {% data variables.product.prodname_dotcom_the_website %} repository that contains the action. For example, if you want to use the actions for {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, you can create a repository in your instance called `github/codeql-action`, then clone the [repository](https://github.com/github/codeql-action) from {% data variables.product.prodname_dotcom_the_website %}, and then push that repository to your instance's `github/codeql-action` repository. You will also need to download any of the releases from the repository on {% data variables.product.prodname_dotcom_the_website %} and upload them to your instance's `github/codeql-action` repository as releases.
{% endif %}

#### Configuring {% data variables.product.prodname_github_connect %} to sync {% data variables.product.prodname_actions %}
1. If you want to download action workflows on demand from {% data variables.product.prodname_dotcom_the_website %}, you need to enable {% data variables.product.prodname_github_connect %}. For more information, see "[Enabling {% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)."
2. You'll also need to enable {% data variables.product.prodname_actions %} for {% data variables.product.product_location %}. For more information, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)."
3. The next step is to configure access to actions on {% data variables.product.prodname_dotcom_the_website %} using {% data variables.product.prodname_github_connect %}. For more information, see "[Enabling automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)."
4. Add a self-hosted runner to your repository, organization, or enterprise account. For more information, see "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

### Running {% data variables.product.prodname_code_scanning %} using the {% data variables.product.prodname_codeql_runner %}
If you don't want to use {% data variables.product.prodname_actions %}, you can run {% data variables.product.prodname_code_scanning %} using the {% data variables.product.prodname_codeql_runner %}. 

The {% data variables.product.prodname_codeql_runner %} is a command-line tool that you can add to your third-party CI/CD system. The tool runs {% data variables.product.prodname_codeql %} analysis on a checkout of a {% data variables.product.prodname_dotcom %} repository. For more information, see "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)."
