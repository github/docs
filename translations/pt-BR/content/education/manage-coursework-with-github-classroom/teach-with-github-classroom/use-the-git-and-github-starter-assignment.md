---
title: Use a atividade do Git e GitHub starter
intro: 'Você pode usar a atividade inicial do Git & {% data variables.product.company_short %} para dar aos alunos uma visão geral do Git e dos princípios básicos do {% data variables.product.company_short %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can use Git & {% data variables.product.company_short %} starter assignments. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment
shortTitle: Starter assignment
ms.openlocfilehash: ec19f9ce78b3a14803ee7383a05e7d0188830c7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147574009'
---
A tarefa inicial do Git e do {% data variables.product.company_short %} é um curso predefinido que resume os conceitos básicos do Git e do {% data variables.product.company_short %} e fornece aos alunos links para recursos a fim de saber mais sobre tópicos específicos.

## Pré-requisitos

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Criando a atividade inicial

### Se não houver recomendações na sala de aula

1. Efetue o login em {% data variables.product.prodname_classroom_with_url %}.
2. Acesse uma sala de aula.
3. Na guia {% octicon "repo" aria-label="The repo icon" %} **Tarefas**, clique em **Usar tarefa inicial**.

<div class="procedural-image-wrapper">
  <img alt="Creating your first assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-create-first-assignment.png">
</div>

### Se já existirem recomendações na sala de aula

1. Efetue o login em {% data variables.product.prodname_classroom_with_url %}.
2. Acesse uma sala de aula.
3. Na guia {% octicon "repo" aria-label="The repo icon" %} **Tarefas**, clique no link na faixa azul.

<div class="procedural-image-wrapper">
  <img alt="The 'New assignment' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-new-starter-assignment-button.png">
</div>

## Configurar os fundamentos para uma atividade

Importe o curso introdutório para a sua organização, nomeie sua atividade, decida se deseja atribuir um prazo e escolha a visibilidade dos repositórios de tarefas.

- [Pré-requisitos](#prerequisites)
- [Como criar a tarefa inicial](#creating-the-starter-assignment)
  - [Se não houver tarefas na sala de aula](#if-there-are-no-existing-assignments-in-the-classroom)
  - [Se já houver tarefas na sala de aula](#if-there-already-are-existing-assignments-in-the-classroom)
- [Como configurar os fundamentos de uma tarefa](#setting-up-the-basics-for-an-assignment)
  - [Como importar a tarefa](#importing-the-assignment)
  - [Como nomear a tarefa](#naming-the-assignment)
  - [Como atribuir um prazo a uma tarefa](#assigning-a-deadline-for-an-assignment)
  - [Como escolher uma visibilidade para repositórios de tarefas](#choosing-a-visibility-for-assignment-repositories)
- [Como convidar alunos para uma tarefa](#inviting-students-to-an-assignment)
- [Próximas etapas](#next-steps)
- [Leitura adicional](#further-reading)

### Importando a tarefa

Primeiro, você precisa importar a tarefa inicial do Git e do {% data variables.product.product_name %} para sua organização.

<div class="procedural-image-wrapper">
  <img alt="The `Import the assignment` button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-import-starter-assignment.png">
</div>

### Nomeando a atividade

Para uma atividade individual, {% data variables.product.prodname_classroom %} nomeia os repositórios pelo prefixo do repositório e pelo nome de usuário de {% data variables.product.product_name %} do aluno. Por padrão, o prefixo do repositório é o título da atividade. Por exemplo, se você der a uma tarefa o nome "assignment-1" e o nome de usuário do aluno no {% data variables.product.product_name %} for @octocat, o nome do repositório de tarefas de @octocat será `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

### Atribuir um prazo para uma atividade

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Escolher uma visibilidade para repositórios de atividades

Os repositórios de uma atividade podem ser públicos ou privados. Se você usar repositórios privados, apenas o aluno poderá ver o feedback que você fornecer. Em "Visibilidade do repositório" selecione uma visibilidade.

Quando terminar, clique em **Continuar**. {% data variables.product.prodname_classroom %} criará a atividade e direcionará você para a página da atividade.

<div class="procedural-image-wrapper">
  <img alt="'Continue' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-continue-button.png">
</div>

## Convidar alunos para uma atividade

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

Você pode ver se um aluno ingressou na sala de aula e aceitou ou enviou uma tarefa na guia **Todos os alunos** da tarefa. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

A tarefa inicial do Git e do {% data variables.product.company_short %} só está disponível para alunos individuais, não para grupos. Depois de criar a atividade, os alunos poderão começar a trabalhar nela.

## Próximas etapas

- Faça recomendações adicionais personalizadas para seu curso. Para obter mais informações, confira "[Criar uma atribuição individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)", "[Criar uma atribuição em grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)" e "[Reutilizar uma atribuição](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)".

## Leitura adicional

- "[{% data variables.product.prodname_global_campus %} para professores](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)"
- "[Conectar um sistema de gerenciamento de aprendizagem ao {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
