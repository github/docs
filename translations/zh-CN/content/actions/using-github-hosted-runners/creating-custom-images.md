---
title: 创建自定义映像
intro: '您可以为 {% data variables.actions.hosted_runner %} 创建自定义映像。'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

### 使用自定义映像创建 {% data variables.actions.hosted_runner %}

{% data variables.actions.hosted_runner %} 可以使用您自定义的操作系统映像来满足需要。 本文包括在 Azure 中创建映像并准备将其用于 {% data variables.product.prodname_ghe_managed %} 的简要步骤。 更多信息请参阅 [Azure 文档](https://docs.microsoft.com/en-us/azure/virtual-machines/)。

在此测试阶段，要为 {% data variables.actions.hosted_runner %} 创建自定义映像，您将需要能够提供虚拟机的 Azure 订阅。


1. 使用市场映像或虚拟硬盘 (VHD) 在您的租户中供应新的虚拟机。
2. （可选）在虚拟机上安装所需的软件。
3. 解除供应虚拟机：
     - 对于 Linux： `ssh` 连接到虚拟机并运行：
         ```sh
         $ sudo waagent -deprovision+user
         ```
     - 对于 Windows：执行[“使用 Sysprep 一般化来源虚拟机”](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/upload-generalized-managed#generalize-the-source-vm-by-using-sysprep)所述的步骤。

4. 使用 Azure CLI 解除分配并一般化虚拟机：
    ```powershell
    $resourceGroupName = "octocat-testgroup"
    $vmName = "octo-vm"

    Stop-AzVM -ResourceGroupName $resourceGroupName -Name $vmName
    Set-AzVM -ResourceGroupName $resourceGroupName -Name $vmName -Generalized
    ```
    - 将 `octo-vm` 替换为您的虚拟机名称。
    - 有关这些步骤的更多信息，请参阅“[如何创建虚拟机或 VHD 的管理映像](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/capture-image#step-1-deprovision-the-vm)”。
5. 为虚拟机的操作系统磁盘生成 SAS URI。
   - 使用 Azure 门户：在磁盘资源上，导航到 **Disk Export（磁盘导出）**，将 `URL expires in (seconds)（URL 到期时间 [秒]）`设置为 `86400`（24 小时），并生成 URL。
   - 使用 Azure CLI：
        ```powershell
        $resourceGroupName = "octocat-testgroup"
        $vmName = "octo-vm"

        $vm = Get-AzVM -ResourceGroupName $resourceGroupName -Name $vmName
        Grant-AzDiskAccess `
            -ResourceGroupName $resourceGroupName `
            -DiskName $vm.StorageProfile.OsDisk.Name `
            -Access Read `
            -DurationInSecond 86400
        ```
        - 将 `octo-vm` 替换为您的虚拟机名称。

在创建映像后，便可将其添加到 {% data variables.product.prodname_ghe_managed %}。 更多信息请参阅[“使用自定义映像添加 {% data variables.actions.hosted_runner %}”](/actions/using-github-hosted-runners/adding-ae-hosted-runners#adding-an-ae-hosted-runner-with-a-custom-image)。
