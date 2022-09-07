Puedes definir enlaces relativos y rutas de imagen en los archivos representados para ayudar a que los lectores naveguen hasta otros archivos de tu repositorio.

Un enlace relativo es un enlace que es relativo al archivo actual. Por ejemplo, si tienes un archivo README en la raíz de tu repositorio y tienes otro archivo en _docs/CONTRIBUTING.md_, el enlace relativo a _CONTRIBUTING.md_ en tu archivo README podría verse así:

```
[Contribution guidelines for this project](docs/CONTRIBUTING.md)
```

{% data variables.product.product_name %} transformará de manera automática el enlace relativo o la ruta de imagen en cualquier rama en la que te encuentres actualmente, de modo que el enlace o ruta siempre funcione. La ruta del enlace será relativa al archivo actual. Los enlaces que comienzan con `/` serán relativos a la raíz del repositorio. Puedes usar todos los operandos del enlace relativo, como `./` y `../`.

Los enlaces relativos son más sencillos para los usuarios que clonan tu repositorio. Puede que los enlaces absolutos no funcionen en los clones de tu repositorio. Recomendamos usar enlaces relativos para consultar los archivos dentro de tu repositorio.
