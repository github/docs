---
title: Lembrar o nome de usuário ou e-mail do GitHub
intro: Are you signing in to {% data variables.product.product_location %} for the first time in a while? If so, welcome back! If you can't remember the username for your personal account on {% data variables.product.product_name %}, you can try these methods for remembering it.
redirect_from:
- /articles/oh-noes-i-ve-forgotten-my-username-email
- /articles/oh-noes-i-ve-forgotten-my-username-or-email
- /articles/remembering-your-github-username-or-email
- /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Find your username or email
ms.openlocfilehash: 79cb3ba65390e384272540bd32a1ec9e598517f4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145084050"
---
{% mac %}

## <a name="-data-variablesproductprodname_desktop--users"></a>Usuários do {% data variables.product.prodname_desktop %}

1. No menu **GitHub Desktop**, clique em **Preferências**.
2. Na janela Preferences (Preferências), faça o seguinte:
    - Para ver o nome de usuário do {% data variables.product.product_name %}, clique em **Contas**.
    - Para ver seu email do Git, clique em **Git**. Observe que esse email não tem a garantia de ser [seu email principal do {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

## <a name="-data-variablesproductprodname_desktop--users"></a>Usuários do {% data variables.product.prodname_desktop %}

1. No menu **Arquivo**, clique em **Opções**.
2. Na janela Options (Opções), faça o seguinte:
    - Para ver o nome de usuário do {% data variables.product.product_name %}, clique em **Contas**.
    - Para ver seu email do Git, clique em **Git**. Observe que esse email não tem a garantia de ser [seu email principal do {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).
  
{% endwindows %}

## <a name="finding-your-username-in-your-username-configuration"></a>Como localizar seu nome de usuário na configuração de `user.name`

Durante a configuração, você pode ter [definido seu nome de usuário no Git](/github/getting-started-with-github/setting-your-username-in-git). Em caso afirmativo, você poderá revisar o valor dessa configuração:

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

## <a name="finding-your-username-in-the-url-of-remote-repositories"></a>Encontrar o nome de usuário na URL de repositórios remote

Se você tiver cópias locais de repositórios pessoais criados ou bifurcados, poderá consultar a URL do repositório remote.

{% tip %}

**Dica**: esse método só funcionará se você tiver um repositório original ou um fork próprio do repositório de outra pessoa. Se você clonar o repositório de outra pessoa, o nome de usuário da pessoa será exibido, não o seu. De forma similar, os repositórios da organização exibirão o nome da organização, não um usuário específico na URL remoto.

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# Change directories to the initialized Git repository
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

Seu nome de usuário é o que vem imediatamente após o `https://{% data variables.command_line.backticks %}/`.

{% ifversion fpt or ghec %}
## <a name="further-reading"></a>Leitura adicional

- "[Como verificar seu endereço de email](/articles/verifying-your-email-address)" {% endif %}
