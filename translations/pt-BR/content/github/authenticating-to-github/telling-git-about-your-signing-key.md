---
title: Informar ao Git sobre a chave de assinatura
intro: 'Para assinar os commits localmente, você precisa informar ao Git que existe um GPG{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 4" %} ou chave X.509{% endif %} que deseja usar.'
redirect_from:
  - /articles/telling-git-about-your-gpg-key/
  - /articles/telling-git-about-your-signing-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
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
1. Se você não estiver usando o conjunto de GPG, cole o texto abaixo para adicionar a chave GPG ao seu perfil de bash:
  ```shell
  $ test -r ~/.bash_profile && echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile
  $ echo 'export GPG_TTY=$(tty)' >> ~/.profile
  ```
  {% note %}

  **Observação:** se você não tiver `.bash_profile`, este comando adicionará sua chave GPG a `.profile`.

  {% endnote %}

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
1. Para adicionar a chave GPG ao seu perfil de bash, cole o texto abaixo:
  ```shell
  $ test -r ~/.bash_profile && echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile
  $ echo 'export GPG_TTY=$(tty)' >> ~/.profile
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
