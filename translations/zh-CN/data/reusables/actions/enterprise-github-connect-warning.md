{% ifversion ghes > 3.2 or ghae-issue-4815 %}
{% note %}

**Note:** When a workflow uses an action by referencing the repository where the action is stored, {% data variables.product.prodname_actions %} will try to find the repository on your {% data variables.product.prodname_ghe_server %} instance first before falling back to {% data variables.product.prodname_dotcom_the_website %}. If a user has already created an organization and repository in your enterprise that matches an organization and repository name on {% data variables.product.prodname_dotcom %}, the repository on your enterprise will be used in place of the {% data variables.product.prodname_dotcom %} repository. For more information, see "[Automatic retirement of namespaces for actions accessed on {% data variables.product.prodname_dotcom_the_website%}](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)."

{% endnote %}
{% endif %}

{% ifversion ghes < 3.3 %}
{% note %}

**Note:** When a workflow uses an action by referencing the repository where the action is stored, {% data variables.product.prodname_actions %} will try to find the repository on your {% data variables.product.prodname_ghe_server %} instance first before falling back to {% data variables.product.prodname_dotcom_the_website %}. 如果用户在企业中创建的组织和仓库与 {% data variables.product.prodname_dotcom %} 上的组织和仓库名称匹配，则将使用企业上的仓库代替 {% data variables.product.prodname_dotcom %} 仓库。 恶意用户可能利用此行为在工作流程中运行代码。

{% endnote %}
{% endif %}
