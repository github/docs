---
title: Управление объектами LFS Git в архивах репозитория
shortTitle: 'Managing {% data variables.large_files.product_name_short %} objects in archives'
intro: 'Вы можете выбрать, следует ли включить объекты {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) в архивы исходного кода, такие как ZIP-файлы и архивы Tarball, которые {% data variables.product.product_name %} создает для репозитория.'
permissions: 'People with admin permissions for a repository can manage whether {% data variables.large_files.product_name_short %} objects are included in archives of the repository.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository
ms.openlocfilehash: 64bad4c056a29ceffc465065c84a7424c870049f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881775'
---
## Сведения об объектах {% data variables.large_files.product_name_short %} в архивах

{% data variables.product.product_name %} создает архивы исходного кода репозитория в виде ZIP-файлов и архивов в формате TAR. Пользователи могут скачать эти архивы на главной странице репозитория или в качестве ресурсов выпуска. По умолчанию объекты {% data variables.large_files.product_name_short %} не включаются в эти архивы, включены только файлы-указатели на эти объекты. Чтобы повысить удобство использования архивов для репозитория, можно включить вместо файлов-указателей объекты {% data variables.large_files.product_name_short %}. Для включения объекты {% data variables.large_files.product_name_short %} должны быть охвачены правилами отслеживания в файле *.gitattributes*, который был зафиксирован в репозитории.

Если вы решили включить объекты {% data variables.large_files.product_name_short %} в архивы репозитория, каждое скачивание этих архивов будет учитываться в потреблении пропускной способности вашей учетной записи. Ежемесячно каждая учетная запись получает {% data variables.large_files.initial_bandwidth_quota %} пропускной способности бесплатно, а также можно оплатить дополнительное использование. Дополнительные сведения см. в разделах [Сведения об использовании хранилища и пропускной способности](/github/managing-large-files/about-storage-and-bandwidth-usage) и [Управление выставлением счетов для {% data variables.large_files.product_name_long %}](/billing/managing-billing-for-git-large-file-storage).

Если вы используете внешний сервер LFS (настроенный в *.lfsconfig*), эти файлы LFS не будут включены в архивы репозитория. Архив будет содержать только файлы, которые были зафиксированы в {% data variables.product.product_name %}.

## Управление объектами {% data variables.large_files.product_name_short %} в архивах

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе "Архивы" выберите или отмените выбор **Включить объекты {% data variables.large_files.product_name_short %} в архивы**.
  ![Флажок для включения объектов {% data variables.large_files.product_name_short %} в архивы](/assets/images/help/repository/include-git-lfs-objects-checkbox.png)
