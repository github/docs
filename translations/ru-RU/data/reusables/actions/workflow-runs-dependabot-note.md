---
ms.openlocfilehash: 6d101895af1ae0e202ebfb49119c83a14682de09
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145093050"
---
{% ifversion fpt or ghec %} {% note %}

**Примечание.**  Рабочие процессы запускаются запросами на вытягивание {% data variables.product.prodname_dependabot %}, как если бы они находились в репозитории с вилкой, поэтому используйте `GITHUB_TOKEN` с разрешениями только для чтения. Этот рабочий процесс не может получить доступ к секретам. Сведения о стратегиях защиты этих рабочих процессов см. в разделе [Обеспечение безопасности GitHub Actions и рабочих процессов: запрет запросов pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests).

{% endnote %} {% endif %}
