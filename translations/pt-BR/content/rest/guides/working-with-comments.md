---
title: Trabalhar com comentários
intro: 'Ao usar a API REST, você pode acessar e gerenciar comentários nos seus pull requests, problemas ou commits.'
redirect_from:
  - /guides/working-with-comments/
  - /v3/guides/working-with-comments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---



Para qualquer pull request, {% data variables.product.product_name %} fornece três tipos de visualizações de comentários: [comentários no Pull Request][PR comment] como um todo, [comentários em uma linha específica][PR line comment] dentro do Pull Request, e [comentários em um commit específico][commit comment] dentro do Pull Request.

Cada um desses tipos de comentários passa por uma parte diferente da API de {% data variables.product.product_name %}. Neste guia, vamos explorar como você pode acessar e manipular cada um. Para cada exemplo, usaremos [esta amostra de Pull Request feita][sample PR] no repositório de "octocat". Como sempre, as amostras podem ser encontradas no [nosso repositório platform-samples][platform-samples].

### Comentários do Pull Request

Para acessar comentários em um Pull Request, você passará [pela API de Problemas][issues]. A princípio, isso pode parecer contraintuitivo. Mas depois que você entender que um Pull Request é apenas um problema com o código, faz sentido usar a API de problemas para criar comentários em um Pull Request.

Nós demonstraremos como buscar comentários de Pull Request criando um script do Ruby usando [Octokit.rb][octokit.rb]. Você também deverá criar um [token de acesso pessoal][personal token].

O código a seguir deve ajudá-lo a começar a acessar comentários de um pedido de Pull Request usando Octokit.rb:

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

Aqui, estamos especificamente chamando a API de problemas para obter os comentários (`issue_comments`), fornecendo o nome do repositório (`octocat/Spoon-Knife`) e o ID do Pull Request no qual estamos interessados (`1176`). Depois disso, trata-se simplesmente de um assunto de iteração através dos comentários para buscar informações sobre cada um.

### Comentários em uma linha de Pull Request

Na visualização de diferenças, você pode iniciar uma discussão sobre um aspecto específico de uma mudança singular feita dentro do Pull Request. Estes comentários ocorrem nas linhas individuais dentro de um arquivo alterado. A URL do ponto de extremidade para esta discussão vem da [API da revisão de pull request][PR Review API].

O código a seguir busca todos os comentários de pull request feitos em arquivos, dado um único número de pull request:

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

Você perceberá que ele é incrivelmente semelhante ao exemplo acima. A diferença entre esta visualização e o comentário de Pull Request é o foco da conversa. Um comentário feito em um Pull Request deve ser reservado para discussão ou ideias sobre a direção geral do código. Um comentário feito como parte de uma revisão de Pull Request deve lidar especificamente com a forma como uma determinada alteração foi implementada em um arquivo.

### Comentários de commit

O último tipo de comentários ocorre especificamente nos commits individuais. Por esta razão, eles fazem uso de [a API de comentário de commit][commit comment API].

Para recuperar os comentários em um commit, você deverá usar o SHA1 do commit. Em outras palavras, você não usará nenhum identificador relacionado ao Pull Request. Aqui está um exemplo:

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

Observe que esta chamada de API recuperará comentários de linha única, bem como comentários feitos em todo o commit.

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
