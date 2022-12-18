---
title: Informationen zu Enterprise-Konten
intro: 'Mithilfe von {% data variables.product.product_name %} kannst du ein Unternehmenskonto verwenden, um {% ifversion ghec %}die Zusammenarbeit zwischen deinen Organisationen zu ermöglichen und dabei{% elsif ghes or ghae %}{% endif %} Administrator*innen einen zentralen Punkt zum Anzeigen und Verwalten bereitzustellen.'
redirect_from:
  - /articles/about-github-business-accounts
  - /articles/about-enterprise-accounts
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: b0d1455fef80094f0dcdf20332605bd427d9c441
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127627'
---
## Informationen zu Unternehmenskonten auf {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

Mit deinem Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %} kannst du mehrere Organisationen verwalten. Dein Unternehmenskonto benötigt einen Handle, wie z. B. eine Organisation oder ein Benutzerkonto auf {% data variables.product.prodname_dotcom %}.

{% elsif ghes or ghae %}

Das Unternehmenskonto auf {% ifversion ghes %}{% data variables.location.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} ermöglicht dir die Verwaltung der Organisationen{% ifversion ghes %} auf{% elsif ghae %} im Besitz{% endif %} deiner {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}-Instanz{% elsif ghae %}deines Unternehmens{% endif %}.

{% endif %}

Organisationen sind gemeinsam genutzte Konten, in denen Unternehmensmitglieder an vielen Projekten gleichzeitig zusammenarbeiten können. Organisationsbesitzer können den Zugriff auf die Daten und Projekte der Organisation mit komplexen Sicherheits- und Administrationsfunktionen verwalten. Weitere Informationen findest du unter [Informationen zu Organisationen](/organizations/collaborating-with-groups-in-organizations/about-organizations).

{% ifversion ghec %} In den Unternehmenseinstellungen können Unternehmensbesitzer*innen vorhandene Organisationen einladen, deinem Unternehmenskonto beizutreten, Organisationen zwischen Unternehmenskonten zu übertragen oder neue Organisationen zu erstellen. Weitere Informationen findest du unter [Hinzufügen von Organisationen zu deinem Unternehmen](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise).
{% endif %}

Mit deinem Unternehmenskonto kannst du Richtlinien für alle Organisationen verwalten und erzwingen, die sich im Besitz des Unternehmens befinden. {% data reusables.enterprise.about-policies %} Weitere Informationen findest du unter [Informationen zu Unternehmensrichtlinien](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies).

{% ifversion ghec %}

{% data reusables.enterprise.create-an-enterprise-account %} Weitere Informationen findest du unter „[Erstellen eines Unternehmenskontos](/admin/overview/creating-an-enterprise-account)“.

{% endif %}

## Informationen zur Verwaltung deines Unternehmenskontos

{% ifversion ghes or ghae %}

Über dein Unternehmenskonto für {% ifversion ghae %}{% data variables.product.product_name %}{% elsif ghes %} eine {% data variables.product.prodname_ghe_server %}-Instanz{% endif %} können Administrator*innen Unternehmensmitgliedschaften anzeigen{% ifversion remove-enterprise-members %} und verwalten{% endif %}{% ifversion enterprise-owner-join-org %}, ihre eigene Mitgliedschaft in Organisationen im Besitz des Unternehmens verwalten{% endif %} und Folgendes für {% ifversion ghes %}die{% data variables.product.prodname_ghe_server %}-Instanz{% elsif ghae %}das Unternehmen in {% data variables.product.prodname_ghe_managed %}{% endif %} verwalten.

{% ifversion ghes %}
- Lizenznutzung{% endif %}
- Sicherheit ({% ifversion ghae %}Einmaliges Anmelden (SSO), Listen zugelassener IP-Adressen, {% endif %}SSH-Zertifizierungsstellen, zweistufige Authentifizierung)
- Unternehmensrichtlinien für Organisationen im Besitz des Unternehmenskontos

{% endif %}

{% ifversion ghes %}

### Informationen zur Verwaltung deines Unternehmenskontos auf {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion ghec or ghes %}Wenn du {% data variables.product.prodname_enterprise %} testest oder erwirbst, kannst du{% ifversion ghes %} auch{% endif %} ein Unternehmenskonto für {% data variables.product.prodname_ghe_cloud %} auf {% data variables.product.prodname_dotcom_the_website %} erstellen. Administrator*innen für das Unternehmenskonto für {% data variables.product.prodname_dotcom_the_website %} können Unternehmensmitgliedschaften anzeigen {% ifversion remove-enterprise-members %} und verwalten{% endif %}{% ifversion enterprise-owner-join-org %}, ihre eigene Mitgliedschaft in Organisationen im Besitz des Unternehmens verwalten{% endif %} und Folgendes für das Unternehmenskonto{% ifversion ghes %} in {% data variables.product.prodname_dotcom_the_website %}{% endif %} verwalten.

- Abrechnung und Nutzung (Dienste auf {% data variables.product.prodname_dotcom_the_website %}, in {% data variables.product.prodname_GH_advanced_security %}, Benutzerlizenzen)
- Sicherheit (Einmaliges Anmelden (SSO), Listen zugelassener IP-Adressen, SSH-Zertifizierungsstellen, zweistufige Authentifizierung)
- Unternehmensrichtlinien für Organisationen im Besitz des Unternehmenskontos

Wenn du sowohl {% data variables.product.prodname_ghe_cloud %} als auch {% data variables.product.prodname_ghe_server %} verwendest, kannst du auch Folgendes für {% data variables.product.prodname_ghe_server %} aus deinem Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %} verwalten.

- Abrechnung und Nutzung für {% data variables.product.prodname_ghe_server %}-Instanzen
- Anfragen und Unterstützen von Bundle-Sharing mit {% data variables.contact.enterprise_support %}

Du kannst das Unternehmenskonto in {% data variables.location.product_location_enterprise %} auch mit deinem Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %} verbinden, um Lizenznutzungsdetails für dein {% data variables.product.prodname_enterprise %}-Abonnement von {% data variables.product.prodname_dotcom_the_website %} anzuzeigen. Weitere Informationen findest du unter {% ifversion ghec %}„[Synchronisieren der Lizenznutzung zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)“ in der Dokumentation zu {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}„[Synchronisieren der Lizenznutzung zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)“.{% endif %}

Weitere Informationen zu den Unterschieden zwischen {% data variables.product.prodname_ghe_cloud %} und {% data variables.product.prodname_ghe_server %} findest du unter„[{% data variables.product.prodname_dotcom %}-Produkte](/get-started/learning-about-github/githubs-products)“. {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

## Informationen zur Abrechnung für dein Unternehmenskonto

Die Rechnung für dein Unternehmenskonto umfasst die monatlichen Kosten für jedes Mitglied deines Unternehmens. Die Rechnung umfasst {% ifversion ghec %}alle kostenpflichtigen Lizenzen in Organisationen außerhalb deines Unternehmenskontos, Abonnements für Apps in {% data variables.product.prodname_marketplace %}, {% endif %}{% ifversion ghec or ghae %}zusätzliche kostenpflichtige Dienste für dein Unternehmen{% ifversion ghec %} wie Datenpakete für {% data variables.large_files.product_name_long %}{% endif %} und{% endif %} Nutzung für {% data variables.product.prodname_GH_advanced_security %}.

{% ifversion ghec %}

Weitere Informationen zur Abrechnung für dein {% data variables.product.prodname_ghe_cloud %}-Abonnement findest du unter „[Anzeigen des Abonnements und der Nutzung für dein Unternehmenskonto](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)“ und „[Informationen zur Abrechnung für dein Unternehmen](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)“.

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

Weitere Informationen zur Abrechnung für {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %} findest du unter „[Informationen zur Abrechnung für dein Unternehmen](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)“.

{% endif %}

{% ifversion ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.prodname_enterprise %} bietet zwei Bereitstellungsoptionen. Zusätzlich zu {% data variables.product.prodname_ghe_cloud %} kannst du {% data variables.product.prodname_ghe_server %} verwenden, um die Entwicklungsarbeiten für dein Unternehmen in deinem Rechenzentrum oder unterstützten Cloudanbieter zu hosten. {% endif %}Unternehmensbesitzer auf {% data variables.product.prodname_dotcom_the_website %} können mithilfe eines Unternehmenskontos die Zahlung und Lizenzierung für {% data variables.product.prodname_ghe_server %}-Instanzen verwalten. Weitere Informationen findest du unter „[{% data variables.product.company_short %}-Produkte](/get-started/learning-about-github/githubs-products#github-enterprise)“ und „[Verwalten deiner Lizenz für {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)“.

{% endif %}

## Weiterführende Themen

- „[Unternehmenskonten](/graphql/guides/managing-enterprise-accounts)“ in der Dokumentation zur GraphQL-API
