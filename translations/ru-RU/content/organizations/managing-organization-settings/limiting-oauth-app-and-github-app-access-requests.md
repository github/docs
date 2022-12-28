---
title: Ограничение запросов на доступ к приложениям OAuth и приложениям GitHub
intro: 'Как владелец организации вы можете разрешить внешним участникам совместной работы запрашивать доступ организации для {% data variables.product.prodname_oauth_apps %} и {% data variables.product.prodname_github_apps %}.'
versions:
  feature: limit-app-access-requests
permissions: Organization owners can limit who can make app access requests to the organization.
topics:
  - Organizations
  - GitHub Apps
  - OAuth Apps
shortTitle: Limit app access requests
ms.openlocfilehash: 6c991ecfbdac75f1bb3bb4fdb5ea3a0692f1d040
ms.sourcegitcommit: 30b0931723b704e219c736e0de7afe0fa799da29
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186438'
---
## Сведения о запросах доступа к интеграции

Если запросы на доступ к интеграции включены, внешние участники совместной работы могут запрашивать доступ организации для {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %}, которые еще не утверждены вашей организацией. Если вы отключите запросы на доступ к интеграции, только участники организации смогут запрашивать доступ организации для неутвержденных {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %}. Внешние участники совместной работы по-прежнему смогут дать согласие на предварительно утвержденные {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %} доступ к тем же ресурсам, к которые запрашивающий внешний сотрудник имеет доступ.

По умолчанию запросы на доступ к интеграции включены. Если в вашей организации имеется большое количество внешних участников совместной работы, вы можете отключить запросы на доступ к интеграции, чтобы уменьшить количество запросов, которые необходимо проверить. 

## Включение или отключение запросов на доступ к интеграции

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. В разделе "Запросы доступа к интеграции" выберите или снимите флажок **Разрешить запросы на интеграцию от внешних участников совместной работы** и нажмите кнопку **Сохранить**.
    ![Снимок экрана: параметр запросов на доступ к интеграции](/assets/images/help/organizations/integration-access-requests.png)
