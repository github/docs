---
ms.openlocfilehash: 5f6285fe19915c3962b43cb45a26e65144607788
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062405"
---
Вы можете настроить свое codespace, настроив количество виртуальных ЦП и ОЗУ, [добавив файлы с точкой для персонализации вашей среды](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account) или изменив установленные инструменты и скрипты.

В {% data variables.product.prodname_codespaces %} используется файл `devcontainer.json` для настройки контейнера разработки, используемого при работе в codespace. Каждый репозиторий может содержать один или несколько файлов `devcontainer.json`, чтобы предоставить вам именно среду разработки, необходимую для работы с вашим кодом в codespace. 

При запуске в {% data variables.product.prodname_codespaces %} используется файл `devcontainer.json` и все зависимые файлы, составляющие конфигурацию контейнера разработки, для установки инструментов и сред выполнения и выполнения других задач установки, необходимых по проекту. Дополнительные сведения см. в статье [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project).
