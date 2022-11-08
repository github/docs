---
title: Sobre os proprietários de código
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
ms.openlocfilehash: 3b6822be6551d43b3af55220ac8f39deec8be1df
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106834'
---
As pessoas com permissões de administrador ou proprietário podem configurar um arquivo CODEOWNERS em um repositório.

As pessoas que você escolhe como proprietários do código devem ter permissões de gravação para o repositório. Quando o proprietário do código é uma equipe, essa equipe deverá ser visível e ter permissões de gravação, ainda que todos os membros individuais da equipe já tenham permissões de gravação diretamente, por meio da associação da organização ou por meio de outra associação à equipe.

## Sobre os proprietários de código

Solicita-se automaticamente que os proprietários do código revisem quando alguém abre um pull request que modifica o código que possuem. Solicita-se automaticamente que os proprietários do código revejam os rascunhos de pull requests. Para obter mais informações sobre as solicitações de pull de rascunho, confira "[Sobre as solicitações de pull](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)". Solicita-se automaticamente que os proprietários do código revejam os rascunhos de pull requests. Se você converter um pull request em rascunho, as pessoas que já assinaram as notificações não terão suas assinaturas canceladas automaticamente. Para obter mais informações, confira "[Como alterar a fase de uma solicitação de pull](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)".

Quando alguém com permissões de administrador ou proprietário tiver habilitado revisões obrigatórias, se desejar, ele também poderá exigir aprovação de um proprietário do código para que o autor possa fazer merge de uma pull request no repositório. Para obter mais informações, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)".

Se um arquivo tiver um proprietário do código, você poderá ver quem é o proprietário do código antes de abrir um pull request. No repositório, você pode procurar o arquivo e posicionar o mouse sobre o {% octicon "shield-lock" aria-label="The edit icon" %}.

![Proprietário do código para um arquivo em um repositório](/assets/images/help/repository/code-owner-for-a-file.png)

## Local do arquivo CODEOWNERS

Para usar um arquivo CODEOWNERS, crie um arquivo chamado `CODEOWNERS` na raiz, em `docs/` ou no diretório `.github/` do repositório, no branch em que deseja adicionar os proprietários de código.

Cada arquivo CODEOWNERS atribui os proprietários do código para um único branch no repositório. Assim, você pode atribuir proprietários de código diferentes para diferentes branches, como `@octo-org/codeowners-team` para uma base de código no branch padrão e `@octocat` para um site do {% data variables.product.prodname_pages %} no branch `gh-pages`.

Para que os proprietários do código recebam solicitações de revisão, o arquivo CODEOWNERS deve estar no branch base da pull request. Por exemplo, se você atribuir `@octocat` como o proprietário de código para arquivos *.js* no branch `gh-pages` do repositório, `@octocat` receberá solicitações de revisão quando uma solicitação de pull com alterações em arquivos *.js* for aberta entre o branch principal e `gh-pages`.

## Tamanho do arquivo CODEOWNERS

Os arquivos CODEOWNERS devem ter menos de 3 MB. Um arquivo CODEOWNERS acima deste limite não será carregado, o que significa que as informações do proprietário do código não serão mostradas e não será solicitado que os proprietários do código apropriado revise as alterações em um pull request.

Para reduzir o tamanho do seu arquivo CODEOWNERS, considere o uso de padrões curinga para consolidar múltiplas entradas em uma única entrada.

## Sintaxe de CODEOWNERS

{% warning %}

**Aviso**: existem algumas regras de sintaxe para arquivos gitignore que *não funcionam* em arquivos CODEOWNERS:
- Fazer o escape de um padrão que começa com `#` usando `\` para que ele seja tratado como um padrão e não como um comentário
- Usar `!` para negar um padrão
- Usar `[ ]` para definir um intervalo de caracteres

{% endwarning %}

Um arquivo CODEOWNERS usa um padrão que segue a maioria das mesmas regras usadas em arquivos [gitignore](https://git-scm.com/docs/gitignore#_pattern_format). O padrão é seguido por um ou mais nomes de usuário ou nomes de equipes do {% data variables.product.prodname_dotcom %} usando o padrão `@username` ou o formato `@org/team-name`. Os usuários e as equipes precisam ter acesso `write` explícito ao repositório, mesmo se os membros da equipe já têm acesso.

{% ifversion fpt or ghec%}Na maioria dos casos, você{% else %}Você{% endif %} também pode se referir a um usuário por um endereço de email que foi adicionado à conta dele no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, por exemplo, `user@example.com`. {% ifversion fpt or ghec %} Não é possível usar um endereço de email para se referir a um {% data variables.enterprise.prodname_managed_user %}. Para saber mais sobre {% data variables.enterprise.prodname_managed_users %}, confira "[Sobre os {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}{% endif %}

Os caminhos dos CODEOWNERS diferenciam maiúsculas de minúsculas, porque {% data variables.product.prodname_dotcom %} usa um sistema de arquivos que diferencia maiúsculas e minúsculas. Uma vez que os CODEOWNERS são avaliados por {% data variables.product.prodname_dotcom %}, até mesmo sistemas que diferenciam maiúsculas de minúsculas (por exemplo, macOS) devem usar caminhos e arquivos que são tratados corretamente no arquivo dos CODEOWNERS.

{% ifversion codeowners-errors %} Se alguma linha do arquivo CODEOWNERS contiver uma sintaxe inválida, essa linha será ignorada. Ao acessar o arquivo CODEOWNERS no repositório no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, você verá todos os erros destacados. Uma lista de erros no arquivo CODEOWNERS de um repositório também pode ser acessada por meio da API. Para obter mais informações, confira "[Repositórios](/rest/reference/repos#list-codeowners-errors)" na documentação da REST.
{% else %} Se alguma linha do arquivo CODEOWNERS contiver uma sintaxe inválida, o arquivo não será detectado e não será usado para solicitar revisões.
{% endif %}

### Exemplo de um arquivo CODEOWNERS
```
# This is a comment.
# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in
# the repo. Unless a later match takes precedence,
# @global-owner1 and @global-owner2 will be requested for
# review when someone opens a pull request.
*       @global-owner1 @global-owner2

# Order is important; the last matching pattern takes the most
# precedence. When someone opens a pull request that only
# modifies JS files, only @js-owner and not the global
# owner(s) will be requested for a review.
*.js    @js-owner

# You can also use email addresses if you prefer. They'll be
# used to look up users just like we do for commit author
# emails.
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

# The `docs/*` pattern will match files like
# `docs/getting-started.md` but not further nested files like
# `docs/build-app/troubleshooting.md`.
docs/*  docs@example.com

# In this example, @octocat owns any file in an apps directory
# anywhere in your repository.
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

## Proteção de branch e de CODEOWNERS
Os proprietários do repositório podem adicionar regras de proteção de branch para garantir que o código alterado seja revisado pelos proprietários dos arquivos alterados. Para obter mais informações, confira "[Sobre os branches protegidos](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)".

## Leitura adicional

- "[Como criar arquivos](/articles/creating-new-files)"
- "[Como convidar colaboradores para um repositório pessoal](/articles/inviting-collaborators-to-a-personal-repository)"
- "[Como gerenciar o acesso de uma pessoa a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[Como gerenciar o acesso da equipe a um repositório da organização](/articles/managing-team-access-to-an-organization-repository)"
- "[Como ver uma revisão de solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)"
