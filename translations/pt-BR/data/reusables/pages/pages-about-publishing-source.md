---
ms.openlocfilehash: f77827f645123477cf9ddc2f845c7da3a4929a72
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147871934"
---
{% ifversion pages-custom-workflow %}

Você pode publicar seu site quando as alterações são enviadas por push para um branch específico ou você pode escrever um fluxo de trabalho do {% data variables.product.prodname_actions %} para publicar seu site.

Se você não precisar de nenhum controle sobre o processo de build do seu site, recomendamos que você publique seu site quando as alterações forem enviadas por push para um branch específico. {% data reusables.pages.pages-about-branch-source %}

Se você deseja usar um processo de build diferente do Jekyll ou não quer que um branch dedicado mantenha seus arquivos estáticos compilados, recomendamos que você escreva um fluxo de trabalho do {% data variables.product.prodname_actions %} para publicar seu site. {% data variables.product.product_name %} oferece fluxos de trabalho iniciais para cenários comuns de publicação para ajudar vocâ a escrever seu fluxo de trabalho.

{% else %}

Seu site do {% data variables.product.prodname_pages %} fará publicações sempre que as alterações forem enviadas por push para um branch específico. {% data reusables.pages.pages-about-branch-source %}

{% endif %}
