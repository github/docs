---
title: 管理自托管运行器的访问权限
intro: 您可以控制哪些仓库可以将作业发送给组织的自托管运行器。
versions:
  free-pro-team: '*'
---

在组织级别添加的自托管运行器可以处理组织中所有仓库的作业。 如果需要限制对自托管运行器的访问权限，可以将策略配置为仅处理私有仓库的作业，或者定义允许的仓库列表。

### 控制哪些存储库可以访问组织的运行器

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. 在“Self-hosted runners（自托管运行器）”旁边，单击 **Manage repository permissions（管理仓库权限）**。 ![管理仓库权限](/assets/images/help/settings/actions-runner-manage-permissions.png)

1. 从下拉菜单中选择以下选项之一：

   * **All repositories（所有仓库）** - 组织中的所有公共和私有仓库都可以向组织的自托管运行器发送作业。
   * **Private repositories（私有仓库）** - 只有组织中的私有仓库才能向组织的自托管运行器发送作业。
   * **Selected repositories（选定的仓库）** - 使用仓库选择菜单选择组织中的哪些仓库可以向组织的自托管运行器发送作业。
