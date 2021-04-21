---
title: Gerenciar salas de aula
intro: Você pode criar e gerenciar uma sala de aula para cada curso que você der usando {% data variables.product.prodname_classroom %}.
permissions: Os proprietários da organização podem gerenciar uma sala de aula para uma organização.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
---

### Sobre as salas de aula

{% data reusables.classroom.about-classrooms %}

![Sala de aula](/assets/images/help/classroom/classroom-hero.png)

### Sobre o gerenciamento de salas de aula

{% data variables.product.prodname_classroom %} usa contas da organização em {% data variables.product.product_name %} para gerenciar permissões, administração e segurança para cada sala de aula que você criar. Cada organização pode ter várias salas de aula.

Depois de criar uma sala de aula, {% data variables.product.prodname_classroom %} solicitará que você convide assistentes de ensino (ETI) e administradores para a sala de aula. Cada sala de aula pode ter um ou mais administradores. Os administradores podem ser professores, TAs ou qualquer outro administrador do curso o qual que você gostaria que tivesse controle das suas salas de aula em {% data variables.product.prodname_classroom %}.

Convide TAs e administradores para a sua sala de aula, convidando as contas de usuário em {% data variables.product.product_name %} para a sua organização como proprietários e compartilhando a URL da sua sala de aula. Os proprietários da organização podem administrar qualquer sala de aula da organização. Para obter mais informações, consulte "[Níveis de permissão para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization)" e "[Convidar usuários a participar da sua organização](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)".

Ao terminar de usar uma sala de aula, você pode arquivar a sala de aula e consultar a sala de aula, lista, e recomendações posteriormente, ou você pode excluir a sala de aula se não precisar mais dela.

### Sobre as listas de salas de aula

Cada sala de aula tem uma lista. Uma lista é uma lista de identificadores para os alunos que participam do seu curso.

A primeira vez que você compartilha a URL de uma atividade com um estudante, o aluno precisa efetuar o login em {% data variables.product.product_name %} com uma conta de usuário para vincular a conta do usuário a um identificador da sala de aula. Depois que o aluno vincular uma conta de usuário, você poderá ver a conta de usuário associada na lista. Você também pode ver quando o aluno aceita ou envia uma atividade.

![Lista de salas de aula](/assets/images/help/classroom/roster-hero.png)

### Pré-requisitos

Você precisa ter uma conta de organização em {% data variables.product.product_name %} para gerenciar as salas de aula em {% data variables.product.prodname_classroom %}. Para obter mais informações, consulte "[Tipos de contas de {% data variables.product.company_short %}](/github/getting-started-with-github/types-of-github-accounts#organization-accounts)" e "[Criar uma nova organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

Você deve autorizar o aplicativo OAuth {% data variables.product.prodname_classroom %} para sua organização gerenciar salas de aula para sua conta da organização. Para obter mais informações, consulte "[Autorizar aplicativos OAuth](/github/authenticating-to-github/authorizing-oauth-apps)".

### Criar uma sala de aula

{% data reusables.classroom.sign-into-github-classroom %}
1. Clique em **Nova sala de aula**. ![Botão "Nova sala de aula"](/assets/images/help/classroom/click-new-classroom-button.png)
{% data reusables.classroom.guide-create-new-classroom %}

Depois de criar uma sala de aula, você pode começar a criar atividades para os alunos. Para obter mais informações, consulte "[Criar uma atividade individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" ou "[Criar uma atividade em grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

### Criando uma lista para sua sala de aula

Você pode criar uma lista de alunos que participam do seu curso.

Se o seu curso já tem uma lista, você pode atualizar os alunos na lista ou excluir a lista. Para mais informações consulte "[Adicionar um aluno à lista de participantes para sua sala de aula](#adding-students-to-the-roster-for-your-classroom)" ou "[Excluir uma lista para uma sala de aula](#deleting-a-roster-for-a-classroom)."

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. Para conectar {% data variables.product.prodname_classroom %} ao seu LMS e importar uma lista, clique em {% octicon "mortar-board" aria-label="The mortar board icon" %} **Importar de um sistema de gerenciamento de aprendizagem** e siga as instruções. Para obter mais informações, consulte "[Conectar um sistema de gerenciamento de aprendizagem a {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)". ![Botão "Importar de um sistema de gerenciamento de aprendizagem"](/assets/images/help/classroom/click-import-from-a-learning-management-system-button.png)
1. Para criar uma lista manualmente, digite os identificadores do aluno. Opcionalmente, clique em **Enviar um arquivo CSV ou de texto** para fazer upload de um arquivo que contém os identificadores. ![Campo de texto para digitar identificadores de aluno e botão "Fazer upload de um arquivo CSV ou texto"](/assets/images/help/classroom/type-or-upload-student-identifiers.png)
1. Clique **Criar lista**. ![Botão "Criar lista"](/assets/images/help/classroom/click-create-roster-button.png)

### Adicionar alunos à lista de participantes para sua sala de aula

A sua sala de aula precisa ter uma lista existente para adicionar alunos à lista. Para obter mais informações sobre como criar uma lista, consulte "[Criar uma lista de participantes para sua sala de aula](#creating-a-roster-for-your-classroom)."

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. À direita do "Lista de sala de aula", clique em **Atualizar alunos**. ![Botão "Atualizar os alunos" à direita de "lista de salas de aula" destacando-se acima da lista de alunos](/assets/images/help/classroom/click-update-students-button.png)
1. Siga as instruções para adicionar alunos à lista.
    - Para importar os alunos de um LMS, clique em **Sincronizar a partir de um sistema de gerenciamento de aprendizagem**. Para obter mais informações sobre a importação de uma lista de participantes de um LMS, consulte "[Conectar um sistema de gerenciamento de aprendizagem a {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)".
    - Para adicionar alunos manualmente, em "Adicionar alunos manualmente", clique em **Enviar um arquivo CSV ou de texto** ou digite os identificadores para os alunos e, em seguida, clique em **Adicionar entradas da lista**. ![Modal para escolher o método de adicionar os alunos à sala de aula](/assets/images/help/classroom/classroom-add-students-to-your-roster.png)

### Renomear uma sala de aula

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. Em "Nome da sala de aula", digite um novo nome para a sala de aula. ![Campo de texto em "Nome da sala de aula" para digitar o nome da sala de aula](/assets/images/help/classroom/settings-type-classroom-name.png)
1. Clique em **Renomear sala de aula**. ![Botão "Renomear sala de aula"](/assets/images/help/classroom/settings-click-rename-classroom-button.png)

### Arquivar ou desarquivar uma sala de aula

Você pode arquivar uma sala de aula que você não usa mais em {% data variables.product.prodname_classroom %}. Ao arquivar uma sala de aula, não é possível criar novas atividades ou editar as atividades existentes para a sala de aula. Os alunos não podem aceitar convites para atividades em salas de aula arquivadas.

{% data reusables.classroom.sign-into-github-classroom %}
1. À direita do nome da sala de aula, selecione o menu suspenso {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e, em seguida, clique em **Arquivar**. ![Menu suspenso do ícone do kebab horizontal e item do menu "Arquivo"](/assets/images/help/classroom/use-drop-down-then-click-archive.png)
1. Para desarquivar uma sala de aula, à direita do nome de uma sala de aula, selecione o menu suspenso {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e, em seguida, clique em **Desarquivar**. ![Menu suspenso do ícone do kebab horizontal e item do menu "Desarquivar"](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

### Excluir uma lista de participantes para uma sala de aula

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. Em "Excluir esta lista", clique em **Excluir lista**. ![Botão "Excluir lista" em "Excluir esta lista" na aba "Alunos" para uma sala de aula](/assets/images/help/classroom/students-click-delete-roster-button.png)
1. Leia os avisos e, em seguida, clique em **Excluir lista**. ![Botão "Excluir lista" em "Excluir esta lista" na aba "Alunos" para uma sala de aula](/assets/images/help/classroom/students-click-delete-roster-button-in-modal.png)

### Excluir uma sala de aula

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. À direita de "Excluir essa sala de aula", clique em **Excluir sala de aula**. ![Botão "Excluir repositório"](/assets/images/help/classroom/click-delete-classroom-button.png)
1. **Leia os avisos**.
1. Para verificar se você está excluindo a sala de aula correta, digite o nome da sala de aula que você deseja excluir. ![Modal para excluir uma sala de aula com avisos e campo de texto para o nome da sala de aula](/assets/images/help/classroom/delete-classroom-modal-with-warning.png)
1. Clique em **Excluir sala de aula**. ![Botão "Excluir sala de aula"](/assets/images/help/classroom/delete-classroom-click-delete-classroom-button.png)
