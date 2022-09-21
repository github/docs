---
title: Reverter um commit
intro: Você pode reverter um commit específico para remover suas alterações do seu branch.
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit
versions:
  fpt: '*'
ms.openlocfilehash: f6cf6f120beff99bdb1c8bfd7868bb157e68d5dd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084066'
---
Ao reverter para um commit anterior, a reversão também passa a ser um commit. Além disso, o commit original fica no histórico do repositório.

{% tip %}

**Dica:** quando você reverte vários commits, é melhor fazer a reversão do mais recente para o mais antigo. Reverter commits em outra ordem pode gerar conflitos de merge.

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![A opção Reverter acima da exibição de comparação](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![A opção Reverter acima da exibição de comparação](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
