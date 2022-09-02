{% note %}

{% ifversion fpt or ghec %}

**注意：** {% data variables.product.prodname_codeql_runner %} 已弃用。 在 {% data variables.product.product_name %} 上，{% data variables.product.prodname_codeql_runner %} 一直支持到 2022 年 3 月。 您应该升级到最新版本的 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases)。

{% elsif ghes > 3.3 %}

**注意：** {% data variables.product.prodname_codeql_runner %} 已弃用，未包含在 {% data variables.product.prodname_ghe_server %} 3.4 中。 您应该迁移到 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) 版本 2.7.6。

{% elsif ghes < 3.4 %}

**注意：** {% data variables.product.prodname_codeql_runner %} 将弃用。 在 {% data variables.product.prodname_ghe_server %} 3.0 及更高版本上，可以安装 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases) 版本 2.6.3 以替换 {% data variables.product.prodname_codeql_runner %}。

{% elsif ghae %}

**注意：** {% data variables.product.prodname_codeql_runner %} 已弃用。 您应该迁移到 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-action/releases)。

{% endif %}

更多信息请参阅 [codeQL 运行器弃用](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/)。 有关迁移到 {% data variables.product.prodname_codeql_cli %} 的更多信息，请参阅“[从 CodeQL 运行器迁移到 CodeQL CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)”。

{% endnote %}
