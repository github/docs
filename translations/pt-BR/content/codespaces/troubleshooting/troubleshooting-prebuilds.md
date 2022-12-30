---
title: Solução de problemas de pré-compilações
shortTitle: Codespaces prebuilds
intro: Você pode usar as pré-compilações para acelerar a criação de codespaces. Este artigo fornece etapas de solução de problemas para problemas comuns com pré-compilações.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b8c45f9eae6094b78026d055ebea27c3748a8681
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158882'
---
Para obter mais informações sobre as predefinições dos {% data variables.product.prodname_github_codespaces %}, confira "[Como criar predefinições de codespaces](/codespaces/prebuilding-your-codespaces)".

## Verificando se um código foi criado a partir de uma pré-compilação?

Ao criar um codespace, você pode escolher o tipo de máquina virtual que deseja usar. Se uma pré-compilação estiver disponível para o tipo de máquina virtual, "{% octicon "zap" aria-label="The zap icon" %} Pré-compilação pronta" será exibido ao lado dela.

![Uma lista de tipos de computadores disponíveis](/assets/images/help/codespaces/choose-custom-machine-type.png)

Se você tiver a preferência do editor dos {% data variables.product.prodname_github_codespaces %} definida como "{% data variables.product.prodname_vscode %} para Web", a página "Configurar o codespace" mostrará a mensagem "Codespace predefinido encontrado" se uma predefinição estiver sendo usada. 

![Mensagem 'codespace pré-compilado encontrado'](/assets/images/help/codespaces/prebuilt-codespace-found.png)

Da mesma forma, se a sua preferência de editor for "{% data variables.product.prodname_vscode_shortname %}", o terminal integrado conterá a mensagem "Você está em um codespace pré-compilado definido pela configuração de pré-compilação do seu repositório" ao criar um novo codespace. Para obter mais informações, confira "[Como configurar o editor padrão do {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".

Depois de criar um codespace, você pode verificar se ele foi criado a partir de uma pré-compilação executando o seguinte comando {% data variables.product.prodname_cli %} no terminal:

```shell{:copy}
gh api /user/codespaces/$CODESPACE_NAME --jq .prebuild
```

Isso retornará `true` se o codespace tiver sido criado com um pré-build.

Como alternativa, se a {% data variables.product.prodname_cli %} (`gh`) não estiver instalada, use o seguinte comando, que retornará `createFromPrebuild` se o codespace tiver sido criado com base em um pré-build: 

```shell{:copy}
cat /workspaces/.codespaces/shared/environment-variables.json | jq '.ACTION_NAME'
```

## A etiqueta "Pré-compilação pronta" às vezes está ausente

Você pode notar que, às vezes, quando você cria um novo codespace a partir de um branch habilitado por uma pré-compilaçã, a etiqueta "Pré-compilação de {% octicon "zap" aria-label="The zap icon" %} pronta" não é exibida na caixa de diálogo para escolher um tipo de máquina. Isto significa que pré-compilações não estão disponíveis no momento.

Por padrão, cada vez que você enviar um branch de pré-compilação habilitado por push, a pré-compilação será atualizada. Se o push envolver uma mudança na configuração do contêiner de desenvolvimento, enquanto a atualização está em andamento, a etiqueta "Pré-compilação de {% octicon "zap" aria-label="The zap icon" %} pronta" será removida da lista de tipos de máquinas. Durante esse tempo, você ainda pode criar codespaces sem uma pré-compilação. Se necessário, você pode reduzir as ocasiões em que as pré-compilações estão indisponíveis para um repositório, definindo que a pré-compilação seja atualizada somente quando você fizer uma alteração nos arquivos de configuração do contêiner de desenvolvimento ou apenas em um agendamento personalizado. Para obter mais informações, confira "[Como configurar pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".

Se seu branch não estiver especificamente habilitado para pré-compilações, ele ainda poderá se beneficiar de pré-compilações se ele foi criado a partir de um branch habilitado por pré-compilação. No entanto, se a configuração do contêiner de desenvolvimento for alterada no seu branch, de modo que não seja igual à configuração no branch de base, as pré-compilações não estarão mais disponíveis em seu branch.

Essas são as coisas a serem verificadas se a etiqueta " Pré-compilação de {% octicon "zap" aria-label="The zap icon" %} pronta" não for exibido para um determinado branch:

* Confirme que existe uma configuração de pré-compilação para este branch. Se você não for administrador do repositório, entre em contato com um para confirmar. 
* Confirme que a configuração de pré-compilação inclui sua região.
* Verifique se uma alteração para a configuração do contêiner de desenvolvimento foi enviada por push para o branch habilitado pela pré-compilação recentemente. Em caso afirmativo, geralmente você terá que esperar até que a execução desse fluxo de trabalho de pré-compilação execute este push por completo antes que as pré-compilações estejam disponíveis novamente.
* Se nenhuma alteração de configuração tiver sido feita recentemente, acesse a guia **Ações** do repositório, clique em **{% octicon "codespaces" aria-label="The Codespaces icon" %} Pré-builds do {% data variables.product.prodname_codespaces %}** na lista de fluxos de trabalho e verifique se as execuções de fluxo de trabalho pré-compiladas para o branch estão sendo bem-sucedidas. Se as execuções mais recentes de um fluxo de trabalho falharem e uma ou mais dessas execuções com falha contiverem alterações na configuração do contêiner de desenvolvimento, não haverá pré-compilações disponíveis para o branch associado. 

## Alguns recursos não podem ser acessados em codespaces criados usando um prebuild

Se o arquivo de configuração `devcontainer.json` de uma configuração de prebuild especificar que as permissões de acesso a outros repositórios são necessárias, o administrador do repositório deverá autorizar essas permissões quando criar ou atualizar a configuração de prebuild. Se o administrador não conceder todas as permissões solicitadas, haverá uma chance de que possam ocorrer problemas no prebuild e em codespaces criados com base nesse prebuild. Isso será verdadeiro mesmo que o usuário que criar um codespace com base nesse prebuild _conceder_ todas as permissões quando for solicitado a fazê-lo.

## Solução de problemas de execuções de fluxo de trabalho com falha para pré-compilações

### Aumentar o limite de gastos do {% data variables.product.prodname_actions %} 

As predefinições são criadas e atualizadas usando o {% data variables.product.prodname_actions %}. Os fluxos de trabalho de predefinição falharão se você tiver usado todos os minutos do {% data variables.product.prodname_actions %} e tiver atingido o limite de gastos. Se isso ocorrer, você poderá aumentar o limite de gastos do {% data variables.product.prodname_actions %} para permitir que os fluxos de trabalho sejam executados. Para obter mais informações, confira "[Como gerenciar limites de gastos do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)".

### Como autorizar permissões de acesso

Se o arquivo de configuração `devcontainer.json` de uma configuração de prebuild for atualizado para especificar que as permissões de acesso a outros repositórios são necessárias e um administrador de repositório não tiver sido solicitado a autorizar essas permissões para a configuração de prebuild, o fluxo de trabalho de prebuild poderá falhar. Tente atualizar a configuração de prebuild, sem fazer nenhuma alteração. Se, quando você clicar em **Atualizar**, a página de autorização for exibida, verifique se as permissões solicitadas são apropriadas e, nesse caso, autorize a solicitação. Para obter mais informações, confira "[Gerenciar prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds#editing-a-prebuild-configuration)" e "[Gerenciar acesso a outros repositórios em seu codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces#setting-additional-repository-permissions)".

Se o fluxo de trabalho executado para uma configuração de pré-compilação estiver falhando, você poderá desabilitar temporariamente a configuração de pré-compilação enquanto investiga. Para obter mais informações, confira "[Como gerenciar pré-compilações](/codespaces/prebuilding-your-codespaces/managing-prebuilds#disabling-a-prebuild-configuration)".

### Com impedir o uso de predefinições desatualizadas

Por padrão, se o fluxo de trabalho predefinição mais recente falhar, uma predefinição anterior da mesma combinação de repositório, branch e arquivo de configuração `devcontainer.json` será usada para criar codespaces. Esse comportamento é chamado de otimização de predefinição.

Recomendamos manter a otimização de predefinição habilitada, pois ela ajuda a garantir que os codespaces possam ser criados rapidamente mesmo quando não houver uma predefinição atualizada disponível. No entanto, como administrador de repositório, você poderá desabilitar a otimização de predefinição se os codespaces predefinidos não acompanharem o estado atual do branch. Se você desabilitar a otimização de predefinição, os codespaces da combinação relevante de repositório, branch e arquivo `devcontainer.json` serão criados sem uma predefinição se o fluxo de trabalho de predefinição mais recente falhar ou estiver em execução no momento.

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. À direita da configuração de predefinição afetada, selecione as reticências ( **...** ) e clique em **Editar**.

   ![Captura de tela de uma lista de predefinição, com a opção "Editar" realçada](/assets/images/help/codespaces/edit-prebuild-configuration.png)
1. Role até a parte inferior da página em "Editar configuração" e clique em **Mostrar opções avançadas**.

   ![Captura de tela da página de configuração de predefinição, com a opção "Mostrar opções avançadas" realçada](/assets/images/help/codespaces/show-advanced-options.png)
1. Se tiver certeza de que deseja desabilitar a configuração padrão, selecione **Desabilitar otimização de predefinição**.

   ![Captura de tela da seção de opção avançada e a configuração "Desabilitar a otimização de predefinição"](/assets/images/help/codespaces/disable-prebuild-optimization.png)
1. Para salvar a alteração, clique em **Atualizar**.

## Leitura adicional

- "[Como configurar pré-builds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[Como gerenciar pré-builds](/codespaces/prebuilding-your-codespaces/managing-prebuilds)"
