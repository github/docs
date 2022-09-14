---
ms.openlocfilehash: 55d2a154539d7cc6b73f248c5616bd0016a561aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145091486"
---
Clave | Tipo | Descripción
----|------|-------------
`pages`|`array` | Las páginas que se actualizaron.
`pages[][page_name]`|`string` | Nombre de la página.
`pages[][title]`|`string` |  El título de página actual.
`pages[][action]`|`string` |  La acción que se realizó en la página. Puede ser `created` o `edited`.
`pages[][sha]`|`string` | El SHA de confirmación más reciente de la página.
`pages[][html_url]`|`string` | Apunta a la página de wiki de HMTL.
