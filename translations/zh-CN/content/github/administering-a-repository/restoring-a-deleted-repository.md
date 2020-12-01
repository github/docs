---
title: 恢复已删除的仓库
intro: 您可以恢复一些已删除的仓库来恢复其内容。
redirect_from:
  - /articles/restoring-a-deleted-repository
versions:
  free-pro-team: '*'
---

任何人都可以恢复其用户帐户拥有的已删除仓库。 组织所有者可以恢复该组织所拥有的已删除仓库。

### 关于仓库恢复

删除的仓库可在 90 天内恢复，除非仓库是目前非空白的复刻网络的一部分。 复刻网络由父仓库、仓库的复刻以及该仓库复刻的复刻组成。 如果仓库是复刻网络的一部分，则在网络中的每个其他仓库被删除或者从网络中脱离之前，无法恢复它。 有关复刻的更多信息，请参阅“[关于复刻](/articles/about-forks)”。

如果要恢复属于当前非空白的复刻网络一部分的仓库，可以联系 {% data variables.contact.contact_support %}。

仓库被删除后，可能需要一个小时才能恢复。

恢复仓库不会恢复发行版附件或团队权限。 已恢复的议题不会被标记。

### 恢复用户帐户所拥有的已删除仓库

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.repo-tab %}
{% data reusables.user_settings.deleted-repos %}
{% data reusables.user_settings.restore-repo %}
{% data reusables.user_settings.restore-confirmation %}

### 恢复组织所拥有的已删除仓库

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.deleted-repos %}
{% data reusables.user_settings.restore-repo %}
{% data reusables.user_settings.restore-confirmation %}

### 延伸阅读

- "[删除仓库](/articles/deleting-a-repository)"
