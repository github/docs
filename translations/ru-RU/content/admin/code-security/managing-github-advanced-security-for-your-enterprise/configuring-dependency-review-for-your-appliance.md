---
title: Настройка проверки зависимостей для устройства
shortTitle: Configuring dependency review
intro: 'Чтобы помочь пользователям понять изменения зависимостей при проверке запросов на вытягивание, можно включить, настроить и отключить проверку зависимостей для {% данных variables.location.product_location %}.'
product: '{% data reusables.gated-features.dependency-review %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: dependency-review-action-ghes
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Dependency review
  - Security
ms.openlocfilehash: 613f2f2bd69a90027533ff063ea0f0a44bc1f5d2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107760'
---
## Сведения о проверке зависимостей

{% data reusables.dependency-review.feature-overview %}  

Некоторые дополнительные функции, такие как проверки лицензий, блокировка запросов на вытягивание и интеграция CI/CD, доступны в [действии проверки зависимостей](https://github.com/actions/dependency-review-action).

## Проверка того, включает ли ваша лицензия {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Предварительные требования для проверки зависимостей

- Лицензия на {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (см. раздел [Сведения о выставлении счетов за {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)").{% endif %}

- Граф зависимостей, включенный для экземпляра. Администраторы сайта могут включить граф зависимостей через консоль управления или административную оболочку (см. раздел [Включение графа зависимостей для предприятия](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)).
  
- {% data variables.product.prodname_github_connect %} включен для загрузки и синхронизации уязвимостей из {% data variables.product.prodname_advisory_database %}. Обычно это указывается при настройке {% data variables.product.prodname_dependabot %} (см. [Включение Dependabot для предприятия](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)).

## Включение и отключение проверки зависимостей

Чтобы включить или отключить проверку зависимостей, необходимо включить или отключить граф зависимостей для экземпляра.

Дополнительные сведения см. в разделе [Включение графа зависимостей для предприятия](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise).

## Выполнение проверки зависимостей с помощью {% data variables.product.prodname_actions %}

{% data reusables.dependency-review.dependency-review-action-beta-note %}

Действие проверки зависимостей включается в установку {% data variables.product.prodname_ghe_server %}. Оно доступно для всех репозиториев с включенным {% data variables.product.prodname_GH_advanced_security %} и графом зависимостей.

{% data reusables.dependency-review.dependency-review-action-overview %}  

Пользователи выполняют действие проверки зависимостей с помощью рабочего процесса {% data variables.product.prodname_actions %}. Если вы еще не настроили средства выполнения для {% data variables.product.prodname_actions %}, это необходимо сделать, чтобы пользователи могли запускать рабочие процессы. Вы можете предоставить локальные средства выполнения на уровне репозитория, организации или корпоративной учетной записи. Дополнительные сведения см. в разделах [Сведения о локальных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners) и [Добавление локальных средств выполнения](/actions/hosting-your-own-runners/adding-self-hosted-runners).

