Por padrão, os artefatos e arquivos de registro gerados pelos fluxos de trabalho são mantidos por 90 dias antes de ser excluídos automaticamente. É possível ajustar o período de retenção dependendo do tipo de repositório:

{%- ifversion fpt or ghec or ghes %}
- Para repositórios públicos: você pode alterar este período de retenção para qualquer lugar entre 1 dia e 90 dias.
{%- endif %}

- For private{% ifversion ghec or ghes or ghae %} and internal{% endif %} repositories: you can change this retention period to anywhere between 1 day or 400 days.

Ao personalizar o período de retenção, ele só se aplica a novos artefatos e arquivos de registro e não se aplica retroativamente aos objetos existentes. Para repositórios e organizações gerenciadas, o período máximo de retenção não pode exceder o limite definido pela organização gerenciadora ou pela empresa.
