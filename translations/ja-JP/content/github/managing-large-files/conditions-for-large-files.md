---
title: 大容量ファイルの制限
intro: '{% data variables.product.product_name %}はリポジトリで許可されるファイルのサイズを制限し、ファイルが最大ファイル制限よりも大きい場合、リポジトリへのプッシュをブロックします。'
redirect_from:
  - /articles/conditions-for-large-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.large_files.use_lfs_tip %}

### {% data variables.large_files.warning_size %}より大きいファイルへの警告

{% data variables.large_files.warning_size %}より大きいファイルを追加または更新しようとすると、Gitから警告が表示されます。 変更は引き続きリポジトリに正常にプッシュされますが、パフォーマンスへの影響を最小限に抑えるためにコミットを削除することを検討してもよいでしょう。 詳細は「[リポジトリの履歴からファイルを削除する](/github/managing-large-files/removing-files-from-a-repositorys-history)」を参照してください。

### 大きなファイルのブロックされたプッシュ

{% if currentVersion != "free-pro-team@latest" %}By default, {% endif %}{% data variables.product.product_name %} blocks pushes that exceed {% data variables.large_files.max_github_size %}. {% if currentVersion != "free-pro-team@latest" %}However, a site administrator can configure a different limit for your {% data variables.product.prodname_ghe_server %} instance. 詳しい情報については 、「[Git のプッシュ制限を設定する](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-git-push-limits)」を参照してください。{% endif %}
