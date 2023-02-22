{% ifversion fpt or ghes or ghae > 3.3 or ghec %}
All actions and workflows called within a run have write access to that run's artifacts.
{% endif %}
