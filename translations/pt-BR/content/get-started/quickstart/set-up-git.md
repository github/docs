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

Para usar o Git na linha de comando, você precisará fazer download, instalar e configurar o Git no computador. Você também pode instalar {% data variables.product.prodname_cli %} para usar {% data variables.product.prodname_dotcom %} a partir da linha de comando. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Se quiser trabalhar com o Git, mas não quiser usar a linha de comando, você poderá fazer o download e instalar o cliente do [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}).  Para obter mais informações, consulte "[Instalar e configurar o {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)".

Se não precisar trabalhar nos arquivos localmente, o {% data variables.product.product_name %} permite a execução de diversas ações relacionadas ao Git diretamente no navegador, incluindo:

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

## Efetuando a autenticação com {% data variables.product.prodname_dotcom %} a partir do Git

Quando você se conecta a um repositório do {% data variables.product.prodname_dotcom %} a partir do Git, precisa fazer a autenticação no {% data variables.product.product_name %} usando HTTPS ou SSH.

{% note %}

**Observação:** Você pode efetuar a autenticação em {% data variables.product.product_name %} usando {% data variables.product.prodname_cli %}, para HTTP ou SSH. Para obter mais informações, consulte [`login gh auth`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Conexão por HTTPS (recomendada)

Se você fizer a clonagem com HTTPS, você pode armazenar suas credenciais de {% data variables.product.prodname_dotcom %} no Git usando um auxiliar de credenciais. Para obter mais informações, consulte "[Clonando com URLs de HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)" e "[Armazenando as suas credenciais de {% data variables.product.prodname_dotcom %} no cache do Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".

### Conexão por SSH

Se você fizer a clonagem com SSH, você deverá gerar chaves SSH em cada computador que usar para fazer push ou pull a partir de {% data variables.product.product_name %}. Para obter mais informações, consulte "[Clonando com URLs de SSH](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)" e "[Gerando uma nova chave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

## Próximas etapas

Agora você o Git e {% data variables.product.prodname_dotcom %} estão configurados. Agora você pode optar por criar um repositório onde possa colocar seus projetos. Salvar seu código em um repositório permite que você faça backup do seu código e o compartilhe no mundo todo.

* {% data reusables.getting-started.create-a-repository %}.

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
