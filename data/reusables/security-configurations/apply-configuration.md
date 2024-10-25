1. To apply the {% data variables.product.prodname_security_configuration %}, click **Apply**.

{% ifversion fpt or ghec or ghes > 3.15 %}The {% data variables.product.prodname_security_configuration %} is applied to both active and archived repositories because some security features run on archived repositories, for example, {% data variables.product.prodname_secret_scanning %}. In addition, if a repository is later unarchived you can be confident that it is protected by the chosen {% data variables.product.prodname_security_configuration %}.{% elsif ghes = 3.15 %}
   > [!NOTE]
   >On {% data variables.product.prodname_ghe_server %} {{ allVersions[currentVersion].currentRelease }} the {% data variables.product.prodname_security_configuration %} is applied only to active repositories and not archived repositories.{% endif %}
