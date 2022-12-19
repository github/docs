---
title: Solucionar problemas de erros de clonagem
intro: 'Se você tiver problemas para clonar um repositório, verifique estes erros mais comuns.'
redirect_from:
  - /articles/error-the-requested-url-returned-error-403
  - /articles/error-the-requested-url-returned-error-401
  - /articles/error-did-you-run-git-update-server-info-on-the-server
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs
  - /articles/https-cloning-errors
  - /github/creating-cloning-and-archiving-repositories/https-cloning-errors
  - /articles/error-repository-not-found
  - /github/creating-cloning-and-archiving-repositories/error-repository-not-found
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
  - /github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 60a5ff0350fed34841099c18f495b185b75f9832
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147093139'
---
## Erros de clonagem HTTPs

Existem alguns erros comuns ao usar HTTPS com o Git. Esses erros normalmente indicam que você tem uma versão antiga do Git ou que você não tem acesso ao repositório.

Segue aqui um exemplo de erro HTTPS que você pode receber:

```shell
> error: The requested URL returned error: 401 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs?service=git-receive-pack
> fatal: HTTP request failed
```

```shell
> Error: The requested URL returned error: 403 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs
> fatal: HTTP request failed
```

```shell
> Error: https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs not found: did you run git
> update-server-info on the server?
```

### Verifique sua versão do Git

Não há uma versão mínima necessária do Git para interagir com {% data variables.product.product_name %}, mas achamos que a versão 1.7.10 é uma versão estável e confortável, e que está disponível em muitas plataformas. Você sempre pode [baixar a última versão no site do Git](https://git-scm.com/downloads).

### Confirme que o remote está correto

O repositório que você está tentando fazer fetch deve existir em {% data variables.product.product_location %} e a URL diferencia maiúsculas de minúsculas.

Encontre a URL do repositório local abrindo a linha de comando e digitando `git remote -v`:

```shell
$ git remote -v
# View existing remotes
> origin  https://github.com/ghost/reactivecocoa.git (fetch)
> origin  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Change the 'origin' remote's URL

$ git remote -v
# Verify new remote URL
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

Como alternativa, você pode alterar a URL por meio do nosso aplicativo do [{% data variables.product.prodname_desktop %}](https://desktop.github.com/).

### Forneça um token de acesso

Para acessar {% data variables.product.prodname_dotcom %}, você deve efetuar a autenticação com um token de acesso pessoal em vez de sua senha. Para obter mais informações, confira "[Como criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".

{% data reusables.command_line.provide-an-access-token %}

### Verificar suas permissões

Quando for solicitado um nome e senha, certifique-se de usar uma conta que tenha acesso ao repositório.

{% tip %}

**Dica**: se não quiser inserir suas credenciais toda vez que interagir com o repositório remoto, ative o [cache de credenciais](/github/getting-started-with-github/caching-your-github-credentials-in-git). Se você já está usando o cache de credenciais, certifique-se de que o seu computador tem as credenciais corretas armazenadas em cache. Credenciais incorretas ou desatualizadas causarão falha na autenticação.

{% endtip %}

### Substitua por SSH

Se você configurou as chaves SSH previamente, é possível usar a URL clone SSH em vez de HTTPS.  Para obter mais informações, confira "[Sobre os repositórios remotos](/github/getting-started-with-github/about-remote-repositories)".

## Erro: repositório não encontrado

{% ifversion fpt or ghae or ghec %}Se você receber este erro ao clonar um repositório, isso significará que o repositório não existe ou que você não tem permissão para acessá-lo.{% else %}Se você receber este erro ao clonar um repositório, isso significará que o repositório não existe, você não tem permissão para acessá-lo ou o {% data variables.product.product_location %} está no modo privado.{% endif %} Existem algumas soluções para esse erro, dependendo da causa.

### Verificar a ortografia

Erros de digitação acontecem e os nomes dos repositórios diferenciam maiúsculas de minúsculas.  Se você tentar clonar `git@{% data variables.command_line.codeblock %}:user/repo.git`, mas o repositório for realmente chamado `User/Repo`, você receberá esse erro.

Para evitar o erro ao clonar, sempre copie e cole a URL clone da página do repositório. Para obter mais informações, confira "[Como clonar um repositório](/articles/cloning-a-repository)".

Para atualizar o repositório remoto em um repositório existente, confira "[Como gerenciar repositórios remotos](/github/getting-started-with-github/managing-remote-repositories)".

### Verifique as permissões

Se você está tentando clonar um repositório privado, mas não tem permissão para visualizar o repositório, ocorrerá esse erro.

Assegure-se de ter acesso ao repositório como:

* Proprietário do repositório
* Um [colaborador](/articles/inviting-collaborators-to-a-personal-repository) no repositório
* Um [membro de uma equipe](/articles/adding-organization-members-to-a-team) que tem acesso ao repositório (se o repositório pertence a uma organização)

### Verifique seu acesso SSH

Em raras circunstâncias, você pode não ter o devido acesso SSH a um repositório.

Confirme que a chave SSH em uso está associada a sua conta pessoal em {% data variables.product.product_name %}. Verifique isso digitando o seguinte na linha de comando:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% ifversion fpt or ghec %} Se o repositório pertencer a uma organização e você estiver usando uma chave SSH gerada por um aplicativo OAuth, o acesso ao aplicativo OAuth poderá ser restringido por um proprietário da organização. Para obter mais informações, confira "[Sobre as restrições de acesso do Aplicativo OAuth](/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions)".
{% endif %}

Para obter mais informações, confira [Como adicionar uma nova chave SSH à sua conta do GitHub](/articles/adding-a-new-ssh-key-to-your-github-account).

{% ifversion ghes %}
### Verifique se sua instância está em modo privado

Caso o administrador do site tenha habilitado o modo privado na sua instância do GitHub Enterprise, os clones anônimos em `git://` ficam desabilitados. Caso não consiga clonar um repositório, contate o administrador de seu site.
{% endif %}

### Verifique se o repositório realmente existe

Se nada resolver o problema, confirme se o repositório realmente existe em {% data variables.product.product_location %}!
Caso você esteja tentando fazer push para um repositório que não existe, você receberá essa mensagem de erro.

## Erro: HEAD remote faz referência a um ref inexistente, não é possível fazer checkout

O erro ocorre se o branch padrão de um repositório foi excluído em {% data variables.product.product_location %}.

É simples identificar esse erro; o Git avisará quando você tentar clonar o repositório:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Clone a repo
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.
```

Para corrigir o erro, você precisa ser o administrador do repositório em {% data variables.product.product_location %}.
O ideal será [alterar o branch padrão](/github/administering-a-repository/changing-the-default-branch) do repositório.

Depois de fazer isso, você obterá uma lista de todos os branches disponíveis a partir da linha de comando:

```shell
$ git branch -a
# Lists ALL the branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-main
```

Em seguida, mude para o novo branch:

```shell
$ git checkout new-main
# Create and checkout a tracking branch
> Branch new-main set up to track remote branch new-main from origin.
> Switched to a new branch 'new-main'
```
