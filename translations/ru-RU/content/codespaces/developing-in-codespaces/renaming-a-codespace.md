---
title: Переименование codespace
intro: Вы можете использовать {% data variables.product.prodname_cli %} для изменения отображаемого имени codespace на имя по вашему выбору.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Rename a codespace
ms.openlocfilehash: 0e597896f55c2afc89608546963c3b973d0c8a20
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: "148009190"
---
## Переименование codespace

Каждому codespace назначается автоматически созданное отображаемое имя. Если у вас несколько codespace, отображаемое имя помогает их различать. Например: `literate space parakeet`. Отображаемое имя codespace можно изменить.

Чтобы выяснить отображаемое имя codespace, выполните следующие действия.

- В {% data variables.product.product_name %} просмотрите список codespace по адресу https://github.com/codespaces.

  ![Снимок экрана: список codespace в GitHub](/assets/images/help/codespaces/codespaces-list-display-name.png)

- В классическом приложении {% data variables.product.prodname_vscode %} или веб-клиенте {% data variables.product.prodname_vscode_shortname %} щелкните удаленный обозреватель. Отображаемое имя выводится под именем репозитория. Например: `symmetrical space telegram` на снимке экрана ниже.

  ![Снимок экрана: удаленный обозреватель в VS Code](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- В окне терминала на локальном компьютере используйте следующую команду {% data variables.product.prodname_cli %} command: `gh codespace list`. 

### Постоянные имена codespace

Помимо отображаемого имени при создании codespace ему также назначается постоянное имя. Имя представляет собой сочетание дескриптора {% data variables.product.company_short %}, имени репозитория и некоторых произвольных символов. Например: `octocat-myrepo-gmc7`. Это имя изменить нельзя.

Чтобы выяснить постоянное имя codespace, выполните следующие действия.

* В {% data variables.product.product_name %} постоянное имя отображается во всплывающем окне при наведении указателя мыши на параметр **Открыть в браузере** в https://github.com/codespaces. 

   ![Снимок экрана: имя codespace, отображаемое при наведении указателя мыши](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* В codespace используйте следующую команду в терминале: `echo $CODESPACE_NAME`.
* В окне терминала на локальном компьютере используйте следующую команду {% data variables.product.prodname_cli %} command: `gh codespace list`.

## Переименование codespace

Изменение отображаемого имени codespace может оказаться полезным при наличии нескольких codespace, которые будут использоваться в течение длительного периода. Соответствующее имя помогает определить codespace, используемое для определенной цели. Отображаемое имя codespace можно изменить с помощью {% data variables.product.prodname_cli %}.

Чтобы переименовать codespace, используйте подкоманду `gh codespace edit`.

```shell
gh codespace edit -c PERMANENT-NAME-OF-CODESPACE -d NEW-DISPLAY-NAME
```

В этом примере замените `permanent name of the codespace` на постоянное имя codespace. Замените `new display name` на требуемое отображаемое имя.