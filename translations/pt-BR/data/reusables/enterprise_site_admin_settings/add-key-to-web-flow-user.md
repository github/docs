---
ms.openlocfilehash: 632a3ac2c6b2d5d074ef3b1db598ed57a89195c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147369246"
---
1. Execute o comando a seguir, substituindo KEY-ID por sua ID de chave PGP.

   ```bash{:copy}
   gpg --armor --export KEY-ID
   ```
1. Copie a chave PGP, começando com `-----BEGIN PGP PUBLIC KEY BLOCK-----` e terminando com `-----END PGP PUBLIC KEY BLOCK-----`.
1. Efetue o login em {% data variables.product.prodname_ghe_server %} como o usuário `web-flow`.
1. Adicione a chave PGP pública ao perfil do usuário. Para saber mais, confira "[Como adicionar uma chave GPG a uma conta do {% data variables.product.prodname_dotcom %}](/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)".

   {% note %}

   **Observação:** não remova outras chaves públicas da lista de chaves GPG. Se uma chave pública for excluída, todas as confirmações assinadas com a chave privada correspondente não serão mais marcadas como verificadas.

   {% endnote %}
