---
title: Usar um endereço de e-mail verificado na chave GPG
intro: 'Ao verificar uma assinatura, o {% data variables.product.product_name %} confere se o endereço de e-mail do committer ou tagger corresponde a um endereço de e-mail das identidades da chave GPG e se é um endereço de e-mail verificado na conta do usuário. Isso garante que a chave pertence a você e que você é o criador do commit ou da tag.'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
Se precisar verificar seu endereço de e-mail do GitHub, consulte "[Verificar seu endereço de e-mail](/articles/verifying-your-email-address/)".
{% endif %}Se precisar atualizar ou adicionar um endereço de e-mail à sua chave GPG, consulte "[Acessar um e-mail com sua chave GPG](/articles/associating-an-email-with-your-gpg-key)".

Commits e tags podem conter vários endereços de e-mail. Nos commits, há o autor — a pessoa que escreveu o código — e o committer — a pessoa que adicionou o commit à árvore. Ao assinar um commit com Git, seja durante um `git commit` normal, cherry-pick ou merge, o endereço de e-mail do committer será o seu, mesmo que o endereço de e-mail do autor não seja. As tags são mais simples: o endereço de e-mail do tagger é sempre o do usuário que criou a tag.

Caso você precise alterar o endereço de e-mail do committer ou tagger, consulte "[Configurar endereço de e-mail do commit](/articles/setting-your-commit-email-address/)".

### Leia mais

- "[Sobre a verificação de assinatura de commit](/articles/about-commit-signature-verification)"
