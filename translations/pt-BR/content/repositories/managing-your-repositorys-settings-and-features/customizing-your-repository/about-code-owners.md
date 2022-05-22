---
title: Sobre proprietários do código
intro: Você pode usar um arquivo CODEOWNERS para definir indivíduos ou equipes que são responsáveis pelo código em um repositório.
redirect_from:
  - /articles/about-codeowners
  - /articles/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

As pessoas com permissões de administrador ou proprietário podem configurar um arquivo CODEOWNERS em um repositório.

As pessoas escolhidas como proprietários do código devem ter permissões de leitura para o repositório. Quando o proprietário do código é uma equipe, essa equipe deverá ser visível e ter permissões de gravação, ainda que todos os membros individuais da equipe já tenham permissões de gravação diretamente, por meio da associação da organização ou por meio de outra associação à equipe.

## Sobre proprietários do código

Solicita-se automaticamente que os proprietários do código revisem quando alguém abre um pull request que modifica o código que possuem. Solicita-se automaticamente que os proprietários do código revejam os rascunhos de pull requests. Para obter mais informações sobre pull requests em rascunho, consulte "[Sobre pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)". Solicita-se automaticamente que os proprietários do código revejam os rascunhos de pull requests. Se você converter um pull request em rascunho, as pessoas que já assinaram as notificações não terão suas assinaturas canceladas automaticamente. Para obter mais informações, consulte "[Alterar o stage de um pull request](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)".

Quando alguém com permissões de administrador ou proprietário tiver habilitado revisões obrigatórias, se desejar, ele também poderá exigir aprovação de um proprietário do código para que o autor possa fazer merge de uma pull request no repositório. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)".

Se um arquivo tiver um proprietário do código, você poderá ver quem é o proprietário do código antes de abrir um pull request. No repositório, é possível pesquisar o arquivo e passar o mouse sobre o {% octicon "shield-lock" aria-label="The edit icon" %}.

![Proprietário do código para um arquivo em um repositório](/assets/images/help/repository/code-owner-for-a-file.png)

## Local do arquivo CODEOWNERS

Para usar um arquivo CODEOWNERS, crie um novo arquivo denominado `CODEOWNERS` na raiz, `docs/` ou no diretório `.github/` do repositório, no branch em que deseja adicionar os proprietários do código.

Cada arquivo CODEOWNERS atribui os proprietários do código para um único branch no repositório. Dessa forma, você pode atribuir diferentes proprietários de códigos para diferentes branches, como `@octo-org/codeowners-team` para uma base de código no branch-padrão e `@octocat` para um site do {% data variables.product.prodname_pages %} no branch de `gh-pages`.

Para que os proprietários do código recebam solicitações de revisão, o arquivo CODEOWNERS deve estar no branch base da pull request. Por exemplo, se você atribuir `@octocat` como o proprietário do código para arquivos *.js* no branch `gh-pages` do seu repositório, `@octocat` receberá solicitações de revisão quando uma pull request com alterações nos arquivos *.js* for aberta entre o branch head e `gh-pages`.

{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4675 %}
## Tamanho do arquivo CODEOWNERS

Os arquivos CODEOWNERS devem ter menos de 3 MB. Um arquivo CODEOWNERS acima deste limite não será carregado, o que significa que as informações do proprietário do código não serão mostradas e não será solicitado que os proprietários do código apropriado revise as alterações em um pull request.

Para reduzir o tamanho do seu arquivo CODEOWNERS, considere o uso de padrões curinga para consolidar múltiplas entradas em uma única entrada.
{% endif %}

## Sintaxe de CODEOWNERS

Um arquivo CODEOWNERS usa um padrão que segue a maioria das mesmas regras usadas nos arquivos [gitignore](https://git-scm.com/docs/gitignore#_pattern_format), com [algumas exceções](#syntax-exceptions). O padrão é seguido por um ou mais nomes de usuário ou nomes de equipe do {% data variables.product.prodname_dotcom %} usando o formato padrão `@username` ou `@org/team-name`. Os usuários devem ter acessso de `leitura` ao repositório e as equipes devem ter acesso explícito de `gravação`, mesmo que os integrantes da equipe já tenham acesso.

{% ifversion fpt or ghec%}In most cases, you{% else %}You{% endif %} can also refer to a user by an email address that has been added to their account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, for example `user@example.com`. {% ifversion fpt or ghec %} You cannot use an email address to refer to a {% data variables.product.prodname_managed_user %}. For more information about {% data variables.product.prodname_managed_users %}, see "[About {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}{% endif %}

Os caminhos dos CODEOWNERS diferenciam maiúsculas de minúsculas, porque {% data variables.product.prodname_dotcom %} usa um sistema de arquivos que diferencia maiúsculas e minúsculas. Uma vez que os CODEOWNERS são avaliados por {% data variables.product.prodname_dotcom %}, até mesmo sistemas que diferenciam maiúsculas de minúsculas (por exemplo, macOS) devem usar caminhos e arquivos que são tratados corretamente no arquivo dos CODEOWNERS.

{% if codeowners-errors %}
Se alguma linha do seu arquivo do CODEOWNERS contiver uma sintaxe inválida, essa linha será ignorada. Ao acessar o arquivo do CODEOWNERS no seu repositório em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, você poderá ver todos os erros destacados. Uma lista de erros no arquivo CODEOWNERS de um repositório também pode ser acessada por meio da API. Para obter mais informações, consulte "[Repositórios](/rest/reference/repos#list-codeowners-errors)" na documentação da API REST.
{% else %}
Se qualquer linha do seu arquivo CODEOWNERS contiver uma sintaxe inválida, o arquivo não será detectado e não será usado para solicitar revisões.
{% endif %}

### Exemplo de um arquivo CODEOWNERS
```
# Este é um comentário.
# Cada linha é um padrão de arquivo seguido por um ou mais proprietários.

# Esses proprietários serão os proprietários padrão para tudo no
# repositório. A menos que uma correspondência posterior tenha precedência,
# @global-owner1 e @global-owner2 serão solicitados para
# revisão quando alguém abrir uma pull request.
*       @global-owner1 @global-owner2

# A ordem é importante; o último padrão de correspondência tem
# prioridade. Quando alguém abre uma pull request que
# modifica apenas arquivos JS, somente @js-owner, e não o(s)
# proprietário(s) global(is), será solicitado para uma revisão.
*.js    @js-owner

# Você também pode usar endereços de e-mail se preferir. Eles serão
# usados para procurar usuários assim como fazemos com e-mails do
# autor do commit.
*.go docs@example.com

# Teams can be specified as code owners as well. Teams should
# be identified in the format @org/team-name. Teams must have
# explicit write access to the repository. In this example,
# the octocats team in the octo-org organization owns all .txt files.
*.txt @octo-org/octocats

# In this example, @doctocat owns any files in the build/logs
# directory at the root of the repository and any of its
# subdirectories.
/build/logs/ @doctocat

# O padrão `docs/*` corresponderá a arquivos como
# `docs/getting-started.md`, mas a nenhum outro arquivo aninhado como
# `docs/build-app/troubleshooting.md`.
docs/*  docs@example.com

# Neste exemplo, @octocat tem qualquer arquivo no diretório apps
# em qualquer lugar do seu repositório.
apps/ @octocat

# In this example, @doctocat owns any file in the `/docs`
# directory in the root of your repository and any of its
# subdirectories.
/docs/ @doctocat

# In this example, any change inside the `/scripts` directory
# will require approval from @doctocat or @octocat.
/scripts/ @doctocat @octocat

# In this example, @octocat owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as its owners are left empty.
/apps/ @octocat
/apps/github
```
### Exceções de sintaxe
Existem algumas regras de sintaxe para arquivos gitignore que não funcionam em arquivos CODEOWNERS:
- Fugir de um padrão que começa com `#` usando `\` para que seja tratado como um padrão e não como um comentário
- Usar `!` para negar um padrão
- Usar `[ ]` para definir um intervalo de caracteres

## Proteção de branch e de CODEOWNERS
Os proprietários do repositório podem adicionar regras de proteção de branch para garantir que o código alterado seja revisado pelos proprietários dos arquivos alterados. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)."


## Leia mais

- "[Criar arquivos](/articles/creating-new-files)"
- "[Convidar colaboradores para um repositório pessoal](/articles/inviting-collaborators-to-a-personal-repository)"
- "[Gerenciar o acesso de um indivíduo a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Gerenciar o acesso da equipe a um repositório da organização](/articles/managing-team-access-to-an-organization-repository)"
- "[Exibir uma revisão de pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)"
