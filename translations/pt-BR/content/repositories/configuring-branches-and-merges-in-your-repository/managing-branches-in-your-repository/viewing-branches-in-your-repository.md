---
title: Exibir branches no repositório
intro: 'Os branches são fundamentais para a colaboração no {% data variables.product.product_name %}, e a melhor maneira de exibi-los é a página de branches.'
redirect_from:
  - /articles/viewing-branches-in-your-repository
  - /github/administering-a-repository/viewing-branches-in-your-repository
  - /github/administering-a-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View branches
ms.openlocfilehash: 286c8eb8c717f5a002db0059e65c416ccc3981e8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145127100'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
3. Use a navegação na parte superior da página para exibir listas específicas de branches:
    - **Seus branches**: nos repositórios aos quais você tem acesso de push, a exibição **Seus** mostra todos os branches dos quais você efetuou push, excluindo o branch padrão, com os branches mais recentes primeiro.
    - **Branches ativos**: a exibição **Ativos** mostra todos os branches para os quais qualquer pessoa fez commit nos últimos três meses, ordenados pelos branches com os commits mais recentes primeiro.
    - **Branches obsoletos**: a exibição **Obsoletos** mostra todos os branches para os quais ninguém fez commit nos últimos três meses, ordenados pelos branches com os commits mais antigos primeiro. Use esta lista para determinar [os branches que devem ser excluídos](/articles/creating-and-deleting-branches-within-your-repository).
    - **Todos os branches**: a exibição **Todos** mostra o branch padrão, seguido de todos os outros branches ordenados pelos branches com os commits mais recentes primeiro.

4. Opcionalmente, use o campo de pesquisa no canto superior direito. Ele fornece uma pesquisa simples, que não diferencia a maiúsculas e minúsculas no nome do branch. Ele não é compatível com nenhuma sintaxe de consulta adicional.

![A página de branches do repositório Atom](/assets/images/help/branches/branches-overview-atom.png)

## Leitura adicional

- "[Como criar e excluir branches no seu repositório](/articles/creating-and-deleting-branches-within-your-repository)"
- "[Como excluir branches não utilizados](/articles/deleting-unused-branches)"
