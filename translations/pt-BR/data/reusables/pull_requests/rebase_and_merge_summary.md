---
ms.openlocfilehash: 371057b7fbe8e92b564e8729b11442bdbf2c1a56
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882792"
---
Quando você seleciona a opção **Troca de base e mesclagem** em uma solicitação de pull no {% data variables.product.product_location %}, todos os commits do branch do tópico (ou do branch principal) são adicionados ao branch base individualmente sem um commit de mesclagem. Dessa forma, o comportamento de troca de base e mesclagem se assemelha a uma [mesclagem de avanço rápida](https://git-scm.com/docs/git-merge#_fast_forward_merge) mantendo um histórico de projeto linear. No entanto, a troca de base faz isso reescrevendo o histórico de commit no branch base com novos commits.

O comportamento de troca de base e mesclagem no {% data variables.product.product_name %} se desvia ligeiramente de `git rebase`. A troca de base e a mesclagem no {% data variables.product.prodname_dotcom %} sempre atualizará as informações do autor de commit e criará novos SHAs de commit, enquanto o `git rebase` fora do {% data variables.product.prodname_dotcom %} não altera as informações do autor de commit quando a troca de base acontece com base em um commit ancestral. Para obter mais informações sobre `git rebase`, confira [git-rebase](https://git-scm.com/docs/git-rebase) na documentação do Git.

Para troca de base e mesclagem das solicitações de pull, você precisa ter [permissões de gravação](/articles/repository-permission-levels-for-an-organization/) no repositório e o repositório precisa [permitir a troca de base e a mesclagem](/articles/configuring-commit-rebasing-for-pull-requests/).

Para ver uma representação visual de `git rebase`, confira [o capítulo "Ramificação do Git – Troca de base " do livro _Pro Git_](https://git-scm.com/book/en/Git-Branching-Rebasing).
