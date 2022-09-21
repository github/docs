---
title: Sobre usar o Visual Studio Code com o GitHub Classroom
shortTitle: About using Visual Studio Code
intro: 'Você pode configurar o {% data variables.product.prodname_vscode %} como o editor preferido para atividades no {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
ms.openlocfilehash: fe0e8e0c3194f9c97cc30c80dcec00256824e6ab
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145148741'
---
## Sobre {% data variables.product.prodname_vscode %}

{% data variables.product.prodname_vscode %} é um editor de código leve, mas poderoso, que é executado no computador e está disponível para Windows, macOS e Linux. Com a [extensão GitHub Classroom para {% data variables.product.prodname_vscode_shortname %}](https://aka.ms/classroom-vscode-ext), os alunos podem navegar, editar, enviar, colaborar e testar suas Atribuições do Classroom com facilidade. Para obter mais informações sobre os IDEs e o {% data variables.product.prodname_classroom %}, confira "[Integrar o {% data variables.product.prodname_classroom %} a um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

### Editor da escolha do seu aluno 
A integração do GitHub Classroom com o {% data variables.product.prodname_vscode_shortname %} fornece aos alunos um pacote de extensão que contém:

1. [Extensão GitHub Classroom](https://aka.ms/classroom-vscode-ext) com abstrações personalizadas que facilitam a introdução para os alunos.
2. [Extensão Visual Studio Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack), integrando-se a uma exibição de aluno para facilitar o acesso a professores assistente e colegas de classe para ajuda e colaboração.
3. [Extensão Solicitação de Pull do GitHub](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github), permitindo que os alunos vejam comentários dos instrutores no editor. 

### Como iniciar a atribuição no {% data variables.product.prodname_vscode_shortname %}
Ao criar uma atribuição, o {% data variables.product.prodname_vscode_shortname %} pode ser adicionado como o editor preferencial para ela. Para ver mais detalhes, confira "[Integrar o {% data variables.product.prodname_classroom %} a um IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)".

Isso incluirá um selo "Abrir no {% data variables.product.prodname_vscode_shortname %}" em todos os repositórios de alunos. Esse selo manipula a instalação do {% data variables.product.prodname_vscode_shortname %}, o pacote da extensão do Classroom e a abertura para a atribuição ativa com um clique.

{% note %}

**Observação:** o aluno deve ter o Git instalado em seu computador para enviar código por push do {% data variables.product.prodname_vscode_shortname %} para o repositório. Ele não é instalado automaticamente ao clicar no botão  **Abrir no {% data variables.product.prodname_vscode_shortname %}** . O aluno pode baixar o Git [aqui](https://git-scm.com/downloads).

{% endnote %}

### Como usar o pacote de extensão GitHub Classroom 
A extensão GitHub Classroom tem dois componentes principais: a visualização "salas de aula" e a visualização "atividade ativa". 

Quando o aluno lança a extensão pela primeira vez, ele é direcionado automaticamente para a aba Explorador no {% data variables.product.prodname_vscode_shortname %}, onde ele pode ver a visualização de "Atribuição Ativa" ao lado da exibição em árvore de arquivos no repositório. 

![Visão da atividade ativa do GitHub Classroom](/assets/images/help/classroom/vs-code-active-assignment.png)

Ele pode efetuar push dos commits para a última versão do repositório remoto clicando no botão **Sincronizar alterações**, exibido quando o cursor é posicionado sobre a linha "Tarefa Ativa". Isso abstrai o controle de origem com o Git, permitindo que instrutores ensinem o Git no seu próprio ritmo.
A sincronização de alterações também aciona a execução de "testes", se um professor tiver configurado a avaliação automática para sua atividade.

O nó "grupo", em "atividade ativa", mostrará os integrantes de um grupo, se a tarefa for um projeto em grupo. Ele também mostrará os integrantes de administrador do repositório que podem ajudar quando um aluno estiver parado. Para colaborar no projeto, um aluno pode iniciar uma sessão de compartilhamento ao vivo com qualquer pessoa no nó do grupo, e ele irá compartilhar imediatamente todo o contexto do repositório com eles. Saiba mais sobre o Live Share e a colaboração com ele [aqui](https://docs.microsoft.com/en-us/visualstudio/liveshare/).

Quando um aluno termina a tarefa, ele também pode navegar para ver outras atividades e salas de aula. Elas podem ser encontradas na aba do GitHub.
