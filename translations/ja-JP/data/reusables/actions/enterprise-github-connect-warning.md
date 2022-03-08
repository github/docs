{% ifversion ghes > 3.2 or ghae-issue-4815 %}
{% note %}

**Note:** When a workflow uses an action by referencing the repository where the action is stored, {% data variables.product.prodname_actions %} will try to find the repository on your {% data variables.product.prodname_ghe_server %} instance first before falling back to {% data variables.product.prodname_dotcom_the_website %}. If a user has already created an organization and repository in your enterprise that matches an organization and repository name on {% data variables.product.prodname_dotcom %}, the repository on your enterprise will be used in place of the {% data variables.product.prodname_dotcom %} repository. For more information, see "[Automatic retirement of namespaces for actions accessed on {% data variables.product.prodname_dotcom_the_website%}](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)."

{% endnote %}
{% endif %}

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**Note:** When a workflow uses an action by referencing the repository where the action is stored, {% data variables.product.prodname_actions %} will try to find the repository on your {% data variables.product.prodname_ghe_server %} instance first before falling back to {% data variables.product.prodname_dotcom_the_website %}. ユーザが、{% data variables.product.prodname_dotcom %}上のOrganization及びリポジトリの名前に一致するOrganizationとリポジトリをEnterprise上に作成すると、{% data variables.product.prodname_dotcom %}リポジトリのところではEnterprise上のリポジトリが使用されます。 悪意あるユーザは、ワークフローの一部としてコードを実行するのに、この動作を利用できるかもしれません。

{% endnote %}
{% endif %}
