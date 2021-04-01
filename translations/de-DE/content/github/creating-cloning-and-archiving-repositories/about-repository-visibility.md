---
title: Informationen zur Sichtbarkeit eines Repositorys
intro: 'You can restrict who has access to a repository by choosing a repository''s visibility: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}public, internal, or private{% elsif currentVersion == "github-ae@latest"  %}private or internal{% else %} public or private{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

### Informationen zur Sichtbarkeit eines Repositorys

{% if currentVersion == "github-ae@latest" %}When you create a repository owned by your user account, the repository is always private. When you create a repository owned by an organization, you can choose to make the repository private or internal.{% else %}When you create a repository, you can choose to make the repository public or private.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} If you're creating the repository in an organization{% if currentVersion == "free-pro-team@latest" %} that is owned by an enterprise account{% endif %}, you can also choose to make the repository internal.{% endif %}{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
If
{% data variables.product.product_location %} is not in private mode or behind a firewall, public repositories are accessible to everyone on the internet. Otherwise, public repositories are available to everyone using {% data variables.product.product_location %}, including outside collaborators. Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members. {% if currentVersion ver_gt "enterprise-server@2.19" %} Internal repositories are accessible to enterprise members. Weitere Informationen findest Du unter "[Über interne Repositorys](#about-internal-repositories)."{% endif %}
{% elsif currentVersion == "github-ae@latest" %}
Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members. Internal repositories are accessible to all enterprise members. For more information, see "[About internal repositories](#about-internal-repositories)."
{% else %}
Public repositories are accessible to everyone on the internet. Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members. Internal repositories are accessible to enterprise members. For more information, see "[About internal repositories](#about-internal-repositories)."
{% endif %}

Organisationsinhaber haben immer Zugriff auf jedes Repository, das in einer Organisation erstellt wurde. Weitere Informationen findest Du unter„[Berechtigungsebenen für die Repositorys einer Organisation](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization).“

Personen mit Administratorberechtigungen für ein Repository können die Sichtbarkeit eines vorhandenen Repositorys ändern. Weitere Informationen findest Du unter „[Sichtbarkeit eines Repositorys festlegen](/github/administering-a-repository/setting-repository-visibility).“

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Informationen zu internen Repositorys

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %} Weitere Informationen zu innersource findest Du im Whitepaper von {% data variables.product.prodname_dotcom %} „[Eine Einführung zu innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

All enterprise members have read permissions to the internal repository, but internal repositories are not visible to people {% if currentVersion == "free-pro-team@latest" %}outside of the enterprise{% else %}who are not members of an organization{% endif %}, including outside collaborators on organization repositories. For more information, see {% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}"[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" and {% endif %}"[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."

{% data reusables.repositories.internal-repo-default %}

If a user is removed from all organizations owned by the enterprise, that user's forks of internal repositories are removed automatically.
{% endif %}
