---
title: 'Erro: repositório não encontrado'
intro: '{% if currentVersion == "free-pro-team@latest" %}Se você encontrar esse erro ao clonar um repositório, significa que o repositório não existe ou você não tem permissão para acessá-lo. Existem algumas soluções para esse erro, dependendo do motivo.{% else %}Ao encontrar esse erro ao clonar um repositório, significa que o repositório não existe, você não tem permissão para acessá-lo ou a instância do GitHub Enterprise está em modo privado. Existem algumas soluções para esse erro, dependendo do motivo.{% endif %}'
redirect_from:
  - /articles/error-repository-not-found
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Verifique a ortografia

Erros de digitação acontecem e os nomes dos repositórios diferenciam maiúsculas de minúsculas.  Ao tentar clonar `git@{% data variables.command_line.codeblock %}:user/repo.git` e o repositório estiver nomeado `User/Repo`, você receberá essa mensagem de erro.

Para evitar o erro ao clonar, sempre copie e cole a URL clone da página do repositório. Para obter mais informações, consulte "[Clonar um repositório](/articles/cloning-a-repository)".

Para atualizar o remote em um repositório existente, consulte "[Alterar o remote da URL](/articles/changing-a-remote-s-url)".

### Verifique as permissões

Se você está tentando clonar um repositório privado, mas não tem permissão para visualizar o repositório, ocorrerá esse erro.

Assegure-se de ter acesso ao repositório como:

* Proprietário do repositório
* [Colaborador](/articles/inviting-collaborators-to-a-personal-repository) no repositório
* [Integrante de uma equipe](/articles/adding-organization-members-to-a-team) com acesso ao repositório (caso o repositório pertença a uma organização)

### Verifique seu acesso SSH

Em raras circunstâncias, você pode não ter o devido acesso SSH a um repositório.

Confirme que a chave SSH em uso está associada à sua conta de usuário {% data variables.product.product_name %}. Para confirmar, digite na linha de comando:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Olá <em>username</em>! Você conseguiu se autenticar, mas o GitHub não
> fornece acesso shell.
```

Se o repositório pertencer a uma organização e você estiver usando uma chave SSH gerada por um aplicativo OAuth, o acesso ao aplicativo OAuth poderá ser restringido pelo proprietário da organização. Para obter mais informações, consulte "<a href="/github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions" class="dotcom-only">Sobre as restrições de acesso ao aplicativo OAuth</a>".

Para obter mais informações, consulte [Adicionar uma nova chave SSH à sua conta GitHub](/articles/adding-a-new-ssh-key-to-your-github-account).

{% if currentVersion != "free-pro-team@latest" %}

### Verifique se sua instância está em modo privado

Caso o administrador de seu site tenha habilitado o modo privado em sua instância GitHub Enterprise, clones anônimos em `git://` estarão desabilitados. Caso não consiga clonar um repositório, contate o administrador de seu site.

{% endif %}

### Verifique se o repositório realmente existe

Se nada resolver o problema, confirme se o repositório realmente existe em {% data variables.product.product_location %}! Caso você esteja tentando fazer push para um repositório que não existe, você receberá essa mensagem de erro.
