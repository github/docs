# Glosarios

Los siguientes archivos comprenden nuestro [Glosario de Crowdin](https://support.crowdin.com/glossary/):

* `external.yml` contiene las entradas de glosario de cara al usuario.
  * Las secuencias con `external.yml` son compatibles con condicionales líquidos. Consulta [contributing/liquid-helpers.md](/contributing/liquid-helpers.md).
* `internal.yml` contiene las entradas que solo utilizan los traductores. Estos términos se muestran en la IU de Crowdin para proporcionar contexto adicional a los traductores sobre lo que están traduciendo, además de sugerir una secuencia localizada para ese término.
* `candidates.yml` contiene términos que podrían estar potencialmente tanto en el glosario interno como en el externo, pero no se han definido aún.
