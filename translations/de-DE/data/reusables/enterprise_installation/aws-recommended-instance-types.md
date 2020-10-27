Basierend auf der Anzahl Deiner Benutzerlizenzen empfehlen wir die folgenden Instanztypen. |
{% if enterpriseServerVersions contains currentVersion %}
| Benutzerlizenzen                                           | Empfohlener Typ |
|:---------------------------------------------------------- | ---------------:|
| Test, Demo oder 10 Benutzer mit eingeschränkten Funktionen |        r4.large |
| 10–3000                                                    |       r4.xlarge |
| 3000–5000                                                  |      r4.2xlarge |
| 5000–8000                                                  |      r4.4xlarge |
| 8000–10000+                                                |      r4.8xlarge |
{% endif %}
