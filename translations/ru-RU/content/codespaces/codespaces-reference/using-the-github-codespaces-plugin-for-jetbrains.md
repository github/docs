---
title: Использование подключаемого модуля GitHub Codespaces для JetBrains
shortTitle: Plugin for JetBrains
intro: 'Вы можете использовать подключаемый модуль {% data variables.product.prodname_github_codespaces %} для клиентского приложения JetBrains, чтобы узнать о codespace или остановить его после завершения работы.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: 8ffd48856a2653f3db3c871122d3acd23c246d7a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159938'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## Сведения о подключаемом модуле {% data variables.product.prodname_github_codespaces %}

Клиентское приложение JetBrains запускается при подключении к codespace из приложения Шлюза JetBrains. Это позволяет использовать {% data variables.product.prodname_github_codespaces %} с избранным интерфейсом разработки JetBrains. Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} в интегрированной среде разработки JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide).

Подключаемый модуль {% data variables.product.prodname_github_codespaces %} уже установлен в клиенте JetBrains при подключении к codespace из шлюза JetBrains. Подключаемый модуль добавляет окно инструментов {% data variables.product.prodname_github_codespaces %} в пользовательский интерфейс.

Щелкните **{% data variables.product.prodname_github_codespaces %}** в левом нижнем углу окна приложения клиента JetBrains, чтобы открыть окно инструментов {% data variables.product.prodname_github_codespaces %}.

![Снимок экрана: окно инструментов {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/jetbrains-codespaces-tool-window.png)

## Использование окна инструментов {% data variables.product.prodname_github_codespaces %}

В окне инструментов {% data variables.product.prodname_github_codespaces %} отображается следующее:
* Репозиторий, из которого вы создали это пространство кода.
* Отображаемое имя codespace.
* Текущая ветвь.
* Спецификации машины.
* Время, в течение которого это пространство кода может оставаться бездействующей, прежде чем оно будет автоматически остановлено.
* Возраст codespace.
* Период, в течение которого остановленное пространство кода будет храниться до его автоматического удаления.

Значки в верхней части окна инструментов {% data variables.product.prodname_github_codespaces %} предоставляют следующие функции.

* **Обновление активного codespace**

  ![Снимок экрана: кнопка "Обновить"](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh-BAK.png)

  Обновите сведения в окне инструментов {% data variables.product.prodname_github_codespaces %}. Например, если вы использовали {% data variables.product.prodname_cli %} для изменения отображаемого имени, можно нажать эту кнопку, чтобы отобразить новое имя.

* **Отключение и остановка**

  ![Снимок экрана: кнопка "Остановить"](/assets/images/help/codespaces/jetbrains-plugin-icon-stop.png)

  Остановите codespace, остановите серверную интегрированную среду разработки на удаленном компьютере и закройте локальный клиент JetBrains.

* **Управление codespace из Интернета**

  ![Снимок экрана: кнопка "Список"](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  Откройте список codespace по адресу https://github.com/codespaces.

* **Просмотр журнала создания codespace**

  ![Снимок экрана: кнопка "Журнал"](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  Откройте журнал создания codespace в окне редактора. Дополнительные сведения см. в статье [Журналы {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs).

* **Перестроение контейнера разработки**

  ![Снимок экрана: кнопка "Перестроить"](/assets/images/help/codespaces/jetbrains-plugin-icon-rebuild.png)

  Перестройте codespace, чтобы применить изменения, внесенные в конфигурацию контейнера разработки. Клиент JetBrains закроется, и необходимо повторно открыть codespace. Дополнительные сведения см. в разделе [Жизненный цикл codespace](/codespaces/developing-in-codespaces/the-codespace-lifecycle#rebuilding-a-codespace).

