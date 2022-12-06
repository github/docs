---
ms.openlocfilehash: f46fcf5de23b55285d402b93bd89b0155e1224e7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107887"
---
{% ifversion pages-custom-workflow %}

Você pode publicar seu site quando as alterações são enviadas por push para um branch específico ou você pode escrever um fluxo de trabalho do {% data variables.product.prodname_actions %} para publicar seu site. {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}

Se você não precisar de nenhum controle sobre o processo de build do seu site, recomendamos que você publique seu site quando as alterações forem enviadas por push para um branch específico. {% data reusables.pages.pages-about-branch-source %}

Se você deseja usar um processo de build diferente do Jekyll ou não quer que um branch dedicado mantenha seus arquivos estáticos compilados, recomendamos que você escreva um fluxo de trabalho do {% data variables.product.prodname_actions %} para publicar seu site. {% data variables.product.product_name %} oferece fluxos de trabalho iniciais para cenários comuns de publicação para ajudar vocâ a escrever seu fluxo de trabalho.

{% else %}

Seu site do {% data variables.product.prodname_pages %} fará publicações sempre que as alterações forem enviadas por push para um branch específico. {% data reusables.pages.pages-about-branch-source %}

{% endif %}