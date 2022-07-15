默认情况下，每次创建或更新预构建模板或推送到启用了预构建的分支时，都会触发 {% data variables.product.prodname_actions %} 工作流程。 与其他工作流程一样，在预构建工作流程运行时，它们将消耗帐户中包含的一些操作分钟数（如果有），或者产生操作分钟数的费用。 有关操作分钟数定价的详细信息，请参阅[关于 {% data variables.product.prodname_actions %} 计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。

除了 {% data variables.product.prodname_actions %} 分钟数外，您还需要为存储与给定存储库和区域的每个预构建配置关联的预构建模板付费。 预构建模板的存储按与代码空间存储相同的费率计费。 更多信息请参阅[计算存储使用](#calculating-storage-usage)”。

若要减少操作分钟数的消耗，可以将预构建模板设置为仅在对开发容器配置文件进行更改时更新，或仅按自定义计划进行更新。 您还可以通过调整要为预构建配置保留的模板版本数来管理存储使用情况。 更多信息请参阅“[配置预构建](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)”。

如果您是组织所有者，则可以通过下载组织的 {% data variables.product.prodname_actions %} 使用情况报告来跟踪预构建工作流程和存储的使用情况。 您可以通过筛选 CSV 输出以仅包含名为“创建预构建代码空间”的工作流程来标识预构建的工作流程运行。 更多信息请参阅“[查看 {% data variables.product.prodname_actions %} 使用情况](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization)”。
