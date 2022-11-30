---
title: すべてのコミットの検証ステータスを表示する
shortTitle: すべてのコミットの検証を表示
intro: コミット署名検証の警戒モードを有効にして、すべてのコミットとタグに署名検証ステータスのマークを付けることができます。
versions:
  free-pro-team: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits
---
{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

### 警戒モードについて

コンピューターでローカルで作業する場合、Git を使用すると、変更の作者とコミッターのアイデンティティを設定できます。 これにより、他のユーザが、自分が作成したコミットとタグが実際に自分によって作成されたものであると確信することが困難になる可能性があります。 この問題を解決するため、コミットとタグに署名することができます。 詳しい情報については、「[コミットに署名する](/github/authenticating-to-github/signing-commits)」および「[タグに署名する](/github/authenticating-to-github/signing-tags)」を参照してください。 {% data variables.product.prodname_dotcom %} は、署名されたコミットとタグに検証ステータスのマークを付けます。

デフォルトでは、コミットとタグは、正常に検証された GPG または S/MIME キーで署名されている場合、「検証済み」としてマークされます。 コミットまたはタグに検証できない署名がある場合、{% data variables.product.prodname_dotcom %} はコミットまたはタグを「未検証」としてマークします。 それ以外の場合、検証ステータスは表示されません。

ただし、{% data variables.product.prodname_dotcom %} 設定で警戒モードを有効にすることで、他のユーザにコミットとタグに起因するアイデンティティの信頼性を高めることができます。 警戒モードを有効にすると、すべてのコミットとタグに 3 つの検証ステータスのいずれかがマークされます。

![署名の検証ステータス](/assets/images/help/commits/signature-verification-statuses.png)

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

すべてのコミットとタグに署名する場合にのみ、警戒モードを有効にする必要があります。 このモードを有効にすると、ローカルで生成して {% data variables.product.prodname_dotcom %} にプッシュする署名されていないコミットまたはタグは、「未検証」としてマークされます。

{% data reusables.identity-and-permissions.verification-status-check %}

### 警戒モードの有効化

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. [SSH Settings] ページの [Vigilant mode] で、[**Flag unsigned commits as unverified**] を選択します。

   ![署名されていないコミットを未検証のチェックボックスとしてフラグを立てる](/assets/images/help/commits/vigilant-mode-checkbox.png)
