---
title: Repository-Erstellung in Ihrer Organisation einschränken
intro: Zum Schutz Deiner Organisationsdaten kannst du die Berechtigungen für die Erstellung von Repositorys innerhalb Deiner Organisation konfigurieren.
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restrict repository creation
ms.openlocfilehash: da5d32962c52b752dff9dd9012f8cc8e5494d8c6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068319'
---
Du kannst wählen, ob Mitglieder in Deiner Organisation Repositorys erstellen können. {% ifversion ghec or ghes or ghae %}Wenn du Mitgliedern das Erstellen von Repositorys gestatten möchtest, kannst du auswählen, welche Typen von Repositorys die Mitglieder erstellen können.{% elsif fpt %}Wenn du Mitgliedern das Erstellen von Repositorys gestatten möchtest, kannst du auswählen, ob Mitglieder öffentliche und private Repositorys oder nur öffentliche Repositorys erstellen können.{% endif %} Organisationsbesitzer können immer jeden Repositorytyp erstellen.

{% ifversion fpt %} Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden, können Mitglieder auf das Erstellen privater Repositorys beschränken. Weitere Informationen findest du unter [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
{% endif %}

{% ifversion ghec or ghae or ghes %} Unternehmensbesitzer können die Optionen einschränken, die dir für die Richtlinien zur Repositoryerstellung deiner Organisation zur Verfügung stehen. Weitere Informationen findest du unter [Erzwingen von Repositoryverwaltungsrichtlinien in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation).
{% endif %}

{% warning %}

**Warnung:** Diese Einstellung schränkt nur die Sichtbarkeitsoptionen ein, die bei der Erstellung von Repositorys verfügbar sind, sie schränkt aber nicht die Möglichkeit ein, die Sichtbarkeit des Repositorys zu einem späteren Zeitpunkt zu ändern. Weitere Informationen zum Einschränken von Änderungen an der Sichtbarkeit vorhandener Repositorys findest du unter [Einschränken von Änderungen der Sichtbarkeit von Repositorys in deiner Organisation](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization).

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Wähle unter „Repositoryerstellung“ mindestens eine Optionen aus.

   {%- ifversion ghes or ghec or ghae %} ![Optionen für die Repositoryerstellung](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png) {%- elsif fpt %} ![Optionen für die Repositoryerstellung](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png) {%- endif %}
   
   {% ifversion fpt or ghec %} {% note %}

   **Hinweis:** Um Mitglieder nur auf das Erstellen privater Repositorys einzuschränken, muss deine Organisation {% data variables.product.prodname_ghe_cloud %} verwenden. {% data reusables.enterprise.link-to-ghec-trial %}

   {% endnote %} {%- endif %}

6. Klicken Sie auf **Speichern**.
