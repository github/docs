{% if enterpriseServerVersions contains currentVersion %}
Por padrão, o
cliente de {% data variables.large_files.product_name_long %} armazena grandes ativos no mesmo servidor que hospeda o repositório do Git. Quando {% data variables.large_files.product_name_short %} está habilitado em {% data variables.product.product_location %}, os grandes ativos são armazenados na partição de dados em `/data/user/storage`.
{% endif %}