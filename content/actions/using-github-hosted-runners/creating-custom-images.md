---
title: Creating custom images
intro: 'You can create custom images for {% data variables.actions.hosted_runner %}s.'
versions:
  ghae: '*'
---

{% data reusables.actions.ae-beta %}

## Creating an {% data variables.actions.hosted_runner %} with a custom image

{% data variables.actions.hosted_runner %}s can use operating system images that you've customized to suit your needs. This article includes the high level steps for creating the image in Azure and preparing it for {% data variables.product.prodname_ghe_managed %}. For more information, refer to [the Azure documentation](https://docs.microsoft.com/en-us/azure/virtual-machines/).

During this beta, to be able to create a custom image for {% data variables.actions.hosted_runner %}s, you will need an Azure subscription that is able to provision a virtual machine.


1. Provision a new VM in your tenant using a marketplace image or a virtual hard drive(VHD).
2. Optionally, install your required software on the VM.
3. Deprovision the VM:
     - For Linux: `ssh` to the VM and run:
         ```sh
         $ sudo waagent -deprovision+user
         ```
     - For Windows: Follow the steps described at ["Generalize the source VM by using Sysprep](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/upload-generalized-managed#generalize-the-source-vm-by-using-sysprep)."

4. Use the Azure CLI to deallocate and generalize the VM:
    ```powershell
    $resourceGroupName = "octocat-testgroup"
    $vmName = "octo-vm"

    Stop-AzVM -ResourceGroupName $resourceGroupName -Name $vmName
    Set-AzVM -ResourceGroupName $resourceGroupName -Name $vmName -Generalized
    ```
    - Replace `octo-vm` with the name of your virtual machine.
    - For more information regarding these steps, see "[How to create a managed image of a virtual machine or VHD](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/capture-image#step-1-deprovision-the-vm)."
5. Generate a SAS URI for the VM's operating system disk.
   - Using the Azure Portal: On the disk resource, navigate to **Disk Export**, set `URL expires in (seconds)` to `86400` (24 hours), and generate the URL.
   - Using the Azure CLI:
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
        - Replace `octo-vm` with the name of your virtual machine.

Once you've created the image, you can have it added to {% data variables.product.prodname_ghe_managed %}. For more information, see ["Adding an {% data variables.actions.hosted_runner %} with a custom image"](/actions/using-github-hosted-runners/adding-ae-hosted-runners#adding-an-ae-hosted-runner-with-a-custom-image).
