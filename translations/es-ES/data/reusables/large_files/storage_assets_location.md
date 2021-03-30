{% if enterpriseServerVersions contains currentVersion %}
Predeterminadamente, el
cliente de {% data variables.large_files.product_name_long %} almacena activos grandes en el mismo servidor que hospeda el repositorio de Git. Cuando se habilita {% data variables.large_files.product_name_short %} en {% data variables.product.product_location %}, los activos grandes se almacenan en la partición de datos en `/data/user/storage`.
{% endif %}