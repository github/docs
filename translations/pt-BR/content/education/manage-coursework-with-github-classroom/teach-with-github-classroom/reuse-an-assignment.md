---
title: Reutilizar uma atribuição
intro: 'Você pode reutilizar tarefas existentes em mais de uma sala de aula, incluindo salas de aula em uma organização diferente.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can reuse assignments from a classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Reuse an assignment
ms.openlocfilehash: 4c1c9048847affef95d5c904b188e68d2c183b43
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066911'
---
## Sobre a reutilização de atribuições

Você pode reutilizar uma tarefa individual ou em grupo existente em qualquer outra sala de aula à qual tenha acesso, incluindo salas de aula em uma organização diferente. Você também pode reutilizar várias tarefas de uma sala de aula de uma só vez. Se você optar por reutilizar uma tarefa, {% data variables.product.prodname_classroom %} copiará a tarefa para a sala de aula que você escolher. Se a tarefa usar um repositório de modelos e você optar por reutilizá-lo em uma sala de aula de uma organização diferente, {% data variables.product.prodname_classroom %} criará uma cópia do repositório e seu conteúdo na organização de destino.

A atribuição copiada inclui detalhes da atribuição, como nome, repositório de origem, teste de avaliação automática e editor preferencial. Você pode editar a atribuição depois que ela for copiada para fazer alterações. Não é possível fazer alterações no editor preferencial. 

## Reutilizar uma atribuição

1. Efetue o login em {% data variables.product.prodname_classroom_with_url %}.
1. Navegue até a sala de aula que tem a atribuição que você deseja reutilizar.

   ![Sala de aula na lista de salas de aula de uma organização](/assets/images/help/classroom/click-classroom-in-list.png)

1. Na lista de atividades, clique na atividade que você deseja reutilizar.

   ![Atividade na lista de atividades para uma sala de aula](/assets/images/help/classroom/click-assignment-in-list.png)

1. Selecione o menu suspenso **{% octicon "pencil" aria-label="The pencil icon" %} Editar** no canto superior direito da página e clique em **{% octicon "sync" aria-label="The sync icon" %} Reutilizar atribuição**.

   ![Botão Reutilizar atribuição](/assets/images/help/classroom/reuse-assignment-button.png)

1. No modal "Reutilizar atribuição", use o menu suspenso **Escolher uma organização** para selecionar a organização na qual você deseja que a atribuição esteja.  Em seguida, use o menu suspenso **Escolher uma sala de aula** para selecionar a sala de aula dessa organização para a qual você deseja copiar a tarefa.

   ![Reutilizar modal de atribuição](/assets/images/help/classroom/reuse-assignment-modal.png)

1. Clique em **Criar atribuição**.
1. A tarefa é copiada para a sala de aula selecionada e uma mensagem de confirmação é exibida. Se você optar por reutilizar uma atribuição com um repositório de modelos, o processo de cópia poderá levar alguns minutos para ser concluído e talvez seja necessário atualizar a página para ver a mensagem concluída.

   ![Mensagem Concluída para atribuição reutilizada](/assets/images/help/classroom/reuse-assignment-completed-message.png)

## Como reutilizar várias atribuições de uma sala de aula

1. Efetue o login em {% data variables.product.prodname_classroom_with_url %}.
2. À direita do nome da sala de aula, selecione o menu suspenso {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e clique em **Reutilizar atribuição**.
   
   ![Captura de tela da página de visão geral da sala de aula com menu suspenso enfatizado](/assets/images/help/classroom/classroom-reuse-assignment-modal.png)

3. No modal "Reutilizar atribuições", use o menu suspenso **Escolher uma organização** para selecionar a organização na qual você deseja que as atribuições estejam.  Em seguida, use o menu suspenso **Escolher uma sala de aula** para selecionar a sala de aula dessa organização para a qual você deseja atribuir as tarefas.
   
   ![Captura de tela do modal de reutilização de atribuições](/assets/images/help/classroom/reuse-multiple-assignments-modal.png)

4. À esquerda de cada atribuição, selecione aquela que você deseja reutilizar.

   ![Captura de tela de várias atribuições selecionadas](/assets/images/help/classroom/multiple-assignments-selected.png)

5. Clique em **Criar atribuições**.
6. As atribuições são copiadas para a sala de aula selecionada. Se você optar por reutilizar uma atribuição com um repositório de modelos, o processo de cópia poderá levar alguns minutos.
