---
ms.openlocfilehash: ea162bdacad3d8e4a85c343eb9c3c08afd2b9056
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145093725"
---
Ao reverter uma atualização, você precisa usar um arquivo de pacote de atualização com a extensão *.pkg*. Não há suporte para arquivos de pacote de patch dinâmico com a extensão *.hpkg*.

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

É necessário reinicializar após a execução do comando. Reverter não afeta a partição de dados, pois as migrações não são executadas nas versões de patch.
