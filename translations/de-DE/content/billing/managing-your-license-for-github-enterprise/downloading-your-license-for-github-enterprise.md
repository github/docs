---
title: Herunterladen deiner Lizenz für GitHub Enterprise
intro: 'Du kannst eine Kopie deiner Lizenzdatei für {% data variables.product.prodname_ghe_server %} herunterladen.'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Download your license
ms.openlocfilehash: eed588e2580558280e2e11639f0904b5f9fcf118
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085612'
---
## Informationen zu Lizenzdateien für {% data variables.product.prodname_enterprise %}

Nachdem du eine Lizenz für {% data variables.product.prodname_enterprise %} von {% data variables.contact.contact_enterprise_sales %} erworben oder aktualisiert hast, musst du deine neue Lizenzdatei herunterladen. Weitere Informationen zu Lizenzen für {% data variables.product.prodname_enterprise %} findest du unter [Informationen zu Lizenzen für {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise).

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Herunterladen deiner Lizenz von {% data variables.product.prodname_dotcom_the_website %}

Du benötigst ein Unternehmenskonto für {% data variables.product.prodname_dotcom_the_website %}, um deine Lizenz von {% data variables.product.prodname_dotcom_the_website %} herunterladen zu können. Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion ghes %} in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% elsif ghec %}.{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. Klicke auf der linken Seitenleiste auf **Enterprise-Lizenzierung**.
  ![Registerkarte „Enterprise-Lizenzierung“ auf der Seitenleiste mit den Unternehmenskontoeinstellungen](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Klicke unter „Enterprise Server-Instanzen“ auf {% octicon "download" aria-label="The download icon" %}, um deine Lizenzdatei herunterzuladen.
  ![GitHub Enterprise Server-Lizenz herunterladen](/assets/images/help/business-accounts/download-ghes-license.png)

Nach dem Herunterladen deiner Lizenzdatei kannst du die Datei in {% data variables.product.product_location_enterprise %} hochladen, um deine Anwendung zu überprüfen. Weitere Informationen findest du unter {% ifversion ghec %}[Hochladen einer neuen Lizenz auf {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server) in der Dokumentation zu {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}[Hochladen einer neuen Lizenz auf {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server).{% endif %}

## Herunterladen deiner Lizenz, wenn du kein Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %} besitzt

Wenn du kein Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %} besitzt oder nicht sicher bist, kannst du deine {% data variables.product.prodname_ghe_server %}-Lizenz von der [{% data variables.product.prodname_enterprise %}-Website](https://enterprise.github.com/download) herunterladen.

Wenn du Fragen zum Herunterladen deiner Lizenz hast, kontaktiere {% data variables.contact.contact_enterprise_sales %}.
