<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1  Mezcla de producto
    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t1-i1.jpg', alt='Retrato de Robert Kerin')

      .col-lg-8
        p.mb-3  Roger Kerin (2018) define la mezcla de producto con la siguiente explicación: “Un producto tiene atributos tangibles que los cinco sentidos del consumidor pueden percibir. Por ejemplo, el Apple Watch de Apple puede tocarse y sus características pueden verse y escucharse. Además, un producto puede tener atributos intangibles, que consisten en su entrega o garantías, que abarcan conceptos abstractos.
        p.mb-5  Los productos pueden dividirse en duraderos y no duraderos. 
          span.text-bold  Un producto no duradero 
          | es un artículo que se consume en uno o varios usos, como los alimentos y el combustible. 
          span.text-bold  Un producto duradero 
          | es el que por lo general se utiliza muchas veces, como los electrodomésticos, automóviles y teléfonos móviles. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.tarjeta--gris.mb-5.align-items-center.r30
          img.h90(src='@/assets/curso/t1-i2.svg' alt='AvatarTop')
          .tarjeta.borde-y
            .p-4
              .h3 Un producto único:
              p Es un producto específico que tiene una marca, un tamaño o precio único. 
                span.text-bold  Ejemplo: suavizante para ropa Ultra Downy.
        .tarjeta-avatar-b.mb-5.tarjeta--gris.mb-5.align-items-center.r30
          img.h90(src='@/assets/curso/t1-i3.svg' alt='AvatarTop')
          .tarjeta.borde-y
            .p-4
              .h3 Una línea de productos
              p Es un grupo de artículos de productos o servicios que están estrechamente relacionados porque satisfacen un tipo de necesidades, se usan juntos, se venden al mismo grupo de consumidores, se distribuyen en los mismos mercados o están dentro de un mismo rango de precios. 
                span.text-bold  Ej. Las líneas de productos de Nike consisten en ropa y zapatos tenis.
        .tarjeta-avatar-b.mb-5.tarjeta--gris.mb-5.align-items-center.r30
          img.h90(src='@/assets/curso/t1-i4.svg' alt='AvatarTop')
          .tarjeta.borde-y
            .p-4
              .h3 Una mezcla de productos
              p Consiste en todas las líneas de productos que ofrece una organización. Ejemplo:  
                span.text-bold  P&G tiene una gran mezcla de productos que incluye líneas de belleza y cuidado personal 
                | (pasta de dientes Crest y rasuradoras Gillette), así como cuidado para el hogar (suavizante para ropa Downy, detergente Tide y pañales desechables Pampers).
    figure.mb-5
      img(src='@/assets/curso/t1-i5.svg', alt='infografia de proceso')
    br
    br
    #t_1_1.titulo-segundo
      h2 1.1. Producto
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.bg-image-cover
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Kotler (2017), define un producto como cualquier bien que se pueda ofrecer a un mercado para su atención, adquisición, uso o consumo, y que podría satisfacer un deseo o una necesidad.

    .row.justify-content-center.mb-5
      .col-lg-10
        .tabla-c.color-acento-contenido.mb-5 
            table.table
                thead.color-primario
                    tr
                    th(scope='col').color-table Necesidad
                    th(scope='col').color-table Satisfactor
                                
                tbody
                    tr
                    td.color-table2 Identificación
                    td.color-table2 Caracteriza al producto desde el punto de vista de la configuración de sus atributos.

                    tr
                    td.color-table3 Referencia
                    td.color-table3 Reduce a subconjuntos el universo total de productos que se ofrecen.

                    tr
                    td.color-table2 Garantía 
                    td.color-table2 Se entiende como un compromiso de calidad y de rendimiento por parte del fabricante.

                    tr
                    td.color-table3 Personalización 
                    td.color-table3 El usuario se puede sentir integrado a un grupo social (o diferenciado de él).

                    tr
                    td.color-table3 Lúdica 
                    td.color-table3 El usuario siente placer al comprar el producto.

                    tr
                    td.color-table2 Practicidad 
                    td.color-table2 Permite a las personas memorizar experiencias de consumo.
            figcaption Fuente: (Hernández,2017)

    //-- h3.titulo-tercero Clasificación de los productos
    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t1-i7.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Clasificación de los productos.
              p.text-small En la siguiente presentación se describe la clasificación de los productos, por ello, se invita que lo consulte. 
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/clasificacion_productos.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    h3.titulo-tercero Atributos

    p Para Kotler (2017), el desarrollo de un producto o servicio implica definir los beneficios que ofrecerá. Estos beneficios se comunican y entregan a través de atributos del producto como calidad, características y estilo y diseño.
    figure.mb-5
      img(src="@/assets/curso/t1-i8.svg")
    .row.justify-content-center.mt-5.my-5
      .col
        ul.list-unstyled
          li.justify-content-center.mt-5
            
      p.mb-3  
        i.fa.fa-angle-right.fa-lg
        span.text-bold.text-color-orange Calidad del producto.
        | Tiene un impacto directo en el desempeño del producto o servicio, está muy vinculada con el valor para el cliente y su satisfacción. Se define como “estar libre de defectos”. Siemens define la calidad en la siguiente forma: “La calidad se da cuando regresan nuestros clientes, no nuestros productos”. (Kotler,2017) 
      P.mt-5 Cada uno la percibe de forma distinta; para unos significa durabilidad, confiabilidad y para otros apariencia y facilidad de uso, entre otros aspectos. (Hernandez,2017) Tiene dos elementos:
    .row.mb-5
      .col-lg-6
        .cajon.color-secundario.p-4.mb-4
          p
            span.text-bold El nivel de calidad 
            | de un artículo se mide por comparación con la de otros equiparables en características, precio, distribución o promoción. Como consecuencia, los consumidores juzgan la calidad mediante comparaciones.
      .col-lg-6
        .cajon.color-secundario.p-4.mb-4
          p
            span.text-bold La consistencia 
            | es la capacidad de un producto para suministrar el mismo nivel de calidad con el transcurso del tiempo. 
    .titulo-quinto.color-acento-contenido
      h4 Ciclo de vida del producto
    .row.justify-content-center
      .col-lg-9
        figure
          img(src="@/assets/curso/t1-i9.svg")

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-numerada.color-secundario.px-5.py-4.mb-3.borde-y
          .tarjeta-numerada__numero
            .h2 1
          p <b>Desarrollo del producto:</b> inicia cuando la compañía encuentra y desarrolla la idea para un nuevo producto o servicio. Durante el desarrollo del producto, las ventas son iguales a cero y los costos de inversión de la compañía se incrementan. (Kotler,2017)

        .tarjeta-numerada.color-secundario.px-5.py-4.mb-3.borde-y
          .tarjeta-numerada__numero
            .h2 2
          p <b>Introducción:</b> ocurre cuando el producto se presenta por primera vez en el mercado meta deseado. (Kerin,2018) Es un periodo de crecimiento lento de las ventas conforme el producto o servicio se lanza al mercado. Las utilidades son nulas en esta fase a causa de los considerables gastos del lanzamiento del producto. (Kotler,2017) 
          p.text-bold Un ejemplo para la etapa de introducción es el último Smartphone sacado al mercado.

        .tarjeta-numerada.color-secundario.px-5.py-4.mb-3.borde-y
          .tarjeta-numerada__numero
            .h2 3
          p <b>Crecimiento:</b> se caracteriza por rápidos aumentos en las ventas. En esta fase aparecen los competidores. (Kerin,2018) Es una etapa de aceptación rápida en el mercado y de incremento en las utilidades. (Kotler,2017)
        
        .tarjeta-numerada.color-secundario.px-5.py-4.mb-3.borde-y
          .tarjeta-numerada__numero
            .h2 4
          p <b>Madurez:</b> disminuye el crecimiento de las ventas porque el producto o servicio ya ganó la aceptación de la mayoría de los compradores potenciales. El nivel de utilidades se estabiliza o incluso disminuye a causa de los crecientes gastos de marketing para defender el producto frente a la competencia. (Kotler,2017)

        .tarjeta-numerada.color-secundario.px-5.py-4.mb-3.borde-y
          .tarjeta-numerada__numero
            .h2 5
          p <b>Decadencia:</b> es el periodo en el que tanto las ventas como las utilidades disminuyen. (Kotler,2017) Con frecuencia, un producto entra en esta etapa no por una estrategia equivocada por parte de la empresa, sino por cambios en el entorno. Una empresa seguirá una de dos estrategias para manejar un producto en decadencia: la eliminación o su drástica desaparición de la línea de productos y la cosecha que consiste en que el producto sigue ofreciéndose, aunque los vendedores no asignan tiempo para venderlo ni se realizan gastos de publicidad. (Kerin,2018)

    p.mb-5 A continuación, Hernández (2017) realiza un cuadro sobre las características e implicaciones de cada etapa del ciclo de vida del producto.
      .row.justify-content-center
        .col-lg-8
            .tabla-c.color-acento-contenido.mb-5 
                table.table
                    thead.color-primario
                        tr
                            td
                            td(colspan="4").color-table.text-center #[strong Etapa]
                            
                    tbody
                        tr.subhead
                            td 
                            td Introducción
                            td Crecimiento
                            td Madurez
                            td Declive

                        tr
                            td.text-bold Clientes
                            td.color-table2 Innovadores
                            td.color-table2 Mercado masivo
                            td.color-table2 intensa
                            td.color-table2 Leales
                                    

                        tr
                            td.text-bold Competencia
                            td.color-table3 Competencia Poca o nula
                            td.color-table3 Creciente
                            td.color-table3 Intensa
                            td.color-table3 Decreciente

                        tr
                            td.text-bold Ventas
                            td.color-table2 Niveles bajos que después crecen
                            td.color-table2 Crecimiento rápido
                            td.color-table2 Crecimiento lento
                            td.color-table2 Decreciente

                        tr
                            td.text-bold Utilidades
                            td.color-table3 Muy bajas o nulas
                            td.color-table3 Importantes: alcanzan el nivel máximo
                            td.color-table3 Decrecen
                            td.color-table3 Pocas o nulas

                figcaption Fuente: (Hernández,2017) 
    Separador
    br
    br
    #t_1_2.titulo-segundo
      h2 1.2. Servicios
    
    p.mb-3 Un servicio es una forma de producto que consiste en actividades, beneficios o satisfacciones que se ofrecen en venta y siendo esencialmente intangibles, no tienen como resultado la propiedad de algo. Algunos ejemplos son los servicios bancarios, el hospedaje en hoteles, los vuelos en aerolíneas, el comercio minorista y la comunicación inalámbrica (Kotler,2017).
 
    p ¿Cómo se diseña un concepto de servicio? Para Lovelock (2015) El mercadeo de servicios experimentados reconocen la necesidad de adoptar una perspectiva integral del desempeño que desean que sus clientes experimenten. La propuesta de valor debe considerar e integrar tres componentes:
    //- Aquí viene nueva imagen

    .row.justify-content-center.mb-5
        .col-lg-10
            .tarjeta-avatar-b.mb-5.align-items-center
                img(src='@/assets/curso/img_12.png' alt='AvatarTop')
                .tarjeta.tarjeta--gris
                    .p-4
                        .h4 Producto básico:
                        p por lo general, los servicios se definen con respecto a una industria en particular —por ejemplo, del cuidado de la salud o del transporte— a partir del conjunto básico de beneficios y soluciones que se entregan a los clientes. Así pues, el transporte resuelve la necesidad de trasladar a un individuo o un objeto físico de un lugar a otro. Ej. Servicio de Hotelería (Lovelock,2015)

            .tarjeta-avatar-b.mb-5.align-items-center
                img(src='@/assets/curso/img_13.png' alt='AvatarTop')
                .tarjeta.tarjeta--gris
                    .p-4
                        .h4 Servicios complementarios:
                        p la entrega del producto básico suele ir acompañada de una variedad de otras actividades relacionadas con el servicio, a las que denominamos servicios complementarios, los cuales facilitan el uso del producto básico y agregan valor y atractivo a la experiencia general del cliente. Cuando se agreguen elementos complementarios o se incremente su nivel de desempeño, esto debe hacerse de forma que aumenten el valor percibido del producto básico y que permitan al proveedor del servicio cobrar un precio más alto. Ej. En el Servicio de Hotelería los complementarios de servicio de habitación, restaurante, estacionamiento, zonas húmedas, entre otros. (Lovelock,2015)

            .tarjeta-avatar-b.mb-5.align-items-center
                img(src='@/assets/curso/img_14.png' alt='AvatarTop')
                .tarjeta.tarjeta--gris
                    .p-4
                        .h4 Procesos de entrega:
                        p se refiere a los procesos que se utilizan para entregar tanto el producto básico como cada uno de los servicios complementarios. El diseño de la oferta de servicios debe considerar los siguientes aspectos: La manera en la que los distintos componentes del servicio se entregan al cliente, la naturaleza del papel del cliente en dichos procesos, la duración de la entrega y el nivel y estilo prescritos de los servicios que se ofertaran. Ej. En el servicio de Hotelería los Horarios o rutas para el uso de sus servicios. (Lovelock,2015)


    
    h3.titulo-tercero Experiencias

    p.mb-3 Para diferenciar sus ofertas, más allá del simple hecho de fabricar productos y prestar servicios, las empresas están creando y entregando experiencias para los clientes con sus marcas o su compañía. Las experiencias siempre han formado parte importante del marketing. Desde hace mucho tiempo Disney crea sueños y recuerdos a través de sus películas y parques temáticos. Y hace mucho que Nike declaró: “No se trata tanto de los zapatos, sino de a dónde te llevan”. Hoy todo tipo de empresas están rehaciendo sus tradicionales bienes y servicios para crear experiencias (Kotler,2017).
    p Los consumidores valoran las experiencias y las soluciones deseadas, y están dispuestos a pagar por ellas. No se puede poseer seres humanos, aunque sí puede contratar (alquilar) su trabajo y experiencia. Al pagar por el uso temporal de un objeto o por el acceso a una instalación física, los clientes disfrutan del uso de cosas que no pueden comprar o justificar su compra, o bien, que prefieren no conservar ni almacenar después de su uso. Además, el arrendamiento -por medio de tarifas de acceso y uso- ofrece a los clientes un medio para participar en sistemas de redes que los individuos y la mayoría de las organizaciones no podrían costear ni operar por sí mismos (Lovelock,2015).
    figure.mb-5
      img.mt-5.img-a(src="@/assets/curso/t1-i10.jpg")

    h3.titulo-tercero Características
    p.mb-5 Según Kotler (2017) se tienen en cuenta cuatro características especiales de los servicios al diseñar programas de marketing: intangibilidad, inseparabilidad, variabilidad y caducidad.

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
    .row(titulo="Intangibilidad")
        .col-md-10.mb-4.mb-md-0
        p Los servicios no se pueden observar, degustar, tocar, escuchar ni oler antes de adquirirlos. Por ejemplo, la gente que se somete a una cirugía cosmética no puede ver los resultados antes de la compra. Para reducir la incertidumbre, los consumidores buscan “señales” acerca de la calidad de un servicio. (Kotler,2017) 
    div(titulo="Inseparabilidad")
        .col-md-10.mb-4.mb-md-0
        p Los productos tangibles se producen, se almacenan, se venden y finalmente se consumen. En cambio, los servicios primero se venden, y se producen y consumen al mismo tiempo. La inseparabilidad del servicio se refiere a que éste no puede separarse de sus proveedores, los cuales son tanto individuos como máquinas. Tanto el proveedor como el cliente influyen en el resultado del servicio. (Kotler,2017)
    div(titulo="Variabilidad")
        .col-md-10.mb-4.mb-md-0
        p Implica que la calidad de los servicios depende de quién los proporciona, así como de cuándo, dónde y cómo los proporciona. Ej. En un hotel tienen la reputación de dar mejor servicio, quizás el recepcionista sea alegre y eficiente mientras que el botones sea desagradable y lento. (Kotler,2017)
    div(titulo="Caducidad")
        .col-md-10.mb-4.mb-md-0
        p Los servicios no pueden almacenarse para su venta o uso posterior. (Kotler,2017)


    .row.justify-content-center
      .col-lg-8.text-center
        figure
          img.mt-5.img-a(src="@/assets/curso/img_16.png")
    .row.mt-5.mb-5        
      .col-12.col-lg-12
        span.text-bold Evaluación de la calidad del servicio
        p Una vez que un consumidor prueba un servicio, ¿cómo lo evalúa? Principalmente, al comparar las expectativas sobre una oferta de servicio con la experiencia real que tiene con el mismo. Las diferencias entre las expectativas y la experiencia del consumidor se evalúan con base en dimensiones de la calidad del servicio. Las comunicaciones verbales, las necesidades personales, las experiencias previas y las actividades promocionales influyen en las expectativas, mientras que las experiencias reales están determinadas por la manera en la que una organización entrega su servicio en particular a través de competencias interpersonales (Kerin,2018).
        img.mt-5.img-a.img-fluid(src="@/assets/curso/t1-i11.jpg")

    Separador
    br
    br
    #t_1_3.titulo-segundo.mt-5
      h2 1.3. Marca
    figure
      img.mt-5.img-a.img-fluid(src="@/assets/curso/img_18.png")

    p.mt-5 La marca de un producto es aquello que lo identifica, que lo diferencia de otros similares, de manera que se convierte en el trasmisor de la esencia y los beneficios que aporta el producto, así como la proyección en el mercado de la imagen y el prestigio de la empresa que lo fabrica o lo comercializa (Martínez,2014).

    p Para Hernández (2017) “Los objetivos que se persiguen para otorgar una marca a un producto son: ser un signo de garantía para el producto, dar prestigio y seriedad a la empresa fabricante y ayudar a que se venda mejor el producto y las características primordiales de las marcas ponen énfasis en que su nombre no debe ser genérico; éste describe realmente al producto. El nombre debe ser corto, debe ser fácil de recordar, el sentido del nombre debe ser agradable, debe ser adaptable a cualquier medio de publicidad y se debe identificar fácilmente a simple vista.

    p Ricardo Hoyos (2016) define la importancia que tienen las marcas para el ser humano contemporáneo, como individuo y como ser social. A través de la marca, el ser humano se legitima frente a sí mismo y frente a los demás; por medio de ella se establecen afinidades con sus grupos de interés y distancias con personas y grupos sociales que considera diferentes. En razón de la marca, los individuos crean identidad de sí mismos y de sus grupos sociales.

    p.mb-5 En el siguiente cuadro se muestran los beneficios de la marca para el consumidor

    .row.justify-content-center
        .col-lg-8
            .tabla-c.color-acento-contenido.mb-5 
                table.table
                    thead
                        tr
                            th(scope='col').color-table Necesidad
                            th(scope='col').color-table Satisfactor
                            
                    tbody
                        tr
                            td.color-table2 Identificación
                            td.color-table2 Caracteriza al producto desde el punto de vista de la configuración de sus atributos.

                        tr
                            td.color-table3 Referencia
                            td.color-table3 Reduce a subconjuntos el universo total de productos que se ofrecen.

                        tr
                            td.color-table2 Garantía 
                            td.color-table2 Se entiende como un compromiso de calidad y de rendimiento por parte del fabricante.

                        tr
                            td.color-table3 Personalización 
                            td.color-table3 El usuario se puede sentir integrado a un grupo social (o diferenciado de él).

                        tr
                            td.color-table3 Lúdica 
                            td.color-table3 El usuario siente placer al comprar el producto.

                        tr
                            td.color-table2 Practicidad 
                            td.color-table2 Permite a las personas memorizar experiencias de consumo.

                figcaption Fuente: Román, 1988

    p.mb-5 La administración de la marca es la actividad en la que una organización emplea un nombre, frase, diseño o símbolos, o combinaciones de estos, para identificar sus productos y distinguirlos de los competidores. Un nombre de marca es cualquier palabra, elemento (diseño, sonido, forma o color) o combinación de estos, que se emplea para distinguir los bienes o servicios de un vendedor. El nombre comercial es una identidad mercantil y legal bajo la cual una empresa hace negocios. Una marca registrada identifica a una empresa registrada legalmente con su nombre de marca o con su nombre comercial, por lo que tiene la exclusividad de su uso, evitando que otros lo empleen. (Kerin,2018)

    h3.titulo-tercero   Tipos de marcas

    .row.justify-content-center.mb-5
        .col-lg-6
            img(src="@/assets/curso/img_19.png")

    .row.mb-5
        .col-lg-6
            .tarjeta-numerada.color-primario.p-5.h-100
                .tarjeta-numerada__numero
                    .h2 1
                .h4 Marca corporativa
                p Se habla de marca corporativa cuando identifica a una empresa; puede, incluso, ser la misma de sus productos. Las empresas muy pequeñas y con un portafolio poco diversificado o empresas de servicios, no asignan a cada producto una marca, sino que todo lo anuncian y comercializan con la marca de la organización, es decir, con la marca corporativa. Para el caso de empresas grandes y diversificadas, la marca corporativa regularmente es diferente a la de sus productos. Ej. Multinacionales extranjeras Unilever y Procter & Gamble y las multinacionales colombianas Nutresa y Quala. (Hoyos,2016

        .col-lg-6
            .tarjeta-numerada.color-primario.p-5.h-100
                .tarjeta-numerada__numero
                    .h2 2
                .h4 Marca de producto
                p La marca de producto es aquella que se usa para identificar un bien o un servicio en particular. Como ejemplo de estas marcas se pueden mencionar: Fruco, Coco, Axe, Lux, Rexona, Vasenol y Knorr, que pertenecen a Unilever, una de las empresas líderes en consumo masivo a nivel mundial. (Hoyos,2016)
    .row.mb-5    
        .col-lg-6
            .tarjeta-numerada.color-primario.p-5.h-100
                .tarjeta-numerada__numero
                    .h2 3
                .h4 Marcas propias o marca de distribuidor
                p Es aquella que fabrica el canal para vender en sus puntos de venta, compitiendo con las marcas de los fabricantes. Se clasifican en dos: marca blanca se venden con el nombre del detallista (marca Éxito o Ekono) y las privadas que se venden con un nombre diferente al nombre de la cadena, pero que son “fabricadas” por esta o fabricadas por un tercero para esta. Arkitect y Bronzini, en vestuario; Simply, en electrodomésticos y Taeq en alimentos, son ejemplos de marcas privadas de almacenes Éxito. (Hoyos,2016)
        .col-lg-6
            .tarjeta-numerada.color-primario.p-5.h-100
                .tarjeta-numerada__numero
                    .h2 4
                .h4 Marca colectiva
                p La desarrollan asociaciones de productores, fabricantes, prestadores de servicios, organizaciones o cualquier grupo de personas para identificar sus bienes y servicios. La marca colectiva busca explotar el buen nombre del cual gozan los integrantes y por extensión, la asociación misma, generando una ventaja competitiva frente a otros fabricantes que trabajan de manera individual. Ejemplo la Federación de Ganaderos –Fedegan–, presentó al mercado una marca colectiva para respaldar la producción de carne de seis frigoríficos asociados. El sello garantiza el origen del ganado, el sistema de clasificación de canales, los mecanismos de refrigeración y maduración de las carnes (Hoyos,2016)

    .row.mb-5    
        .col-lg-6
            .tarjeta-numerada.color-primario.p-5.h-100
                .tarjeta-numerada__numero
                    .h2 5
                .h4 Denominación de origen
                p Es el nombre o indicación de un lugar geográfico, que puede ser un país, una región determinada o una ciudad, que se asocia a un producto con el fin de darle más valor frente a los consumidores, ya que “garantiza que dicho producto sea originario de un lugar y, por las costumbres de producción o transformación de sus habitantes, tiene unas características y una reputación que lo hacen diferente de los productos semejantes provenientes de otros lugares geográﬁcos” (SIC, 2012) En Colombia se puede mencionar las artesanías de Ráquira, el bizcocho de Achira de Huila y el emblemático Café de Colombia. (Hoyos,2016)
        .col-lg-6
            .tarjeta-numerada.color-primario.p-5.h-100
                .tarjeta-numerada__numero
                    .h2 6
                .h4 Marca de certificación
                p “Son las que se utilizan para garantizar una calidad o estándar de un producto o servicio” (SIC, 2012). Están las marcas ingrediente, los ecosellos, y las marcas que certifican que las empresas o productos cumplen con ciertas normas de calidad. Ejemplos Cotton USA. (Hoyos,2016)

    .row.mb-5    
        .col-lg-6
            .tarjeta-numerada.color-primario.p-5.h-100
                .tarjeta-numerada__numero
                    .h2 7
                .h4 Marcas destino
                p Son las desarrolladas para países (marca país), para ciudades o zonas de las ciudades. Hoy en día es común hablar de city marketing, haciendo referencia al marketing que se hace para un destino turístico y de inversión. La marca país se usa para hacer promoción hacia el exterior, buscando básicamente la promoción de las exportaciones y del turismo, además la promoción de la inversión extranjera. (Hoyos,2016)
        .col-lg-6
            .tarjeta-numerada.color-primario.p-5.h-100
                .tarjeta-numerada__numero
                    .h2 8
                .h4 Marcas personales
                p Aunque desde lo legal no existe este tipo de marca, el nombre de las personas, que existe en el concepto del registro civil y no del marcario, es una marca y, desde el marketing, debe recibir el tratamiento que se da a una marca comercial. Esto es importante para quienes viven del prestigio de sus nombres, como los profesionales independientes, los políticos y los artistas e, inclusive, quienes son empleados. Personal branding Ej. Natalia Paris, quien comercializa, entre otros productos, ropa interior, calzado, aceites, perfumes, revistas y servicios de telecomunicaciones. 

 
    h3.titulo-tercero   Construcción de marcas fuertes

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
                figure
                    img(src="@/assets/curso/img_20.png")
            .col-lg-8
                .bloque-texto-a__texto.p-5
                    p Kotler (2017) determina que el branding representa una decisión difícil y las principales decisiones de estrategia de marca implican la selección del nombre de marca, co-branding y el desarrollo de marca.


    .row.justify-content-center.mt-5.mb-5
        .col-lg-4
            .h3.titulo-tercero  Selección del nombre de marca.
            p.mb-5  Un buen nombre contribuye al éxito de un producto; sin embargo, encontrar el mejor nombre de marca es una tarea difícil. Inicia con una revisión cuidadosa del producto y de sus beneficios, del mercado meta y de las estrategias de marketing propuestas. Después de eso, la asignación del nombre se vuelve una combinación de ciencia, arte y un poco de instinto. Algunas cualidades deseables para un nombre de marca son:
        .col-lg-6
            ul.lista-ul.mb-5.mt-5
                li 
                    i.fas.fa-check
                    |   Sugerir algo acerca de los beneficios y las cualidades del producto. Ej. Pinterest.
                li 
                    i.fas.fa-check
                    |   Fácil de pronunciar, reconocer y recordar. Ej. Twitter
                    
                li 
                    i.fas.fa-check
                    |   Distintivo.
                li 
                    i.fas.fa-check
                    |   Se pueda ampliar. Ej. Amazon.com se inició como vendedor de libros en línea, pero eligió un nombre que le permitiera expandirse a otras categorías.
                li 
                    i.fas.fa-check
                    |   Facilidad de traducción y no causar confusión con los idiomas. 
                li 
                    i.fas.fa-check
                    |   Registrarse y protegerse legalmente.
    .row.justify-content-center
        .col-lg-10
            .h3.titulo-tercero  Co-branding
            p.mb-5  Si dos nombres de marca establecidos por diferentes compañías se usan en el mismo producto, surge el co-branding. Cada marca opera una categoría diferente, las marcas combinadas crean mayor atractivo para el consumidor y aumentan el capital de marca. Ej. Taco Bell y Doritos formaron equipo para crear los Doritos Locos Tacos.                   

    .row.justify-content-center
        .col-lg-10
            .h3.titulo-tercero  Desarrollo de marca
            p.mb-5  Una compañía tiene cuatro opciones para desarrollar una marca: 
        .col-lg-10
            .row.mb-5
                .col-lg-6
                    .card.h-100
                        .card-body
                            .h5.card-title  Extensiones de línea
                            p   Cuando una empresa utiliza el nombre de una marca para introducir al mercado nuevas formas, nuevos colores, tamaños, ingredientes o sabores de una categoría de productos existente. 

                .col-lg-6
                    .card.h-100
                        .card-body
                            .h5.card-title  Extensiones de marca
                            p   Una extensión de marca implica el uso de un nombre de marca exitoso para lanzar productos nuevos o modificados en una categoría nueva.  

            .row.mb-5
                .col-lg-6
                    .card.h-100
                        .card-body
                            .h5.card-title  Multimarcas
                            p   Las compañías a menudo introducen marcas adicionales en la misma categoría de productos. 

                .col-lg-6
                    .card.h-100
                        .card-body
                            .h5.card-title  Marcas nuevas
                            p   Una empresa podría considerar que el poder de su nombre de marca existente está disminuyendo, y que necesita un nuevo nombre de marca. O quizás una empresa idee un nuevo nombre de marca cuando ingresa a una nueva categoría de productos, donde ninguno de sus nombres de marca actuales es adecuado.


    .row.justify-content-center.align-items-center
        .col-lg-10
            .tabla-c.color-acento-contenido.mb-5 
                table.table.tabletable-nowrap
                    thead
                        tr
                            th(scope='col').color-table Categoria Marca
                            th(scope='col').color-table Existente 
                            th(scope='col').color-table Nuevos
                            
                    tbody
                        tr
                            td.color-table2 Existente
                            td.color-table2 Extensión de línea
                            td.color-table2 Extensión de marca

                        tr
                            td.color-table3 Nuevos
                            td.color-table3 Multimarcas
                            td.color-table3 Marcas nuevas

    .titulo-tercero.mt-5#tema1_3_1
        h3 Personalidad de la marca
    img.mt-5.img-a(src="@/assets/curso/img_22.png")

    p.mt-5 Las marcas exitosas y establecidas asumen una personalidad de marca, que es un conjunto de características humanas asociadas con un nombre de marca. Los estudios demuestran que los consumidores suelen asignar rasgos de personalidad a los productos: tradicionales, románticos, resistentes, sofisticados, rebeldes, y que eligen las marcas que concuerdan más con la imagen propia o deseada. Se da personalidad a una marca mediante la publicidad que representa a cierto usuario o situación de uso y que transmite ciertas emociones o sentimientos que se asociaran con la marca. E. Harley-Davidson tiene rasgos asociados con masculinidad, desafío e individualismo vigoroso (Kerin,2018).


    .titulo-tercero.mt-5#tema1_3_1
        h3 Branding

    img.mt-5.img-a(src="@/assets/curso/img_23.png").img-fluid

    p.mt-5 El branding o la creación de una marca es un proceso integrativo, que busca construir marcas poderosas; es decir, marcas ampliamente conocidas, asociadas a elementos positivos, deseadas y compradas por una base amplia de consumidores. Esto incluye la definición de la identidad o imagen que se quiere tener en un mercado, su diseño gráfico y la puesta en escena de la marca frente a determinados públicos, de manera que tome relevancia y, además, rentabilidad a través de todos los procesos de compra y recompra de la misma (Hoyos,2016).

    .row.justify-content-center.align-items-center.mt-5
        .col-auto
            img(src="@/assets/curso/img_24.png", style="max-width: 120px").img-fluid.mb-3.mb-md-0
        .col-10
            hr.border-color-primary.border-2
            p #[strong Capital de marca.]
            p El capital de marca es el efecto diferencial que el conocimiento del nombre de una marca tiene sobre la respuesta del cliente ante el producto o su comercialización. Es una medida de la capacidad que tiene la marca para obtener la preferencia y lealtad del cliente. Una marca tiene un capital positivo cuando los consumidores reaccionan de manera más favorable ante ella que ante una versión genérica o sin marca del mismo producto. A la inversa, una marca tiene un capital negativo si los consumidores reaccionan ante ella, de manera menos favorable que a una versión sin marca (Kotler,2017).
            hr.border-color-primary.border-2
        .col-auto
            img(src="@/assets/curso/img_25.png", style="max-width: 120px").img-fluid.mb-3.mb-md-0
        .col-10
            p #[strong Top of mind.]
            p El top of mind o primera mención, se da cuando una persona, al ser indagada por una categoría específica, nombra una marca primero dentro de una serie de marcas que menciona, es decir, que dicha marca tiene el top of mind para dicha persona. En una investigación de top of mind, se preguntará a una base de personas, de un grupo objetivo específico, por marcas que recuerde y se estimará el promedio de personas que recuerdan una marca por sobre las demás. Dicho porcentaje será el top of mind de la categoría. En Colombia, anualmente, la Revista Dinero y la empresa de investigación de mercados, Invamer Gallup, realizan una investigación para establecer el top of mind de las marcas que compiten en este mercado. (Hoyos,2016) 
            hr.border-color-primary.border-2
        .col-auto
            img(src="@/assets/curso/img_26.png", style="max-width: 120px").img-fluid.mb-3.mb-md-0
        .col-10
            p #[strong E-branding.]
            p Rowles (2014) define al e-branding como la personalidad de la organización, servicio o producto creado por la suma de todas experiencias que una persona tiene con la marca, incluyendo la interacción con las redes sociales y las evaluaciones críticas online del desempeño de una marca (online reviews). Es decir, en esencia la marca y sus indicadores como conocimiento de marca, posicionamiento, preferencia de marca, intención de compra, re-compra y recomendación de marca, permanecen intactas. Lo que cambia con el advenimiento de la era digital es la forma en que se construye marca. 
            hr.border-color-primary.border-2

    .titulo-tercero.mt-5#tema1_3_2
        h3 Posicionamiento
    
    img.mt-5.img-a(src="@/assets/curso/img_27.png").img-fluid

    p.mt-5 El posicionamiento es lo que queremos que el consumidor piense acerca de nuestro producto, es decir, aquello que se constituye en la idea básica de venta, que generalmente es una afirmación o una frase. El posicionamiento se requiere cuando hay muchas alternativas de productos y marcas, muchos anuncios publicitarios, así como cuando la competencia ataca y cuando el producto entra al mercado. (Prieto,2013)

    p Para Prieto (2013) al hablar de posicionamiento se deben plantear las siguientes inquietudes: 

    .row.justify-content-center.align-items-center
            .col-auto
                img(src="@/assets/curso/img_28.png", alt="").img-icon
            .col
                ul.list-unstyled
                    li.justify-content-center
                        i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                        | ¿Para qué se usa el producto?

                    li.justify-content-center
                        i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                        | ¿Por qué se usa el producto?

                    li.justify-content-center
                        i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                        | ¿Cuál es la población objetivo del producto o servicio?

                    li.justify-content-center
                        i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                        | ¿Qué beneficios genera a ese grupo de usuarios el producto?

                    li.justify-content-center
                        i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                        | ¿Cómo se puede explotar al máximo el producto?

                    li.justify-content-center
                        i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                        | Comparando los productos competidores, ¿dónde está mentalmente el nuestro?

                    li.justify-content-center
                        i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                        | ¿Es comprensible el producto y sus atributos?

                    li.justify-content-center
                        i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                        | ¿Cuáles son las características indiscutibles del producto?


                    li.justify-content-center
                        i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                        | ¿Se diferencia el producto de los de la competencia?

                    li.justify-content-center
                        i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                        | ¿Sabe el cliente dónde comprar el producto?

                    li.justify-content-center
                        i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                        | ¿Esta segmentado el mercado del producto?

                    li.justify-content-center
                        i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                        | ¿Es efectiva la publicidad aplicada al producto?

            p.mt-5 Según Kotler (2017), el objetivo es posicionar las marcas con claridad en la mente del mercado meta. #[br]Las marcas se pueden posicionar en tres niveles.

            .row.justify-content-center.mt-5.my-5
                .col-10.col-md-9
                    ul.list-unstyled
                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | #[strong Atributos del producto.] Por ejemplo, P&G con su marca Pampers se enfocó en atributos tales como la absorción de fluidos, el ajuste y la facilidad de desecho.

                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | #[strong Beneficio deseable.] Ej. Pampers puede ir más allá al hablar de los beneficios de la absorción para la salud de la piel debido a que ésta se conserva seca. 

                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | #[strong Creencias y valores sólidos.] Atracción de clientes en un nivel profundo y emocional. Ej. para los padres de familia, Pampers significa mucho más que capacidad de absorción para mantener seca la piel del bebé. El sitio web de Pampers (www.pampers.com) posiciona a Pampers como una marca de “amor, sueño y juego” que se preocupa por que los bebés estén felices, por las relaciones entre padres e hijos y por el cuidado del bebé. 

                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | #[strong Lovemarks (marcas amadas).] Es decir, marcas que la gente ama. A los clientes no solamente les gustan esas marcas, sino que tienen fuertes conexiones emocionales con ellas y las aman incondicionalmente. 

            p Para Ricardo Hoyos (2016) las principales variables para posicionar un producto son:

            .row.justify-content-center.align-items-center.mt-5 

                .col-lg-4.col-md-5

                    .tarjeta.color-red.p-3.mb-5.r30.shadow-box
                        .row.justify-content-around.align-items-center
                            .col-2
                                img(src="@/assets/curso/img_21.png")
                            .col-10
                                .h3.mb-1 El liderazgo
                    .tarjeta.color-red.p-3.mb-5.r30.shadow-box
                        .row.justify-content-around.align-items-center
                            .col-2
                                img(src="@/assets/curso/img_21.png")
                            .col-10
                                .h3.mb-1 El estilo de vida
                    .tarjeta.color-red.p-3.mb-5.r30.shadow-box
                        .row.justify-content-around.align-items-center
                            .col-2
                                img(src="@/assets/curso/img_21.png")
                            .col-10
                                .h3.mb-1 El precio
                    .tarjeta.color-red.p-3.mb-5.r30.shadow-box
                        .row.justify-content-around.align-items-center
                            .col-2
                                img(src="@/assets/curso/img_21.png")
                            .col-10
                                .h3.mb-1 Los atributos

                    .tarjeta.color-red.p-3.mb-5.r30.shadow-box
                        .row.justify-content-around.align-items-center
                            .col-2
                                img(src="@/assets/curso/img_21.png")
                            .col-10
                                .h3.mb-1 La competencia

                .col-lg-4.col-md-5
                    .tarjeta.color-red.p-3.mb-5.r30.shadow-box
                        .row.justify-content-around.align-items-center
                            .col-2
                                img(src="@/assets/curso/img_21.png")
                            .col-10
                                .h3.mb-1 La ocasión de uso
                    .tarjeta.color-red.p-3.mb-5.r30.shadow-box
                        .row.justify-content-around.align-items-center
                            .col-2
                                img(src="@/assets/curso/img_21.png")
                            .col-10
                                .h3.mb-1 Los usuarios
                    .tarjeta.color-red.p-3.mb-5.r30.shadow-box
                        .row.justify-content-around.align-items-center
                            .col-2
                                img(src="@/assets/curso/img_21.png")
                            .col-10
                                .h3.mb-1 La calidad
                    .tarjeta.color-red.p-3.mb-5.r30.shadow-box
                        .row.justify-content-around.align-items-center
                            .col-2
                                img(src="@/assets/curso/img_21.png")
                            .col-10
                                .h3.mb-1 La clase de producto
                    .tarjeta.color-red.p-3.mb-5.r30.shadow-box
                        .row.justify-content-around.align-items-center
                            .col-2
                                img(src="@/assets/curso/img_21.png")
                            .col-10
                                .h3.mb-1 Los usos del producto


            .row.justify-content-center.mb-5
                
                .col-lg-8
                    
                    .cajon.color-primario.p-4
                        .row.align-items-center
                            .col-lg-8
                                p.mb-5.text-bold.p-3 Un ejemplo de excelente posicionamiento es Colombiana, la nuestra. La gaseosa de los colombianos.
                            .col-lg-4
                                img(src="@/assets/curso/t1-x1.png", alt="Envase de gaseosa Colombiana")
            Separador
            br
            br
            #t_1_4.titulo-segundo.mt-5
                h2 1.4. Envase

            img.mt-5.img-a(src="@/assets/curso/img_30.png").img-fluid   

            p.mt-5 El envase junto con la etiqueta informa al posible comprador sobre el producto, que contiene, sus características, la empresa que lo elabora y la marca. (Martinez,2014)

            p Alicia Martínez García (2014) describe a continuación los tipos de envases, sus funciones y condiciones.  

            h2.text-center.mt-5 Tipos de envases.

            img.mb-5.img-a(src="@/assets/curso/t1-i16.svg").img-fluid 

            h3.titulo-tercero  Funciones del envase                   

            .row.justify-content-center.mt-5.my-5
                .col-10.col-md-9
                    ul.list-unstyled.mb-5
                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | #[strong Contención:] El estado físico del producto (sólido, líquido y gaseoso) va a determinar por sí mismo el tipo de envase para su contenido. (Hernandez,2017)

                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | #[strong Conservación:] impide que el producto que contiene se deteriore antes de ser utilizado, un elemento volátil como el alcohol si no se envasa debidamente se evapora. (Martínez,2014)

                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | #[strong Protección:] La protección física se requiere para defender al producto contra los choques o impactos, caídas, vibraciones, para evitar que se rompa o se desajuste y para impedir posibles mermas o fugas. La protección química se requiere para defender al producto contra los efectos del oxígeno y otros elementos (como el calor, el frío, la humedad o los rayos ultravioleta) que favorecen la aparición y el desarrollo de hongos que degradan la apariencia sensorial y nutricional. (Hernandez,2017)

                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | #[strong Seguridad:] se evitan posibles accidentes que algunos productos, por sus características podrían provocar como una bombona de gas o una botella de agua fuerte. (Martínez,2014)

                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | #[strong Manipulación:] facilitan el manejo y apilamiento de las cajas. (Martínez,2014)

                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | #[strong Comunicación:] El envase cumple dos funciones específicas: 

                    img.mb-5(src="@/assets/curso/img_32.png")

            h3.titulo-tercero   Condiciones del envase

            .row.justify-content-center.mb-5
                .col-10.col-md-9
                    ul.list-unstyled
                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | #[strong Antes de la compra]
                    ul.ul1
                        li
                            p Identifica el producto y la marca. Ejemplo: perfumes.    
                        li
                            p Relaciona lo que contiene el contenido. Ejemplo: envases de vidrio.
                        li
                            p Anuncia el producto que contiene, por esto debe tener un diseño que atraiga al consumidor.

                    ul.list-unstyled
                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | #[strong Después de la compra]

                    ul.ul1
                        li
                            p Fácil de manipular y abrir    
                        li
                            p Cómodos en posteriores usos. No siempre se consume de una sola vez debe tener mecanismos de conservación y usarlo con facilidad.

            Separador
            br
            br
            #t_1_5.titulo-segundo.mt-5
                h2 1.5. Empaque
            .row.justify-content-center
                .col-lg-10
                    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.bg-image-cover2 
                        .row.m-0.align-items-center.justify-content-between
                            .col-lg-4.mb-4.mb-lg-0
                                h2.mb-0 
                            .col-lg-8
                                .bloque-texto-a__texto.p-4.shadow-box
                                    p.mb-3 El empaque de un producto es cualquier contenedor en el que se ofrece para su venta y que incluye una etiqueta con información relevante para el consumidor (Kerin,2018).

                                    p El empaquetado de un producto también conocido como packaging tiene como objetivo fundamental atraer la atención del cliente. La presentación de un producto puede determinar que este sea un éxito o un fracaso. En ocasiones ayuda a facilitar el reconocimiento de las marcas. El packaging contiene, protege, conserva, transporta, informa y vende (Martinez,2014).

            h3.titulo-tercero  Beneficios del empaque

            AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta color-secundario")
                .row(titulo="Beneficios de comunicación").justify-content-center
                    .col-lg-10
                        p Uno de los principales beneficios del empaque es la información que se transmite al consumidor mediante la etiqueta, como las instrucciones de uso del producto y su composición, las cuales son necesarias para satisfacer requisitos legales. Por ejemplo, el sistema de etiquetado de alimentos empacados y procesados proporciona un formato uniforme para información nutricional y dietética. (Kerin,2018) 

                .row(titulo="Beneficios funcionales").justify-content-center
                    .col-lg-10
                        p Los empaques suelen desempeñar una importante función, como de almacenamiento, comodidad, protección y calidad del producto. Los envases para alimentos son un ejemplo, y las empresas de bebidas los han hecho más ligeros y fáciles de apilar en anaqueles y refrigeradores. (Kerin,2018)

                .row(titulo="Beneficios percibidos").justify-content-center
                    .col-lg-10
                        p La percepción que se crea en la mente de los consumidores. La forma del empaque, la etiqueta, el color y las imágenes distinguen a una marca de otra, comunican el posicionamiento de una marca y crean valor de marca, facilitando la formación de asociaciones de marca fuertes, favorables y únicas. (Kerin,2018) 
                .row(titulo="Preocupación por el medio ambiente").justify-content-center
                    .col-lg-10
                        p Debido a la inquietud generalizada en todo el mundo por el aumento de los desechos sólidos y por el déficit de rellenos sanitarios adecuados, la cantidad, composición y eliminación de los materiales de empaquetado continúan recibiendo mucha atención con la finalidad de reducir los desechos sólidos. (Kerin,2018)


            Separador
            br
            br
            #t_1_6.titulo-segundo.mt-5
                h2 1.6. Embalaje
            .row.justify-content-center
                .col-lg-12
                    .bloque-texto-a.p-4.p-md-5.mb-5.color-neutro 
                        .row.m-0.align-items-center.justify-content-between
                            .col-lg-8
                                .bloque-texto-a__texto.p-4.shadow-box
                                    p.mb-3 Hernández (2017) Define el embalaje como un contenedor colectivo, que agrupa varios envases primarios y secundarios (empaques), con la finalidad de unificarlos, protegerlos, facilitar su manejo, almacenamiento, transporte y distribución. También se le conoce como el “envase de distribución”. Las dos principales funciones del embalaje son unificar y proteger la mercancía durante su distribución.

                            .col-lg-4.mb-4.mb-lg-0
                                figure
                                    img(src="@/assets/curso/img_34.png", alt="")


            .row.justify-content-center.align-items-center.mt-5
                .col-lg-12.mb-5
                    .card.r30.p-3.tarjeta--gris
                        .card-body
                            .h3 Función de unificación
                            p.mb-3  Los productos de consumo no se pueden comercializar a granel en los sistemas de distribución masiva. No es posible distribuir ningún producto si no está debidamente embalado. Las cargas formadas por productos embalados colectivamente llegan a ser homogéneas o heterogéneas. Cuando la carga es homogénea no es difícil resolver su acomodo, pero cuando es heterogénea (con pesos, dimensiones y materiales distintos), surge el problema de su acomodo, por la posibilidad de caídas y daños.
                .col-lg-12
                    .card.r30.p-3.tarjeta--gris.mb-5
                        .card-body
                            .h3 Función de protección
                            p.mb-3  La protección que da el embalaje al producto es de vital importancia para llevar a efecto su distribución masiva. Los materiales del envase y el embalaje que se utilizan comúnmente son:
                            .row.mb-5
                                .col-lg-4
                                    .tarjeta--boton.color-primario.p-4
                                        .row.justify-content-center.mb-3
                                            .col-7
                                                figure
                                                img(src='@/assets/curso/ic-px1.svg', alt='Texto que describa la imagen')
                                        h4.text-center Papel
                                        p.text-small Es uno de los materiales más utilizados para el envase y puede combinarse con el aluminio y las películas plásticas. Su función principal es evitar fricciones entre las piezas, así como proporcionar una envoltura desechable que evite las raspaduras y la vibración. El papel no resiste la humedad ni las grasas.
                                .col-lg-4
                                    .tarjeta--boton.color-primario.p-4
                                        .row.justify-content-center.mb-3
                                            .col-7
                                                figure
                                                img(src='@/assets/curso/ic-px2.svg', alt='Texto que describa la imagen')
                                        h4.text-center Cartón
                                        p.text-small Se utiliza más como amortiguador que como envase. Como embalaje es posible darle propiedades impermeables aplicando películas de parafina o polietileno.

                                .col-lg-4
                                    .tarjeta--boton.color-primario.p-4
                                        .row.justify-content-center.mb-3
                                            .col-7
                                                figure
                                                img(src='@/assets/curso/ic-px3.svg', alt='Texto que describa la imagen')
                                        h4.text-center Madera
                                        p.text-small Se emplea para la fabricación de tarimas, cajas, rejas o jaulas y carretes. Usualmente se utiliza la madera de pino por resistente y barata.
                            .row.mb-5
                                .col-lg-4
                                    .tarjeta--boton.color-primario.p-4
                                        .row.justify-content-center.mb-3
                                            .col-7
                                                figure
                                                img(src='@/assets/curso/ic-px4.svg', alt='Texto que describa la imagen')
                                        h4.text-center Plásticos
                                        p.text-small Sirve para fabricar envases y embalajes de alta productividad; sin embargo, el plástico no es biodegradable por lo que representa problemas ecológicos graves a futuro. Este tipo de envases se deben reciclar.
                                .col-lg-4
                                    .tarjeta--boton.color-primario.p-4
                                        .row.justify-content-center.mb-3
                                            .col-7
                                                figure
                                                img(src='@/assets/curso/ic-px5.svg', alt='Texto que describa la imagen')
                                        h4.text-center Vidrio
                                        p.text-small Es el material tradicional para el envase de alimentos, vinos, algunos fármacos y cosméticos. Algunas de sus características son su estabilidad química, que son 100% impermeables, la esterilización, refractabilidad, retornabilidad y la presentación de calidad.

                                .col-lg-4
                                    .tarjeta--boton.color-primario.p-4
                                        .row.justify-content-center.mb-3
                                            .col-7
                                                figure
                                                img(src='@/assets/curso/ic-px6.svg', alt='Texto que describa la imagen')
                                        h4.text-center Metales
                                        p.text-small La hoja de lata es mayormente utilizada para la conservación de alimentos, así como para el envasado de pinturas, solventes y productos químicos, mientras que el aluminio lo es para los refrescos.

                            .row.justify-content-center.mb-5
                                .col-lg-8
                                    .tarjeta.color-secundario.p-3.mb-5
                                        .row.justify-content-around.align-items-center
                                            .col
                                                .row.justify-content-between.align-items-center
                                                    .col.mb-3.mb-sm-0
                                                        h3.mb-1 Tipos de materiales
                                                        p.text-small En la siguiente presentación se describen los tipos de materiales, por ello, se invita que lo consulte. 
                                                    .col-sm-auto
                                                        a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Tipos de materiales_INFOGRAFIA.pdf')" target="_blank")
                                                            span Descargar
                                                            i.fas.fa-file-download
            Separador
            br
            br
            #t_1_7.titulo-segundo.mt-5
                h2 1.7. Etiqueta

            img.mt-5.img-a(src="@/assets/curso/img_35.png").img-fluid 

            p.mt-5 Una etiqueta es una parte integral del empaque, la cual identifica el producto o marca, quién, dónde y cuándo lo hizo, cómo debe usarse, cuál es su contenido y sus ingredientes (Kerin,2018).

            p.mb-5 Hernández (2017), explica la etiqueta como “la parte del producto que contiene la información escrita sobre el artículo. Una etiqueta puede ser parte del embalaje o simplemente una hoja adherida directamente al producto. La etiqueta se utiliza para facilitar la identificación de un producto al presentar la marca y un diseño gráfico único”. A continuación, describe los objetivos, elementos y características que deben tener las etiquetas. 
            
            h3.titulo-tercero   Objetivos de las etiquetas

            .row.justify-content-center.mb-5
                .col-10.col-md-9
                    ul.list-unstyled
                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | Identificar al producto con el propósito de distinguirlo de los demás.


                        li.justify-content-center.mt-3
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | Proporcionar información sobre el producto para que tanto el vendedor como el consumidor conozcan las características, formas de consumo, beneficios esperados, entre otros.

            h3.titulo-tercero   Elementos que debe considerar la etiqueta

            img.img-a(src="@/assets/curso/img_36.png").img-fluid 

            .row.justify-content-center.align-items-center.mb-5

                .col-12.col-md-4.my-6
                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Marca.]

                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Nombre y dirección del fabricante.]

                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Denominación del producto.]

                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Naturaleza del mismo.]

            
                .col-12.col-md-4.my-6
                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Contenido neto y en su caso el peso drenado.]

                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Número del registro de la Secretaría de Salud.]

                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Composición física y química.]

            
                .col-12.col-md-4.my-6
                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Identificación del producto.]

                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Fecha de fabricación, de caducidad, etcétera.]

                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Instrucciones de uso o avisos de advertencia, como los que aparecen en los cigarros.]

            .row.justify-content-center.mb-5.no-margin
                .col-lg-3
                    .tarjeta--boton.color-primario.p-4
                        .row.justify-content-center.mb-3
                            .col-7
                                figure
                                    img(src='@/assets/curso/img_38.png', alt='Texto que describa la imagen')
                        p.text-small Deben ser adaptables al envase en tamaño, color, forma, material, etcétera.
                .col-lg-3
                    .tarjeta--boton.color-primario.p-4.h-100
                        .row.justify-content-center.mb-3
                            .col-7
                                figure
                                    img(src='@/assets/curso/img_39.png', alt='Texto que describa la imagen')
                        p.text-small El material deberá ser resistente para que perdure desde la salida del producto del almacén hasta llegar a manos del consumidor final.

                .col-lg-3
                    .tarjeta--boton.color-primario.p-4
                        .row.justify-content-center.mb-3
                            .col-7
                                figure
                                    img(src='@/assets/curso/img_40.png', alt='Texto que describa la imagen')
                        p.text-small Tienen que estar perfectamente adheridas para evitar su desprendimiento o que se pueda confundir con algún otro artículo.
                .col-lg-3
                    .tarjeta--boton.color-primario.p-4
                        .row.justify-content-center.mb-3
                            .col-7
                                figure
                                    img(src='@/assets/curso/img_41.png', alt='Texto que describa la imagen')
                        p.text-small Deben contener todos los elementos descritos para evitar aspectos dudosos para el consumidor.



            h3.titulo-tercero.mt-5#tema1_7_1 Códigos barras

            img.img-a(src="@/assets/curso/img_42.png").img-fluid 

            p.mt-5 Para la identificación del producto se ha extendido el uso del código de barras que se abrevia en inglés como UPC y significa Código Universal del Producto. Es indispensable para aquellos bienes que se adquieren en el autoservicio o almacenes, a efecto de que las computadoras de una bodega o un comercio identifiquen plenamente cada artículo a través de la lectura con rayo láser y se activen los programas de precios y facturación, así como las entradas y salidas del inventario (Hernández,2017).

            p En el sector del comercio, sobre todo, pero también en muchos otros sectores, el código de barras responde a dos necesidades: la primera, tener una codificación de cobertura universal, de modo que un ítem tenga un código que lo identifique en todo el mundo y que sea irrepetible; la segunda, que el código sea leído por una máquina, que se elimine la digitación, para efectos de eliminación de errores y de rapidez de operación. El lenguaje de barras paralelas verticales, de diferente grosor y diferente espesor de separación, con el que se crean códigos alfanuméricos, posibles de leer mediante un rayo láser y ser transmitidos a un sistema de computación (Vélez,2014).

            p.mb-5 Actualmente, el Código EAN 13. Es el más utilizado entre todas las aplicaciones del GS1. A veces conocido como GTIN (Global Trade Item Number). Es el código de uso corriente para lectura en las cajas registradoras en los autoservicios, es decir, es el sistema utilizado para la codificación de bienes de consumo. El EAN 13 está compuesto por 13 dígitos, generalmente la estructura de la codificación es la siguiente según Vélez (2014):

            .row.justify-content-center.mb-5
                .col-lg-10
                    figure
                        img(src="@/assets/curso/img_43.png")

            .row.justify-content-center.align-items-center.mb-5
                .col-10.col-md-9
                    .row
                        .col-auto
                            img(src="@/assets/curso/img_44.png", alt="").img-icon
                        .col
                            p Código QR (Quick Response), o código 2D (Dos dimensiones). Creado en 1994 por una subsidiaria de Toyota. Almacena datos hasta de 7.000 caracteres. De común aplicación industrial en Japón y muy utilizado hoy en publicidad, luego de que a los teléfonos móviles se les incluyó software para leerlo. Es un código libre de derechos de patente. (Vélez,2014)

            .titulo-tercero.mt-5#tema1_7_2 
                h3 Etiqueta RFID    

            img.img-a(src="@/assets/curso/img_45.png").img-fluid 

            p.mt-5 La tecnología para identificar objetos mediante ondas de radiofrecuencia llamada Radio Frequency Identification (RFID), también denominada Dedicated Short Range Communication (DSRC). Esta tecnología identifica el producto y sigue su ruta desde la fábrica hasta el consumidor. Tiene muchas ventajas: no es necesario que esté en contacto directo con un escáner —ya que permite identificar y localizar al proveedor de artículos más inmediato en la cadena de suministro de cualquier compañía, sector y ubicación en el mundo—; realiza lecturas más rápidas y más precisas (eliminando la necesidad de tener una línea de visión directa); permite niveles más bajos en el inventario; mejora el flujo de caja y la reducción potencial de gastos generales; reduce mermas de inventario, capacidad de informar al personal o a los encargados del tiempo para reabastecer las estanterías o corregir la ubicación del artículo que se ha colocado en el sitio equivocado; ayuda a conocer exactamente qué elementos han sido sustraídos y de ser necesario, dónde localizarlos; previene el robo en tienda; lucha contra la falsificación y facilita el retiro del mercado del producto que ha caducado (Hernandez,2017).

            p La etiqueta RFID se trata del código EPC (Electronic Product Code) que se encuentra almacenado en un circuito integrado, llamado tag y que se transmite y se lee por radiofrecuencia en el sistema RFID. El EPC está administrado en el mundo por la organización EPC Global, filial de GS1. Su formato está conformado mediante 24 posiciones (alfanuméricas), contra los 13 dígitos del código GTIN del EAN-13, distribuidos en cuatro secciones (Vélez, 2014).

            p A continuación, Vélez (2014) nos describe las posiciones de la etiqueta RFID.

            .row.justify-content-center.align-items-center.mt-5.mb-5
                .col-lg-3.mb-5
                    figure
                        img.h180(src="@/assets/curso/img_46.png", alt="")
                .col-lg-6
                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Marca.]
                            p.mt-0 2 posiciones indican el número de versión utilizada en ese EPC
                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Administrador EPC.]
                            p.mt-0 6 posiciones indican la empresa que se hace responsable.
                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Categoría de objeto.]
                            p.mt-0 6 posiciones identifican el tipo de producto.
                    .row
                        .col-1.col-md-1.flecha
                            img(src="@/assets/curso/img_37.png").img-icon
                        .col-9.col-md-9
                            p #[strong Número serial.]
                            p.mt-0 9 posiciones forman el identificador universal inequívoco de ítem.

            p El sistema opera mediante una tarjeta o tag, que contiene un chip con una memoria interna, variable hasta millares de bytes, según el modelo y una antena transmisora, adherida al ítem, que puede ser objeto, animal o aún, persona y que, mediante ondas de radio, entrega los datos de un código a un lector RFID que los capta y puede transmitirlos a un sistema de computación, para ser procesados. Indiscutiblemente el código de barras será sustituido rápidamente por aplicaciones y utilizaciones prácticas y rutinarias del sistema RFID (Vélez, 2014).

            Separador
            br
            br
            #t_1_8.titulo-segundo.mt-5
                h2 1.8. Marketing Green

            img.img-a(src="@/assets/curso/img_47.png").img-fluid 

            p.mt-5 Kotler (2017), determina que tanto los consumidores como las empresas están cambiando su perspectiva sobre los problemas ambientales y da las siguientes perspectivas:

            .row.justify-content-center.mt-5.my-5.mb-5
                    .col-10.col-md-9
                        ul.list-unstyled
                            li.justify-content-center.mt-5
                                i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                                | Perspectiva de los consumidores: los consumidores han convertido sus legítimas preocupaciones ambientales en palabras y acciones, enfocándose en los productos verdes, la sustentabilidad corporativa y otros temas ambientales. 

                            li.justify-content-center.mt-5
                                i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                                | Perspectiva de las empresas: generalmente, los productos verdes han destacado sus beneficios naturales, en este momento cobra importancia y popularidad los beneficios ambientales ya que los consumidores también se han vuelto escépticos acerca de discursos ecológicos difíciles de comprobar.
            Separador
            br
            br
            #t_1_9.titulo-segundo.mt-5
                h2 1.9. Marketing Social

            img.img-a(src="@/assets/curso/img_48.png").img-fluid 

            p.mt-5 El marketing social se aplica cuando existen organizaciones que, comprometidas con la situación de una ciudad, desarrollan programas de comunicación, buscando concientizar a los ciudadanos acerca de la necesidad de mantener en buen estado los parques, no fumar en lugares públicos, respetar a los ancianos, navidad sin pólvora o sin niños quemados, entre otras. En general el marketing social pretende generar, a través de sus acciones, protección y bienestar para la comunidad (Prettel,2016). 

            p Lamb, Hair y McDaniel (2011), plantean en este sentido: #[strong La responsabilidad social corporativa] (de una empresa), como la que se refiere al interés de la misma por la forma en que su decisión afecta a la sociedad. Si bien la compañía tiene que considerar sus necesidades económicas, debe operar también dentro de la ley, hacer lo que es ético y justo, y ser una buena ciudadana.

            p Para Forero (2017), el marketing social hace referencia a las consideraciones relacionadas con la responsabilidad social, el medio ambiente y el respeto de los valores de las personas y de las comunidades. En esta nueva concepción, el marketing ha pasado de ser útil para la promoción de productos para convertirse en un instrumento vital para promover inclusive ideas y servicios (Nieto 1988).

            p Según Stanton, (2007) la responsabilidad social de una empresa se extiende las dimensiones de amplitud y compromiso de sus metas de marketing lo suficiente para cumplir su responsabilidad social, pone en práctica lo que se conoce como el concepto de marketing social.

            .row.justify-content-center.mt-5.my-5
                .col-lg-3
                    figure
                        img.img-a(src="@/assets/curso/t1-i28.svg")
                .col-lg-8
                    ul.lista-ul
                        li
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | Amplitud del marketing, una empresa reconoce que su mercado abarca no sólo a los compradores de sus productos, sino también a cualquier afectado directamente por sus operaciones. Ejemplo los detallistas de la moda internacional con la disponibilidad de empleos en economías del tercer mundo. 

                        li
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | Extender la dimensión del compromiso de sus metas de marketing, significa que una empresa debe reconocer que atender las necesidades más amplias de la sociedad para satisfacer las necesidades sociales de sus clientes al igual que las económicas.

            p.mb-5 El marketing social consiste en motivar comportamientos que generen bienestar individual y social. Los programas de marketing social abarcan un amplio rango de asuntos. Se desarrollan campañas de propaganda social que hablan de asuntos como salud preventiva, educación, sustentabilidad ambiental, derechos humanos y seguridad personal. En todo caso, el marketing social implica mucho más que difundir campañas de información; implica una amplia variedad de estrategias y herramientas de mezcla de marketing diseñadas para motivar cambios sociales benéficos (Kotler,2017).
            Separador
            br
            br
            #t_1_10.titulo-segundo 
                h2 1.10. Normativa
            .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
                .row.m-0.align-items-center.justify-content-between
                    .col-lg-4.mb-4.mb-lg-0
                        figure
                            img(src="@/assets/curso/img_49.png")
                    .col-lg-8
                        .bloque-texto-a__texto.p-5
                            p Los productos y las marcas hoy en día son el mayor activo de las empresas. Por tanto, es necesario que se asegure que tengan la debida protección legal, tanto a nivel nacional como internacional y se garantice la sostenibilidad de las empresas, puesto que estas sin marcas no podrían existir. (Hoyos,2016)
             

            .row.mb-5.justify-content-center
                .col-lg-4.align-items-center.p-4
                    img(src="@/assets/curso/img_50.png")
                .col-lg-6
                    p En Colombia la protección industrial se da a través de la Superintendencia de industria y comercio SIC https://www.sic.gov.co/propiedad-Industrial es la autoridad nacional de protección de la competencia, los datos personales y la metrología legal, protege los derechos de los consumidores y administra el Sistema Nacional de Propiedad Industrial, a través del ejercicio de sus funciones administrativas y jurisdiccionales. Se pueden proteger las marcas y signos distintivos, patentes y nuevas creaciones y los servicios de seguimiento a nuevas tecnologías. 
            


            p Para la protección de los derechos de autor esta la dirección nacional de derechos de autor http://derechodeautor.gov.co/ Ente institucional para fortalecer la debida y adecuada protección de los diversos titulares del derecho de autor y los derechos conexos, contribuyendo a la formación, desarrollo y sustentación de una cultura nacional de respeto por los derechos de los diversos autores y titulares de las obras literarias y artísticas.
            .row.justify-content-center
                .col-lg-7
                    img(src="@/assets/curso/img_51.png")

            p.mt-5 Para que una marca pueda ser registrada debe cumplir con tres condiciones principalmente: distintividad, perceptibilidad y susceptibilidad de representación gráfica (Godoy, 2006).

            .row.justify-content-center.mt-5.my-5.align-items-center
                .col-lg-3
                    figure
                        img(src="@/assets/curso/t1-i31.svg")
                .col-lg-8
                    ul.list-unstyled.p-4
                        li.justify-content-center
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | La distintividad, se refiere a que la marca debe ser diferente en todo aspecto de las marcas con las cuales compite en un mercado; la diferenciación debe ser visual, ortográfica, fonética y conceptual. (Hoyos,2016)

                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | La perceptibilidad, se define como “la cualidad que tiene un símbolo de expresarse y materializarse para ser aprehendido por los consumidores o usuarios a través de los sentidos y asimilado por la inteligencia” (Godoy, 2006).

                        li.justify-content-center.mt-5
                            i.fa.fa-angle-right.fa-lg.mr-3.text-color-orange
                            | La representatividad gráfica, se refiere a que la marca debe ser susceptible de ser registrada con una palabra, una imagen, un símbolo o elementos análogos. Para el caso de las marcas acústicas, se da a través de un pentagrama correspondiente a la marca y, en el caso de las marcas olfativas, se da a través de la fórmula química que representa el olor marcario. (Hoyos,2016)


  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.h90 {height: 90px}
.h180{height: 180px; width: 180px}
.bg-image-cover{background: url('../assets/curso/t1-i6.jpg'); background-size: cover;}
</style>
