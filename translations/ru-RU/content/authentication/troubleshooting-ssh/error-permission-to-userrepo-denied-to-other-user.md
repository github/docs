---
title: 'Ошибка: разрешение пользователя или репозитория отклонено для другого пользователя'
intro: 'Эта ошибка означает, что ключ, с которым вы отправляете сообщение, присоединен к учетной записи, не имеющей доступа к репозиторию.'
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-other-user
  - /articles/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-other-user
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-user
ms.openlocfilehash: b46df8f9e8671008b37d3db69e2094e96e0413b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088208'
---
Чтобы устранить эту проблему, владелец репозитория (`user`) должен добавить вашу учетную запись (`other-user`) в качестве участника совместной работы в репозиторий или команду, которые имеют доступ на запись в репозиторий.
