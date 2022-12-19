---
title: Начало работы с GitHub Actions для GitHub AE
shortTitle: Get started
intro: 'Сведения о настройке {% data variables.product.prodname_actions %} в {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Enterprise owners can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-github-ae
  - /admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae
ms.openlocfilehash: c6d6767e95e6f5d27c311e46f5042c79717ab97e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116704'
---
## Сведения о {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_managed %}

{% data variables.product.prodname_actions %} включено для {% data variables.product.product_name %} по умолчанию. Чтобы приступить к использованию {% data variables.product.prodname_actions %} в рамках предприятия, необходимы управление разрешениями на доступ для {% data variables.product.prodname_actions %} и добавление средства выполнения для выполнения рабочих процессов.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Управление правами доступа для {% data variables.product.prodname_actions %} в вашей организации

Для управления доступом к {% data variables.product.prodname_actions %} вы можете использовать политики. Дополнительные сведения см. в разделе [Применение политик GitHub Actions для вашего предприятия](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise).

## Добавление средств выполнения

Необходимо настроить и разместить собственные компьютеры для выполнения заданий для предприятия на {% data variables.product.product_name %}. {% data reusables.actions.about-self-hosted-runners %} Дополнительные сведения см. в разделах [Начало работы с локальными средствами выполнения для предприятия](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise) и [Размещение собственных средств выполнения](/actions/hosting-your-own-runners).

{% data reusables.actions.general-security-hardening %}
