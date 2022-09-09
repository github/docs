---
title: Criar um trabalho individual
intro: Você pode criar uma atividade para os alunos do seu curso para ser concluída individualmente.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage individual assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/creating-an-individual-assignment
  - /education/manage-coursework-with-github-classroom/create-an-individual-assignment
shortTitle: Individual assignment
ms.openlocfilehash: 4f5fab2f63ff686762a4fb6ccd5964b7f4d9cb3c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573865'
---
## Sobre atividades individuais

{% data reusables.classroom.assignments-individual-definition %}

{% data reusables.classroom.classroom-creates-individual-repositories %}

{% data reusables.classroom.about-assignments %}

Para assistir a uma demonstração em vídeo da criação de uma tarefa individual, confira "[Noções básicas de configuração do {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)".

{% data reusables.classroom.reuse-assignment-link %}

## Pré-requisitos

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Criar uma atividade

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Configurar os fundamentos para uma atividade

Nomeie sua atividade, decida se deseja atribuir um prazo e escolha a visibilidade dos repositórios de atividades.

- [Como nomear uma tarefa](#naming-an-assignment)
- [Como atribuir um prazo a uma tarefa](#assigning-a-deadline-for-an-assignment)
- [Como escolher um tipo de tarefa](#choosing-an-assignment-type)
- [Como escolher uma visibilidade para repositórios de tarefas](#choosing-a-visibility-for-assignment-repositories)

### Nomear uma atividade

Para uma atividade individual, {% data variables.product.prodname_classroom %} nomeia os repositórios pelo prefixo do repositório e pelo nome de usuário de {% data variables.product.product_name %} do aluno. Por padrão, o prefixo do repositório é o título da atividade. Por exemplo, se você der a uma tarefa o nome "assignment-1" e o nome de usuário do aluno no {% data variables.product.product_name %} for @octocat, o nome do repositório de tarefas de @octocat será `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

### Atribuir um prazo para uma atividade

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Escolher um tipo de atividade

Em "Tarefa individual ou em grupo", selecione o menu suspenso e clique em **Tarefa individual**. Você não pode alterar o tipo de atividade depois de criá-la. Se preferir criar uma tarefa em grupo, confira "[Criar uma tarefa em grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

### Escolher uma visibilidade para repositórios de atividades

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Adicionar código inicial e configurar um ambiente de desenvolvimento

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Como escolher um repositório de modelos](#choosing-a-template-repository)
- [Como escolher um IDE (ambiente integrado de desenvolvimento)](#choosing-an-integrated-development-environment-ide)

### Escolher um repositório de modelo

Por padrão, uma nova atividade criará um repositório vazio para cada aluno na lista da sala de aula. {% data reusables.classroom.you-can-choose-a-template-repository %}

{% data reusables.classroom.assignments-guide-choose-template-repository %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

### Escolhendo um ambiente integrado de desenvolvimento (IDE)

{% data reusables.classroom.about-online-ides %} Para obter mais informações, confira "[Integrar o {% data variables.product.prodname_classroom %} a um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)".

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

## Fornecer feedback para uma atividade

Opcionalmente, você pode classificar automaticamente as atividades e criar um espaço para discutir cada envio com o aluno.

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

Você pode ver se um aluno ingressou na sala de aula e aceitou ou enviou uma tarefa na guia **Lista de participantes da sala de aula** da tarefa. Você também pode vincular os aliases do {% data variables.product.prodname_dotcom %} ao identificador da lista de participantes associado e vice-versa nesta guia. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

## Monitorando o progresso dos alunos
A página de visão geral do trabalho fornece uma visão geral das suas aceitações da atividade e do progresso do aluno. Você pode ter diferentes informações resumidas, com base nas configurações das suas atividades.

- **Alunos cadastrados**: o número de alunos na lista de participantes do Classroom.
- **Alunos adicionados**: o número de contas do {% data variables.product.prodname_dotcom %} que aceitaram a tarefa e que não estão associadas a um identificador de lista de participantes.
-  **Alunos aceitos**: o número de contas que aceitaram essa tarefa.
-  **Envios de tarefa**: o número de alunos que enviaram a tarefa. O envio é acionado no prazo da atividade.
-  **Alunos aprovados**: o número de alunos que foram aprovados nos testes de avaliação automática para essa tarefa.

## Próximas etapas

- Depois de criar a atividade, os alunos poderão começar a trabalhar na atividade usando os recursos do Git e do {% data variables.product.product_name %}. Os alunos podem clonar o repositório, realizar commits de push, gerenciar branches, criar e revisar pull requests, resolver conflitos de merge e discutir alterações com problemas. Você e o aluno podem revisar o histórico do commit do repositório. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)", "[Repositórios](/repositories)" e "[Colaboração com problemas e solicitações de pull](/github/collaborating-with-issues-and-pull-requests)".

- Quando um aluno concluir uma atividade, você poderá revisar os arquivos no repositório ou você poderá revisar o histórico e as visualizações do repositório para entender melhor o trabalho do aluno. Para obter mais informações, confira "[Como visualizar dados do repositório com grafos](/github/visualizing-repository-data-with-graphs)".

- Você pode fornecer comentários para uma atividade, comentando em commits individuais ou em linhas em um pull request. Para obter mais informações, confira "[Como adicionar comentários a uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)" e "[Como abrir um problema por meio do código](/github/managing-your-work-on-github/opening-an-issue-from-code)". Para obter mais informações sobre como criar respostas salvas para fornecer comentários sobre erros comuns, confira "[Sobre as respostas salvas](/github/writing-on-github/about-saved-replies)".

## Leitura adicional

- "[{% data variables.product.prodname_global_campus %} para professores](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)"
- "[Conectar um sistema de gerenciamento de aprendizagem ao {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
