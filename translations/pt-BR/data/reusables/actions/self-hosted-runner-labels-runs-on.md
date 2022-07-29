Para especificar um executor auto-hospedado para o seu trabalho, configure `runs-on` no seu arquivo de fluxo de trabalho com etiquetas de executores auto-hospedados.

Todos os executores auto-hospedados têm a etiqueta `auto-hospedado`. O uso apenas esta etiqueta selecionará qualquer executor auto-hospedado. Para selecionar executores que atendem a certos critérios, como sistema operacional ou arquitetura, recomendamos fornecer uma matriz de etiquetas que começam com `auto-hospedado` (isso deve ser listado primeiro) e, em seguida, inclui etiquetas adicionais, conforme necessário. Ao especificar uma matriz de etiquetas, os trabalhos serão colocados na fila em executores que tenham todas as etiquetas especificadas.

Embora a etiqueta de `auto-hospedado` não seja obrigatória, recomendamos especificá-lo quando estiver usando executores auto-hospedados para garantir que seu trabalho não especifique nenhum executor atual ou futuro de {% data variables.product.prodname_dotcom %}.
