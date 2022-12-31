---
title: Gerenciar salas de aula
intro: 'Você pode criar e gerenciar uma sala de aula para cada curso que você der usando {% data variables.product.prodname_classroom %}.'
permissions: 'Organization owners who are admins for a classroom can manage the classroom for an organization. {% data reusables.classroom.classroom-admins-link %}'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
  - /education/manage-coursework-with-github-classroom/manage-classrooms
ms.openlocfilehash: 0c492f26092e7e9ad47c6237a55de1cf1c90e65f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145093837'
---
## Sobre as salas de aula

{% data reusables.classroom.about-classrooms %}

![Sala de aula](/assets/images/help/classroom/classroom-hero.png)

## Sobre o gerenciamento de salas de aula

{% data variables.product.prodname_classroom %} usa contas da organização em {% data variables.product.product_name %} para gerenciar permissões, administração e segurança para cada sala de aula que você criar. Cada organização pode ter várias salas de aula.

Depois de criar uma sala de aula, {% data variables.product.prodname_classroom %} solicitará que você convide assistentes de ensino (ETI) e administradores para a sala de aula. Cada sala de aula pode ter um ou mais administradores. Os administradores podem ser professores, TAs ou qualquer outro administrador do curso o qual que você gostaria que tivesse controle das suas salas de aula em {% data variables.product.prodname_classroom %}.

Convide TAs e administradores para a sua sala de aula, convidando as contas pessoais em {% data variables.product.product_name %} para a sua organização como proprietários e compartilhando a URL da sua sala de aula. Os proprietários da organização podem administrar qualquer sala de aula da organização. Para obter mais informações, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)" e "[Como convidar usuários para ingressar na sua organização](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)".

Ao terminar de usar uma sala de aula, você pode arquivar a sala de aula e consultar a sala de aula, lista, e recomendações posteriormente, ou você pode excluir a sala de aula se não precisar mais dela. 

{% data reusables.classroom.reuse-assignment-link %}

## Sobre as listas de salas de aula

Cada sala de aula tem uma lista. Uma lista é uma lista de identificadores para os alunos que participam do seu curso.

A primeira vez que você compartilha a URL de uma atividade com um estudante, o aluno precisa efetuar o login em {% data variables.product.product_name %} com uma conta pessoal para vincular a conta pessoal a um identificador da sala de aula. Depois que o aluno vincular uma conta pessoal, você poderá ver a conta pessoal associada na lista. Você também pode ver quando o aluno aceita ou envia uma atividade.

![Lista de salas de aula](/assets/images/help/classroom/roster-hero.png)

## Pré-requisitos

Você precisa ter uma conta de organização em {% data variables.product.product_name %} para gerenciar as salas de aula em {% data variables.product.prodname_classroom %}. Para obter mais informações, confira "[Tipos de contas do {% data variables.product.company_short %}](/github/getting-started-with-github/types-of-github-accounts#organization-accounts)" e "[Como criar uma organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

Você deve autorizar o aplicativo OAuth {% data variables.product.prodname_classroom %} para sua organização gerenciar salas de aula para sua conta da organização. Para obter mais informações, confira "[Como autorizar aplicativos OAuth](/github/authenticating-to-github/authorizing-oauth-apps)".

## Criar uma sala de aula

{% data reusables.classroom.sign-into-github-classroom %}
1. Clique em **Nova sala de aula**.
  ![Botão "Nova sala de aula"](/assets/images/help/classroom/click-new-classroom-button.png) {% data reusables.classroom.guide-create-new-classroom %}

Depois de criar uma sala de aula, você pode começar a criar atividades para os alunos. Para obter mais informações, confira "[Usar o Git e a tarefa inicial do {% data variables.product.company_short %}](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment)", "[Criar uma tarefa individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" ou "[Criar uma tarefa em grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)" ou "[Reutilização uma atribuição](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)."

## Criando uma lista para sua sala de aula

Você pode criar uma lista de alunos que participam do seu curso.

Se o seu curso já tem uma lista, você pode atualizar os alunos na lista ou excluir a lista. Para obter mais informações, confira "[Como adicionar um aluno à lista de participantes da sua sala de aula](#adding-students-to-the-roster-for-your-classroom)" ou "[Como excluir uma lista de participantes de uma sala de aula](#deleting-a-roster-for-a-classroom)".

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Para conectar o {% data variables.product.prodname_classroom %} ao seu LMS e importar uma lista de participantes, clique em {% octicon "mortar-board" aria-label="The mortar board icon" %} botão **Importar de um sistema de gerenciamento de aprendizagem** e siga as instruções. Para obter mais informações, confira "[Conectar um sistema de gerenciamento de aprendizagem ao {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)".
    ![Botão "Importar de um sistema de gerenciamento de aprendizagem"](/assets/images/help/classroom/click-import-from-a-learning-management-system-button.png)
1. Forneça os identificadores dos alunos para a sua lista.
     - Para importar uma lista de participantes carregando um arquivo que contém identificadores de alunos, clique em **Carregar um CSV ou um arquivo de texto**.
     - Para criar uma lista manualmente, digite os identificadores do aluno.
       ![Campo de texto usado para digitar identificadores de alunos e o botão "Carregar um CSV ou um arquivo de texto"](/assets/images/help/classroom/type-or-upload-student-identifiers.png)
1. Clique em **Criar lista de participantes**.
  ![Botão "Criar lista de participantes"](/assets/images/help/classroom/click-create-roster-button.png)

## Adicionar alunos à lista de participantes para sua sala de aula

A sua sala de aula precisa ter uma lista existente para adicionar alunos à lista. Para obter mais informações sobre como criar uma lista de participantes, confira "[Como criar uma lista de participantes para sua sala de aula](#creating-a-roster-for-your-classroom)".

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. À direita de "Lista de participantes da sala de aula", clique em **Atualizar alunos**.
  ![Botão "Atualizar alunos" à direita do título "Lista de participantes da sala de aula" acima da lista de alunos](/assets/images/help/classroom/click-update-students-button.png)
1. Siga as instruções para adicionar alunos à lista.
    - Para importar alunos de um LMS, clique em **Sincronizar de um sistema de gerenciamento de aprendizagem**. Para obter mais informações sobre como importar uma lista de participantes de um LMS, confira "[Conectar um sistema de gerenciamento de aprendizagem ao {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)".
    - Para adicionar alunos manualmente, em "Adicionar alunos manualmente", clique em **Carregar um CSV ou um arquivo de texto** ou digite os identificadores dos alunos e clique em **Adicionar entradas da lista de participantes**.
      ![Caixa de diálogo modal usada para escolher o método de adicionar os alunos à sala de aula](/assets/images/help/classroom/classroom-add-students-to-your-roster.png)

## Renomear uma sala de aula

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. Em "Nome da sala de aula", digite um novo nome para a sala de aula.
  ![Campo de texto em "Nome da sala de aula" para digitar o nome da sala de aula](/assets/images/help/classroom/settings-type-classroom-name.png)
1. Clique em **Renomear sala de aula**.
  ![Botão "Renomear sala de aula"](/assets/images/help/classroom/settings-click-rename-classroom-button.png)

## Arquivar ou desarquivar uma sala de aula

Você pode arquivar uma sala de aula que você não usa mais em {% data variables.product.prodname_classroom %}. Ao arquivar uma sala de aula, não é possível criar novas atividades ou editar as atividades existentes para a sala de aula. Os alunos não podem aceitar convites para atividades em salas de aula arquivadas.

{% data reusables.classroom.sign-into-github-classroom %}
1. À direita do nome da sala de aula, selecione o menu suspenso {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e clique em **Arquivar**.
  ![Menu suspenso do ícone de kebab horizontal e item de menu "Arquivo"](/assets/images/help/classroom/use-drop-down-then-click-archive.png)
1. Para desarquivar uma sala de aula, à direita do nome de uma sala de aula, selecione o menu suspenso do {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e clique em **Desarquivar**.
  ![Menu suspenso do ícone de kebab horizontal e item de menu "Desarquivar"](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

## Excluir uma lista de participantes para uma sala de aula

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Em "Excluir esta lista de participantes", clique em **Excluir lista de participantes**.
  ![Botão "Excluir lista de participantes" em "Excluir esta lista de participantes" na guia "Alunos" de uma sala de aula](/assets/images/help/classroom/students-click-delete-roster-button.png)
1. Leia os avisos e clique em **Excluir lista de participantes**.
  ![Botão "Excluir lista de participantes" em "Excluir esta lista de participantes" na guia "Alunos" de uma sala de aula](/assets/images/help/classroom/students-click-delete-roster-button-in-modal.png)

## Excluir uma sala de aula

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. À direita de "Excluir esta sala de aula", clique em **Excluir sala de aula**.
  ![Botão "Excluir repositório"](/assets/images/help/classroom/click-delete-classroom-button.png)
1. **Leia os avisos**.
1. Para verificar se você está excluindo a sala de aula correta, digite o nome da sala de aula que você deseja excluir.
  ![Caixa de diálogo modal usada para excluir uma sala de aula com avisos e campo de texto para o nome da sala de aula](/assets/images/help/classroom/delete-classroom-modal-with-warning.png)
1. Clique em **Excluir sala de aula**.
  ![Botão "Excluir sala de aula"](/assets/images/help/classroom/delete-classroom-click-delete-classroom-button.png)
