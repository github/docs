---
ms.openlocfilehash: 5f6285fe19915c3962b43cb45a26e65144607788
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062399"
---
Personalize seu codespace ajustando a quantidade de vCPUs e RAM, [adicionando dotfiles para personalizar seu ambiente](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account) ou modificando as ferramentas e os scripts instalados.

{% data variables.product.prodname_codespaces %} usa um arquivo chamado `devcontainer.json` para configurar o contêiner de desenvolvimento que você usa quando trabalha em um codespace. Cada repositório pode conter um ou mais arquivos `devcontainer.json`, para fornecer exatamente o ambiente de desenvolvimento necessário para trabalhar em seu código em um codespace. 

Na inicialização, {% data variables.product.prodname_codespaces %} usa um arquivo `devcontainer.json` e todos os arquivos dependentes que compõem a configuração do contêiner de desenvolvimento, para instalar ferramentas e runtimes, além de executar outras tarefas de instalação necessárias pelo projeto. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".
