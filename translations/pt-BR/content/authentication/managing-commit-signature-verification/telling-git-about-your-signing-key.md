---
title: Informar ao Git sobre a chave de assinatura
intro: 'Para assinar confirmações localmente, você precisa informar ao Git que há uma chave GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} ou X.509 que você gostaria de usar.'
redirect_from:
  - /articles/telling-git-about-your-gpg-key
  - /articles/telling-git-about-your-signing-key
  - /github/authenticating-to-github/telling-git-about-your-signing-key
  - /github/authenticating-to-github/managing-commit-signature-verification/telling-git-about-your-signing-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Tell Git your signing key
ms.openlocfilehash: d70911bdf3ff5de93537f7c9acb1374a4f2c90e3
ms.sourcegitcommit: aded2711e14a0c2473049d3d7e05c82a74e4c634
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179946'
---
{% mac %}

## Informar ao Git sobre a chave GPG

Se você estiver usando uma chave GPG que corresponde à sua identidade do autor do submissão e ao endereço de e-mail verificado associado à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, você poderá começar a assinar commits e tags.

{% note %}

Se você não tiver uma chave GPG que corresponda à identidade do committer, precisará associar um e-mail a uma chave existente. Para obter mais informações, confira "[Como associar um email à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Se você tiver várias chaves GPG, precisará informar ao Git qual deve ser usada.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. Se você não estiver usando o pacote GPG, execute o seguinte comando no shell do `zsh` para adicionar a chave GPG ao arquivo `.zshrc`, se houver, ou o arquivo `.zprofile`:
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  Como alternativa, se você usar o shell do `bash`, execute este comando:
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
1. Opcionalmente, para solicitar que você insira um PIN ou uma senha quando necessário, instale `pinentry-mac`. Por exemplo, usando o [Homebrew](https://brew.sh/):
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

{% endmac %}

{% windows %}

## Informar ao Git sobre a chave GPG

Se você estiver usando uma chave GPG que corresponde à sua identidade do autor do submissão e ao endereço de e-mail verificado associado à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, você poderá começar a assinar commits e tags.

{% note %}

Se você não tiver uma chave GPG que corresponda à identidade do committer, precisará associar um e-mail a uma chave existente. Para obter mais informações, confira "[Como associar um email à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Se você tiver várias chaves GPG, precisará informar ao Git qual deve ser usada.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}

{% endwindows %}

{% linux %}

## Informar ao Git sobre a chave GPG

Se você estiver usando uma chave GPG que corresponde à sua identidade do autor do submissão e ao endereço de e-mail verificado associado à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, você poderá começar a assinar commits e tags.

{% note %}

Se você não tiver uma chave GPG que corresponda à identidade do committer, precisará associar um e-mail a uma chave existente. Para obter mais informações, confira "[Como associar um email à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Se você tiver várias chaves GPG, precisará informar ao Git qual deve ser usada.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. Para adicionar a chave GPG ao arquivo de inicialização `.bashrc`, execute o seguinte comando:
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```
{% endlinux %} {% ifversion ssh-commit-verification %}

## Contando ao Git sobre sua chave SSH

Você pode usar uma chave SSH existente para assinar confirmações e marcas ou gerar uma nova especificamente para assinatura. Para obter mais informações, confira "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

{% data reusables.gpg.ssh-git-version %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-ssh-signing %} {% data reusables.gpg.paste-ssh-public-key %}

{% endif %}

{% data reusables.gpg.x-509-key %}
## Leitura adicional

- "[Como adicionar uma nova chave SSH à sua conta do GitHub](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)".
- "[Como assinar commits](/articles/signing-commits)"
- "[Como assinar tags](/articles/signing-tags)"
