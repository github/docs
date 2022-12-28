---
title: Совместное использование действий и рабочих процессов с вашим предприятием
intro: 'Вы можете предоставить общий доступ к действию или рабочему процессу своему предприятию, не публикуя это действие или рабочий процесс.'
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share with your enterprise
ms.openlocfilehash: 90541af9dfbb3c5f8ea2384de4a291336951434f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145069952'
---
## О доступе {% data variables.product.prodname_actions %} к внутренним репозиториям

Если ваша организация принадлежит корпоративной учетной записи, вы можете совместно использовать действия и рабочие процессы внутри вашего предприятия, не публикуя действие или рабочий процесс, предоставив рабочим процессам {% data variables.product.prodname_actions %} доступ к внутреннему репозиторию, содержащему действие. или рабочий процесс. 

Любые действия или рабочие процессы, хранящиеся во внутреннем репозитории, можно использовать в рабочих процессах, определенных в других частных и внутренних репозиториях, принадлежащих той же организации или любой организации, принадлежащей предприятию. Действия и рабочие процессы, хранящиеся во внутренних репозиториях, нельзя использовать в общедоступных репозиториях.

{% warning %}

**Предупреждение**. {% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## Совместное использование действий и рабочих процессов с вашим предприятием

1. Храните действие или рабочий процесс во внутреннем репозитории. Дополнительные сведения см. в разделе [Сведения о репозиториях](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories).
1. Настройте репозиторий, чтобы разрешить доступ к рабочим процессам в других частных и внутренних репозиториях. Дополнительные сведения см. в разделе [Управление параметрами {% data variables.product.prodname_actions %} для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository).

## Дополнительные материалы

- [О корпоративных учетных записях](/admin/overview/about-enterprise-accounts)
- [Повторное использование рабочих процессов](/actions/using-workflows/reusing-workflows)
