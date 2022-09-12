---
ms.openlocfilehash: 91884dc1aa5c5b0b3d32593edfb1927e6c75592f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145093506"
---
{%- ifversion fpt %} A detecção de chamadas vulneráveis está habilitada em repositórios públicos. Essa análise também está disponível em repositórios privados pertencentes a organizações que usam o {% data variables.product.prodname_ghe_cloud %} e que têm uma licença do {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} A detecção de chamadas vulneráveis está incluída no {% data variables.product.product_name %} em repositórios públicos. Para detectar chamadas vulneráveis em repositórios privados pertencentes a organizações, sua organização precisa ter uma licença do {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes > 3.5 %} A detecção de chamadas vulneráveis está disponível para repositórios pertencentes a organizações no {% data variables.product.product_name %}. Esse recurso exige uma licença do {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae-issue-6076 %} A detecção de chamadas vulneráveis está disponível para repositórios pertencentes a organizações no {% data variables.product.product_name %}. Esse é um recurso do {% data variables.product.prodname_GH_advanced_security %} (gratuito durante a versão beta).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
