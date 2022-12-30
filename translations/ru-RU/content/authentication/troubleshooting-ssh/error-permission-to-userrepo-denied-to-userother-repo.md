---
title: 'Ошибка: разрешение пользователя или репозитория отклонено для пользователя или другого репозитория'
intro: 'Эта ошибка означает, что ключ, который вы используете для передачи, присоединяется к другому репозиторию в качестве ключа развертывания и не имеет доступа к репозиторию, в который вы пытаетесь передать данные.'
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-userother-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-repo
ms.openlocfilehash: 4d4898e947338e39c5ade86b5ea0a71f54f36f03
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088203'
---
Чтобы устранить эту проблему, удалите ключ развертывания из репозитория и вместо этого [добавьте его в личную учетную запись](/articles/adding-a-new-ssh-key-to-your-github-account).

Если используемый ключ предназначен для развертывания, дополнительные сведения см. в [руководстве по ключам развертывания](/guides/managing-deploy-keys).
