---
title: Configurar o git
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
ms.openlocfilehash: d12782f8531ec856cfa25e7d847527a26e84fb2e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147643954'
---
## Usar o Git

Para usar o Git na linha de comando, você precisará fazer download, instalar e configurar o Git no computador. Instale também ao {% data variables.product.prodname_cli %} para usar o {% data variables.product.prodname_dotcom %} na linha de comando. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Caso deseje trabalhar com o Git localmente, mas não queira usar a linha de comando, baixe e instale o cliente do [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}).  Para obter mais informações, confira "[Como instalar e configurar o {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)".

Se não precisar trabalhar nos arquivos localmente, o {% data variables.product.product_name %} permite a execução de diversas ações relacionadas ao Git diretamente no navegador, incluindo:

- [Como criar um repositório](/articles/create-a-repo)
- [Criar um fork de um repositório](/articles/fork-a-repo)
- [Gerenciar arquivos](/repositories/working-with-files/managing-files)
- [Como interagir socialmente](/articles/be-social)

## Configurar o Git

1. [Baixe e instale a última versão do Git](https://git-scm.com/downloads).

   {% note %}
   
   **Observação**: se você estiver usando um dispositivo Chrome OS, uma configuração adicional será necessária:
   
   1. Instale um emulador de terminais como, por exemplo, o Termux da Google Play Store no seu dispositivo Chrome OS.
   1. A partir do emulador de terminal que você instalou, instale o Git. Por exemplo, no Termux, insira `apt install git` e digite `y` quando solicitado. 
   
   {% endnote %}

1. [Defina seu nome de usuário no Git](/github/getting-started-with-github/setting-your-username-in-git).
1. [Defina seu endereço de email de commit no Git](/articles/setting-your-commit-email-address).

## Autenticar no {% data variables.product.prodname_dotcom %} por meio do Git

Ao se conectar a um repositório do {% data variables.product.prodname_dotcom %} no Git, você precisará se autenticar no {% data variables.product.product_name %} usando HTTPS ou o SSH.

{% note %}

**Observação:** você pode autenticar no {% data variables.product.product_name %} usando a {% data variables.product.prodname_cli %} para HTTP ou o SSH. Para obter mais informações, confira [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Conexão por HTTPS (recomendada)

Se você fizer a clonagem com HTTPS, poderá armazenar suas credenciais do {% data variables.product.prodname_dotcom %} em cache no Git usando um auxiliar de credencial. Para obter mais informações, confira "[Clonagem com URLs HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)" e "[Como armazenar suas credenciais do {% data variables.product.prodname_dotcom %} em cache no Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".

### Conexão por SSH

Se você fizer a clonagem com o SSH, precisará gerar chaves SSH em cada computador usado para efetuar push ou pull do {% data variables.product.product_name %}. Para obter mais informações, confira "[Clonando com URLs SSH](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)" e "[Gerando uma chave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

## Próximas etapas

O Git e o {% data variables.product.prodname_dotcom %} já estão configurados. Agora você pode optar por criar um repositório onde possa colocar seus projetos. Salvar seu código em um repositório permite que você faça backup do código e compartilhe-o em todo o mundo. 

* {% data reusables.getting-started.create-a-repository %}.

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
