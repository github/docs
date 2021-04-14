---
title: Informar ao Git sobre a chave de assinatura
intro: 'Para assinar commits localmente, você precisa informar ao Git que há uma chave GPG ou X.509 que você gostaria de usar.'
redirect_from:
  - /articles/telling-git-about-your-gpg-key/
  - /articles/telling-git-about-your-signing-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - identidade
  - gerenciamento de acesso
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
1. If you aren't using the GPG suite, run the following command in the `zsh` shell to add the GPG key to your `.zshrc` file, if it exists, or your `.zprofile` file:
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  Alternatively, if you use the `bash` shell, run this command:
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
1. To add your GPG key to your bash profile, run the following command:
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
