---
ms.openlocfilehash: fbdfcfcaaa18bfc373cbb256c0b22b2111784a13
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: "148009895"
---
При откате обновления необходимо использовать файл пакета обновления с расширением *PKG*. Файлы пакетов горячих исправлений с расширением *HPKG* не поддерживаются.

```shell
ghe-upgrade --allow-patch-rollback EARLIER-RELEASE-UPGRADE-PACKAGE.pkg
```

После выполнения этой команды требуется перезагрузка. Откат не влияет на секцию данных, так как миграция для выпусков исправлений не выполняется.
