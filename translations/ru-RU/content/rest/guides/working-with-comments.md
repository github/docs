---
title: Работа с комментариями
intro: 'С помощью REST API можно получить доступ к комментариям в запросах на вытягивание, проблемах или фиксациях и управлять ими.'
redirect_from:
  - /guides/working-with-comments
  - /v3/guides/working-with-comments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 80c10eb8fed0c940e09c0381c4c12784651c94fe
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098719'
---
Для любого запроса на вытягивание {% data variables.product.product_name %} предоставляет три вида представлений комментариев: [комментарии к запросу на вытягивание][PR comment] в целом, [комментарии к определенной строке][PR line comment] в запросе на вытягивание и [комментарии к определенной фиксации][commit comment] в запросе на вытягивание. 

Каждый из этих типов комментариев проходит через свою часть API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.
В этом руководстве мы рассмотрим, как получить доступ к каждому из них и управлять ими. Для каждого примера мы будем использовать [этот пример запроса на вытягивание][sample PR] в репозитории octocat. Как всегда, примеры можно найти в [нашем репозитории примеров для платформы][platform-samples].

## Комментарий к запросу на вытягивание

Чтобы получить доступ к комментариям к запросу на вытягивание, используйте [API проблем][issues].
На первый взгляд это может показаться нелогичным. Но как только вы поймете, что запрос на вытягивание является просто проблемой с кодом, вы увидите, что нужно использовать API проблем для создания комментариев к запросу на вытягивание.

Мы продемонстрируем получение комментариев к запросу на вытягивание путем создания скрипта Ruby с помощью [Octokit.rb][octokit.rb]. Вы также хотите создать [{% данных variables.product.pat_generic %}][personal token].

Следующий код поможет получить доступ к комментариям из запроса на вытягивание с помощью Octokit.rb:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.issue_comments("octocat/Spoon-Knife", 1176).each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end
```

Здесь мы вызываем API проблем, чтобы получить комментарии (`issue_comments`), указав имя репозитория (`octocat/Spoon-Knife`) и идентификатор нужного запроса на вытягивание (`1176`). После этого мы просто проходим по комментариями, чтобы получить информацию о каждом из них.

## Комментарии к строке запроса на вытягивание

В представлении различий можно начать обсуждение определенного аспекта отдельного изменения, внесенного в запрос на вытягивание. Эти комментарии находятся в отдельных строках в измененном файле. URL-адрес конечной точки для этого обсуждения поступает из [API проверки запроса на вытягивание][PR Review API].

В следующем коде извлекаются все комментарии к запросу на вытягивание, сделанные для файлов, с учетом номера одного запроса на вытягивание:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.pull_request_comments("octocat/Spoon-Knife", 1176).each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]
  path = comment[:path]
  position = comment[:position]

  puts "#{username} made a comment on #{post_date} for the file called #{path}, on line #{position}. It says:\n'#{content}'\n"
end
```

Вы заметите, что это очень похоже на приведенный выше пример. Различия между этим представлением и комментарием к запросу на вытягивание кроются в направлении беседы.
Комментарий, сделанный в запросе на вытягивание, должен относиться к общему направлению кода. Комментарий, сделанный в рамках проверки запроса на вытягивание, должен касаться реализации конкретного изменения в файле.

## Комментарии к фиксации

Последний тип комментариев относится к отдельным фиксациям. Поэтому здесь используется [API комментариев к фиксации][commit comment API].

Чтобы получить комментарии к фиксации, необходимо использовать SHA1 фиксации.
Другими словами, вы не будете использовать идентификатор, связанный с запросом на вытягивание. Ниже приведен пример:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.commit_comments("octocat/Spoon-Knife", "cbc28e7c8caee26febc8c013b0adfb97a4edd96e").each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end
```

Обратите внимание, что этот вызов API извлечет комментарии к одной строке, а также комментарии для всей фиксации.

[PR comment]: https://github.com/octocat/Spoon-Knife/pull/1176#issuecomment-24114792
[PR line comment]: https://github.com/octocat/Spoon-Knife/pull/1176#discussion_r6252889
[commit comment]: https://github.com/octocat/Spoon-Knife/commit/cbc28e7c8caee26febc8c013b0adfb97a4edd96e#commitcomment-4049848
[sample PR]: https://github.com/octocat/Spoon-Knife/pull/1176
[platform-samples]: https://github.com/github/platform-samples/tree/master/api/ruby/working-with-comments
[issues]: /rest/reference/issues#comments
[personal token]: /articles/creating-an-access-token-for-command-line-use
[octokit.rb]: https://github.com/octokit/octokit.rb
[PR Review API]: /rest/reference/pulls#comments
[commit comment API]: /rest/reference/commits#get-a-commit-comment
