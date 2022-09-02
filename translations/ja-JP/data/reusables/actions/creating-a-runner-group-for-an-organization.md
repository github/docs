{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

All organizations have a single default runner group. Organizations within an enterprise account can create additional groups. Organization の管理者は、個々のリポジトリにランナーグループへのアクセスを許可できます。 For information about how to create a runner group with the REST API, see "[Self-hosted runner groups](/rest/reference/actions#self-hosted-runner-groups)."

Runners are automatically assigned to the default group when created, and can only be members of one group at a time. ランナーはデフォルトグループから作成した任意のグループに移動できます。

When creating a group, you must choose a policy that defines which repositories{% ifversion restrict-groups-to-workflows %} and workflows{% endif %} have access to the runner group.

{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. In the "Runner groups" section, click **New runner group**.
1. Enter a name for your runner group.
 {% data reusables.actions.runner-group-assign-policy-repo %}
{% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.{% endif %}
{% data reusables.actions.create-runner-group %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Under {% ifversion ghes or ghae %}"Runners"{% endif %}, click **Add new**, and then **New group**.

    ![新しいランナーを追加](/assets/images/help/settings/actions-org-add-runner-group.png)
1. ランナーグループの名前を入力し、リポジトリアクセスのポリシーを割り当てます。

   ランナーグループを、特定のリポジトリのリスト、もしくはEnterprise内のすべてのリポジトリからアクセスできるように設定できます。{% ifversion ghec or ghes %}デフォルトでは、プライベートリポジトリのみがランナーグループ内のランナーにアクセスできますが、これは上書きできます。 この設定は、Enterpriseによって共有されているOrganizationのランナーグループを設定している場合には上書きできません。{% endif %}

   ![ランナーグループのオプションを追加](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. [**Save group**] をクリックしてグループを作成し、ポリシーを適用します。
{% endif %}