---
title: Crear imágenes personalizadas
intro: 'Puedes crear imágenes personalizadas para los {% data variables.actions.hosted_runner %}.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

### Crear un {% data variables.actions.hosted_runner %} con una imagen personalizada

Los {% data variables.actions.hosted_runner %} pueden utilizar imágenes de sistema operativo que hayas personalizado para que se adapten a tus necesidades. Este artículo incluye los pasos de alto nivel para crear la imagen en Azure y prepararla para {% data variables.product.prodname_ghe_managed %}. Para obtener más información, refiérete a la [Documentación de Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/).

Durante este beta, para poder crear una imagen personalizada para los {% data variables.actions.hosted_runner %}, necesitarás una suscripción a Azure que pueda aprovisionar una máquina virtual.


1. Aprovisiona una MV nueva en tu inquilino utilizando una imagen de marketplace o un disco duro virtual (VHD).
2. Opcionalmente, instala el software requerido en la MV.
3. Desaprovisiona la MV:
     - Para Linux: entra con `ssh` en la MV y ejecuta:
         ```sh
         $ sudo waagent -deprovision+user
         ```
     - Para Windows: Sigue los pasos descritos en ["Generalizar la MV de origen utilizando Sysprep](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/upload-generalized-managed#generalize-the-source-vm-by-using-sysprep)".

4. Utiliza el CLI de Azure para desasignar y generalizar la MV:
    ```powershell
    $resourceGroupName = "octocat-testgroup"
    $vmName = "octo-vm"

    Stop-AzVM -ResourceGroupName $resourceGroupName -Name $vmName
    Set-AzVM -ResourceGroupName $resourceGroupName -Name $vmName -Generalized
    ```
    - Reemplaza a `octo-vm` con el nombre de tu máquina virtual.
    - Para obtener más información acerca de estos pasos, consulta la sección "[Cómo crear una imagen administrada de una máquina virtual o VHD](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/capture-image#step-1-deprovision-the-vm)".
5. Genera una URI de SAS para el disco del sistema operativo de la MV.
   - Utiliza el portal de Azure: En el recurso del disco, navega a **Exportación de Disco**, configura `URL expires in (seconds)` en `86400` (24 horas), y genera la URL.
   - Utiliza el CLI de Azure:
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
        - Reemplaza a `octo-vm` con el nombre de tu máquina virtual.

Una vez que hayas creado la imagen, puedes agregarla a {% data variables.product.prodname_ghe_managed %}. Para obtener más información, consulta la sección "[Agregar un {% data variables.actions.hosted_runner %} con una imagen personalizada"](/actions/using-github-hosted-runners/adding-ae-hosted-runners#adding-an-ae-hosted-runner-with-a-custom-image).
