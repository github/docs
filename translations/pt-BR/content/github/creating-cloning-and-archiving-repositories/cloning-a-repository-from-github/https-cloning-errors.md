---
title: Erros de clonagem HTTPs
intro: Existem alguns erros comuns ao usar HTTPS com o Git. Esses erros normalmente indicam que você tem uma versão antiga do Git ou que você não tem acesso ao repositório.
redirect_from:
  - /articles/error-the-requested-url-returned-error-403/
  - /articles/error-the-requested-url-returned-error-401/
  - /articles/error-did-you-run-git-update-server-info-on-the-server/
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs/
  - /articles/https-cloning-errors
  - /github/creating-cloning-and-archiving-repositories/https-cloning-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

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
