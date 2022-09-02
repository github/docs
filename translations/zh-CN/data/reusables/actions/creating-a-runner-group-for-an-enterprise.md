{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

Enterprises can add their runners to groups for access management. Enterprises can create groups of runners that are accessible to specific organizations in the enterprise account{% ifversion restrict-groups-to-workflows %} or to specific workflows{% endif %}. 然后，组织所有者可以为企业运行器组分配更细致的存储库{% ifversion restrict-groups-to-workflows %} 和工作流程{% endif %} 访问策略。 For information about how to create a runner group with the REST API, see the enterprise endpoints in the [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runner-groups).

Runners are automatically assigned to the default group when created, and can only be members of one group at a time. 您可以在注册过程中将运行器分配给特定组，也可以稍后将运行器从默认组移到自定义组。

创建组时，必须选择用于定义哪些组织有权访问运行器组的策略。

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. 要为组织访问选择策略，请选择 **Organization access（组织访问）**下拉列表，然后单击一个策略。 您可以将运行器组配置为可供特定组织列表或企业中的所有组织访问。{% ifversion ghes %} 默认情况下，只有私有存储库可以访问运行器组中的运行器，但您可以覆盖此操作。{% endif %}

   {%- ifversion ghec or ghes %}

   ![添加运行器组选项](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
   {%- elsif ghae %}

   ![添加运行器组选项](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png)
   {%- endif %}
{% data reusables.actions.runner-group-assign-policy-workflow %}
1. 单击 **Save group（保存组）**创建组并应用策略。

