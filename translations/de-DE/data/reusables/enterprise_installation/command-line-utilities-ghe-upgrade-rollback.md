Wenn Du ein Rollback eines Upgrades durchführst, musst Du eine Upgrade-Paketdatei mit der Dateinamen-Erweiterung *.pkg* verwenden. Hotpatch-Paketdateien mit der Dateinamenerweiterung *.hpkg* werden nicht unterstützt.

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

A reboot is required after running the command. Der Rollback wirkt sich nicht auf die Datenpartition aus, da Migrationen nicht mit Patch-Releases ausgeführt werden.
