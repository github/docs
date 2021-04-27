---
title: Integrar GitHub Classroom com um IDE on-line
shortTitle: Integrar com um IDE on-line
intro: Você pode pré-configurar um ambiente de desenvolvimento integrado on-line (IDDE) compatível com recomendações que você cria em {% data variables.product.prodname_classroom %}.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
---

### Sobre a integração com um IDE on-line

{% data reusables.classroom.about-online-ides %}

Depois que um aluno aceitar uma atividade com um IDE on-line, o arquivo README no repositório de atividades do aluno conterá um botão para abrir a atividade no IDE. O aluno pode começar a trabalhar imediatamente, e nenhuma configuração adicional será necessária.

![Botão para IDE on-line no README.md para repositório de atividade](/assets/images/help/classroom/assignment-repository-ide-button-in-readme.png)

### IDEs on-line compatíveis

{% data variables.product.prodname_classroom %} é compatível com os seguintes IDEs on-line. Você pode aprender mais sobre a experiência do aluno para cada IDE.

| IDE                       | Mais informações                                                                                                                                                                             |
|:------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft MakeCode Arcade | "[Sobre o uso do Arcade MakeCode com {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)" |
| Repl.it                   | "[Sobre o uso do Repl.it com GitHub Classroom](/education/manage-coursework-with-github-classroom/about-using-replit-with-github-classroom)"                                                 |

### Configurar um IDE on-line para uma atividade

Você poderá escolher o IDE on-line que gostaria de usar para uma atividade ao criar uma atividade. Para aprender a criar uma nova atividade que utiliza um ID on-line, consulte "[Criar uma atividade individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" ou "[Criar uma atividade em grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

### Autorizar o aplicativo OAuth para um IDE on-line

A primeira vez que você configurar uma tarefa com um ID on-line, você deverá autorizar o aplicativo OAuth para o IDE on-line para sua organização.

![Botão "Conceder acesso" no popover para autorizar o aplicativo OAuth para IDE on-line](/assets/images/help/classroom/assignment-ide-go-grant-access-button.png)

Para todos os repositórios, conceda acesso de **leitura** do aplicativo aos metadados, administração, código e acesso de **gravação** à administração e código. Para obter mais informações, consulte "[Autorizar aplicativos OAuth](/github/authenticating-to-github/authorizing-oauth-apps)".

### Leia mais

- "[Sobre READMEs](/github/creating-cloning-and-archiving-repositories/about-readmes)"
