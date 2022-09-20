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
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 14c02804641eeb845c2b503eff92f38cac28d108
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147547981'
---
Para obter mais informações sobre os pré-builds do {% data variables.product.prodname_codespaces %}, confira "[Como pré-compilar seus codespaces](/codespaces/prebuilding-your-codespaces)".

## Verificando se um código foi criado a partir de uma pré-compilação?

Ao criar um codespace, você pode escolher o tipo de máquina virtual que deseja usar. Se uma pré-compilação estiver disponível para o tipo de máquina virtual, "{% octicon "zap" aria-label="The zap icon" %} Pré-compilação pronta" será exibido ao lado dela.

![Uma lista de tipos de computadores disponíveis](/assets/images/help/codespaces/choose-custom-machine-type.png)

Se você tiver a preferência do editor {% data variables.product.prodname_codespaces %} definida como "{% data variables.product.prodname_vscode %} para Web", a página "Configurar seu codespace" mostrará a mensagem "Codespace pré-compilado encontrado" se uma pré-compilação estiver sendo usada. 

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

Por padrão, cada vez que você enviar um branch de pré-compilação habilitado por push, a pré-compilação será atualizada. Se o push envolver uma mudança na configuração do contêiner de desenvolvimento, enquanto a atualização está em andamento, a etiqueta "Pré-compilação de {% octicon "zap" aria-label="The zap icon" %} pronta" será removida da lista de tipos de máquinas. Durante esse tempo, você ainda pode criar codespaces sem uma pré-compilação. Se necessário, você pode reduzir as ocasiões em que as pré-compilações estão indisponíveis para um repositório, definindo que a pré-compilação seja atualizada somente quando você fizer uma alteração nos arquivos de configuração do contêiner de desenvolvimento ou apenas em um agendamento personalizado. Para obter mais informações, confira "[Como configurar pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

Se seu branch não estiver especificamente habilitado para pré-compilações, ele ainda poderá se beneficiar de pré-compilações se ele foi criado a partir de um branch habilitado por pré-compilação. No entanto, se a configuração do contêiner de desenvolvimento for alterada no seu branch, de modo que não seja igual à configuração no branch de base, as pré-compilações não estarão mais disponíveis em seu branch.

Essas são as coisas a serem verificadas se a etiqueta " Pré-compilação de {% octicon "zap" aria-label="The zap icon" %} pronta" não for exibido para um determinado branch:

* Confirme que existe uma configuração de pré-compilação para este branch. Se você não for administrador do repositório, entre em contato com um para confirmar. 
* Confirme que a configuração de pré-compilação inclui sua região.
* Verifique se uma alteração para a configuração do contêiner de desenvolvimento foi enviada por push para o branch habilitado pela pré-compilação recentemente. Em caso afirmativo, geralmente você terá que esperar até que a execução desse fluxo de trabalho de pré-compilação execute este push por completo antes que as pré-compilações estejam disponíveis novamente.
* Se nenhuma alteração de configuração tiver sido feita recentemente, acesse a guia **Ações** do repositório, clique em **{% octicon "codespaces" aria-label="The Codespaces icon" %} Pré-builds do {% data variables.product.prodname_codespaces %}** na lista de fluxos de trabalho e verifique se as execuções de fluxo de trabalho pré-compiladas para o branch estão sendo bem-sucedidas. Se as execuções mais recentes de um fluxo de trabalho falharem e uma ou mais dessas execuções com falha contiverem alterações na configuração do contêiner de desenvolvimento, não haverá pré-compilações disponíveis para o branch associado. 

## Alguns recursos não podem ser acessados em codespaces criados usando um prebuild

Se o arquivo de configuração `devcontainer.json` de uma configuração de prebuild especificar que as permissões de acesso a outros repositórios são necessárias, o administrador do repositório deverá autorizar essas permissões quando criar ou atualizar a configuração de prebuild. Se o administrador não conceder todas as permissões solicitadas, haverá uma chance de que possam ocorrer problemas no prebuild e em codespaces criados com base nesse prebuild. Isso será verdadeiro mesmo que o usuário que criar um codespace com base nesse prebuild _conceder_ todas as permissões quando for solicitado a fazê-lo.

## Solução de problemas de execuções de fluxo de trabalho com falha para pré-compilações

Se o arquivo de configuração `devcontainer.json` de uma configuração de prebuild for atualizado para especificar que as permissões de acesso a outros repositórios são necessárias e um administrador de repositório não tiver sido solicitado a autorizar essas permissões para a configuração de prebuild, o fluxo de trabalho de prebuild poderá falhar. Tente atualizar a configuração de prebuild, sem fazer nenhuma alteração. Se, quando você clicar em **Atualizar**, a página de autorização for exibida, verifique se as permissões solicitadas são apropriadas e, nesse caso, autorize a solicitação. Para obter mais informações, confira "[Gerenciar prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds#editing-a-prebuild-configuration)" e "[Gerenciar acesso a outros repositórios em seu codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces#setting-additional-repository-permissions)".

Se o fluxo de trabalho executado para uma configuração de pré-compilação estiver falhando, você poderá desabilitar temporariamente a configuração de pré-compilação enquanto investiga. Para obter mais informações, confira "[Como gerenciar pré-compilações](/codespaces/prebuilding-your-codespaces/managing-prebuilds#disabling-a-prebuild-configuration)".

## Leitura adicional

- "[Como configurar pré-builds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[Como gerenciar pré-builds](/codespaces/prebuilding-your-codespaces/managing-prebuilds)"
