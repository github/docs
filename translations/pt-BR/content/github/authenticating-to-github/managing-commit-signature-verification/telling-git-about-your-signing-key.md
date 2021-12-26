---
title: Informar ao Git sobre a chave de assinatura
intro: 'Para assinar commits localmente, você precisa informar ao Git que há uma chave GPG ou X.509 que você gostaria de usar.'
redirect_from:
  - /articles/telling-git-about-your-gpg-key/
  - /articles/telling-git-about-your-signing-key
  - /github/authenticating-to-github/telling-git-about-your-signing-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

{% mac %}

### Informar ao Git sobre a chave GPG

Se você estiver usando uma chave GPG que corresponda à identidade do committer (autor do commit) e ao endereço de e-mail associado à conta do {% data variables.product.product_name %}, você poderá começar a assinar commits e tags.

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

{% data reusables.gpg.x-509-key %}

{% endmac %}

{% windows %}

### Informar ao Git sobre a chave GPG

Se você estiver usando uma chave GPG que corresponda à identidade do committer (autor do commit) e ao endereço de e-mail associado à conta do {% data variables.product.product_name %}, você poderá começar a assinar commits e tags.

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

{% note %}

**Observação:** as chaves X.509 não são compatíveis com Linux. Embora seja possível configurar gpgsm para fornecer serviços de assinatura e criptografia, não há suporte para isso no {% data variables.product.product_name %}. Para obter mais informações, consulte o tópico [gpgsm](https://www.gnupg.org/documentation/manuals/gnupg/Invoking-GPGSM.html) na documentação do GnuPG.

{% endnote %}

### Informar ao Git sobre a chave GPG

Se você estiver usando uma chave GPG que corresponda à identidade do committer (autor do commit) e ao endereço de e-mail associado à conta do {% data variables.product.product_name %}, você poderá começar a assinar commits e tags.

{% note %}

Se você não tiver uma chave GPG que corresponda à identidade do committer, precisará associar um e-mail a uma chave existente. Para obter mais informações, consulte "[Associar e-mail à chave GPG](/articles/associating-an-email-with-your-gpg-key)".

{% endnote %}

Se você tiver várias chaves GPG, precisará informar ao Git qual deve ser usada.

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
{% data reusables.gpg.copy-gpg-key-id %}
{% data reusables.gpg.paste-gpg-key-id %}
1. Para adicionar a sua chave GPG ao seu perfil bash, execute o seguinte comando:
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
  {% note %}

  **Observação:** se você não tiver `.bash_profile`, este comando adicionará sua chave GPG a `.profile`.

  {% endnote %}

{% endlinux %}

### Leia mais

- "[Verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
- "[Gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)"
- "[Usar um endereço de e-mail verificado na chave GPG](/articles/using-a-verified-email-address-in-your-gpg-key)"
- "[Adicionar uma nova chave GPG à sua conta do GitHub](/articles/adding-a-new-gpg-key-to-your-github-account)"
- "[Associar um e-mail à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
- "[Assinar commits](/articles/signing-commits)"
- "[Assinar tags](/articles/signing-tags)"
