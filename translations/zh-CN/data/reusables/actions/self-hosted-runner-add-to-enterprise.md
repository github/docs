{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% ifversion actions-hosted-runners %}1. Click **New runner**, then click **New self-hosted runner**.{% else %}1. Click **New runner**.{% endif %}
{% data reusables.actions.self-hosted-runner-configure %}
{%- elsif ghae or ghes < 3.4 %}
要将自托管的运行器添加到企业，您必须是组织所有者。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. 单击 **Add new（新增）**，然后单击 **New runner（新运行器）**。
{% data reusables.actions.self-hosted-runner-configure %}
{%- endif %}
