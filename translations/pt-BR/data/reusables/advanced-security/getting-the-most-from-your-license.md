Ao decidir quais repositórios e organizações priorizar para {% data variables.product.prodname_GH_advanced_security %}, você deverá revisá-los e identificá-los:

- As bases de código que são as mais críticas para o sucesso da sua empresa. Esses são os projetos em que a introdução de códigos vulneráveis, segredos codificados ou dependências vulneráveis teriam o maior impacto na sua empresa.
- Bases de código com a maior frequência de commit. Estes são os projetos mais ativamente desenvolvidos e, consequentemente, há um risco maior de poder introduzir problemas de segurança.

When you have enabled {% data variables.product.prodname_GH_advanced_security %} for these organizations or repositories, assess which other codebases you could add without incurring billing for unique committers. Finally, review the remaining important and busy codebases. {% ifversion fpt or ghes or ghec %}If you want to increase the number of seats in your license, contact {% data variables.contact.contact_enterprise_sales %}.{% endif %}
