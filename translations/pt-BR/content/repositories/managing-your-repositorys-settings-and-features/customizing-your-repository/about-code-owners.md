---
title: Sobre proprietários do código
intro: Você pode usar um arquivo CODEOWNERS para definir indivíduos ou equipes que são responsáveis pelo código em um repositório.
redirect_from:
  - /articles/about-codeowners/
  - /articles/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

As pessoas com permissões de administrador ou proprietário podem configurar um arquivo CODEOWNERS em um repositório.

As pessoas que você escolhe como proprietários do código devem ter permissões de gravação para o repositório. When the code owner is a team, that team must be visible and it must have write permissions, even if all the individual members of the team already have write permissions directly, through organization membership, or through another team membership.

## Sobre proprietários do código

Solicita-se automaticamente que os proprietários do código revisem quando alguém abre um pull request que modifica o código que possuem. Solicita-se automaticamente que os proprietários do código revejam os rascunhos de pull requests. Para obter mais informações sobre pull requests em rascunho, consulte "[Sobre pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)". Solicita-se automaticamente que os proprietários do código revejam os rascunhos de pull requests. Se você converter um pull request em rascunho, as pessoas que já assinaram as notificações não terão suas assinaturas canceladas automaticamente. Para obter mais informações, consulte "[Alterar o stage de um pull request](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)".

Quando alguém com permissões de administrador ou proprietário tiver habilitado revisões obrigatórias, se desejar, ele também poderá exigir aprovação de um proprietário do código para que o autor possa fazer merge de uma pull request no repositório. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)".

{% ifversion fpt or ghae or ghes %}Se uma equipe tiver habilitado as tarefas de revisão de código, as aprovações individuais não satisfarão o requisito para a aprovação do proprietário do código em um branch protegido. Para obter mais informações, consulte "[Gerenciando a responsabilidade pela revisão de código para sua equipe](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)."{% endif %}

{% ifversion fpt or ghae or ghes > 2.22 %}
Se um arquivo tiver um proprietário do código, você poderá ver quem é o proprietário do código antes de abrir um pull request. No repositório, é possível pesquisar o arquivo e passar o mouse sobre o {% octicon "shield-lock" aria-label="The edit icon" %}.

![Proprietário do código para um arquivo em um repositório](/assets/images/help/repository/code-owner-for-a-file.png)
{% endif %}

## Local do arquivo CODEOWNERS

Para usar um arquivo CODEOWNERS, crie um novo arquivo denominado `CODEOWNERS` na raiz, `docs/` ou no diretório `.github/` do repositório, no branch em que deseja adicionar os proprietários do código.

Cada arquivo CODEOWNERS atribui os proprietários do código para um único branch no repositório. Dessa forma, você pode atribuir diferentes proprietários de códigos para diferentes branches, como `@octo-org/codeowners-team` para uma base de código no branch-padrão e `@octocat` para um site do {% data variables.product.prodname_pages %} no branch de `gh-pages`.

Para que os proprietários do código recebam solicitações de revisão, o arquivo CODEOWNERS deve estar no branch base da pull request. Por exemplo, se você atribuir `@octocat` como o proprietário do código para arquivos *.js* no branch `gh-pages` do seu repositório, `@octocat` receberá solicitações de revisão quando uma pull request com alterações nos arquivos *.js* for aberta entre o branch head e `gh-pages`.

{% ifversion fpt or ghae or ghes > 3.2 %}
## CODEOWNERS file size

CODEOWNERS files must be under 3 MB in size. A CODEOWNERS file over this limit will not be loaded, which means that code owner information not to be shown and the appropriate code owners will not be requested to review changes in a pull request.

To reduce the size of your CODEOWNERS file, consider using wildcard patterns to consolidate multiple entries into a single entry.
{% endif %}

## Sintaxe de CODEOWNERS

Um arquivo CODEOWNERS usa um padrão que segue a maioria das mesmas regras usadas nos arquivos [gitignore](https://git-scm.com/docs/gitignore#_pattern_format), com [algumas exceções](#syntax-exceptions). O padrão é seguido por um ou mais nomes de usuário ou nomes de equipe do {% data variables.product.prodname_dotcom %} usando o formato padrão `@username` ou `@org/team-name`. Users must have `read` access to the repository and teams must have explicit `write` access, even if the team's members already have access. Você também pode consultar um usuário por um endereço de e-mail que tenha sido adicionado à respectiva conta do {% data variables.product.product_name %}, por exemplo `user@example.com`.

Se qualquer linha do seu arquivo CODEOWNERS contiver uma sintaxe inválida, o arquivo não será detectado e não será usado para solicitar revisões.
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

## CODEOWNERS and branch protection
Repository owners can add branch protection rules to ensure that changed code is reviewed by the owners of the changed files. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)."


### Exemplo de um arquivo CODEOWNERS
```
# In this example, any change inside the `/apps` directory
# will require approval from @doctocat.
/apps/ @doctocat

# In this example, any change inside the `/apps` directory
# will require approval from @doctocat or @octocat.
/apps/ @doctocat @octocat

# In this example, any change inside the `/apps` directory
# will require approval from a member of the @example-org/content team.
# If a member of @example-org/content opens a pull request 
# with a change inside the `/apps` directory, their approval is implicit.
# The team is still added as a reviewer but not a required reviewer.
# Anyone can approve the changes.
/apps/ @example-org/content-team
```



## Leia mais

- "[Criar arquivos](/articles/creating-new-files)"
- "[Convidar colaboradores para um repositório pessoal](/articles/inviting-collaborators-to-a-personal-repository)"
- "[Gerenciar o acesso de um indivíduo a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Gerenciar o acesso da equipe a um repositório da organização](/articles/managing-team-access-to-an-organization-repository)"
- "[Exibir uma revisão de pull request](/articles/viewing-a-pull-request-review)"
