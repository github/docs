Ao decidir quais repositórios e organizações priorizar para {% data variables.product.prodname_GH_advanced_security %}, você deverá revisá-los e identificá-los:

- As bases de código que são as mais críticas para o sucesso da sua empresa. These are the projects for which the introduction of vulnerable code, hard-coded secrets, or insecure dependencies would have the greatest impact on your company.
- Bases de código com a maior frequência de commit. Estes são os projetos mais ativamente desenvolvidos e, consequentemente, há um risco maior de poder introduzir problemas de segurança.

Ao habilitar {% data variables.product.prodname_GH_advanced_security %} para essas organizações ou repositórios, avalie quais outras bases de códigos você poderia adicionar sem incorrer em cobranças para committers exclusivos. Por último, revise as restantes bases de código importantes e ocupadas. {% ifversion fpt or ghes or ghec %}Se você quiser aumentar o número de estações na sua licença, entre em contato com {% data variables.contact.contact_enterprise_sales %}.{% endif %}
