Du kannst relative Links und Bildpfade in Deinen gerenderten Dateien definieren, um Leser dabei zu unterstützen, in Deinem Repository zu anderen Dateien zu navigieren.

Ein relativer Link ist ein Verknüpfung, die relativ zur aktuellen Datei ist. Wenn Du beispielsweise eine README-Datei im Stammverzeichnis (root) Deines Repositorys und eine andere Datei in _docs/CONTRIBUTING.md_ hast, könnte der relative Link zu _CONTRIBUTING.md_ in Deiner README-Datei wie folgt aussehen:

```
[Beitragsrichtlinien für dieses Projekt](docs/CONTRIBUTING.md)
```

{% data variables.product.product_name %} wandelt Ihren relativen Link oder den Bildpfad automatisch anhand dessen um, auf welchem Branch Sie sich gerade befinden, damit der Link oder der Pfad immer funktioniert. Du kannst alle relativen Link-Operanden verwenden, beispielsweise `./` und `../`.

Relative Links sind für Benutzer, die Dein Repository klonen, einfacher zu verwenden. Absolute Links funktionieren möglicherweise nicht in Klons Deines Repositorys - wir empfehlen relative Links zu verwenden, um auf andere Dateien in Deinem Repository zu verweisen.
