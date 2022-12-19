---
title: Usar um endereço de e-mail verificado na chave GPG
intro: 'Ao verificar uma assinatura, o {% data variables.product.product_name %} confere se o endereço de e-mail do committer ou tagger corresponde a um endereço de e-mail das identidades da chave GPG e se é um endereço de e-mail verificado na conta do usuário. Isso garante que a chave pertence a você e que você é o criador do commit ou da tag.'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/using-a-verified-email-address-in-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Use verified email in GPG key
ms.openlocfilehash: bb9f4fbbfdb70ba55870ab068a33c566791fbaf2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083566'
---
{% ifversion fpt or ghec %} Caso precise verificar seu endereço de email do GitHub, confira "[Como verificar seu endereço de email](/articles/verifying-your-email-address/)". {% endif %}Caso precise atualizar ou adicionar um endereço de email à sua chave GPG, confira "[Como associar um email à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)".

Commits e tags podem conter vários endereços de e-mail. Nos commits, há o autor — a pessoa que escreveu o código — e o committer — a pessoa que adicionou o commit à árvore. Durante a assinatura de um commit com o Git, seja durante uma mesclagem, um cherry-pick ou um `git commit` normal, o endereço de email do autor do commit será seu, mesmo que o endereço de email do autor não seja. As tags são mais simples: o endereço de e-mail do tagger é sempre o do usuário que criou a tag.

Caso precise alterar seu endereço de email para commit ou tag, confira "[Como definir seu endereço de email de commit](/articles/setting-your-commit-email-address/)".

## Leitura adicional

- "[Sobre a verificação da assinatura de commit](/articles/about-commit-signature-verification)"
