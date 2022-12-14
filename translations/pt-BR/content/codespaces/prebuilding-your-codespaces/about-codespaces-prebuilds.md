---
title: Sobre as pré-compilações de codespaces
shortTitle: About prebuilds
intro: Os predefinições de codespaces ajudam a acelerar a criação de codespaces para repositórios grandes ou complexos.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 4653ead4a97ff1ff87ac8029fb215fdc8ae56566
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381184"
---
## <a name="overview"></a>Visão geral

O predefinição de codespaces permite que você seja mais produtivo e acesse o codespace com mais rapidez, principalmente quando o repositório é grande ou complexo e os novos codespaces demoram mais de dois minutos para serem iniciados. Isso ocorre porque qualquer código-fonte, extensões de editor, dependências de projetos, comandos e configurações já foram baixadas, instaladas e aplicadas antes de criar um codespace para o seu projeto. Pense em uma pré-compilação como um modelo pronto para um codespace. 

Por padrão, sempre que você enviar alterações por push para o seu repositório, {% data variables.product.prodname_codespaces %} usará {% data variables.product.prodname_actions %} para atualizar automaticamente seus prebuilds.

Quando os prebuilds estiverem disponíveis para um branch específico de um repositório e para sua região, você verá o rótulo "Prebuild de {% octicon "zap" aria-label="The zap icon" %} pronto" na lista de opções de tipo de computador quando criar um codespace. Se um prebuild ainda estiver sendo criado, você verá o rótulo "{% octicon "history" aria-label="The history icon" %} Prebuild em andamento. Para obter mais informações, confira "[Como criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

![A caixa de diálogo para escolher um tipo de máquina](/assets/images/help/codespaces/choose-custom-machine-type.png)

{% note %}

{% data reusables.codespaces.prebuilds-not-available %}

{% endnote %}

## <a name="about-billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>Sobre a cobrança para pré-criações de {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.billing-for-prebuilds %} Para obter detalhes sobre os preços de armazenamento do {% data variables.product.prodname_codespaces %}, confira "[Sobre a cobrança do {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)". 

O uso de codespaces criados usando pré-criações é cobrado na mesma frequência que os codespaces regulares.

## <a name="about-pushing-changes-to-prebuild-enabled-branches"></a>Sobre fazer push de alterações em branches com pré-criação

Por padrão, cada push em um branch com uma configuração de prebuild resulta em um fluxo de trabalho de ações gerenciadas por {% data variables.product.prodname_dotcom %} para atualizar o modelo de prebuild. O fluxo de trabalho da pré-criação tem um limite de concorrência de uma execução de fluxo de trabalho de cada vez para uma determinada configuração de pré-compilação, a não ser que tenham sido feitas alterações que afetem a configuração do contêiner de desenvolvimento do repositório associado. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)". Se uma execução já estiver em andamento, a execução do fluxo de trabalho que foi enfileirada mais recentemente será executada a seguir, depois que a execução atual for concluída. 

Com o modelo de prebuild para ser atualizado em cada push, isso significa que, se houver pushs muito frequentes para o repositório, as atualizações de modelo de prebuild ocorrerão pelo menos quantas vezes forem necessárias para executar o fluxo de trabalho de prebuild. Ou seja, se a execução do fluxo de trabalho normalmente leva uma hora para ser concluída, serão criados prebuilds para o repositório em aproximadamente uma hora, se a execução for bem sucedida, ou mais frequentemente se houve pushes que alterem o contêiner de desenvolvimento no branch.

Por exemplo, vamos imaginar que 5 pushes são feitos, em rápida sucessão, para um branch que tem uma configuração de pré-compilação. Nesta situação:

* A execução de um fluxo de trabalho é iniciada para o primeiro push, para atualizar o modelo de pré-compilação.
* Se os 4 pushes restantes não afetarem a configuração do contêiner de desenvolvimento, o fluxo de trabalho será executado em um estado de "pendência". 
  
  Se qualquer um dos 4 pushes restantes alterar a configuração do contêiner de desenvolvimento, o serviço não irá ignorá-lo e irá executar imediatamente o fluxo de trabalho pré-criação, atualizando a pré-compilação adequadamente se puder. 

* Quando a primeira execução for concluída, as execuções dos fluxos de trabalho para os pushes 2, 3 e 4 serão canceladas, e o último fluxo de trabalho na fila (para push 5) será executado e será atualizado o modelo de pré-compilação. 
