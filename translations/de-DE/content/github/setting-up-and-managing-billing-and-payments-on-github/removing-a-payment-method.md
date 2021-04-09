---
title: Zahlungsmethode entfernen
intro: 'Wenn Sie Ihre Zahlungsmethode für kein bezahltes Abonnement auf {% data variables.product.prodname_dotcom %} verwenden, können Sie diese Zahlungsmethode entfernen. Sie wird dann nicht mehr unter Ihrem Konto gespeichert.'
redirect_from:
  - /articles/removing-a-credit-card-associated-with-your-user-account/
  - /articles/removing-a-payment-method-associated-with-your-user-account/
  - /articles/removing-a-credit-card-associated-with-your-organization/
  - /articles/removing-a-payment-method-associated-with-your-organization/
  - /articles/removing-a-payment-method
versions:
  free-pro-team: '*'
topics:
  - Abrechnung
---

Wenn Sie Ihr {% data variables.product.product_name %}-Abonnement mit einem Gutschein bezahlen und Ihre Zahlungsmethode für keine [anderen bezahlten Funktionen oder Produkte](/articles/about-billing-on-github) auf {% data variables.product.product_name %} benötigen, können Sie Ihre Kreditkarten- oder PayPal-Daten entfernen.

{% tip %}

**Tipp:** Wenn Du [Dein Konto auf ein kostenloses Produkt herabstufst](/articles/downgrading-your-github-subscription) und keine anderen bezahlten Funktionen oder Produkte abonniert hast, werden Deine Zahlungsinformationen automatisch entfernt.

{% endtip %}

### Zahlungsmethode Deines persönlichen Kontos entfernen

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.payment-info-tab %}
{% data reusables.dotcom_billing.remove-payment-method %}
{% data reusables.dotcom_billing.remove_payment_info %}

### Zahlungsmethode Deiner Organisation entfernen

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.payment-info-tab %}
{% data reusables.dotcom_billing.remove-payment-method %}
{% data reusables.dotcom_billing.remove_payment_info %}
