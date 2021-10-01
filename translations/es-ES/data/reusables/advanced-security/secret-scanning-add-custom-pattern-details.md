1. Ingresa los detalles de tu patrón personalizado nuevo:
   1. Debes proporcionar por lo menos el nombre de tu patrón y una expresión regular para el formato de tu patrón secreto.
   1. Puedes hacer clic en **{% octicon "chevron-down" aria-label="down" %} Más opciones** para proporcionar otro tipo de contenido circundante o requisitos de coincidencia adicionales para el formato de secreto.
   1. Provide a sample test string to make sure your configuration is matching the patterns you expect.

   ![Crear un formato de patrón personalizado del {% data variables.product.prodname_secret_scanning %}](/assets/images/help/repository/secret-scanning-create-custom-pattern.png)
1. When you are satisfied with your new custom pattern, click {% ifversion fpt or ghes > 3.2 or ghae-next %}**Create pattern**{% elsif ghes = 3.2 %}**Create custom pattern**{% endif %}.
