---
title: Rollen in einer Organisation
intro: 'Organisationsbesitzer*innen können Einzelpersonen und Teams Rollen zuweisen, durch die sie unterschiedliche Berechtigungen in der Organisation erhalten.'
redirect_from:
  - /articles/permission-levels-for-an-organization-early-access-program
  - /articles/permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization
  - /organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Roles in an organization
ms.openlocfilehash: f9e5d411c7a7a16e22abcc660f2761f1bfd6cf7d
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180077'
---
## Informationen zu Rollen
{% data reusables.organizations.about-roles %}

Mit Rollen auf Repositoryebene kannst du Organisationsmitgliedern, externen Mitarbeiter*innen und Teams unterschiedliche Zugriffsebenen auf Repositorys zuweisen. Weitere Informationen findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

Mit Rollen auf Teamebene erteilst du Berechtigungen zur Verwaltung eines Teams. Du kannst einem einzelnen Teammitglied die Maintainerrolle erteilen, die eine Reihe von Administratorberechtigungen für das Team beinhaltet. Weitere Informationen findest du unter [Zuweisen der Maintainerrolle für ein Team zu einem Teammitglied](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member).

Rollen auf Organisationsebene sind Berechtigungen, die du Personen oder Teams zuweisen kannst, um eine Organisation sowie die Repositorys, Teams und Einstellungen der Organisation zu verwalten. Weitere Informationen zu allen Rollen auf Organisationsebene findest du unter [Informationen zu Organisationsrollen](#about-organization-roles).

## Informationen von Organisationsrollen

Du kannst einzelnen Personen oder Teams eine Vielzahl von Rollen auf Organisationsebene zuweisen, um den Zugriff der Mitglieder auf deine Organisation und deren Ressourcen zu steuern. Weitere Informationen zu den Berechtigungen, die in den jeweiligen Rollen enthalten sind, findest du unter [Berechtigungen für Organisationsrollen](#permissions-for-organization-roles).

{% ifversion enterprise-owner-join-org %} Befindet sich deine Organisation im Besitz eines Unternehmenskontos, können Unternehmensbesitzer*innen deiner Organisation mit einer beliebigen Rolle beitreten. Weitere Informationen findest du unter [Verwalten deiner Rolle in einer Organisation im Besitz deines Unternehmens](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).
{% endif %}

### Organisationsbesitzer
Organisationsbesitzer*innen verfügen über vollständigen Administratorzugriff auf deine Organisation. Diese Rolle sollte in deiner Organisation beschränkt verfügbar sein, aber für nicht weniger als zwei Personen. Weitere Informationen findest du unter [Verwalten der Besitzkontinuität für deine Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization).

### Organisationsmitglieder
Die Standardrolle für Personen ohne Verwaltungsaufgaben in einer Organisation ist das Organisationsmitglied. Standardmäßig verfügen Organisationsmitglieder über eine Reihe von Berechtigungen, wie etwa die Berechtigung zum Erstellen von Repositorys und Projektboards.

{% ifversion fpt or ghec %}
### Organisationsmoderatoren
Moderator*innen sind Organisationsmitglieder, die zusätzlich zu ihren Mitgliedsberechtigungen über folgende Berechtigungen verfügen: Sie können Mitwirkende sperren und zulassen, die keine Mitglieder sind, Interaktionsbeschränkungen festlegen und Kommentare in öffentlichen Repositorys im Besitz der Organisation ausblenden. Weitere Informationen findest du unter [Verwalten von Moderatoren in deiner Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization).

### Abrechnungsmanager
Abrechnungsmanager*innen sind Benutzer*innen, die die Abrechnungseinstellungen für deine Organisation ( z. B. Zahlungsinformationen) verwalten. Diese Option ist nützlich, wenn die Mitglieder deiner Organisation in der Regel nicht auf Abrechnungsressourcen zugreifen können. Weitere Informationen findest du unter [Hinzufügen eines Abrechnungsmanagers zu deiner Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).

{% endif %}

{% ifversion security-managers %}
### Sicherheitsmanager

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

Wenn deine Organisation über ein Sicherheitsteam verfügt, kannst du mit der Rolle des Sicherheitsmanagers den Mitgliedern des Teams die Mindestzugriffsrechte für die Organisation gewähren. Weitere Informationen findest du unter [Verwalten von Sicherheitsmanagern in deiner Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
{% endif %}
### {% data variables.product.prodname_github_app %}-Managers
Standardmäßig können nur Organisationsbesitzer die Einstellungen von {% data variables.product.prodname_github_apps %} im Besitz einer Organisation verwalten. Wenn du weiteren Benutzern die Berechtigung zur Verwaltung von {% data variables.product.prodname_github_apps %} im Besitz einer Organisation erteilen möchtest, kann ihnen ein Besitzer Managerberechtigungen für {% data variables.product.prodname_github_app %} zuweisen.

Wenn du einen Benutzer/eine Benutzerin zum {% data variables.product.prodname_github_app %}-Manager in deiner Organisation ernennst, kannst du ihnen Zugriff auf die Verwaltung der Einstellungen einzelner oder aller {% data variables.product.prodname_github_apps %} im Besitz der Organisation gewähren. Weitere Informationen findest du unter

- [Hinzufügen von GitHub-App-Manager*innen zu deiner Organisation](/articles/adding-github-app-managers-in-your-organization)
- [Entfernen von GitHub-App-Manager*innen aus deiner Organisation](/articles/removing-github-app-managers-from-your-organization)

### Externe Mitarbeiter
Durch das Hinzufügen *externer Mitarbeiter*innen* kannst du gleichzeitig die Daten deiner Organisation schützen und den Zugriff auf Repositorys gewähren. {% data reusables.organizations.outside_collaborators_description %}

## Berechtigungen für Organisationsrollen

{% ifversion fpt %} Einige der unten aufgeführten Features sind auf Organisationen beschränkt, die {% data variables.product.prodname_ghe_cloud %} verwenden. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghec %}
<!-- Free/Pro/Team and GHEC versions have extra columns for Moderators and Billing managers-->

| Organisationsberechtigung | Besitzer | Member | Moderatoren | Abrechnungsmanager | Sicherheitsmanager |
|:------------------------|:------:|:-------:|:----------:|:----------------:|:-----------------:|
| Erstellen von Repositorys (weitere Informationen findest du unter [Einschränken der Erstellung von Repositorys in deiner Organisation](/articles/restricting-repository-creation-in-your-organization)) | **X** | **X** | **X** |  | **X**  |
| Abrechnungsinformationen anzeigen und bearbeiten | **X** |  |  | **X** |  |
| Personen zum Beitritt zur Organisation einladen | **X** |  |  |  |  |
| Einladungen zum Beitritt zu der Organisation bearbeiten und zurückziehen | **X** |  |  |  |  |
| Mitglied aus der Organisation entfernen | **X** |  |  |  |  |
| Ehemaliges Mitglied der Organisation wieder einsetzen | **X** |  |  |  |  |
| Hinzufügen und Entfernen von Personen aus **allen Teams** | **X** |  |  |  |  |
| Höherstufen von Organisationsmitgliedern auf die Rolle des *Maintainers für ein Team* | **X** |  |  |  |  |
| Konfigurieren von Code Review-Zuweisungen (weitere Informationen findest du unter [Verwalten von Code Review-Zuweisungen für dein Team](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)) | **X** |  |  |  |  |
| Festlegen geplanter Erinnerungen (Informationen unter [Verwalten geplanter Erinnerungen für Pull Requests](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)) | **X** |  |  |  |  |
| Hinzufügen von Mitarbeiter*innen zu **allen Repositorys** | **X** |  |  |  |  |
| Auf das Auditprotokoll der Organisation zugreifen | **X** |  |  |  |  |
| Bearbeiten der Profilseite deiner Organisation (weitere Informationen findest du unter [Informationen zum Profil deiner Organisation](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)) | **X** |  |  |  |  |{% ifversion ghec %}
| Überprüfen der Domänen deiner Organisation (weitere Informationen finest du unter [Überprüfen der Domäne deiner Organisation](/articles/verifying-your-organization-s-domain)) | **X** |  |  |  |  |
| Einschränken von E-Mail-Benachrichtigungen auf überprüfte oder genehmigte Domänen (weitere Informationen findest du unter [Einschränken von E-Mail-Benachrichtigungen für deine Organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)) | **X** |  |  |  |  |{% endif %}
| Löschen **aller Teams** | **X** |  |  |  |  |
| Das Organisationskonto einschließlich aller Repositorys löschen | **X** |  |  |  |  |
| Erstellen von Teams (weitere Informationen findest du unter [Festlegen von Berechtigungen zur Teamerstellung in deiner Organisation](/articles/setting-team-creation-permissions-in-your-organization)) | **X** | **X** | **X** |  | **X**  |
| [Verschieben von Teams in der Hierarchie einer Organisation](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** |  |  |  |  |
| Erstellen von Projektboards (Informationen unter [Berechtigungen für Projektboards einer Organisation](/articles/project-board-permissions-for-an-organization)) | **X** | **X** | **X** |  | **X**  |
| Alle Organisationsmitglieder und Teams sehen | **X** | **X** | **X** |  | **X**  |
| @mention aller sichtbaren Teams | **X** | **X** | **X** |  | **X**  |
| Kann die Rolle des *Maintainers für ein Team* zugewiesen werden | **X** | **X** | **X** |  | **X** |{% ifversion ghec %}
| Anzeigen von Organisationserkenntnissen (weitere Informationen findest du unter [Anzeigen von Erkenntnissen für deine Organisation](/articles/viewing-insights-for-your-organization)) | **X** | **X** | **X** |  | **X**  |{% endif %}
| Anzeigen und Posten von öffentlichen Teamdiskussionen für **alle Teams** (Informationen unter [Informationen zu Teamdiskussionen](/organizations/collaborating-with-your-team/about-team-discussions)) | **X** | **X** | **X** |  | **X**  |
| Anzeigen und Posten von privaten Teamdiskussionen für **alle Teams** (Informationen unter [Informationen zu Teamdiskussionen](/organizations/collaborating-with-your-team/about-team-discussions)) | **X** |  |  |  |  |
| Bearbeiten und Löschen von Teamdiskussionen in **allen Teams** (Informationen unter [Verwalten störender Kommentare](/communities/moderating-comments-and-conversations/managing-disruptive-comments)) | **X** |  |  |  |  |
| Deaktivieren von Teamdiskussionen für eine Organisation (weitere Informationen findest du unter [Deaktivieren von Teamdiskussionen für deine Organisation](/articles/disabling-team-discussions-for-your-organization)) | **X** |  |  |  |  |
| Ausblenden von Kommentaren zu beschreibbaren Commits, Pull Requests und Issues (Informationen unter [Verwalten störender Kommentare](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)) | **X** | **X** | **X** |  | **X** |
| Ausblenden von Kommentaren zu _allen_ Commits, Pull Requests und Issues (Informationen unter [Verwalten störender Kommentare](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)) | **X** |  | **X** |  | **X** |
| Sperren und Zulassen von Mitwirkenden, die keine Mitglieder sind (weitere Informationen findest du unter [Sperren von Benutzer*innen in deiner Organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)) | **X** |  | **X** |  |  |
| Einschränken von Interaktionen für bestimmte Benutzer*innen in öffentlichen Repositorys (weitere Informationen findest du unter [Einschränken von Interaktionen in deiner Organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)) | **X** |  | **X** |  |  |{% ifversion ghec %}
| Verwalten der Anzeige von Abhängigkeitserkenntnissen deiner Organisation (weitere Informationen findest du unter [Ändern der Sichtbarkeit von Abhängigkeitserkenntnissen deiner Organisation](/articles/changing-the-visibility-of-your-organizations-dependency-insights)) | **X** |  |  |  |  |{% endif %}
| Festlegen eines Teamprofilbilds für **alle Teams** (weitere Informationen findest du unter [Festlegen des Profilbilds deines Teams](/articles/setting-your-team-s-profile-picture)) | **X** |  |  |  |  |
| Sponsern von Konten und Verwalten des Sponsorings in deiner Organisation (weitere Informationen findest du unter [Sponsern von Open-Source-Mitwirkenden](/sponsors/sponsoring-open-source-contributors)) | **X** |  |  | **X** | **X**  |
| Verwalten von E-Mail-Updates aus gesponserten Konten (weitere Informationen findest du unter [Verwalten von Updates aus Konten deiner Organisationssponsoren](/organizations/managing-organization-settings/managing-updates-from-accounts-your-organization-sponsors)) | **X** |  |  |  |  |
| Zuordnen deines Sponsorings zu einer anderen Organisation (weitere Informationen findest du unter [Zuordnen von Sponsorings zu deiner Organisation](/sponsors/sponsoring-open-source-contributors/attributing-sponsorships-to-your-organization)) | **X** |  |  |  |  |
| Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites aus Repositorys in der Organisation (weitere Informationen findest du unter [Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)) | **X** |  |  |  |  |
| Verwalten von Sicherheits- und Analyseeinstellungen (weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)) | **X** |  |  |  | **X** |
| Anzeigen der Sicherheitsübersicht für die Organisation (Informationen unter [Informationen zur Sicherheitsübersicht](/code-security/security-overview/about-the-security-overview)) | **X** |  |  |  | **X** |{% ifversion ghec %}
| Aktivieren und Erzwingen der [einmaligen SAML-Anmeldung](/articles/about-identity-and-access-management-with-saml-single-sign-on) | **X** |  |  |  |  |
| [Verwalten des SAML-Benutzerzugriffs auf deine Organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) | **X** |  |  |  |  |
| Verwalten der SSH-Zertifizierungsstellen einer Organisation (weitere Informationen findest du unter [Verwalten der SSH-Zertifizierungsstellen deiner Organisation](/articles/managing-your-organizations-ssh-certificate-authorities)) | **X** |  |  |  |  |{% endif %}
| Repositorys übertragen | **X** |  |  |   |  |
| {% data variables.product.prodname_marketplace %}-Apps erwerben, installieren, kündigen und ihre Abrechnung verwalten | **X** |  |  |  |  |
| Apps auf {% data variables.product.prodname_marketplace %} aufführen | **X** |  |  |  |  |
| Empfangen von [{% data variables.product.prodname_dependabot_alerts %} zu unsicheren Abhängigkeiten](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) für alle Repositorys einer Organisation | **X** |  |  |  | **X** |
| Verwalten von {% data variables.product.prodname_dependabot_security_updates %} (Informationen unter [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)) | **X** |  |  |  | **X** |
| [Verwalten der Verzweigungsrichtlinie](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) | **X** |  |  |  |  |
| [Einschränken von Aktivitäten in öffentlichen Repositorys einer Organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) | **X** |  |  |  |  |
| Pullen (Lesen) *aller Repositorys* in der Organisation | **X** |  |  |  | **X** |
| Pushen (Schreiben) und Klonen (Kopieren) *aller Repositorys* in der Organisation | **X** |  |  |  |  |
| Umwandeln von Organisationsmitgliedern in [externe Mitarbeiter*innen](#outside-collaborators) | **X** |  |  |  |  |
| [Anzeigen von Personen mit Zugriff auf ein Repository der Organisation](/articles/viewing-people-with-access-to-your-repository) | **X** |  |  |  |  |{% ifversion ghec %}
| [Exportieren einer Liste der Personen mit Zugriff auf ein Repository der Organisation](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** |  |  |  |  |{% endif %}
| Verwalten des Standardbranchnamens (weitere Informationen findest du unter [Verwalten des Standardbranchnamens für Repositorys in deiner Organisation](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)) | **X** |  |  |  |  |
| Verwalten von Standardbezeichnungen (weitere Informationen findest du unter [Verwalten von Standardbezeichnungen für Repositorys in deiner Organisation](/articles/managing-default-labels-for-repositories-in-your-organization)) | **X** |  |  |  |  |{% ifversion ghec %}
| Aktivieren der Teamsynchronisierung (weitere Informationen findest du unter [Verwalten der Teamsynchronisierung für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)) | **X** |  |  |  |  |{% endif %}
| Verwalten von Pull Request-Überprüfungen in der Organisation (weitere Informationen findest du unter [Verwalten von Pull Request-Überprüfungen in deiner Organisation](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)) | **X** |  |  |  |  |

{% elsif ghes or ghae %}
<!-- GHES 3.3+ and eventual GHAE release don't have the extra columns for Moderators and Billing managers. -->

| Aktion in der Organisation | Besitzer | Member | Sicherheitsmanager |
|:--------------------|:------:|:-------:|:-------:|
| Personen zum Beitritt zur Organisation einladen | **X** |  |  |
| Einladungen zum Beitritt zu der Organisation bearbeiten und zurückziehen | **X** |  |  |
| Mitglied aus der Organisation entfernen | **X** | | |  |
| Ehemaliges Mitglied der Organisation wieder einsetzen | **X** | | |  |
| Hinzufügen und Entfernen von Personen aus **allen Teams** | **X** |  |  |
| Höherstufen von Organisationsmitgliedern auf die Rolle des *Maintainers für ein Team* | **X** |  |  |
| Konfigurieren von Code Review-Zuweisungen (weitere Informationen findest du unter [Verwalten von Code Review-Zuweisungen für dein Team](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)) | **X** |  |  |
| Hinzufügen von Mitarbeiter*innen zu **allen Repositorys** | **X** |  |  |
| Auf das Auditprotokoll der Organisation zugreifen | **X** |  |  |
| Bearbeiten der Profilseite deiner Organisation (weitere Informationen findest du unter [Informationen zum Profil deiner Organisation](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)) | **X** |  |  |{% ifversion ghes %}
| Überprüfen der Domänen deiner Organisation (weitere Informationen finest du unter [Überprüfen der Domäne deiner Organisation](/articles/verifying-your-organization-s-domain)) | **X** |  |  |
| Einschränken von E-Mail-Benachrichtigungen auf überprüfte oder genehmigte Domänen (weitere Informationen findest du unter [Einschränken von E-Mail-Benachrichtigungen für deine Organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)) | **X** |  |  |{% endif %}
| Löschen **aller Teams** | **X** |  |  |
| Das Organisationskonto einschließlich aller Repositorys löschen | **X** |  |  |
| Erstellen von Teams (weitere Informationen findest du unter [Festlegen von Berechtigungen zur Teamerstellung in deiner Organisation](/articles/setting-team-creation-permissions-in-your-organization)) | **X** | **X** | **X**  |
| Alle Organisationsmitglieder und Teams sehen | **X** | **X** | **X**  |
| @mention aller sichtbaren Teams | **X** | **X** | **X**  |
| Kann die Rolle des *Maintainers für ein Team* zugewiesen werden | **X** | **X** | **X**  |
| Repositorys übertragen | **X** | |  |
| Verwalten von Sicherheits- und Analyseeinstellungen (weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)) | **X** | | **X** |{% ifversion ghes %}
| Anzeigen der Sicherheitsübersicht für die Organisation (Informationen unter [Informationen zur Sicherheitsübersicht](/code-security/security-overview/about-the-security-overview)) | **X** | | **X** |{% endif %}{% ifversion ghes %}
| Verwalten von {% data variables.product.prodname_dependabot_security_updates %} (Informationen unter [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)) | **X** | | **X** |{% endif %}
| Verwalten der SSH-Zertifizierungsstellen einer Organisation (weitere Informationen findest du unter [Verwalten der SSH-Zertifizierungsstellen deiner Organisation](/articles/managing-your-organizations-ssh-certificate-authorities)) | **X** |  |  |
| Erstellen von Projektboards (Informationen unter [Berechtigungen für Projektboards einer Organisation](/articles/project-board-permissions-for-an-organization)) | **X** | **X** | **X** |
| Anzeigen und Posten von öffentlichen Teamdiskussionen für **alle Teams** (Informationen unter [Informationen zu Teamdiskussionen](/organizations/collaborating-with-your-team/about-team-discussions)) | **X** | **X** | **X**  |
| Anzeigen und Posten von privaten Teamdiskussionen für **alle Teams** (Informationen unter [Informationen zu Teamdiskussionen](/organizations/collaborating-with-your-team/about-team-discussions)) | **X** |  |  |
| Bearbeiten und Löschen von Teamdiskussionen in **allen Teams** (Informationen unter [Verwalten störender Kommentare](/communities/moderating-comments-and-conversations/managing-disruptive-comments)) | **X** |  |  |  |
| Ausblenden von Kommentaren zu Commits, Pull Requests und Issues (Informationen unter [Verwalten störender Kommentare](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)) | **X** | **X** | **X**  |
| Deaktivieren von Teamdiskussionen für eine Organisation (weitere Informationen findest du unter [Deaktivieren von Teamdiskussionen für deine Organisation](/articles/disabling-team-discussions-for-your-organization)) | **X** |  |  |
| Festlegen eines Teamprofilbilds für **alle Teams** (weitere Informationen findest du unter [Festlegen des Profilbilds deines Teams](/articles/setting-your-team-s-profile-picture)) | **X** |  |  |{% ifversion ghes %}
| Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites aus Repositorys in der Organisation (weitere Informationen findest du unter [Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)) | **X** | |  |{% endif %}
| [Verschieben von Teams in der Hierarchie einer Organisation](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Pullen (Lesen) *aller Repositorys* in der Organisation | **X** | | **X** |
| Pushen (Schreiben) und Klonen (Kopieren) *aller Repositorys* in der Organisation | **X** | |  |
| Umwandeln von Organisationsmitgliedern in [externe Mitarbeiter*innen](#outside-collaborators) | **X** | |  |
| [Anzeigen von Personen mit Zugriff auf ein Repository der Organisation](/articles/viewing-people-with-access-to-your-repository) | **X** | |  |
| [Exportieren einer Liste der Personen mit Zugriff auf ein Repository der Organisation](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |  |
| Verwalten von Standardbezeichnungen (weitere Informationen findest du unter [Verwalten von Standardbezeichnungen für Repositorys in deiner Organisation](/articles/managing-default-labels-for-repositories-in-your-organization)) | **X** | |  |{% ifversion pull-request-approval-limit %}
| Verwalten von Pull Request-Überprüfungen in der Organisation (weitere Informationen findest du unter [Verwalten von Pull Request-Überprüfungen in deiner Organisation](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)) | **X** |  | |  |{% endif %}
{% ifversion ghae %}| Verwalten von IP-Zulassungslisten (siehe [Einschränken des Netzwerkdatenverkehrs in deinem Unternehmen mit einer Liste zugelassener IP-Adressen](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)) | **X** | |  |{% endif %}

{% else %}
<!-- GHES and GHAE older versions don't have columns for Moderators, Billing managers or Security managers. -->

| Aktion in der Organisation | Besitzer | Member |
|:--------------------|:------:|:-------:|
| Personen zum Beitritt zur Organisation einladen | **X** |  |
| Einladungen zum Beitritt zu der Organisation bearbeiten und zurückziehen | **X** |  |
| Mitglied aus der Organisation entfernen | **X** | | |
| Ehemaliges Mitglied der Organisation wieder einsetzen | **X** | | |
| Hinzufügen und Entfernen von Personen aus **allen Teams** | **X** |  |  
| Höherstufen von Organisationsmitgliedern auf die Rolle des *Maintainers für ein Team* | **X** |  |
| Konfigurieren von Code Review-Zuweisungen (weitere Informationen findest du unter [Verwalten von Code Review-Einstellungen für dein Team](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)) | **X** |  |
| Hinzufügen von Mitarbeiter*innen zu **allen Repositorys** | **X** |  |
| Auf das Auditprotokoll der Organisation zugreifen | **X** |  |
| Bearbeiten der Profilseite deiner Organisation (weitere Informationen findest du unter [Informationen zum Profil deiner Organisation](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)) | **X** |  |  |{% ifversion ghes %}
| Überprüfen der Domänen deiner Organisation (weitere Informationen finest du unter [Überprüfen der Domäne deiner Organisation](/articles/verifying-your-organization-s-domain)) | **X** |  |
| Einschränken von E-Mail-Benachrichtigungen auf überprüfte oder genehmigte Domänen (weitere Informationen findest du unter [Einschränken von E-Mail-Benachrichtigungen für deine Organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)) | **X** |  |{% endif %}
| Löschen **aller Teams** | **X** |  |
| Das Organisationskonto einschließlich aller Repositorys löschen | **X** |  |
| Erstellen von Teams (weitere Informationen findest du unter [Festlegen von Berechtigungen zur Teamerstellung in deiner Organisation](/articles/setting-team-creation-permissions-in-your-organization)) | **X** | **X** |
| Alle Organisationsmitglieder und Teams sehen | **X** | **X** |
| @mention aller sichtbaren Teams | **X** | **X** |
| Kann die Rolle des *Maintainers für ein Team* zugewiesen werden | **X** | **X** |
| Repositorys übertragen | **X** | |
| Verwalten der SSH-Zertifizierungsstellen einer Organisation (weitere Informationen findest du unter [Verwalten der SSH-Zertifizierungsstellen deiner Organisation](/articles/managing-your-organizations-ssh-certificate-authorities)) | **X** |  |
| Erstellen von Projektboards (Informationen unter [Berechtigungen für Projektboards einer Organisation](/articles/project-board-permissions-for-an-organization)) | **X** | **X** | |
| Anzeigen und Posten von öffentlichen Teamdiskussionen für **alle Teams** (Informationen unter [Informationen zu Teamdiskussionen](/organizations/collaborating-with-your-team/about-team-discussions)) | **X** | **X** |  |
| Anzeigen und Posten von privaten Teamdiskussionen für **alle Teams** (Informationen unter [Informationen zu Teamdiskussionen](/organizations/collaborating-with-your-team/about-team-discussions)) | **X** |  |  |
| Bearbeiten und Löschen von Teamdiskussionen in **allen Teams** (Informationen unter [Verwalten störender Kommentare](/communities/moderating-comments-and-conversations/managing-disruptive-comments)) | **X** |  |  |
| Ausblenden von Kommentaren zu Commits, Pull Requests und Issues (Informationen unter [Verwalten störender Kommentare](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)) | **X** | **X** | **X** |
| Deaktivieren von Teamdiskussionen für eine Organisation (weitere Informationen findest du unter [Deaktivieren von Teamdiskussionen für deine Organisation](/articles/disabling-team-discussions-for-your-organization)) | **X** |  |  |
| Festlegen eines Teamprofilbilds für **alle Teams** (weitere Informationen findest du unter [Festlegen des Profilbilds deines Teams](/articles/setting-your-team-s-profile-picture)) | **X** |  |  |{% ifversion ghes %}
| Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites aus Repositorys in der Organisation (weitere Informationen findest du unter [Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)) | **X** | |{% endif %}
| [Verschieben von Teams in der Hierarchie einer Organisation](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| Pullen (Lesen), Pushen (Schreiben) und Klonen (Kopieren) *aller Repositorys* in der Organisation | **X** | |
| Umwandeln von Organisationsmitgliedern in [externe Mitarbeiter*innen](#outside-collaborators) | **X** | |
| [Anzeigen von Personen mit Zugriff auf ein Repository der Organisation](/articles/viewing-people-with-access-to-your-repository) | **X** | |
| [Exportieren einer Liste der Personen mit Zugriff auf ein Repository der Organisation](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |
| Verwalten von Standardbezeichnungen (weitere Informationen findest du unter [Verwalten von Standardbezeichnungen für Repositorys in deiner Organisation](/articles/managing-default-labels-for-repositories-in-your-organization)) | **X** | |
{% ifversion ghae %}| Verwalten von IP-Zulassungslisten (siehe [Einschränken des Netzwerkdatenverkehrs in deinem Unternehmen mit einer Liste zugelassener IP-Adressen](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)) | **X** | |{% endif %}

{% endif %}

## Weitere Informationsquellen

- [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [Projektboardberechtigungen für eine Organisation](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)
