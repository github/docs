---
title: Integrar GitHub Classroom com um IDE
shortTitle: Integrar com um IDE
intro: 'Você pode pré-configurar um ambiente de desenvolvimento integrado (IDE) compatível para atividades que você criar em {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
---

## Sobre a integração com um IDE

{% data reusables.classroom.about-online-ides %}

Depois que um aluno aceita um trabalho com um IDE, o arquivo README no repositório de atividades do aluno conterá um botão para abrir a atividade no IDE. O aluno pode começar a trabalhar imediatamente, e nenhuma configuração adicional será necessária.

## IDEs compatíveis

{% data variables.product.prodname_classroom %} é compatível com os IDEs a seguir. Você pode aprender mais sobre a experiência do aluno para cada IDE.

| IDE                       | Mais informações                                                                                                                                                                             |
|:------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft MakeCode Arcade | "[Sobre o uso do Arcade MakeCode com {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)" |
| Visual Studio Code        | [Extensão de {% data variables.product.prodname_classroom %}](http://aka.ms/classroom-vscode-ext) no Marketplace do Visual Studio                                                            |

Sabemos que as integrações do IDE na nuvem são importantes para a sua sala de aula e que estão trabalhando para trazer mais opções.

## Configurando um IDE para uma atividade

Você pode escolher o IDE que desejar usar para uma atividade quando criar uma atividade. Para aprender a criar uma nova atividade que utiliza um ID, consulte "[Criar uma atividade individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" ou "[Criar uma atividade em grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

## Autorizando o aplicativo OAuth para um IDE

Na primeira vez que você configurar uma atividade com um IDE, você deverá autorizar o aplicativo OAuth para o IDE da sua organização.

Para todos os repositórios, conceda acesso de **leitura** do aplicativo aos metadados, administração, código e acesso de **gravação** à administração e código. Para obter mais informações, consulte "[Autorizar aplicativos OAuth](/github/authenticating-to-github/authorizing-oauth-apps)".

## Leia mais

- "[Sobre READMEs](/github/creating-cloning-and-archiving-repositories/about-readmes)"
