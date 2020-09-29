---
title: Automatisierte Sicherheitsupdates konfigurieren
intro: 'Du kannst automatisierte oder manuelle Pull Requests nutzen, um angreifbare Abhängigkeiten einfach zu aktualisieren.'
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
versions:
  free-pro-team: '*'
---

### Über automatisierte Sicherheitsupdates

Du kannst automatisierte Sicherheitsupdates für jedes Repository aktivieren, das Sicherheitswarnungen und das Abhängigkeitsdiagramm nutzt. Du kannst automatisierte Sicherheitsupdates für einzelne Repositorys oder für alle Repositorys Deines Benutzerkontos oder Deiner Organisation deaktivieren.

Wenn Du eine Sicherheitswarnung zu einer angreifbaren Abhängigkeit in Deinem Repository erhältst, kannst Du die Schwachstelle mit einem automatisierten Sicherheitsupdate in einem Pull Request beheben, das der Sicherheitsmeldung entspricht. Automatisierte Sicherheitsupdates sind für Repositorys mit Abhängigkeitsdiagramm verfügbar. Standardmäßig erstellt {% data variables.product.prodname_dotcom %} automatisch einen Pull Request in Deinem Repository, um die angreifbare Abhängigkeit auf die minimal erforderliche sichere Version zu aktualisieren, damit die Schwachstelle behoben ist. Du kannst automatische Pull Requests auch deaktivieren und manuell Pull Requests nur dann erstellen, wenn Du Abhängigkeiten aktualisieren möchtest.

Automatisierte Sicherheitsanfragen enthalten alles, was Du zum schnellen und sicheren Prüfen und Zusammenführen einer vorgeschlagenen Fehlerbehebung in Deinem Projekt benötigst. Dazu gehören auch Informationen zur Schwachstelle, wie Releasehinweise, Änderungsprotokolle und Commit-Details.

Automatisierte Sicherheitsupdates werden von 'Dependabot' im Auftrag von {% data variables.product.prodname_dotcom %} eröffnet. Die Dependabot-{% data variables.product.prodname_github_app %} wird automatisch auf jedem Repository installiert, in dem automatisierte Sicherheitsupdates aktiviert sind.

Personen mit Zugriff auf die Sicherheitswarnungen Deines Repositorys sehen einen Link zur relevanten Sicherheitswarnung, aber andere Personen mit Zugriff auf den Pull Request können nicht sehen, welche Schwachstelle der Pull Request behebt.

Wenn Du einen Pull Request zusammenführst, der ein automatisiertes Sicherheitsupdate enthält, wird die zugehörige Sicherheitswarnung für Dein Repository als behoben gekennzeichnet.

{% note %}

**Hinweis:** Automatisierte Sicherheitsupdates beheben nur Sicherheitslücken. Automatisierte Sicherheitsupdates werden nicht erstellt, um Schwachstellen in privaten Registries oder in Paketen zu beheben, die in privaten Repositorys gehostet werden.

{% endnote %}

### Unterstützte Repositorys

{% data variables.product.prodname_dotcom %} wird automatisierte Sicherheitsupdates automatisch für alle Repositorys aktivieren, die diese Voraussetzungen erfüllen.

{% note %}

**Hinweis**: Für Repositorys, die vor November 2019 erstellt wurden, hat {% data variables.product.prodname_dotcom %} automatisierte Sicherheitsupdates automatisch aktiviert, wenn das Repository die folgenden Voraussetzungen erfüllt und seit 23. Mai 2019 mindestens einen Push erhalten hat.

{% endnote %}

| Voraussetzung                                                                                                                                                                                                                       | Weitere Informationen                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Das Repository ist kein Fork                                                                                                                                                                                                        | „[Über Forks](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                                                                                                 |
| Das Repository ist nicht archiviert                                                                                                                                                                                                 | „[Repositorys archivieren](/github/creating-cloning-and-archiving-repositories/archiving-repositories)"                                                                                                                         |
| Das Repository ist öffentlich, oder es ist privat und Du hast Nur-Lesen-Analysen durch {% data variables.product.prodname_dotcom %}, Abhängigkeitsdiagramme und Sicherheitswarnungen in den Repository-Einstellungen aktiviert | „[Datennutzung für ein privates Repository zulassen](/github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository#opting-into-data-use-for-your-private-repository)" |
| Das Repository enthält eine Abhängigkeits-Manifestdatei aus einem Paket-Ökosystem, das {% data variables.product.prodname_dotcom %} unterstützt                                                                                | „[Unterstützte Paket-Ökosysteme](/github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on#supported-package-ecosystems)"                                                               |
| Automatisierte Sicherheitsupdates sind für dieses Repository nicht deaktiviert                                                                                                                                                      | „[Automatisierte Sicherheitsupdates für Dein Repository verwalten](#managing-automated-security-updates-for-your-repository)"                                                                                                   |
| Das Repository benutzt noch keine Integration für die Abhängigkeits-Verwaltung                                                                                                                                                      | „[Informationen zu Integrationen](/github/customizing-your-github-workflow/about-integrations)“                                                                                                                                 |

Wenn automatisierte Sicherheitsupdates für Dein Repository nicht aktiviert sind und Du weißt nicht warum, kannst Du [den Support kontaktieren](https://support.github.com/contact).

### Informationen zu Kompatibilitätsbewertungen

Automatisierte Sicherheitsupdates enthalten auch Kompatibilitätsbewertungen, damit Du weißt, ob die Behebung einer Schwachstelle erhebliche Änderungen für Dein Projekt mit sich bringen könnte. Wir überprüfen zuvor bestandene CI-Tests von öffentlichen Repositorys, bei denen wir ein bestimmtes automatisiertes Sicherheitsupdate generiert haben, um zu ermitteln, ob das Update zu fehlgeschlagenen Tests führt. Die Kompatibilitätsbewertung eines Update ist der Prozentsatz an CI-Ausführungen, die beim Aktualisieren zwischen relevanten Versionen der Abhängigkeit bestanden wurden.

### Automatisierte Sicherheitsupdates für Dein Repository verwalten

Du kannst automatisierte Sicherheitsupdates für ein einzelnes Repository aktivieren oder deaktivieren.

Automatisierte Sicherheitsupdates erfordern bestimmte Repository-Einstellungen. Weitere Informationen findest Du unter „[Unterstützte Repositorys](#supported-repositories)."

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
4. Benutze das Dropdownmenü über der Liste der Warnungen und aktiviere oder deaktiviere die Option **Automated security fixes** (Automatisierte Sicherheitsupdates). ![Dropdownmenü mit der Option, automatisierte Sicherheitsupdates zu aktivieren](/assets/images/help/repository/enable-automated-security-updates-drop-down.png)

### Automatisierte Sicherheitsupdates für Dein Benutzerkonto verwalten

Du kannst automatisierte Sicherheitsupdates für all Repository deaktivieren, die Deinem Benutzerkonto gehören. Wenn Du das tust, kannst Du automatisierte Sicherheitsupdates trotzdem noch für individuelle Repositorys im Besitz Deines Benutzerkontos aktivieren.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.repositories.opt-out-automated-security-updates %}

### Automatisierte Sicherheitsupdates für Deine Organisation verwalten

Organisationsinhaber können automatisierte Sicherheitsupdates für alle Repositorys im Besitz der Organisation deaktivieren. Wenn du das machst, können Personen mit Administratorberechtigungen auf ein einzelnes Repository im Besitz der Organisation trotzdem noch automatisierte Sicherheitsupdates für dieses Repository aktivieren.

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.repositories.opt-out-automated-security-updates %}

### Weiterführende Informationen

- „[Informationen zu Sicherheitswarnungen für angreifbare Abhängigkeiten](/articles/about-security-alerts-for-vulnerable-dependencies)“
- „[Datennutzung für ein privates Repository zulassen](/github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository#opting-into-data-use-for-your-private-repository)"
- „[Unterstützte Paket-Ökosysteme](/github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on#supported-package-ecosystems)"
