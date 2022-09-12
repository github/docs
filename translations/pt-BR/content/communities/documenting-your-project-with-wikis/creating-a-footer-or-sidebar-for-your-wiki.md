---
title: Criar rodapé ou barra lateral na wiki
intro: Você pode adicionar uma barra lateral ou um footer personalizado para seu wiki a fim de fornecer aos leitores informações mais contextuais.
redirect_from:
  - /articles/creating-a-footer
  - /articles/creating-a-sidebar
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
  - /github/building-a-strong-community/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create footer or sidebar
ms.openlocfilehash: 0f65114a5258d312d5a81381a59149c589ee54a4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145084135'
---
## Criar um footer

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Na parte inferior da página, clique em **Adicionar um rodapé personalizado**.
  ![Seção Adicionar rodapé do wiki](/assets/images/help/wiki/wiki_add_footer.png)
4. Use o editor de texto para digitar o conteúdo que deseja ter no footer.
  ![WYSIWYG do wiki](/assets/images/help/wiki/wiki-footer.png)
5. Insira uma mensagem do commit descrevendo o footer que você está adicionando.
  ![Mensagem do commit do wiki](/assets/images/help/wiki/wiki_commit_message.png)
6. Para fazer commit das alterações no wiki, clique em **Salvar Página**.

## Criar uma barra lateral

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Clique em **Adicionar uma barra lateral personalizada**.
  ![Seção Adicionar barra lateral do wiki](/assets/images/help/wiki/wiki_add_sidebar.png)
4. Use o editor de texto para adicionar o conteúdo da página.
  ![WYSIWYG do wiki](/assets/images/help/wiki/wiki-sidebar.png)
5. Insira uma mensagem do commit descrevendo a barra lateral que você está adicionando.
  ![Mensagem do commit do wiki](/assets/images/help/wiki/wiki_commit_message.png)
6. Para fazer commit das alterações no wiki, clique em **Salvar Página**.

## Criar um footer ou uma barra lateral localmente

Se você criar um arquivo chamado `_Footer.<extension>` ou `_Sidebar.<extension>`, nós o usaremos para preencher o rodapé e a barra lateral do wiki, respectivamente. Assim como qualquer outra página do wiki, a extensão que você escolhe para esses arquivos determina como nós os renderizaremos.
