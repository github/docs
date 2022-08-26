---
title: 删除个人帐户
intro: '您可以随时在 {% data variables.product.product_location %} 上删除您的个人帐户。'
redirect_from:
  - /articles/deleting-a-user-account
  - /articles/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/deleting-your-user-account
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Delete your account
---

## About deletion of your personal account

删除个人帐户会移除帐户所拥有的所有仓库、私有仓库分支、wiki、议题、拉取请求和页面。 {% ifversion fpt or ghec %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted. Your resources and comments will become associated with the [ghost user](https://github.com/ghost).{% else %}Issues and pull requests you've created and comments you've made in repositories owned by other users will not be deleted.{% endif %}

{% ifversion ghec %}

{% note %}

**Note**: If your enterprise manages your account and you sign into {% data variables.product.product_location %} through your company's identity provider (IdP), you cannot delete your account. 更多信息请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)”。

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}When you delete your account we stop billing you. 与该帐户关联的电子邮件地址可用于 {% data variables.product.product_location %} 上不同的帐户。 90 天后，该帐户名称也可供其他任何人用于新帐户。 {% endif %}

If you're the only owner of an organization, you must transfer ownership to another person or delete the organization before you can delete your personal account. 如果组织中有其他所有者，则必须先从组织中删除自己，然后才能删除个人帐户。

更多信息请参阅以下文章。

- “[转让组织所有权](/articles/transferring-organization-ownership)”
- “[删除组织帐户](/articles/deleting-an-organization-account)”
- “[从组织中删除自己](/articles/removing-yourself-from-an-organization/)”

## 备份帐户数据

在删除个人帐户之前，请复制帐户拥有的所有仓库、私有分支、wiki、议题和拉取请求。 For more information, see "[Backing up a repository](/repositories/archiving-a-github-repository/backing-up-a-repository)."

{% warning %}

**Warning:** Once your personal account has been deleted, {% ifversion fpt or ghec %}{% data variables.product.company_short %}{% elsif ghes or ghae %}an enterprise owner{% endif %} cannot restore your content.

{% endwarning %}

## 删除个人帐户

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
3. 在帐户设置页面底部，“Delete account（删除帐户）”下，单击 **Delete your account（删除帐户）**。 然后即可删除个人帐户。
    - 如果您是组织中的唯一所有者，则必须将所有权转让给其他人或删除您的组织。
    - 如果组织中有其他组织所有者，则必须将自己从组织中删除。 ![帐户删除按钮](/assets/images/help/settings/settings-account-delete.png)
4. 在“Make sure you want to do this（确保要执行此操作）”对话框中，完成以下步骤，以确认您了解删除帐户时会发生什么： ![删除帐户确认对话框](/assets/images/help/settings/settings-account-deleteconfirm.png)
  {% ifversion fpt or ghec %}- 请记住，您的帐户拥有的所有存储库、私有存储库的分支、wiki、议题、拉取请求和 {% data variables.product.prodname_pages %} 网站都将被删除，您的计费将立即结束，并且您的用户名在 90 天后可供任何人在 {% data variables.product.product_name %} 上使用。
  {% else %}- 重新考虑一下，您帐户拥有的所有仓库、私有仓库分支、wiki、议题、提取请求和网页都将被删除，并且任何人将可在 {% data variables.product.product_name %} 上使用您的用户名。
  {% endif %}- 在第一个字段中，输入您的 {% data variables.product.product_name %} 用户名或电子邮件。
    - 在第二个字段中，键入提示短语。
