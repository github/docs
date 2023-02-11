{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{%- ifversion ghec or ghes or ghae > 3.3 %}
{% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. Click **New runner group**.
{%- elsif ghae %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. Use the **Add new** drop-down, and select **New group**.
{%- endif %}
1. Under "Group name", type a name for your runner group.
