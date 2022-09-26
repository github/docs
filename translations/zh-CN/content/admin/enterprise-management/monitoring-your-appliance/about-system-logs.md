---
title: 关于系统日志
intro: '{% data variables.product.product_name %} 保存系统事件的错误和消息日志。 日志可用于标识用户、应用程序和系统级的操作和异常。'
versions:
  ghes: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: e41702e25c7cc222cefb4eedb4e0322adf3acdba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063328'
---
## 系统日志

默认情况下，{% data variables.product.product_name %} 的系统日志每 24 小时自动轮换一次，并保留 7 天。 系统日志包括系统级事件、应用程序日志和 Git 事件数据。 由于日志文件经常被写入并且可能很大，因此在与 {% data variables.product.prodname_ghe_server %} 实例分开的主机上提取和解析相关日志条目可能很有用。

可将系统日志转发到第三方系统或服务器，以延长保留期。 有关详细信息，请参阅“[日志转发](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)”。

除了查看系统日志之外，还可以其他方式监视企业中的活动，例如查看审核日志、推送日志和管理全局 Webhook。 有关详细信息，请参阅“[监视企业中的活动](/admin/monitoring-activity-in-your-enterprise)”。

## 日志类型

下面列出了 {% data variables.product.product_name %} 设备使用的主要日志及其功能：

| 路径 | 说明 |
|------|-------------|
| `/var/log/github/audit.log` | 审核的用户、存储库和系统事件。
| `/var/log/github/unicorn.log` | API 和 Web 接口流量。
| `/var/log/github/exceptions.log` | 应用程序级错误。
| `/var/log/haproxy.log` | 到达设备的所有 IP 流量。
| `/var/log/hookshot/resqued.log` | Webhook 传递和失败。
| `/var/log/github/auth.log` | 身份验证请求，无论是通过内置、LDAP、CAS 还是 SAML 方法发出。
| `/var/log/github/gitauth.log` | 所有 Git 身份验证请求。

Git 活动和身份验证请求由 `babeld` 服务进行处理。

容器化多个 {% data variables.product.product_name %} 服务，例如 `babeld` 服务。 容器化日志将写入 `systemd journal`，并且可随时使用 `journalctl` 命令进行查询。

## 已审核的系统事件

`audit.log` 文件中的所有条目都使用 `github_audit` 关键字并可通过它进行筛选。

例如，此条目显示已创建的新仓库。

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

此示例显示提交已推送到仓库。

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```

## 支持包

支持包中有系统日志，所有审核信息都记录到 `github-logs` 目录中的 `audit.log` 文件中。 有关详细信息，请参阅“[将数据提供给 {% data variables.product.prodname_dotcom %} 支持部门](/support/contacting-github-support/providing-data-to-github-support)”。

## 延伸阅读

- [`journalctl` 命令的 Linux 手册页](http://man7.org/linux/man-pages/man1/journalctl.1.html)
