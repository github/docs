---
title: Разрешения GitHub Actions
allowTitleToDifferFromFilename: true
shortTitle: Permissions
intro: 'API разрешений {% data variables.product.prodname_actions %} позволяет задать разрешения для предприятий, организаций и репозиториев, которым разрешено выполнять {% data variables.product.prodname_actions %}, а также задать, какие действия{% ifversion actions-workflow-policy %} и многократно используемые рабочие процессы{% endif %} разрешены к выполнению.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 33dce77111812ba9cf5b05a170bc713c3506c00e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/12/2022
ms.locfileid: '147888601'
---
## Сведения об API разрешений

API разрешений {% data variables.product.prodname_actions %} позволяет задать разрешения для предприятий, организаций и репозиториев, которым разрешено выполнять {% data variables.product.prodname_actions %}, а также задать, какие действия{% ifversion actions-workflow-policy %} и многократно используемые рабочие процессы{% endif %} разрешены к выполнению.{% ifversion fpt or ghec or ghes %} Дополнительные сведения см. в разделе [Ограничения использования, выставление счетов и администрирование](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization).{% endif %}
