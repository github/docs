---
title: Alterando o tipo de máquina para seu codespace
shortTitle: Change the machine type
intro: Você pode alterar o tipo de máquina que está executando o seu codespace para você usar os recursos apropriados para o trabalho que está fazendo.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: f3669e7addefbf46c3f2af978e746e0c3e634bb0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110759'
---
## Sobre os tipos de máquina

{% note %}

**Observação:** só será possível selecionar ou alterar o tipo de computador se você for membro de uma organização que use o {% data variables.product.prodname_github_codespaces %} e esteja criando um codespace em um repositório pertencente a essa organização.

{% endnote %}

{% data reusables.codespaces.codespaces-machine-types %} Você pode escolher um tipo de computador alternativo ao criar um codespace ou a qualquer momento, depois de criar um codespace. 

Para obter informações sobre como escolher um tipo de computador ao criar um codespace, confira "[Como criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)". Para obter informações sobre como alterar o tipo de computador no {% data variables.product.prodname_vscode %}, confira "[Como usar o {% data variables.product.prodname_codespaces %} no {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code#changing-the-machine-type-in-visual-studio-code)".

## Como alterar o tipo de computador no {% data variables.product.prodname_dotcom %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   O tipo de máquina atual para cada um dos seus codespaces é exibido.

   ![Lista "Seus codespaces"](/assets/images/help/codespaces/your-codespaces-list.png)

1. Clique nas reticências ( **…** ) à direita do codespace que deseja modificar.
1. Clique em **Alterar tipo de computador**.

   ![Opção de menu '"Alterar tipo de máquina"](/assets/images/help/codespaces/change-machine-type-menu-option.png)

1. Se vários tipos de máquina estiverem disponíveis para seu codespace, escolha o tipo de máquina que você deseja usar.

   ![Caixa de diálogo que mostra tipos de máquinas disponíveis para escolher](/assets/images/help/codespaces/change-machine-type-choice.png)

   {% note %}

   **Observação**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

2. Clique em **Atualizar codespace**. 

   A alteração entrará em vigor na próxima vez que seu codespace for reiniciado.

## Forçar uma atualização imediata de um codespace em execução no momento

Se você mudar o tipo de máquina de um codespace que você está usando atualmente desejar aplicar as alterações imediatamente, você poderá forçar a reinicialização do codespace.

1. Na parte inferior esquerda da janela do codespace, clique em **{% data variables.product.prodname_codespaces %}** . 

   ![Clique em "{% data variables.product.prodname_codespaces %}"](/assets/images/help/codespaces/codespaces-button.png)

1. Nas opções exibidas na parte superior da página, selecione **Codespaces: Interromper o Codespace Atual**.

   ![Opção "Suspender codespace atual"](/assets/images/help/codespaces/suspend-current-codespace.png)

1. Depois que o codespace for interrompido, clique em **Reiniciar codespace**.

   ![Clique em "Retomar"](/assets/images/help/codespaces/resume-codespace.png)
