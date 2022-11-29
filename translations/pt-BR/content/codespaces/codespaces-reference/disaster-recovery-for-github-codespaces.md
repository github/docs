---
title: Recuperação de desastres do GitHub Codespaces
intro: 'Este artigo descreve a orientação para um cenário de recuperação de desastre, quando uma região inteira sofre uma interrupção devido a um desastre natural de grandes proporções ou interrupção de serviço generalizada.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
shortTitle: Disaster recovery
redirect_from:
  - /codespaces/codespaces-reference/disaster-recovery-for-codespaces
ms.openlocfilehash: 9b892d6a24332e01174c819e2e88a91d1cdf9d65
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158810'
---
Trabalhamos muito para ter a certeza de que {% data variables.product.prodname_github_codespaces %} esteja sempre disponível para você. No entanto, forças além do nosso controle às vezes impactam o serviço de formas que podem causar interrupções de serviços não planejadas.

Embora os cenários de recuperação de desastres sejam raros, recomendamos que vocês se preparem para a possibilidade de haver uma interrupção de toda uma região. Se uma região inteira tiver uma interrupção do serviço, as cópias redundantes dos seus dados ficarão temporariamente indisponíveis.

A orientação a seguir fornece opções sobre como lidar com interrupções de serviço para toda a região onde seu codespace estiver implantado.

{% note %}

**Observação:** você pode reduzir o impacto potencial das interrupções em todo o serviço efetuando push para repositórios remotos com frequência.

{% endnote %}

## Opção 1: Crie um novo ritmo de código em outra região

No caso de uma interrupção regional, sugerimos que recrie o seu codespace em uma região não afetada para continuar trabalhando. Este novo código terá todas as alterações a partir do seu último push para {% data variables.product.prodname_dotcom %}. Para obter informações sobre como definir outra região manualmente, confira "[Como definir sua região padrão do {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)."

Otimize o tempo de recuperação configurando um `devcontainer.json` no repositório do projeto, que permite definir as ferramentas, os runtimes, as estruturas, as configurações do editor, as extensões e outras configurações necessárias para restaurar o ambiente de desenvolvimento automaticamente. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

## Opção 2: aguardar a recuperação

Nesse caso, nenhuma ação sua é necessária. Saiba que estamos trabalhando cuidadosamente para restaurar a disponibilidade do serviço. 

Você pode verificar o status do serviço atual no [Painel de Status](https://www.githubstatus.com/).

## Opção 3: Clonar o repositório localmente ou editá-lo no navegador

Embora os {% data variables.product.prodname_github_codespaces %} ofereçam o benefício de um ambiente de desenvolvedor predefinido, o código-fonte sempre deve estar acessível por meio do repositório hospedado no {% data variables.product.prodname_dotcom_the_website %}. Na hipótese de uma interrupção dos {% data variables.product.prodname_github_codespaces %}, você ainda pode clonar o repositório localmente ou editar arquivos no editor do navegador do {% data variables.product.company_short %}. Para obter mais informações, confira "[Como editar arquivos](/repositories/working-with-files/managing-files/editing-files)".

Embora esta opção não configure um ambiente de desenvolvimento para você, ela permitirá que você faça alterações no seu código-fonte, conforme necessário, enquanto você aguarda que a interrupção do serviço seja resolvida.

## Opção 4: usar a extensão Contêineres de Desenvolvimento e o Docker para um ambiente conteinerizado local

Se o repositório tiver um `devcontainer.json`, considere usar a [extensão Contêineres de Desenvolvimento](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) no {% data variables.product.prodname_vscode %} para compilar e anexar a um contêiner de desenvolvimento local do repositório. O tempo de configuração desta opção irá variar dependendo das suas especificações locais e da complexidade da configuração do seu contêiner de desenvolvimento. Para obter mais informações, confira [Desenvolvimento em um contêiner](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume) na documentação do {% data variables.product.prodname_vscode_shortname %}.

{% note %}

**Observação:** verifique se a configuração local atende aos [requisitos mínimos](https://code.visualstudio.com/docs/remote/containers#_system-requirements) antes de tentar selecionar essa opção.

{% endnote %}
