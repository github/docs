---
title: Создание нижнего колонтитула или боковой панели для вики-сайта
intro: 'Вы можете добавить настраиваемую боковую панель или нижний колонтитул в вики-сайт, чтобы предоставить читателям дополнительную контекстную информацию.'
redirect_from:
  - /articles/creating-a-footer
  - /articles/creating-a-sidebar
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
  - /github/building-a-strong-community/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create footer or sidebar
ms.openlocfilehash: 0f65114a5258d312d5a81381a59149c589ee54a4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092438'
---
## Создание нижнего колонтитула

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Внизу страницы нажмите **Добавить настраиваемый нижний колонтитул**.
  ![Раздел добавления нижнего колонтитула вики-сайта](/assets/images/help/wiki/wiki_add_footer.png)
4. Используйте текстовый редактор, чтобы ввести содержимое, которое будет отображаться в нижнем колонтитуле.
  ![Режим точного отображения вики-сайта](/assets/images/help/wiki/wiki-footer.png)
5. Введите сообщение о фиксации с описанием добавляемого нижнего колонтитула.
  ![Сообщение фиксации для вики-сайта](/assets/images/help/wiki/wiki_commit_message.png)
6. Чтобы зафиксировать изменения на вики-сайте, нажмите **Сохранить страницу**.

## Создание боковой панели

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Нажмите **Добавить настраиваемую боковую панель**.
  ![Раздел добавления боковой панели для вики-сайта](/assets/images/help/wiki/wiki_add_sidebar.png)
4. Используйте текстовый редактор для добавления содержимого страницы.
  ![Режим точного отображения вики-сайта](/assets/images/help/wiki/wiki-sidebar.png)
5. Введите сообщение о фиксации с описанием добавляемой боковой панели.
  ![Сообщение фиксации для вики-сайта](/assets/images/help/wiki/wiki_commit_message.png)
6. Чтобы зафиксировать изменения на вики-сайте, нажмите **Сохранить страницу**.

## Локальное создание нижнего колонтитула или боковой панели

При создании файла с именем `_Footer.<extension>` или `_Sidebar.<extension>` мы будем использовать их для заполнения нижнего колонтитула и боковой панели вики-сайта. Как и каждая другая вики-страница, расширение, выбранное для этих файлов, определяет способ их преобразования для просмотра.
