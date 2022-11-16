---
ms.openlocfilehash: a78c61511f0daa225bc27576a2ab57e8e1bea939
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160148"
---
Если вы работаете в codespace, вы можете опубликовать его из веб-клиента {% data variables.product.prodname_vscode_shortname %} или классического приложения.

{% data reusables.codespaces.source-control-display-dark %}
1. Чтобы внести изменения, щелкните  **+** рядом с файлом, который вы добавили или изменили, или рядом с **элементом Изменения** , если вы изменили несколько файлов и хотите подготовить их все.

   ![Боковая панель управления исходным кодом с выделенной кнопкой подготовки](/assets/images/help/codespaces/codespaces-commit-stage.png)

   {% note %}

   **Примечание:** Если вы начинаете с пустого шаблона {% data variables.product.company_short %}, вы не увидите список изменений, если вы не инициализировали каталог в качестве репозитория Git. Чтобы опубликовать codespace, созданные на основе пустого шаблона, щелкните **Опубликовать в {% data variables.product.company_short %}** в представлении системы управления версиями, а затем перейдите к шагу 5.

   {% endnote %}
2. Чтобы зафиксировать промежуточные изменения, введите сообщение фиксации, описывающее внесенные изменения, а затем нажмите кнопку **Зафиксировать**.

   ![Боковая панель управления исходным кодом с сообщением о фиксации](/assets/images/help/codespaces/vscode-commit-button.png) 
3. Щелкните **Опубликовать ветвь**.
   
   ![Снимок экрана: кнопка "Опубликовать ветвь" в VS Code](/assets/images/help/codespaces/vscode-publish-branch-button.png)
4. В раскрывающемся списке "Имя репозитория" введите имя нового репозитория, а затем выберите **Опубликовать в {% data variables.product.company_short %} частный репозиторий** или **Опубликовать в {% data variables.product.company_short %} общедоступный репозиторий**.
   
   ![Снимок экрана: раскрывающийся список "Имя репозитория" в VS Code](/assets/images/help/codespaces/choose-new-repository.png)

   Владельцем нового репозитория будет учетная запись {% data variables.product.prodname_dotcom %}, с помощью которой вы создали codespace.
5. При необходимости во всплывающем окне, которое появится в правом нижнем углу редактора, щелкните **Открыть на {% data variables.product.company_short %}** , чтобы просмотреть новый репозиторий на {% data variables.product.prodname_dotcom_the_website %}.
   
   ![Снимок экрана: всплывающее окно "Открыть в GitHub" в VS Code](/assets/images/help/codespaces/open-on-github.png)