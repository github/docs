{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

Enterprises can add their runners to groups for access management. Enterprises can create groups of runners that are accessible to specific organizations in the enterprise account{% ifversion restrict-groups-to-workflows %} or to specific workflows{% endif %}. Organization owners can then assign additional granular repository{% ifversion restrict-groups-to-workflows %} or workflow{% endif %} access policies to the enterprise runner groups. For information about how to create a runner group with the REST API, see the enterprise endpoints in the [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runner-groups).

Runners are automatically assigned to the default group when created, and can only be members of one group at a time. 登録処理中にランナーを特定のグループに割り当てることも、後でランナーをデフォルトグループからカスタムグループに移動することもできます。

グループを作成するときは、ランナーグループにアクセスできる Organization を定義するポリシーを選択する必要があります。

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. To choose a policy for organization access, select the **Organization access** drop-down, and click a policy. You can configure a runner group to be accessible to a specific list of organizations, or all organizations in the enterprise.{% ifversion ghes %} By default, only private repositories can access runners in a runner group, but you can override this.{% endif %}

   {%- ifversion ghec or ghes %}

   ![ランナーグループのオプションを追加](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
   {%- elsif ghae %}

   ![ランナーグループのオプションを追加](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png)
   {%- endif %}
{% data reusables.actions.runner-group-assign-policy-workflow %}
1. [**Save group**] をクリックしてグループを作成し、ポリシーを適用します。

