---
title: Informar ao Git sobre a chave de assinatura
intro: 'Para assinar commits localmente, você precisa informar ao Git que há uma chave GPG ou X.509 que você gostaria de usar.'
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
shortTitle: Informe ao Git sua chave de assinatura
---

{% mac %}

## Informar ao Git sobre a chave GPG

Se você estiver usando uma chave GPG que corresponde à sua identidade do autor do submissão e ao endereço de e-mail verificado associado à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, você poderá começar a assinar commits e tags.

{% note %}

Se você não tiver uma chave GPG que corresponda à identidade do committer, precisará associar um e-mail a uma chave existente. Para obter mais informações, consulte "[Associar e-mail à chave GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Se você tiver várias chaves GPG, precisará informar ao Git qual deve ser usada.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. Se você não estiver usando o pacote GPG, execute o comando a seguir no shell do `zsh` para adicionar a chave GPG ao seu arquivo `.zshrc`, se ele existir, ou seu arquivo `.zprofile`:
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  Como alternativa, se você usar o shall de `bash`, execute este comando:
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
1. Opcionalmente, para solicitar que você digite um PIN ou senha quando necessário, instale `pinentry-mac`. Por exemplo, usando [Homebrew](https://brew.sh/):
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

{% data reusables.gpg.x-509-key %}

{% endmac %}

{% windows %}

## Informar ao Git sobre a chave GPG

Se você estiver usando uma chave GPG que corresponde à sua identidade do autor do submissão e ao endereço de e-mail verificado associado à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, você poderá começar a assinar commits e tags.

{% note %}

Se você não tiver uma chave GPG que corresponda à identidade do committer, precisará associar um e-mail a uma chave existente. Para obter mais informações, consulte "[Associar e-mail à chave GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Se você tiver várias chaves GPG, precisará informar ao Git qual deve ser usada.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}

{% data reusables.gpg.x-509-key %}

{% endwindows %}

{% linux %}

## Informar ao Git sobre a chave GPG

Se você estiver usando uma chave GPG que corresponde à sua identidade do autor do submissão e ao endereço de e-mail verificado associado à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, você poderá começar a assinar commits e tags.

{% note %}

Se você não tiver uma chave GPG que corresponda à identidade do committer, precisará associar um e-mail a uma chave existente. Para obter mais informações, consulte "[Associar e-mail à chave GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Se você tiver várias chaves GPG, precisará informar ao Git qual deve ser usada.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. Para adicionar a sua chave de GPG ao seu arquivo de inicialização `.bashrc`, execute o seguinte comando:
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```

{% endlinux %}

## Leia mais

- "[Verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
- "[Gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)"
- "[Usar um endereço de e-mail verificado na chave GPG](/articles/using-a-verified-email-address-in-your-gpg-key)"
- "[Adicionar uma nova chave GPG à sua conta do GitHub](/articles/adding-a-new-gpg-key-to-your-github-account)"
- "[Associar um e-mail à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
- "[Assinar commits](/articles/signing-commits)"
- "[Assinar tags](/articles/signing-tags)"
