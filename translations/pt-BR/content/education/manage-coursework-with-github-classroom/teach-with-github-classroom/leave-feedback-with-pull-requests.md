---
title: Deixar feedback com pull requests
intro: É possível deixar feedback para seus alunos em um pull request especial dentro do repositório para cada atividade.
permissions: People with read permissions to a repository can leave feedback in a pull request for the repository.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/leaving-feedback-in-github
  - /education/manage-coursework-with-github-classroom/leave-feedback-with-pull-requests
shortTitle: Pull requests
ms.openlocfilehash: 6315904aaaa02acc66249039e99a402b455a8871
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095681'
---
## Sobre solicitações de feedback de pull requests para atividades

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

Quando você habilitar a solicitação de pull para comentários em uma tarefa, o {% data variables.product.prodname_classroom %} criará uma solicitação de pull intitulada **Comentários** no repositório de tarefas para cada aluno ou equipe. O pull request mostra automaticamente a cada commit que um aluno fez push para o branch padrão do repositório de atividade.

## Pré-requisitos

Para criar e acessar o pull request de feedback, você deve habilitar o pull request de feedback ao criar a atividade. {% data reusables.classroom.for-more-information-about-assignment-creation %}

## Dar feedback em um pull request para uma atividade

{% data reusables.classroom.sign-into-github-classroom %}
1. Na lista de salas de aula, clique na sala de aula com a atividade que você deseja revisar.
  ![Sala de aula na lista de salas de aula de uma organização](/assets/images/help/classroom/click-classroom-in-list.png) {% data reusables.classroom.click-assignment-in-list %}
1. À direita do envio, clique em **Revisar**.
  ![Botão Revisar para a tarefa na lista de envios de uma tarefa](/assets/images/help/classroom/assignments-click-review-button.png)
1. Revise a solicitação de pull. Para obter mais informações, confira "[Como adicionar um comentário a uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)".

## Leitura adicional

- "[Integrar o {% data variables.product.prodname_classroom %} a um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)"
