---
title: Informationen zur Sichtbarkeit eines Repositorys
intro: 'Du kannst einschränken, wer Zugriff auf ein Repository hat, indem Du die Sichtbarkeit eines Repositorys auswählst: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}öffentlich, intern oder privat{% else %}öffentlich oder privat{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zur Sichtbarkeit eines Repositorys

Wenn Du ein Repository erstellst, kannst Du es öffentlich oder privat machen. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Wenn Du das Repository in einer Organisation erstellst{% if currentVersion == "free-pro-team@latest" %} die sich im Besitz eines Enterprise-Kontos befindet{% endif %}, kannst Du das Repository auch intern machen.{% endif %}

{% if currentVersion != "free-pro-team@latest" %}If {% data variables.product.product_location_enterprise %} is not in private mode or behind a firewall, p{% else %}P{% endif %}ublic repositories are accessible to everyone on the internet.{% if currentVersion != "free-pro-team@latest" %} Otherwise, public repositories are available to everyone using {% data variables.product.product_location_enterprise %}, including outside collaborators.{% endif %} Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, [certain organization members](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization). {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Interne Repositorys sind für {% if currentVersion == "free-pro-team@latest" %}Mitglieder Deines Enterprise-Kontos{% else %}Mitglieder einer beliebigen Organisation auf Deiner Instanz{% endif %} zugänglich. Weitere Informationen findest Du unter "[Über interne Repositorys](#about-internal-repositories)."{% endif %}

Organisationsinhaber haben immer Zugriff auf jedes Repository, das in einer Organisation erstellt wurde. Weitere Informationen findest Du unter„[Berechtigungsebenen für die Repositorys einer Organisation](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization).“

Personen mit Administratorberechtigungen für ein Repository können die Sichtbarkeit eines vorhandenen Repositorys ändern. Weitere Informationen findest Du unter „[Sichtbarkeit eines Repositorys festlegen](/github/administering-a-repository/setting-repository-visibility).“

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Informationen zu internen Repositorys

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %} Weitere Informationen zu innersource findest Du im Whitepaper von {% data variables.product.prodname_dotcom %} „[Eine Einführung zu innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

Alle {% if currentVersion == "free-pro-team@latest" %}Unternehmensmitglieder{% else %}Organisationsmitglieder{% endif %} haben Leseberechtigung auf das interne Repository, aber interne Repositorys sind nicht sichtbar für Personen{% if currentVersion == "free-pro-team@latest" %} außerhalb des Enterprise-Kontos{% else %}, die keine Mitglieder einer Organisation sind{% endif %}, einschließlich externer Mitarbeiter auf Organisations-Repositorys. Weitere Informationen findest Du unter {% if currentVersion == "free-pro-team@latest" %}„[Rollen für ein Enterprise-Konto](/articles/roles-for-an-enterprise-account#enterprise-members)" und {% endif %}„[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization).“

{% data reusables.repositories.internal-repo-default %}
Wenn ein Benutzer entfernt wird von

{% if currentVersion == "free-pro-team@latest" %}einem Enterprise-Konto{% else %}allen Organisationen auf der Instanz{% endif %}, werden die Forks dieses Benutzers auf den internen Repositorys automatisch entfernt.
{% endif %}
