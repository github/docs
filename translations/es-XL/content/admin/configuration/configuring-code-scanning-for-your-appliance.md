---
title: Configuring code scanning for your appliance
shortTitle: Configurar el escaneo de código
intro: 'You can enable, configure and disable {% data variables.product.prodname_code_scanning %} for {% data variables.product.product_location_enterprise %}. {% data variables.product.prodname_code_scanning_capc %} allows users to scan code for vulnerabilities and errors.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

### Acerca de {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

The table below summarizes the available types of analysis for {% data variables.product.prodname_code_scanning %}, and provides links on enabling the feature for individual repositories.

{% data reusables.code-scanning.enabling-options %}

For the users of {% data variables.product.product_location_enterprise %} to be able to enable and use {% data variables.product.prodname_code_scanning %} in their repositories, you need, as a site administrator, to enable this feature for the whole appliance.

### How do I know if {% data variables.product.prodname_code_scanning %} is enabled for my appliance

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Check if there is an **{% data variables.product.prodname_advanced_security %}** entry in the left sidebar. ![Advanced Security sidebar](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

If you can't see **{% data variables.product.prodname_advanced_security %}** in the sidebar, it means that your license doesn't include support for {% data variables.product.prodname_advanced_security %} features including {% data variables.product.prodname_code_scanning %}. The {% data variables.product.prodname_advanced_security %} license gives you and your users access to features that help you make your repositories and code more secure.

### Habilitar {% data variables.product.prodname_code_scanning %}

{% data reusables.enterprise_management_console.enable-disable-code-scanning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "{% data variables.product.prodname_advanced_security %}," click **{% data variables.product.prodname_code_scanning_capc %}**. ![Checkbox to enable or disable {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}


### Running {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_actions %}

#### Setting up a self-hosted runner

If you are enrolled in the {% data variables.product.prodname_actions %} beta, then {% data variables.product.prodname_ghe_server %} can run {% data variables.product.prodname_code_scanning %} using a {% data variables.product.prodname_actions %} workflow. First, you need to provision one or more self-hosted {% data variables.product.prodname_actions %} runners in your environment. You can provision self-hosted runners at the repository, organization, or enterprise account level. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

#### Provisioning the action
To run {% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_actions %}, the appropriate action must be available locally. You can make the action available in three ways.

- **Recommended** You can use [{% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) to automatically download actions from {% data variables.product.prodname_dotcom_the_website %}. The machine that hosts your instance must be able to access {% data variables.product.prodname_dotcom_the_website %}. This approach ensures that you get the latest software automatically. For more information, see "[Configuring {% data variables.product.prodname_github_connect %} to sync {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)."
- If you want to use the {% data variables.product.prodname_codeql_workflow %}, you can sync the repository from {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.prodname_ghe_server %}, by using the {% data variables.product.prodname_codeql %} Action sync tool available at [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/). You can use this tool regardless of whether {% data variables.product.product_location_enterprise %} or your {% data variables.product.prodname_actions %} runners have access to the internet, as long as you can access both {% data variables.product.product_location_enterprise %} and {% data variables.product.prodname_dotcom_the_website %} simultaneously on your computer.
- You can create a local copy of the action's repository on your server, by cloning the {% data variables.product.prodname_dotcom_the_website %} repository with the action. For example, if you want to use the {% data variables.product.prodname_codeql %} action, you can create a repository in your instance called `github/codeql-action`, then clone the [repository](https://github.com/github/codeql-action) from {% data variables.product.prodname_dotcom_the_website %}, and then push that repository to your instance's `github/codeql-action` repository. You will also need to download any of the releases from the repository on {% data variables.product.prodname_dotcom_the_website %} and upload them to your instance's `github/codeql-action` repository as releases.


##### Configuring {% data variables.product.prodname_github_connect %} to sync {% data variables.product.prodname_actions %}

1. If you want to download action workflows on demand from {% data variables.product.prodname_dotcom_the_website %}, you need to enable {% data variables.product.prodname_github_connect %}. For more information, see "[Enabling {% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)."
2. You'll also need to enable {% data variables.product.prodname_actions %} for {% data variables.product.product_location_enterprise %}. For more information, see "[Enabling {% data variables.product.prodname_actions %} and configuring storage](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)."
3. The next step is to configure access to actions on {% data variables.product.prodname_dotcom_the_website %} using {% data variables.product.prodname_github_connect %}. For more information, see "[Enabling automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)."
4. Add a self-hosted runner to your repository, organization, or enterprise account. Para obtener más información, consulta "[Agregar ejecutores autoalojados](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

After you configure a self-hosted runner, users can enable {% data variables.product.prodname_code_scanning %} for individual repositories on {% data variables.product.product_location_enterprise %}. El flujo de trabajo predeterminado de {% data variables.product.prodname_code_scanning %} utiliza el evento `on.push` para activar el escaneo de código cada vez que alguien carga información a cualquier rama que contenga el archivo de flujo de trabajo.

### Running {% data variables.product.prodname_code_scanning %} using the {% data variables.product.prodname_codeql_runner %}
If your organization isn't taking part in the beta for {% data variables.product.prodname_actions %}, or if you don't want to use {% data variables.product.prodname_actions %}, you can run {% data variables.product.prodname_code_scanning %} using the {% data variables.product.prodname_codeql_runner %}.

The {% data variables.product.prodname_codeql_runner %} is a command-line tool that you can add to your third-party CI/CD system. The tool runs {% data variables.product.prodname_codeql %} analysis on a checkout of a {% data variables.product.prodname_dotcom %} repository. For more information, see "[Running {% data variables.product.prodname_code_scanning %} in your CI system](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)."

### Inhabilitar las {% data variables.product.prodname_code_scanning %}

{% data reusables.enterprise_management_console.enable-disable-code-scanning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "{% data variables.product.prodname_advanced_security %}", unselect **{% data variables.product.prodname_code_scanning_capc %}**. ![Checkbox to enable or disable {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/code-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}
