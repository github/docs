---
title: Обнаружение ресурсов для пользователя
intro: 'Узнайте, как найти репозитории и организации, к которым ваше приложение может безопасно и надежно получить доступ для запросов к REST API, прошедших проверку подлинности.'
redirect_from:
  - /guides/discovering-resources-for-a-user
  - /v3/guides/discovering-resources-for-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Discover resources for a user
ms.openlocfilehash: 9650ff8dee220f0b32d74cacb0f86acd236df5b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135944'
---
При выполнении запросов с проверкой подлинности к API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} приложениям часто требуется получить репозитории и организации текущего пользователя. В этом руководстве мы объясним, как уверенно находить эти ресурсы.

Для взаимодействия с API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} мы используем [Octokit.rb][octokit.rb]. Полный исходный код этого проекта можно найти в репозитории [platform-samples][platform samples].

## Начало работы

Перед тем как приступать к изучению приведенных ниже примеров, ознакомьтесь с [руководством по основам проверки подлинности][basics-of-authentication], если вы еще этого не сделали. В приведенных ниже примерах предполагается, что вы [зарегистрировали приложение OAuth][register-oauth-app] и что [приложение имеет токен OAuth для пользователя][make-authenticated-request-for-user].

## Обнаружение репозиториев, к которым приложение может получать доступ для пользователя

Помимо наличия личных репозиториев, пользователь может участвовать в совместной работе над репозиториями, принадлежащими другим пользователям и организациям. В целом у пользователя есть привилегированный доступ к следующим репозиториям: частному репозиторию, к которому у пользователя есть доступ на чтение или запись, и {% ifversion fpt %}общедоступному{% elsif ghec or ghes %}общедоступному или внутреннему{% elsif ghae %}внутреннему{% endif %} репозиторию, к которому у пользователя есть доступ на запись.

[Области OAuth][scopes] и [политики в отношении приложений организации][oap] определяют то, к каким из этих репозиториев приложение может получать доступ для пользователя. Для нахождения этих репозиториев используйте описанный ниже рабочий процесс.

Как всегда, сначала нам понадобится библиотека Ruby [Octokit.rb для GitHub][octokit.rb]. Затем мы настроим Octokit.rb для автоматической обработки [разбиения на страницы][pagination].

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Далее мы передадим [токен OAuth приложения для данного пользователя][make-authenticated-request-for-user]:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

После этого мы готовы получить [репозитории, к которым приложение может получать доступ для пользователя][list-repositories-for-current-user]:

``` ruby
client.repositories.each do |repository|
  full_name = repository[:full_name]
  has_push_access = repository[:permissions][:push]

  access_type = if has_push_access
                  "write"
                else
                  "read-only"
                end

  puts "User has #{access_type} access to #{full_name}."
end
```

## Обнаружение организаций, к которым приложение может получать доступ для пользователя

Приложения могут выполнять для пользователя самые разные задачи, связанные с организациями. Для их выполнения приложению требуется [авторизация OAuth][scopes] с достаточными разрешениями. Например, область `read:org` позволяет [получать список команд][list-teams], а область `user` — [публиковать сведения о членстве пользователя в организациях][publicize-membership]. После того как пользователь предоставит приложению одну или несколько этих областей, вы можете получить сведения о его организациях.

Так же, как и при обнаружении репозиториев выше, мы начнем с того, что настроим обработку [разбиения на страницы][pagination] с помощью библиотеки Ruby [Octokit.rb для GitHub][octokit.rb]:

``` ruby
require 'octokit'

Octokit.auto_paginate = true
```

Далее мы передадим [токен OAuth приложения для данного пользователя,][make-authenticated-request-for-user] чтобы инициализировать клиент API:

``` ruby
# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below.
client = Octokit::Client.new :access_token => ENV["OAUTH_ACCESS_TOKEN"]
```

Затем мы можем [получить список организаций, к которым приложение может получать доступ для пользователя][list-orgs-for-current-user]:

``` ruby
client.organizations.each do |organization|
  puts "User belongs to the #{organization[:login]} organization."
end
```

### Возврат сведений обо всех организациях, в которые входит пользователь

Если вы прочитали документацию от корки до корки, возможно, вы обратили внимание на [метод API для перечисления общедоступных организаций, в которые входит пользователь][list-public-orgs]. В большинстве приложений следует избегать использования этого метода API. Он возвращает только общедоступные организации пользователя, но не частные.

Приложению же, как правило, требуются сведения обо всех организациях пользователя, к которым приложению разрешен доступ. Описанный выше рабочий процесс дает именно такой результат.

[basics-of-authentication]: /rest/guides/basics-of-authentication
[list-public-orgs]: /rest/reference/orgs#list-organizations-for-a-user
[list-repositories-for-current-user]: /rest/reference/repos#list-repositories-for-the-authenticated-user
[list-orgs-for-current-user]: /rest/reference/orgs#list-organizations-for-the-authenticated-user
[list-teams]: /rest/reference/teams#list-teams
[make-authenticated-request-for-user]: /rest/guides/basics-of-authentication#making-authenticated-requests
[oap]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
[octokit.rb]: https://github.com/octokit/octokit.rb
[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/discovering-resources-for-a-user
[publicize-membership]: /rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user
[register-oauth-app]: /rest/guides/basics-of-authentication#registering-your-app
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
