---
title: Hinzufügen einer Sicherheitsrichtlinie für dein Repository
intro: 'Indem du eine Sicherheitsrichtlinie zu deinem Repository hinzufügst, kannst du festlegen, wie Sicherheitslücken in deinem Projekt gemeldet werden sollen.'
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Security policies
  - Vulnerabilities
  - Repositories
  - Health
shortTitle: Add a security policy
ms.openlocfilehash: ef4a256c06b9149bd9db8d7afdce974dd1d29f0d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159269'
---
## Informationen zu Sicherheitsrichtlinien

Um Personen Anweisungen zu geben, wie sie Sicherheitsrisiken in deinem Projekt melden können,{% ifversion fpt or ghes or ghec %} kannst du eine _SECURITY.md_-Datei dem Stammverzeichnis deines Repositorys, dem Ordner `docs` oder `.github` hinzufügen.{% else %} kannst du eine _SECURITY.md_-Datei dem Stammverzeichnis deines Repositorys oder dem `docs`-Ordner hinzufügen.{% endif %} Wenn jemand ein Issue in deinem Repository erstellt, wird ein Link zur Sicherheitsrichtlinie deines Projekts angezeigt.

{% ifversion not ghae %}
<!-- no public repos in GHAE -->
Du kannst eine Standardsicherheitsrichtlinie für deine Organisation oder dein persönliches Konto erstellen. Weitere Informationen findest du unter [Erstellen einer Standard-Communityintegritätsdatei](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).
{% endif %}

{% tip %}

**Tipp:** Um den Benutzern das Auffinden der Sicherheitsrichtlinie zu erleichtern, kannst du an anderen Stellen in deinem Repository, z. B. in der README-Datei, die Datei _SECURITY.md_ verlinken. Weitere Informationen findest du unter [Informationen zu README-Dateien](/articles/about-readmes).

{% endtip %}

{% ifversion fpt or ghec %} Nachdem jemand eine Sicherheitslücke in deinem Projekt gemeldet hat, kannst du {% data variables.product.prodname_security_advisories %} verwenden, um das Sicherheitsrisiko offen zu legen, zu korrigieren und entsprechende Informationen darüber zu veröffentlichen. Weitere Informationen zum Berichterstellungsprozess und zur Offenlegung von Sicherheitsrisiken in {% data variables.product.prodname_dotcom %} findest du unter [Informationen zur koordinierten Offenlegung von Sicherheitsrisiken](/code-security/security-advisories/guidance-on-reporting-and-writing/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github). Weitere Informationen zu Sicherheitsempfehlungen für Repositorys findest du unter [Informationen zu Sicherheitsempfehlungen für Repositorys](/github/managing-security-vulnerabilities/about-github-security-advisories).

{% data reusables.repositories.github-security-lab %} {% endif %} {% ifversion ghes or ghae %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
Mit eindeutigen Anweisungen zur Sicherheitsberichterstellung erleichterst du deinen Benutzern, Sicherheitsrisiken, die sie in deinem Repository finden, über deinen bevorzugten Kommunikationskanal zu melden.
{% endif %}

## Hinzufügen einer Sicherheitsrichtlinie für dein Repository

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
3. Klicke auf der linken Randleiste auf **Sicherheit**.
  ![Registerkarte „Sicherheitsrichtlinie“](/assets/images/help/security/security-policy-tab.png)
4. Klicke auf **Start setup** (Setup starten).
  ![Schaltfläche „Setup starten“](/assets/images/help/security/start-setup-security-policy-button.png)
5. Füge in der neuen _SECURITY.md_-Datei Informationen zu den unterstützten Versionen deines Projekts und Anweisungen zum Melden eines Sicherheitsrisikos hinzu.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Weiterführende Themen

- [Schützen deines Repositorys](/code-security/getting-started/securing-your-repository){% ifversion not ghae %}
- [Einrichten deines Projekts für sinnvolle Beiträge](/communities/setting-up-your-project-for-healthy-contributions){% endif %}{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}
