---
title: Adicionar uma nova chave GPG à sua conta do GitHub
intro: Para configurar a sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para usar sua chave GPG nova (ou existente), você também precisará da chave para a sua conta.
redirect_from:
- /articles/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Add a new GPG key
ms.openlocfilehash: 73d58f3194e2ba37b38ce8e4b80de6b78888bbff
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145083607"
---
Antes de adicionar uma nova chave GPG à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, você deverá ter:
- [Verificado quanto à existência de chaves GPG](/articles/checking-for-existing-gpg-keys)
- [Nova chave GPG gerada e copiada](/articles/generating-a-new-gpg-key)

Você pode adicionar várias chaves públicas à sua conta do GitHub. As confirmações assinadas por qualquer uma das chaves privadas correspondentes serão mostradas conforme verificado. Se você remover uma chave pública, todas as confirmações assinadas pela chave privada correspondente não serão mais exibidas como verificadas.

{% data reusables.gpg.supported-gpg-key-algorithms %}

Ao verificarmos uma assinatura, extraímos a assinatura e tentamos analisar a ID da chave. Correspondemos a ID da chave com as chaves carregadas no {% data variables.product.product_name %}. Enquanto não for feito upload da chave GPG no {% data variables.product.product_name %}, não podemos verificar suas assinaturas.

## <a name="adding-a-gpg-key"></a>Adicionar uma chave GPG

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Clique em **Nova chave GPG**.
   ![Botão Chave GPG](/assets/images/help/settings/gpg-add-gpg-key.png)
4. No campo "Chave", cole a chave GPG que você copiou ao [gerar a chave GPG](/articles/generating-a-new-gpg-key).
   ![O campo de chave](/assets/images/help/settings/gpg-key-paste.png)
5. Clique em **Adicionar chave GPG**.
   ![O botão Adicionar chave](/assets/images/help/settings/gpg-add-key.png)
6. Para confirmar a ação, insira sua senha do {% data variables.product.product_name %}.

## <a name="further-reading"></a>Leitura adicional

* "[Como verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
* "[Como gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)"
* "[Como informar sua chave de assinatura ao Git](/articles/telling-git-about-your-signing-key)"
* "[Como associar um email à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Como assinar commits e tags usando chaves GPG](/articles/signing-commits-and-tags-using-gpg)"
