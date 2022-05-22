---
title: Lembrar o nome de usuário ou e-mail do GitHub
intro: 'Faz tempo que você não faz login no {% data variables.product.product_location %}? Se sim, bem-vindo de volta! Se não lembrar o nome da conta de usuário do {% data variables.product.product_name %}, siga estas etapas para recuperá-lo.'
redirect_from:
  - /articles/oh-noes-i-ve-forgotten-my-username-email/
  - /articles/oh-noes-i-ve-forgotten-my-username-or-email/
  - /articles/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
  - Notifications
---
{% mac %}

### Usuários do {% data variables.product.prodname_desktop %}

1. No menu **GitHub Desktop**, clique em **Preferences** (Preferências).
2. Na janela Preferences (Preferências), faça o seguinte:
    - Para visualizar o nome de usuário do {% data variables.product.product_name %}, clique em **Accounts** (Contas).
    - Para visualizar o e-mail do Git, clique em **Git**. Note que esse não é necessariamente seu [e-mail principal do {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

### Usuários do {% data variables.product.prodname_desktop %}

1. No menu **Arquivo** clique em **Opções**.
2. Na janela Options (Opções), faça o seguinte:
    - Para visualizar o nome de usuário do {% data variables.product.product_name %}, clique em **Accounts** (Contas).
    - Para visualizar o e-mail do Git, clique em **Git**. Note que esse não é necessariamente seu [e-mail principal do {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).

{% endwindows %}

### Encontrar o nome de usuário na configuração `user.name`

Durante a configuração, você provavelmente [configurou seu nome de usuário no Git](/github/getting-started-with-github/setting-your-username-in-git). Em caso afirmativo, você poderá revisar o valor dessa configuração:

```shell
$ git config user.name
# Visualizar a configuração
<em>YOUR_USERNAME</em>
```

### Encontrar o nome de usuário na URL de repositórios remote

Se você tiver cópias locais de repositórios pessoais criados ou bifurcados, poderá consultar a URL do repositório remote.

{% tip %}

**Dica**: esse método funciona apenas se você tiver um repositório original ou sua própria bifurcação do repositório de outra pessoa. Se você clonar o repositório de outra pessoa, o nome de usuário da pessoa será exibido, não o seu. De forma similar, os repositórios da organização exibirão o nome da organização, não um usuário específico na URL remoto.

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# Altera os diretórios no repositório Git inicializado
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

Seu nome de usuário aparece logo após `https://{% data variables.command_line.backticks %}/`.

{% if currentVersion == "free-pro-team@latest" %}
### Leia mais

- "[Verificar o endereço de e-mail](/articles/verifying-your-email-address)"
{% endif %}
