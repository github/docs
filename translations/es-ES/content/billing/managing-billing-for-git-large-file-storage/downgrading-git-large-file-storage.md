---
title: Bajar de categoría Git Large File Storage
intro: 'Puedes bajar de categoría y modificar el ancho de banda para {% data variables.large_files.product_name_short %} aplicando incrementos de 50 GB por mes.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145091721'
---
Si bajas de categoría tu cantidad de paquetes de datos, tu cambio entrará en vigencia en tu próxima fecha de facturación. Para más información, vea "[Acerca de la facturación para {% data variables.large_files.product_name_long %}](/articles/about-billing-for-git-large-file-storage)".

## Bajar de categoría y reducir el ancho de banda para una cuenta personal

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.lfs-remove-data %} {% data reusables.large_files.downgrade_data_packs %}

## Bajar de categoría y reducir el ancho de banda para una organización

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.lfs-remove-data %} {% data reusables.large_files.downgrade_data_packs %}
