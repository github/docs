{% data variables.product.prodname_GH_advanced_security %}の各ライセンスは、それらの機能を使用できるアカウントもしくはシートの最大数を指定します。 少なくとも1つのリポジトリでこの機能が有効化されているそれぞれのアクティブなコミッターは、1つのシートを使用します。 A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored.

{% note %}

**Note:** Active committers are calculated using both the commit author information and the timestamp for when the code was pushed to {% data variables.product.product_name %}.

- When a user pushes code to {% data variables.product.prodname_dotcom %}, every user who authored code in that push counts towards {% data variables.product.prodname_GH_advanced_security %} seats, even if the code is not new to {% data variables.product.prodname_dotcom %}.

- Users should always create branches from a recent base, or rebase them before pushing. This will ensure that users who have not committed in the last 90 days do not take up {% data variables.product.prodname_GH_advanced_security %} seats.

{% endnote %}

