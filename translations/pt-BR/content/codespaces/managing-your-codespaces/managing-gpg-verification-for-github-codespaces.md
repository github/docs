---
title: Como gerenciar a verificação GPG para o GitHub Codespaces
intro: 'Você pode permitir que {% data variables.product.company_short %} use o GPG automaticamente para assinar os commits que você faz nos seus codespaces para que outras pessoas possam confiar que as alterações vêm de uma fonte de confiança.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
redirect_from:
  - /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
  - /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
  - /codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
ms.openlocfilehash: ff83eba1720a2841747536ec04bfc0b3db055669
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167098'
---
Depois que você habilitar a verificação do GPG, {% data variables.product.company_short %} assinará automaticamente os commits que você fizer em {% data variables.product.prodname_github_codespaces %}, e os commits terão um status de verificado em {% data variables.product.product_name %}. Por padrão, a verificação do GPG está desabilitada para os codespaces que você criar. Você pode optar por permitir a verificação do GPG para todos os repositórios ou repositórios específicos. Habilite apenas a verificação do GPG para repositórios nos quais você confia. Para obter mais informações sobre os commits assinados do {% data variables.product.product_name %}, confira "[Sobre a verificação de assinatura de commit](/github/authenticating-to-github/about-commit-signature-verification)".

{% data reusables.codespaces.gpg-in-active-codespaces %}

{% note %}

**Observação:** se você tiver vinculado um repositório dotfiles ao {% data variables.product.prodname_github_codespaces %}, a configuração do Git em seus dotfiles poderá entrar em conflito com a configuração que {% data variables.product.prodname_github_codespaces %} requer para assinar commits. Para obter mais informações, confira "[Como solucionar problemas da verificação GPG do {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces)".

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Em "Verificação do GPG, selecione a configuração que deseja para verificação do GPG.
  ![Botões de opção usados para gerenciar a verificação de GPG](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. Se você escolheu "Repositórios selecionados", selecione o menu suspenso e clique em um repositório para o qual deseja habilitar a verificação do GPG. Repita esse procedimento para todos os repositórios para os quais você deseja habilitar a verificação do GPG.
  ![Menu suspenso "Repositórios selecionados"](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


Depois de habilitar a verificação GPG para {% data variables.product.prodname_github_codespaces %}, todos os commits são assinados por padrão em seus codespaces.
