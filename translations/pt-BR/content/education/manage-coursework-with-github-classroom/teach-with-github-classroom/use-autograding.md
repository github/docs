---
title: Usar avaliação automática
intro: É possível fornecer feedback automaticamente sobre envios de código de seus alunos configurando testes para serem executados no repositório de atividade.
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/adding-tests-for-auto-grading
  - /education/manage-coursework-with-github-classroom/reviewing-auto-graded-work-teachers
  - /education/manage-coursework-with-github-classroom/use-autograding
---
### Sobre a avaliação automática

{% data reusables.classroom.about-autograding %}

Depois que um aluno aceita uma atividade, em cada push para o repositório de atividades, {% data variables.product.prodname_actions %} executa os comandos do seu teste de avaliação automática em um ambiente Linux que contém o código mais novo do aluno. {% data variables.product.prodname_classroom %} cria os fluxos de trabalho necessários para {% data variables.product.prodname_actions %}. Você não precisa ter experiência com {% data variables.product.prodname_actions %} para usar a avaliação automática.

Pode usar uma estrutura de teste, executar um comando personalizado, escrever testes de entrada/saída ou combinar diferentes métodos de teste. O ambiente Linux para avaliação automática contém muitas ferramentas de software populares. Para obter mais informações, consulte as informações sobre a versão mais recente do Ubuntu em "[Especificações para executores hospedados em {% data variables.product.company_short %}](/actions/reference/specifications-for-github-hosted-runners#supported-software)".

Você pode ter uma visão geral dos alunos que estão passando testes de avaliação automática acessando a atividade em {% data variables.product.prodname_classroom %}. Uma marca de verificação verde significa que todos os testes estão passando para o aluno, e um X vermelho significa que alguns ou todos os testes estão falhando para o aluno. Se você ganhou pontos para um ou mais testes, uma bolha irá mostrar a pontuação para os testes da pontuação máxima possível para a atividade.

![Visão geral de uma atividade com resultados de avaliação automática](/assets/images/help/classroom/autograding-hero.png)

### Métodos de avaliação

Há dois métodos de avaliação: testes de entrada/saída e testes de comando de execução.

#### Teste de entrada/saída

Um teste de entrada/saída opcionalmente executa um comando de configuração e, em seguida, fornece a entrada padrão para um comando de teste. {% data variables.product.prodname_classroom %} avalia a saída do comando de teste para um resultado esperado.

| Configuração                | Descrição                                                                                                                   |
|:--------------------------- |:--------------------------------------------------------------------------------------------------------------------------- |
| **Nome de teste**           | O nome do teste, para identificar o teste em registros                                                                      |
| **Comando de configuração** | _Opcional_. Um comando a ser executado antes dos testes, como compilação ou instalação                                      |
| **Executar comando**        | O comando para executar o teste e gerar saída padrão para avaliação                                                         |
| **Entradas**                | Entrada padrão para o executar o comando                                                                                    |
| **Saída esperada**          | A saída que você quer ver como saída padrão do comando de execução                                                          |
| **Comparação**              | O tipo de comparação entre a saída do comando de execução e a saída esperada<br/><br/><ul><li>**Incluído**: Passa quando a saída esperada aparece<br/>em qualquer lugar na saída padrão do comando de execução</li><li>**Exato**: Passa quando a saída esperada é completamente idêntica<br/>à saída padrão do comando de execução</li><li>**Regex**: Passa se a expressão regular na saída esperada<br/>corresponde à saída padrão do comando de execução</li></ul> |
| **Tempo esgotado**          | Quanto tempo um teste deve ser executado em minutos antes de resultar em falha                                              |
| **Pontos**                  | _Opcional_. O número de pontos que o teste vale para uma pontuação total                                                    |

#### Executar teste de comando

Um comando de execução executa um comando de configuração e, em seguida, executa um comando de teste. {% data variables.product.prodname_classroom %} verifica o status de saída do comando de teste. Um código de saída de `0` resulta em sucesso e qualquer outro código de saída resulta em falha.

{% data variables.product.prodname_classroom %} fornece predefinições para testes de comando de execução específicos da linguagem para uma variedade de linguagens de programação. Por exemplo, o teste **Executar nó** preenche previamente o comando de configuração com `instalação de npm` e o comando de teste com `teste de npm`.

| Configuração                | Descrição                                                                              |
|:--------------------------- |:-------------------------------------------------------------------------------------- |
| **Nome de teste**           | O nome do teste, para identificar o teste em registros                                 |
| **Comando de configuração** | _Opcional_. Um comando a ser executado antes dos testes, como compilação ou instalação |
| **Executar comando**        | O comando para executar o teste e gerar um código de saída para avaliação              |
| **Tempo esgotado**          | Quanto tempo um teste deve ser executado em minutos antes de resultar em falha         |
| **Pontos**                  | _Opcional_. O número de pontos que o teste vale para uma pontuação total               |

### Configurar testes de avaliação automática para uma atribuição

Você pode adicionar testes de avaliação automática durante a criação de uma nova atividade. {% data reusables.classroom.for-more-information-about-assignment-creation %}

Você pode adicionar, editar ou excluir testes de avaliação automática para uma atividade existente. Se você alterar os testes de avaliação automática para uma atribuição existente, os repositórios de atividade existentes não serão afetados. Um aluno ou equipe deve aceitar a atividade e criar um novo repositório de atividade para usar os novos testes.

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.assignments-click-pencil %}
1. Na barra lateral esquerda, clique em **Avaliações e feedback**. !["Avaliações e feedback" à esquerda dos fundamentos da aitivdade](/assets/images/help/classroom/assignments-click-grading-and-feedback.png)
1. Adicionar, editar ou excluir um teste de avaliação automática.
    - Para adicionar um teste, em "Adicionar testes de avaliação automática", selecione o menu suspenso **Adicionar teste** e, em seguida, clique no método de avaliação que você deseja usar. ![Using the "Add test" drop-down menu to click a grading method](/assets/images/help/classroom/autograding-click-grading-method.png) Configure o teste e, em seguida, clique em **Salvar caso de teste**. ![Botão "Salvar caso de teste" para um teste de avaliação automática](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - Para editar um teste, à direita do nome do teste, clique em {% octicon "pencil" aria-label="The pencil icon" %}. ![Pencil icon for editing an autograding test](/assets/images/help/classroom/autograding-click-pencil.png) Configure o teste e, em seguida, clique em **Salvar caso de teste**. ![Botão "Salvar caso de teste" para um teste de avaliação automática](/assets/images/help/classroom/assignments-click-save-test-case-button.png)
    - Para excluir um teste, à direita do nome do teste, clique em {% octicon "trash" aria-label="The trash icon" %}. ![Ícone da lixeira para excluir um teste de avaliação automática](/assets/images/help/classroom/autograding-click-trash.png)
1. Na parte inferior da página, clique em **Atualizar atividade**. ![Botão "Atualizar a atividade" na parte inferior da página](/assets/images/help/classroom/assignments-click-update-assignment.png)

### Visualizar registros dos testes da avaliação automática

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-assignment-in-list %}
1. À direita de um envio, clique em **Visualizar teste**. ![Botão "Visualizar teste" para envio de uma atividade](/assets/images/help/classroom/assignments-click-view-test.png)
1. Revise a saída de teste. Para obter mais informações, consulte "[Usar registros de execução do fluxo de trabalho](/actions/managing-workflow-runs/using-workflow-run-logs)".

### Leia mais

- [Documentação de {% data variables.product.prodname_actions %}](/actions)
