Zur Fehlerbehebung entscheide zuerst, ob Du tatsächlich ein Submodul verwenden möchtest, bei dem es sich um ein Git-Projekt innerhalb eines Git-Projekts handelt; Submodule werden manchmal versehentlich erstellt.

Wenn Du kein Submodul verwenden möchtest, entferne das Submodul und ersetze <em>PATH-TO-SUBMODULE</em> mit dem Pfad zum Submodul:
```shell
$ git submodule deinit <em>PATH-TO-SUBMODULE</em>
$ git rm <em>PATH-TO-SUBMODULE</em>
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/<em>PATH-TO-SUBMODULE</em>
```
