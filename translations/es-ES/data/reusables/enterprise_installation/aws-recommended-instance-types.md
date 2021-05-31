Recomendamos los siguientes tipos de instancia con base en la cantidad de licencias que tengas. |
{% if enterpriseServerVersions contains currentVersion %}
| Licencias de usuario                     | Tipo recomendado |
|:---------------------------------------- | ----------------:|
| Prueba, Demo o 10 usuarios no frecuentes |         r4.large |
| 10 - 3000                                |        r4.xlarge |
| 3000 - 5000                              |       r4.2xlarge |
| 5000 - 8000                              |       r4.4xlarge |
| 8000 - 10000+                            |       r4.8xlarge |
{% endif %}
