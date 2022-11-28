---
title: Konfigurieren von benutzerdefinierten Fußzeilen
intro: 'Du kannst Benutzern einfachen Zugriff auf unternehmensspezifische Links gewähren, indem du {% data variables.product.product_name %} benutzerdefinierte Fußzeilen hinzufügst.'
versions:
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Configure custom footers
ms.openlocfilehash: d051e2399841e90291de62e496c534520465235a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106947'
---
Unternehmensbesitzer können {% data variables.product.product_name %} so konfigurieren, dass benutzerdefinierte Fußzeilen mit bis zu fünf zusätzlichen Links angezeigt werden.

![Benutzerdefinierte Fußzeile](/assets/images/enterprise/custom-footer/octodemo-footer.png)

Die Anzeige der benutzerdefinierten Fußzeile erfolgt oberhalb der {% data variables.product.prodname_dotcom %}-Fußzeile {% ifversion ghes or ghae %}für alle Benutzer auf allen Seiten von {% data variables.product.product_name %}{% elsif ghec %}für alle Mitglieder und Mitarbeiter eines Unternehmens auf allen Repository- und Organisationsseiten für Repositorys und Organisationen, die zum Unternehmen gehören{% endif %}.

## Konfigurieren von benutzerdefinierten Fußzeilen für dein Unternehmen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}

1. Klicke unter „Einstellungen“ auf **Profil**.
{%- ifversion ghec %} ![Unternehmensprofileinstellungen](/assets/images/enterprise/custom-footer/enterprise-profile-ghec.png) {%- else %} ![Unternehmensprofileinstellungen](/assets/images/enterprise/custom-footer/enterprise-profile-ghes.png) {%- endif %}

1. Klicke oben im Abschnitt „Profil“ auf **Benutzerdefinierte Fußzeile**.
![Abschnitt „Benutzerdefinierte Fußzeile“](/assets/images/enterprise/custom-footer/custom-footer-section.png)

1. Füge bis zu fünf Links in den angezeigten Feldern hinzu.
![Hinzufügen von Fußzeilenlinks](/assets/images/enterprise/custom-footer/add-footer-links.png)

1. Klicke auf **Benutzerdefinierte Fußzeile aktualisieren**, um den Inhalt zu speichern und die benutzerdefinierte Fußzeile anzuzeigen.
![Aktualisieren der benutzerdefinierten Fußzeile](/assets/images/enterprise/custom-footer/update-custom-footer.png)
