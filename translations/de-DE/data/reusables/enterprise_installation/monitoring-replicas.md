Sie können die Verfügbarkeit von {% data variables.product.prodname_ghe_server %} überwachen, indem Sie den für die URL `https://HOSTNAME/status` zurückgegebenen Statuscode überprüfen. Eine Appliance, die den Benutzer-Traffic verarbeiten kann, gibt den Statuscode `200` (OK) zurück. Es gibt einige Ursachen, weshalb eine Appliance den Statuscode `503` (Service Unavailable (Dienst nicht verfügbar)) zurückgibt:
 - Die Appliance ist ein passives Replikat, beispielsweise ein Replikat in einer Hochverfügbarkeitskonfiguration mit zwei Knoten.
 - Die Appliance befindet sich im Wartungsmodus.
 - Die Appliance ist Bestandteil der Geo-Replikationskonfiguration, ist jedoch ein inaktives Replikat.

Du kannst auch das Replikationsübersichts-Dashboard verwenden, das unter der folgenden Adresse verfügbar ist:

`https://HOSTNAME/setup/replication`
