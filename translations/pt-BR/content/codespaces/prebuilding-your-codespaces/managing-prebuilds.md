---
title: Gerenciando pré-compilações
shortTitle: Manage prebuilds
intro: 'Você pode revisar, modificar e excluir as configurações de pré-compilação do seu repositório.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5257419e4c2f3750cfb6b2c6d5e115d29b4b4342
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147548085'
---
## Verificando, alterando e excluindo suas configurações de pré-compilação

As predefinições que você configura para um repositório são criadas e atualizadas usando um fluxo de trabalho do {% data variables.product.prodname_actions %}, gerenciado pelo serviço de {% data variables.product.prodname_github_codespaces %}. 

Dependendo das configurações em uma configuração de pré-compilação, o fluxo de trabalho para atualizar a pré-compilação pode ser acionado por estes eventos:

* Criando ou atualizando a configuração de pré-compilação
* Enviando por push um commit ou um pull request para um branch configurado para pré-compilações
* Alteração a qualquer um dos arquivos de configuração do contêiner de desenvolvimento
* Um agendamento que você definiu na configuração de pré-compilação
* Acionando manualmente o fluxo de trabalho

As configurações na configuração de pré-compilação determinam quais eventos disparam automaticamente uma atualização da pré-compilação. Para obter mais informações, confira "[Como configurar pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)". 

As pessoas com acesso de administrador a um repositório podem verificar o progresso de pré-compilações, editar e excluir configurações de pré-criação. 

### Visualizando o progresso das pré-compilações
Você pode visualizar o status atual da última execução do fluxo de trabalho para cada configuração de pré-compilação que você definiu na página de {% data variables.product.prodname_codespaces %} das configurações do repositório. Por exemplo, "Atualmente em execução" ou "Última execução 1 hora atrás".

Para ver a saída do log para a última execução do fluxo de trabalho pré-build, clique em **Ver saída**.

![O botão 'Ver saída'](/assets/images/help/codespaces/prebuilds-see-output.png) 

Isso exibirá a saída da execução mais recente do fluxo de trabalho na guia **Ações**.

![A saída de fluxo de trabalho de pré-compilação](/assets/images/help/codespaces/prebuilds-log-output.png) 

Como alternativa, para ver todas as execuções de fluxo de trabalho pré-build associadas ao branch especificado, clique no botão de reticências e escolha **Exibir execuções** no menu suspenso.

![A opção 'Visualizar execuções' no menu suspenso](/assets/images/help/codespaces/prebuilds-view-runs.png) 

Exibe o histórico de execução de fluxo de trabalho para pré-compilações para o branch associado.

![Histórico de execução do fluxo de trabalho](/assets/images/help/codespaces/prebuilds-workflow-runs.png) 

### Editando uma configuração de pré-compilação

1. Na página de {% data variables.product.prodname_codespaces %} das configurações do repositório, clique nas reticências à direita da configuração de pré-compilação que você deseja editar.
1. No menu suspenso, clique em **Editar**.
 
   ![A opção 'Editar' no menu suspenso](/assets/images/help/codespaces/prebuilds-edit.png) 

1. Faça as alterações necessárias na configuração de pré-build e clique em **Atualizar**. 

   {% data reusables.codespaces.prebuilds-permission-authorization %}


### Desabilitar uma configuração de pré-compilação

Para pausar a atualização da pré-compilação de uma configuração, você pode desabilitar execuções de fluxo de trabalho da configuração. Desabilitar as execuções de fluxo de trabalho para uma configuração de pré-compilação não exclui nenhuma pré-compilação criada anteriormente para essa configuração e, como resultado, os espaços de código continuarão a ser gerados a partir de uma pré-compilação existente.

Desabilitar as execuções de fluxo de trabalho em uma configuração de pré-compilação será útil se você precisar investigar falhas de criação de modelo.

1. Na página do {% data variables.product.prodname_codespaces %} das configurações do repositório, clique nas reticências à direita da configuração de pré-compilação que você deseja desabilitar.
1. No menu suspenso, clique em **Desabilitar execuções**.

   ![A opção "Desabilitar execuções" no menu suspenso](/assets/images/help/codespaces/prebuilds-disable.png)

1. Para confirmar se você deseja desabilitar essa configuração, clique em **OK**.

### Excluindo uma configuração de pré-compilação

A exclusão de uma configuração de pré-compilação também exclui todas as pré-compilações criadas anteriormente para essa configuração. Como resultado, logo após você excluir uma configuração, as pré-compilações geradas por essa configuração não estarão disponíveis ao criar um novo codespace.

Depois que você excluir uma configuração de pré-compilação, as execuções do fluxo de trabalho que foram enfileirados ou iniciados ainda serão executadas. Elas serão listados no histórico de execução de fluxo de trabalho junto com execuções de fluxo de trabalho concluídas anteriormente.

1. Na página de {% data variables.product.prodname_codespaces %} das configurações do repositório, clique nas reticências à direita da configuração de pré-compilação que você deseja excluir.
1. No menu suspenso, clique em **Excluir**.

   ![A opção "Excluir" no menu suspenso](/assets/images/help/codespaces/prebuilds-delete.png)

1. Clique em **OK** para confirmar a exclusão.

### Acionar pré-compilações manualmente

Pode ser útil acionar manualmente a execução de um fluxo de trabalho para uma configuração de pré-compilação. Geralmente, isso só é necessário se você estiver depurando um problema com o fluxo de trabalho para uma configuração de pré-compilação.

1. Na página de {% data variables.product.prodname_codespaces %} das configurações do repositório, clique nas reticências à direita da configuração de pré-compilação cujo fluxo de trabalho você deseja acionar.
1. No menu suspenso, clique em **Disparar manualmente**.

   ![A opção "Acionar manualmente" no menu suspenso](/assets/images/help/codespaces/prebuilds-manually-trigger.png) 

## Leitura adicional

- "[Solução de problemas de pré-builds](/codespaces/troubleshooting/troubleshooting-prebuilds)"
