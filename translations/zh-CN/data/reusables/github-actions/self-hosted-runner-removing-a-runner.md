1. 在 {% if currentVersion == "free-pro-team@latest" %}“运行器”{% else %}“自托管运行器”{% endif %} 下，找到列表中的运行器。 如果您的运行器在一个组中，请单击 {% octicon "chevron-down" aria-label="The downwards chevron" %} 以展开列表。
1. 单击要删除的运行器旁边的 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击 **Remove（删除）**。

    ![删除自托管运行器设置](/assets/images/help/settings/actions-runner-remove.png)
1. 您将看到删除自托管运行器的说明。 完成以下任一步骤来删除运行器，具体取决于它是否仍然可以访问：

    * **如果您可以访问运行器机器：**按照您机器操作系统的屏幕说明运行删除命令。 该说明包括必需的 URL 和一个自动生成的有时限的令牌。

        删除命令执行以下任务：

        * 从 {% data variables.product.product_name %} 删除运行器。
        * 删除机器上的任何自托管运行器应用程序配置文件。
        * 如果未在交互模式下运行，删除配置的任何服务。

    * **如果无法访问该机器**，请单击 **Yes, force remove this runner（是，强制删除此运行器）**以强制 {% data variables.product.product_name %} 删除运行器。
