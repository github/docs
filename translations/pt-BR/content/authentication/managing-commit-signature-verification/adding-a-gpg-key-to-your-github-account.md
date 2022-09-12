---
title: Como adicionar uma chave GPG a uma conta do GitHub
intro: 'Para configurar a sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para usar sua chave GPG nova (ou existente), você também precisará da chave para a sua conta.'
redirect_from:
  - /articles/adding-a-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
  - /articles/updating-an-expired-gpg-key
  - /authentication/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a GPG key
ms.openlocfilehash: db832d4e02ea5f19303b3178fb669967238e661b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369334'
---
## Sobre a adição de chaves GPG à sua conta

Para assinar confirmações associadas à sua conta no {% data variables.product.product_name %}, adicione uma chave GPG pública à sua conta pessoal. Antes de realizar a adição, verifique se há chaves existentes. Se não houver, gere e copie uma nova chave. Para saber mais, confira "[Verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)" e "[Gerar uma chave GPG](/articles/generating-a-new-gpg-key)".

É possível adicionar várias chaves públicas à sua conta no {% data variables.product.product_name %}. As confirmações assinadas por qualquer uma das chaves privadas correspondentes serão mostradas conforme verificado. Se você remover uma chave pública, todas as confirmações assinadas pela chave privada correspondente não serão mais exibidas como verificadas.

{% ifversion upload-expired-or-revoked-gpg-key %} Para verificar o maior número possível de confirmações, adicione chaves expiradas e revogadas. Se a chave atender a todos os outros requisitos de verificação, as confirmações assinadas anteriormente por qualquer uma das chaves privadas correspondentes serão mostradas como verificadas e indicarão que a chave de assinatura expirou ou foi revogada.

![Uma confirmação verificada com uma chave que expirou](/assets/images/help/settings/gpg-verified-with-expired-key.png) {% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

Ao verificar uma assinatura, o {% data variables.product.product_name %} a extrai e tenta analisar a ID de chave associada. Em seguida, essa ID de chave é correspondida com as chaves adicionadas ao {% data variables.product.product_name %}. Não será possível verificar suas assinaturas até que uma chave GPG seja adicionada ao {% data variables.product.product_name %}.

## Adicionar uma chave GPG

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Clique em **Nova chave GPG**.
   ![Botão Chave GPG](/assets/images/help/settings/gpg-add-gpg-key.png)
4. No campo "Chave", cole a chave GPG que você copiou ao [gerar a chave GPG](/articles/generating-a-new-gpg-key).
   ![O campo de chave](/assets/images/help/settings/gpg-key-paste.png)
5. Clique em **Adicionar chave GPG**.
   ![O botão Adicionar chave](/assets/images/help/settings/gpg-add-key.png)
6. Para confirmar a ação, insira sua senha do {% data variables.product.product_name %}.

{% ifversion upload-expired-or-revoked-gpg-key %} {% else %}
## Atualizar uma chave GPG expirada

Ao verificar uma assinatura, o {% data variables.product.product_name %} confere se a chave foi revogada ou está expirada. Caso a chave de assinatura tenha sido revogada ou esteja expirada, o {% data variables.product.product_name %} não poderá verificar as assinaturas.

Se sua chave tiver expirado, [atualize a expiração](https://www.gnupg.org/gph/en/manual.html#AEN329), exporte a nova chave, exclua a chave expirada da conta no {% data variables.product.product_name %} e adicione a nova chave à conta, conforme descrito acima. As tags e os commits anteriores serão exibidos como verificados, desde que a chave atenda a todos os outros requisitos de verificação.

Se a chave foi revogada, use a chave principal ou outra chave que não tenha sido revogada para assinar os commits.

Se a chave for inválida, você não usar outra chave válida no conjunto de chaves e ainda gerar uma nova chave GPG com um novo conjunto de credenciais, os commits feitos com a chave revogada ou expirada continuarão sendo exibidos como não verificados. Além disso, as novas credenciais não poderão assinar novamente ou verificar marcas e confirmações antigas.
{% endif %}

## Leitura adicional

- "[Como verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
- "[Como gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)"
- "[Como informar sua chave de assinatura ao Git](/articles/telling-git-about-your-signing-key)"
- "[Como associar um email à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
- "[Como assinar commits e tags usando chaves GPG](/articles/signing-commits-and-tags-using-gpg)"
- "[Sobre a verificação da assinatura de commit](/articles/about-commit-signature-verification)"
