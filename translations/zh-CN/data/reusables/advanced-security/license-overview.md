{% data variables.product.prodname_GH_advanced_security %} 的每个许可证都规定了可以使用这些功能的最大帐户或席位数量。 至少一个启用了该功能的仓库的每个活跃提交者将使用一个席位。 A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored.

{% note %}

**Note:** Active committers are calculated using both the commit author information and the timestamp for when the code was pushed to {% data variables.product.product_name %}.

- When a user pushes code to {% data variables.product.prodname_dotcom %}, every user who authored code in that push counts towards {% data variables.product.prodname_GH_advanced_security %} seats, even if the code is not new to {% data variables.product.prodname_dotcom %}.

- Users should always create branches from a recent base, or rebase them before pushing. This will ensure that users who have not committed in the last 90 days do not take up {% data variables.product.prodname_GH_advanced_security %} seats.

{% endnote %}

