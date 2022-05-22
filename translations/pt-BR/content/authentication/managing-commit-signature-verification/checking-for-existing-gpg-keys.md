---
title: Verificar se há chaves GPG
intro: 'Antes de gerar uma chave GPG, você pode verificar se há outras chaves chave GPG.'
redirect_from:
  - /articles/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/managing-commit-signature-verification/checking-for-existing-gpg-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Chaves GPG existentes
---

{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**Observação:** O GPG não vem instalado por padrão no macOS ou Windows. Para instalar ferramentas de linha de comando GPG, consulte a [página de download da GnuPG](https://www.gnupg.org/download/).

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
3. Verifique a saída do comando para ver se você tem um par de chaves GPG.
    * Se não houver pares de chaves GPG ou se você não quiser usar as que estiverem disponíveis para assinatura de commits e tags, [gere outra chave GPG](/articles/generating-a-new-gpg-key).
    * Se houver um par de chaves GPG existente e você quiser usá-lo para assinar commits e tags, você poderá exibir a chave pública usando o comando a seguir, substituindo o ID da chave GPG que você gostaria de usar. Neste exemplo, o ID da chave GPG é `3AA5C34371567BD2`:
      ```shell
      $ gpg --armor --export <em>3AA5C34371567BD2</em>
      # Prints the GPG key ID, in ASCII armor format
      ```
      Você pode [adicionar a sua chave de GPG à sua conta do GitHub](/articles/adding-a-new-gpg-key-to-your-github-account).

## Leia mais

* "[Gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)"
* "[Adicionar uma nova chave GPG à sua conta do GitHub](/articles/adding-a-new-gpg-key-to-your-github-account)"
* "[Avisar o Git sobre sua chave de assinatura](/articles/telling-git-about-your-signing-key)"
* "[Associar um e-mail à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Assinar commits](/articles/signing-commits)"
* "[Assinar tags](/articles/signing-tags)"
