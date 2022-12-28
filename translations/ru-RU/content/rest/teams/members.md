---
title: Члены команды
allowTitleToDifferFromFilename: true
shortTitle: Members
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9f2e4a1bee298bddf1d1712c78b2bac41f15c27e
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879002'
---
## Сведения об API члены команды

{% data reusables.organizations.team-api %}

{% ifversion fpt or ghes or ghec %} {% note %}

**Примечание.** Если вы настроили синхронизацию команд для команды с поставщиком удостоверений организации (IdP), при попытке использовать API для внесения изменений в членство в команде появится сообщение об ошибке. Если у вас есть доступ к управлению членством в группах в поставщике удостоверений, можно управлять членством в команде GitHub с помощью поставщика удостоверений, который автоматически добавляет и удаляет членов команды в организации. Дополнительные сведения см. в разделе [Синхронизация команд между поставщиком удостоверений и GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

{% endnote %}

{% endif %}
