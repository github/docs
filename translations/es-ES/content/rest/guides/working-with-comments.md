---
title: Trabajar con los comentarios
intro: 'Puedes acceder y administrar los comentarios en tus solicitudes de extracción, informes de problemas o confirmaciones si utilizas la API de REST.'
redirect_from:
  - /guides/working-with-comments/
  - /v3/guides/working-with-comments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---



Para cualquier solicitud de extracción, {% data variables.product.product_name %} proporciona tres tipos de visualizaciones de comentario: [comentarios en la solicitud de extracción][PR comment] integrales, [comentarios en una línea específica][PR line comment] dentro de la solicitud de extracción, y [comentarios sobre una confirmación específica][commit comment] dentro de la solicitud de extracción.

Cada uno de estos tipos de comentario pasa por una porción diferente de la API de {% data variables.product.product_name %}. En esta guía exploraremos cómo puedes acceder y manipular cada uno de ellos. En cada ejemplo utilizaremos [esta muestra de Solicitud de Extracción que se hizo][sample PR] en el repositorio de "octocat". Como siempre, puedes encontrar las muestras en [nuestro repositorio de platform-samples][platform-samples].

### Comentarios de las Solicitudes de Extracción

Para acceder a loscomentarios de una solicitud de cambios, deberás de pasar por la [API de propuestas][issues]. Esto puede parecer contraintuitivo al principio. Pero una vez que entiendes que una Solicitud de Extracción es solo un informe de problemas con código, tendrá sentido utuilizar la API de Informes de Problemas para crear comentarios en una solicitud de extracción.

Demostraremos cómo obtener comentarios de una solicitud de extracción mediante la creación de un script de Ruby que utilice [Octokit.rb][octokit.rb]. También deberás crear un [token de acceso personal][personal token].

El código siguiente debería ayudarte a empezar a acceder a los comentarios de una solicitud de extracción utilizando Octokit.rb:

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

Aquí estamos llamando específicamente a la API de Informes de problemas para obtener los comentarios (`issue_comments`), proporcionando tanto el nombre del repositorio (`octocat/Spoon-Knife`) como la ID de la solicitud de extracción en la que estamos interesados (`1176`). Después, solo es cuestión de iterar a través de los comentarios para obtener la información sobre cada uno.

### Comentarios en una línea de una solicitud de extracción

Dentro de la vista de diferencias, puedes iniciar un debate sobre algún aspecto específico de un cambio particular que se haya hecho dentro de la solicitud de extracción. Estos comentarios ocurren en las líneas individuales dentro de un archivo que ha cambiado. La URL de la terminal para este debate veien de [la API de Revisión de Solicitudes de Cambios][PR Review API].

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

Te darás cuenta de que es increíblemente similar al ejemplo anterior. La diferencia entre esta vista y el comentario de la solicitud de extracción es el enfoque de la conversación. El comentario que se haga en una solicitud de extracción deberá reservarse para debatir ideas sobre el enfoque general del código. Cualquier comentario que se haga como parte de una revisión de una Solicitud de Extracción deberá tratar específicamente la forma en la que se implementa un cambio específico dentro de un archivo.

### Comentarios de las confirmaciones

El último tipo de comentarios suceden específicamente en confirmaciones individuales. Es por esto que utilizan [la API de comentarios de las confirmaciones][commit comment API].

Para recuperar los comentarios en una confirmación, necesitarás utilizar el SHA1 de ésta. Es decir, no utilizarás ningún identificador relacionado con la Solicitud de Extracción. Aquí hay un ejemplo:

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

Ten en cuenta que esta llamada a la API recuperará comentarios de una sola línea, así como aquellos que se hagan en toda la confirmación.

[PR comment]: https://github.com/octocat/Spoon-Knife/pull/1176#issuecomment-24114792
[PR line comment]: https://github.com/octocat/Spoon-Knife/pull/1176#discussion_r6252889
[commit comment]: https://github.com/octocat/Spoon-Knife/commit/cbc28e7c8caee26febc8c013b0adfb97a4edd96e#commitcomment-4049848
[sample PR]: https://github.com/octocat/Spoon-Knife/pull/1176
[platform-samples]: https://github.com/github/platform-samples/tree/master/api/ruby/working-with-comments
[issues]: /rest/reference/issues#comments
[personal token]: /articles/creating-an-access-token-for-command-line-use
[octokit.rb]: https://github.com/octokit/octokit.rb
[PR Review API]: /rest/reference/pulls#comments
[commit comment API]: /rest/reference/repos#get-a-commit-comment
