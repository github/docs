Por padrão, os artefatos e arquivos de registro gerados pelos fluxos de trabalho são mantidos por 90 dias antes de ser excluídos automaticamente. É possível ajustar o período de retenção dependendo do tipo de repositório:

- Para repositórios públicos: você pode alterar este período de retenção para qualquer lugar entre 1 dia e 90 dias.
- Para repositórios privados, internos e {% data variables.product.prodname_enterprise %}: você pode alterar este período de retenção para qualquer período entre 1 e 400 dias.

Ao personalizar o período de retenção, ele só se aplica a novos artefatos e arquivos de registro e não se aplica retroativamente aos objetos existentes. Para repositórios e organizações gerenciadas, o período máximo de retenção não pode exceder o limite definido pela organização gerenciadora ou pela empresa.
