{% warning %}

**Advertencia**: Antes de que agregues una opción de `ignore` al archivo de configuración *dependabot.yml*, revisa si el repositorio ya tiene alguna preferencia de ignorar (Que se haya creado utilizando los comandos de `@dependabot ignore`). Cuando agregas una opción de `ignore` al archivo de configuración *dependabot.yml*, esto ignora cualquier preferencia de ignorar almacenada centralmente para ese administrador de paquetes, rama, y directorio.

Esto afecta a las actualizaciones tanto de seguridad como de versión.

{% endwarning %}
