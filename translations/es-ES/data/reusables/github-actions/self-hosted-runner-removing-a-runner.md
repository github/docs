1. Debajo de {% if currentVersion == "free-pro-team@latest" %}"Ejecutores"{% else %}"Ejecutores auto-hospedados"{% endif %}, ubica el ejecutor en la lista. Si tu ejecutor está en un grupo, da clic en {% octicon "chevron-down" aria-label="The downwards chevron" %} para expandir la lista.
1. Da clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} junto al ejecutor que quieres eliminar, y luego da clic en **Eliminar**.

    ![Eliminar una configuración de ejecutor autoalojado](/assets/images/help/settings/actions-runner-remove.png)
1. Verás las instrucciones para eliminar el ejecutor auto-hospedado. Completa cualquiera de los siguientes pasos para eliminar el ejecutor, dependiendo de si aún se puede acceder a él:

    * **Si tienes acceso a la máquina del ejecutor:** Sigue las instrucciones en la pantalla para que el sistema operativo de tu máquina ejecute el comando de eliminación. Las instrucciones incluyen la URL solicitada y un token de tiempo limitado generado automáticamente.

        El comando de eliminación realiza las siguientes tareas:

        * Elimina el ejecutor de {% data variables.product.product_name %}.
        * Elimina cualquier archivo de configuración de la aplicación del ejecutor autoalojado en la máquina.
        * Elimina todos los servicios configurados si no se ejecuta en modo interactivo.

    * **Si no tienes acceso a la máquina:** Da clic en **Sí, forzar la eliminación de este ejecutor** para forzar a {% data variables.product.product_name %} a que remueva el ejecutor.
