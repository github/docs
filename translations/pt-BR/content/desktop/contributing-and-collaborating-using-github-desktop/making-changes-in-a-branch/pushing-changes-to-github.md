---
title: Fazer push de alterações no GitHub
shortTitle: Pushing changes
intro: 'À medida que você faz commit das alterações no seu projeto localmente, você pode fazer push dessas alterações no {% data variables.product.prodname_dotcom %} para que outras pessoas possam acessá-las a partir do repositório remoto.'
permissions: People with write permissions can push changes to a repository.
redirect_from:
  - /desktop/contributing-to-projects/pushing-changes-to-github
  - /desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github
versions:
  fpt: '*'
ms.openlocfilehash: b881fa5d9e66c4a63b8c648d87072037a8cba543
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084071'
---
## Sobre o envio de alterações para {% data variables.product.prodname_dotcom %}

Quando você faz push das alterações, você envia as alterações confirmadas em seu repositório local para o repositório remoto no {% data variables.product.prodname_dotcom %}. Se você alterar seu projeto localmente e desejar que outras pessoas tenham acesso às alterações, você deve fazer push das alterações para {% data variables.product.prodname_dotcom %}.

Antes de fazer push das alterações, você deve atualizar seu branch local para incluir quaisquer commits adicionados ao repositório remoto. Se alguém fez commits no controle remoto que não estão em seu branch local, {% data variables.product.prodname_desktop %} solicitará que você bosque os novos commits antes de fazer push de suas alterações para evitar conflitos de merge. Para obter mais informações, confira "[Como sincronizar seu branch](/desktop/contributing-to-projects/syncing-your-branch)".

{% data reusables.desktop.protected-branches %}

## Fazendo push das alterações para {% data variables.product.prodname_dotcom %}

{% note %}

**Observação:** o {% data variables.product.prodname_desktop %} rejeitará um push se ele exceder determinados limites.

- Um push contém um arquivo grande sobre {% data variables.large_files.max_github_size %}.
- Um push está acima de {% data variables.large_files.max_file_size %} em termos de tamanho total.

Se você configurar o {% data variables.large_files.product_name_long %} para rastrear seus arquivos grandes, poderá fazer push de arquivos grandes que normalmente seriam rejeitados. Para obter mais informações, confira "[Sobre o {% data variables.large_files.product_name_long %} e o {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)".

{% endnote %}

{% data reusables.desktop.push-origin %}
2. Se o {% data variables.product.prodname_desktop %} solicitar que você busque novos commits do repositório remoto, clique em **Buscar**.
  ![O botão Buscar](/assets/images/help/desktop/fetch-newer-commits.png)
3. Opcionalmente, clique em **Criar Solicitação de Pull** para abrir uma solicitação de pull e colaborar nas alterações. Para obter mais informações, confira "[Como criar um problema ou uma solicitação de pull](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" ![O botão Criar Solicitação de Pull](/assets/images/help/desktop/create-pull-request.png)

## Leitura adicional
- "[Push](/github/getting-started-with-github/github-glossary/#push)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Como fazer commit das alterações no seu projeto e revisá-las](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)"
