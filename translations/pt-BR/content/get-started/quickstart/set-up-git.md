---
title: Configurar o Git
redirect_from:
  - /git-installation-redirect/
  - /linux-git-installation/
  - /linux-set-up-git/
  - /mac-git-installation/
  - /mac-set-up-git/
  - /set-up-git-redirect/
  - /win-git-installation/
  - /win-set-up-git/
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: 'No centro do {% data variables.product.product_name %} há um sistema de controle de versões (VCS) de código aberto chamado Git. O Git é responsável por tudo relacionado ao {% data variables.product.product_name %} que acontece localmente no computador.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Usar o Git

Para usar o Git na linha de comando, você precisará fazer download, instalar e configurar o Git no computador. Você também pode instalar {% data variables.product.prodname_cli %} para usar {% data variables.product.product_name %} a partir da linha de comando. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Se quiser trabalhar com o Git, mas não quiser usar a linha de comando, você poderá baixar e instalar o cliente do [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}).  Para obter mais informações, consulte "[Instalar e configurar o {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)".

Se não precisar trabalhar nos arquivos localmente, o {% data variables.product.product_name %} permite a execução de diversas ações relacionadas ao Git diretamente no navegador, incluindo:

- [Criar um repositório](/articles/create-a-repo)
- [Bifurcar um repositório](/articles/fork-a-repo)
- [Gerenciar arquivos](/repositories/working-with-files/managing-files)
- [Interagir socialmente](/articles/be-social)

## Configurar o Git

1. [Faça download e instale a versão mais recente do Git](https://git-scm.com/downloads).
2. [Configure seu nome de usuário no Git](/github/getting-started-with-github/setting-your-username-in-git).
3. [Configure seu endereço de e-mail de commit no Git](/articles/setting-your-commit-email-address).

## Próximas etapas: autenticar no {% data variables.product.prodname_dotcom %} do Git

Quando você se conecta a um repositório do {% data variables.product.product_name %} a partir do Git, precisa fazer a autenticação no {% data variables.product.product_name %} usando HTTPS ou SSH.

{% note %}

**Observação:** Você pode efetuar a autenticação em {% data variables.product.product_name %} usando {% data variables.product.prodname_cli %}, para HTTP ou SSH. Para obter mais informações, consulte [`login gh auth`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Conexão por HTTPS (recomendada)

Se você [clonar com HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), [armazene suas credenciais do {% data variables.product.prodname_dotcom %} no Git](/github/getting-started-with-github/caching-your-github-credentials-in-git) usando um auxiliar de credenciais.

### Conexão por SSH

Se você [clonar com SSH](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls), poderá [gerar chaves SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) em cada computador usado para fazer push ou pull a partir do {% data variables.product.product_name %}.

## Comemore

Parabéns! Agora o Git e o {% data variables.product.product_name %} estão configurados! Agora você pode optar por criar um repositório onde possa colocar seus projetos. Esta é uma ótima maneira de fazer backup do seu código e facilita o compartilhamento do código no mundo todo. Para obter mais informações, consulte "[Criar um repositório](/articles/create-a-repo)".

Você pode criar a cópia de um repositório, fazendo uma bifurcação dele e propondo as alterações que deseja ver sem afetar o repositório upstream. Para obter mais informações, consulte "[Bifurcar um repositório](/articles/fork-a-repo)".

Cada repositório em {% data variables.product.product_name %} pertence a uma pessoa ou organização. Você pode interagir com as pessoas, repositórios e organizações, conectando-se e seguindo-as em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Seja social](/articles/be-social)".

{% data reusables.support.connect-in-the-forum-bootcamp %}
