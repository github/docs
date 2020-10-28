---
title: リポジトリの可視性について
intro: 'You can restrict who has access to a repository by choosing a repository''s visibility: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}public, internal, or private{% else %} public or private{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### リポジトリの可視性について

リポジトリを作成するときに、リポジトリをパブリックにするかプライベートにするかを選択できます。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}If you're creating the repository in an organization{% if currentVersion == "free-pro-team@latest" %} that is owned by an enterprise account{% endif %}, you can also choose to make the repository internal.{% endif %}

{% if enterpriseServerVersions contains currentVersion %}If {% data variables.product.product_location_enterprise %} is not in private mode or behind a firewall, p{% else %}P{% endif %}ublic repositories are accessible to everyone on the internet.{% if enterpriseServerVersions contains currentVersion %} Otherwise, public repositories are available to everyone using {% data variables.product.product_location_enterprise %}, including outside collaborators.{% endif %} Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, [certain organization members](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization). {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Internal repositories are accessible to members of your enterprise. 詳しい情報については、「[内部リポジトリについて](#about-internal-repositories)」を参照してください。{% endif %}

Organization のオーナーは、Organization 内で作成されたすべてのリポジトリにいつでもアクセスできます。 詳細は「[Organization のリポジトリ権限レベル](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)」を参照してください。

リポジトリの管理者権限を持つユーザは、既存のリポジトリの可視性を変更できます。 詳細は「[リポジトリの可視性を設定する](/github/administering-a-repository/setting-repository-visibility)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### インターナルリポジトリについて

{% note %}

**メモ:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %}インナーソースに関する詳しい情報については、{% data variables.product.prodname_dotcom %}のホワイトペーパー「[インナーソース入門](https://resources.github.com/whitepapers/introduction-to-innersource/)」を参照してください。

All {% if currentVersion == "free-pro-team@latest" %}enterprise members{% else %}organization members{% endif %} have read permissions to the internal repository, but internal repositories are not visible to people {% if currentVersion == "free-pro-team@latest" %}outside of the enterprise account{% else %}who are not members of an organization{% endif %}, including outside collaborators on organization repositories. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Roles for an enterprise account](/articles/roles-for-an-enterprise-account#enterprise-members)" and {% endif %}"[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."

{% data reusables.repositories.internal-repo-default %}
ユーザが

{% if currentVersion == "free-pro-team@latest" %}an enterprise account{% else %}all organizations on the instance{% endif %}, that user's forks of internal repositories are removed automatically.
{% endif %}
