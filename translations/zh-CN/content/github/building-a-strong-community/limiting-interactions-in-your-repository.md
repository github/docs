---
title: 限制仓库中的交互
intro: '组织所有者或管理员可临时限制某些用户在公共仓库中评论、打开议题或创建拉取请求，在一定的期限内限制活动。'
redirect_from:
  - /articles/limiting-interactions-with-your-repository/
  - /articles/limiting-interactions-in-your-repository
versions:
  free-pro-team: '*'
---

24 小时后，用户可以恢复在仓库中的正常活动。

{% tip %}

**提示：**组织所有者可以启用组织范围的活动限制。 如果启用组织范围的活动限制，您无法限制个别仓库的活动。 更多信息请参阅“[限制组织中的交互](/articles/limiting-interactions-in-your-organization)”。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在仓库的 Settings（设置）侧边栏中，单击 **Interaction limits（交互限制）**。 ![仓库设置中的交互限制 ](/assets/images/help/repository/repo-settings-interaction-limits.png)
4. 在“Temporary interaction limits（临时交互限制）”下，单击一个或多个选项。 ![临时交互限制选项](/assets/images/help/repository/temporary-interaction-limits-options.png)
    - **Limit to existing users（限于现有用户）**：限制帐户存在时间不到 24 小时、之前没有贡献也不是协作者的用户的活动。
    - **Limit to prior contributors（限于之前的贡献者）**：限制之前没有贡献也不是协作者的用户的活动。
    - "[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository)"

### 延伸阅读
- “[举报滥用或垃圾邮件](/articles/reporting-abuse-or-spam)”
- "[管理个人对组织仓库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)"
- "[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository)"
- "[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)"
