---
title: Webhooks für Ereignisse in deinem unterstützten Konto konfigurieren
intro: Du kannst Webhooks konfigurieren, damit Du benachrichtigt wirst, wenn Du ein neues Sponsoring erhältst, oder wenn bestehende Sponsoren Änderungen an ihren Sponsorings machen.
versions:
  free-pro-team: '*'
---

Damit Du Änderungen wie zum Beispiel die Kündigung eines Sponsorings am Ende der Zahlungsperiode überwachen kannst, kannst Du Webhooks für Deine unterstützten Benutzer- oder Organisations-Konten erstellen. Wenn Du einen Webhook für Dein unterstütztes Benutzer- oder Organisationskonto einrichtest, erhältst Du Updates, wenn Sponsorings erstellt, bearbeitet oder gelöscht werden. For more information, see the [`sponsorship` webhook event](/webhooks/event-payloads/#sponsorship).

### Webhooks für Dein unterstütztes Benutzerkonto verwalten

{% data reusables.sponsors.navigate-to-dev-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}

### Webhooks für Deine unterstützte Organisation verwalten

Organisationsinhaber können Webhooks für unterstützte Organisationen konfigurieren.

{% data reusables.sponsors.navigate-to-org-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}
