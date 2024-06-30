{% note %}

**Note:** You must set a non-zero spending limit on your personal, organization, or enterprise account before the account can be billed for use of {% data variables.product.prodname_github_codespaces %}.

{% endnote %}

By default, all accounts have a {% data variables.product.prodname_github_codespaces %} spending limit of $0 USD. This prevents new codespaces being created, or existing codespaces being opened, if doing so would incur a billable cost to your personal, organization, or enterprise account. For personal accounts, if you have access to create a codespace, you can do so as long as the account has not reached the limit of its monthly included usage. For organizations and enterprises, the default spending limit means that, to allow people to create codespaces that are billed to the organization, or its parent enterprise, the limit must be changed to a value above $0 USD.
