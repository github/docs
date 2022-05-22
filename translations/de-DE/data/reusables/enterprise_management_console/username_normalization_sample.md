In dieser Tabelle findest Du Beispiele dafür, wie Benutzernamen in {% data variables.product.prodname_ghe_server %} normalisiert werden:

| Benutzername           | Normalisierter Benutzername | Ergebnis                                                                                                             |
| ---------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Ms.Bubbles             | `ms-bubbles`                | Dieser Benutzername wird erfolgreich erstellt.                                                                       |
| !Ms.Bubbles            | `-ms-bubbles`               | Dieser Benutzername wird nicht erstellt, da er mit einem Bindestrich beginnt.                                        |
| Ms.Bubbles!            | `ms-bubbles-`               | Dieser Benutzername wird nicht erstellt, da er mit einem Bindestrich endet.                                          |
| Ms!!Bubbles            | `ms--bubbles`               | Dieser Benutzername wird nicht erstellt, da er zwei aufeinanderfolgende Bindestriche enthält.                        |
| Ms!Bubbles             | `ms-bubbles`                | Dieser Benutzername wird nicht erstellt. Obwohl der normalisierte Benutzername gültig ist, ist er bereits vorhanden. |
| Ms.Bubbles@example.com | `ms-bubbles`                | Dieser Benutzername wird nicht erstellt. Obwohl der normalisierte Benutzername gültig ist, ist er bereits vorhanden. |
