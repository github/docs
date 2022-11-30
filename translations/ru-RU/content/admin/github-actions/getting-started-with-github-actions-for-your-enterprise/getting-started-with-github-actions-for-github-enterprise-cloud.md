---
title: Начало работы с GitHub Actions в облаке GitHub Enterprise
shortTitle: Get started
intro: 'Сведения о настройке {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Enterprise owners can configure {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 088fc1fcce3b44c6db350f744ad13668d04a4bb8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120440'
---
## Сведения о {% data variables.product.prodname_actions %} в {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_actions %} включены для вашего предприятия по умолчанию. Чтобы начать использовать {% data variables.product.prodname_actions %} в вашем предприятии, вы можете настроить политики, управляющие использованием {% data variables.product.prodname_actions %} членами предприятия и при необходимости добавить локальные средства выполнения для выполнения рабочих процессов.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Настройка политик для {% data variables.product.prodname_actions %}

Политики можно использовать для управления использованием {% data variables.product.prodname_actions %} членами предприятия. Например, вы можете ограничить разрешенные действия и настроить период хранения артефактов и журналов. Дополнительные сведения см. в разделе [Применение политик GitHub Actions для вашего предприятия](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise).

## Добавление средств выполнения

Для запуска рабочих процессов {% data variables.product.prodname_actions %} необходимо использовать средства выполнения. {% data reusables.actions.about-runners %} Если вы используете средства выполнения, размещенные в {% data variables.product.company_short %}, вам будет выставляться счет на основе потребления после исчерпания минут, включенных в {% data variables.product.product_name %}. Локальные средства выполнения бесплатны. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions).

Дополнительные сведения см. в статье "[Сведения о локально размещенных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners)."

Если вы выбрали локальные средства выполнения, их можно добавлять на уровне предприятия, организации или репозитория. Дополнительные сведения см. в разделе [Добавление локальных средств выполнения](/actions/hosting-your-own-runners/adding-self-hosted-runners).

{% data reusables.actions.general-security-hardening %}
