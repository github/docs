---
title: Sobre a verificação de assinatura de commit
intro: 'Ao usar GPG ou S/MIME, você pode assinar tags e commits localmente. Esses commits ou tags são marcados como verificados no {% data variables.product.product_name %} para que outras pessoas tenham a segurança de que as alterações vêm de uma fonte confiável.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures/
  - /articles/about-gpg/
  - /articles/about-commit-signature-verification
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

### Sobre a verificação de assinatura de commit

Você pode assinar commits e tags localmente para que outras pessoas possam verificar se seu trabalho tem origem em uma fonte confiável. Se um commit ou uma tag tiver uma assinatura GPG ou S/MIME que possa ser verificada de maneira criptográfica, o {% data variables.product.product_name %} marcará o commit ou tag como verificado.

![Commit verificado](/assets/images/help/commits/verified-commit.png)

Se um commit ou uma tag tiver uma assinatura que não possa ser verificada, o {% data variables.product.product_name %} marcará o commit ou a tag como não verificado(a).

Os administradores do repositório podem impor a assinatura de commit obrigatória em um branch para bloquear todos os commits que não estejam assinados e verificados. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-signed-commits)".

Você pode conferir o status de verificação de seus commits ou tags assinados no {% data variables.product.product_name %} e ver por que as assinaturas de commit podem não ter sido verificadas. Para obter mais informações, consulte "[Conferir o status de verificação da assinatura de commit ou tag](/articles/checking-your-commit-and-tag-signature-verification-status)".

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.product_name %} usará automaticamente o GPG para assinar os commits que você fizer usando a interface web do {% data variables.product.product_name %} exceto quando você faz combinação por squash e mescla um pull request do qual você não é o autor. Opcionalmente, você pode escolher que {% data variables.product.product_name %} assine os commits que você fizer em {% data variables.product.prodname_codespaces %}. Commits assinados por {% data variables.product.product_name %} terão um status de verificado em {% data variables.product.product_name %}. É possível verificar a assinatura localmente usando a chave pública disponível em https://github.com/web-flow.gpg. Para obter mais informações sobre como habilitar a verificação de GPG para os seus códigos, consulte "[Gerenciar a verificação de GPG para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)".
{% endif %}

### Verificação da assinatura de commit GPG

É possível usar GPG para assinar commits com uma chave GPG que você mesmo gera.

O {% data variables.product.product_name %} usa bibliotecas OpenPGP para confirmar se seus commits e tags assinados localmente são criptograficamente verificáveis em relação a uma chave pública que você adicionou à sua conta do {% data variables.product.product_name %}.

Para assinar commits usando GPG e para que esses commits sejam verificados no {% data variables.product.product_name %}, siga estas etapas:

1. [Verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)
2. [Gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)
3. [Adicionar uma nova chave GPG à sua conta do GitHub](/articles/adding-a-new-gpg-key-to-your-github-account)
4. [Informar o Git sobre a chave de assinatura](/articles/telling-git-about-your-signing-key)
5. [Assinar commits](/articles/signing-commits)
6. [Assinar tags](/articles/signing-tags)

### Verificação da assinatura de commit S/MIME

Você pode usar S/MIME para assinar commits com uma chave X.509 emitida pela organização.

O {% data variables.product.product_name %} usa [o pacote Debian ca-certificates](https://packages.debian.org/hu/jessie/ca-certificates), a mesma loja confiável usada pelos navegadores Mozilla, para confirmar se seus commits e tags localmente assinados são criptograficamente verificáveis em uma chave pública em um certificado raiz confiável.

{% data reusables.gpg.smime-git-version %}

Para assinar commits usando S/MIME e para que esses commits sejam verificados no {% data variables.product.product_name %}, siga estas etapas:

1. [Informar o Git sobre a chave de assinatura](/articles/telling-git-about-your-signing-key)
2. [Assinar commits](/articles/signing-commits)
3. [Assinar tags](/articles/signing-tags)

Não é preciso fazer upload da chave pública no {% data variables.product.product_name %}.

{% if currentVersion == "free-pro-team@latest" %}
### Verificação de assinatura para bots

Organizações e {% data variables.product.prodname_github_app %}s que exigem assinatura de commit podem usar bots para assinar commits. Se um commit ou uma tag tiver uma assinatura de bot que possa ser verificada de maneira criptográfica, o {% data variables.product.product_name %} marcará o commit ou tag como verificado.
A verificação de assinatura para bots só funcionará se a solicitação for verificada e autenticada como

{% data variables.product.prodname_github_app %} ou bot e não contiver informações de autor personalizadas, informações do committer personalizadas e nenhuma informação de assinatura personalizada, como a API de Commits.
{% endif %}

### Leia mais

- "[Assinar commits](/articles/signing-commits)"
- "[Assinar tags](/articles/signing-tags)"
- "[Solucionar verificação da assinatura de commit](/articles/troubleshooting-commit-signature-verification)"
