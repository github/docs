---
title: Использование вложений содержимого
intro: 'Вложения содержимого позволяют приложению GitHub предоставлять дополнительные сведения в GitHub для URL-адресов, ссылающихся на зарегистрированные домены. GitHub отображает сведения, предоставленные приложением по URL-адресу, в тексте проблемы или запроса на вытягивание либо в комментарии к ним.'
redirect_from:
  - /apps/using-content-attachments
  - /developers/apps/using-content-attachments
versions:
  ghes: <3.4
topics:
  - GitHub Apps
ms.openlocfilehash: f557a804d48144df24398f75e90a589d563d941b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081026'
---
{% data reusables.pre-release-program.content-attachments-public-beta %}

## Сведения о вложениях содержимого

Приложение GitHub может зарегистрировать домены, которые будут запускать события `content_reference`. Когда кто-то включает в текст или комментарий к проблеме или запросу на вытягивание URL-адрес, который ссылается на зарегистрированный домен, приложение получает [веб-перехватчик `content_reference`](/webhooks/event-payloads/#content_reference). Вложения содержимого можно использовать для визуального предоставления дополнительных контекстов или данных для URL-адреса, добавленного в проблему или запрос на вытягивание. URL-адрес должен быть полным URL-адресом, который начинается с `http://` или `https://`. URL-адреса, которые являются частью ссылки Markdown, игнорируются и не запускают событие `content_reference`.

Прежде чем использовать API {% data variables.product.prodname_unfurls %}, необходимо настроить ссылки на содержимое для приложения GitHub:
* Предоставьте приложению `Read & write` разрешения "Ссылки на содержимое".
* При настройке разрешения "Ссылки на содержимое" Зарегистрируйте до 5 допустимых общедоступных доменов. Не используйте IP-адреса при настройке доменов ссылок на содержимое. Вы можете зарегистрировать доменное имя (example.com) или поддомен (subdomain.example.com).
* Подпишите приложение на событие "Ссылка на содержимое".

После установки приложения в репозитории в комментариях к проблеме или запросу на вытягивание в репозитории, содержащему URL-адреса зарегистрированных доменов будет сгенерировано событие ссылки на содержимое. Приложение должно создать вложение содержимого в течение шести часов после публикации URL-адреса ссылки на содержимое.

Вложения содержимого не будут обновлять URL-адреса задним числом. Это работает только для URL-адресов, если они добавлены в проблемы или запросы на вытягивание после настройки приложения с помощью описанных выше требований, а затем кто-либо установил приложение в своем репозитории.

Порядок настройки разрешений приложения GitHub и подписок на события см. в разделе "[Создание приложения GitHub](/apps/building-github-apps/creating-a-github-app/)" или "[Изменение разрешений приложения GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/)".

## Реализация потока вложения содержимого

Поток вложения содержимого показывает связь между URL-адресом в проблеме или запросе на вытягивание, событием веб-перехватчика `content_reference` и конечной точкой REST API, который необходимо вызвать для обновления проблемы или запроса на вытягивание с учетом дополнительных сведений:

**Шаг 1.** Настройте приложение с помощью рекомендаций, описанных в разделе [Сведения о вложениях содержимого](#about-content-attachments). Вы также можете использовать [пример приложения Probot](#example-using-probot-and-github-app-manifests) для начала работы с вложениями содержимого.

**Шаг 2.** Добавьте URL-адрес домена, зарегистрированного в запросе на вытягивание. Необходимо использовать полный URL-адрес, который начинается с `http://` или `https://`.

![URL-адрес, добавленный в проблему](/assets/images/github-apps/github_apps_content_reference.png)

**Шаг 3.** Ваше приложение получит [веб-перехватчик `content_reference`](/webhooks/event-payloads/#content_reference) с действием `created`.

``` json
{
  "action": "created",
  "content_reference": {
    "id": 17,
    "node_id": "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA5",
    "reference": "errors.ai"
  },
  "repository": {
    "full_name": "Codertocat/Hello-World",
  },
  "sender": {...},
  "installation": {
    "id": 371641,
    "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMzcxNjQx"
  }
}
```

**Шаг 4.** Приложение использует поля `content_reference` `id` и `repository` `full_name` для [создания вложения содержимого](/rest/reference/apps#create-a-content-attachment) с помощью REST API. Вам также потребуется выполнить проверку подлинности `installation` `id` в качестве [установки приложения GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

Параметр `body` может содержать Markdown:

```shell
curl -X POST \
  {% data variables.product.api_url_code %}/repos/Codertocat/Hello-World/content_references/17/attachments \
  -H 'Accept: application/vnd.github.corsair-preview+json' \
  -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
  -d '{
    "title": "[A-1234] Error found in core/models.py file",
    "body": "You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
}'
```

Дополнительные сведения о создании маркера установки см. в разделе "[Проверка подлинности в качестве приложения GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

**Шаг 5.** Вы увидите новое вложение содержимого в ссылке в комментарии к запросу на вытягивание или проблеме:

![Содержимое, присоединенное к ссылке в проблеме](/assets/images/github-apps/content_reference_attachment.png)

## Использование вложений содержимого в GraphQL
Мы предоставляем событие `node_id` [веб-перехватчика `content_reference`](/webhooks/event-payloads/#content_reference), чтобы можно было ссылаться на изменения `createContentAttachment` в API GraphQL.

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

Пример:

``` graphql
mutation {
  createContentAttachment(input: {
    contentReferenceId: "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1",
    title: "[A-1234] Error found in core/models.py file",
    body:"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
  }) {
    contentAttachment {
      ... on ContentAttachment {
        id
        title
        body
      }
    }
  }
}
```
Пример cURL:

```shell
curl -X "POST" "{% data variables.product.api_url_code %}/graphql" \
     -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
     -H 'Accept: application/vnd.github.corsair-preview+json' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "query": "mutation {\\n  createContentAttachment(input:{contentReferenceId: \\"MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1\\", title:\\"[A-1234] Error found in core/models.py file\\", body:\\"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n\self.save()\\"}) {\\n    contentAttachment {\\n      id,\\n      title,\\n      body\\n    }\\n  }\\n}"
}'
```

Дополнительные сведения о `node_id` см. в разделе "[Использование идентификаторов глобальных узлов](/graphql/guides/using-global-node-ids)".

## Пример использования Probot и манифестов приложений GitHub

Чтобы быстро настроить приложение GitHub, которое может использовать API {% data variables.product.prodname_unfurls %}, можно использовать [Probot](https://probot.github.io/). Сведения о том, как Probot использует манифест GitHub, см. в разделе "[Создание приложений GitHub из манифеста](/apps/building-github-apps/creating-github-apps-from-a-manifest/)".

Чтобы создать приложение Probot, выполните следующие действия.

1. [Создайте новое приложение GitHub](https://probot.github.io/docs/development/#generating-a-new-app).
2. Откройте созданный проект и настройте параметры в файле `app.yml`. Подпишитесь на событие `content_reference` и включите разрешения на запись `content_references`:

   ``` yml
    default_events:
      - content_reference
    # The set of permissions needed by the GitHub App. The format of the object uses
    # the permission name for the key (for example, issues) and the access type for
    # the value (for example, write).
    # Valid values are `read`, `write`, and `none`
    default_permissions:
      content_references: write

    content_references:
      - type: domain
        value: errors.ai
      - type: domain
        value: example.org
   ```

3. Добавьте этот код в файл `index.js` для обработки событий `content_reference` и вызова REST API:

    ``` javascript
    module.exports = app => {
      // Your code here
      app.log('Yay, the app was loaded!')
       app.on('content_reference.created', async context => {
        console.log('Content reference created!', context.payload)
         // Call the "Create a content reference" REST endpoint
        await context.github.request({
          method: 'POST',
          headers: { accept: 'application/vnd.github.corsair-preview+json' },
          url: `/repos/${context.payload.repository.full_name}/content_references/${context.payload.content_reference.id}/attachments`,
          // Parameters
          title: '[A-1234] Error found in core/models.py file',
          body: 'You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\nself.save()'
        })
      })
    }
    ```

4. [Запустите приложение GitHub локально](https://probot.github.io/docs/development/#running-the-app-locally). Перейдите к разделу `http://localhost:3000` и нажмите кнопку **Зарегистрировать приложение GitHub**:

   ![Регистрация приложения Probot GitHub](/assets/images/github-apps/github_apps_probot-registration.png)

5. Установите приложение в тестовом репозитории.
6. Создайте проблему в тестовом репозитории.
7. Добавьте комментарий к открытой проблеме, которая содержит URL-адрес, настроенный в файле `app.yml`.
8. Ознакомьтесь с комментарием, и вы увидите обновление, которое выглядит следующим образом:

   ![Содержимое, присоединенное к ссылке в проблеме](/assets/images/github-apps/content_reference_attachment.png)
