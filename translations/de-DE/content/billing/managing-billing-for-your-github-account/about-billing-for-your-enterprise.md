---
title: Informationen zur Abrechnung für dein Unternehmen
intro: 'Du kannst Abrechnungsinformationen für dein Unternehmen{% ifversion ghec or ghes %} Konto auf {% data variables.product.prodname_dotcom_the_website %}{% endif %} einsehen.'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
shortTitle: Billing for your enterprise
ms.openlocfilehash: 1b048c16293b7183636bc383ca926c4e5c7f0bd2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573409'
---
## Informationen zur Abrechnung für dein Unternehmen

{% ifversion ghae %}

{% data reusables.github-ae.about-billing %} Einmal pro Tag zählt {% data variables.product.prodname_dotcom %} die Anzahl der Benutzer mit einer Lizenz für dein Unternehmen. {% data variables.product.company_short %} stellt dir jeden lizenzierten Benutzer in Rechnung, unabhängig davon, ob sich der Benutzer an diesem Tag bei {% data variables.product.prodname_ghe_managed %} angemeldet hat.

Für kommerzielle Regionen beträgt der Preis pro Benutzer pro Tag 1,2580645161 $. Bei Monaten mit 31 Tagen belaufen sich die monatlichen Kosten für jeden Benutzer auf 39 $. Bei Monaten mit weniger Tagen sind die monatlichen Kosten niedriger. Jeder Abrechnungsmonat beginnt zu einem festen Zeitpunkt am ersten Tag des Kalendermonats.

Wenn du einen lizenzierten Benutzer in der Mitte eines Monats hinzufügst, werden für diesen Benutzer nur die Tage gezählt, an denen er über eine Lizenz verfügt. Wenn du einen lizenzierten Benutzer entfernst, bleibt dieser Benutzer bis zum Ende des Monats in der Zählung. Wenn du also einen Benutzer in der Mitte eines Monats hinzufügst und ihn später im selben Monat entfernst, wird der Benutzer ab dem Tag, an dem er hinzugefügt wurde, bis zum Ende des Monats in die Berechnung einbezogen. Es fallen keine zusätzlichen Kosten an, wenn du einen Benutzer im selben Monat erneut hinzufügst, in dem der Benutzer entfernt wurde.

Nachfolgend werden beispielsweise die Kosten für Benutzer mit Lizenzen in verschiedenen Zeiträumen aufgeführt.

Benutzer | Datumsangaben der Lizenzen | Gezählte Tage | Kosten
---- | ------------ | ------- | -----
@octocat | 1. Januar bis 31. Januar | 31 | 39 $
@robocat | 1. Februar bis 28. Februar | 28 | 35,23 $
@devtocat  | 15. Januar bis 31. Januar | 17 | 21,39 $
@doctocat | 1. Januar bis 15. Januar | 31 | 39 $
@prodocat | 7. Januar bis 15. Januar | 25 | 31,45 $
@monalisa | 1. Januar bis 7. Januar,<br>15. Januar bis 31. Januar | 31 | 39 $

Für {% data variables.product.prodname_ghe_managed %} gilt eine Mindestanzahl von 500 Benutzern pro Instanz. {% data variables.product.company_short %} stellt dir mindestens 500 Benutzer pro Instanz in Rechnung, auch wenn an diesem Tag weniger als 500 Benutzer vorhanden sind, die eine Lizenz besitzen.

Du kannst deine aktuelle Nutzung im [Azure-Kontoportal](https://portal.azure.com) anzeigen.

{% elsif ghec or ghes %}

{% ifversion ghec %}

Wenn du ein Unternehmenskonto für {% data variables.product.product_location %} verwendest, ist das Unternehmenskonto der zentrale Punkt für alle Abrechnungen innerhalb deines Unternehmens, einschließlich der Organisationen, die dein Unternehmen besitzt.

Wenn du {% data variables.product.product_name %} mit einer einzelnen Organisation verwendest und noch kein Unternehmenskonto hast, erstelle ein Unternehmenskonto, und füge deine Organisation hinzu. Weitere Informationen findest du unter [Erstellen eines Unternehmenskontos](/admin/overview/creating-an-enterprise-account).

{% data variables.product.company_short %} rechnet monatlich die Gesamtanzahl der lizenzierten Arbeitsplätze für dein Unternehmenskonto sowie alle zusätzlichen Dienste ab, die du mit {% data variables.product.prodname_ghe_cloud %} nutzt, wie z. B. {% data variables.product.prodname_actions %}-Minuten. Wenn du eine eigenständige Organisation für {% data variables.product.product_name %} verwendest, wird dir die gesamte Nutzung auf Organisationsebene berechnet. Weitere Informationen zu den Lizenzarbeitsplätzen auf deiner Rechnung findest du unter [Informationen zur benutzerabhängigen Preisgestaltung](/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% elsif ghes %}

Jeder Benutzer der {% data variables.product.product_location %}-Instanz verwendet einen Arbeitsplatz in deiner Lizenz. {% data variables.product.company_short %} rechnet die Gesamtzahl der in deiner Lizenz verwendeten Arbeitsplätze monatlich ab.

{% endif %}

{% ifversion ghec %}Für {% data variables.product.prodname_ghe_cloud %}-Kunden mit einem Unternehmenskonto stellt {% data variables.product.company_short %} die Rechnung über dein Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %}. Für fakturierte Kunden{% elsif ghes %}Für fakturierte {% data variables.product.prodname_enterprise %}-Kunden stellt {% data variables.product.company_short %} eine Rechnung über ein Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %}. Jede{% endif %} Rechnung enthält eine einzelne Rechnungsgebühr für alle deine kostenpflichtigen {% data variables.product.prodname_dotcom_the_website %}-Dienste und {% data variables.product.prodname_ghe_server %}-Instanzen. Weitere Informationen zu {% ifversion ghes %}Lizenzierung, Nutzung und Rechnungen{% elsif ghec %}Nutzung und Rechnungen{% endif %} findest du unter den folgenden Themen{% ifversion ghes %} in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

{%- ifversion ghes %}
- [Informationen zur benutzerabhängigen Preisgestaltung](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing) {%- endif %}
- [Anzeigen des Abonnements und der Nutzung deines Unternehmenskontos]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)
- [Verwalten von Rechnungen für dein Unternehmen]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)

Administratoren für dein Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %} können auf die Abrechnung für das Unternehmen zugreifen und diese verwalten. Weitere Informationen findest du unter [Rollen in einem Unternehmen]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise){% ifversion ghec %}{% elsif ghes %} in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% endif %}

{% ifversion ghec %} {% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Weitere Informationen findest du unter [Verknüpfen eines Azure-Abonnements mit deinem Unternehmen](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

{% ifversion ghes %} {% data reusables.billing.ghes-with-no-enterprise-account %} {% endif %}

{% endif %}
## Weiterführende Themen

- [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts)
