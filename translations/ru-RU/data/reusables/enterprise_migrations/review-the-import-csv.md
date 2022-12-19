---
ms.openlocfilehash: 52ba84fdbfdaa4150aff2b1e1bba858bf1ab7d41
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145111312"
---
1. Просмотрите файл с разделителями-запятыми (CSV) в `/PATH/REPO-NAME.git/git-import/raw-authors.csv`. Он должен содержать следующие столбцы:
    - `ID` — автор, сохраненный в исходном репозитории, и уникальный идентификатор;
    - `NAME` — автор, сохраненный в исходном репозитории.

  Чтобы сопоставить авторов из исходного репозитория с адресом электронной почты и именем, создайте новый CSV-файл со столбцами `ID,(ignored),GIT_EMAIL,GIT_NAME`, в которых сведения об авторах заменены по ID на GIT_EMAIL и GIT_NAME.

  #### Пример.

   - Исходный идентификатор автора: `octocat@111111-2222-3333-4444-55555555555`
   - Новый адрес электронной почты: `octocat@github.com`
   - Новое имя: `The Octocat`

   Для сопоставления исходного автора с новым пользователем GIT CSV-файл должен содержать следующую строку:

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
