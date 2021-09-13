Ao reverter uma atualização, você deve usar um arquivo de atualização com a extensão *.pkg*. Arquivos de pacotes de hotpatch com a extensão *.hpkg* não são suportados.

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

É necessário reinicializar após a execução do comando. Reverter não afeta a partição de dados, pois as migrações não são executadas nas versões de patch.
