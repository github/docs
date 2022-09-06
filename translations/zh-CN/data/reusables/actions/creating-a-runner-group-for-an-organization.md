{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

All organizations have a single default runner group. Organizations within an enterprise account can create additional groups. 组织管理员可以允许单个仓库访问运行器组。 For information about how to create a runner group with the REST API, see "[Self-hosted runner groups](/rest/reference/actions#self-hosted-runner-groups)."

Runners are automatically assigned to the default group when created, and can only be members of one group at a time. 您可以将运行器从默认组移到您创建的任何组。

创建组时，必须选择一个策略，用于定义哪些存储库{% ifversion restrict-groups-to-workflows %} 和工作流程{% endif %} 有权访问运行器组。

{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. 在“Runner groups（运行器组）”部分，单击 **New runner group（新运行器组）**。
1. 为运行器组输入名称。
 {% data reusables.actions.runner-group-assign-policy-repo %}
{% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} 组织拥有的运行器组无法访问企业中其他组织的工作流程；相反，您必须创建企业拥有的运行器组。{% endif %}
{% data reusables.actions.create-runner-group %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. 在 {% ifversion ghes or ghae %}“Runners（运行器）”{% endif %} 下，单击 **Add new（新增）**，然后单击 **New group（新建组）**。

    ![添加运行器组](/assets/images/help/settings/actions-org-add-runner-group.png)
1. 输入运行程序组的名称，并分配仓库访问策略。

   您可以将运行器组配置为可供特定的存储库列表或组织中的所有存储库访问。{% ifversion ghec or ghes %} 默认情况下，只有私有存储库可以访问运行器组中的运行器，但您可以覆盖此操作。 如果配置企业共享的组织的运行组，则不能覆盖此设置。{% endif %}

   ![添加运行器组选项](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. 单击 **Save group（保存组）**创建组并应用策略。
{% endif %}