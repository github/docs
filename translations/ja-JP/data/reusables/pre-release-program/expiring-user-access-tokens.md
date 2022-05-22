{% ifversion ghes < 3.1 %}
{% note %}

**ノート:** ユーザトークンの期限設定は、ユーザからサーバーに対するトークンの期限設定のベータ版機能の一部であり、変更される可能性があります。 ユーザからサーバーに対するトークンの期限設定のベータ機能にオプトインするには、「[アプリケーションのオプション機能を有効化する](/developers/apps/activating-optional-features-for-apps)」を参照してください。 詳しい情報については「[ユーザからサーバーへのアクセストークンの期限設定](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)」を参照してください。

{% endnote %}

{% elsif fpt or ghes > 3.0 or ghae %}

{% note %}

**ノート:** ユーザトークンの期限設定は、現在オプションの機能であり、変更されることがあります。 ユーザからサーバーに対するトークンの期限設定にオプトインもしくはアウトするには、「[アプリケーションのオプション機能を有効化する](/developers/apps/activating-optional-features-for-apps)」を参照してください。 詳しい情報については「[ユーザからサーバーへのアクセストークンの期限設定](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)」を参照してください。

{% endnote %}

{% endif %}
