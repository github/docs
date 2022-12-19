---
ms.openlocfilehash: dcca3d0170e92663336865f43ddc4e7ac5204702
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147060317"
---
Секрет `GITHUB_TOKEN` устанавливается в качестве маркера доступа для репозитория при каждом запуске задания в рабочем процессе. Вам следует установить разрешения для этого маркера доступа в файле рабочего процесса, чтобы предоставить доступ на чтение в области `contents` и доступ на запись в области `packages`. Дополнительные сведения см. в разделе [Проверка подлинности с помощью GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token).
