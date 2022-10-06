---
title: Usar avaliação automática
intro: É possível fornecer feedback automaticamente sobre envios de código de seus alunos configurando testes para serem executados no repositório de atividade.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can set up and use autograding on assignments in a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/adding-tests-for-auto-grading
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-teachers
  - /education/manage-coursework-with-github-classroom/use-autograding
ms.openlocfilehash: b3e9b44da93d799972b93a9f6e822b767099fdba
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145093835'
---
## Sobre a avaliação automática

{% data reusables.classroom.about-autograding %}

Depois que um aluno aceita uma atividade, em cada push para o repositório de atividades, {% data variables.product.prodname_actions %} executa os comandos do seu teste de avaliação automática em um ambiente Linux que contém o código mais novo do aluno. {% data variables.product.prodname_classroom %} cria os fluxos de trabalho necessários para {% data variables.product.prodname_actions %}. Você não precisa ter experiência com {% data variables.product.prodname_actions %} para usar a avaliação automática.

Pode usar uma estrutura de teste, executar um comando personalizado, escrever testes de entrada/saída ou combinar diferentes métodos de teste. O ambiente Linux para avaliação automática contém muitas ferramentas de software populares. Para obter mais informações, confira os detalhes da última versão do Ubuntu em "[Especificações dos executores hospedados no {% data variables.product.company_short %}](/actions/reference/specifications-for-github-hosted-runners#supported-software)".

Você pode ter uma visão geral dos alunos que estão passando testes de avaliação automática acessando a atividade em {% data variables.product.prodname_classroom %}. Uma marca de verificação verde significa que todos os testes estão passando para o aluno, e um X vermelho significa que alguns ou todos os testes estão falhando para o aluno. Se você ganhou pontos para um ou mais testes, uma bolha irá mostrar a pontuação para os testes da pontuação máxima possível para a atividade.

![Visão geral de uma atividade com resultados de avaliação automática](/assets/images/help/classroom/assignment-individual-hero.png)

## Métodos de avaliação

Há dois métodos de avaliação: testes de entrada/saída e testes de comando de execução.

### Teste de entrada/saída

Um teste de entrada/saída opcionalmente executa um comando de configuração e, em seguida, fornece a entrada padrão para um comando de teste. {% data variables.product.prodname_classroom %} avalia a saída do comando de teste para um resultado esperado.

| Configuração | Descrição |
| :- | :- |
| **Nome do teste** | O nome do teste, para identificar o teste em registros |
| **Comando de configuração** | _Opcional_. Um comando a ser executado antes dos testes, como compilação ou instalação |
| **Comando de execução** | O comando para executar o teste e gerar saída padrão para avaliação |
| **Entradas** | Entrada padrão para o executar o comando |
| **Saída esperada** | A saída que você quer ver como saída padrão do comando de execução |
| **Comparação** | O tipo de comparação entre a saída do comando de execução e a saída esperada<br/><br/><ul><li>**Incluído**: é transmitido quando a saída esperada é exibida<br/>em qualquer lugar da saída padrão do comando de execução</li><li>**Exato**: é transmitido quando a saída esperada é completamente idêntica<br/>à saída padrão do comando de execução</li><li>**Regex**: é transmitido se a expressão regular na saída esperada<br/>corresponde à saída padrão do comando de execução</li></ul> |
| **Tempo Limite** | Quanto tempo um teste deve ser executado em minutos antes de resultar em falha |
| **Pontos** | _Opcional_. O número de pontos que o teste vale para uma pontuação total |

### Executar teste de comando

Um comando de execução executa um comando de configuração e, em seguida, executa um comando de teste. {% data variables.product.prodname_classroom %} verifica o status de saída do comando de teste. O código de saída `0` resulta em sucesso, e qualquer outro código de saída resulta em falha.

{% data variables.product.prodname_classroom %} fornece predefinições para testes de comando de execução específicos da linguagem para uma variedade de linguagens de programação. Por exemplo, o teste **Executar nó** preenche o comando de instalação com `npm install` e o comando de teste com `npm test`.

| Configuração | Descrição |
| :- | :- |
| **Nome do teste** | O nome do teste, para identificar o teste em registros |
| **Comando de configuração** | _Opcional_. Um comando a ser executado antes dos testes, como compilação ou instalação |
| **Comando de execução** | O comando para executar o teste e gerar um código de saída para avaliação |
| **Tempo Limite** | Quanto tempo um teste deve ser executado em minutos antes de resultar em falha |
| **Pontos** | _Opcional_. O número de pontos que o teste vale para uma pontuação total |

## Configurar testes de avaliação automática para uma atribuição

Você pode adicionar testes de avaliação automática durante a criação de uma nova atividade. {% data reusables.classroom.for-more-information-about-assignment-creation %}

Você pode adicionar, editar ou excluir testes de avaliação automática para uma atividade existente. Todas as alterações feitas por meio da interface do usuário do Classroom serão enviadas por push para os repositórios de alunos existentes. Portanto, tenha cuidado ao editar seus testes.

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.assignments-click-pencil %}
1. Na barra lateral esquerda, clique em **Avaliação e comentários**.
  !["Avaliação e comentários" à esquerda das informações básicas da tarefa](/assets/images/help/classroom/assignments-click-grading-and-feedback.png)
1. Adicionar, editar ou excluir um teste de avaliação automática.
    - Para adicionar um teste, em "Adicionar testes de avaliação automática", selecione o menu suspenso **Adicionar teste** e clique no método de avaliação que deseja usar.
       ![Uso do menu suspenso "Adicionar teste" para clicar em um método de avaliação](/assets/images/help/classroom/autograding-click-grading-method.png) Configure o teste e clique em **Salvar caso de teste**.
       ![Botão "Salvar caso de teste" para um teste de avaliação automática](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - Para editar um teste, à direita do nome do teste, clique em {% octicon "pencil" aria-label="The pencil icon" %}.
        ![Ícone de lápis usado para editar um teste de avaliação automática](/assets/images/help/classroom/autograding-click-pencil.png) Configure o teste e clique em **Salvar caso de teste**.
       ![Botão "Salvar caso de teste" para um teste de avaliação automática](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - Para excluir um teste, à direita do nome do teste, clique em {% octicon "trash" aria-label="The trash icon" %}.
        ![Ícone da lixeira usado para excluir um teste de avaliação automática](/assets/images/help/classroom/autograding-click-trash.png)
1. Na parte inferior da página, clique em **Atualizar tarefa**.
  ![Botão "Atualizar tarefa" na parte inferior da página](/assets/images/help/classroom/assignments-click-update-assignment.png)

## Visualizar e fazer o download de resultados de testes de autoavaliação

### Fazer o download dos resultados da auto-avaliação

Você também pode fazer o download do CSV da pontuação da autoavaliação dos seus alunos por meio do botão "Download". Isso irá gerar e fazer o download de um CSV que contém um link para o repositório do aluno, seu gerenciador de {% data variables.product.prodname_dotcom %}, identificador da lista de participantes, registro de hora de envio e pontuação de da autoavaliação.

![Botão "Baixar" selecionado que mostra "Baixar notas realçadas" e uma opção adicional para "Baixar repositórios"](/assets/images/help/classroom/download-grades.png)

### Ver registros individuais
{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-assignment-in-list %}
1. À direita de um envio, clique em **Exibir teste**.
  ![Botão "Exibir teste" em um envio de tarefa](/assets/images/help/classroom/assignments-click-view-test.png)
1. Revise a saída de teste. Para obter mais informações, confira "[Como usar logs de execução de fluxo de trabalho](/actions/managing-workflow-runs/using-workflow-run-logs)".

## Leitura adicional

- [Documentação do {% data variables.product.prodname_actions %}](/actions)
