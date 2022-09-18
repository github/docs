---
ms.openlocfilehash: 55d2a154539d7cc6b73f248c5616bd0016a561aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145083296"
---
Chave | Tipo | Descrição
----|------|-------------
`pages`|`array` | As páginas que foram atualizadas.
`pages[][page_name]`|`string` | O nome da página.
`pages[][title]`|`string` |  O título de página atual.
`pages[][action]`|`string` |  A ação que foi executada na página. Pode ser `created` ou `edited`.
`pages[][sha]`|`string` | O SHA de commit mais recente da página.
`pages[][html_url]`|`string` | Aponta para a página wiki de HTML.
