---
title: 禁用议题
intro: 如果您不接受贡献或漏洞报告，可能希望关闭仓库的议题。
redirect_from:
  - /articles/disabling-issues
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在 Features（功能）下，取消选择 **Issues（议题）**复选框。 ![删除议题复选框](/assets/images/help/issues/issues_settings_remove_from_repo.png)

如果您决定未来再次启用议题，先前添加的任何议题将可用。

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}
请联系

{% data variables.contact.contact_support %}，如果因陌生人滥用而需要关闭议题。
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}
