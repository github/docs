---
title: 大容量ファイルの制限
intro: '{{ site.data.variables.product.product_name }}はリポジトリで許可されるファイルのサイズを制限し、ファイルが最大ファイル制限よりも大きい場合、リポジトリへのプッシュをブロックします。'
redirect_from:
  - /articles/conditions-for-large-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{{ site.data.reusables.large_files.use_lfs_tip }}

### {{ site.data.variables.large_files.warning_size }}より大きいファイルへの警告

{{ site.data.variables.large_files.warning_size }}より大きいファイルを追加または更新しようとすると、Gitから警告が表示されます。 変更は引き続きリポジトリに正常にプッシュされますが、パフォーマンスへの影響を最小限に抑えるためにコミットを削除することを検討してもよいでしょう。 詳細は「[リポジトリの履歴からファイルを削除する](/github/managing-large-files/removing-files-from-a-repositorys-history)」を参照してください。

### 大きなファイルのブロックされたプッシュ

{% if currentVersion != "free-pro-team@latest" %}デフォルトでは、{% endif %}{{ site.data.variables.product.product_name }}は{{ site.data.variables.large_files.max_github_size }}以上のプッシュをブロックします。 {% if currentVersion != "free-pro-team@latest" %}ただし、サイト管理者は、{{ site.data.variables.product.prodname_ghe_server }}インスタンスに別の制限を構成できます。 詳しい情報については 、「[Git のプッシュ制限を設定する](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-git-push-limits)」を参照してください。{% endif %}
