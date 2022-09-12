---
ms.openlocfilehash: 52ba84fdbfdaa4150aff2b1e1bba858bf1ab7d41
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145093626"
---
1. Revise o arquivo CSV (separado por vírgula) em `/PATH/REPO-NAME.git/git-import/raw-authors.csv`. Deve conter estas colunas:
    - `ID`: o autor, conforme armazenado no repositório original, seguido de um identificador exclusivo
    - `NAME`: o autor, conforme armazenado no repositório original

  Para mapear autores do repositório original para um endereço de email e um nome, crie um arquivo CSV com as colunas `ID,(ignored),GIT_EMAIL,GIT_NAME`, que substitui as informações do autor sobre qualquer coisa com "ID" por "GIT_EMAIL" e "GIT_NAME".

  #### Exemplo:

   - ID do autor original: `octocat@111111-2222-3333-4444-55555555555`
   - Novo endereço de email: `octocat@github.com`
   - Novo nome: `The Octocat`

   Para mapear o autor original para o novo usuário Git, o arquivo CSV deve incluir a linha:

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
