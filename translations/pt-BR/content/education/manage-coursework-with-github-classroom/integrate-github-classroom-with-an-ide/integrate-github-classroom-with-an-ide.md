---
title: Integrar GitHub Classroom com um IDE
shortTitle: Integrate with an IDE
intro: 'Você pode pré-configurar um ambiente de desenvolvimento integrado (IDE) compatível para atividades que você criar em {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can integrate {% data variables.product.prodname_classroom %} with an IDE. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
ms.openlocfilehash: 25c4c1fba1cb0f082049a461e03bfdf009e208c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110503'
---
## Sobre a integração com um IDE

{% data reusables.classroom.about-online-ides %} 

Depois que um aluno aceita um trabalho com um IDE, o arquivo README no repositório de atividades do aluno conterá um botão para abrir a atividade no IDE. O aluno pode começar a trabalhar imediatamente, e nenhuma configuração adicional será necessária.

## IDEs compatíveis

{% data variables.product.prodname_classroom %} é compatível com os IDEs a seguir. Você pode aprender mais sobre a experiência do aluno para cada IDE.

| IDE | Mais informações |
| :- | :- |
| {% data variables.product.prodname_github_codespaces %} | "[Usar {% data variables.product.prodname_github_codespaces %} com {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)" |
| Microsoft MakeCode Arcade | "[Sobre como usar o MakeCode Arcade com o {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)" |
| {% data variables.product.prodname_vscode %} | [Extensão do {% data variables.product.prodname_classroom %}](http://aka.ms/classroom-vscode-ext) no Visual Studio Marketplace |

Sabemos que as integrações do IDE na nuvem são importantes para a sua sala de aula e que estão trabalhando para trazer mais opções. 

## Configurando um IDE para uma atividade

Você pode escolher o IDE que desejar usar para uma atividade quando criar uma atividade. Para saber como criar uma tarefa que usa um IDE, confira "[Criar uma tarefa individual](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" ou "[Criar uma tarefa em grupo](/education/manage-coursework-with-github-classroom/create-a-group-assignment)".

## Configurar uma atribuição em um novo IDE

Na primeira vez que você configura uma atribuição usando um IDE diferente, você deve garantir que ela seja configurada corretamente.

A menos que use o {% data variables.product.prodname_codespaces %}, você deverá autorizar o aplicativo OAuth para o IDE da sua organização. Em todos os repositórios, permita ao aplicativo acesso de **leitura** nos metadados, na administração e no código e acesso de **gravação** na administração e no código. Para obter mais informações, confira "[Como autorizar aplicativos OAuth](/github/authenticating-to-github/authorizing-oauth-apps)".

O {% data variables.product.prodname_codespaces %} não exige um aplicativo OAuth, mas você precisa habilitar o {% data variables.product.prodname_codespaces %} para que sua organização possa configurar uma atribuição com o {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como usar o {% data variables.product.prodname_codespaces %} com o {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#enabling-codespaces-for-your-organization)".

## Leitura adicional

- "[Sobre os arquivos LEIAME](/github/creating-cloning-and-archiving-repositories/about-readmes)"
