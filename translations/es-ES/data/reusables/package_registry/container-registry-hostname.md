{% ifversion fpt or ghec %}ghcr.io{% elsif ghes > 3.4 %}containers.HOSTNAME{% else %}{% endif %}
