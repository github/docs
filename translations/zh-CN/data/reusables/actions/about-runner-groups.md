{% ifversion fpt %}
{% note %}

**Note:** All organizations have a single default runner group. Only enterprise accounts and organizations owned by enterprise accounts can create and manage additional runner groups.

{% endnote %}

Runner groups are used to control access to runners. 组织管理员可以配置访问策略，用以控制组织中的哪些组织可以访问运行器组。

If you use {% data variables.product.prodname_ghe_cloud %}, you can create additional runner groups; enterprise admins can configure access policies that control which organizations in an enterprise have access to the runner group; and organization admins can assign additional granular repository access policies to the enterprise runner group.
{% endif -%}
{% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

新运行器在创建时，将自动分配给默认组。 运行器每次只能在一个组中。 您可以将运行器从默认组移到另一组。 For more information, see "[Moving a runner to a group](#moving-a-runner-to-a-group)."

{% endif %}