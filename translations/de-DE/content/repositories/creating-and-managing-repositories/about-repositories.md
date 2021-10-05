---
title: Informationen zu Repositorys
intro: A repository contains all of your project's files and each file's revision history. You can discuss and manage your project's work within the repository.
redirect_from:
  - /articles/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repositories
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories
  - /github/creating-cloning-and-archiving-repositories/about-repository-visibility
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-visibility
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

## Informationen zu Repositorys

Du kannst Repositorys einzeln besitzen oder die Inhaberschaft an Repositorys mit anderen Personen in einer Organisation teilen.

Du kannst einschränken, wer Zugriff auf ein Repository hat, indem Du die Sichtbarkeit des Repositorys auswählst. Weitere Informationen findest Du unter „[Über Sichtbarkeit von Repositorys](#about-repository-visibility)."

Bei benutzereigenen Repositorys kannst du anderen Personen Mitarbeiterzugriff geben, damit sie an Deinem Projekt mitarbeiten können. Wenn ein Repository im Besitz einer Organisation ist, kannst Du den Mitgliedern der Organisation Zugriffsberechtigungen für die Mitarbeit in Deinem Repository erteilen. Weitere Informationen findest Du unter „[Berechtigungsebenen für ein Repository eines Benutzerkontos](/articles/permission-levels-for-a-user-account-repository/)“ und „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization/).“

{% ifversion fpt %}
Mit {% data variables.product.prodname_free_team %} für Benutzerkonten und Organisationen kannst Du mit einer unbegrenzten Anzahl von Mitarbeitern an unbegrenzten öffentlichen Repositorys mit einem vollen Funktionsumfang arbeiten oder an unbegrenzten privaten Repositorys mit einem begrenzten Funktionsumfang. Um erweiterte Werkzeuge für private Repositorys zu erhalten, kannst Du auf {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} oder{% data variables.product.prodname_ghe_cloud %} upgraden. {% data reusables.gated-features.more-info %}
{% else %}
Jede Person und Organisation kann unbegrenzte Repositorys besitzen und eine unbegrenzte Anzahl von Mitarbeitern in alle Repositorys einladen.
{% endif %}

You can use repositories to manage your work and collaborate with others.
- You can use issues to collect user feedback, report software bugs, and organize tasks you'd like to accomplish. For more information, see "[About issues](/github/managing-your-work-on-github/about-issues)."{% ifversion fpt %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- You can use pull requests to propose changes to a repository. Weitere Informationen findest Du unter „[Informationen zu Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests).“
- You can use project boards to organize and prioritize your issues and pull requests. Weitere Informationen findest Du unter „[Informationen zu Projektboards](/github/managing-your-work-on-github/about-project-boards).“

{% data reusables.repositories.repo-size-limit %}

## Informationen zur Sichtbarkeit eines Repositorys

You can restrict who has access to a repository by choosing a repository's visibility: {% ifversion fpt or ghes %}public, internal, or private{% elsif ghae %}private or internal{% else %} public or private{% endif %}.

{% ifversion ghae %}When you create a repository owned by your user account, the repository is always private. When you create a repository owned by an organization, you can choose to make the repository private or internal.{% else %}When you create a repository, you can choose to make the repository public or private.{% ifversion fpt or ghes %} If you're creating the repository in an organization{% ifversion fpt %} that is owned by an enterprise account{% endif %}, you can also choose to make the repository internal.{% endif %}{% endif %}

{% ifversion ghes %}
If {% data variables.product.product_location %} is not in private mode or behind a firewall, public repositories are accessible to everyone on the internet. Otherwise, public repositories are available to everyone using {% data variables.product.product_location %}, including outside collaborators. Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members. {% ifversion ghes %} Internal repositories are accessible to enterprise members. Weitere Informationen findest Du unter "[Über interne Repositorys](#about-internal-repositories)."{% endif %}
{% elsif ghae %}
Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members. Internal repositories are accessible to all enterprise members. For more information, see "[About internal repositories](#about-internal-repositories)."
{% else %}
Public repositories are accessible to everyone on the internet. Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members. Internal repositories are accessible to enterprise members. For more information, see "[About internal repositories](#about-internal-repositories)."
{% endif %}

Organisationsinhaber haben immer Zugriff auf jedes Repository, das in einer Organisation erstellt wurde. Weitere Informationen findest Du unter„[Berechtigungsebenen für die Repositorys einer Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization).“

Personen mit Administratorberechtigungen für ein Repository können die Sichtbarkeit eines vorhandenen Repositorys ändern. Weitere Informationen findest Du unter „[Sichtbarkeit eines Repositorys festlegen](/github/administering-a-repository/setting-repository-visibility).“

{% ifversion fpt or ghae or ghes %}
## Informationen zu internen Repositorys

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %} Weitere Informationen zu innersource findest Du im Whitepaper von {% data variables.product.prodname_dotcom %} „[Eine Einführung zu innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)."

All enterprise members have read permissions to the internal repository, but internal repositories are not visible to people {% ifversion fpt %}outside of the enterprise{% else %}who are not members of an organization{% endif %}, including outside collaborators on organization repositories. For more information, see {% ifversion fpt or ghae %}"[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" and {% endif %}"[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."

{% data reusables.repositories.internal-repo-default %}

If a user is removed from all organizations owned by the enterprise, that user's forks of internal repositories are removed automatically.
{% endif %}

## Begrenzungen für die Anzeige von Inhalten und Diffs in einem Repository

Bestimmte Arten von Ressourcen können ziemlich groß sein, wodurch ihre Verarbeitung auf {% data variables.product.product_name %} sehr aufwendig ist. Daher werden Begrenzungen festgelegt, um sicherzustellen, dass Anforderungen in angemessener Zeit abgeschlossen werden.

Die meisten der nachfolgend genannten Begrenzungen gelten sowohl für {% data variables.product.product_name %} als auch für die API.

### Textbeschränkungen

Text files over **512 KB** are always displayed as plain text. Die Codesyntax ist nicht hervorgehoben, und Dateien mit Fließtext werden nicht in HTML umgewandelt (z. B. Markdown, AsciiDoc *etc.*).

Textdateien mit mehr als **5 MB** sind nur über ihre rohen URLs verfügbar, die über `{% data variables.product.raw_github_com %}` bereitgestellt werden, beispielsweise `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Klicke auf die Schaltfläche **Raw** (Roh), um die rohe URL einer Datei anzuzeigen.

### Diff-Beschränkungen

Da Diffs sehr groß werden können, gelten Diff-Beschränkungen für Commits, Pull Requests und Vergleichsansichten:

- In a pull request, no total diff may exceed *20,000 lines that you can load* or *1 MB* of raw diff data.
- No single file's diff may exceed *20,000 lines that you can load* or *500 KB* of raw diff data. *400 Zeilen* und *20 KB* werden automatisch für eine einzelne Datei geladen.
- The maximum number of files in a single diff is limited to *300*.
- Die Höchstzahl an darstellbaren Dateien (wie Grafiken, PDF- und GeoJSON-Dateien) in einer einzelnen Diff liegt bei *25*.

Einige Teile einer eingeschränkten Diff werden möglicherweise angezeigt, aber alles, was über die Begrenzung hinausgeht, wird nicht angezeigt.

### Commit-Listenbeschränkung

Die Vergleichsansicht und die Pull-Request-Seiten zeigen eine Liste mit Commits zwischen den `base`- und `head`-Revisionen. Diese Listen sind auf **250** Commits beschränkt. Wenn diese Grenze überschritten wird, gibt ein Hinweis an, dass weitere Commits vorhanden sind (aber sie werden nicht angezeigt).

## Weiterführende Informationen

- „[Ein neues Repository erstellen](/articles/creating-a-new-repository)“
- „[Mithilfe von Issues und Pull Requests zusammenarbeiten](/categories/collaborating-with-issues-and-pull-requests)“
- „[Ihre Arbeit auf {% data variables.product.prodname_dotcom %} verwalten](/categories/managing-your-work-on-github/)“
- „[Ein Repository verwalten](/categories/administering-a-repository)“
- „[Repository-Daten mit Diagrammen visualisieren](/categories/visualizing-repository-data-with-graphs/)“
- „[Informationen zu Wikis](/communities/documenting-your-project-with-wikis/about-wikis)“
- „[{% data variables.product.prodname_dotcom %}-Glossar](/articles/github-glossary)“
