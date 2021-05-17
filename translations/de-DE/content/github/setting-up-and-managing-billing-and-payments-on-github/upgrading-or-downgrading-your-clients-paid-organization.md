---
title: Eine bezahlte Organisation Deines Kunden herauf- oder herabstufen
intro: Abrechnungsmanager können die bezahlte Organisation eines Kunden jederzeit upgraden oder herabstufen.
redirect_from:
  - /articles/upgrading-or-downgrading-your-client-s-paid-organization
  - /articles/upgrading-or-downgrading-your-clients-paid-organization
versions:
  free-pro-team: '*'
topics:
  - Billing
---

{% data reusables.organizations.reseller-ask-to-become-billing-manager %}

{% tip %}

**Tips**:
- Bevor Du die Organisation Deines Kunden heraufstufst, kannst Du [die hinterlegte Zahlungsmethode für die Organisation anzeigen oder ändern](/articles/adding-or-editing-a-payment-method).
- Diese Anweisungen gelten für das Herauf- und Herabstufen von Organisationen mit *benutzerabhängigem Abonnement*. Wenn Dein Kunde mit einem *alten Repository-abhängigen* Plan für {% data variables.product.product_name %} bezahlt, kannst Du seinen alten Plan heraufstufen oder [herabstufen](/articles/downgrading-your-github-subscription). Alternativ kannst Du seine [Organisation auf die benutzerabhängige Preisgestaltung umstellen](/articles/upgrading-your-github-subscription).

{% endtip %}

### Anzahl der bezahlten Benutzer einer Organisation heraufstufen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

Nachdem Du Benutzer hinzugefügt hast, wird der für die Organisation hinterlegten Zahlungsmethode ein anteiliger Betrag in Rechnung gestellt, der auf der Anzahl der hinzugefügten Benutzer und der verbleibenden Zeit in Deinem Abrechnungszeitraum basiert.

### Anzahl der bezahlten Benutzer einer Organisation auf kostenlos herabstufen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.downgrade-org-to-free %}
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}
