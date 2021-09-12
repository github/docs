如果您在允许列表设置中选择 **Enable IP allow list configuration for installed GitHub Apps（为安装的 GitHub 应用程序启用 IP 允许列表配置）**，则已安装的 {% data variables.product.prodname_github_apps %} 中的 IP 地址将添加到允许列表。 不管您的允许列表目前是否启用，都会发生这种情况。 如果您安装 {% data variables.product.prodname_github_app %}，然后该应用程序的创建者更改其允许列表中的地址，则允许列表会自动更新这些更改。

您可以通过查看描述字段来识别从 {% data variables.product.prodname_github_apps %} 自动添加的 IP 地址。 这些 IP 地址的描述是：“由 NAME GitHub App管理”。 与手动添加的地址不同，您无法编辑、删除或禁用从 {% data variables.product.prodname_github_apps %} 自动添加的 IP 地址。
