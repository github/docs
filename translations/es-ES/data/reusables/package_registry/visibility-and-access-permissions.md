{% ifversion fpt or ghec %}
Si tienes permisos administrativos en una imagen de contenedor, peudes configurar los permisos de acceso para la imagen de contenedor en privados o públicos. Las imágenes públicas permiten el acceso anónimo y pueden extraerse sin autenticación o ingresar a ellas através del CLI.

Como administrador, también puedes otorgar permisos de acceso para una imagen de contenedor que esté separada de los permisos que configuraste a nivel de organización y de repositorio.

Para el caso de las imágenes que publique y le pertenezcan a una cuenta personal, puedes darle un rol de acceso a cualquier persona. Puedes otorgar un rol de acceso a cualquier persona o equipo en la organización para las imágenes de contenedor que pertenecen a, o que publica una cuenta de usuario.

| Permiso   | Descripción del acceso                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| lectura   | Puede descargar el paquete. <br> Puede leer los metadatos del paquete.                                                                                       |
| escritura | Puede cargar y descargar este paquete. <br> Puede leer y escribir metadatos del paquete.                                                                     |
| admin     | Puede cargar, descargar, borrar y administrar este paquete. <br> Puede leer y escribir metadatos del paquete. <br> Puede otorgar permisos del paquete. |
{% endif %}
