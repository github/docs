---
title: Verificar se há chaves GPG
intro: 'Antes de gerar uma chave GPG, você pode verificar se há outras chaves chave GPG.'
redirect_from:
  - /articles/checking-for-existing-gpg-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**Observação:** a GPG não vem instalada por padrão no OS X nem no Windows. Para instalar ferramentas de linha de comando GPG, consulte a [página de download da GnuPG](https://www.gnupg.org/download/).

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.gpg.list-keys-with-note %}
3. Verifique a saída do comando para ver se você tem um par de chaves GPG.
    * Se não houver pares de chaves GPG ou se você não quiser usar as que estiverem disponíveis para assinatura de commits e tags, [gere outra chave GPG](/articles/generating-a-new-gpg-key).
    * Se houver um par de chaves GPG e você quiser usá-lo para assinar commits e tags, [adicione a chave GPG à sua conta do GitHub](/articles/adding-a-new-gpg-key-to-your-github-account).

### Leia mais

* "[Gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)"
* "[Adicionar uma nova chave GPG à sua conta do GitHub](/articles/adding-a-new-gpg-key-to-your-github-account)"
* "[Avisar o Git sobre sua chave de assinatura](/articles/telling-git-about-your-signing-key)"
* "[Associar um e-mail à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Assinar commits](/articles/signing-commits)"
* "[Assinar tags](/articles/signing-tags)"
