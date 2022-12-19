---
title: 変更の一時退避
intro: 変更を一時退避することで、変更をブランチにコミットせずに一時的に保存できます。
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/stashing-changes
ms.openlocfilehash: ef061bec3c60041fc40ab3e8be45d1557ca90219
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117510'
---
## 一時退避された変更について

リポジトリに変更を適用するには、ファイルを保存してから、変更をブランチにコミットする必要があります。 まだコミットする準備ができていない変更を保存している場合は、後でコミットするために変更を一時退避することができます。 変更を一時退避すると、その変更はファイルから一時的に削除され、後で変更を復元または破棄することができます。 {% data variables.product.prodname_desktop %} で一時退避できるのは、一度に 1 つの変更セットだけです。 {% data variables.product.prodname_desktop %} を使用して変更を一時退避すると、保存されていないすべての変更が一時退避されます。 1 つのブランチに変更を一時退避した後は、ブランチを安全に変更したり、現在のブランチに他の変更を加えたりすることができます。

変更を保存したがコミットしていないときに {% data variables.product.prodname_desktop %} を使用してブランチを切り替えると、{% data variables.product.prodname_desktop %} によって変更を一時退避するか、他のブランチに移動するように求められます。 詳細については、「[ブランチを管理する](/desktop/contributing-to-projects/managing-branches#switching-between-branches)」を参照してください。

## 変更の一時退避

{% data reusables.desktop.click-changed-files-header %} {% data reusables.desktop.click-stash-all-changes %}

## 一時退避した変更の復元

{% data reusables.desktop.navigate-to-stashed-changes %} {% data reusables.desktop.click-stashed-changes %} {% data reusables.desktop.click-restore %}

## 一時退避した変更の破棄

{% data reusables.desktop.navigate-to-stashed-changes %} {% data reusables.desktop.click-stashed-changes %} {% data reusables.desktop.click-discard %}
