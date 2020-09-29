{% note %}

**注意：**
- 不能更改复刻仓库的 Git 读取访问设置，因为它们的访问设置默认继承自根仓库。
- 如果公共仓库变成私人，则匿名 Git 读取访问权限将对该仓库及其复刻自动禁用。
- 如果使用匿名身份验证的仓库包含 {% data variables.large_files.product_name_short %} 资产，它将无法下载 {% data variables.large_files.product_name_short %} 资产，因为它们仍然需要身份验证。 强烈建议不要对包含 {% data variables.large_files.product_name_short %} 资产的仓库启用匿名 Git 读取访问。

{% endnote %}
