{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. Click **New runner group**.
{%- elsif ghes < 3.4 or ghae %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. Use the **Add new** drop-down, and select **New group**.
{%- endif %}
1. Under "Group name", type a name for your runner group.
