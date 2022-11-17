---
ms.openlocfilehash: cd26a748114e97e5890d05e87b80e2253e0de04f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114928"
---

Если рабочим процессам {% data variables.product.prodname_actions %} требуется доступ к ресурсам от поставщика облачных служб, поддерживающего OpenID Connect (OIDC), можно настроить рабочие процессы для проверки подлинности непосредственно в поставщике облачных служб. Это позволит прекратить хранение таких учетных данных в виде долгоживущих секретов и обеспечить другие преимущества безопасности. Дополнительную информацию см. в разделе [Сведения об усилении защиты с помощью OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect).
