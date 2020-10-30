---
title: Informationen zur Sichtbarkeit eines Repositorys
intro: 'You can restrict who has access to a repository by choosing a repository''s visibility: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}public, internal, or private{% else %} public or private{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zur Sichtbarkeit eines Repositorys

Wenn Du ein Repository erstellst, kannst Du es öffentlich oder privat machen. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}If you're creating the repository in an organization{% if currentVersion == "free-pro-team@latest" %} that is owned by an enterprise account{% endif %}, you can also choose to make the repository internal.{% endif %}

{% if enterpriseServerVersions contains currentVersion %}If {% data variables.product.product_location_enterprise %} is not in private mode or behind a firewall, p{% else %}P{% endif %}ublic repositories are accessible to everyone on the internet.{% if enterpriseServerVersions contains currentVersion %} Otherwise, public repositories are available to everyone using {% data variables.product.product_location_enterprise %}, including outside collaborators.{% endif %} Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, [certain organization members](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization). {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Internal repositories are accessible to members of your enterprise. Weitere Informationen findest Du unter "[Über interne Repositorys](#about-internal-repositories)."{% endif %}

Organisationsinhaber haben immer Zugriff auf jedes Repository, das in einer Organisation erstellt wurde. Weitere Informationen findest Du unter„[Berechtigungsebenen für die Repositorys einer Organisation](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization).“

Personen mit Administratorberechtigungen für ein Repository können die Sichtbarkeit eines vorhandenen Repositorys ändern. Weitere Informationen findest Du unter „[Sichtbarkeit eines Repositorys festlegen](/github/administering-a-repository/setting-repository-visibility).“

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Informationen zu internen Repositorys

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %} Weitere Informationen zu innersource findest Du im Whitepaper von {% data variables.product.prodname_dotcom %} „[Eine Einführung zu innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

All {% if currentVersion == "free-pro-team@latest" %}enterprise members{% else %}organization members{% endif %} have read permissions to the internal repository, but internal repositories are not visible to people {% if currentVersion == "free-pro-team@latest" %}outside of the enterprise account{% else %}who are not members of an organization{% endif %}, including outside collaborators on organization repositories. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Roles for an enterprise account](/articles/roles-for-an-enterprise-account#enterprise-members)" and {% endif %}"[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."

{% data reusables.repositories.internal-repo-default %}
Wenn ein Benutzer entfernt wird von

{% if currentVersion == "free-pro-team@latest" %}an enterprise account{% else %}all organizations on the instance{% endif %}, that user's forks of internal repositories are removed automatically.
{% endif %}
