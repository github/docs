---
title: Repositoryrollen für eine Organisation
intro: Du kannst den Zugriff auf jedes Repository in deiner Organisation durch Zuweisung präziser Berechtigungsstufen anpassen, sodass die Benutzer*innen Zugriff auf die Features und Aufgaben haben, die sie benötigen.
miniTocMaxHeadingLevel: 3
redirect_from:
- /articles/repository-permission-levels-for-an-organization-early-access-program
- /articles/repository-permission-levels-for-an-organization
- /github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization
- /organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Repository roles
ms.openlocfilehash: dbb5075dfc57e01e0658138b65d6231fb12f1071
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147526702"
---
## Repositoryrollen für Organisationen

Du kannst Organisationsmitgliedern, externen Mitarbeiter*innen und Teams unterschiedliche Zugriffsberechtigungen auf die Repositorys einer Organisation erteilen, indem du ihnen Rollen zuweist. Wähle die Rolle aus, die am besten zur jeweiligen Benutzer- oder Teamfunktion innerhalb deines Projekts passt, und achte darauf, den Benutzer*innen nicht mehr als den notwendigen Zugriff auf ein Projekt zu geben.

Die Rollen für ein Organisationsrepository, von der Rolle mit den geringsten Zugriffsberechtigungen hin zur Rolle mit den umfangreichsten Berechtigungen, sind:
- **Read** (Lesen): Diese Ebene wird für Personen empfohlen, die nicht zum Code beitragen und sich das Projekt nur ansehen oder darüber sprechen möchten
- **Triage**: Diese Ebene wird für Mitwirkende empfohlen, die proaktiv Issues und Pull Requests verwalten müssen, ohne dafür Schreibzugriff zu benötigen
- **Write** (Schreiben): Diese Ebene wird für Mitwirkende empfohlen, die Änderungen aktiv in das Repository pushen
- **Maintain** (Verwalten): Diese Ebene wird für Projektmanager empfohlen, die das Repository ohne Zugriff auf vertrauliche oder destruktive Aktionen verwalten müssen
- **Admin**: Diese Rolle wird für Personen empfohlen, die vollständigen Zugriff auf das Projekt benötigen, einschließlich vertraulicher und destruktiver Aktionen wie das Verwalten der Sicherheit oder das Löschen eines Repositorys

{% ifversion fpt %} Wenn deine Organisation {% data variables.product.prodname_ghe_cloud %} verwendet, kannst du benutzerdefinierte Repositoryrollen erstellen. Weitere Informationen findest du unter [Verwalten von benutzerdefinierten Repositoryrollen für eine Organisation](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.
{% elsif ghec or ghes > 3.4 or ghae-issue-6271 %} Du kannst benutzerdefinierte Repositoryrollen erstellen. Weitere Informationen findest du unter [Verwalten benutzerdefinierter Repositoryrollen für eine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{% endif %}

Organisationsinhaber können Basis-Berechtigungen festlegen, die für alle Mitglieder einer Organisation gelten, wenn sie auf eines der Repositorys der Organisation zugreifen. Weitere Informationen findest du unter [Festlegen von Basisberechtigungen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions).

Organisationsinhaber können den Zugriff auf bestimmte Einstellungen und Aktionen innerhalb ihrer Organisation noch weiter einschränken. Weitere Informationen zu Optionen für bestimmte Einstellungen findest du unter [Verwalten von Organisationseinstellungen](/articles/managing-organization-settings).

Neben der Berechtigung zum Verwalten der organisationsweiten Einstellungen haben Organisationsinhaber auch Administratorzugriff auf jedes Repository ihrer Organisation. Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

{% warning %}

**Warnung:** Wenn einem Repository ein Deployment-Schlüssel hinzugefügt wird, kann jede Person, die über den privaten Schlüssel verfügt, in Abhängigkeit der Schlüsseleinstellungen aus dem Repository lesen bzw. in das Repository schreiben, selbst wenn diese Person später aus der Organisation entfernt wird.

{% endwarning %}

## Berechtigungen für jede Rolle

{% ifversion fpt %} Einige der unten aufgeführten Features sind auf Organisationen beschränkt, die {% data variables.product.prodname_ghe_cloud %} verwenden. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghes or ghec %} {% note %}

**Hinweis:** Die Rollen, die für die Verwendung von Sicherheitsfeatures erforderlich sind, werden unten in „[Zugriffsanforderungen für Sicherheitsfeatures](#access-requirements-for-security-features)“ aufgeführt.

{% endnote %} {% endif %}

| Repository-Aktion | Lesen | Eingrenzung | Schreiben | Verwalten | Administrator |
|:---|:---:|:---:|:---:|:---:|:---:|
| Verwalten des Zugriffs von [Einzelpersonen](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository), [Teams](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository) und [externen Mitarbeitern](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization) auf das Repository | | | | | **✔️** |
| Pull (Abrufen) aus den zugewiesenen Repositorys der Person oder des Teams | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Erstellen eines Forks des zugewiesenen Repositorys der Person oder des Teams | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Bearbeiten und Löschen eigener Kommentare | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Eröffnen von Issues | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Schließen der selbst eröffneten Issues | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Erneutes Eröffnen von selbst geschlossenen Issues | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Issues zugewiesen erhalten | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Senden von Pull Requests aus Forks der dem Team zugewiesenen Repositorys | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Absenden von Reviews zu Pull Requests | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Anzeigen veröffentlichter Releases | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Anzeigen der [GitHub Actions-Workflowausführungen](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| Bearbeiten von Wikis in öffentlichen Repositorys | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| Bearbeiten von Wikis in privaten Repositorys | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [Melden von missbräuchlichen oder Spaminhalten](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| Anwenden/Schließen von Bezeichnungen | | **✔️** | **✔️** | **✔️** | **✔️** |
| Erstellen, Bearbeiten, Löschen von Bezeichnungen | | | **✔️** | **✔️** | **✔️** |
| Schließen, erneutes Eröffnen und Zuweisen aller Issues und Pull Requests | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Aktivieren und Deaktivieren der automatischen Zusammenführung für einen Pull Request](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) | | | **✔️** | **✔️** | **✔️** |
| Anwenden von Meilensteinen |  | **✔️** | **✔️** | **✔️** | **✔️** |
| Markieren von [Duplikaten von Issues und Pull Requests](/articles/about-duplicate-issues-and-pull-requests)| | **✔️** | **✔️** | **✔️** | **✔️** |
| Anfordern von [Pull-Request-Reviews](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) | | **✔️** | **✔️** | **✔️** | **✔️** |
| Zusammenführen eines [Pull Requests](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) | | | **✔️** | **✔️** | **✔️** |
| Push (Schreiben) in die zugewiesenen Repositorys der Person oder des Teams | | | **✔️** | **✔️** | **✔️** |
| Bearbeiten und Löschen der Kommentare beliebiger Benutzer zu Commits, Pull Requests und Issues | | | **✔️** | **✔️** | **✔️** |
| [Ausblenden der Kommentare beliebiger Benutzer](/communities/moderating-comments-and-conversations/managing-disruptive-comments) | | | **✔️** | **✔️** | **✔️** |
| [Blockieren von Konversationen](/communities/moderating-comments-and-conversations/locking-conversations) | | | **✔️** | **✔️** | **✔️** |
| Übertragen von Issues (ausführliche Informationen findest du unter [Übertragen eines Issues an ein anderes Repository](/articles/transferring-an-issue-to-another-repository)) |  | | **✔️** | **✔️** | **✔️** |
| [Agieren als designierter Codeinhaber eines Repositorys](/articles/about-code-owners) | | | **✔️** | **✔️** | **✔️** |
| [Markieren eines Pull-Request-Entwurfs als bereit für den Review](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| [Konvertieren eines Pull Requests in einen Entwurf](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| Absenden von Reviews, die sich auf die Merge-Fähigkeit eines Pull Request auswirken | | | **✔️** | **✔️** | **✔️** |
| [Anwenden vorgeschlagener Änderungen](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) auf Pull Requests | | | **✔️** | **✔️** | **✔️** |
| Erstellen von [Statusüberprüfungen](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Erstellen, Bearbeiten, Ausführen, Erneutes Ausführen und Abbrechen von [GitHub Actions-Workflows](/actions/automating-your-workflow-with-github-actions/) | | | **✔️** | **✔️** | **✔️** |{% endif %}
| Erstellen und Bearbeiten von Releases | | | **✔️** | **✔️** | **✔️** |
| Anzeigen von Release-Entwürfen | | | **✔️** | **✔️** | **✔️** |
| Bearbeiten von Repository-Beschreibungen | | | | **✔️** | **✔️** |{% ifversion fpt or ghae or ghec %}
| [Anzeigen und Installieren von Paketen](/packages/publishing-and-managing-packages) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Veröffentlichen von Paketen](/packages/publishing-and-managing-packages/publishing-a-package) | | | **✔️** | **✔️** | **✔️** |
| [Löschen und Wiederherstellen von Paketen](/packages/learn-github-packages/deleting-and-restoring-a-package) | | |  |  | **✔️** | {% endif %}
| Verwalten von [Themen](/articles/classifying-your-repository-with-topics) | | | | **✔️** | **✔️** |
| Aktivieren von Wikis und Einschränken der Wiki-Editoren | | | | **✔️** | **✔️** |
| Aktivieren von Projektboards | | | | **✔️** | **✔️** |
| Konfigurieren von [Pull-Request-Merges](/articles/configuring-pull-request-merges) | | | | **✔️** | **✔️** |
| Konfigurieren [einer Veröffentlichungsquelle für {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-github-pages) | | | | **✔️** | **✔️** |
| [Verwalten von Branchschutzregeln](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) | | | | | **✔️** |
| [Pushen an geschützte Branches](/articles/about-protected-branches) | | | | **✔️** | **✔️** |
| Zusammenführen von Pull Requests in geschützten Branches auch ohne genehmigende Reviews | | | | | **✔️** |{% ifversion fpt or ghes > 3.4 or ghae-issue-6337 or ghec %}
| Erstellen von Tags, die einer [Tagschutzregel](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) entsprechen | | | | **✔️** | **✔️** |
| Löschen von Tags, die einer [Tagschutzregel](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules) entsprechen | | | | | **✔️** |{% endif %}
| [Erstellen und Bearbeiten von sozialen Tickets für Repositorys](/articles/customizing-your-repositorys-social-media-preview) | | | | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| Einschränken [von Interaktionen in einem Repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)| | | | **✔️** | **✔️** |{% endif %}
| Löschen eines Issues (siehe „[Löschen eines Issues](/articles/deleting-an-issue)“) | | | | | **✔️** |
| [Definieren der Codebesitzer eines Repositorys](/articles/about-code-owners) | | | | | **✔️** |
| Hinzufügen eines Repositorys zu einem Team (siehe „[Verwalten des Teamzugriffs auf ein Organisationsrepository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#giving-a-team-access-to-a-repository)“) | | | | | **✔️** |
| [Verwalten des Zugriffs externer Mitarbeiter auf ein Repository](/articles/adding-outside-collaborators-to-repositories-in-your-organization) | | | | | **✔️** |
| [Ändern der Sichtbarkeit eines Repositorys](/articles/restricting-repository-visibility-changes-in-your-organization) | | | | | **✔️** |
| Erstellen eines Repositorys als Vorlage (siehe „[Erstellen eines Vorlagenrepositorys](/articles/creating-a-template-repository)“) | | | | | **✔️** |
| Ändern der Einstellungen eines Repositorys | | | | | **✔️** |
| Verwalten des Team- und Mitarbeiterzugriffs auf ein Repository | | | | | **✔️** |
| Bearbeiten des Standardbranches eines Repositorys | | | | | **✔️** |
| Umbenennen des Standardbranches eines Repositorys (siehe „[Umbenennen eines Branches](/github/administering-a-repository/renaming-a-branch)“) | | | | | **✔️** |
| Umbenennen eines anderen Branches als des Standardbranches des Repositorys (siehe „[Umbenennen eines Branches](/github/administering-a-repository/renaming-a-branch)“) | | | **✔️** | **✔️** | **✔️** |
| Verwalten von Webhooks und Bereitstellen von Schlüsseln | | | | | **✔️** |{% ifversion fpt or ghec %}
| [Verwalten von Datenverwendungseinstellungen für dein privates Repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) | | | | | **✔️** |{% endif %}
| [Verwalten der Forking-Richtlinie für ein Repository](/github/administering-a-repository/managing-the-forking-policy-for-your-repository) | | | | | **✔️** |
| [Übertragen von Repositorys auf die Organisation](/articles/restricting-repository-creation-in-your-organization) | | | | | **✔️** |
| [Löschen oder Übertragen von Repositorys aus der Organisation](/articles/setting-permissions-for-deleting-or-transferring-repositories) | | | | | **✔️** |
| [Archivieren von Repositorys](/articles/about-archiving-repositories) | | | | | **✔️** |{% ifversion fpt or ghec %}
| Anzeigen einer Sponsoringschaltfläche (siehe [Anzeigen einer Sponsoringschaltfläche in deinem Repository](/articles/displaying-a-sponsor-button-in-your-repository)) | | | | | **✔️** |{% endif %}
| Erstellen von Autolinkverweisen zu externen Ressourcen, z. B. Jira oder Zendesk (siehe „[Automatische Verlinkungen von externen Ressourcen konfigurieren](/articles/configuring-autolinks-to-reference-external-resources)“) | | | | | **✔️** |{% ifversion discussions %}
| [Aktivieren von {% data variables.product.prodname_discussions %}](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) in einem Repository | | | | **✔️** | **✔️** |
| [Erstellen und Bearbeiten von Kategorien](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) für {% data variables.product.prodname_discussions %} | | | | **✔️** | **✔️** |
| [Verschieben einer Diskussion in eine andere Kategorie](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Übertragen einer Diskussion](/discussions/managing-discussions-for-your-community/managing-discussions) in ein neues Repository| | | **✔️** | **✔️** | **✔️** |
| [Verwalten von angehefteten Diskussionen](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Massenkonvertieren von Issues in Diskussionen](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [Sperren und Entsperren von Diskussionen](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Individuelles Konvertieren von Issues in Diskussionen](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [Erstellen neuer Diskussionen und Kommentieren vorhandener Diskussionen](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Löschen einer Diskussion](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion) | | **✔️** | | **✔️** | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| Erstellen von [Codespaces](/codespaces/about-codespaces) | | | **✔️** | **✔️** | **✔️** |{% endif %}

### Zugriffsanforderungen für Sicherheitsfeatures

In diesem Abschnitt findest du den Zugriff, der für Sicherheitsfeatures erforderlich ist, z. B. {% data variables.product.prodname_advanced_security %}-Features.

| Repository-Aktion | Lesen | Eingrenzung | Schreiben | Verwalten | Administrator |
|:---|:---:|:---:|:---:|:---:|:---:| 
| Empfangen von [{% data variables.product.prodname_dependabot_alerts %} für unsichere Abhängigkeiten](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) in einem Repository | | | | | **✔️** |
| [Schließen von {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository) | | | | | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [Festlegen zusätzlicher Personen oder Teams zum Empfangen von Sicherheitswarnungen](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| Erstellen von [Sicherheitsempfehlungen](/code-security/security-advisories/about-github-security-advisories) | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %} <!--Not available for FPT-->
| Verwalten des Zugriffs auf {% data variables.product.prodname_GH_advanced_security %}-Features (siehe [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)) | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}<!--Set at site-level for GHES and GHAE-->
| [Aktivieren des Abhängigkeitsdiagramms](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository) für ein privates Repository | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [Anzeigen von Abhängigkeitsüberprüfungen](/code-security/supply-chain-security/about-dependency-review) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| [Anzeigen von {% data variables.product.prodname_code_scanning %}-Warnungen für Pull Requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [Auflisten, Schließen und Löschen von {% data variables.product.prodname_code_scanning %}-Warnungen](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository) | | | **✔️** | **✔️** | **✔️** |
| [Anzeigen von {% data variables.product.prodname_secret_scanning %}-Warnungen in einem Repository](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [Auflösen, Widerrufen oder erneutes Öffnen von {% data variables.product.prodname_secret_scanning %}-Warnungen](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [Festlegen zusätzlicher Personen oder Teams zum Empfangen von {% data variables.product.prodname_secret_scanning %}-Warnungen](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) in Repositorys | | | | | **✔️** |{% endif %}

[1] Repositoryautoren und -verwalter können nur Warnungsinformationen für ihre eigenen Commits anzeigen.

## Weiterführende Themen

- [Verwalten des Zugriffs auf die Repositorys deiner Organisation](/articles/managing-access-to-your-organization-s-repositories)
- [Externe Mitarbeiter zu Organisations-Repositorys hinzufügen](/articles/adding-outside-collaborators-to-repositories-in-your-organization)
- [Projektboardberechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization)
