---
ms.openlocfilehash: f46fcf5de23b55285d402b93bd89b0155e1224e7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109157"
---
{% ifversion pages-custom-workflow %}

変更が特定のブランチにプッシュされたときにサイトを公開できます。または、{% data variables.product.prodname_actions %} ワークフローを記述してサイトを公開することもできます。 {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}

サイトのビルド プロセスを制御する必要がない場合は、変更が特定のブランチにプッシュされたときにサイトを公開することをお勧めします。 {% data reusables.pages.pages-about-branch-source %}

Jekyll 以外のビルド プロセスを使用する場合、または専用ブランチでコンパイル済みの静的ファイルを保持したくない場合は、{% data variables.product.prodname_actions %} ワークフローを記述してサイトを公開することをお勧めします。 {% data variables.product.product_name %} には、ワークフローの記述に役立つ一般的な公開シナリオ用のスターター ワークフローが用意されています。

{% else %}

{% data variables.product.prodname_pages %} サイトは、変更が特定のブランチにプッシュされるたびに公開されます。 {% data reusables.pages.pages-about-branch-source %}

{% endif %}