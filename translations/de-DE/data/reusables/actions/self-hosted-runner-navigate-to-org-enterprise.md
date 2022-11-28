---
ms.openlocfilehash: 48dc95869bae901bf79df320e83b65979dedfd65
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763748"
---
{% ifversion fpt %}
1. Navigiere zur Hauptseite der Organisation, auf der dein selbstgehosteter Runner registriert ist.
2. Klicke auf {% octicon "gear" aria-label="The Settings gear" %} **Einstellungen**.
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. Navigiere zu der Position, an der dein Runner registriert ist:
   * **In einer Organisation**: Navigiere zur Hauptseite, und klicke auf {% octicon "gear" aria-label="The Settings gear" %} **Einstellungen**.
   * **Bei Verwendung eines Runners auf Unternehmensebene**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. Navigiere zu den {% data variables.product.prodname_actions %}-Einstellungen:
   * **In einer Organisation**: 

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * **Bei Verwendung eines Runners auf Unternehmensebene**: 

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {% endif %}
