---
title: Reviewing your deploy keys
intro: You should review deploy keys to ensure that there aren't any unauthorized (or possibly compromised) keys. You can also approve existing deploy keys that are valid.
redirect_from:
  - /articles/reviewing-your-deploy-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. In the left sidebar, click **Deploy keys**.
![Deploy keys setting](/assets/images/help/settings/settings-sidebar-deploy-keys.png)
4. On the Deploy keys page, take note of the deploy keys associated with your account. For those that you don't recognize, or that are out-of-date, click **Delete**. If there are valid deploy keys you'd like to keep, click **Approve**.
	![Deploy key list](/assets/images/help/settings/settings-deploy-key-review.png)

For more information, see "[Managing deploy keys](/guides/managing-deploy-keys)."
