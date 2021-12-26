---
title: リポジトリの可視性について
intro: 'リポジトリの可視性を選択することで、リポジトリにアクセスできるユーザを制限できます{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}（パブリック、内部、プライベート{% elsif currentVersion == "github-ae@latest"  %}{% else %}パブリックまたはプライベートなど）{% endif %}。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
redirect_from:
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
---

### リポジトリの可視性について

{% if currentVersion == "github-ae@latest" %} ユーザアカウント所有のリポジトリを作成すると、リポジトリは常にプライベートになります。 Organization 所有のリポジトリを作成するときに、プライベートリポジトリにするか内部リポジトリにするかを選択できます。{% else %}リポジトリを作成するときに、リポジトリをパブリックにするかプライベートにするかを選択できます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} Enterprise アカウントが所有する Organization {% if currentVersion == "free-pro-team@latest" %} でリポジトリを作成している場合は{% endif %}、リポジトリを内部にすることもできます。{% endif %}{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
If {% data variables.product.product_location %} is not in private mode or behind a firewall, public repositories are accessible to everyone on the internet. そうではない場合、外部のコラボレータを含め、{% data variables.product.product_location %} を使用するすべてのユーザがパブリックリポジトリを利用できます。 プライベートリポジトリには、自分、明示的にアクセスを共有するユーザ、および Organization リポジトリの場合は特定の Organization メンバーのみがアクセスできます。 {% if currentVersion ver_gt "enterprise-server@2.19" %} Enterprise メンバーは内部リポジトリにアクセスできます。 詳しい情報については、「[内部リポジトリについて](#about-internal-repositories)」を参照してください。{% endif %}
{% elsif currentVersion == "github-ae@latest" %}
プライベートリポジトリには、自分、明示的にアクセスを共有するユーザ、および Organization リポジトリの場合は特定の Organization メンバーのみがアクセスできます。 内部リポジトリには、すべての Enterprise メンバーがアクセスできます。 詳しい情報については、「[内部リポジトリについて](#about-internal-repositories)」を参照してください。
{% else %}
パブリックリポジトリには、インターネット上のすべてのユーザがアクセスできます。 プライベートリポジトリには、自分、明示的にアクセスを共有するユーザ、および Organization リポジトリの場合は特定の Organization メンバーのみがアクセスできます。 内部リポジトリには、Enterprise メンバーがアクセスできます。 詳しい情報については、「[内部リポジトリについて](#about-internal-repositories)」を参照してください。
{% endif %}

Organization のオーナーは、Organization 内で作成されたすべてのリポジトリにいつでもアクセスできます。 詳細は「[Organization のためのリポジトリ権限レベル](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)」を参照してください。

リポジトリの管理者権限を持つユーザは、既存のリポジトリの可視性を変更できます。 詳細は「[リポジトリの可視性を設定する](/github/administering-a-repository/setting-repository-visibility)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### インターナルリポジトリについて

{% note %}

**注釈:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %}インナーソースに関する詳しい情報については、{% data variables.product.prodname_dotcom %}のホワイトペーパー「[インナーソース入門](https://resources.github.com/whitepapers/introduction-to-innersource/)」を参照してください。

すべての Enterprise メンバーは内部リポジトリへの読み取り権限を持っていますが、内部リポジトリは、Organization リポジトリの外部のコラボレータを含む、Organization メンバーではない Enterprise 外{% else %}のユーザ {% if currentVersion == "free-pro-team@latest" %} には表示されません{% endif %}。 詳しい情報については、{% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}「[Enterprise アカウントのロール](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)」および{% endif %}「[Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)」を参照してください。

{% data reusables.repositories.internal-repo-default %}

Enterprise が所有するすべての Organization からユーザが削除されると、そのユーザの内部リポジトリのフォークは自動的に削除されます。
{% endif %}
