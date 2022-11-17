---
title: Visão geral do GitHub Codespaces
shortTitle: Overview
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
ms.openlocfilehash: a1618c86671bc5b06474c41803c6b34576a897aa
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160797'
---
## O que é um codespace?

Um codespace é um ambiente de desenvolvimento hospedado na nuvem. Você pode personalizar seu projeto para o {% data variables.product.prodname_github_codespaces %} fazendo commit dos [arquivos de configuração](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) no seu repositório (geralmente conhecido como configuração como código), o que cria uma configuração de codespace repetível para todos os usuários do projeto.

Cada codespace é executado em uma máquina virtual hospedada por {% data variables.product.prodname_dotcom %}. Você pode escolher o tipo de computador que deseja usar, dependendo dos recursos necessários. Vários tipos de computadores estão disponíveis, começando com um processador de dois núcleos, 4 GB de RAM e 32 GB de armazenamento. 

Você pode se conectar aos seus codespaces por meio do navegador, por meio do {% data variables.product.prodname_vscode %}, do aplicativo JetBrains Gateway ou usando a {% data variables.product.prodname_cli %}.

![Um diagrama que mostra como os {% data variables.product.prodname_github_codespaces %} funcionam](/assets/images/help/codespaces/codespaces-diagram.png)

## Como usar o {% data variables.product.prodname_github_codespaces %}

Para começar o desenvolvimento usando recursos de computação baseados na nuvem, crie um codespace com base em um modelo ou em qualquer branch ou faça commit em um repositório. Ao criar um codespace com base em um modelo, você pode começar com um modelo em branco ou escolher um modelo adequado para o trabalho que está fazendo.

{% data reusables.codespaces.links-to-get-started %}

### Como usar codespaces pertencentes à sua conta pessoal

Todas as contas pessoais do {% data variables.product.prodname_dotcom_the_website %} têm uma cota mensal de uso gratuito do {% data variables.product.prodname_github_codespaces %} incluída no plano Gratuito ou Pro. Comece a usar o {% data variables.product.prodname_github_codespaces %} na sua conta pessoal sem alterar nenhuma configuração ou fornecer detalhes de pagamento.

Você pode criar e usar um codespace para qualquer repositório que possa clonar. Também pode usar um modelo para criar codespaces que não estão inicialmente associados a um repositório. Se você criar um codespace por meio de um repositório de propriedade da organização, o uso do codespace será cobrado para a organização (se a organização estiver configurada para isso) ou para sua conta pessoal. Os codespaces criados com base em modelos são sempre cobrados na sua conta pessoal. 

{% data reusables.codespaces.codespaces-continue-by-paying %} 

### Como usar codespaces de propriedade da organização

Os proprietários da organização podem habilitar o uso do {% data variables.product.prodname_github_codespaces %}, faturável para a organização ou para a conta corporativa. Isso se aplica aos codespaces criados com base em repositórios pertencentes à organização. Para obter mais informações, confira "[Como habilitar {% data variables.product.prodname_github_codespaces %} para sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)". Defina um limite de gastos para uso do {% data variables.product.prodname_github_codespaces %} na sua organização ou na sua conta corporativa. Para obter mais informações, confira "[Como gerenciar limites de gastos do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)".

Se o uso de um codespace for cobrado para uma organização ou uma empresa, isso será mostrado quando o codespace for criado. Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)". Os codespaces que são cobrados para uma organização ou para a empresa-mãe pertencem à organização e podem ser excluídos por um proprietário da organização. Para obter mais informações, confira "[Como excluir um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)". 

### Como personalizar o {% data variables.product.prodname_github_codespaces %}

Para personalizar os runtimes e as ferramentas em seu codespace, você pode criar uma ou mais configurações de contêiner de desenvolvimento para seu repositório. A adição de configurações de contêiner de desenvolvimento ao seu repositório permite que você defina uma escolha de diferentes ambientes de desenvolvimento apropriados para o trabalho que as pessoas farão em seu repositório. 

Se você criar um codespace por meio de um repositório sem nenhuma configuração de contêiner de desenvolvimento, o {% data variables.product.prodname_github_codespaces %} clonará seu repositório em um ambiente com a imagem de codespace padrão que inclui muitas ferramentas, linguagens e ambientes de execução. Se você criar um codespace com base em um modelo, poderá começar com uma configuração inicial baseada na imagem padrão. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Personalize aspectos do ambiente do codespace usando um repositório de [dotfiles](https://dotfiles.github.io/tutorials/) público. Use dotfiles para definir aliases e preferências de shell ou para instalar sua preferência pessoal das ferramentas que deseja usar. Se você usar o {% data variables.product.prodname_github_codespaces %} no navegador ou no {% data variables.product.prodname_vscode %}, use [a Sincronização de Configurações](https://code.visualstudio.com/docs/editor/settings-sync) para fornecer ao editor de codespace as configurações, os atalhos de teclado, as extensões e os snippets idênticos que você configurou na instalação local do {% data variables.product.prodname_vscode %}. 

Para obter mais informações, confira "[Como personalizar seu codespace](/codespaces/customizing-your-codespace)".

## Cobrança do {% data variables.product.prodname_codespaces %}

Para obter informações sobre preços, armazenamento e uso dos {% data variables.product.prodname_github_codespaces %}, confira "[Sobre a cobrança dos {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

{% data reusables.codespaces.codespaces-monthly-billing %} Para obter informações de como os proprietários de organizações e os gerentes de cobrança podem gerenciar o limite de gastos dod {% data variables.product.prodname_github_codespaces %} de uma organização, confira "[Como gerenciar o limite de gastos do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".
