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
---

## Erros de clonagem HTTPs

Existem alguns erros comuns ao usar HTTPS com o Git. Esses erros normalmente indicam que você tem uma versão antiga do Git ou que você não tem acesso ao repositório.

Segue aqui um exemplo de erro HTTPS que você pode receber:

```shell
> erro: A URL solicitada retornou o erro: 401 ao acessar
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs?service=git-receive-pack
> fatal: solicitação HTTP rejeitada
```

```shell
> Erro: A URL solicitada retornou o erro: 403 ao acessar
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs
> fatal: solicitação HTTP rejeitada
```

```shell
> Erro: https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs not found: você executou o git
> update-server-info no servidor?
```

### Verifique sua versão do Git

Não há uma versão mínima necessária do Git para interagir com {% data variables.product.product_name %}, mas achamos que a versão 1.7.10 é uma versão estável e confortável, e que está disponível em muitas plataformas. Sempre é possível [baixar a última versão no site do Git](https://git-scm.com/downloads).

### Confirme que o remote está correto

O repositório que você está tentando fazer fetch deve existir em {% data variables.product.product_location %} e a URL diferencia maiúsculas de minúsculas.

Você pode localizar a URL do repositório local abrindo a linha de comando e digitando `git remote -v`:

```shell
$ git remote -v
# Visualiza remotes existentes
> origem  https://github.com/ghost/reactivecocoa.git (fetch)
> origem  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Altere a 'origem' da URL do remote

$ git remote -v
# Verifica nova URL remota
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

Aternativamente, você pode alterar a URL por meio de nosso aplicativo [{% data variables.product.prodname_desktop %}](https://desktop.github.com/).

### Forneça um token de acesso

Para acessar {% data variables.product.prodname_dotcom %}, você deve efetuar a autenticação com um token de acesso pessoal em vez de sua senha. Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."

{% data reusables.command_line.provide-an-access-token %}

### Verifique suas permissões

Quando for solicitado um nome e senha, certifique-se de usar uma conta que tenha acesso ao repositório.

{% tip %}

**Dica**: Se você não desejar inserir suas credenciais toda vez que interagir com o repositório remoto, você poderá ativar o [armazenamento de credenciais](/github/getting-started-with-github/caching-your-github-credentials-in-git). Se você já está usando o cache de credenciais, certifique-se de que o seu computador tem as credenciais corretas armazenadas em cache. Credenciais incorretas ou desatualizadas causarão falha na autenticação.

{% endtip %}

### Substitua por SSH

Se você configurou as chaves SSH previamente, é possível usar a URL clone SSH em vez de HTTPS.  Para obter mais informações, consulte "[Sobre repositórios remotos](/github/getting-started-with-github/about-remote-repositories)."

## Erro: repositório não encontrado

{% ifversion fpt or ghae or ghec %}Se você vir este erro ao clonar um repositório, significa que o repositório não existe ou que você não tem permissão para acessá-lo.{% else %}Se você vir este erro ao clonar um repositório, significa que o repositório não existe, você não tem permissão para acessá-lo ou {% data variables.product.product_location %} está em modo privado.{% endif %} Existem algumas soluções para este erro, dependendo da causa.

### Verifique a ortografia

Erros de digitação acontecem e os nomes dos repositórios diferenciam maiúsculas de minúsculas.  Ao tentar clonar `git@{% data variables.command_line.codeblock %}:user/repo.git` e o repositório estiver nomeado `User/Repo`, você receberá essa mensagem de erro.

Para evitar o erro ao clonar, sempre copie e cole a URL clone da página do repositório. Para obter mais informações, consulte "[Clonar um repositório](/articles/cloning-a-repository)".

Para atualizar o repositório remoto em um repositório existente, consulte "[Gerenciar repositórios remotos](/github/getting-started-with-github/managing-remote-repositories)".

### Verifique as permissões

Se você está tentando clonar um repositório privado, mas não tem permissão para visualizar o repositório, ocorrerá esse erro.

Assegure-se de ter acesso ao repositório como:

* Proprietário do repositório
* [Colaborador](/articles/inviting-collaborators-to-a-personal-repository) no repositório
* [Integrante de uma equipe](/articles/adding-organization-members-to-a-team) com acesso ao repositório (caso o repositório pertença a uma organização)

### Verifique seu acesso SSH

Em raras circunstâncias, você pode não ter o devido acesso SSH a um repositório.

Você deve garantir que a chave SSH que você está usando esteja anexada à sua conta pessoal em {% data variables.product.product_name %}. Para confirmar, digite na linha de comando:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Olá <em>username</em>! Você conseguiu se autenticar, mas o GitHub não
> fornece acesso shell.
```

{% ifversion fpt or ghec %}
Se o repositório pertencer a uma organização e você estiver usando uma chave SSH gerada por um aplicativo OAuth, o acesso ao aplicativo OAuth poderá ser restringido pelo proprietário da organização. Para obter mais informações, consulte "[Sobre as restrições de acesso ao aplicativo OAuth](/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions)".
{% endif %}

Para obter mais informações, consulte [Adicionar uma nova chave SSH à sua conta GitHub](/articles/adding-a-new-ssh-key-to-your-github-account).

{% ifversion ghes %}
### Verifique se sua instância está em modo privado

Caso o administrador de seu site tenha habilitado o modo privado em sua instância GitHub Enterprise, clones anônimos em `git://` estarão desabilitados. Caso não consiga clonar um repositório, contate o administrador de seu site.
{% endif %}

### Verifique se o repositório realmente existe

Se nada resolver o problema, confirme se o repositório realmente existe em {% data variables.product.product_location %}! Caso você esteja tentando fazer push para um repositório que não existe, você receberá essa mensagem de erro.

## Erro: HEAD remote faz referência a um ref inexistente, não é possível fazer checkout

O erro ocorre se o branch padrão de um repositório foi excluído em {% data variables.product.product_location %}.

É simples identificar esse erro; o Git avisará quando você tentar clonar o repositório:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Clonar um repositório
> Clonando em 'repo'...
> remote: Contando objetos: 66179, concluído.
> remote: Compactando objetos: 100% (15587/15587), concluído.
> remote: Total 66179 (delta 46985), reutilizados 65596 (delta 46402)
> Recebendo objetos: 100% (66179/66179), 51.66 MiB | 667 KiB/s, concluído.
> Solucionando deltas: 100% (46985/46985), concluído.
> aviso: HEAD remote faz referência a um ref inexistente, não é possível fazer checkout.
```

Para corrigir o erro, você precisa ser o administrador do repositório em {% data variables.product.product_location %}. Você deverá [ alterar o branch padrão](/github/administering-a-repository/changing-the-default-branch) do repositório.

Depois de fazer isso, você obterá uma lista de todos os branches disponíveis a partir da linha de comando:

```shell
$ git branch -a
# Lista TODOS os branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-master
```

Em seguida, mude para o novo branch:

```shell
$ git checkout new-master
# Criar e fazer checkout de um branch rastreado
> Configuração de um novo branch mestre para rastrear novo branch mestre remote na origem.
> Alterado para um novo 'novo branch master'
```
