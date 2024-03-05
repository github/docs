{% ifversion fpt or ghec or ghes > 3.8 %}

{% rowheaders %}

| **SARIF data** | **Maximum values** | **Display limits** |
|----------------|:------------------:|-----------------------|
| Runs per file | 20 | None |
| Results per run |  25,000 | Only the top 5,000 results will be included, prioritized by severity. |
| Rules per run | 25,000 | None |
| Tool extensions per run | 100 | None |
| Thread Flow Locations per result | 10,000 | Only the top 1,000 Thread Flow Locations will be included, using prioritization. |
| Location per result |  1,000 | Only 100 locations will be included. |
| Tags per rule |  20 | Only 10 tags will be included. |

{% endrowheaders %}

{% elsif ghes < 3.9 %}

{% rowheaders %}

| **SARIF data** | **Maximum values** | **Display limits** |
|----------------|:------------------:|-----------------------|
| Runs per file | 15 |  None |
| Results per run | 25,000 | Only the top 5,000 results will be included, prioritized by severity. |
| Rules per run | 25,000 | None |
| Tool extensions per run | 100 | None |
| Thread Flow Locations per result | 10,000 | Only the top 1,000 Thread Flow Locations will be included, using prioritization. |
| Location per result | 1,000 | Only 100 locations will be included. |
| Tags per rule | 20 | Only 10 tags will be included. |

{% endrowheaders %}

{% else %}

{% rowheaders %}

| **SARIF data** | **Maximum values** | **Display limits** |
|----------------|:------------------:|-----------------------|
| Runs per file | 15 | None |
| Results per run | 25,000 | Only the top 5,000 results will be included, prioritized by severity. |
| Rules per run | 25,000  | None |
| Thread Flow Locations per result | 10,000 | Only the top 1,000 Thread Flow Locations will be included, using prioritization. |
| Location per result |  1,000 | Only 100 locations will be included. | None |

{% endrowheaders %}

{% endif %}
