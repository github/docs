---
title: Lembrar o nome de usuário ou e-mail do GitHub
intro: 'Faz tempo que você não faz login no {% data variables.product.product_location %}? Se sim, bem-vindo de volta! Se você não lembrar do nome de usuário para sua conta pessoal em {% data variables.product.product_name %}, siga estas etapas para recuperá-lo.'
redirect_from:
  - /articles/oh-noes-i-ve-forgotten-my-username-email
  - /articles/oh-noes-i-ve-forgotten-my-username-or-email
  - /articles/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Find your username or email
ms.openlocfilehash: e65ba973a5ca7865aa642ce5d64f8efa0a996742
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145164643'
---
{% mac %}

## Usuários do {% data variables.product.prodname_desktop %}

1. No menu **GitHub Desktop**, clique em **Preferências**.
2. Na janela Preferences (Preferências), faça o seguinte:
    - Para ver o nome de usuário do {% data variables.product.product_name %}, clique em **Contas**.
    - Para ver seu email do Git, clique em **Git**. Observe que esse email não tem a garantia de ser [seu email principal do {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

## Usuários do {% data variables.product.prodname_desktop %}

1. No menu **Arquivo**, clique em **Opções**.
2. Na janela Options (Opções), faça o seguinte:
    - Para ver o nome de usuário do {% data variables.product.product_name %}, clique em **Contas**.
    - Para ver seu email do Git, clique em **Git**. Observe que esse email não tem a garantia de ser [seu email principal do {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).
  
{% endwindows %}

## Como localizar seu nome de usuário na configuração de `user.name`

Durante a configuração, você pode ter [definido seu nome de usuário no Git](/github/getting-started-with-github/setting-your-username-in-git). Em caso afirmativo, você poderá revisar o valor dessa configuração:

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

## Encontrar o nome de usuário na URL de repositórios remote

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
## Leitura adicional

- "[Como verificar seu endereço de email](/articles/verifying-your-email-address)" {% endif %}
