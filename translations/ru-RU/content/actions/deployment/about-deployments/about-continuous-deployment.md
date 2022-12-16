---
title: Сведения о непрерывном развертывании
intro: 'Вы можете создавать пользовательские рабочие процессы непрерывного развертывания (CD) непосредственно в репозитории {% data variables.product.prodname_dotcom %} с помощью {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/about-continuous-deployment
topics:
  - CD
shortTitle: About continuous deployment
ms.openlocfilehash: 379afa0088f7f10302f5bf8202f5259ac4777bec
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147060141'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о непрерывном развертывании

_Непрерывное развертывание_ (CD) — это использование автоматизации для публикации и развертывания обновлений программного обеспечения. В рамках типичного процесса CD код создается и тестируется автоматически перед развертыванием.

Непрерывное развертывание часто связано с непрерывной интеграцией. Дополнительную информацию о непрерывной интеграции см. в разделе [Сведения о непрерывной интеграции](/actions/guides/about-continuous-integration).

## Сведения о непрерывном развертывании с использованием {% data variables.product.prodname_actions %}

Можно настроить рабочий процесс в {% data variables.product.prodname_actions %} для развертывания программного продукта. Чтобы убедиться, что продукт работает должным образом, рабочий процесс может создать код в репозитории и выполнить тесты перед развертыванием.

Можно настроить рабочий процесс CD на запуск при возникновении события {% data variables.product.product_name %} (например, при отправке нового кода в ветвь репозитория по умолчанию), по заданному расписанию, вручную или при возникновении внешнего события с помощью веб-перехватчика отправки репозитория. Дополнительные сведения о том, когда рабочий процесс может выполняться, см. в разделе [События, которые активируют рабочие процессы](/actions/reference/events-that-trigger-workflows).

{% data variables.product.prodname_actions %} предоставляет функции, которые обеспечивают больше контроля над развертываниями. Например, можно использовать среды для запроса подтверждения продолжения задания, ограничения ветвей, которые могут активировать рабочий процесс, или ограничения доступа к секретам. Можно использовать параллелизм, чтобы ограничить конвейер CD до максимум одного выполняющегося развертывания и одного ожидающего развертывания. Дополнительные сведения об этих функциях см. в разделах [Развертывание с помощью GitHub Actions](/actions/deployment/deploying-with-github-actions) и [Использование сред для развертывания](/actions/deployment/using-environments-for-deployment).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

## Использование OpenID Connect для доступа к облачным ресурсам

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Начальные рабочие процессы и сторонние действия

{% data reusables.actions.cd-templates-actions %}

## Дополнительные материалы

- [Развертывание с помощью GitHub Actions](/actions/deployment/deploying-with-github-actions)
- [Использование сред для развертывания](/actions/deployment/using-environments-for-deployment){% ifversion fpt or ghec %}
- [Управление выставлением счетов для {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions){% endif %}

