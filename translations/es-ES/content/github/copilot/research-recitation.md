---
title: Recitación de investigación
intro: 'Un primer vistazo al aprendizaje repetitivo en las sugerencias del Copiloto de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /early-access/github/copilot/research-recitation
versions:
  fpt: '*'
---

Por: Albert Ziegler (@wunderalbert)

## Copiloto de {% data variables.product.prodname_dotcom %}: ¿Perico o Cuervo?
Un primer vistazo al aprendizaje repetitivo en las sugerencias del Copiloto de {% data variables.product.prodname_dotcom %}.

## Introducción

El Copiloto de {% data variables.product.prodname_dotcom %} se entrena con miles de millones de líneas de código público. Las sugerencias que te hace se adaptan a tu código, pero es el código que escriben los demás lo que termina constituyendo el procesamiento que hay detrás de esto.

¿Qué tan directa es la relación entre el código que se sugiere y el que lo informó? En un artículo reciente que invita a la reflexión<sup id="anchor1">[1](#footnote1)</sup>,Bender, Gebru et al. acuñaron la frase "pericos estocásticos" para los sistemas de inteligencia artificial como aquellos que impulsan el Copiloto de {% data variables.product.prodname_dotcom %}. O, como comentó un ingeniero de aprendizaje por máquina en {% data variables.product.company_short %}<sup id="anchor2">[2](#footnote2)</sup> durante una charla junto a un garrafón de agua: estos sistemas pueden percibirse como "un infante con memoria fotográfica".

Estas son simplificaciones excesivas y deliberadas. Muchas de las sugerencias del Copiloto de {% data variables.product.prodname_dotcom %} se sienten como si se hubieran hecho a la talla para el código base específico en el que está trabajando el usuario. A menudo, se siente menos como perico y más como cuervo que crea herramientas nuevas a partir de bloques pequeños<sup id="anchor3">[3](#footnote3)</sup>. Pero no se puede negar que el Copiloto de {% data variables.product.prodname_dotcom %} tiene una memoria impresionante:

![Una demostración animada del Copiloto](/assets/images/help/copilot/resources_recitation_example_zen.gif)

Aquí, dirigí intencionadamente al<sup id="anchor4">[4](#footnote4)</sup> Copiloto de {% data variables.product.prodname_dotcom %} para que recitara un texto bien conocido que obviamente se sabe de memoria. Yo también me sé un par de textos de memoria. Por ejemplo, aún recuerdo algunos poemas que aprendí en la escuela. Sin embargo, sin importar el tema, jamás me he atrevido a entorpecer una conversación hablando en tetrámetro yámbico y con emoción sobre los narcisos.

¿Así que esto es (o el equivalente en código para esto es) algo que el Copiloto de {% data variables.product.prodname_dotcom %} tiende a hacer? ¿Cuántas de sus sugerencias son únicas? Y ¿Qué tan a menudo replica código similar que haya visto durante su entrenamiento?

## El Experimento

Durante el desarrollo temprano del Copiloto de {% data variables.product.prodname_dotcom %}, cerca de 300 empleados lo utilizaron en su trabajo diario como parte de una prueba interna. Esta prueba proporcionó un buen conjunto de datos para hacer pruebas de recitación. Quise encontrar qué tan a menudo el Copiloto de {% data variables.product.prodname_dotcom %} les proporcionaba una sugerencia que se citara desde algo que habían visto anteriormente.

Limité la investigación a las sugerencias de Puthon con un corte al 7 de mayo de 2021 (el día en el que comenzamos a extraer los datos). Esto nos dejó con 453,780 sugerencias repartidas en 396 "semanas usuario", es decir, semanas calendario durante las cuales un usuario utilizó el Copiloto de {% data variables.product.prodname_dotcom %} activamente en el código de Python.

### Filtrado Automático

453,780 sugerencias es bastante, pero muchas de ellas pueden descartarse de inmediato. Para llegar a los casos interesantes, considera secuencias de "palabras" que ocurren en la sugerencia del mismo órden que en el código en el que se ha entrenado al Copiloto de {% data variables.product.prodname_dotcom %}. En este contexto, la puntuación, los corchetes o cualquier otro tipo de caracteres especiales cuentan como "palabras", mientras que las tabulaciones, espacios o incluso los saltos de línea se ignoran por completo. Después de todo, una cita sigue siendo una cita, ya sea que se ancle con 1 tabulación u 8 espacios.

Por ejemplo, una de las sugerencias del Copiloto de {% data variables.product.prodname_dotcom %} fue la siguiente regex para los números separados por espacios en blanco:

```
r'^\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+'
```

Esto sería exactamente 100 "palabras" en el sentido anterior, pero es un ejemplo particularmente denso: el promedio de líneas de código no vacías solo tiene 10 "palabras". Restringí esta investigación a los casos en donde la superposición con el código con el que se entrenó al Copiloto de {% data variables.product.prodname_dotcom %} contuviera por lo menos 60 de estas "palabras". Tenemos que establecer el corte en algún punto y creo que, mas que nada, es raro que las secuencias más cortas sean de gran interés. De hecho, la mayoría de los casos interesantes que se identificaron posteriormente pasan de este umbral de 60, por bastante.

La superposición se exntiende a lo que el usuario ya escribió y que también cuenta en esta longitud. Después de todo, ¡el usuario también podría haber escrito este contexto con la ayuda del Copiloto de {% data variables.product.prodname_dotcom %}!

En el siguiente ejemplo, el usuario comenzó a escribir un fragmento de código muy común. El Copiloto de {% data variables.product.prodname_dotcom %} lo completó. Aún cuando la compleción misma es un tanto corta, en conjunto con el código ya existente, pasa el umbral y se retiene.

![Código de ejemplo](/assets/images/help/copilot/example_last_straw.png)

Este procedimiento es suficientemente permisivo para permitir que pasen muchos ejemplos relativamente "aburridos", como los dos anteriores. Pero aún es efectivo para marcar el naálisis humano en los casos interesantes, clasificando más de 99% de las sugerencias del Copiloto.

### Agrupamiento Manual en Buckets

Después del filtrado, quedaron 473 sugerencias. Pero estas pueden presentarse en formas diferentes:

1. Algunas eran básicamente solo repeticiones de otro caso que pasó el filtrado. Por ejemplo, algunas veces, el Copiloto de {% data variables.product.prodname_dotcom %} hizo una sugerencia, el desarrollador tecleó una línea de comentario y el Copiloto de {% data variables.product.prodname_dotcom %} ofreció una sugerencia muy similar nuevamente. Eliminé estos casos del análisis como duplicados.
2. Algunas secuencias fueron largas y repetitivas. Tal como en el siguiente ejemplo, en donde los bloques repetidos de `‘<p>’` se encuentran, por supuesto, en alguna parte del conjunto de capacitación: <br>![Example repetitions](/assets/images/help/copilot/example_repetitions.png)<br> Dichas sugerencias pueden ser tanto útiles (casos de uso, expresiones regulares) como inútiles (como sospecho que lo son en este caso). Pero, de cualquier forma, no encajan en la idea de aprender por repetición que tenía cuando comencé esta investigación.
3. Algunos fueron inventarios estándar, como los números naturales o los primos o los servicios de cotización instantánea del mercado de valores o el alfabeto griego: <br>![Ejemplo del alfabeto Griego](/assets/images/help/copilot/example_greek.png)
4. Algunas formas eran comúnes y directas, incluso tal vez universales, de hacer las cosas con muy pocos grados de libertad. Por ejemplo, me parece que la parte de en medio en el siguiente caso es la forma estándar de utilizar el paquete BeautifulSoup para analizar una lista de Wikipedia. De hecho, el fragmento de código coincidente que se encontró en los datos de entrenamiento del Copiloto de {% data variables.product.prodname_dotcom %}<sup id="anchor5">[5](#footnote5)</sup> utiliza este código para analizar un artículo diferente y sigue haciendo cosas diferentes con los resultados. <br>![Example of Beautiful Soup](/assets/images/help/copilot/example_beautiful_soup.png) <br>Esto tampoco encaja en mi idea de una cita. Es un poco como cuando alguien dice " voy a sacar la basura; vuelvo pronto" -- se trata de una declaración factual, no de una cita, aún cuando la frase particular se emitió muchas veces anteriormente.
5. Y luego están el resto de los casos. Aquellos que por lo menos tuvieron una superposición específica ya sea en el código o en los comentarios. Estos son los que más me interesan y en lo que me voy a concentrar de ahora en adelante.

Este agrupamiento en buckets tiene necesariamente algunos casos límite<sup id="anchor6">[6](#footnote6)</sup> y tu millaje puede variar dependiendo de cómo creas que deben clasificarse. Posiblemente incluso estés en desacuerdo con todo el conjunto de buckets en primera instancia.

Es por esto que convertimos este conjunto de datos en código abierto<sup id="anchor7">[7](#footnote7)</sup>. Así que, si piensan diferente sobre el agrupamiento en buckets o si les interesa otros aspectos de cómo el Copiloto de GitHub repite su conjunto de entrenamiento, los invito a que ignoren mi siguiente sección y de que saquen sus propias conclusiones.

## Resultados

![Gráfica de resumen](/assets/images/help/copilot/plot_buckets.png)

Para la mayoría de las sugerencias del Copiloto de {% data variables.product.prodname_dotcom %}, nuestro filtor automático no econtró superiosiciones significativas con el código que se utilizó para el entrenamiento. Pero sí nos hizo notar 473 casos. El eliminar el primer bucket (los casos que se veían muy similares a otros casos) me dejó con 185 sugerencias. De estas, 144 se clasificaron en los buckets del 2 al 4. Esto dejó 41 casos en el último bucket, las "recitaciones", en el sgnificado del término que tengo en mente.

Esto corresponde a **1 evento de recitación cada 10 semanas usuario** (con un intervalo de confianza del 95%: de 7 a 13 semanas, utilizando una prueba de Poisson).

Cñarp. estp se midió en los desarrolladores de {% data variables.product.prodname_dotcom %} y Microsoft que probaron el Copiloto de {% data variables.product.prodname_dotcom %}. Si tu comportamiento para codificar es diferente de el de ellos, tus resultados podrían diferir. En particular, algunos de estos desarrolladores solo trabajan medio tiempo en proyectos de Python —— No pude distinguirlo, entonces conté a todos los que utilizan algo de Python en una semana específica como usuarios.

1 evento en 10 semanas no pareciera ser mucho, pero tampoco es 0. Y encontré tres cosas que me impresionaron.

### Citas del Copiloto de {% data variables.product.prodname_dotcom %} cuando le falta contexto específico

Si quiero aprender la letra de una canción, tengo que escucharla muchas veces. El Copiloto de {% data variables.product.prodname_dotcom %} es igual: para aprenderse de memoria un fragmento de código, debe verlo muchas veces. Se muestra cada archivo solo una vez al Copiloto de {% data variables.product.prodname_dotcom %}, así que el fragmento de código necesita existir en muchos archivos diferentes dentro del código público.

De los 41 casos principales que escogimos durante el etiquetado manual, ninguno se mostró en menos de 10 archivos diferentes. La mayoría (35 casos) se mostraron más de cien veces. En una ocasión, el Copiloto de {% data variables.product.prodname_dotcom %} sugirió comenzar un archivo en blanco con algo que había visto más de 700,000 aplastantes veces durante su entrenamiento; esto fue la Licencia Pública General de GNU.

La siguiente gráfica muestra la cantidad de archivos empatados de los resultados en el bucket 5 (una marca roja en la parte inferior de cada resultado) contra los buckets del 2 al 4. Dejé fuera al bucket 1, el cual realmente es una mezcla de los duplicados de los casos de los buckets del 2 al 4 y de los duplicados del bucket 5. La distribución inferida se meuestra como una línea roja; llega a su tope entre las 100 y 1000 coincidencias.

![Gráfica de la cantidad de coincidencias](/assets/images/help/copilot/plot_copies.png)

### El Copiloto de {% data variables.product.prodname_dotcom %} cita mayormente en contextos genéricos

Conforme pasa el tiempo, cada archivo se convierte en único. Pero el Copiloto de {% data variables.product.prodname_dotcom %} no espera a que eso pase<sup id="anchor8">[8](#footnote8)</sup>: ofrecerá sus soluciones mientras que tu archivo aún siga siendo extremadamente genérico. Y, en la ausencia de cualquier cosa que sea específica para seguir, es mucho más probable citar de cualquier otro lugar que de esta.

![Gráfica de longitud del contexto](/assets/images/help/copilot/plot_context.png)

Claro, los desarrolladores de software pasan la mayoría de su tiempo dentro de los archivos, en donde el contexto es suficientemente único como para que el Copiloto de {% data variables.product.prodname_dotcom %} ofrezca sugerencias únicas. En contraste, las sugerencias en el inicio son más bien impredecibles, ya que el Copiloto de {% data variables.product.prodname_dotcom %} no puede saber cómo será el programa. Pero, algunas veces, especialmente en los proyectos didácticos o en los scripts independientes, una cantidad modesta de contexto puede ser suficiente para poner en riesgo la asunción razonable de lo que el usuario quería hacer. Y, algunas veces, sigue siendo suficientemente genérico para que el Copiloto de {% data variables.product.prodname_dotcom %} piense que una de las soluciones que se sabe de memoria se vea prometedora:

![Código de ejemplo](/assets/images/help/copilot/example_robot.png)

Esto se toma práctica y directamente del temario de una clase de robótica que se cargó en vriaciones diversas<sup id="anchor9">[9](#footnote9)</sup>.

### La detección dependerá de la herramienta que realiza la detección

En su forma actual, el filtro devolverá una cantidad considerable de casos poco intersantes cuando se aplique generalmente. Pero aún no debería tener mucho ruido. Para los usuarios internos del experimento, habría tomado más de un hallazgo por semana en promedio (¡aunque sería probable que se diera en ráfagas!). De entre estas, cerca del 17% (95% de intervalo de confianza utilizando una prueba binomial: de 14 a 21%) estuvieron en el quinto bucket.

Y nada es, jamás, a prueba de tontos, claro: así que esto también puede burlarse. A la herramienta que estamos creando le cuesta trabajo detectar algunos casos, pero aún tienen una fuenta obvia. Para regresar al Zen de Python:

![Variación Zen](/assets/images/help/copilot/resources_recitation_example_zen_caw.gif)

## Conclusión y siguientes pasos

Esta investigación demuestra que el Copiloto de {% data variables.product.prodname_dotcom %} _puede_ citar un cuerpo de código literal, pero es raro que lo haga y, cuando lo hace, cita en su mayoría el código que todos citan y, mayormente, al inicio de un archivo, como para romper el hielo.

Pero aún existe una diferencia grande entre que el Copiloto de GitHub recite el código y que yo recite un poema: Yo _sé_ que lo estoy cietando. También me gustaría saber cuando el Copiloto está repitiendo el código existente en vez de generar sus propias ideas. De esta forma, puedo ver la información de fondo sobre el código e incluir el crédito donde deba hacerse.

La respuesta es obvia: compartir la solución de prefiltrado que utilizamos en este análisis para detectar una superpsición con el conjunto de entrenamiento. Cuando una sugerencia contiene fragmentos de código que se copiaron del conjunto de entrenamiento, la IU simplemente te dice de dónde se citaron. Puedes ya sea incluir la atribución adecuada o decidir no utilizar ese código para nada.

Esta búsqueda de duplicación aún no se integra en la vista previa técnica, pero planeamos hacerlo. Y ambos seguiremos trabajando para disminuir las tasas de recitación y en que su detección sea más precisa.

<br><br>

### Notas al pie

<a name="footnote1">1</a>: [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?](https://dl.acm.org/doi/10.1145/3442188.3445922) [^](#anchor1)

<a name="footnote2">2</a>: [Tiferet Gazit](https://github.com/tiferet) [^](#anchor2)

<a name="footnote3">3</a>: véase von Bayern et al. about the creative wisdom of crows: [Compound tool construction by New Caledonian crows](https://www.nature.com/articles/s41598-018-33458-z) [^](#anchor3)

<a name="footnote4">4</a>: véase Carlini et al. about deliberately triggering the recall of training data: [Extracting Training Data from Large Language Models](https://arxiv.org/pdf/2012.07805.pdf) [^](#anchor4)

<a name="footnote5">5</a>: jaeteekae: [DelayedTwitter](https://github.com/jaeteekae/DelayedTwitter/blob/0a0b03de74c03cfbf36877ffded0cb1312d59642/get_top_twitter_accounts.py#L21) [^](#anchor5)

<a name="footnote6">6</a>: Probablemente no _demasiados_. Les pedí a varios desarrolladores que me ayudaran a etiquetar los casos y se les pidió a todos marcar cualquier incerteza sobre su juicio. Esto sucedió solo en 34 casos, es decir, en menos del 10%. [^](#anchor6)

<a name="footnote7">7</a>: En el [conjunto de datos público](/assets/images/help/copilot/matched_snippets.csv), listo la parte de la sugerencia del Copiloto que también se encontró en el conjunto de entrenamiento, qué tan a menudo se ecnontró y un enlace a un ejemplo en donde ocurre en el código público. Por razones de privacidad, no incluyo la parte sin empatar de la compleción o del contexto del código que hubiese escrito el usuario (solo una indicación de su longitud). [^](#anchor7)

<a name="footnote8">8</a>: De hecho, desde que se llevó a cabo este experimento, el Copiloto de {% data variables.product.prodname_dotcom %} _cambió_ para requerir un contenido de archivo mínimo. Así que, algunas de las sugerencias que se marcaron aquí no se mostraron en la versión actual. [^](#anchor8)

<a name="footnote9">9</a>: Por ejemplo jenevans33: [CS8803-1](https://github.com/jenevans33/CS8803-1/blob/eca1bbc27ca6f7355dbc806b2f95964b59381605/src/Final/ekfcode.py#L23) [^](#anchor9)
