---
title: リポジトリの可視性について
intro: 'リポジトリの可視性を選択することで、リポジトリにアクセスできるユーザを制限できます{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}（パブリック、内部、プライベート{% else %}パブリックまたはプライベートなど）{% endif %}。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### リポジトリの可視性について

リポジトリを作成するときに、リポジトリをパブリックにするかプライベートにするかを選択できます。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Enterprise アカウントが所有する Organization {% if currentVersion == "free-pro-team@latest" %}にリポジトリを作成する場合は{% endif %}、リポジトリを内部にすることもできます。{% endif %}

{% if currentVersion != "free-pro-team@latest" %}{% data variables.product.product_location_enterprise %} がプライベートモードでない場合、またはファイアウォールの内側にある場合、インターネット上のすべてのユーザがパブリック{% else %}{% endif %}リポジトリにアクセスできます。{% if currentVersion != "free-pro-team@latest" %}それ以外の場合、パブリックリポジトリは、外部のコラボレータを含め、{% data variables.product.product_location_enterprise %} を使用するすべてのユーザが利用できます。{% endif %}プライベートリポジトリには、自分、自分が明示的にアクセスを共有している人、そして Organization リポジトリの場合、[特定の Organization メンバー](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)のみがアクセスできます。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} 内部リポジトリは、Enterprise アカウントの {% if currentVersion == "free-pro-team@latest" %}メンバー、インスタンスの任意の Organization の{% else %}メンバーにアクセスできます{% endif %}。 詳しい情報については、「[内部リポジトリについて](#about-internal-repositories)」を参照してください。{% endif %}

Organization のオーナーは、Organization 内で作成されたすべてのリポジトリにいつでもアクセスできます。 詳細は「[Organization のリポジトリ権限レベル](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)」を参照してください。

リポジトリの管理者権限を持つユーザは、既存のリポジトリの可視性を変更できます。 詳細は「[リポジトリの可視性を設定する](/github/administering-a-repository/setting-repository-visibility)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### インターナルリポジトリについて

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %}インナーソースに関する詳しい情報については、{% data variables.product.prodname_dotcom %}のホワイトペーパー「[インナーソース入門](https://resources.github.com/whitepapers/introduction-to-innersource/)」を参照してください。

すべての{% if currentVersion == "free-pro-team@latest" %}Enterpriseのメンバー{% else %}Organizationのメンバー{% endif %}は、内部リポジトリの読み取り権限を持ちますが、内部リポジトリはOrganizationのリポジトリ上の外部のコラボレータを含め{% if currentVersion == "free-pro-team@latest" %}Enterpriseアカウント外の{% else %}Organizationのメンバーではない{% endif %}人々には見えません。 詳しい情報については、「{% if currentVersion == "free-pro-team@latest" %}[Enterprise アカウントのロール](/articles/roles-for-an-enterprise-account#enterprise-members)」および{% endif %}「[Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)」を参照してください。

{% data reusables.repositories.internal-repo-default %}
ユーザが

{% if currentVersion == "free-pro-team@latest" %}Enterprise アカウント{% else %}インスタンスのすべての Organization {% endif %}から削除されると、そのユーザの内部リポジトリのフォークは自動的に削除されます。
{% endif %}
