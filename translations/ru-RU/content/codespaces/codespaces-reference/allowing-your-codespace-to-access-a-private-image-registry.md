---
title: Разрешение доступа к частному реестру образов для пространства кода
intro: Секреты позволяют {% data variables.product.prodname_github_codespaces %} получать доступ к частному реестру образов.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
shortTitle: Private image registry
ms.openlocfilehash: c11cfe0179856caf17f30ac32830ee1485defa3c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159208"
---
## Сведения о частных реестрах образов и {% data variables.product.prodname_github_codespaces %}

Реестр — это безопасное пространство для хранения, администрирования и получения частных образов контейнеров. Вы можете использовать его для хранения одного или нескольких образов. К примерм реестров относятся {% data variables.product.prodname_container_registry %}, {% data variables.product.prodname_npm_registry %}, Azure Container Registry и DockerHub.

{% data variables.packages.prodname_ghcr_and_npm_registry %} можно настроить так, чтобы во время создания codespace образы контейнеров могли легко извлекаться в {% data variables.product.prodname_github_codespaces %} без необходимости предоставлять учетные данные для проверки подлинности. Для других реестров образов необходимо создать секреты в {% data variables.product.prodname_dotcom %} для хранения сведений о доступе, что позволит {% data variables.product.prodname_github_codespaces %} получать доступ к образам, хранящимся в этом реестре.

## Доступ к изображениям, хранящимся в {% data variables.packages.prodname_ghcr_and_npm_registry %}

{% data variables.packages.prodname_ghcr_and_npm_registry %} предоставляет самый простой способ использования образов контейнеров разработки для {% data variables.product.prodname_github_codespaces %}.

Дополнительные сведения см. в разделах [Работа с реестром контейнеров](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) и [Работа с реестром npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).

### Доступ к образу, опубликованному в том же репозитории, что и пространство кода

Если вы публикуете образ контейнера в {% data variables.packages.prodname_ghcr_or_npm_registry %} в том же репозитории, в который запускается codespace, вы сможете автоматически получить этот образ при создании codespace. Вам не придется предоставлять дополнительные учетные данные, если только выбор параметра **Наследовать доступ от репозитория** не был отменен при публикации образа контейнера.

#### Наследование доступа от репозитория, из которого был опубликован образ

По умолчанию при публикации образа контейнера в {% data variables.packages.prodname_ghcr_or_npm_registry %} образ наследует параметр доступа к репозиторию, из которого был опубликован образ. Например, если репозиторий является общедоступным, образ также является общедоступным. Если репозиторий является частным, образ также является частным, но доступен из репозитория.

Это поведение определяется параметром **Наследовать доступ от репозитория**. **Доступ наследовать из репозитория** выбирается по умолчанию при публикации через {% data variables.product.prodname_actions %}, но не при публикации непосредственно в {% data variables.packages.prodname_ghcr_or_npm_registry %} с помощью {% data variables.product.pat_generic %}.

Если параметр **Наследовать доступ от репозитория** не был выбран при публикации образа, можно вручную добавить репозиторий в элементы управления доступом опубликованного образа контейнера. Дополнительные сведения см. в разделе [Настройка управления доступом и видимости пакета](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository).

### Доступ к образу, опубликованному в организации, в которой будет запущено пространство кода

Если вы хотите, чтобы образ контейнера был доступен для всех пространств кода в организации, рекомендуется опубликовать образ контейнера с внутренней видимостью. При этом образ автоматически станет видимым для всех пространств кода в организации, если только репозиторий, из которого запускается пространство кода, не является общедоступным.

Если пространство кода запускается из общедоступного репозитория, ссылающегося на внутренний или частный образ, необходимо вручную разрешить общедоступному репозиторию доступ к внутреннему образу контейнера. Это позволяет избежать случайной утечки внутреннего образа. Дополнительные сведения см. в разделе [Обеспечение доступа Codespaces к пакету](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package).

### Доступ к частному контейнеру из подмножества репозиториев в организации

Если вы хотите разрешить подмножеству репозиториев организации доступ к образу контейнера или разрешить доступ к внутреннему или частному образу из пространства кода, запущенного в общедоступном репозитории, можно вручную добавить репозитории в параметры доступа <span class="x x-first x-last">образа контейнера</span>. Дополнительные сведения см. в разделе [Обеспечение доступа Codespaces к пакету](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)<span class="x x-first x-last">.</span>

### Публикация образа контейнера из пространства кода

Простой доступ из codespace к {% data variables.packages.prodname_ghcr_or_npm_registry %} ограничен извлечением образов контейнеров. Если вы хотите опубликовать образ контейнера из пространства кода, необходимо использовать {% data variables.product.pat_v1 %} с областью `write:packages` .

Рекомендуется публиковать образы с помощью {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Публикация образов Docker](/actions/publishing-packages/publishing-docker-images) и [Публикация пакетов Node.js](/actions/publishing-packages/publishing-nodejs-packages).

## Доступ к образам, хранящимся в других реестрах контейнеров

Если вы обращаетесь к образу контейнера из реестра, который не является {% data variables.packages.prodname_ghcr_or_npm_registry %}, {% data variables.product.prodname_github_codespaces %} проверяет наличие трех секретов, которые определяют имя сервера, имя пользователя и {% data variables.product.pat_generic %} для реестра контейнеров. Если эти секреты найдены, {% data variables.product.prodname_github_codespaces %} сделает реестр доступным в пространстве кода.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

Секреты можно хранить на уровне пользователя, репозитория или организации, что позволяет безопасно передавать их между различными пространствами кода. При создании набора секретов для частного реестра образов необходимо заменить "<*>" в имени на постоянный идентификатор. Дополнительные сведения см. в разделе [Управление зашифрованными секретами для пространств кода](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) и [Управление зашифрованными секретами для репозитория и организации в {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces).

Если вы задаете секреты на уровне пользователя или организации, обязательно назначьте эти секреты репозиторию, в котором будет создаваться пространство кода, выбрав политику доступа из раскрывающегося списка.  

![Пример секрета для реестра образов](/assets/images/help/codespaces/secret-repository-access.png)

### Примеры секретов

Для частного реестра образов в Azure можно создать следующие секреты:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PERSONAL_ACCESS_TOKEN>
```

Дополнительные сведения об общих реестрах образов см. в разделе [Серверы общих реестров образов](#common-image-registry-servers). Обратите внимание, что доступ к реестру эластичных контейнеров AWS (ECR) осуществляется другим способом.

![Пример секрета для реестра образов](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

После добавления секретов может потребоваться остановить и запустить пространство кода, в котором вы находитесь, чтобы новые переменные среды были переданы в контейнер. Дополнительные сведения см. в разделе [Приостановка или остановка пространства кода](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace).

#### Доступ к реестру эластичных контейнеров AWS

Чтобы получить доступ к реестру эластичных контейнеров AWS (ECR), можно предоставить идентификатор ключа доступа AWS и секретный ключ, и {% data variables.product.prodname_dotcom %} может получить маркер доступа и выполнить вход от вашего имени.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = <AWS_ACCESS_KEY_ID>
*_CONTAINER_REGISTRY_PASSWORD = <AWS_SECRET_KEY>
```

Кроме того, необходимо убедиться в том, что у вас есть соответствующие разрешения IAM AWS для переключения учетных данных (например, `sts:GetServiceBearerToken`) и операции чтения ECR (`AmazonEC2ContainerRegistryFullAccess` или `ReadOnlyAccess`).

Кроме того, если вы не хотите, чтобы GitHub выполнял переключение учетных данных от вашего имени, вы можете предоставить маркер авторизации, для получения которого используются API-интерфейсы или CLI AWS.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = AWS
*_CONTAINER_REGISTRY_PASSWORD = <TOKEN>
```

Так как эти токены являются короткими и должны периодически обновляться, рекомендуется указать идентификатор ключа доступа и секрет.

Хотя эти секреты могут иметь любое имя, при условии, что `*_CONTAINER_REGISTRY_SERVER` входит в URL-адрес ECR, мы рекомендуем использовать `ECR_CONTAINER_REGISTRY_*`, если вы не работаете с несколькими реестрами ECR.

Дополнительные сведения см. в разделе [Документация по проверке подлинности частного реестра](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html) для ECR AWS.

### Серверы общих реестров образов

Некоторые из серверов общих реестров образов перечислены ниже:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`;
- [Реестр контейнеров GitHub](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`;
- [Реестр контейнеров Azure](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`;
- [Реестр эластичных контейнеров AWS](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`;
- [Реестр контейнеров Google Cloud](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (США), `eu.gcr.io` (Европа), `asia.gcr.io` (Азия).

## Отладка доступа к частному реестру образов

Если у вас возникли проблемы с извлечением образа из частного реестра образов, убедитесь, что вы можете успешно выполнить команду `docker login -u <user> -p <password> <server>` со значениями секретов, которые были определены выше. Если вход завершается с ошибкой, убедитесь, что учетные данные для входа действительны и что у вас есть необходимые разрешения на получение образа контейнера на сервере. Если вход выполнен успешно, убедитесь, что эти значения правильно скопированы в правильные секреты {% data variables.product.prodname_github_codespaces %} на уровне пользователя, репозитория или организации, и повторите попытку.
