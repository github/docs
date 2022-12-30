---
title: Verwalten der Veröffentlichung von GitHub Pages-Websites für deine Organisation
intro: 'Du kannst kontrollieren, ob Organisationsmitglieder {% data variables.product.prodname_pages %}-Sites von Repositorys in der Organisation{% ifversion ghec %} veröffentlichen können, und die Sichtbarkeit einschränken, die Mitglieder für die Sites auswählen können{% endif %}.'
permissions: 'Organization owners can manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - Organizations
  - Teams
shortTitle: Manage Pages site publication
ms.openlocfilehash: cce086c19dd6f20de28dde599c13074c48851753
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876862'
---
{% ifversion fpt %} Du kannst festlegen, ob Organisationsmitglieder {% data variables.product.prodname_pages %}-Websites veröffentlichen dürfen oder nicht. Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden, können außerdem entscheiden, ob sie eine Veröffentlichung als öffentliche Website, als private Website, als beides oder keines von beidem zulassen. Weitere Informationen findest du unter [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
{% elsif ghec %} Du kannst festlegen, ob Organisationsmitglieder öffentliche oder private Websites, Websites mit beiden Optionen oder ohne diese Optionen erstellen dürfen. Weitere Informationen zur Zugriffssteuerung für {% data variables.product.prodname_pages %}-Websites findest du unter [Ändern der Sichtbarkeit deiner {% data variables.product.prodname_pages %}-Website](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).
{% endif %}

Wenn du die Veröffentlichung von {% data variables.product.prodname_pages %}-Websites verbietest, bleiben alle bereits veröffentlichten Websites veröffentlicht. Du kannst die Veröffentlichung der Website manuell aufheben. Weitere Informationen findest du unter [Aufheben der Veröffentlichung einer {% data variables.product.prodname_pages %}-Website](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}{% ifversion fpt %}
1. Aktiviere oder deaktiviere unter „Seitenerstellung“ die Option **Öffentlich**.

   ![Kontrollkästchen zum Zulassen oder Verhindern der Erstellung von {% data variables.product.prodname_pages %}-Websites](/assets/images/help/organizations/github-pages-creation-checkboxes-fpt.png){% elsif ghec %}
1. Wähle unter „Seitenerstellung“ die Sichtbarkeitseinstellungen aus, die du zulassen möchtest, und deaktiviere die Sichtbarkeitseinstellungen, die du nicht zulassen möchtest.

   ![Kontrollkästchen zum Zulassen oder Verhindern der Erstellung von {% data variables.product.prodname_pages %}-Websites](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. Aktiviere oder deaktiviere unter „Seitenerstellung“ die Option **Mitgliedern die Veröffentlichung von Websites erlauben**.

   ![Deaktiviertes Kontrollkästchen „Mitgliedern die Veröffentlichung von Websites erlauben“](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}{% ifversion fpt or ghec %}

   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3%}{% endif %}

1. Klicken Sie auf **Speichern**.

## Weitere Informationsquellen

- [Informationen zu {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)
