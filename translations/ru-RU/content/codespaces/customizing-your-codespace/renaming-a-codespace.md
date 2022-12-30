---
title: Переименование codespace
intro: 'Вы можете изменить отображаемое имя codespace на одно из ваших вариантов с помощью {% data variables.product.prodname_dotcom_the_website %} или {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Rename a codespace
ms.openlocfilehash: dcb4558cce7ca0768524917a46cde2a49bacd1ce
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158720'
---
## Переименование codespace

Каждому codespace назначается автоматически созданное отображаемое имя. Если у вас несколько codespace, отображаемое имя помогает их различать. Например: `literate space parakeet`. Отображаемое имя codespace можно изменить.

Чтобы выяснить отображаемое имя codespace, выполните следующие действия.

- В {% data variables.product.product_name %} просмотрите список codespace по адресу https://github.com/codespaces.

  ![Снимок экрана: список codespace в GitHub](/assets/images/help/codespaces/codespaces-list-display-name.png)

- В классическом приложении {% data variables.product.prodname_vscode %} или веб-клиенте {% data variables.product.prodname_vscode_shortname %} щелкните удаленный обозреватель. Отображаемое имя является вторым элементом в списке. Например: `symmetrical space telegram` на снимке экрана ниже.

  ![Снимок экрана: удаленный обозреватель в VS Code](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- В окне терминала на локальном компьютере используйте следующую команду {% data variables.product.prodname_cli %} command: `gh codespace list`. 

### Постоянные имена codespace

Помимо отображаемого имени при создании codespace ему также назначается постоянное имя. Имя представляет собой сочетание дескриптора {% data variables.product.company_short %} и автоматически созданного отображаемого имени. Например: `octocat-literate-space-parakeet-mld5`. Вы не можете изменить постоянное имя.

Чтобы выяснить постоянное имя codespace, выполните следующие действия.

* В {% data variables.product.product_name %} постоянное имя отображается во всплывающем окне при наведении указателя мыши на отображаемое имя codespace в https://github.com/codespaces. 

   ![Снимок экрана: имя codespace, отображаемое при наведении указателя мыши](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* В codespace используйте следующую команду в терминале: `echo $CODESPACE_NAME`.
* В окне терминала на локальном компьютере используйте следующую команду {% data variables.product.prodname_cli %} command: `gh codespace list`.

## Переименование codespace

Изменение отображаемого имени codespace может оказаться полезным при наличии нескольких codespace, которые будут использоваться в течение длительного периода. Соответствующее имя помогает определить codespace, используемое для определенной цели. 

{% cli %}

Отображаемое имя codespace можно изменить с помощью {% data variables.product.prodname_cli %}.

Чтобы переименовать codespace, используйте подкоманду `gh codespace edit`.

```shell
gh codespace edit -c PERMANENT-CODESPACE-NAME -d NEW-DISPLAY-NAME
```

В этом примере замените `PERMANENT-CODESPACE-NAME` постоянным именем codespace, отображаемое имя которого требуется изменить. Замените `NEW-DISPLAY-NAME` отображаемым именем, которое вы хотите использовать для этого codespace.

Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} с {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#rename-a-codespace).

{% endcli %}

{% webui %}

Вы можете изменить отображаемое имя для codespace в {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.codespaces.your-codespaces-procedure-step %}

    The current display name for each of your codespaces is displayed.

{% data reusables.codespaces.ellipsis-settings %}
1. Выберите **Переименовать**.

1. В командной строке в разделе "Изменить отображаемое имя на..." Введите нужное отображаемое имя и нажмите кнопку **ОК**.

{% endwebui %}
