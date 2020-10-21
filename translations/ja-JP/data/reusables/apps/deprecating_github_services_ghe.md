{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
{% note %}

**ノート:** GitHub Enterprise リリース2.17以降では、管理者が新しいGitHub Servicesをインストールすることはできなくなっており、既存のサービスはGitHub Enterprise 2.20以降で動作しなくなります。 サービスをwebhookに更新するためには、[GitHub Servicesの置き換えガイド](/v3/guides/replacing-github-services)が利用できます。

{% endnote %}
{% endif %}
