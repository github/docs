---
title: Conceptos básicos para GitHub Packages
intro: 'A continuación encontrarás una lista de términos comunes del {% data variables.product.prodname_registry %} que utilizamos en nuestros sitios y documentación.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/core-concepts-for-github-container-registry
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### Para GitHub

Un paquete es un software auto-contenido y reutilizable que incluye código y metadatos que un desarrollador junta en un lugar común para que los demás lo utilicen. Los metadatos de un paquete pueden incluir el número de versión, el nombre, y las dependencias del código. Los paquetes simplifican el uso y la distribución de soluciones para problemas comunes tales como el necesitar marcos de trabajo para desarrollo o probar un proyecto, limpiadores de código para mejorar la calidad del mismo, o herramientas de aprendizaje automatizado estándares de la industria para impulsar tu aplicación. Los paquetes existen en muchos ecosistemas. Por ejemplo, puedes empaquetar código de Node.js y de Java o imágenes de contenedor.

### Contenedor

Un contenedor es una unidad de software que se diseña para desplegar software de forma confiable en un modo estandarizado en cualquier plataforma. Un contenedor opera como un ambiente virtual aislado o una instancia que puede ejecutar varios paquetes de software y componentes en el mismo kernel del host como tu sistema operativo. Los contenedores utilizan menos recursos que las máquinas virtuales porque no necesitan incluir su porpio hardware virtual para ejecutarse. Los contenedores se crean utilizando un archivo de imagen de contenedor, tal como un Dockerfile, y un cliente de contenedor o programa de tiempo de ejecución.

### Imagen de contenedor

Una imagen de contenedor es un tipo de archivo empaquetado que especifica los requisitos de software para ejecutar una app desde un contenedor. Una imagen de contenedor habitualmente incluye el código de la app, bibliotecas e instrucciones del tiempo de ejecución. Para garantizar que se utilizan los mismos detalles de imagen donde sea que ésta se despliegue y ejecutem las imagenes de contenedor se versionan automáticamente y no se pueden cambiar una vez que una imagen de contenedor se compile en un contenedor.

### Contenedor Docker

Un contenedor de Docker es un tipo de contenedor de código abierto que se crea en la plataforma de Docker. El formato de imagen original de Docker se ha convertido en la Especificación de Imagen de la OCI (Iniciativa de Contenedores Abiertos, por sus siglas en inglés). Para obtener más información, consulta la "[Documentación de Docker](https://docs.docker.com/get-started/overview/)".
