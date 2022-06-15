## Comparando artefatos e memorização de dependência

Os artefatos são similares, pois fornecem a habilidade de armazenar arquivos em {% data variables.product.prodname_dotcom %}, mas cada recurso oferece usos diferentes e não podem ser usados de forma intercambiável.

- Use o cache quando você deseja reutilizar arquivos que não mudam frequentemente entre trabalhos ou execuções de fluxo de trabalho como, por exemplo, dependências de compilação de um sistema de gerenciamento de pacotes.
- Use artefatos quando quiser salvar arquivos produzidos por um trabalho para ser visualizado após a conclusão da execução de um fluxo de trabalho como, por exemplo, binários compilados ou logs de compilação. 
