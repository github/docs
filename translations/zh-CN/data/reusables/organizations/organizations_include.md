组织包括：
- 无限的成员资格，以各种不同的角色授予[对组织及其数据的不同访问权限](/articles/permission-levels-for-an-organization)
- 能够向成员授予[对组织仓库的一系列访问权限](/articles/repository-permission-levels-for-an-organization)
- [反映公司或组结构的嵌套团队](/articles/about-teams)，级联了访问权限和提及{% ifversion not ghae %}
- 组织所有者能够查看成员的[双重身份验证 (2FA) 状态](/articles/about-two-factor-authentication)
- 用于[要求所有组织成员使用双重身份验证](/articles/requiring-two-factor-authentication-in-your-organization)的选项{% endif %}

{% ifversion fpt or ghec %}
You can use organizations for free, with
{% data variables.product.prodname_free_team %}, which includes unlimited collaborators on unlimited public repositories with full features, and unlimited private repositories with limited features.

For additional features, including sophisticated user authentication and management, and improved support coverage, you can upgrade to {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}. {% data reusables.gated-features.more-info %}

If you use {% data variables.product.prodname_ghe_cloud %}, you have the option to purchase a license for {% data variables.product.prodname_GH_advanced_security %} and use the features on private repositories. {% data reusables.advanced-security.more-info-ghas %}

{% ifversion fpt %}
{% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}
{% endif %}
