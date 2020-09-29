1. Debajo de "Eejcutores auto-hospedados", da clic en **Agregar ejecutor**.

1. Selecciona el sistema operativo y arquitectura de tu máquina de ejecutor auto-hospedado. ![Selecciona el sistema operativo del ejecutor autoalojado](/assets/images/help/settings/actions-runner-architecture-os.png)


1. Verás instrucciones que te mostrarán cómo descargar la aplicación del ejecutor e instalarla en tu máquina de ejecutor autoalojado.

   Abre un shell en tu máquina de ejecutor autoalojado y ejecuta cada comando del shell en el orden que se muestra.

   {% note %}

   **Nota:** En Windows, si deseas instalar la aplicación del ejecutor autoalojado como un servicio, debes abrir un shell con privilegios de administrador. También recomendamos que uses `C:\actions-runner` como el directorio para la aplicación del ejecutor autoalojado de modo que las cuentas del sistema de Windows puedan acceder al directorio del ejecutor.

   {% endnote %}

   Las instrucciones te guían para completar estas tareas:
   - Descargar y extraer la aplicación de ejecutor autoalojado.
   - Ejecutar el script `config` para configurar la aplicación del ejecutor auto-hospedado y registrarlo con {% data variables.product.prodname_actions %}. El script `config` requiere la URL destino y un token de tiempo limitado generado automáticamente para autenticar la solicitud.
     - En Windows, el script `config` también te pregunta si deseas instalar la aplicación del ejecutor autoalojado como un servicio. Para Linux y macOS, puedes instalar un servicio después de que termines de agregar el ejecutor. Para obtener más información, consulta "[Configurar la aplicación del ejecutor autoalojado como un servicio](/actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service)."
   - Ejecutar la aplicación del ejecutor autoalojado para conectar la máquina a las {% data variables.product.prodname_actions %}.
