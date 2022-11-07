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
ms.openlocfilehash: 2a99d33f66ab9aa9d33d609124a7f0b2a80bb0c9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106898'
---
## O que é um codespace?

Um codespace é um ambiente de desenvolvimento hospedado na nuvem. Você pode personalizar seu projeto para o {% data variables.product.prodname_github_codespaces %} fazendo commit dos [arquivos de configuração](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project) no seu repositório (geralmente conhecido como configuração como código), o que cria uma configuração de codespace repetível para todos os usuários do projeto.

O {% data variables.product.prodname_github_codespaces %} é executado em uma série de opções de computação baseadas em VM, hospedadas em {% data variables.location.product_location %}, em que você pode configurar computadores com 2 ou até 32 núcleos. Você pode conectar-se aos seus codespaces a partir do navegador ou localmente usando o {% data variables.product.prodname_vscode %}.

![Um diagrama que mostra como os {% data variables.product.prodname_github_codespaces %} funcionam](/assets/images/help/codespaces/codespaces-diagram.png)

## Como usar o {% data variables.product.prodname_github_codespaces %}

Você pode criar um codespace a partir de qualquer branch ou commit no seu repositório e começar a desenvolver usando recursos de computação baseados na nuvem. {% data reusables.codespaces.links-to-get-started %}

Para personalizar os runtimes e as ferramentas em seu codespace, você pode criar uma ou mais configurações de contêiner de desenvolvimento para seu repositório. A adição de configurações de contêiner de desenvolvimento ao seu repositório permite que você defina uma escolha de diferentes ambientes de desenvolvimento apropriados para o trabalho que as pessoas farão em seu repositório. 

Se você não definir nenhuma configuração de contêiner de desenvolvimento, o {% data variables.product.prodname_github_codespaces %} clonará seu repositório em um ambiente com a imagem de codespace padrão que inclui muitas ferramentas, linguagens e ambientes de execução. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

Você também pode personalizar aspectos do seu ambiente de codespace usando um repositório de [dotfiles](https://dotfiles.github.io/tutorials/) públicos e [Sincronização de Configurações](https://code.visualstudio.com/docs/editor/settings-sync). A personalização pode incluir preferências de shell, ferramentas adicionais, configurações do editor e extensões do {% data variables.product.prodname_vscode_shortname %}. Para obter mais informações, confira "[Como personalizar seu codespace](/codespaces/customizing-your-codespace)".

## Sobre a cobrança do {% data variables.product.prodname_codespaces %}

Para obter informações sobre preços, armazenamento e uso dos {% data variables.product.prodname_github_codespaces %}, confira "[Sobre a cobrança dos {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

{% data reusables.codespaces.codespaces-monthly-billing %} Para obter informações de como os proprietários de organizações e os gerentes de cobrança podem gerenciar o limite de gastos dod {% data variables.product.prodname_github_codespaces %} de uma organização, confira "[Como gerenciar o limite de gastos do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".

Você pode ver quem pagará por um codespace antes de criá-lo. Para obter mais informações, confira "[Como criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".
