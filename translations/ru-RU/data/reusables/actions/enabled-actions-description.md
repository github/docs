---
ms.openlocfilehash: ab6a2179820f4517ec815e953fa1194be97f5a31
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180826"
---
Если включить {% data variables.product.prodname_actions %}, рабочие процессы могут выполнять действия {% ifversion actions-workflow-policy %}и повторно используемые рабочие процессы{% endif %} в репозитории и любом другом{% ifversion fpt %} общедоступном{% elsif ghec or ghes %} общедоступном или внутреннем{% elsif ghae %} внутреннем{% endif %} репозитории.
