---
title: Criar um trabalho individual
intro: Você pode criar uma atividade para os alunos do seu curso para ser concluída individualmente.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/creating-an-individual-assignment
  - /education/manage-coursework-with-github-classroom/create-an-individual-assignment
---

### Sobre atividades individuais

{% data reusables.classroom.assignments-individual-definition %}

{% data reusables.classroom.classroom-creates-individual-repositories %}

{% data reusables.classroom.about-assignments %}

Para uma demonstração vídeo da criação de uma atividade individual, consulte "[Fundamentos da configuração de {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)".

### Pré-requisitos

{% data reusables.classroom.assignments-classroom-prerequisite %}

### Criar uma atividade

{% data reusables.classroom.assignments-guide-create-the-assignment %}

### Configurar os fundamentos para uma atividade

Nomeie sua atividade, decida se deseja atribuir um prazo e escolha a visibilidade dos repositórios de atividades.

- [Nomear uma atividade](#naming-an-assignment)
- [Atribuir um prazo para uma atividade](#assigning-a-deadline-for-an-assignment)
- [Escolher um tipo de atividade](#choosing-an-assignment-type)
- [Escolher uma visibilidade para repositórios de atividades](#choosing-a-visibility-for-assignment-repositories)

#### Nomear uma atividade

Para uma atividade individual, {% data variables.product.prodname_classroom %} nomeia os repositórios pelo prefixo do repositório e pelo nome de usuário de {% data variables.product.product_name %} do aluno. Por padrão, o prefixo do repositório é o título da atividade. Por exemplo, se você nomear uma atividade como "assignment-1" e o nome de usuário do aluno em {% data variables.product.product_name %} for @octocat, o nome do repositório de atividade para @octocat será `assignment-1-octocat`.

{% data reusables.classroom.assignments-type-a-title %}

#### Atribuir um prazo para uma atividade

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

#### Escolher um tipo de atividade

Em "Tarefa individual ou de grupo", selecione o menu suspenso e clique em **Tarefa individual**. Você não pode alterar o tipo de atividade depois de criá-la. Se você preferir criar uma atividade em grupo, consulte "[Criar uma atividade em grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

#### Escolher uma visibilidade para repositórios de atividades

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

### Adicionar código inicial e configurar um ambiente de desenvolvimento

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Escolher um repositório de modelo](#choosing-a-template-repository)
- [Escolher um ambiente de desenvolvimento integrado on-line (IDE)](#choosing-an-online-integrated-development-environment-ide)

#### Escolher um repositório de modelo

Por padrão, uma nova atividade criará um repositório vazio para cada aluno na lista da sala de aula. {% data reusables.classroom.you-can-choose-a-template-repository %} Para obter mais informações sobre repositórios de modelos, consulte "[Criar um repositório de modelo](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)".

{% data reusables.classroom.assignments-guide-choose-template-repository %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

#### Escolher um ambiente de desenvolvimento integrado on-line (IDE)

{% data reusables.classroom.about-online-ides %} Para obter mais informações, consulte "[Integrar {% data variables.product.prodname_classroom %} com um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)."

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

### Fornecer feedback para uma atividade

Opcionalmente, você pode classificar automaticamente as atividades e criar um espaço para discutir cada envio com o aluno.

- [Testar recomendações automaticamente](#testing-assignments-automatically)
- [Evitar alterações em arquivos importantes](#preventing-changes-to-important-files)
- [Criar um pull request para feedback](#creating-a-pull-request-for-feedback)

#### Testar recomendações automaticamente

{% data reusables.classroom.assignments-guide-using-autograding %}

#### Evitar alterações em arquivos importantes

{% data reusables.classroom.assignments-guide-prevent-changes %}

#### Criar um pull request para feedback

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

### Convidar alunos para uma atividade

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

Você pode ver se um aluno juntou-se à sala de aula e aceitou ou enviou uma atividade na aba **Todos os alunos** da atividade. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Atividade individual" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

### Próximas etapas

- Depois de criar a atividade, os alunos poderão começar a trabalhar na atividade usando os recursos do Git e do {% data variables.product.product_name %}. Os alunos podem clonar o repositório, realizar commits de push, gerenciar branches, criar e revisar pull requests, resolver conflitos de merge e discutir alterações com problemas. Você e o aluno podem revisar o histórico do commit do repositório. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)," "[Criar, clonar e arquivar repositórios](/github/creating-cloning-and-archiving-repositories)", "[Usar o Git](/github/using-git)" e "[Colaborar com problemas e pull requests](/github/collaborating-with-issues-and-pull-requests)".

- Quando um aluno concluir uma atividade, você poderá revisar os arquivos no repositório ou você poderá revisar o histórico e as visualizações do repositório para entender melhor o trabalho do aluno. Para obter mais informações, consulte "[Visualizar dados do repositório com gráficos](/github/visualizing-repository-data-with-graphs)".

- Você pode fornecer comentários para uma atividade, comentando em commits individuais ou em linhas em um pull request. Para obter mais informações, consulte "[Comentando em um pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)" e "[Abrir um problema a partir do código](/github/managing-your-work-on-github/opening-an-issue-from-code)". Para obter mais informações sobre a criação de respostas salvas para fornecer feedback sobre erros comuns, consulte "[Sobre respostas salvas](/github/writing-on-github/about-saved-replies)".

### Leia mais

- "[Use {% data variables.product.prodname_dotcom %} na sua sala de aula e pesquisa](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research)"
- "[Conecte um sistema de gerenciamento de aprendizagem para {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
