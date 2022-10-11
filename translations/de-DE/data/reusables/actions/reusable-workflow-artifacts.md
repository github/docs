{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 %}
All actions and workflows called within a run have write access to that run's artifacts.
{% endif %}