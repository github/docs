---
title: Issues を無効化する
intro: コントリビューションやバグレポートを受け付けないレポジトリの場合、Issue をオフにしたほうがよいかもしれません。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/disabling-issues
  - /articles/disabling-issues
  - /github/managing-your-work-on-github/disabling-issues
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Features] の下で、[**Issues**] チェックボックスの選択を解除します。 ![[Issues] チェックボックスの解除](/assets/images/help/issues/issues_settings_remove_from_repo.png)

将来、再び Issue を有効化することにした場合、それまでに追加された Issue もすべて使用できるようになります。

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

他者による悪用を防ぐため Issues をオフにしたいということであれば、{% data variables.contact.contact_support %} までご連絡ください。
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}
