---
title: Visão geral do GitHub Codespaces
shortTitle: Overview
product: '{% data reusables.gated-features.codespaces %}'
intro: 'Este guia apresenta o {% data variables.product.prodname_github_codespaces %} e fornece informações sobre como ele funciona e como usá-lo.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/about-codespaces
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
  - /codespaces/about-codespaces
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
ms.openlocfilehash: ea92784b32d63e5f5d9268a1077009ea7bf8b382
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147111215'
---
## O que é um codespace?

Um codespace é um ambiente de desenvolvimento hospedado na nuvem. Você pode personalizar seu projeto para o {% data variables.product.prodname_github_codespaces %} fazendo commit dos [arquivos de configuração](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project) no seu repositório (geralmente conhecido como configuração como código), o que cria uma configuração de codespace repetível para todos os usuários do projeto.

O {% data variables.product.prodname_github_codespaces %} é executado em uma série de opções de computação baseadas em VM, hospedadas em {% data variables.product.product_location %}, em que você pode configurar de 2 a 32 máquinas centrais. Você pode conectar-se aos seus codespaces a partir do navegador ou localmente usando o {% data variables.product.prodname_vscode %}.

![Um diagrama que mostra como {% data variables.product.prodname_codespaces %} funciona](/assets/images/help/codespaces/codespaces-diagram.png)

## Como usar o {% data variables.product.prodname_github_codespaces %}

Você pode criar um codespace a partir de qualquer branch ou commit no seu repositório e começar a desenvolver usando recursos de computação baseados na nuvem. {% data reusables.codespaces.links-to-get-started %}

Para personalizar os runtimes e as ferramentas em seu codespace, você pode criar uma ou mais configurações de contêiner de desenvolvimento para seu repositório. A adição de configurações de contêiner de desenvolvimento ao seu repositório permite que você defina uma escolha de diferentes ambientes de desenvolvimento apropriados para o trabalho que as pessoas farão em seu repositório. 

Se você não definir nenhuma configuração de contêiner de desenvolvimento, o {% data variables.product.prodname_github_codespaces %} clonará seu repositório em um ambiente com a imagem de codespace padrão que inclui muitas ferramentas, linguagens e ambientes de execução. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

Você também pode personalizar aspectos do seu ambiente de codespace usando um repositório de [dotfiles](https://dotfiles.github.io/tutorials/) públicos e [Sincronização de Configurações](https://code.visualstudio.com/docs/editor/settings-sync). A personalização pode incluir preferências de shell, ferramentas adicionais, configurações do editor e extensões do {% data variables.product.prodname_vscode_shortname %}. Para obter mais informações, confira "[Como personalizar seu codespace](/codespaces/customizing-your-codespace)".

## Sobre a cobrança do {% data variables.product.prodname_codespaces %}

Para obter informações sobre preços, armazenamento e uso do {% data variables.product.prodname_codespaces %}, confira "[Como gerenciar a cobrança do {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)".

{% data reusables.codespaces.codespaces-spending-limit-requirement %} Para obter informações sobre como proprietários de organizações e os gerentes de cobrança podem gerenciar o limite de gastos para o {% data variables.product.prodname_codespaces %} para uma organização, confira "[Como gerenciar seu limite de gastos do {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".
