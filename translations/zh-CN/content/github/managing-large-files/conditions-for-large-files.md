---
title: 大文件的条件
intro: '{% data variables.product.product_name %} 限制了仓库允许的文件大小，如果文件大于最大文件限制，将会阻止推送到仓库。'
redirect_from:
  - /articles/conditions-for-large-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.large_files.use_lfs_tip %}

### 文件大于 {% data variables.large_files.warning_size %} 时的警告

如果尝试添加或更新大于 {% data variables.large_files.warning_size %} 的文件，您将从 Git 收到警告。 更改仍将成功推送到仓库，但您可以考虑删除提交，以尽量减少对性能的影响。 更多信息请参阅“[从仓库的历史记录中删除文件](/github/managing-large-files/removing-files-from-a-repositorys-history)”。

### 阻止大文件的推送

{% if currentVersion != "free-pro-team@latest" %}默认情况下， {% endif %}{% data variables.product.product_name %} 阻止超过 {% data variables.large_files.max_github_size %} 的推送。 {% if currentVersion != "free-pro-team@latest" %}但站点管理员可为您的 {% data variables.product.prodname_ghe_server %} 实例配置不同的限制。 更多信息请参阅“[设置 Git 推送限制](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-git-push-limits)”。{% endif %}
