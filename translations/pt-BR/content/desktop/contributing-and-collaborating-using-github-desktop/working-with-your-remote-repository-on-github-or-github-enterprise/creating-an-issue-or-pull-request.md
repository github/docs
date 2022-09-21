---
title: Criar um problema ou um pull request
intro: É possível criar um problema ou um pull request para propor e colaborar com alterações em um repositório.
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
  - /desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request
versions:
  fpt: '*'
shortTitle: Create an issue or PR
ms.openlocfilehash: 5430c8f11d08efc3f21cf1c62f470f38dcc2f257
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095168'
---
## Sobre problemas e pull requests

Você pode usar problemas para rastrear ideias, erros, tarefas e outras informações importantes para o seu projeto. Você pode criar um problema no repositório do seu projeto com o {% data variables.product.prodname_desktop %}. Para obter mais informações sobre problemas, confira "[Sobre os problemas](/github/managing-your-work-on-github/about-issues)".

Após criar um branch e fazer alterações nos arquivos em um projeto, você poderá criar um pull request. Com um pull request, você pode propor, discutir e repetir alterações antes de fazer merge das alterações no projeto. Você pode criar um pull request no repositório do seu projeto com o {% data variables.product.prodname_desktop %}. Para obter mais informações sobre solicitações de pull, confira "[Sobre as solicitações de pull](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".

## Pré-requisitos

Antes de criar um pull request, você deverá fazer push das alterações em um branch em {% data variables.product.prodname_dotcom %}.
- Salve e faça o commit de quaisquer alterações no seu branch local. Para obter mais informações, confira "[Como fazer commit das alterações no seu projeto e revisá-las](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)".
- Faça push dos seus commits locais para o repositório remoto. Para obter mais informações, confira "[Como efetuar push de alterações para o GitHub](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)".
- Publique seu branch atual no {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como gerenciar branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)".

## Criar um problema

{% mac %}

1. Na barra de menus, use o menu suspenso **Repositório** e clique em **Criar Problema no {% data variables.product.prodname_dotcom %}** .
    ![Valor do repositório no menu Branch](/assets/images/help/desktop/create-issue-mac.png)
2. No {% data variables.product.prodname_dotcom %}, clique **em Introdução** para abrir um modelo de problema ou em **Abrir um problema em branco**.
    ![Opções de Criar problema](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. Na barra de menus, use o menu suspenso **Repositório** e clique em **Criar problema no {% data variables.product.prodname_dotcom %}** .
    ![O valor de Repositório no menu Branch](/assets/images/help/desktop/create-issue-windows.png)
2. No {% data variables.product.prodname_dotcom %}, clique **em Introdução** para abrir um modelo de problema ou em **Abrir um problema em branco**.
    ![Opções de Criar problema](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**Observação**: se os modelos de problemas não estiverem habilitados no seu repositório atual, o {% data variables.product.prodname_desktop %} direcionará você para um problema em branco no {% data variables.product.prodname_dotcom %}.

{% endnote %}

## Como criar uma solicitação de pull

{% mac %}

1. Alterne para o branch para o qual você deseja criar um pull request. Para obter mais informações, confira "[Como alternar entre branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Clique em **Criar Solicitação de Pull**. {% data variables.product.prodname_desktop %} abrirá o seu navegador-padrão para levar você a {% data variables.product.prodname_dotcom %}.
  ![O botão Criar Solicitação de Pull](/assets/images/help/desktop/mac-create-pull-request.png)
4. No {% data variables.product.prodname_dotcom %}, confirme se o branch no menu suspenso **base:** é o branch em que deseja mesclar as alterações. Confirme se o branch no menu suspenso **comparação:** é o branch do tópico em que você fez as alterações.
  ![Menus suspensos usados para escolher os branches base e de comparação](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Alterne para o branch para o qual você deseja criar um pull request. Para obter mais informações, confira "[Como alternar entre branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)".
2. Clique em **Criar Solicitação de Pull**. {% data variables.product.prodname_desktop %} abrirá o seu navegador-padrão para levar você a {% data variables.product.prodname_dotcom %}.
  ![O botão Criar Solicitação de Pull](/assets/images/help/desktop/windows-create-pull-request.png)
3. No {% data variables.product.prodname_dotcom %}, confirme se o branch no menu suspenso **base:** é o branch em que deseja mesclar as alterações. Confirme se o branch no menu suspenso **comparação:** é o branch do tópico em que você fez as alterações.
  ![Menus suspensos usados para escolher os branches base e de comparação](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

## Leitura adicional
- "[Problema](/github/getting-started-with-github/github-glossary#issue)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Solicitação de pull](/github/getting-started-with-github/github-glossary#pull-request)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Branch base](/github/getting-started-with-github/github-glossary#base-branch)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Branch do tópico](/github/getting-started-with-github/github-glossary#topic-branch)" no glossário do {% data variables.product.prodname_dotcom %}
