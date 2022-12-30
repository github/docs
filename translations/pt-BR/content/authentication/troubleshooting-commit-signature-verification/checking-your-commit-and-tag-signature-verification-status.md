---
title: Confirmar o status de verificação da assinatura do commit e da tag
intro: 'Você pode conferir o status da verificação da assinatura do commit e da tag no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status
  - /articles/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/checking-your-commit-and-tag-signature-verification-status
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Check verification status
ms.openlocfilehash: 726d292ca2b91b54c9002dc393e6e21f76648889
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '145083571'
---
## <a name="checking-your-commit-signature-verification-status"></a>Confirmar o status de verificação da assinatura do commit

1. No {% data variables.product.product_name %}, navegue até sua pull request.
{% data reusables.repositories.review-pr-commits %}
3. Ao lado do hash de confirmação abreviado do commit, há uma caixa que mostra se a sua assinatura de confirmação é verificada{% ifversion fpt or ghec %}, parcialmente verificada,{% endif %} ou não verificada.
![Commit assinado](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. Para exibir informações mais detalhadas sobre a assinatura de commit, clique em **Verificado**{% ifversion fpt or ghec %}, **Parcialmente verificado**,{% endif %} ou **Não verificado**.
![Commit assinado verificado](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

## <a name="checking-your-tag-signature-verification-status"></a>Confirmar o status de verificação da assinatura da tag

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
2. Na parte superior da página Versões, clique em **Tags**.
![Página Tags](/assets/images/help/releases/tags-list.png)
3. Ao lado da descrição da sua tag, há uma caixa que mostra se a assinatura da sua tag foi verificada{% ifversion fpt or ghec %}, parcialmente verificada,{% endif %} ou não verificada.
![assinatura de tag verificada](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. Para exibir informações mais detalhadas sobre a assinatura de tag, clique em **Verificada**{% ifversion fpt or ghec %}, **Parcialmente verificada**,{% endif %} ou **Não verificada**. 
![Tag assinada verificada](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

## <a name="further-reading"></a>Leitura adicional

- "[Sobre a verificação da assinatura de commit](/articles/about-commit-signature-verification)"
- "[Como assinar commits](/articles/signing-commits)"
- "[Como assinar tags](/articles/signing-tags)"
