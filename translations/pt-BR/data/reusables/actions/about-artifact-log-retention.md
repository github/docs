Por padrão, os artefatos e arquivos de registro gerados pelos fluxos de trabalho são mantidos por 90 dias antes de ser excluídos automaticamente. É possível ajustar o período de retenção dependendo do tipo de repositório:

{%- ifversion fpt or ghec or ghes %}
- Para repositórios públicos: você pode alterar este período de retenção para qualquer lugar entre 1 dia e 90 dias.
{%- endif %}

- Para repositórios privados {% ifversion ghec or ghes or ghae %} e {% endif %} internos: você pode alterar este período de retenção entre 1 dia ou 400 dias.

Ao personalizar o período de retenção, ele só se aplica a novos artefatos e arquivos de registro e não se aplica retroativamente aos objetos existentes. Para repositórios e organizações gerenciadas, o período máximo de retenção não pode exceder o limite definido pela organização gerenciadora ou pela empresa.
