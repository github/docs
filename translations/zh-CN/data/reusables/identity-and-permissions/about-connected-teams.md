{% data variables.product.prodname_dotcom %} 团队连接到 IdP 组后，您的 IdP 管理员必须通过身份提供程序进行团队成员资格更改。 如果团队连接至 IdP 组，则无法在 {% data variables.product.product_name %} 上或使用 API 管理团队成员。

要管理任何 {% data variables.product.prodname_dotcom %} 团队的仓库访问权限，包括连接至 IdP 组的团队，必须在 {% data variables.product.product_name %} 上进行变更。 更多信息请参阅“[关于团队](/articles/about-teams)”和“[管理团队对组织仓库的访问](/articles/managing-team-access-to-an-organization-repository)”。

默认情况下，您可以选择想要团队成员访问的仓库。 连接的 IdP 组将自动拥有这些仓库的访问权限。 更多信息请参阅“[管理团队的组织仓库访问权限](/articles/managing-team-access-to-an-organization-repository)”。

通过 IdP 进行的所有团队成员资格更改都将在 {% data variables.product.product_name %} 审核日志中显示为团队同步自动程序所进行的更改。 您的 IdP 会将团队成员数据发送至 {% data variables.product.prodname_dotcom %}，每小时一次。