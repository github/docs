---
title: Fazer downgrade do Git Large File Storage
intro: 'Você pode fazer downgrade de armazenamento e largura de banda do {% data variables.large_files.product_name_short %} em incrementos de 50 GB por mês.'
redirect_from:
  - /articles/downgrading-storage-and-bandwidth-for-a-personal-account/
  - /articles/downgrading-storage-and-bandwidth-for-an-organization/
  - /articles/downgrading-git-large-file-storage
versions:
  free-pro-team: '*'
topics:
  - Billing
---

Quando você faz downgrade do número de pacotes de dados, as alterações entram em vigor na próxima data de cobrança. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.large_files.product_name_long %}](/articles/about-billing-for-git-large-file-storage)".

### Fazer downgrade de armazenamento e largura de banda de uma conta pessoal

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.lfs-remove-data %}
{% data reusables.large_files.downgrade_data_packs %}

### Fazer downgrade de armazenamento e largura de banda de uma organização

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.subscriptions-tab %}
{% data reusables.dotcom_billing.lfs-remove-data %}
{% data reusables.large_files.downgrade_data_packs %}
