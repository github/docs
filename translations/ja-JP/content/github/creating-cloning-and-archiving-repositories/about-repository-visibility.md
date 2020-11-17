---
title: リポジトリの可視性について
intro: 'You can restrict who has access to a repository by choosing a repository''s visibility: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}public, internal, or private{% elsif currentVersion == "github-ae@latest"  %}private or internal{% else %} public or private{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### リポジトリの可視性について

{% if currentVersion == "github-ae@latest" %}When you create a repository owned by your user account, the repository is always private. When you create a repository owned by an organization, you can choose to make the repository private or internal.{% else %}When you create a repository, you can choose to make the repository public or private.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} If you're creating the repository in an organization{% if currentVersion == "free-pro-team@latest" %} that is owned by an enterprise account{% endif %}, you can also choose to make the repository internal.{% endif %}{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
If
{% data variables.product.product_location %} is not in private mode or behind a firewall, public repositories are accessible to everyone on the internet. Otherwise, public repositories are available to everyone using {% data variables.product.product_location %}, including outside collaborators. Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members. {% if currentVersion ver_gt "enterprise-server@2.19" %} Internal repositories are accessible to enterprise members. 詳しい情報については、「[内部リポジトリについて](#about-internal-repositories)」を参照してください。{% endif %}
{% elsif currentVersion == "github-ae@latest" %}
Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members. Internal repositories are accessible to all enterprise members. For more information, see "[About internal repositories](#about-internal-repositories)."
{% else %}
Public repositories are accessible to everyone on the internet. Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members. Internal repositories are accessible to enterprise members. For more information, see "[About internal repositories](#about-internal-repositories)."
{% endif %}

Organization のオーナーは、Organization 内で作成されたすべてのリポジトリにいつでもアクセスできます。 詳細は「[Organization のリポジトリ権限レベル](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)」を参照してください。

リポジトリの管理者権限を持つユーザは、既存のリポジトリの可視性を変更できます。 詳細は「[リポジトリの可視性を設定する](/github/administering-a-repository/setting-repository-visibility)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### インターナルリポジトリについて

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %}インナーソースに関する詳しい情報については、{% data variables.product.prodname_dotcom %}のホワイトペーパー「[インナーソース入門](https://resources.github.com/whitepapers/introduction-to-innersource/)」を参照してください。

All enterprise members have read permissions to the internal repository, but internal repositories are not visible to people {% if currentVersion == "free-pro-team@latest" %}outside of the enterprise{% else %}who are not members of an organization{% endif %}, including outside collaborators on organization repositories. For more information, see {% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}"[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" and {% endif %}"[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."

{% data reusables.repositories.internal-repo-default %}

If a user is removed from all organizations owned by the enterprise, that user's forks of internal repositories are removed automatically.
{% endif %}
