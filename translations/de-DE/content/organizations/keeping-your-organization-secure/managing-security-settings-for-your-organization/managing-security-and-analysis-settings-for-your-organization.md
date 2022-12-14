---
title: Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation
intro: 'Du kannst Features steuern, die den Code in den Projekten deiner Organisation auf {% data variables.product.prodname_dotcom %} sichern und analysieren.'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage security & analysis
ms.openlocfilehash: 35e34f15b46987eea7bc732313b69ecd4e6396fa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107701'
---
## Informationen zur Verwaltung von Sicherheits- und Analyseeinstellungen

{% data variables.product.prodname_dotcom %} kann dabei helfen, die Repositorys in deiner Organisation zu schützen. Du kannst die Sicherheits- und Analysefeatures für alle vorhandenen oder neuen Repositorys verwalten, die Mitglieder in deiner Organisation erstellen. {% ifversion ghec %}Wenn du über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügst, kannst du auch den Zugriff auf diese Features verwalten. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% ifversion fpt %}Organisationen, die {% data variables.product.prodname_ghe_cloud %} mit einer Lizenz für {% data variables.product.prodname_GH_advanced_security %} verwenden, können auch den Zugriff auf diese Features verwalten. Weitere Informationen findest du in [der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %} {% data reusables.security.security-and-analysis-features-enable-read-only %}

## Anzeigen der Sicherheits- und Analyseeinstellungen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}

Auf der angezeigten Seite kannst du alle Sicherheits- und Analysefeatures für die Repositorys in deiner Organisation aktivieren oder deaktivieren.

{% ifversion ghec %}Wenn deine Organisation zu einem Unternehmen mit einer Lizenz für {% data variables.product.prodname_GH_advanced_security %} gehört, enthält die Seite auch Optionen zum Aktivieren und Deaktivieren von Features für {% data variables.product.prodname_advanced_security %}. Repositorys, die {% data variables.product.prodname_GH_advanced_security %} verwenden, werden unten auf der Seite aufgeführt.{% endif %}

{% ifversion ghes %}Wenn du über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügst, enthält die Seite auch Optionen zum Aktivieren und Deaktivieren von Features für {% data variables.product.prodname_advanced_security %}. Repositorys, die {% data variables.product.prodname_GH_advanced_security %} verwenden, werden unten auf der Seite aufgeführt.{% endif %}

{% ifversion ghae %}Die Seite enthält auch Optionen zum Aktivieren und Deaktivieren von Features für {% data variables.product.prodname_advanced_security %}. Repositorys, die {% data variables.product.prodname_GH_advanced_security %} verwenden, werden unten auf der Seite aufgeführt.{% endif %}

## Aktivieren oder Deaktivieren eines Features für alle vorhandenen Repositorys

Du kannst Features für alle Repositorys aktivieren oder deaktivieren. {% ifversion fpt or ghec %}Die Auswirkungen deiner Änderungen auf Repositorys in deiner Organisation hängen von ihrer Sichtbarkeit ab:

- **Abhängigkeitsdiagramm:** Deine Änderungen wirken sich nur auf private Repositorys aus, da das Feature für öffentliche Repositorys immer aktiviert ist.
- **{% data variables.product.prodname_dependabot_alerts %}:** Deine Änderungen wirken sich auf alle Repositorys aus.
- **{% data variables.product.prodname_dependabot_security_updates %}:** Deine Änderungen wirken sich auf alle Repositorys aus.
{%- ifversion ghec %}
- **{% data variables.product.prodname_GH_advanced_security %}:** Deine Änderungen wirken sich nur auf private Repositorys aus, da {% data variables.product.prodname_GH_advanced_security %} und die dazugehörigen Features für öffentliche Repositorys immer aktiviert sind.
- **{% data variables.product.prodname_secret_scanning_caps %}:** Deine Änderungen wirken sich auf Repositorys aus, für die auch {% data variables.product.prodname_GH_advanced_security %} aktiviert ist. Mit dieser Option wird kontrolliert, ob {% data variables.product.prodname_secret_scanning_GHAS %} aktiviert ist. {% data variables.product.prodname_secret_scanning_partner_caps %} wird immer in öffentlichen Repositorys ausgeführt.
{% endif %}

{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% ifversion ghes or ghec or ghae %} {% note %}

**Hinweis:** Wenn du die Fehlermeldung „GitHub Advanced Security kann aufgrund einer Richtlinieneinstellung für das Unternehmen nicht aktiviert werden“ erhältst, kontaktiere deinen Unternehmensadministrator und bitte um eine Änderung der GitHub Advanced Security-Richtlinie für dein Unternehmen. Weitere Informationen findest du unter [Erzwingen von Richtlinien für Advanced Security in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).
{% endnote %} {% endif %}

1. Wechseln Sie zu den Sicherheits- und Analyseeinstellungen für Ihre Organisation. Weitere Informationen findest du unter [Anzeigen der Sicherheits- und Analyseeinstellungen](#displaying-the-security-and-analysis-settings).
2. Klicke unter „Codesicherheit und -analyse“ rechts neben dem Feature auf **Alle deaktivieren** oder **Alle aktivieren**. {% ifversion ghes or ghec %}Das Steuerelement für „{% data variables.product.prodname_GH_advanced_security %}“ ist deaktiviert, wenn keine freien Arbeitsplätze in deiner {% data variables.product.prodname_GH_advanced_security %}-Lizenz vorhanden sind.{% endif %} {% ifversion fpt %} ![Schaltfläche „Alle aktivieren“ oder „Alle deaktivieren“ unter „Sicherheits- und Analysefunktionen konfigurieren“](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-fpt.png) {% endif %} {% ifversion ghec %} ![Schaltfläche „Alle aktivieren“ oder „Alle deaktivieren“ unter „Sicherheits- und Analysefunktionen konfigurieren“](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-ghec.png) {% endif %} {% ifversion ghes %} ![Schaltfläche „Alle aktivieren“ oder „Alle deaktivieren“ unter „Sicherheits- und Analysefunktionen konfigurieren“](/assets/images/enterprise/3.3/organizations/security-and-analysis-disable-or-enable-all-ghas.png) {% endif %}
   
   
   {% ifversion ghae %} ![Schaltfläche „Alle aktivieren“ oder „Alle deaktivieren“ für „Konfigurieren der Sicherheits- und Analysefeatures“](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. Du kannst das Feature auch standardmäßig für neue Repositorys in deiner Organisation aktivieren.
   {% ifversion fpt or ghec %} ![Option „Standardmäßig aktivieren“ für neue Repositorys](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. Klicke auf **FEATURE deaktivieren** oder **FEATURE aktivieren**, um das Feature für alle Repositorys in deiner Organisation zu deaktivieren oder zu aktivieren.
   {% ifversion fpt or ghec %} ![Schaltfläche zum Deaktivieren oder Aktivieren des Features](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png) {% endif %}
   
   {% endif %} {% ifversion ghae or ghes %}
5. Klicke auf **Alle aktivieren/deaktivieren** oder **Für auswählbare Repositorys aktivieren/deaktivieren**, um die Änderung zu bestätigen.
   ![Schaltfläche zum Aktivieren des Features für alle auswählbaren Repositorys in der Organisation](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png) {% endif %}

   {% data reusables.security.displayed-information %}

## Automatisches Aktivieren oder Deaktivieren eines Features, wenn neue Repositorys hinzugefügt werden

1. Wechseln Sie zu den Sicherheits- und Analyseeinstellungen für Ihre Organisation. Weitere Informationen findest du unter [Anzeigen der Sicherheits- und Analyseeinstellungen](#displaying-the-security-and-analysis-settings).
2. Aktiviere oder deaktiviere das Feature unter „Codesicherheit und -analyse“ rechts von dem Feature standardmäßig für neue Repositorys{% ifversion fpt or ghec %} oder alle neuen privaten Repositorys{% endif %} in deiner Organisation.
   {% ifversion fpt or ghec %} ![Screenshot eines Kontrollkästchens zum Aktivieren einer Funktion für neue Repositorys](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) {% endif %} {% ifversion ghes %} ![Screenshot eines Kontrollkästchens zum Aktivieren einer Funktion für neue Repositorys](/assets/images/enterprise/3.3/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) {% endif %}
   
   {% ifversion ghae %} ![Screenshot eines Kontrollkästchens zum Aktivieren einer Funktion für neue Repositorys](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png) {% endif %}

{% ifversion fpt or ghec or ghes %}

## Zulassen, dass {% data variables.product.prodname_dependabot %} auf private Abhängigkeiten zugreifen kann

{% data variables.product.prodname_dependabot %} kann nach veralteten Abhängigkeitsverweisen in einem Projekt suchen und automatisch ein Pull Request generieren, um sie zu aktualisieren. Dazu benötigt {% data variables.product.prodname_dependabot %} Zugriff auf alle Zielabhängigkeitsdateien. Für gewöhnlich schlagen Versionsupdates fehl, wenn auf mindestens eine Abhängigkeit nicht zugegriffen werden kann. Weitere Informationen findest du unter [Informationen zu Versionsupdates von {% data variables.product.prodname_dependabot %}](/github/administering-a-repository/about-dependabot-version-updates).

Standardmäßig kann {% data variables.product.prodname_dependabot %} Abhängigkeiten in privaten Repositorys oder privaten Paketregistrierungen nicht aktualisieren. Wenn sich eine Abhängigkeit jedoch in einem privaten Repository von {% data variables.product.prodname_dotcom %} innerhalb derselben Organisation befindet wie das Projekt, das die Abhängigkeit verwendet, kannst du {% data variables.product.prodname_dependabot %} erlauben, die Version erfolgreich zu aktualisieren, indem du Zugriff auf das Hostrepository gewährst.

Wenn dein Code von Paketen in einer privaten Registrierung abhängt, kannst du {% data variables.product.prodname_dependabot %} erlauben, die Versionen dieser Abhängigkeiten durch Konfigurieren auf Repositoryebene zu aktualisieren. Füge dazu der Datei _dependabot.yml_ Authentifizierungsdetails für das Repository hinzu. Weitere Informationen findest du unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries).

So gewährst du {% data variables.product.prodname_dependabot %} Zugriff auf ein privates Repository von {% data variables.product.prodname_dotcom %}:

1. Wechseln Sie zu den Sicherheits- und Analyseeinstellungen für Ihre Organisation. Weitere Informationen findest du unter [Anzeigen der Sicherheits- und Analyseeinstellungen](#displaying-the-security-and-analysis-settings).
1. Klicke unter „{% data variables.product.prodname_dependabot %}-Zugriff auf private Repositorys“ auf **Private Repositorys hinzufügen** oder **Interne und private Repositorys hinzufügen**.
   ![Schaltfläche „Repositorys hinzufügen“](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. Geben Sie die ersten Buchstaben des Namens des Repositorys ein, auf das Sie den Zugriff zulassen möchten.
   ![Repositorysuchfeld mit gefilterter Dropdownliste](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. Klicke auf das Repository, auf das du den Zugriff zulassen möchtest.

1. Um ein Repository aus der Liste zu entfernen, kannst du auch rechts von dem Repository auf {% octicon "x" aria-label="The X icon" %} klicken.
   ![Schaltfläche „X“ zum Entfernen eines Repositorys](/assets/images/help/organizations/dependabot-private-repository-list.png) {% endif %}

{% ifversion ghes or ghec %}

## Entfernen des Zugriffs auf {% data variables.product.prodname_GH_advanced_security %} von einzelnen Repositorys in einer Organisation

Du kannst den Zugriff auf Features für {% data variables.product.prodname_GH_advanced_security %} für ein Repository auf der Registerkarte „Einstellungen“ verwalten. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository). Du kannst jedoch auch die Features für {% data variables.product.prodname_GH_advanced_security %} für ein Repository auf der Registerkarte „Einstellungen“ der Organisation deaktivieren.

1. Wechseln Sie zu den Sicherheits- und Analyseeinstellungen für Ihre Organisation. Weitere Informationen findest du unter [Anzeigen der Sicherheits- und Analyseeinstellungen](#displaying-the-security-and-analysis-settings).
1. Um eine Liste aller Repositorys in deiner Organisation mit aktivierter {% data variables.product.prodname_GH_advanced_security %} anzuzeigen, scrolle zum Abschnitt „{% data variables.product.prodname_GH_advanced_security %}-Repositorys“.
  ![Abschnitt {% data variables.product.prodname_GH_advanced_security %}-Repositorys](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png) Die Tabelle führt die Anzahl eindeutiger Committer für jedes Repository auf. Dies ist die Anzahl an Plätzen, die du in deiner Lizenz freigeben könntest, wenn du den Zugriff auf {% data variables.product.prodname_GH_advanced_security %} entfernst. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).
1. Um den Zugriff auf {% data variables.product.prodname_GH_advanced_security %} von einem Repository zu entfernen und Plätze freizugeben, die von Committern verwendet werden, die für das Repository eindeutig sind, klicke auf das {% octicon "x" aria-label="X symbol" %} daneben.
1. Klicke im Bestätigungsdialogfeld auf **Repository entfernen**, um den Zugriff auf die Features von {% data variables.product.prodname_GH_advanced_security %} zu entfernen.

{% note %}

**Hinweis:** Wenn du den Zugriff auf {% data variables.product.prodname_GH_advanced_security %} für ein Repository entfernst, solltest du dem betroffenen Entwicklungsteam mitteilen, dass diese Änderung gewollt war. Dadurch wird sichergestellt, dass keine Zeit für das Debuggen fehlgeschlagener Ausführungen des Codescans verschwendet wird.

{% endnote %}

{% endif %}

## Weitere Informationsquellen

- [Schützen deines Repositorys](/code-security/getting-started/securing-your-repository){% ifversion not fpt %}
- [Informationen zum geheimen Scannen](/github/administering-a-repository/about-secret-scanning){% endif %}{% ifversion not ghae %}
- [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph){% endif %}
- [Informationen zur Lieferkettensicherheit](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)
