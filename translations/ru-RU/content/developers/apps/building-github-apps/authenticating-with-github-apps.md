---
title: Проверка подлинности с помощью приложений GitHub
intro: '{% data reusables.shortdesc.authenticating_with_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps
  - /apps/building-github-apps/authentication-options-for-github-apps
  - /apps/building-github-apps/authenticating-with-github-apps
  - /developers/apps/authenticating-with-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Authentication
ms.openlocfilehash: 5530e34207140e7beab836a2a7bc9a70d0066c20
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009875'
---
## Создание закрытого ключа

После создания приложения GitHub нужно создать один или несколько закрытых ключей. Закрытый ключ будет использоваться для подписи запросов маркера доступа.

Вы можете создать несколько закрытых ключей, а затем менять скомпрометированные или потерянные ключи, чтобы избежать простоя. Для проверки соответствия закрытого ключа открытому изучите раздел [Проверка закрытого ключа](#verifying-private-keys).

Чтобы создать закрытый ключ, выполните следующие действия.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %} {% data reusables.user-settings.modify_github_app %}
5. В разделе "Закрытые ключи" щелкните **Создать закрытый ключ**.
![Создание закрытого ключа](/assets/images/github-apps/github_apps_generate_private_keys.png)
6. Вы увидите скачанный на компьютер закрытый ключ в формате PEM. Не забудьте сохранить этот файл, поскольку GitHub хранит только открытую часть ключа.

{% note %}

**Примечание.** Если вы используете библиотеку, для которой требуется определенный формат файлов, скачанный файл PEM будет иметь формат `PKCS#1 RSAPrivateKey`.

{% endnote %}

## Проверка закрытых ключей
{% data variables.product.product_name %} создает отпечаток для каждой пары закрытого и открытого ключей с помощью хэш-функции SHA-256. Вы можете проверить, соответствует ли закрытый ключ открытому ключу, хранящемуся в {% data variables.product.product_name %}, создав отпечаток закрытого ключа и сравнив его с отпечатком в {% data variables.product.product_name %}.

Для проверки закрытого ключа выполните следующее.

1. Найдите отпечаток для проверяемой пары закрытого и открытого ключей в разделе "Закрытые ключи" на странице параметров разработчика {% data variables.product.prodname_github_app %}. Дополнительные сведения см. в разделе [Создание закрытого ключа](#generating-a-private-key).
![Отпечаток закрытого ключа](/assets/images/github-apps/github_apps_private_key_fingerprint.png)
2. Создайте отпечаток закрытого ключа (PEM) локально с помощью следующей команды:
    ```shell
    $ openssl rsa -in PATH_TO_PEM_FILE -pubout -outform DER | openssl sha256 -binary | openssl base64
    ```
3. Сравните результаты локально созданного отпечатка с отпечатком, который отображается в {% data variables.product.product_name %}.

## Удаление закрытых ключей
Вы можете удалить потерянный или скомпрометированный закрытый ключ, но у вас всегда должен существовать быть хотя бы один закрытый ключ. Если у вас только один ключ, то прежде чем удалять его, нужно создать новый.
![Удаление последнего закрытого ключа](/assets/images/github-apps/github_apps_delete_key.png)

## Проверка подлинности от имени {% data variables.product.prodname_github_app %}

Проверка подлинности от имени {% data variables.product.prodname_github_app %} позволяет выполнить несколько действий:

* Вы можете получить обобщенные сведения об управлении {% data variables.product.prodname_github_app %}.
* Вы можете запросить маркеры доступа для установки приложения.

Для проверки подлинности от имени {% data variables.product.prodname_github_app %} [создайте закрытый ключ](#generating-a-private-key) в формате PEM и скачайте его на локальный компьютер. Этот ключ будет использоваться для подписи [веб-маркера JSON (JWT)](https://jwt.io/introduction) и его кодирования по алгоритму `RS256`. {% data variables.product.product_name %} проверяет подлинность запроса, сопоставляя маркер с сохраненным открытым ключом приложения.

Вот простой пример скрипта Ruby, который позволяет создать JWT. Обратите внимание, что перед его использованием необходимо выполнить `gem install jwt`.

<a name="jwt-payload"></a>
```ruby
require 'openssl'
require 'jwt'  # https://rubygems.org/gems/jwt

# Private key contents
private_pem = File.read("YOUR_PATH_TO_PEM")
private_key = OpenSSL::PKey::RSA.new(private_pem)

# Generate the JWT
payload = {
  # issued at time, 60 seconds in the past to allow for clock drift
  iat: Time.now.to_i - 60,
  # JWT expiration time (10 minute maximum)
  exp: Time.now.to_i + (10 * 60),
  # {% data variables.product.prodname_github_app %}'s identifier
  iss: "YOUR_APP_ID"
}

jwt = JWT.encode(payload, private_key, "RS256")
puts jwt
```

Значения `YOUR_PATH_TO_PEM` и `YOUR_APP_ID` нужно заменить. Обязательно заключите значения в двойные кавычки.

Используйте идентификатор {% data variables.product.prodname_github_app %} (`YOUR_APP_ID`) в качестве значения для утверждения JWT [iss](https://tools.ietf.org/html/rfc7519#section-4.1.1) (издатель). Идентификатор {% data variables.product.prodname_github_app %} можно получить сразу после [создания приложения](/apps/building-github-apps/creating-a-github-app/) при начальной проверке связи с веб-перехватчиком или в любое другое время на странице параметров приложения в пользовательском интерфейсе GitHub.com.

После создания JWT поместите его в параметр `Header` запроса к API:

```shell
$ curl -i -H "Authorization: Bearer YOUR_JWT" -H "Accept: application/vnd.github+json" {% data variables.product.api_url_pre %}/app
```

`YOUR_JWT` — это значение, которое нужно заменить.

В приведенном выше примере максимальное время окончания срока действия составляет 10 минут, а после его истечения API будет возвращать ошибку `401`:

```json
{
  "message": "'Expiration' claim ('exp') must be a numeric value representing the future time at which the assertion expires.",
  "documentation_url": "{% data variables.product.doc_url_pre %}"
}
```

После истечения срока действия потребуется создать новый JWT.

## Доступ к конечным точкам API от имени {% data variables.product.prodname_github_app %}

Список конечных точек REST API, которые можно использовать для получения общих сведений о {% data variables.product.prodname_github_app %}, см. в разделе [GitHub Apps](/rest/reference/apps) (Приложения GitHub).

## Проверка подлинности от имени установки

Проверка подлинности от имени установки позволяет выполнять действия в API для этой установки. Чтобы использовать проверку подлинности от имени установки, необходимо создать маркер доступа для этой установки. Убедитесь, что приложение GitHub уже установлено хотя бы в один репозиторий, иначе вы не сможете создать маркер установки. {% data variables.product.prodname_github_apps %} использует эти маркеры доступа для проверки подлинности. Дополнительные сведения см. в разделе [Installing GitHub Apps](/developers/apps/managing-github-apps/installing-github-apps) (Установка приложений GitHub).

По умолчанию в область действия маркеров доступа для установки входят все репозитории, к которым имеет доступ установка. Вы можете ограничить область действия маркера доступа для установки некоторым подмножеством репозиториев, используя параметр `repository_ids`. Дополнительные сведения см. в статье [Создание маркера доступа для установки в приложении](/rest/reference/apps#create-an-installation-access-token-for-an-app). Разрешения маркеров доступа для установки имеют разрешения настраиваются в {% data variables.product.prodname_github_app %} и истекают через один час.

Чтобы получить список установок для приложения, прошедшего проверку подлинности, укажите [созданный выше](#jwt-payload) JWT в заголовке Authorization при запросе к API:

```shell
$ curl -i -X GET \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations
```

Ответ будет содержать список установок, в которых можно использовать `id` каждой установки, чтобы создать маркер доступа для установки. Дополнительные сведения о формате ответа см. в статье [Список установок для приложения, прошедшего проверку подлинности](/rest/reference/apps#list-installations-for-the-authenticated-app).

Чтобы создать маркер доступа для установки, укажите [созданный выше](#jwt-payload) JWT в заголовке авторизации при запросе к API и замените `:installation_id` значением `id` для установки:

```shell
$ curl -i -X POST \
-H "Authorization: Bearer YOUR_JWT" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/app/installations/:installation_id/access_tokens
```

Ответ будет содержать маркер доступа для установки, дату окончания срока действия, разрешения маркера и репозитории, к которым может получить доступ этот маркер. Дополнительные сведения о формате ответа см. в статье [Создание маркера доступа для установки в конечной точке приложения](/rest/reference/apps#create-an-installation-access-token-for-an-app).

Чтобы выполнить проверку подлинности с помощью маркера доступа для установки, добавьте его в заголовок Authorization при запросе к API:

```shell
$ curl -i \
-H "Authorization: Bearer YOUR_INSTALLATION_ACCESS_TOKEN" \
-H "Accept: application/vnd.github+json" \
{% data variables.product.api_url_pre %}/installation/repositories
```

`YOUR_INSTALLATION_ACCESS_TOKEN` — это значение, которое нужно заменить.

{% note %}

**Примечание.** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

## Доступ к конечным точкам API от имени установки

Список конечных точек REST API, к которым {% data variables.product.prodname_github_apps %} могут обращаться с использованием маркера доступа для установки, см. в статье [Доступные конечные точки](/rest/overview/endpoints-available-for-github-apps).

Список конечных точек, связанных с установками, см. в разделе [Installations](/rest/reference/apps#installations) (Установки).

## Доступ к Git по протоколу HTTP от имени установки

Установки с [разрешениями](/apps/building-github-apps/setting-permissions-for-github-apps/) для репозитория `contents` могут использовать маркеры доступа для установки, чтобы выполнять проверку подлинности при доступе к Git. Используйте маркер доступа для установки в качестве пароля HTTP:

```shell
git clone https://x-access-token:&lt;token&gt;@github.com/owner/repo.git
```
