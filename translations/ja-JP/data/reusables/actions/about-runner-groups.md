{% ifversion fpt %}
{% note %}

**ノート:** すべてのOrganizationは1つのデフォルトランナーグループを持ちます。 Enterpriseアカウント及びEnterpriseアカウントが所有するOrganizationだけが、追加のランナーグループを作成して管理できます。

{% endnote %}

ランナーグループは、ランナーへのアクセスを制御するために使われます。 Organization の管理者は、Organization 内のどのリポジトリがランナーグループにアクセスできるかを制御するアクセスポリシーを設定できます。

{% data variables.product.prodname_ghe_cloud %}を使っているなら、追加のランナーグループを作成できます。Enterpriseの管理者は、Enterprise内でランナーグループにアクセスできるOrganizationを制御するアクセスポリシーを設定でき、Organizationの管理者は、Enterpriseランナーグループに追加の詳細なリポジトリアクセスポリシーを割り当てる事ができます。
{% endif -%}
{% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

新しいランナーが作成されると、それらは自動的にデフォルトグループに割り当てられます。 ランナーは一度に1つのグループにのみ参加できます。 ランナーはデフォルトグループから別のグループに移動できます。 詳しい情報については「[ランナーのグループへの移動](#moving-a-runner-to-a-group)」を参照してください。

{% endif %}