---
title: Eine bezahlte Organisation Deines Kunden herauf- oder herabstufen
intro: Abrechnungsmanager können die bezahlte Organisation eines Kunden jederzeit upgraden oder herabstufen.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-or-downgrading-your-clients-paid-organization
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-or-downgrading-your-clients-paid-organization
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/upgrading-or-downgrading-your-clients-paid-organization
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Organizations
  - Upgrades
---

{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**Tips**:
- Bevor Du die Organisation Deines Kunden heraufstufst, kannst Du [die hinterlegte Zahlungsmethode für die Organisation anzeigen oder ändern](/articles/adding-or-editing-a-payment-method).
- Diese Anweisungen gelten für das Herauf- und Herabstufen von Organisationen mit *benutzerabhängigem Abonnement*. Wenn Dein Kunde mit einem *alten Repository-abhängigen* Plan für {% data variables.product.product_name %} bezahlt, kannst Du seinen alten Plan heraufstufen oder [herabstufen](/articles/downgrading-your-github-subscription). Alternativ kannst Du seine [Organisation auf die benutzerabhängige Preisgestaltung umstellen](/articles/upgrading-your-github-subscription).

{% endtip %}

### Anzahl der bezahlten Benutzer einer Organisation heraufstufen

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

Nachdem Sie Benutzer hinzugefügt haben, wird der für die Organisation hinterlegten Zahlungsmethode ein anteiliger Betrag in Rechnung gestellt, der auf der Anzahl der Benutzer, die Sie hinzufügen, und der verbleibenden Zeit in Ihrem Abrechnungszeitraum basiert.

### Anzahl der bezahlten Benutzer einer Organisation auf kostenlos herabstufen

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.downgrade-org-to-free %}
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}
