---
title: Sobre proprietários do código
intro: Você pode usar um arquivo CODEOWNERS para definir indivíduos ou equipes que são responsáveis pelo código em um repositório.
redirect_from:
  - /articles/about-codeowners/
  - /articles/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

As pessoas com permissões de administrador ou proprietário podem configurar um arquivo CODEOWNERS em um repositório.

As pessoas que você escolhe como proprietários do código devem ter permissões de gravação para o repositório. Quando o proprietário do código for uma equipe, essa equipe deverá ter permissões de gravação, mesmo se todos os membros individuais da equipe já tiverem permissões de gravação diretamente, ou por meio da associação à organização, ou por meio da associação a outra equipe.

### Sobre proprietários do código

Solicita-se automaticamente que os proprietários do código revisem quando alguém abre um pull request que modifica o código que possuem. Solicita-se automaticamente que os proprietários do código revejam os rascunhos de pull requests. Para obter mais informações sobre pull requests em rascunho, consulte "[Sobre pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)". Solicita-se automaticamente que os proprietários do código revejam os rascunhos de pull requests. Se você converter um pull request em rascunho, as pessoas que já assinaram as notificações não terão suas assinaturas canceladas automaticamente. Para obter mais informações, consulte "[Alterar o stage de um pull request](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)".

Quando alguém com permissões de administrador ou proprietário tiver habilitado revisões obrigatórias, se desejar, ele também poderá exigir aprovação de um proprietário do código para que o autor possa fazer merge de uma pull request no repositório. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)".

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 9" %}Se uma equipe habilitou as atribuições de revisão de código, as aprovações individuais não vão atender ao requisito para a aprovação do proprietário do código em um branch protegido. Para obter mais informações, consulte "[Gerenciando a responsabilidade pela revisão de código para sua equipe](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
Se um arquivo tiver um proprietário do código, você poderá ver quem é o proprietário do código antes de abrir um pull request. No repositório, é possível pesquisar o arquivo e passar o mouse sobre
{% octicon "shield-lock" aria-label="The edit icon" %}.

![Proprietário do código para um arquivo em um repositório](/assets/images/help/repository/code-owner-for-a-file.png)
{% endif %}

### Local do arquivo CODEOWNERS

Para usar um arquivo CODEOWNERS, crie um novo arquivo denominado `CODEOWNERS` na raiz, `docs/` ou no diretório `.github/` do repositório, no branch em que deseja adicionar os proprietários do código.

Cada arquivo CODEOWNERS atribui os proprietários do código para um único branch no repositório. Dessa forma, você pode atribuir diferentes proprietários de códigos para diferentes branches, como `@octo-org/codeowners-team` para uma base de código no branch-padrão e `@octocat` para um site do {% data variables.product.prodname_pages %} no branch de `gh-pages`.

Para que os proprietários do código recebam solicitações de revisão, o arquivo CODEOWNERS deve estar no branch base da pull request. Por exemplo, se você atribuir `@octocat` como o proprietário do código para arquivos *.js* no branch `gh-pages` do seu repositório, `@octocat` receberá solicitações de revisão quando uma pull request com alterações nos arquivos *.js* for aberta entre o branch head e `gh-pages`.

### Sintaxe de CODEOWNERS

Um arquivo CODEOWNERS usa um padrão que segue a maioria das mesmas regras usadas nos arquivos [gitignore](https://git-scm.com/docs/gitignore#_pattern_format), com [algumas exceções](#syntax-exceptions). O padrão é seguido por um ou mais nomes de usuário ou nomes de equipe do {% data variables.product.prodname_dotcom %} usando o formato padrão `@username` ou `@org/team-name`. Você também pode consultar um usuário por um endereço de e-mail que tenha sido adicionado à respectiva conta do {% data variables.product.product_name %}, por exemplo `user@example.com`.

Se qualquer linha do seu arquivo CODEOWNERS contiver uma sintaxe inválida, o arquivo não será detectado e não será usado para solicitar revisões.
#### Exemplo de um arquivo CODEOWNERS
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

# Neste exemplo, @doctocat tem arquivos no diretório
# build/logs na raiz do repositório e qualquer um de seus
# subdiretórios.
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
```
#### Exceções de sintaxe
Existem algumas regras de sintaxe para arquivos gitignore que não funcionam em arquivos CODEOWNERS:
- Fugir de um padrão que começa com `#` usando `\` para que seja tratado como um padrão e não como um comentário
- Usar `!` para negar um padrão
- Usar `[ ]` para definir um intervalo de caracteres



### Leia mais

- "[Criar arquivos](/articles/creating-new-files)"
- "[Convidar colaboradores para um repositório pessoal](/articles/inviting-collaborators-to-a-personal-repository)"
- "[Gerenciar o acesso de um indivíduo a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Gerenciar o acesso da equipe a um repositório da organização](/articles/managing-team-access-to-an-organization-repository)"
- "[Exibir uma revisão de pull request](/articles/viewing-a-pull-request-review)"
