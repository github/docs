---
title: Reutilizar uma atividade
intro: 'You can reuse existing assignments in more than one classroom, including classrooms in a different organization.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can reuse assignments from a classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Reutilizar uma atividade
---

## Sobre a reutilização de recomendações

Você pode reutilizar uma atividade individual ou em grupo existente em qualquer outra sala de aula à qual você tenha acesso, incluindo as salas de aula em uma organização diferente. You can also reuse multiple assignments at once from a classroom. Se você optar por reutilizar uma atividade, {% data variables.product.prodname_classroom %} irá copiar a atividade para a sala de aula que você escolher. Se a atividade usar um repositório de modelo e você escolher reutilizá-lo em uma sala de aula de uma organização diferente, {% data variables.product.prodname_classroom %} criará uma cópia do repositório e seu conteúdo na organização de destino.

A atribuição copiada inclui detalhes da atividade, como nome, repositório de origem, teste de autoavaliação e editor preferido. Você pode editar a atividade depois de ela ter sido copiada para realizar alterações. Você não pode fazer alterações no editor preferido.

## Reutilizando uma atividade

1. Efetue o login em {% data variables.product.prodname_classroom_with_url %}.
1. Acesse a sala de aula com a atividade que você deseja reutilizar.

   ![Sala de aula na lista de salas de aula de uma organização](/assets/images/help/classroom/click-classroom-in-list.png)

1. Na lista de atividades, clique na atividade que você deseja reutilizar.

   ![Atividade na lista de atividades para uma sala de aula](/assets/images/help/classroom/click-assignment-in-list.png)

1. Selecione o menu suspenso **{% octicon "pencil" aria-label="The pencil icon" %} Editar** na parte superior direita da página e, em seguida, clique em **{% octicon "sync" aria-label="The sync icon" %} Reutilizar a atribuição**.

   ![Botão de reutilizar a atividade](/assets/images/help/classroom/reuse-assignment-button.png)

1. In the "Reuse assignment" modal, use the **Choose an organization** dropdown menu to select the organization you want the assignment to be in.  Em seguida, use o menu suspenso **Escolher uma sala de aula** para selecionar a sala de aula dentro da organização para a qual você deseja copiar a atividade.

   ![Reutilizar o modo de atividade](/assets/images/help/classroom/reuse-assignment-modal.png)

1. Clique em **Criar atividade**.
1. A atividade foi copiada para a sala de aula selecionada e uma mensagem de confirmação foi exibida. Se você optar por reutilizar uma atividaed com um repositório do modelo, o processo de cópia poderá levar alguns minutos para ser concluído, e talvez você precise atualizar a página para ver a mensagem concluída.

   ![Mensagem concluída para atribuição reutilizada](/assets/images/help/classroom/reuse-assignment-completed-message.png)

## Reusing multiple assignments from a classroom

1. Efetue o login em {% data variables.product.prodname_classroom_with_url %}.
2. To the right of a classroom's name, select the {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} drop-down menu, then click **Reuse assignment**.

   ![Screenshot of classroom overview page with dropdown emphasized](/assets/images/help/classroom/classroom-reuse-assignment-modal.png)

3. In the "Reuse assignments" modal, use the **Choose an organization** dropdown menu to select the organization you want the assignments to be in.  Then use the **Choose a classroom** dropdown menu to select the classroom within that organization that you want to copy the assignments to.

   ![Screenshot of reuse assignments modal](/assets/images/help/classroom/reuse-multiple-assignments-modal.png)

4. To the left of each assignment, select the assignment you want to reuse.

   ![Screenshot of multiple selected assignments](/assets/images/help/classroom/multiple-assignments-selected.png)

5. Click **Create assignments**.
6. The assignments are copied to the selected classroom. If you chose to reuse an assignment with a template repository, the copying process may take a few minutes to complete.
