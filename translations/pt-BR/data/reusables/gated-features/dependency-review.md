---
ms.openlocfilehash: 285d547af855fed298354ee62716de9e6c168608
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062968"
---
{%- ifversion fpt %} A revisão de dependência está habilitada em repositórios públicos. A revisão de dependência também está disponível em repositórios privados pertencentes a organizações que usam o {% data variables.product.prodname_ghe_cloud %} e que têm uma licença do {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} A revisão de dependência está incluída no {% data variables.product.product_name %} em repositórios públicos. Para usar a revisão de dependência em repositórios privados pertencentes às organizações, você precisa ter uma licença do {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %} A análise de dependência está disponível para repositórios pertencentes à organização no {% data variables.product.product_name %}. Esse recurso exige uma licença do {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} A revisão de dependência está disponível para repositórios pertencentes à organização no {% data variables.product.product_name %}. Esse é um recurso do {% data variables.product.prodname_GH_advanced_security %} (gratuito durante a versão beta).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
