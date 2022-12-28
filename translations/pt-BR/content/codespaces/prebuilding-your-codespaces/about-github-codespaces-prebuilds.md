---
title: Sobre as pré-compilações do GitHub Codespaces
shortTitle: About prebuilds
intro: 'As pré-compilações {% data variables.product.prodname_github_codespaces %} ajudam a acelerar a criação de codespaces para repositórios grandes ou complexos.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
redirect_from:
  - /codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds
ms.openlocfilehash: eecb77b541cc735fcf788fbc5da6960cabad899d
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191915'
---
## Visão geral

{% data reusables.codespaces.prebuilds-definition %}

Se atualmente você leva mais de dois minutos para criar um codespace para um repositório, é provável que possa se beneficiar do uso de pré-compilações. Isso ocorre porque, com uma pré-compilação, qualquer código-fonte, extensões de editor, dependências de projetos, comandos e configurações já foram baixadas, instaladas e aplicadas antes de criar um codespace para o seu projeto. 

Por padrão, sempre que você enviar alterações por push para o seu repositório, o {% data variables.product.prodname_github_codespaces %} usará {% data variables.product.prodname_actions %} para atualizar automaticamente suas pré-compilações.

Quando os prebuilds estiverem disponíveis para um branch específico de um repositório, um arquivo de configuração de contêiner de desenvolvimento específico e para sua região, você verá o rótulo "Prebuild de {% octicon "zap" aria-label="The zap icon" %} pronto" na lista de opções de tipo de computador quando criar um codespace. Se um prebuild ainda estiver sendo criado, você verá o rótulo "{% octicon "history" aria-label="The history icon" %} Prebuild em andamento. Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".

![A caixa de diálogo para escolher um tipo de máquina](/assets/images/help/codespaces/choose-custom-machine-type.png)

Quando você cria um codespace a partir de um modelo na página "Seus codespaces", {% data variables.product.prodname_dotcom %} pode usar automaticamente uma pré-compilação para acelerar o tempo de criação. Para saber mais sobre modelos, confira "[Como criar um codespace com base em um modelo](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)".

## O processo de pré-compilação

Para criar uma pré-compilação, defina uma configuração de pré-compilação. Quando você salva a configuração, um fluxo de trabalho do {% data variables.product.prodname_actions %} é executado para criar cada uma das pré-compilações necessárias – um fluxo de trabalho por pré-compilação. Os fluxos de trabalho também são executados sempre que as pré-compilações para sua configuração precisam ser atualizadas. Isso pode acontecer em intervalos programados, em pushs para um repositório habilitado para pré-compilação ou quando você altera a configuração do contêiner de desenvolvimento. Para obter mais informações, confira "[Como configurar pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".  

Quando um fluxo de trabalho de configuração de pré-compilação é executado, o {% data variables.product.prodname_dotcom %} cria um codespace temporário, executando operações de configuração até e incluindo quaisquer comandos `onCreateCommand` e `updateContentCommand` no arquivo `devcontainer.json`. Nenhum comando `postCreateCommand` é executado durante a criação de uma pré-compilação. Para obter mais informações sobre esses comandos, confira a [`devcontainer.json`referência](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) na documentação do {% data variables.product.prodname_vscode_shortname %}. Um instantâneo do contêiner gerado é então obtido e armazenado.

Assim como acontece com outros fluxos de trabalho de {% data variables.product.prodname_actions %}, a execução de um fluxo de trabalho de configuração de pré-compilação consumirá alguns dos minutos {% data variables.product.prodname_actions %} incluídos em sua conta, se você tiver algum, ou incorrerá em encargos por {% data variables.product.prodname_actions %} minutos. O armazenamento de pré-compilações do codespace é cobrado da mesma forma que o armazenamento de codespaces ativos ou interrompidos. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)".

Quando você cria um codespace a partir de uma pré-compilação, {% data variables.product.prodname_dotcom %} baixa o instantâneo de contêiner existente do armazenamento e o implanta em uma nova máquina virtual, concluindo os comandos restantes especificados na configuração do contêiner de desenvolvimento. Como muitas operações já foram executadas, como clonar o repositório, criar um codespace a partir de uma pré-compilação pode ser substancialmente mais rápido do que criá-lo sem pré-compilação. Isso é verdade quando o repositório é grande e/ou os comandos `onCreateCommand` demoram muito para serem executados.

## Sobre fazer push de alterações em branches com pré-criação

Por padrão, cada push para um branch que tem uma configuração de pré-compilação resulta em um fluxo de trabalho {% data variables.product.prodname_actions %} gerenciado por {% data variables.product.prodname_dotcom %} executado para atualizar a pré-compilação. O fluxo de trabalho da pré-criação tem um limite de concorrência de uma execução de fluxo de trabalho de cada vez para uma determinada configuração de pré-compilação, a não ser que tenham sido feitas alterações que afetem a configuração do contêiner de desenvolvimento do repositório associado. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)". Se uma execução já estiver em andamento, a execução do fluxo de trabalho que foi enfileirada mais recentemente será executada em seguida, após a conclusão da execução atual. 

Com o conjunto de pré-compilação a ser atualizado em cada envio, isso significa que, se houver envios muito frequentes para seu repositório, as atualizações de pré-compilação ocorrerão pelo menos com a frequência necessária para executar o fluxo de trabalho de pré-compilação. Ou seja, se a execução do fluxo de trabalho normalmente leva uma hora para ser concluída, serão criados prebuilds para o repositório em aproximadamente uma hora, se a execução for bem sucedida, ou mais frequentemente se houve pushes que alterem o contêiner de desenvolvimento no branch.

Por exemplo, vamos imaginar que 5 pushes são feitos, em rápida sucessão, para um branch que tem uma configuração de pré-compilação. Nesta situação:

* Uma execução de fluxo de trabalho é iniciada para o primeiro push, para atualizar a pré-compilação.
* Se os 4 pushes restantes não afetarem a configuração do contêiner de desenvolvimento, o fluxo de trabalho será executado em um estado de "pendência". 
  
  Se qualquer um dos 4 pushes restantes alterar a configuração do contêiner de desenvolvimento, o serviço não irá ignorá-lo e irá executar imediatamente o fluxo de trabalho pré-criação, atualizando a pré-compilação adequadamente se puder. 

* Assim que a primeira execução for concluída, as execuções de fluxo de trabalho para push 2, 3 e 4 serão canceladas e o último fluxo de trabalho enfileirado (para push 5) será executado e atualizará a pré-compilação. 
