---
title: Предоставление codespace доступа к частному реестру
intro: 'Вы можете разрешить {% data variables.product.prodname_github_codespaces %} доступ к образам контейнеров или другим пакетам в частном реестре.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry
shortTitle: Access a private registry
ms.openlocfilehash: 2957fe914e620b63a7ba0e2c38b6a949bd632fd6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193635'
---
## Сведения о частных реестрах и {% data variables.product.prodname_github_codespaces %}

Реестр — это безопасное пространство для хранения, управления и извлечения образов контейнеров или других пакетов. Существует множество примеров реестров, например: 
- {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}, Реестр контейнеров Azure и DockerHub для образов контейнеров
- {% data variables.product.prodname_npm_registry %} для пакетов Node.js.

Некоторые реестры {% data variables.product.prodname_registry %}, включая {% data variables.product.prodname_container_registry %}, можно настроить так, чтобы пакеты могли легко извлекаться в {% data variables.product.prodname_github_codespaces %} во время создания codespace без необходимости предоставлять учетные данные для проверки подлинности.

Чтобы получить доступ к другим реестрам образов контейнеров, можно создать секреты в {% data variables.product.prodname_dotcom %} для хранения сведений о доступе, что позволит {% data variables.product.prodname_github_codespaces %} получать доступ к образам, хранящимся в этом реестре.

## Доступ к пакетам, хранящимся в реестрах, с детализированными разрешениями

Реестры {% data variables.product.prodname_registry %}, поддерживающие детализированные разрешения, включая {% data variables.product.prodname_container_registry %}, предоставляют самый простой способ использования пакетов для {% data variables.product.prodname_github_codespaces %}. Список реестров {% data variables.product.prodname_registry %}, поддерживающих детализированные разрешения и простой доступ к {% data variables.product.prodname_github_codespaces %}, см. в разделе [Сведения о разрешениях для {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).

### Доступ к пакету, опубликованному в том же репозитории, что и codespace

При публикации пакета в том же репозитории, в который запускается codespace, вы сможете автоматически получить этот пакет при создании codespace. Вам не нужно будет предоставлять дополнительные учетные данные, если при публикации пакета не был выбран параметр **Наследовать доступ из репозитория** .

#### Наследование доступа из репозитория, из которого был опубликован пакет

По умолчанию пакет наследует параметр доступа к репозиторию, из которого он был опубликован. Например, если репозиторий является общедоступным, пакет также является общедоступным. Если репозиторий является частным, пакет также является частным, но доступен из репозитория.

Это поведение определяется параметром **Наследовать доступ от репозитория**. **Доступ наследовать из репозитория** выбирается по умолчанию при публикации через {% data variables.product.prodname_actions %}, но не при публикации непосредственно в реестре с помощью {% data variables.product.pat_generic %}.

Если параметр **Наследовать доступ из репозитория** не был выбран при публикации пакета, можно вручную добавить репозиторий в элементы управления доступом к опубликованному пакету. Дополнительные сведения см. в разделе [Настройка управления доступом и видимости пакета](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository).

### Доступ к пакету, опубликованному в организации, в котором будет запущено codespace

Если вы хотите, чтобы пакет был доступен для всех codespace в организации, рекомендуется опубликовать пакет с внутренней видимостью. Это автоматически сделает пакет видимым для всех codespace в организации, если репозиторий, из который запускается codespace, не является общедоступным.

Если codespace запускается из общедоступного репозитория, ссылающегося на внутренний или частный пакет, необходимо вручную разрешить общедоступному репозиторию доступ к внутреннему пакету. Это предотвращает случайную утечку внутреннего пакета. Дополнительные сведения см. в разделе [Обеспечение доступа Codespaces к пакету](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package).

### Доступ к частному пакету из подмножества репозиториев в организации

Если вы хотите разрешить подмножества репозиториев организации доступ к пакету или разрешить доступ к внутреннему или частному пакету из codespace, запущенного в общедоступном репозитории, можно вручную добавить репозитории в параметры доступа пакета. Дополнительные сведения см. в разделе [Обеспечение доступа Codespaces к пакету](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package).

### Публикация пакета из codespace

Простой доступ из codespace к реестру ограничен извлечением пакетов. Если вы хотите опубликовать пакет из пространства кода, необходимо использовать {% data variables.product.pat_v1 %} с областью `write:packages` .

Мы рекомендуем публиковать пакеты с помощью {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Публикация образов Docker](/actions/publishing-packages/publishing-docker-images) и [Публикация пакетов Node.js](/actions/publishing-packages/publishing-nodejs-packages).

## Доступ к образам, хранящимся в других реестрах

Вы можете определить секреты, чтобы разрешить {% data variables.product.prodname_github_codespaces %} доступ к реестрам образов контейнеров, кроме {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}. Если вы обращаетесь к образу контейнера из реестра, который не поддерживает простой доступ, {% data variables.product.prodname_github_codespaces %} проверяет наличие трех секретов, определяющих имя сервера, имя пользователя и {% data variables.product.pat_generic %} для реестра. Если эти секреты найдены, {% data variables.product.prodname_github_codespaces %} сделает реестр доступным в пространстве кода.

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

Если у вас возникли проблемы с извлечением образа из частного реестра образов, убедитесь, что вы можете успешно выполнить команду `docker login -u <user> -p <password> <server>` со значениями секретов, которые были определены выше. Если вход завершается сбоем, убедитесь, что учетные данные для входа действительны и у вас есть соответствующие разрешения на сервере для получения образа контейнера. Если вход выполнен успешно, убедитесь, что эти значения правильно скопированы в правильные секреты {% data variables.product.prodname_github_codespaces %} на уровне пользователя, репозитория или организации, и повторите попытку.
