---
title: Berechtigungsebenen für ein Repository eines Benutzerkontos
intro: 'Ein Repository, das einem Benutzerkonto gehört, hat zwei Berechtigungsebenen: den *Repository-Inhaber* und die *Mitarbeiter*.'
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Tipp:** Wenn Du einen feiner abgestuften Lese-/Schreibzugriff auf ein Repository benötigst, das Deinem Benutzerkonto gehört, kannst Du das Repository an eine Organisation übertragen. Weitere Informationen findest Du unter „[Ein Repository übertragen](/articles/transferring-a-repository).“

{% endtip %}

#### Inhaberzugriff auf ein Repository eines Benutzerkontos

Der Repository-Inhaber besitzt die vollständige Kontrolle über das Repository. Neben den Berechtigungen, die auch Repository-Mitarbeitern erteilt werden, stehen dem Repository-Inhaber zusätzlich folgende Möglichkeiten zur Verfügung:

- {% if currentVersion == "free-pro-team@latest" %}[Invite collaborators](/articles/inviting-collaborators-to-a-personal-repository){% else %}[Add collaborators](/articles/inviting-collaborators-to-a-personal-repository){% endif %}
- Change the visibility of the repository (from [public to private](/articles/making-a-public-repository-private), or from [private to public](/articles/making-a-private-repository-public)){% if currentVersion == "free-pro-team@latest" %}
- [Interaktionen mit einem Repository einschränken](/articles/limiting-interactions-with-your-repository){% endif %}
- Einen Pull Request auf einem geschützten Branch zusammenführen, selbst ohne genehmigende Reviews
- [Das Repository löschen](/articles/deleting-a-repository)
- [Manage a repository's topics](/articles/classifying-your-repository-with-topics){% if currentVersion == "free-pro-team@latest" %}
- Manage security and analysis settings. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)."{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [Enable the dependency graph](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository) for a private repository{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- Pakete löschen. Weitere Informationen findest Du unter „[Ein Paket löschen](/github/managing-packages-with-github-packages/deleting-a-package)."{% endif %}
- soziale Tickets für Repositorys erstellen und bearbeiten (siehe „[Social-Media-Vorschau Ihres Repositorys anpassen](/articles/customizing-your-repositorys-social-media-preview)“)
- das Repository in eine Vorlage umwandeln For more information, see "[Creating a template repository](/articles/creating-a-template-repository)."{% if currentVersion != "github-ae@latest" %}
- Receive [{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) in a repository.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- Dismiss {% data variables.product.prodname_dependabot_alerts %} in your repository. For more information, see "[Viewing and updating vulnerable dependencies in your repository](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)."
- [Manage data usage for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository){% endif %}
- [Codeinhaber für das Repository definieren](/articles/about-code-owners)
- [Archive repositories](/articles/about-archiving-repositories){% if currentVersion == "free-pro-team@latest" %}
- Sicherheitshinweise erstellen. Weitere Informationen findest Du unter „[ Über {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."
- eine Sponsorenschaltfläche anzeigen Weitere Informationen findest Du unter „[Sponsorenschaltfläche in Deinem Repository anzeigen](/articles/displaying-a-sponsor-button-in-your-repository)“{% endif %}

Bei einem Repository, das einem Benutzerkonto gehört, gibt es nur **einen Inhaber**. Diese Berechtigung kann nicht mit einem anderem Benutzerkonto geteilt werden. Informationen zur Übertragung der Repository-Inhaberschaft auf einen anderen Benutzer findest Du unter „[Ein Repository übertragen](/articles/how-to-transfer-a-repository).“

#### Mitarbeiterzugriff auf ein Repository eines Benutzerkontos

{% note %}

**Hinweis:** In einem privaten Repository können Repository-Inhaber Mitarbeitern nur Schreibzugriff gewähren. Mitarbeiter können nicht Nur-Lese-Zugriff auf Repositorys haben, die einem Benutzerkonto gehören.

{% endnote %}

Mitarbeiter haben folgende Möglichkeiten in persönlichen Repositorys:

- Etwas zum Repository pushen (schreiben), etwas vom Repository abrufen (lesen) und das Repository forken (kopieren)
- Kennzeichnungen und Meilensteine erstellen, anwenden und löschen
- Issues öffnen, schließen, erneut öffnen und zuweisen
- Kommentare zu Commits, Pull Requests und Issues bearbeiten und löschen
- Issues und Pull Requests als Duplikate markieren Weitere Informationen findest Du unter „[Informationen zu Duplikaten von Issues und Pull Requests](/articles/about-duplicate-issues-and-pull-requests)“
- Pull Requests öffnen, zusammenführen und schließen
- Vorgeschlagene Änderungen auf Pull Requests anwenden. Weitere Informationen findest Du unter „[Feedback in Deinen Pull Request aufnehmen](/articles/incorporating-feedback-in-your-pull-request).“
- Send pull requests from forks of the repository{% if currentVersion == "free-pro-team@latest" %}
- Pakete veröffentlichen, ansehen und installieren. Weitere Informationen findest Du unter „[Pakete veröffentlichen und verwalten](/github/managing-packages-with-github-packages/publishing-and-managing-packages)."{% endif %}
- Wikis erstellen und bearbeiten
- Erstellen und Bearbeiten von Releases. Weitere Informationen findest Du unter „[Releases in einem Repository verwalten](/github/administering-a-repository/managing-releases-in-a-repository).
- Sich selbst als Mitarbeiter aus dem Repository entfernen
- Einen Review zu einem Pull Request absenden, der seine Merge-Fähigkeit beeinflusst
- Als designierter Codeinhaber des Repositorys agieren. Weitere Informationen findest Du unter „[Informationen zu Codeinhabern](/articles/about-code-owners).“
- Eine Unterhaltung sperren. For more information, see "[Locking conversations](/articles/locking-conversations)."{% if currentVersion == "free-pro-team@latest" %}
- missbräuchliche Inhalte an den {% data variables.contact.contact_support %} melden Weitere Informationen findest Du unter „[Missbrauch oder Spam melden](/articles/reporting-abuse-or-spam)“.{% endif %}
- einen Issue in ein anderes Repository übertragen Weitere Informationen finden Sie unter „[Einen Issue in ein anderes Repository übertragen](/articles/transferring-an-issue-to-another-repository)“.

### Weiterführende Informationen

- „[Mitarbeiter in ein persönliches Repository einladen](/articles/inviting-collaborators-to-a-personal-repository)“
- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“
