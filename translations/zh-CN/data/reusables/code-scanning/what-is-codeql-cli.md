{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
{% data variables.product.prodname_codeql_cli %} 是一个可用来分析代码的独立产品。 其主要用途是生成代码空间的数据库表示形式，即 {% data variables.product.prodname_codeql %} 数据库。 数据库准备就绪后，您可以进行交互式查询，或者运行一系列查询以生成一组 SARIF 格式的结果，然后将结果上传到 {% data variables.product.product_location %}。
{% endif %}
