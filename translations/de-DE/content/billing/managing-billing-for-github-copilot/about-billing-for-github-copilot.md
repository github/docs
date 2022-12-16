---
title: Informationen zur Abrechnung für GitHub Copilot
intro: 'Wenn du {% data variables.product.prodname_copilot %} verwenden möchtest, benötigst du entweder ein Abonnement für {% data variables.product.prodname_copilot_for_individuals %} in deinem persönlichen Konto, oder dir muss von einer Organisation ein Arbeitsplatz in {% data variables.product.prodname_ghe_cloud %} mit einem Abonnement für {% data variables.product.prodname_copilot_for_business %} zugewiesen werden.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Billing for GitHub Copilot
ms.openlocfilehash: f82f284ac2bdb8a4bc56587ff17826ae7ca96585
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193295'
---
## Informationen zur Abrechnung für {% data variables.product.prodname_copilot %}

Wenn du {% data variables.product.prodname_copilot %} verwenden möchtest, benötigst du ein Abonnement für dein persönliches {% data variables.product.prodname_dotcom %}-Konto. Falls du Mitglied einer {% data variables.product.prodname_ghe_cloud %}-Organisation mit einem {% data variables.product.prodname_copilot_business_short %}-Abonnement bist, muss dir durch einen Organisationsadministrator ein Arbeitsplatz zugewiesen werden. Weitere Informationen zu {% data variables.product.prodname_copilot %} findest du unter [Informationen zu {% data variables.product.prodname_copilot %}](/en/copilot/overview-of-github-copilot/about-github-copilot). 

Weitere Informationen zum Verwalten von {% data variables.product.prodname_copilot %} über {% data variables.product.prodname_ghe_cloud %} findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_copilot %} in deinem Unternehmen](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise){% ifversion ghec %}.{% endif %}{% ifversion fpt %} in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% endif %}

Bevor du ein kostenpflichtiges Abonnement für ein persönliches Konto startest, kannst du eine einmalige 60-tägige Testversion einrichten, um {% data variables.product.prodname_copilot %} auszuprobieren. Zum Ausprobieren einer Testversion musst du einen monatlichen oder jährlichen Abrechnungszeitraum auswählen und eine Zahlungsmethode angeben. Wenn du die Testversion vor Ende der 60 Tage nicht kündigst, wird die Testversion automatisch in ein kostenpflichtiges Abonnement konvertiert. Du kannst deine {% data variables.product.prodname_copilot %}-Testversion während der 60 Tage jederzeit kündigen, ohne dass sie berechnet wird. Wenn du die Testversion vor Ablauf der Frist kündigst, hast du bis zum Ende des 60-tägigen Testzeitraums weiterhin Zugriff auf {% data variables.product.prodname_copilot %}. Weitere Informationen findest du unter [Verwalten deines Abonnements für {% data variables.product.prodname_copilot_for_individuals %}](/en/billing/managing-billing-for-github-copilot/managing-your-github-copilot-for-individuals-subscription).

## Preise für {% data variables.product.prodname_copilot_for_individuals %}


Das {% data variables.product.prodname_copilot %}-Abonnement ist für einen monatlichen oder jährlichen Abrechnungszeitraum erhältlich. Wenn du einen monatlichen Abrechnungszeitraum auswählst, werden dir 10 USD pro Kalendermonat berechnet. Wenn du einen jährlichen Abrechnungszeitraum auswählst, werden dir 100 USD pro Jahr berechnet. Du kannst deinen Abrechnungszeitraum jederzeit ändern, und die Änderung wird ab Beginn des nächsten Abrechnungszeitraums angezeigt.

Wenn du über ein aktives {% data variables.product.prodname_copilot %}-Abonnement verfügst und dir dann im Rahmen eines Abonnements für {% data variables.product.prodname_copilot_for_business %} in {% data variables.product.prodname_ghe_cloud %} ein Arbeitsplatz zugewiesen wird, wird dein persönliches {% data variables.product.prodname_copilot %}-Abonnement automatisch gekündigt. Du erhältst eine anteilige Rückerstattung für ggf. verbleibende Teile des aktuellen Abrechnungszeitraums deines persönlichen Abonnements. Anschließend kannst du {% data variables.product.prodname_copilot %} gemäß den auf Unternehmens- oder Organisationsebene festgelegten Richtlinien weiterverwenden.

Für überprüfte Lernende, Lehrkräfte und Maintainer beliebter Open-Source-Repositorys auf {% data variables.product.company_short %} steht ein kostenloses Abonnement für {% data variables.product.prodname_copilot %} zur Verfügung. Sofern du die Kriterien als Open Source-Maintainer erfüllst, wirst du automatisch benachrichtigt, wenn du die {% data variables.product.prodname_copilot %}-Abonnementseite besuchst. Falls du Student bist und derzeit das {% data variables.product.prodname_student_pack %} erhältst, wird dir beim Besuch der {% data variables.product.prodname_copilot %}-Abonnementseite ebenfalls ein kostenloses Abonnement angeboten. Weitere Informationen zum {% data variables.product.prodname_student_pack %} findest du unter [Beantragen von {% data variables.product.prodname_global_campus %} als Studierende*r](/free-pro-team@latest/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student).

{% ifversion ghec %}
## Preise für {% data variables.product.prodname_copilot_for_business %}

Das Abonnement für {% data variables.product.prodname_copilot_for_business %} ist mit einem monatlichen Zyklus verfügbar und wird mit 19 USD pro Benutzer und Monat in Rechnung gestellt. Die Abrechnung für {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_ghe_cloud %} wird am Ende jedes Abrechnungszyklus verarbeitet. 

Die abzurechnenden Benutzer werden basierend auf der Anzahl von {% data variables.product.prodname_copilot %}-Arbeitsplätzen berechnet, die zu Beginn eines Abrechnungszyklus zugewiesen waren oder während des Abrechnungszyklus zugewiesen wurden. Arbeitsplätze, die während des Abrechnungszyklus zugewiesen werden, werden anteilig auf Basis der Anzahl verbleibender Tage im Zyklus berechnet. Während eines Abrechnungszyklus entfernte Arbeitsplatzzuweisungen werden ab Beginn des nächsten Zyklus berücksichtigt.

Die Arbeitsplatzzuweisung für {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_ghe_cloud %} wird durch Administratoren von Organisationen verwaltet, denen auf Unternehmensebene Zugriff auf {% data variables.product.prodname_copilot %} gewährt wurde. Wenn du Mitglied mehrerer Organisationen des gleichen Unternehmens bist, können dir {% data variables.product.prodname_copilot %}-Arbeitsplätze in mehreren Organisationen zugewiesen werden. Dies wird dem Unternehmen aber nur einmal in Rechnung gestellt. Weitere Informationen findest du unter [Konfigurieren der {% data variables.product.prodname_copilot %}-Einstellungen in deiner Organisation](/enterprise-cloud@latest/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization).

Richtlinieneinstellungen und die Nutzungsübersicht für {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_ghe_cloud %} sind auf Unternehmensebene verfügbar. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_copilot %} in deinem Unternehmen](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise) sowie unter [Anzeigen deiner {% data variables.product.prodname_copilot %}-Nutzung](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage).

{% endif %}
