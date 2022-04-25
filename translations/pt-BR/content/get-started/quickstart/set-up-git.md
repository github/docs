---
title: Configurar o Git
redirect_from:
  - /git-installation-redirect
  - /linux-git-installation
  - /linux-set-up-git
  - /mac-git-installation
  - /mac-set-up-git
  - /set-up-git-redirect
  - /win-git-installation
  - /win-set-up-git
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: 'No centro do {% data variables.product.prodname_dotcom %} há um sistema de controle de versões (VCS) de código aberto chamado Git. O Git é responsável por tudo relacionado ao {% data variables.product.prodname_dotcom %} que acontece localmente no computador.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Usar o Git

To use Git on the command line, you will need to download, install, and configure Git on your computer. Você também pode instalar {% data variables.product.prodname_cli %} para usar {% data variables.product.prodname_dotcom %} a partir da linha de comando. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

If you want to work with Git locally, but do not want to use the command line, you can instead download and install the [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) client.  Para obter mais informações, consulte "[Instalar e configurar o {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)".

If you do not need to work with files locally, {% data variables.product.product_name %} lets you complete many Git-related actions directly in the browser, including:

- [Criar um repositório](/articles/create-a-repo)
- [Bifurcar um repositório](/articles/fork-a-repo)
- [Gerenciar arquivos](/repositories/working-with-files/managing-files)
- [Interagir socialmente](/articles/be-social)

## Configurar o Git

1. [Faça download e instale a versão mais recente do Git](https://git-scm.com/downloads).

{% note %}

**Observação**: Se você estiver usando um dispositivo do Chrome OS, será necessário configurar adicionalmente:

2. Instale um emulador de terminais como, por exemplo, o Termux da Google Play Store no seu dispositivo Chrome OS.
3. A partir do emulador de terminal que você instalou, instale o Git. Por exemplo, no Termux, insira `apt install git` e, em seguida, digite `y` quando solicitado.

{% endnote %}

2. [Configure seu nome de usuário no Git](/github/getting-started-with-github/setting-your-username-in-git).
3. [Configure seu endereço de e-mail de commit no Git](/articles/setting-your-commit-email-address).

## Authenticating with {% data variables.product.prodname_dotcom %} from Git

When you connect to a {% data variables.product.prodname_dotcom %} repository from Git, you will need to authenticate with {% data variables.product.product_name %} using either HTTPS or SSH.

{% note %}

**Observação:** Você pode efetuar a autenticação em {% data variables.product.product_name %} usando {% data variables.product.prodname_cli %}, para HTTP ou SSH. Para obter mais informações, consulte [`login gh auth`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Conexão por HTTPS (recomendada)

If you clone with HTTPS, you can cache your {% data variables.product.prodname_dotcom %} credentials in Git using a credential helper. For more information, see "[Cloning with HTTPS urls](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)" and "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)."

### Conexão por SSH

If you clone with SSH, you must generate SSH keys on each computer you use to push or pull from {% data variables.product.product_name %}. For more information, see "[Cloning with SSH urls](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)" and "[Generating a new SSH key](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

## Próximas etapas

You now have Git and {% data variables.product.prodname_dotcom %} all set up. Agora você pode optar por criar um repositório onde possa colocar seus projetos. Saving your code in a repository allows you to back up your code and share it around the world.

* {% data reusables.getting-started.create-a-repository %}.

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
