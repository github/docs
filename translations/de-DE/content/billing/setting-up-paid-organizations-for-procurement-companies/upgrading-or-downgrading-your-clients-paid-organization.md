---
title: Eine bezahlte Organisation Ihres Kunden herauf- oder herabstufen
intro: Abrechnungsmanager können die bezahlte Organisation eines Kunden jederzeit upgraden oder herabstufen.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-or-downgrading-your-clients-paid-organization
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Upgrades
shortTitle: Upgrade or downgrade
ms.openlocfilehash: 2309c89fabf2a81aab18df90b8c545f0f3f684e1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085575'
---
{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**Tipps**:
- Bevor du die Organisation deines Kunden heraufstufst, kannst Du [die hinterlegte Zahlungsmethode für die Organisation anzeigen oder ändern](/articles/adding-or-editing-a-payment-method).
- Diese Anweisungen gelten für das Herauf- und Herabstufen von Organisationen mit *arbeitsplatzabhängigem Abonnement*. Wenn dein Kunde {% data variables.product.product_name %} im Rahmen eines *älteren repositoryabhängigen* Plans bezahlt, kannst du den Legacyplan herauf- oder [herabstufen](/articles/downgrading-your-github-subscription) oder [die Organisation auf das arbeitsplatzabhängige Preismodell](/articles/upgrading-your-github-subscription) umstellen.

{% endtip %}

## Anzahl der bezahlten Benutzer einer Organisation heraufstufen

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

Nachdem Du Benutzer hinzugefügt hast, wird der für die Organisation hinterlegten Zahlungsmethode ein anteiliger Betrag in Rechnung gestellt, der auf der Anzahl der hinzugefügten Benutzer und der verbleibenden Zeit in Deinem Abrechnungszeitraum basiert.

## Anzahl der bezahlten Benutzer einer Organisation auf kostenlos herabstufen

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.downgrade-org-to-free %} {% data reusables.dotcom_billing.confirm_cancel_org_plan %}
