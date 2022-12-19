---
ms.openlocfilehash: d8f0e4e19ba362881f261a214aa56666f5902979
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158584"
---
После подключения учетной записи в {% data variables.product.prodname_dotcom_the_website %} к расширению {% data variables.product.prodname_github_codespaces %} можно создать новое пространство кода. Дополнительные сведения о расширении {% data variables.product.prodname_github_codespaces %} см. в [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Щелкните значок "Добавить": {% octicon "plus" aria-label="The plus icon" %}.

   ![Параметр Create new Codespace in {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Введите имя репозитория, в котором нужно выполнить разработку, затем выберите его.

   ![Поиск репозитория для создания нового пространства кода](/assets/images/help/codespaces/choose-repository-vscode.png)

   Если выбранный репозиторий принадлежит организации и организация настроила codespaces для этого репозитория, который будет выставлен на счет организации или ее родительского предприятия, в последующих запросах будет отображаться сообщение о том, кто будет платить за codespace.

4. Щелкните ветвь, в которой нужно выполнить разработку.

   ![Поиск ветви для создания нового пространства кода](/assets/images/help/codespaces/choose-branch-vscode.png)

5. Если появится запрос на выбор файла конфигурации контейнера разработки, выберите файл из списка.

   ![Выбор файла конфигурации контейнера разработки для {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. Щелкните тип компьютера, в котором нужно выполнить разработку.

   ![Типы экземпляров для нового пространства кода](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **Примечание**. {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}
