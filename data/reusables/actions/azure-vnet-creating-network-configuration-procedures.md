After configuring your Azure resources, you can use an Azure Virtual Network (VNET) for private networking by creating a network configuration{% ifversion ghec%} at the enterprise level{% else %} at the organization level{% endif %}. Then, you can associate that network configuration to runner groups. For more information about runner groups, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/controlling-access-to-larger-runners)."

Once the network configuration is associated with a runner group, all runners in that group will have access to the Azure VNET that has been connected to the underlying configuration.

### Prerequisites

Ensure your Azure resources have been configured _before_ adding a network configuration in {% data variables.product.company_short %}. For more information, see {% ifversion ghec %}"[AUTOTITLE](/admin/configuration/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners#configuring-your-azure-resources)."{% else %}For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/configuring-private-networking-for-github-hosted-runners-in-your-organization#configuring-your-azure-resources)."{% endif %}

### 1. Add a new network configuration for your{% ifversion ghec %} enterprise{% else %} organization{% endif %}

{% ifversion ghec %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{%- else %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{%- endif %}
1. In the left sidebar, click **Hosted compute networking**.
1. Click the **New network configuration** dropdown. Then click **Azure private network**.
1. Name your network configuration.
1. Click **Add Azure Virtual Network**.
1. In the popup window, enter the network settings resource ID you retrieved when you configured your Azure resources for private networking.
1. Click **Add Azure Virtual Network**.

### 2. Create a runner group for your{% ifversion ghec %} enterprise{% else %} organization{% endif %}

{% note %}

**Note:** For the runner group to be accessible by repositories within your organizations, those repositories must have access to that runner group at the organization level. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners#changing-which-repositories-can-access-a-runner-group)."

{% endnote %}

1. Create a new runner group for your{% ifversion ghec %} enterprise. For more information about how to create a runner group, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners#creating-a-runner-group-for-an-enterprise)."{% else %} organization. For more information about how to create a runner group, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/controlling-access-to-larger-runners#creating-a-runner-group-for-an-organization)."{% endif %}
{%- ifversion ghec %}
{% data reusables.actions.workflows.runner-groups-enterprise-organization-access %}
{% else %}
1. To choose a policy for repository access, select the **Repository access** dropdown menu and click a policy. You can configure a runner group to be accessible to a specific list of repositories, or all repositories in the organization.
{% endif %}
1. While configuring your runner group, under "Network configurations," use the dropdown menu to select the network configuration you created for the Azure VNET.
1. To create the group and apply the policy, click **Create group**.

### 3. Add the {% data variables.product.company_short %}-hosted runner to the{% ifversion ghec %} enterprise{% else %} organization{% endif %} runner group

{% note %}

**Note:** When adding your {% data variables.product.company_short %}-hosted runner to a runner group, select the runner group you created in the previous procedures.

{% endnote %}

1. Add the {% data variables.product.company_short %}-hosted runner to the runner group. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/managing-larger-runners#adding-a-larger-runner-to-an-enterprise)."

### 4. Optionally, manage network configurations

{% ifversion ghec %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{%- else %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{%- endif %}
1. In the left sidebar, click **Hosted compute networking**.
1. To edit a network configuration, to the right of the network configuration, click {% octicon "pencil" aria-label="Edit a network configuration" %}. Then click **Edit configuration**.
1. To disable a network configuration, to the right of the network configuration, click {% octicon "kebab-horizontal" aria-label="Menu" %}. Then click **Disable**.
1. To delete a network configuration, to the right of the network configuration, click {% octicon "kebab-horizontal" aria-label="Menu" %}. Then click **Delete**.
