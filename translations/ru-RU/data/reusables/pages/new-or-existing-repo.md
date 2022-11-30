---
ms.openlocfilehash: 33f427d38193ad14c5df35ebab14bd08208c08e0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109512"
---
Для сайта можно создать новый репозиторий или выбрать существующий.

Если необходимо создать сайт {% data variables.product.prodname_pages %} для репозитория, в котором не все файлы имеют отношение к сайту, можно настроить источник публикации. Например, вы можете иметь выделенную ветвь и папку для хранения исходных файлов {% ifversion pages-custom-workflow %}, или использовать пользовательский рабочий процесс {% data variables.product.prodname_actions %} для создания и развертывания исходных файлов сайта. {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %} {% else %}файлы. {% endif %}

{% ifversion fpt or ghec %}Если учетная запись, которой принадлежит репозиторий, использует {% data variables.product.prodname_free_user %} или {% data variables.product.prodname_free_team %} для организаций, репозиторий должен быть общедоступным.{% endif %}

 Чтобы создать сайт в существующем репозитории, перейдите к разделу [Создание сайта](#creating-your-site).