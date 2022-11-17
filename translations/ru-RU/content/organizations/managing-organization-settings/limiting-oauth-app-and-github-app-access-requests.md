---
title: Ограничение запросов на доступ к приложению OAuth и приложению GitHub
intro: 'Как владелец организации вы можете разрешить внешним участникам совместной работы запрашивать доступ организации для {% data variables.product.prodname_oauth_apps %} и {% data variables.product.prodname_github_apps %}.'
versions:
  feature: limit-app-access-requests
permissions: Organization owners can limit who can make app access requests to the organization.
topics:
  - Organizations
  - GitHub Apps
  - OAuth Apps
shortTitle: Limit app access requests
ms.openlocfilehash: 4ea1bd133dcbabb9e7b3e3cbe65da5ff9c6eabac
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008696'
---
## Сведения о запросах доступа на интеграцию

Если запросы на доступ к интеграции включены, внешние участники совместной работы могут запрашивать доступ организации для {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %}, которые еще не утверждены вашей организацией. Если отключить запросы на доступ к интеграции, только члены организации смогут запрашивать доступ организации для неутвержденных {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %}. Внешние участники совместной работы по-прежнему смогут предоставить согласие на предварительно утвержденные {% data variables.product.prodname_github_apps %} и {% data variables.product.prodname_oauth_apps %} доступ к тем же ресурсам, к которые запрашивающий внешний сотрудник имеет доступ.

По умолчанию запросы на доступ к интеграции включены. Если в вашей организации имеется большое количество внешних участников совместной работы, вы можете отключить запросы на доступ к интеграции, чтобы сократить количество запросов, которые необходимо проверить. 

## Включение или отключение запросов доступа для взаимодействия

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. В разделе "Запросы доступа к интеграции" установите или снимите флажок **Разрешить запросы на интеграцию от внешних участников совместной работы** и нажмите кнопку **Сохранить**.
    ![Снимок экрана: настройка запросов на доступ к интеграции](/assets/images/help/organizations/integration-access-requests.png)
