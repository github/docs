{% note %}

**Notas:**
- No puedes cambiar las configuraciones de acceso de lectura de Git para los repositorios bifurcados ya que heredan sus configuraciones de acceso del repositorio raíz por defecto.
- Si un repositorio público se convierte en privado, entonces el acceso de lectura anónimo de Git se inhabilitará automáticamente para ese repositorio y sus bifurcaciones.
- Si un repositorio con autenticación anónima contiene activos de {% data variables.large_files.product_name_short %}, fallará al descargar los activos de {% data variables.large_files.product_name_short %} ya que aún requerirá autenticación. Recomendamos firmemente no habilitar el acceso de lectura anónimo de Git para un repositorio con activos de {% data variables.large_files.product_name_short %}.

{% endnote %}
