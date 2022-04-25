---
title: Reutilizar uma atividade
intro: 'Você pode reutilizar uma atividade existente em mais de uma sala, incluindo salas de aula em uma organização diferente.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can reuse assignments from a classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Reutilizar uma atividade
---

## Sobre a reutilização de recomendações

Você pode reutilizar uma atividade individual ou em grupo existente em qualquer outra sala de aula à qual você tenha acesso, incluindo as salas de aula em uma organização diferente. Se você optar por reutilizar uma atividade, {% data variables.product.prodname_classroom %} irá copiar a atividade para a sala de aula que você escolher. Se a atividade usar um repositório de modelo e você escolher reutilizá-lo em uma sala de aula de uma organização diferente, {% data variables.product.prodname_classroom %} criará uma cópia do repositório e seu conteúdo na organização de destino.

A atribuição copiada inclui detalhes da atividade, como nome, repositório de origem, teste de autoavaliação e editor preferido. You can edit the assignment after it has been copied to make changes. You cannot make changes to the preferred editor.

## Reusing an assignment

1. Efetue o login em {% data variables.product.prodname_classroom_with_url %}.
1. Navigate to the classroom that has the assignment that you want to reuse.

   ![Sala de aula na lista de salas de aula de uma organização](/assets/images/help/classroom/click-classroom-in-list.png)

1. In the list of assignments, click the assignment you want to reuse.

   ![Atividade na lista de atividades para uma sala de aula](/assets/images/help/classroom/click-assignment-in-list.png)

1. Select the **{% octicon "pencil" aria-label="The pencil icon" %} Edit** dropdown menu in the top right of the page, then click **{% octicon "sync" aria-label="The sync icon" %} Reuse assignment**.

   ![Reuse assignment button](/assets/images/help/classroom/reuse-assignment-button.png)

1. In "Reuse assignment" modal, use the **Choose an organization** dropdown menu to select the organization you want the assignment to be in.  Then use the **Choose a classroom** dropdown menu to select the classroom within that organization that you want to copy the assignment to.

   ![Reuse assignment modal](/assets/images/help/classroom/reuse-assignment-modal.png)

1. Click **Create assignment**.
1. The assignment is copied to the selected classroom, and a confirmation message is shown. If you chose to reuse an assignment with a template repository, the copying process may take a few minutes to complete, and you may need to refresh the page to see the completed message.

   ![Completed message for reused assignment](/assets/images/help/classroom/reuse-assignment-completed-message.png)
