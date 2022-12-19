---
title: Trabajar con los comentarios
intro: 'Puedes acceder y administrar los comentarios en tus solicitudes de extracción, informes de problemas o confirmaciones si utilizas la API de REST.'
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
ms.openlocfilehash: 9b3b768d66199fda62bc5e644da9539d5425215e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135901'
---
Para cualquier solicitud de incorporación de cambios, {% data variables.product.product_name %} proporciona tres tipos de vistas de comentarios: [comentarios en la solicitud de incorporación de cambios][PR comment] en su conjunto, [comentarios en una línea específica][PR line comment] dentro de la solicitud de incorporación de cambios y [comentarios sobre una confirmación concreta][commit comment] dentro de la solicitud de incorporación de cambios. 

Cada uno de estos tipos de comentarios pasan por una porción diferente de la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.
En esta guía exploraremos cómo puedes acceder y manipular cada uno de ellos. Para cada ejemplo, se usará [esta solicitud de incorporación de cambios de ejemplo realizada][sample PR] en el repositorio "octocat". Como siempre, los ejemplos se pueden encontrar en [nuestro repositorio platform-samples][platform-samples].

## Comentarios de las Solicitudes de Extracción

Para acceder a los comentarios de una solicitud de incorporación de cambios, tendrá que usar [Issues API][issues].
Esto puede parecer contraintuitivo al principio. Pero una vez que comprenda que una solicitud de incorporación de cambios es solo una incidencia con código, tendrá sentido usar Issues API para crear comentarios en una solicitud de incorporación de cambios.

Se mostrará la captura de comentarios de solicitud de incorporación de cambios mediante la creación de un script de Ruby con [Octokit.rb][octokit.rb]. También querrá crear un [token de acceso personal][personal token].

El código siguiente debería ayudarle a empezar a acceder a los comentarios de una solicitud de incorporación de cambios con Octokit.rb:

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

Aquí, se llama específicamente a Issues API para obtener los comentarios (`issue_comments`), y se proporcionan el nombre del repositorio (`octocat/Spoon-Knife`) y el identificador de la solicitud de incorporación de cambios que interesa (`1176`). Después, solo es cuestión de iterar por los comentarios para capturar la información sobre cada uno.

## Comentarios en una línea de una solicitud de extracción

Dentro de la vista de diferencias, puede iniciar un debate sobre un aspecto específico de un cambio concreto que se haya realizado dentro de la solicitud de incorporación de cambios. Estos comentarios aparecen en las líneas individuales dentro de un archivo que ha cambiado. La dirección URL del punto de conexión de este debate procede de [la API de revisión de solicitudes de incorporación de cambios][PR Review API].

El código siguiente obtiene todos los comentarios de la solicitud de extracción que se hayan hecho en los archivos, si se le da un número particular de solicitud de extracción:

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

Te darás cuenta de que es increíblemente similar al ejemplo anterior. La diferencia entre esta vista y el comentario de la solicitud de extracción es el enfoque de la conversación.
Un comentario realizado en una solicitud de incorporación de cambios se debe reservar para debatir ideas sobre el enfoque general del código. Un comentario realizado como parte de una revisión de una solicitud de incorporación de cambios deberá tratar específicamente la forma en la que se ha implementado un cambio concreto dentro de un archivo.

## Comentarios de las confirmaciones

El último tipo de comentarios suceden específicamente en confirmaciones individuales. Por este motivo, usan [la API de comentario de confirmación][commit comment API].

Para recuperar los comentarios en una confirmación, necesitarás utilizar el SHA1 de ésta.
Es decir, no utilizarás ningún identificador relacionado con la Solicitud de Extracción. Este es un ejemplo:

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

Tenga en cuenta que esta llamada API recuperará comentarios de una sola línea, así como los realizados en toda la confirmación.

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
