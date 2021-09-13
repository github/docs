{% warning %}

**Aviso:** Se você adicionar um anexo de imagem a um pull request ou comentário de problema, qualquer pessoa poderá ver a URL de imagem anônima sem autenticação{% if enterpriseServerVersions contains currentVersion %}, mesmo se o pull request estiver em um repositório privado, ou se o modo privado estiver habilitado. Para evitar o acesso não autorizado às imagens, limite o acesso à rede para os sistemas que servem as imagens, incluindo {% data variables.product.product_location %}{% endif %}.{% if currentVersion == "github-ae@latest" %} Para impedir acesso não autorizado às URLs de imagens em {% data variables.product.product_name %}, considere restringir o tráfego de rede para a sua empresa. Para obter mais informações, consulte "[Restringir tráfego de rede para a sua empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise)".{% endif %}

{% endwarning %}
