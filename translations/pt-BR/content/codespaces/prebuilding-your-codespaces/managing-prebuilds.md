---
title: Gerenciando pré-compilações
shortTitle: Gerenciar pré-compilações
intro: 'Você pode revisar, modificar e excluir as configurações de pré-compilação do seu repositório.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
---

## Verificando, alterando e excluindo suas configurações de pré-compilação

As pré-compilações que você configurar para um repositórios são criadas e atualizadas usando um fluxo de trabalho de {% data variables.product.prodname_actions %}, gerenciado pelo serviço de {% data variables.product.prodname_github_codespaces %}.

Dependendo das configurações em uma configuração de pré-criação, o fluxo de trabalho para atualizar a pré-criação poderá ser acionado por esses eventos:

* Criando ou atualizando a configuração de pré-compilação
* Enviando por push um commit ou um pull request para um branch configurado para pré-compilações
* Alterando qualquer um dos arquivos de configuração de contêiner de desenvolvimento
* Um agendamento que você definiu na configuração de pré-criação
* Acionando manualmente o fluxo de trabalho

As configurações na configuração de pré-criação determinam quais eventos acionaram automaticamente uma atualização da pré-criação. Para obter mais informações, consulte "[Configurando pré-criações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

As pessoas com acesso de administrador a um repositório podem verificar o progresso de pré-compilações, editar e excluir configurações de pré-criação.

### Visualizando o progresso das pré-compilações
Você pode visualizar o status atual da última execução do fluxo de trabalho para cada configuração de pré-compilação que você definiu na página de {% data variables.product.prodname_codespaces %} das configurações do repositório. Por exemplo, "Atualmente em execução" ou "Última execução 1 hora atrás".

Para ver a saída de registro para a última execução do fluxo de trabalho de pré-compilação, clique em **Ver saída**.

![O botão 'Ver saída'](/assets/images/help/codespaces/prebuilds-see-output.png)

Ele exibe a saída da execução mais recente do fluxo de trabalho na aba **Ações**.

![A saída de fluxo de trabalho de pré-compilação](/assets/images/help/codespaces/prebuilds-log-output.png)

Como alternativa, para visualizar todas as execuções de fluxo de trabalho pré-compilado associadas a um branch especificada, clique no botão de retiências e selecione **Visualizar execuções** no menu suspenso.

![A opção 'Visualizar execuções' no menu suspenso](/assets/images/help/codespaces/prebuilds-view-runs.png)

Exibe o histórico de execução de fluxo de trabalho para pré-compilações para o branch associado.

![Histórico de execução do fluxo de trabalho](/assets/images/help/codespaces/prebuilds-workflow-runs.png)

### Editando uma configuração de pré-compilação

1. Na página de {% data variables.product.prodname_codespaces %} das configurações do repositório, clique nas reticências à direita da configuração de pré-compilação que você deseja editar.
1. No menu suspenso, clique em **Editar**.

   ![A opção 'Editar' no menu suspenso](/assets/images/help/codespaces/prebuilds-edit.png)

1. Faça as alterações necessárias na configuração de pré-compilação e, em seguida, clique em **Atualizar**.

   {% data reusables.codespaces.prebuilds-permission-authorization %}


### Desabilitando configuração de pré-compilação

Para pausar a atualização das pré-compilações para uma configuração, você pode desabilitar as execuções de fluxo de trabalho para a configuração. Desabilitar as execuções de fluxo de trabalho para uma configuração de pré-compilação não exclui nenhuma pré-compilação previamente criado para essa configuração e, como resultado, os codespaces continuarão sendo gerados a partir de uma pré-compilação existente.

Desabilitar as execuções de fluxo de trabalho para uma configuração de pré-compilação é útil se você precisar investigar as falhas de criação de modelo.

1. Na página de {% data variables.product.prodname_codespaces %} das configurações do repositório, clique nas reticências à direita da configuração de pré-compilação que você deseja desabilitar.
1. No menu suspenso, clique em **Desabilitar execuções**.

   ![A opção "Desabilitar execuções" no menu suspenso](/assets/images/help/codespaces/prebuilds-disable.png)

1. Para confirmar que você deseja desabilitar esta configuração, clique em **OK**.

### Excluindo a configuração de uma pré-compilação

A exclusão de uma configuração de pré-compilação também exclui todas as pré-compilações criadas anteriormente para essa configuração. Como resultado, logo após você excluir uma configuração, as pré-compilações geradas por essa configuração não estarão disponíveis ao criar um novo codespace.

Depois que você excluir uma configuração de pré-compilação, as execuções do fluxo de trabalho que foram enfileirados ou iniciados ainda serão executadas. Elas serão listados no histórico de execução de fluxo de trabalho junto com execuções de fluxo de trabalho concluídas anteriormente.

1. Na página de {% data variables.product.prodname_codespaces %} das configurações do repositório, clique nas reticências à direita da configuração de pré-compilação que você deseja excluir.
1. No menu suspenso, clique em **Excluir**.

   ![A opção "Excluir" no menu suspenso](/assets/images/help/codespaces/prebuilds-delete.png)

1. Clique em **OK** para confirmar a exclusão.

### Acionar pré-compilações manualmente

Pode ser útil acionar manualmente a execução de um fluxo de trabalho para uma configuração de pré-compilação. Geralmente, isso só é necessário se você estiver depurando um problema com o fluxo de trabalho para uma configuração de pré-compilação.

1. Na página de {% data variables.product.prodname_codespaces %} das configurações do repositório, clique nas reticências à direita da configuração de pré-compilação cujo fluxo de trabalho você deseja acionar.
1. No menu suspenso, clique em **Acionar manualmente**.

   ![A opção "Acionar manualmente" no menu suspenso](/assets/images/help/codespaces/prebuilds-manually-trigger.png)

## Leia mais

- "[Solucionar problemas de pré-compilações](/codespaces/troubleshooting/troubleshooting-prebuilds)"
