---
title: Git Large File Storage herabstufen
intro: 'Du kannst Speicher und Bandbreite für {% data variables.large_files.product_name_short %} in Stufen von je 50 GB pro Monat herabstufen.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-git-large-file-storage
  - /articles/downgrading-storage-and-bandwidth-for-a-personal-account
  - /articles/downgrading-storage-and-bandwidth-for-an-organization
  - /articles/downgrading-git-large-file-storage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage/downgrading-git-large-file-storage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Downgrades
  - LFS
  - Organizations
  - User account
shortTitle: Downgrade Git LFS storage
ms.openlocfilehash: 9e23d3d8eaee5362375ca427a7b58505eccbaa05
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085836'
---
Wenn Du die Anzahl Deiner Datenpakete herabstufst, werden Deine Änderungen zum nächsten Abrechnungsdatum wirksam. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.large_files.product_name_long %}](/articles/about-billing-for-git-large-file-storage).

## Speicher und Bandbreite für ein persönliches Konto herabstufen

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.lfs-remove-data %} {% data reusables.large_files.downgrade_data_packs %}

## Speicher und Bandbreite für eine Organisation herabstufen

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.lfs-remove-data %} {% data reusables.large_files.downgrade_data_packs %}
