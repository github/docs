Cuando bajes de categoría una mejora que ya hayas hecho, deberás utilizar un archivo de paquete de mejora con la extensión *.pkg*. No hay compatibilidad con los archivos de paquete de hotpatch con la extensión *.hpkg*.

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

A reboot is required after running the command. Bajar de categoría una mejora previa no afecta la partición de datos, ya que las migraciones no se ejecutan en lanzamientos parchados.
