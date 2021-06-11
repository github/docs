Los paquetes con alcance de repositorio heredan sus permisos y visibilidad desde el repositorio al que pertenece el paquete. Los registros siguientes utilizan este tipo de permisos:
- Registro de Docker (`docker.pkg.github.com`)
- Registro de npm
- Registro de RubyGems
- Registro de Apache maven
- Registro de NuGet

{% if currentVersion == "free-pro-team@latest" %}
El registro del contenedor (`ghcr.io`) ofrece permisos granulares y configuraciones de visibilidad que se pueden personalizar para cada paquete que pertenezca a un usuario personal o a una cuenta de organización.
{% endif %}

Para obtener más información, consulta la sección "[Acerca de los permisos para los Paquetes de GitHub](/packages/learn-github-packages/about-permissions-for-github-packages)"{% if currentVersion == "free-pro-team@latest" %} o "[Configurar la visibilidad y el control de accesos de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)".{% endif %}.
