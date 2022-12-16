---
title: Sichtbarkeit eines Repositorys festlegen
intro: 'Du kannst festlegen, wer dein Repository anzeigen kann.'
redirect_from:
  - /articles/making-a-private-repository-public
  - /articles/making-a-public-repository-private
  - /articles/converting-a-public-repo-to-a-private-repo
  - /articles/setting-repository-visibility
  - /github/administering-a-repository/setting-repository-visibility
  - /github/administering-a-repository/managing-repository-settings/setting-repository-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository visibility
ms.openlocfilehash: 2ccdafed8e9efe2bf352033d8fa632147f6bb32b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332021'
---
## Über Änderungen der Repository-Sichtbarkeit

Organisationsinhaber können die Möglichkeit, die Sichtbarkeit des Repositorys zu ändern, auf Organisationsinhaber einschränken. Weitere Informationen findest du [Einschränken von Änderungen an der Repositorysichtbarkeit in deiner Organisation](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization).

{% ifversion ghec %}

Mitglieder eines {% data variables.product.prodname_emu_enterprise %} können nur die Sichtbarkeit von Repositorys festlegen, die ihrem persönlichen Konto gehören, und Repositorys in den Organisationen ihrer Unternehmen können nur privat oder intern sein. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).

{% endif %}

Es wird empfohlen, die folgenden Nachteile zu überprüfen, bevor du die Sichtbarkeit eines Repositorys änderst.

{% ifversion ghes or ghae %}

{% warning %}

**Warnung:** Änderungen an der Sichtbarkeit eines großen Repositorys oder Repositorynetzwerks können sich auf die Datenintegrität auswirken. Sichtbarkeitsänderungen können auch unbeabsichtigte Auswirkungen auf Forks haben. {% data variables.product.company_short %} empfiehlt Folgendes, bevor du die Sichtbarkeit eines Repositorynetzwerks änderst

- Warte auf einen Zeitraum reduzierter Aktivität auf {% data variables.product.product_location %}.

- Wende Dich an den {% ifversion ghes %}Website-Administrator{% elsif ghae %} des Unternehmensinhabers{% endif %}, bevor du fortfährst. Der {% ifversion ghes %}Website-Administrator{% elsif ghae %} des Unternehmensinhabers{% endif %} kann sich an {% data variables.contact.contact_ent_support %} wenden, um weitere Anleitungen zu erhalten.

{% endwarning %}

{% endif %}

### Repository als privat festlegen
{% ifversion fpt or ghes or ghec %}
* {% data variables.product.product_name %} trennt öffentliche Forks des öffentlichen Repositorys ab und setzt sie in ein neues Netzwerk ein. Öffentliche Forks werden nicht privat gemacht.{% endif %} {%- ifversion ghes or ghec or ghae %}
* Wenn du die Sichtbarkeit eines Repositorys von intern in privat änderst, entfernt {% data variables.product.prodname_dotcom %} Forks, die einem Benutzer gehören, der keinen Zugriff auf das neue private Repository hat. {% ifversion fpt or ghes or ghec %}Die Sichtbarkeit aller Forks ändert sich auch in privat. {% elsif ghae %}Wenn das interne Repository über Forks verfügt, ist die Sichtbarkeit der Forks bereits privat.{% endif %} Weitere Informationen findest du unter "[Was geschieht mit Forks, wenn ein Repository gelöscht oder die Sichtbarkeit geändert wird?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"
{%- endif %}

{%- ifversion fpt %}
* Wenn du {% data variables.product.prodname_free_user %} für persönliche Konten oder Organisationen verwendest, stehen einige Features im Repository nicht zur Verfügung, nachdem du die Sichtbarkeit in privat geändert hast. Die Veröffentlichung einer jeden veröffentlichten {% data variables.product.prodname_pages %}-Website wird automatisch zurückgezogen. Wenn du deiner {% data variables.product.prodname_pages %}-Website eine benutzerdefinierte Domain hinzugefügt hast, solltest du deine DNS-Einträge vor der Umschaltung des Repositorys in ein privates Repository entfernen oder aktualisieren, um das Risiko eines Domain-Takeovers auszuschließen. Weitere Informationen findest du unter "[{% data variables.product.company_short %}-Produkte](/get-started/learning-about-github/githubs-products)" und "[Verwalten einer benutzerdefinierten Domäne für deine {% data variables.product.prodname_pages %}-Website](/articles/managing-a-custom-domain-for-your-github-pages-site)".
{%- endif %}

{%- ifversion fpt or ghec %}
* {% data variables.product.prodname_dotcom %} enthalten das Repository nicht mehr im {% data variables.product.prodname_archive %}. Weitere Informationen findest du unter "[Informationen zum Archivieren von Inhalten und Daten in {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".
* {% data variables.product.prodname_GH_advanced_security %}-Features, z. B. {% data variables.product.prodname_code_scanning %}, funktionieren nicht mehr{% ifversion ghec %}, es sei denn, das Repository gehört zu einer Organisation, die Teil eines Unternehmens mit einer Lizenz für {% data variables.product.prodname_advanced_security %} und genügend Ersatzplätze{% endif %} ist. {% data reusables.advanced-security.more-info-ghas %} {%- endif %}

{%- ifversion ghes %}
* Es steht kein anonymer Git-Lesezugriff mehr zur Verfügung. Weitere Informationen findest du unter [Aktivieren des anonymen Git-Lesezugriffs für ein Repository](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository).
{%- endif %}

{% ifversion ghes or ghec or ghae %}

### Repository als intern festlegen

* Alle Forks des Repositorys verbleiben im Repositorynetzwerk, und {% data variables.product.product_name %} verwaltet die Beziehung zwischen dem Stamm-Repository und dem Fork. Weitere Informationen findest du unter "[Was geschieht mit Forks, wenn ein Repository gelöscht wird oder sich seine Sichtbarkeit ändert?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"

{% endif %}

{% ifversion fpt or ghes or ghec %}

### Repository als öffentlich festlegen

* {% data variables.product.product_name %} trennt private Forks ab und ändert sie in ein eigenständiges privates Repository. Weitere Informationen findest du unter "[Was geschieht mit Forks, wenn ein Repository gelöscht wird oder sich seine Sichtbarkeit ändert?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)"{% ifversion fpt or ghec %}
* Wenn du dein privates Repository in ein öffentliches Repository konvertierst, um damit u. a. ein Open Source Projekts zu erstellen, lies die [Open Source-Leitfäden](http://opensource.guide), die hilfreiche Tipps und Vorgaben enthalten. Du kannst auch an einem kostenlosen Kurs zum Verwalten von Open Source Projekten mit [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}) teilnehmen. Sobald dein Repository der Öffentlichkeit zugänglich ist, kannst du im Community-Profil des Repositorys überprüfen, ob dein Projekt die Best Practices zur Unterstützung von Mitarbeitern erfüllt. Weitere Informationen findest du unter [Anzeigen deines Community-Profils](/articles/viewing-your-community-profile).
* Das Repository erhält automatisch Zugriff auf {% data variables.product.prodname_GH_advanced_security %}-Features.

Informationen zur Verbesserung der Repositorysicherheit findest du unter "[Sichern deines Repositorys](/code-security/getting-started/securing-your-repository)".{% endif %}

{% endif %}

## Ändern der Sichtbarkeit eines Repositorys

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Klicke unter "Danger Zone" (Gefahrenzone) rechts neben "Change repository visibility" (Sichtbarkeit des Repositorys ändern) auf " **Change visibility**" (Sichtbarkeit ändern).
   ![Schaltfläche "Change visibility" (Sichtbarkeit ändern)](/assets/images/help/repository/repo-change-vis.png)
4. Wähle eine Sichtbarkeit aus.
{% ifversion fpt or ghec %} ![Dialogfeld mit Optionen für die Sichtbarkeit des Repositorys](/assets/images/help/repository/repo-change-select.png){% else %} ![Dialogfeld mit Optionen für die Sichtbarkeit des Repositorys](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. Gib zum Überprüfen, ob du die Sichtbarkeit des richtigen Repositorys änderst, den Namen des Repositorys ein, das du ändern möchtest.
6. Klicke auf **I understand, change repository visibility** (Ich habe verstanden, Sichtbarkeit des Repositorys ändern).
{% ifversion fpt or ghec %} ![Schaltfläche "Confirm change of repository visibility" (Änderung der Sichtbarkeit des Repositorys bestätigen)](/assets/images/help/repository/repo-change-confirm.png){% else %} ![Schaltfläche "Confirm change of repository visibility" (Änderung der Sichtbarkeit des Repositorys bestätigen)](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}


## Weiterführende Themen
- [Informationen zu Repositorys](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)
