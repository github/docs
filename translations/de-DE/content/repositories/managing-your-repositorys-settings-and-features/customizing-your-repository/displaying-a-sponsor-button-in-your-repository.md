---
title: Sponsorenschaltfläche in deinem Repository anzeigen
intro: 'Du kannst eine Sponsorenschaltfläche zu deinem Repository hinzufügen, um die Sichtbarkeit von Finanzierungsmöglichkeiten für dein Open-Source-Projekt zu erhöhen.'
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Display a sponsor button
ms.openlocfilehash: 8fce9d4fe2b4aa697fa5d5a0ef0dfafb1caa4844
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147558342'
---
## Informationen zu FUNDING-Dateien

Du kannst deine Sponsorenschaltfläche konfigurieren, indem du auf der Standardverzweigung die Datei _FUNDING.yml_ im `.github`-Ordner deines Repositorys bearbeitest. Wahlweise kann die Schaltfläche gesponserte Entwickler in {% data variables.product.prodname_sponsors %}, externe Finanzierungsplattformen oder eine benutzerdefinierte Sponsoring-URL enthalten. Weitere Informationen zu {% data variables.product.prodname_sponsors %} findest du unter "[Informationen zu GitHub Sponsoren](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)".

Du kannst einen Benutzernamen, Paketnamen oder Projektnamen pro externer Finanzierungsplattform und bis zu vier benutzerdefinierte URLs hinzufügen. Du kannst in {% data variables.product.prodname_sponsors %} eine Organisation und bis zu vier gesponserte Entwickler auswählen. Füge jede Plattform auf einer neuen Zeile hinzu, und verwende dabei die folgende Syntax:

Plattform | Syntax
-------- | -----
[LFX Mentorship (früher CommunityBridge)](https://lfx.linuxfoundation.org/tools/mentorship) | `community_bridge: PROJECT-NAME`
[{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` oder `github: [USERNAME, USERNAME, USERNAME, USERNAME]`
[IssueHunt](https://issuehunt.io/) | `issuehunt: USERNAME`
[Ko-fi](https://ko-fi.com/) | `ko_fi: USERNAME`
[Liberapay](https://en.liberapay.com/) | `liberapay: USERNAME`
[Open Collective](https://opencollective.com/) | `open_collective: USERNAME`
[Otechie](https://otechie.com/)| `otechie: USERNAME`
[Patreon](https://www.patreon.com/) | `patreon: USERNAME`
[Tidelift](https://tidelift.com/) | `tidelift: PLATFORM-NAME/PACKAGE-NAME`
Benutzerdefinierte URL | `custom: LINK1` oder `custom: [LINK1, LINK2, LINK3, LINK4]`

Verwende für Tidelift die `platform-name/package-name`-Syntax mit den folgenden Plattformnamen:

Sprache | Plattformname
-------- | -------------
JavaScript | `npm`
Python | `pypi`
Ruby | `rubygems`
Java | `maven`
PHP | `packagist`
C# | `nuget`

Hier eine Beispiel-_FUNDING.yml_-Datei:
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**Hinweis:** Wenn eine benutzerdefinierte URL in einem Array `:` enthält, musst du die URL in Anführungszeichen setzen. Beispiel: `"https://www.paypal.me/octocat"`.

{% endnote %}

Du kannst eine Standard-Sponsorenschaltfläche für deine Organisation oder dein persönliches Konto erstellen. Weitere Informationen findest du unter [Erstellen einer Standard-Communityintegritätsdatei](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

{% note %}

Finanzierungslinks sind eine gute Möglichkeit für die Community, Open-Source-Projekte direkt finanziell zu unterstützen. Wir unterstützen den Einsatz von Finanzierungslinks nicht für andere Zwecke wie Werbung oder die Unterstützung politischer, gemeinschaftlicher oder wohltätiger Gruppen. Wenn du dir nicht sicher bist, ob deine beabsichtigte Nutzung unterstützt wird, wende dich an {% data variables.contact.contact_support %}.

{% endnote %}

## Sponsorenschaltfläche in deinem Repository anzeigen

Jeder, der über Administratorberechtigungen verfügt, kann eine Sponsorenschaltfläche in einem Repository ermöglichen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Wähle unter "Features" (Funktionen) die Option **Sponsorships** (Sponsoring) aus.
  ![Kontrollkästchen zum Aktivieren von Sponsoring](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. Klicke unter "Sponsorships" (Sponsoring) auf die Schaltfläche **Set up Sponsor** (Sponsor einrichten), oder **setze Finanzierungslinks außer Kraft**.
  ![Schaltfläche zum Einrichten des Sponsors](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. Befolge im Datei-Editor die Anweisungen aus der _FUNDING.yml_-Datei, um Links zu deinen Finanzierungsoptionen hinzuzufügen.
  ![Bearbeite die FUNDING-Datei, um Links zu Finanzierungsstandorten hinzuzufügen](/assets/images/help/sponsors/funding-yml-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Weiterführende Themen
- "[Informationen zu {% data variables.product.prodname_sponsors %} für Open Source Mitwirkende](/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors)"
- "[Häufig gestellte Fragen zum {% data variables.product.prodname_sponsors %}-Team](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/)" für {% data variables.product.prodname_blog %}
