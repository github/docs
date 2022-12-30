---
ms.openlocfilehash: f46fcf5de23b55285d402b93bd89b0155e1224e7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109159"
---
{% ifversion pages-custom-workflow %}

Сайт можно публиковать при отправке изменений в определенную ветвь, а также с помощью рабочего процесса {% data variables.product.prodname_actions %}. {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}

Если вам не нужно управлять сборкой сайта, рекомендуется публиковать сайт, когда изменения отправляются в определенную ветвь. {% data reusables.pages.pages-about-branch-source %}

Если вы хотите использовать сборку, отличную от Jekyll, или не хотите хранить скомпилированные статические файлы в выделенной ветви, рекомендуется создать рабочий процесс {% data variables.product.prodname_actions %} для публикации сайта. {% data variables.product.product_name %} предоставляет начальные рабочие процессы для распространенных сценариев публикации, чтобы помочь вам в создании рабочего процесса.

{% else %}

Ваш сайт {% data variables.product.prodname_pages %} будет публиковаться при каждой отправке изменений в определенную ветвь. {% data reusables.pages.pages-about-branch-source %}

{% endif %}