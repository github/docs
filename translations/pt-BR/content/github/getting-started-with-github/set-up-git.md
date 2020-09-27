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
intro: 'No centro do {{ site.data.variables.product.product_name }} há um sistema de controle de versões (VCS) de código aberto chamado Git. O Git é responsável por tudo relacionado ao {{ site.data.variables.product.product_name }} que acontece localmente no computador.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Para usar o Git na linha de comando, você precisará fazer download, instalar e configurar o Git no computador. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} Você também pode instalar {{ site.data.variables.product.prodname_cli }} para usar {{ site.data.variables.product.product_name }} na linha de comando. Para obter mais informações sobre {{ site.data.variables.product.prodname_cli }}, consulte a documentação de [{{ site.data.variables.product.prodname_cli }}](https://cli.github.com/manual/) .{% endif %}

Se quiser trabalhar com o Git , mas não quiser usar a linha de comando, você poderá baixar e instalar o cliente do [{{ site.data.variables.product.prodname_desktop }}]({{ site.data.variables.product.desktop_link }}).  Para obter mais informações, consulte "[Instalar e configurar o {{ site.data.variables.product.prodname_desktop }}](/desktop/installing-and-configuring-github-desktop/)".

Se não precisar trabalhar nos arquivos localmente, o {{ site.data.variables.product.product_name }} permite a execução de diversas ações relacionadas ao Git diretamente no navegador, incluindo:

- [Criar um repositório](/articles/create-a-repo)
- [Bifurcar um repositório](/articles/fork-a-repo)
- [Gerenciar arquivos](/articles/managing-files-on-github/)
- [Interagir socialmente](/articles/be-social)

### Configurar o Git

1. [Faça download e instale a versão mais recente do Git](https://git-scm.com/downloads).
2. [Configure seu nome de usuário no Git](/articles/setting-your-username-in-git).
3. [Configure seu endereço de e-mail de commit no Git](/articles/setting-your-commit-email-address).

### Próximas etapas: autenticar no {{ site.data.variables.product.prodname_dotcom }} do Git

Quando você se conecta a um repositório do {{ site.data.variables.product.product_name }} a partir do Git, precisa fazer a autenticação no {{ site.data.variables.product.product_name }} usando HTTPS ou SSH.

#### Conexão por HTTPS (recomendada)

Se você [clonar com HTTPS](/articles/which-remote-url-should-i-use/#cloning-with-https-urls), [armazene suas credenciais do {{ site.data.variables.product.prodname_dotcom }} no Git](/github/using-git/caching-your-github-credentials-in-git) usando um auxiliar de credenciais.

#### Conexão por SSH

Se você [clonar com SSH](/articles/which-remote-url-should-i-use#cloning-with-ssh-urls), poderá [gerar chaves SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) em cada computador usado para fazer push ou pull a partir do {{ site.data.variables.product.product_name }}.

### Comemore

Parabéns! Agora o Git e o {{ site.data.variables.product.product_name }} estão configurados! O que quer fazer agora?

- **Configurar o Git**
- "[Criar um repositório](/articles/creating-a-new-repository)"
- "[Bifurcar um repositório](/articles/fork-a-repo)"
- "[Socializar](/articles/be-social)"
- {{ site.data.reusables.support.connect-in-the-forum-bootcamp }}
