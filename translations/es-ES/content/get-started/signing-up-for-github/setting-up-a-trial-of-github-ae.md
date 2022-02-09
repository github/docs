---
title: Setting up a trial of GitHub AE
intro: 'Puedes probar {% data variables.product.prodname_ghe_managed %} de manera gratuita.'
versions:
  ghae: '*'
topics:
  - Accounts
shortTitle: GitHub AE trial
---

## About the {% data variables.product.prodname_ghe_managed %} trial

Puedes configurar un periodo de 90 días para evaluar {% data variables.product.prodname_ghe_managed %}. This process allows you to deploy a {% data variables.product.prodname_ghe_managed %} account in your existing Azure region.

- **{% data variables.product.prodname_ghe_managed %} account**: The Azure resource that contains the required components, including the instance.
- **{% data variables.product.prodname_ghe_managed %} portal**: The Azure management tool at [https://portal.azure.com](https://portal.azure.com). This is used to deploy the {% data variables.product.prodname_ghe_managed %} account.

## Configurar tu prueba de {% data variables.product.prodname_ghe_managed %}


Before you can start your trial of {% data variables.product.prodname_ghe_managed %}, you must request access by contacting your {% data variables.product.prodname_dotcom %} account team. {% data variables.product.prodname_dotcom %} will enable the {% data variables.product.prodname_ghe_managed %} trial for your Azure subscription.

Contact {% data variables.contact.contact_enterprise_sales %} to check your eligibility for a {% data variables.product.prodname_ghe_managed %} trial.

## Deploying {% data variables.product.prodname_ghe_managed %} with the {% data variables.actions.azure_portal %}

The {% data variables.actions.azure_portal %} allows you to deploy the {% data variables.product.prodname_ghe_managed %} account in your Azure resource group.

1. On the {% data variables.actions.azure_portal %}, type `GitHub AE` in the search field. Then, under _Services_, click {% data variables.product.prodname_ghe_managed %}. ![{% data variables.actions.azure_portal %} search result](/assets/images/azure/github-ae-azure-portal-search.png)
1. To begin the process of adding a new {% data variables.product.prodname_ghe_managed %} account, click **Create GitHub AE account**.
1. Complete the "Project details" and "Instance details" fields. ![{% data variables.actions.azure_portal %} search result](/assets/images/azure/github-ae-azure-portal-form.png)
    - **Account name:** The hostname for your enterprise
    - **Administrator username:** A username for the initial enterprise owner that will be created in {% data variables.product.prodname_ghe_managed %}
    - **Administrator email:** The email address that will receive the login information
1. To review a summary of the proposed changes, click **Review + create**.
1. After the validation process has completed, click **Create**.

The email address you entered above will receive instructions on how to access your enterprise. After you have access, you can get started by following the initial setup steps. Para obtener más información, consulta la sección "[Inicializar {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

{% note %}

**Note:** Software updates for your {% data variables.product.prodname_ghe_managed %} instance are performed by {% data variables.product.prodname_dotcom %}. For more information, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)."

{% endnote %}

## Navigating to your enterprise

You can use the {% data variables.actions.azure_portal %} to navigate to your {% data variables.product.prodname_ghe_managed %} instance. The resulting list includes all the {% data variables.product.prodname_ghe_managed %} instances in your Azure region.

1. On the {% data variables.actions.azure_portal %}, in the left panel, click **All resources**.
1. From the available filters, click **All types**, then deselect **Select all** and select **GitHub AE**: ![{% data variables.actions.azure_portal %} search result](/assets/images/azure/github-ae-azure-portal-type-filter.png)

## Pasos siguientes

Once your instance has been provisioned, the next step is to initialize {% data variables.product.prodname_ghe_managed %}. Para obtener más información, consulta la sección "[Inicializar {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae)".

## Finalizar tu prueba

You can upgrade to a full license at any time during the trial period by contacting contact {% data variables.contact.contact_enterprise_sales %}. If you haven't upgraded by the last day of your trial, then the instance is automatically deleted.

Si necesitas más tiempo para evaluar {% data variables.product.prodname_ghe_managed %}, contacta a {% data variables.contact.contact_enterprise_sales %} para solicitar una extensión.

## Leer más

- "[Habilita las características de la {% data variables.product.prodname_advanced_security %} en {% data variables.product.prodname_ghe_managed %}](/github/getting-started-with-github/about-github-advanced-security#enabling-advanced-security-features-on-github-ae)"
- "[{% data variables.product.prodname_ghe_managed %} release notes](/github-ae@latest/admin/overview/github-ae-release-notes)" 
