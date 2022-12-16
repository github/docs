---
title: Editar uma atribuição
intro: Você pode editar as atribuições existentes em seu curso.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can edit assignments for that classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Edit an assignment
ms.openlocfilehash: 65814debd3fb5bf64ea83b04bef6349b7755b77f
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179839'
---
## Sobre a edição de atribuições

Depois de criar uma atribuição, você pode editar muitos aspectos da atribuição para melhor atender às suas necessidades e às de seus alunos. Lembre-se de que você não pode alterar o tipo de atribuição (individual ou grupo) ou o IDE (ambiente de desenvolvimento integrado online) após a criação da atribuição. Para obter mais informações, confira "[Criar uma tarefa individual](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)" e "[Criar uma tarefa em grupo](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)".

## Editar uma atribuição existente

1. Efetue o login em {% data variables.product.prodname_classroom_with_url %}.
1. Acesse uma sala de aula.

    ![Captura de tela de um bloco de sala de aula no GitHub Education com o nome da sala de aula enfatizado](/assets/images/help/classroom/classroom-card.png)

1. Na guia **Atribuições** do {% octicon "repo" aria-label="The repo icon" %}, ao lado da atribuição que você deseja editar, clique em {% octicon "pencil" aria-label="The pencil icon" %}.

    {% note %}
    
    **Nota:** Você também pode editar uma atribuição na página da atribuição. Para acessar a página da atribuição, na guia **Atribuições**, clique no nome da atribuição.
    
    {% endnote %}

    ![Captura de tela de uma atribuição com ênfase no ícone de edição](/assets/images/help/classroom/edit-assignment.png)

1. Em "Título da atribuição", clique no campo de texto, exclua o texto existente e digite o novo título de atribuição.

    ![Captura de tela do editor de atribuições com ênfase no campo de texto "Título da atribuição"](/assets/images/help/classroom/edit-assignment-title.png)

1. Opcionalmente, para editar o prefixo padrão para o repositório de atribuição de cada aluno, clique em {% octicon "pencil" aria-label="The pencil icon" %}.

    {% note %}

    **Nota:** Editar o título de uma atribuição ou o prefixo do repositório padrão não alterará o nome dos repositórios de atribuição existentes.

    {% endnote %}

    ![Captura de tela do editor de atribuições com ênfase no ícone de edição para prefixos do repositório do aluno](/assets/images/help/classroom/edit-assignment-repository-prefix-icon.png)

    Em seguida, digite o novo prefixo em "Prefixo de repositório personalizado".

    ![Captura de tela do editor de atribuições com ênfase no campo de texto "Prefixo de repositório personalizado"](/assets/images/help/classroom/edit-assignment-repository-prefix.png)

1. Em "Prazo (opcional)", clique no campo texto e, em seguida, use o seletor de data para reatribuir um prazo. O novo prazo não pode estar no passado, e reatribuir um prazo atualizará o prazo para todos os alunos.

    ![Captura de tela do editor de atribuições com ênfase no campo "Prazo (opcional)"](/assets/images/help/classroom/edit-assignment-deadline.png)

1. Para alterar o status de uma atribuição, selecione o menu suspenso **Status da atribuição** e clique em **Ativo** ou **Inativo**.

    {% note %}
  
    **Nota:** Atribuições inativas não podem ser aceitas pelos alunos. Você deve alterar um status de atribuição para inativo depois que nenhum aluno mais aceitar uma atribuição ou o prazo de atribuição tiver passado.
  
    {% endnote %}

    ![Captura de tela do editor de atribuições com ênfase no menu suspenso "Status da atribuição"](/assets/images/help/classroom/edit-assignment-status-dropdown.png)

1.  Em "Visibilidade do repositório" selecione uma visibilidade. Se você usar repositórios privados, apenas o aluno ou a equipe poderá ver o feedback que você fornecer.

    {% note %}
    
    **Nota:** Alterar a visibilidade dos repositórios de atribuição não alterará retroativamente a visibilidade dos repositórios de atribuição existentes.
    
    {% endnote %}

    ![Captura de tela do editor de atribuições com ênfase nos botões de opção "Visibilidade do repositório"](/assets/images/help/classroom/edit-assignment-repository-visibility.png)

1.  Opcionalmente, marque ou desmarque **Permitir aos alunos o acesso de administrador no repositório**. Para obter mais informações sobre permissões de administrador, confira "[Sobre os repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)" e "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

    {% note %}

    **Nota:** Conceder ou revogar o acesso de administrador do aluno após a criação de uma tarefa não alterará retroativamente as permissões para repositórios de atribuição existentes.

    {% endnote %}

    ![Captura de tela do editor de atribuições com ênfase na caixa de seleção "Conceder aos alunos acesso de administrador ao repositório"](/assets/images/help/classroom/edit-assignment-admin-access.png)

1. Para configurar ou alterar o repositório de modelos para sua tarefa, na seção "Adicionar um repositório de modelos para fornecer código inicial aos alunos", selecione o menu suspenso **Selecionar um repositório**.
       - Para escolher um repositório de modelos, comece digitando o nome do repositório no campo de texto e clique no repositório nos resultados da pesquisa.
       - Para remover um repositório de modelos, exclua qualquer texto no campo de texto.

    {% note %}

    **Observação**: Por padrão, uma atribuição criará um repositório vazio para cada aluno na lista da sala de aula.

    {% endnote %}

    ![Captura de tela do editor de atribuições com ênfase na lista suspensa "Selecionar um repositório"](/assets/images/help/classroom/edit-assignment-template-repository.png)

1. Para adicionar um novo teste de classificação automática, na seção "Adicionar testes de classificação automática", selecione o menu suspenso **Adicionar teste** e clique em um método de classificação nas opções exibidas. Para obter mais informações, confira "[Usar a avaliação automática](/education/manage-coursework-with-github-classroom/use-autograding)".
    
    ![Captura de tela do editor de atribuições com ênfase na lista suspensa "Adicionar teste"](/assets/images/help/classroom/edit-assignment-add-test.png)

    Além disso, você pode editar ou excluir testes de classificação automática existentes com {% octicon "pencil" aria-label="The pencil icon" %} ou {% octicon "trash" aria-label="The trash icon" %}.

    ![Captura de tela do editor de atribuições com ênfase nos ícones de teste de edição e exclusão](/assets/images/help/classroom/edit-assignment-edit-test.png)

1.  Para ativar ou desativar as solicitações de pull de comentários, selecione ou desmarque **Habilitar solicitações de pull de comentários**.

    {% note %}
    
    **Nota:** Habilitar ou desabilitar solicitações de pull de comentários para uma atribuição não criará ou excluirá solicitações de pull de comentários para repositórios de atribuição existentes.
    
    {% endnote %}

    ![Captura de tela do editor de atribuições com ênfase na caixa de seleção "Habilitar solicitações de pull de comentários"](/assets/images/help/classroom/edit-assignment-feedback.png)

{% data reusables.classroom.update-assignment %}

## Leitura adicional

- "[Criar uma atribuição individual](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)"
- "[Criar uma atribuição em grupo](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)"
