{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.enterprise-accounts.actions-runner-groups-tab %}
1. 单击 **New runner group（新运行器组）**。
{%- elsif ghes < 3.4 or ghae %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
1. 使用 **Add new（新增）**下拉列表，然后选择 **New group（新建组）**。
{%- endif %}
1. 在“Group Name（组名称）”下，输入运行器组的名称。
