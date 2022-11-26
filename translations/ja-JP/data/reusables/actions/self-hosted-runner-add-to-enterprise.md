{%- ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% ifversion actions-hosted-runners %}1. Click **New runner**, then click **New self-hosted runner**.{% else %}1. Click **New runner**.{% endif %}
{% data reusables.actions.self-hosted-runner-configure %}
{%- elsif ghae or ghes < 3.4 %}
To add a self-hosted runner to an enterprise, you must be an enterprise owner.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. Click **Add new**, then click **New runner**.
{% data reusables.actions.self-hosted-runner-configure %}
{%- endif %}
