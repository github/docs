Ao reverter uma atualização, você deve usar um arquivo de atualização com a extensão *.pkg*. Arquivos de pacotes de hotpatch com a extensão *.hpkg* não são suportados.

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

A reboot is required after running the command. Reverter não afeta a partição de dados, pois as migrações não são executadas nas versões de patch.
