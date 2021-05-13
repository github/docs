---
title: Git Large File Storage herabstufen
intro: 'Sie können Speicher und Bandbreite für {% data variables.large_files.product_name_short %} in Stufen von je 50 GB pro Monat herabstufen.'
redirect_from:
  - /articles/downgrading-storage-and-bandwidth-for-a-personal-account/
  - /articles/downgrading-storage-and-bandwidth-for-an-organization/
  - /articles/downgrading-git-large-file-storage
versions:
  free-pro-team: '*'
topics:
  - Billing
---

Wenn Du die Anzahl Deiner Datenpakete herabstufst, werden Deine Änderungen zum nächsten Abrechnungsdatum wirksam. Weitere Informationen findest Du unter „[Informationen zur Abrechnung für {% data variables.large_files.product_name_long %}](/articles/about-billing-for-git-large-file-storage).“

### Speicher und Bandbreite für ein persönliches Konto herabstufen

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.lfs-remove-data %}
{% data reusables.large_files.downgrade_data_packs %}

### Speicher und Bandbreite für eine Organisation herabstufen

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.lfs-remove-data %}
{% data reusables.large_files.downgrade_data_packs %}
