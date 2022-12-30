---
title: すべてのコミットの検証ステータスを表示する
shortTitle: Displaying verification for all commits
intro: コミット署名検証の警戒モードを有効にして、すべてのコミットとタグに署名検証ステータスのマークを付けることができます。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits
ms.openlocfilehash: ce306b1275b2da8d7ad985ed0c696659798723c0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147653347'
---
{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

## 警戒モードについて

コンピューターでローカルで作業する場合、Git を使用すると、変更の作者とコミッターのアイデンティティを設定できます。 これにより、他のユーザが、自分が作成したコミットとタグが実際に自分によって作成されたものであると確信することが困難になる可能性があります。 この問題を解決するため、コミットとタグに署名することができます。 詳細については、「[コミットに署名する](/github/authenticating-to-github/signing-commits)」および「[タグに署名する](/github/authenticating-to-github/signing-tags)」を参照してください。 {% data variables.product.prodname_dotcom %} は、署名されたコミットとタグに検証ステータスのマークを付けます。 

既定では、コミットとタグは、正常に検証された GPG{% ifversion ssh-commit-verification %}、SSH、{% endif %} または S/MIME キーで署名されている場合、"検証済み" としてマークされます。 コミットまたはタグに {% data variables.product.prodname_dotcom %} によって検証できない署名がある場合、そのコミットまたはタグを「未検証」としてマークします。 それ以外の場合、検証ステータスは表示されません。

ただし、{% data variables.product.prodname_dotcom %} 設定で警戒モードを有効にすることで、他のユーザにコミットとタグに起因するアイデンティティの信頼性を高めることができます。 警戒モードを有効にすると、すべてのコミットとタグに 3 つの検証ステータスのいずれかがマークされます。

![署名の検証ステータス](/assets/images/help/commits/signature-verification-statuses.png)

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

すべてのコミットとタグに署名し、{% data variables.product.product_name %} でアカウントに対して検証されたメール アドレスをコミット先のメール アドレスとして使用する場合にのみ、警戒モードを有効にする必要があります。 このモードを有効にすると、ローカルで生成して {% data variables.product.prodname_dotcom %} にプッシュする署名されていないコミットまたはタグは、「未検証」としてマークされます。

{% data reusables.identity-and-permissions.verification-status-check %}

## 警戒モードの有効化

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. [SSH 設定] ページの "警戒モード" で、 **[Flag unsigned commits as unverified]\(署名されてないコミットを未検証としてフラグを設定する\)** を選択します。

   ![署名されていないコミットを未検証のチェックボックスとしてフラグを立てる](/assets/images/help/commits/vigilant-mode-checkbox.png)
