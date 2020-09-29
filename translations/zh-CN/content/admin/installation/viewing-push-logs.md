---
title: 查看推送日志
intro: '站点管理员可以查看 {% data variables.product.product_location_enterprise %} 上任何仓库的 Git 推送操作列表。'
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs/
  - /enterprise/admin/installation/viewing-push-logs
versions:
  enterprise-server: '*'
---

推送日志条目会显示：

- 推送发起人
- 是否为强制推送
- 某人推送到的分支
- 推送所使用的协议
- 发起的 IP 地址
- 推送所使用的 Git 客户端
- 操作前后的 SHA 哈希

### 查看仓库的推送日志

1. 导航到仓库。
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 在页面右上角，单击 {% octicon "shield" aria-label="The shield" %} **Security**。 ![Security 选项卡](/assets/images/enterprise/site-admin-settings/repo/repo-security-top-tab.png)
4. 在左侧边栏中，单击 **Push Log**。 ![Push Log 选项卡](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

### 在命令行上查看仓库的推送日志

1. 通过 SSH 登录您的设备。 更多信息请参阅“[访问管理 shell (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)”。
2. 在相应的 Git 仓库中，打开审核日志文件：
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "less audit_log"
  ```
