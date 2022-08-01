---
title: Criar uma atribuição em grupo
intro: Você pode criar uma atribuição colaborativa para equipes de alunos que participam do seu curso.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage group assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/create-group-assignments
  - /education/manage-coursework-with-github-classroom/create-a-group-assignment
---

## Sobre atribuições em grupo

{% data reusables.classroom.assignments-group-definition %} Os alunos podem trabalhar juntos em uma tarefa em grupo em um repositório compartilhado, como uma equipe de desenvolvedores profissionais.

Quando um aluno aceita uma atividade em grupo, o aluno poderá criar uma nova equipe ou juntar-se a uma equipe existente. {% data variables.product.prodname_classroom %} salva as equipes para uma atividade como um conjunto. Você pode nomear o conjunto de equipes para uma atividade específica ao criar a tarefa e você pode reutilizar esse conjunto de equipes para uma atividade futura.

{% data reusables.classroom.classroom-creates-group-repositories %}

{% data reusables.classroom.about-assignments %}

Você pode decidir quantas equipes uma atividade pode ter e quantos integrantes cada equipe pode ter. Cada equipe que um estudante cria para uma atividade é uma equipe dentro da sua organização em {% data variables.product.product_name %}. A visibilidade da equipe é secreta. Equipes criadas em {% data variables.product.product_name %} não aparecerão em {% data variables.product.prodname_classroom %}. Para obter mais informações, consulte "[Sobre equipes](/organizations/organizing-members-into-teams/about-teams)".

Para uma demonstração de vídeo da criação de uma atividade de grupo, consulte "[Fundamentos de configuração de {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)".

{% data reusables.classroom.reuse-assignment-link %}

## Pré-requisitos

{% data reusables.classroom.assignments-classroom-prerequisite %}

## Criar uma atividade

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## Configurar os fundamentos para uma atividade

Nomeie sua atividade, decida se deseja atribuir um prazo, defina equipes e escolha a visibilidade dos repositórios de atividades.

- [Nomear uma atividade](#naming-an-assignment)
- [Atribuir um prazo para uma atividade](#assigning-a-deadline-for-an-assignment)
- [Escolher um tipo de atividade](#choosing-an-assignment-type)
- [Definir equipes para uma atividade](#defining-teams-for-an-assignment)
- [Escolher uma visibilidade para repositórios de atividades](#choosing-a-visibility-for-assignment-repositories)

### Nomear uma atividade

Para uma atividade em grupo, {% data variables.product.prodname_classroom %} nomeia repositórios pelo prefixo do repositório e pelo nome da equipe. Por padrão, o prefixo do repositório é o título da atividade. Por exemplo, se você nomear uma atividade "atividade-1" e o nome da equipe em {% data variables.product.product_name %} for "aluno-equipe", o nome do repositório de atividade para os integrantes da equipe será a `atividade-1-aluno-equipe`.

{% data reusables.classroom.assignments-type-a-title %}

### Atribuir um prazo para uma atividade

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### Escolher um tipo de atividade

Em "Atividade individual ou em grupo", selecione o menu suspenso e, em seguida, clique em **Atividade em grupo**. Você não pode alterar o tipo de atividade depois de criá-la. Se você preferir criar uma atividade individual, consulte "[Criar uma atividade individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)".

### Definir equipes para uma atividade

Se você já criou uma atividade em grupo para a sala de aula, você pode reutilizar um conjunto de equipes para a nova atividade. Para criar um novo conjunto com as equipes que seus alunos criam para a atividade, digite o nome do conjunto. Opcionalmente, digite o número máximo de integrantes e equipes totais.

{% tip %}

**Dicas**:

- Recomendamos incluir detalhes sobre o conjunto de equipes no nome para o conjunto. Por exemplo, se você desejar usar o conjunto de equipes para uma atividade, nomeie o conjunto após a atividade. Se você desejar reutilizar o conjunto ao longo de um semestre ou curso, nomeie o conjunto após o semestre ou curso.

- Se desejar atribuir aos alunos uma equipe específica, dê a seus alunos um nome para a equipe e forneça uma lista de integrantes.

{% endtip %}

![Parâmetros para as equipes que participam de uma atividade em grupo](/assets/images/help/classroom/assignments-define-teams.png)

### Escolher uma visibilidade para repositórios de atividades

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## Adicionar código inicial e configurar um ambiente de desenvolvimento

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [Escolher um repositório de modelo](#choosing-a-template-repository)
- [Escolhendo um ambiente integrado de desenvolvimento (IDE)](#choosing-an-integrated-development-environment-ide)

### Escolher um repositório de modelo

Por padrão, uma nova atividade criará um repositório vazio para cada equipe criada por um aluno. {% data reusables.classroom.you-can-choose-a-template-repository %}

{% data reusables.classroom.assignments-guide-choose-template-repository %}

### Escolhendo um ambiente integrado de desenvolvimento (IDE)

{% data reusables.classroom.about-online-ides %} Para obter mais informações, consulte "[Integrar {% data variables.product.prodname_classroom %} com um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)."

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

## Fornecer feedback

Opcionalmente, você pode classificar automaticamente as atividades e criar um espaço para discutir cada envio com a equipe.

- [Testar recomendações automaticamente](#testing-assignments-automatically)
- [Criar um pull request para feedback](#creating-a-pull-request-for-feedback)

### Testar recomendações automaticamente

{% data reusables.classroom.assignments-guide-using-autograding %}

### Criar um pull request para feedback

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

## Convidar alunos para uma atividade

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

Você pode ver as equipes que estão trabalhando ou que enviaram uma atividade na aba **Equipes** para a atividade. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Atividade em grupo" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-group-hero.png">
</div>

## Monitorando o progresso dos alunos
A página de visão geral de atividades exibe informações sobre a aceitação da sua atividade e o progresso da equipe. Você pode ter diferentes informações resumidas, com base nas configurações das suas atividades.

- **Total de equipes**: O número de equipes que foram criadas.
- **Alunos cadastrados**: O número de alunos na lista da sala de aula.
- **Alunos fora de uma equipe**: O número de alunos na lista de participantes da sala de aula que ainda não se juntaram a uma equipe.
-  **Equipes aceitas**: O número de equipes que aceitaram esta atividade.
-  **Envios das atividaeds**: O número de equipes que enviaram a atividade. O envio é acionado no prazo da atividade.
-  **Equipes em teste**: O número de equipes que estão atualmente passando os testes de autoavaliação para esta atividade.

## Próximas etapas

- Após criar a atividade e seus alunos formarem equipes, os integrantes da equipe poderão começar a trabalhar nas atividades usando os recursos do Git e do {% data variables.product.product_name %}. Os alunos podem clonar o repositório, realizar commits de push, gerenciar branches, criar e revisar pull requests, resolver conflitos de merge e discutir alterações com problemas. Tanto você como a equipe podem revisar o histórico de commit do repositório. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)," "[Repositórios](/repositories)," "[Usando o Git](/github/getting-started-with-github/using-git)", e "[Colaborando com problemas e pull requests](/github/collaborating-with-issues-and-pull-requests)" e o curso grátis em [Resolvendo conflitos de merge](https://github.com/skills/resolve-merge-conflicts) de {% data variables.product.prodname_learning %}.

- Quando uma equipe termina uma atividade, você poderá revisar os arquivos no repositório, ou você poderá revisar o histórico e as visualizações do repositório para entender melhor como a equipe colaborou. Para obter mais informações, consulte "[Visualizar dados do repositório com gráficos](/github/visualizing-repository-data-with-graphs)".

- Você pode fornecer comentários para uma atividade, comentando em commits individuais ou em linhas em um pull request. Para obter mais informações, consulte "[Comentando em um pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)" e "[Abrir um problema a partir do código](/github/managing-your-work-on-github/opening-an-issue-from-code)". Para obter mais informações sobre a criação de respostas salvas para fornecer feedback sobre erros comuns, consulte "[Sobre respostas salvas](/github/writing-on-github/about-saved-replies)".

## Leia mais

- "[Use {% data variables.product.prodname_dotcom %} na sua sala de aula e pesquisa](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research)"
- "[Conecte um sistema de gerenciamento de aprendizagem para {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)"
- [Usar Equipes Existentes atividades em grupo?](https://education.github.community/t/using-existing-teams-in-group-assignments/6999) na comunidade de {% data variables.product.prodname_education %}
