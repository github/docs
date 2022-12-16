---
title: Criar uma atribuição em grupo
intro: Você pode criar uma atribuição colaborativa para equipes de alunos que participam do seu curso.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage group assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/create-group-assignments
  - /education/manage-coursework-with-github-classroom/create-a-group-assignment
ms.openlocfilehash: 71c5f5eaf97ba58e25921c1e2be6fc638550dfa8
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179757'
---
## Sobre atribuições em grupo

{% data reusables.classroom.assignments-group-definition %} Os alunos podem trabalhar juntos em uma tarefa em grupo em um repositório compartilhado, como uma equipe de desenvolvedores profissionais.

Quando um aluno aceita uma atividade em grupo, o aluno poderá criar uma nova equipe ou juntar-se a uma equipe existente. {% data variables.product.prodname_classroom %} salva as equipes para uma atividade como um conjunto. Você pode nomear o conjunto de equipes para uma atividade específica ao criar a tarefa e você pode reutilizar esse conjunto de equipes para uma atividade futura.

{% data reusables.classroom.classroom-creates-group-repositories %}

{% data reusables.classroom.about-assignments %}

Você pode decidir quantas equipes uma atividade pode ter e quantos integrantes cada equipe pode ter. Cada equipe que um estudante cria para uma atividade é uma equipe dentro da sua organização em {% data variables.product.product_name %}. A visibilidade da equipe é secreta. Equipes criadas em {% data variables.product.product_name %} não aparecerão em {% data variables.product.prodname_classroom %}. Para obter mais informações, confira "[Sobre as equipes](/organizations/organizing-members-into-teams/about-teams)".

Para assistir a uma demonstração em vídeo da criação de uma tarefa em grupo, confira "[Noções básicas de configuração do {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)".

{% data reusables.classroom.reuse-assignment-link %}

## Pré-requisitos

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Criar uma atividade

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Configurar os fundamentos para uma atividade

Nomeie sua atividade, decida se deseja atribuir um prazo, defina equipes e escolha a visibilidade dos repositórios de atividades.

- [Como nomear uma tarefa](#naming-an-assignment)
- [Como atribuir um prazo a uma tarefa](#assigning-a-deadline-for-an-assignment)
- [Como escolher um tipo de tarefa](#choosing-an-assignment-type)
- [Como definir equipes para uma tarefa](#defining-teams-for-an-assignment)
- [Como escolher uma visibilidade para repositórios de tarefas](#choosing-a-visibility-for-assignment-repositories)

### Nomear uma atividade

Para uma atividade em grupo, {% data variables.product.prodname_classroom %} nomeia repositórios pelo prefixo do repositório e pelo nome da equipe. Por padrão, o prefixo do repositório é o título da atividade. Por exemplo, se você der a uma tarefa o nome "assignment-1" e o nome da equipe no {% data variables.product.product_name %} for "student-team", o nome do repositório de tarefas para membros da equipe será `assignment-1-student-team`.

{% data reusables.classroom.assignments-type-a-title %}

### Atribuir um prazo para uma atividade

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Escolher um tipo de atividade

Em "Tarefa individual ou em grupo", selecione o menu suspenso e clique em **Tarefa em grupo**. Você não pode alterar o tipo de atividade depois de criá-la. Se preferir criar uma tarefa individual, confira "[Criar uma tarefa individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)".

### Definir equipes para uma atividade

Se você já criou uma atividade em grupo para a sala de aula, você pode reutilizar um conjunto de equipes para a nova atividade. Para criar um novo conjunto com as equipes que seus alunos criam para a atividade, digite o nome do conjunto. Opcionalmente, digite o número máximo de integrantes e equipes totais.

{% tip %}

**Dicas**:

- Recomendamos incluir detalhes sobre o conjunto de equipes no nome para o conjunto. Por exemplo, se você desejar usar o conjunto de equipes para uma atividade, nomeie o conjunto após a atividade. Se você desejar reutilizar o conjunto ao longo de um semestre ou curso, nomeie o conjunto após o semestre ou curso.

- Se desejar atribuir aos alunos uma equipe específica, dê a seus alunos um nome para a equipe e forneça uma lista de integrantes.

{% endtip %}

![Parâmetros para as equipes que participam de uma atividade em grupo](/assets/images/help/classroom/assignments-define-teams.png)

### Escolher uma visibilidade para repositórios de atividades

{% data reusables.classroom.assignments-repository-visibility-and-permissions %}

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Adicionar código inicial e configurar um ambiente de desenvolvimento

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Como escolher um repositório de modelos](#choosing-a-template-repository)
- [Como escolher um IDE (ambiente integrado de desenvolvimento)](#choosing-an-integrated-development-environment-ide)

### Escolher um repositório de modelo

Por padrão, uma nova atividade criará um repositório vazio para cada equipe criada por um aluno. {% data reusables.classroom.you-can-choose-a-template-repository %} 

{% data reusables.classroom.assignments-guide-choose-template-repository %}

### Escolhendo um ambiente integrado de desenvolvimento (IDE)

{% data reusables.classroom.about-online-ides %} Para obter mais informações, confira "[Integrar o {% data variables.product.prodname_classroom %} a um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)".

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

## Fornecendo comentários

Opcionalmente, você pode classificar automaticamente as atividades e criar um espaço para discutir cada envio com a equipe.

- [Como testar as tarefas automaticamente](#testing-assignments-automatically)
- [Como criar um solicitação de pull para comentários](#creating-a-pull-request-for-feedback)

### Testar recomendações automaticamente

{% data reusables.classroom.assignments-guide-using-autograding %}

### Criar um pull request para feedback

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

## Convidar alunos para uma atividade

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

Você pode ver as equipes que estão trabalhando em uma tarefa ou que enviaram uma tarefa na guia **Equipes** da tarefa. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Group assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-group-hero.png">
</div>

## Monitorando o progresso dos alunos
A página de visão geral de atividades exibe informações sobre a aceitação da sua atividade e o progresso da equipe. Você pode ter diferentes informações resumidas, com base nas configurações das suas atividades.

- **Total de equipes**: o número de equipes criadas.
- **Alunos cadastrados**: o número de alunos na lista de participantes do Classroom.
- **Alunos que não estão em uma equipe**: o número de alunos na lista de participantes do Classroom que ainda não ingressaram em uma equipe.
-  **Equipes aceitas**: o número de equipes que aceitaram essa tarefa.
-  **Envios de tarefas**: o número de equipes que enviaram a tarefa. O envio é acionado no prazo da atividade.
-  **Equipes aprovadas**: o número de equipes que foram aprovadas nos testes de avaliação automática para essa tarefa.

## Próximas etapas

- Após criar a atividade e seus alunos formarem equipes, os integrantes da equipe poderão começar a trabalhar nas atividades usando os recursos do Git e do {% data variables.product.product_name %}. Os alunos podem clonar o repositório, realizar commits de push, gerenciar branches, criar e revisar pull requests, resolver conflitos de merge e discutir alterações com problemas. Tanto você como a equipe podem revisar o histórico de commit do repositório. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)", "[Repositórios](/repositories)", "[Como usar o Git](/github/getting-started-with-github/using-git)" e "[Como colaborar com problemas e solicitações de pull](/github/collaborating-with-issues-and-pull-requests)", bem como o curso gratuito sobre [como resolver conflitos de mesclagem](https://github.com/skills/resolve-merge-conflicts) do {% data variables.product.prodname_learning %}.

- Quando uma equipe termina uma atividade, você poderá revisar os arquivos no repositório, ou você poderá revisar o histórico e as visualizações do repositório para entender melhor como a equipe colaborou. Para obter mais informações, confira "[Como visualizar dados do repositório com grafos](/github/visualizing-repository-data-with-graphs)".

- Você pode fornecer comentários para uma atividade, comentando em commits individuais ou em linhas em um pull request. Para obter mais informações, confira "[Como adicionar comentários a uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)" e "[Como abrir um problema por meio do código](/github/managing-your-work-on-github/opening-an-issue-from-code)". Para obter mais informações sobre como criar respostas salvas para fornecer comentários sobre erros comuns, confira "[Sobre as respostas salvas](/github/writing-on-github/about-saved-replies)".

## Leitura adicional

- [{% data variables.product.prodname_global_campus %} para professores](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)
- "[Conectar um curso de sistema de gerenciamento de aprendizagem a uma sala de aula](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)"
- [Como usar as equipes existentes nas tarefas em grupo?](https://education.github.community/t/using-existing-teams-in-group-assignments/6999) na Comunidade do {% data variables.product.prodname_education %}
