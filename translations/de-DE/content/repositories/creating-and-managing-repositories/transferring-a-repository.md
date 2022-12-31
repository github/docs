---
title: Repository übertragen
intro: Du kannst Repositorys auf andere Benutzer*innen oder Organisationskonten übertragen.
redirect_from:
  - /articles/about-repository-transfers
  - /move-a-repo
  - /moving-a-repo
  - /articles/what-is-transferred-with-a-repository
  - /articles/what-is-transferred-with-a-repo
  - /articles/how-to-transfer-a-repo
  - /articles/how-to-transfer-a-repository
  - /articles/transferring-a-repository-owned-by-your-personal-account
  - /articles/transferring-a-repository-owned-by-your-organization
  - /articles/transferring-a-repository
  - /github/administering-a-repository/transferring-a-repository
  - /github/administering-a-repository/managing-repository-settings/transferring-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f37ebc1492ae26998a596d90734d1d509b8f73c9
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160680'
---
## Informationen zur Übertragung von Repositorys

Wenn du ein Repository an eine*n neue*n Besitzer*in überträgst, kann diese*r die Inhalte, Issues, Pull Requests, Releases, {% data variables.product.prodname_projects_v1 %} und Einstellungen des Repositorys sofort verwalten.

Voraussetzungen für Repositoryübertragungen:
- Wenn du ein Repository in deinem Besitz an ein anderes persönliches Konto überträgst, erhält der neue Besitzer eine Bestätigungs-E-Mail.{% ifversion fpt or ghec %} Die Bestätigungs-E-Mail enthält Anweisungen zum Akzeptieren der Übertragung. Nimmt der neue Inhaber die Übertragung nicht innerhalb eines Tages an, läuft die Einladung ab.{% endif %}
- Wenn du ein dir gehörendes Repository auf eine Organisation überträgst, musst du die Berechtigung besitzen, ein Repository in der Zielorganisation zu erstellen.
- Unter dem Zielkonto darf kein Repository mit gleichem Namen und kein Fork im gleichen Netzwerk vorhanden sein.
- Der ursprüngliche Inhaber des Repositorys wird dem übertragenen Repository als Mitarbeiter hinzugefügt. Andere Projektmitarbeiter*innen des übertragenen Repositorys bleiben erhalten.{% ifversion ghes < 3.7 or ghae %}
- Interne Repositorys können nicht übertragen werden.{% endif %}
- Private Forks können nicht übertragen werden.
{%- ifversion ghec %}
- Du kannst ein internes Repository nicht von einer Organisation im Besitz eines Unternehmenskontos in eine Organisation im Besitz eines anderen Unternehmenskontos übertragen.
{%- endif %}

{% ifversion fpt or ghec %} Wenn du ein privates Repository an ein {% data variables.product.prodname_free_user %}-Benutzer- oder -Organisationskonto überträgst, verliert das Repository den Zugriff auf Features wie geschützte Branches und {% data variables.product.prodname_pages %}. {% data reusables.gated-features.more-info %}{% endif %}

### Was wird mit einem Repository übertragen?

Bei der Übertragung eines Repositorys werden auch seine Issues, Pull Requests, Wikis, Sterne und Watcher (Beobachter) übertragen. Enthält das übertragene Repository Webhooks, Dienste, Geheimnisse oder Deployment-Schlüssel, bleiben diese nach Abschluss der Übertragung verknüpft. Git-Informationen zu Commits, einschließlich Beiträgen, bleiben erhalten. Zusätzlich:

- Wenn das übertragene Repository ein Fork ist, bleibt es mit dem vorgelagerten Repository verknüpft.
- Wenn zu dem übertragenen Repository Forks gehören, bleiben diese Forks auch nach der Übertragung mit dem Repository verknüpft.
- Wenn das übertragene Repository {% data variables.large_files.product_name_long %} verwendet, werden alle {% data variables.large_files.product_name_short %}-Objekte automatisch verschoben. Diese Übertragung findet im Hintergrund statt. Falls du also über sehr viele {% data variables.large_files.product_name_short %}-Objekte verfügst oder diese {% data variables.large_files.product_name_short %}-Objekte selbst sehr groß sind, kann die Übertragung einige Zeit dauern.{% ifversion fpt or ghec %} Stelle vor der Übertragung eines Repositorys, das {% data variables.large_files.product_name_short %} verwendet, sicher, dass das Empfängerkonto über ausreichend Datenpakete zum Speichern der verschobenen {% data variables.large_files.product_name_short %}-Objekte verfügt. Weitere Informationen zum Hinzufügen von Speicher zu persönlichen Konten findest du unter [Upgraden von {% data variables.large_files.product_name_long %}](/articles/upgrading-git-large-file-storage).{% endif %}
- Bei der Übertragung eines Repositorys zwischen zwei persönlichen Konten bleiben die Issuezuweisungen erhalten. Bei Übertragung eines Repositorys von einem persönlichen Konto an eine Organisation bleiben Issues, die Organisationsmitgliedern zugewiesen sind, erhalten, während alle anderen dem Issue zugewiesenen Personen entfernt werden. Nur die Inhaber der Organisation dürfen neue Issuezuweisungen erstellen. Bei Übertragung eines Repositorys von einer Organisation an ein persönliches Konto bleiben nur die dem Repository-Inhaber zugewiesenen Issues erhalten, während alle anderen dem Issue zugewiesenen Personen entfernt werden.
- Wenn das übertragene Repository eine {% data variables.product.prodname_pages %}-Website enthält, werden Links zum Git-Repository im Web und Links über Git-Aktivitäten weitergeleitet. Mit dem Repository verknüpfte {% data variables.product.prodname_pages %} werden hingegen nicht weitergeleitet.
- Alle Links zum früheren Repository-Standort werden automatisch zum neuen Standort weitergeleitet. Wenn du `git clone`, `git fetch` oder `git push` in einem übertragenen Repository verwendest, werden diese Befehle an den neuen Repositoryspeicherort oder die neue URL umgeleitet. Um Verwirrung zu vermeiden, empfehlen wir jedoch, alle bestehenden lokalen Klone entsprechend zu aktualisieren, so dass sie auf die neue Repository-URL verweisen. Du kannst dies tun, indem du `git remote` in der Befehlszeile verwendest:

  ```shell
  $ git remote set-url origin NEW_URL
  ```

  {% warning %}

  **Warnung**: Wenn du in der Zukunft ein neues Repository mit deinem Konto erstellst, darfst du den ursprünglichen Namen des übertragenen Repositorys nicht wiederverwenden. Wenn du das doch tust, funktionieren Umleitungen zum übertragenen Repository nicht mehr.

  {% endwarning %}

- Wenn du ein Repository von einer Organisation an ein persönliches Konto überträgst, werden die Projektmitarbeiter am Repository mit reinem Lesezugriff nicht mit übertragen. Das liegt daran, dass Projektmitarbeiter keinen Lesezugriff auf Repositorys haben können, die sich im Besitz eines persönlichen Kontos befinden. Weitere Informationen zu den Berechtigungsebenen für Repositorys findest du unter [Berechtigungsebenen für ein Repository im Besitz eines persönlichen Kontos](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository) und [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).{% ifversion fpt or ghec %}
- Sponsoren, die über eine Sponsoringstufe Zugriff auf das Repository haben, können betroffen sein. Weitere Informationen findest du unter [Hinzufügen eines Repositorys zu einer Sponsoringstufe](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers#adding-a-repository-to-a-sponsorship-tier).{% endif %}

Weitere Informationen findest du unter [Verwalten von Remoterepositorys](/github/getting-started-with-github/managing-remote-repositories).

### Repository-Übertragungen und Organisationen

Für die Übertragung von Repositorys auf eine Organisation benötigst du für diese Organisation die Berechtigung zur Erstellung von Repositorys. Wenn ein Organisationsinhaber die Berechtigung zur Erstellung von Repositorys durch Organisationsmitglieder deaktiviert hat, können nur Organisationsinhaber Repositorys in die und aus der Organisation übertragen.

Für ein in eine Organisation übertragenes Repository gelten die in der Organisation eingestellten Standardberechtigungen für Repositorys und Mitglieder.

## Repository deines persönlichen Kontos übertragen

Du kannst dein Repository an jedes persönliche Konto übertragen, das die Übertragung akzeptiert. Wenn ein Repository zwischen zwei persönlichen Konten übertragen wird, werden der bisherige Besitzer und die Projektmitarbeiter am Repository dem neuen Repository automatisch als Projektmitarbeiter hinzugefügt.

{% ifversion fpt or ghec %}Wenn du in deinem privaten Repository eine {% data variables.product.prodname_pages %}-Website mit einer benutzerdefinierten Domäne veröffentlicht hast, solltest du deine DNS-Einträge vor der Übertragung des Repositorys entfernen oder aktualisieren, um eine Domänenübernahme zu verhindern. Weitere Informationen findest du unter [Verwalten einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/articles/managing-a-custom-domain-for-your-github-pages-site).{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}

## Übertragen eines Repositorys deiner Organisation

Wenn du Besitzerberechtigungen in einer Organisation oder Administratorberechtigungen für eines ihrer Repositorys hast, kannst du ein Repository, das deiner Organisation gehört, an dein persönliches Konto oder an eine andere Organisation übertragen.

1. Melde dich bei deinem persönlichen Konto an, das über Administrator- oder Besitzerberechtigungen in der Organisation verfügt, die Besitzer des Repositorys ist.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.transfer-repository-steps %}
