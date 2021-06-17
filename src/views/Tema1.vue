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
        .tarjeta-avatar-b.mb-5.align-items-center
          img.h90(src='@/assets/curso/t1-i2.svg' alt='AvatarTop')
          .tarjeta.borde-y
            .p-4
              .h3 Un producto único:
              p Es un producto específico que tiene una marca, un tamaño o precio único. 
                span.text-bold  Ejemplo: suavizante para ropa Ultra Downy.
        .tarjeta-avatar-b.mb-5.align-items-center
          img.h90(src='@/assets/curso/t1-i3.svg' alt='AvatarTop')
          .tarjeta.borde-y
            .p-4
              .h3 Una línea de productos
              p Es un grupo de artículos de productos o servicios que están estrechamente relacionados porque satisfacen un tipo de necesidades, se usan juntos, se venden al mismo grupo de consumidores, se distribuyen en los mismos mercados o están dentro de un mismo rango de precios. 
                span.text-bold  Ej. Las líneas de productos de Nike consisten en ropa y zapatos tenis.
        .tarjeta-avatar-b.mb-5.align-items-center
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
    #t1-1.titulo-segundo
      h2 1.1 Producto
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0.bg-image-cover
              h2.mb-0 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Kotler (2017), define un producto como cualquier bien que se pueda ofrecer a un mercado para su atención, adquisición, uso o consumo, y que podría satisfacer un deseo o una necesidad.

    .row.justify-content-center.mb-5
      .col-lg-6
        table.table.table-nowrap.justify-content-center.text-center.mt-5
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
        caption Fuente: (Hernández,2017)

    h3.titulo-tercero Clasificación de los productos
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
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
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

    .row.justify-content-center
      .col-lg-10
        .tarjeta-numerada.color-primario.px-5.py-4.mb-3.borde-y
          .tarjeta-numerada__numero
            .h2 1
          p Desarrollo del producto: inicia cuando la compañía encuentra y desarrolla la idea para un nuevo producto o servicio. Durante el desarrollo del producto, las ventas son iguales a cero y los costos de inversión de la compañía se incrementan. (Kotler,2017)

        .tarjeta-numerada.color-primario.px-5.py-4.mb-3.borde-y
          .tarjeta-numerada__numero
            .h2 2
          p Introducción: ocurre cuando el producto se presenta por primera vez en el mercado meta deseado. (Kerin,2018) Es un periodo de crecimiento lento de las ventas conforme el producto o servicio se lanza al mercado. Las utilidades son nulas en esta fase a causa de los considerables gastos del lanzamiento del producto. (Kotler,2017) 
          p.text-bold Un ejemplo para la etapa de introducción es el último Smartphone sacado al mercado.

        .tarjeta-numerada.color-primario.px-5.py-4.mb-3.borde-y
          .tarjeta-numerada__numero
            .h2 3
          p Crecimiento: se caracteriza por rápidos aumentos en las ventas. En esta fase aparecen los competidores. (Kerin,2018) Es una etapa de aceptación rápida en el mercado y de incremento en las utilidades. (Kotler,2017)
        
        .tarjeta-numerada.color-primario.px-5.py-4.mb-3.borde-y
          .tarjeta-numerada__numero
            .h2 4
          p Madurez: disminuye el crecimiento de las ventas porque el producto o servicio ya ganó la aceptación de la mayoría de los compradores potenciales. El nivel de utilidades se estabiliza o incluso disminuye a causa de los crecientes gastos de marketing para defender el producto frente a la competencia. (Kotler,2017)

        .tarjeta-numerada.color-primario.px-5.py-4.mb-3.borde-y
          .tarjeta-numerada__numero
            .h2 5
          p Decadencia: es el periodo en el que tanto las ventas como las utilidades disminuyen. (Kotler,2017) Con frecuencia, un producto entra en esta etapa no por una estrategia equivocada por parte de la empresa, sino por cambios en el entorno. Una empresa seguirá una de dos estrategias para manejar un producto en decadencia: la eliminación o su drástica desaparición de la línea de productos y la cosecha que consiste en que el producto sigue ofreciéndose, aunque los vendedores no asignan tiempo para venderlo ni se realizan gastos de publicidad. (Kerin,2018)

    p A continuación, Hernández (2017) realiza un cuadro sobre las características e implicaciones de cada etapa del ciclo de vida del producto.
      .row.justify-content-center
        .col-lg-8
          table.table.table-nowrap.justify-content-center.text-center.mt-5
            thead
              tr
                td
                td(colspan="4").color-table.text-center #[strong Etapa]
                            
            tbody
              tr
                td 
                td.color-table_3 Introducción
                td.color-table_3 Crecimiento
                td.color-table_3 Madurez
                td.color-table_3 Declive

              tr
                td.color-table2 Clientes
                td.color-table2 Innovadores
                td.color-table2 Mercado masivo
                td.color-table2 intensa
                td.color-table2 Leales
                           

              tr
                td.color-table3 Competencia
                td.color-table3 Competencia Poca o nula
                td.color-table3 Creciente
                td.color-table3 Intensa
                td.color-table3 Decreciente

              tr
                td.color-table2 Ventas
                td.color-table2 Niveles bajos que después crecen
                td.color-table2 Crecimiento rápido
                td.color-table2 Crecimiento lento
                td.color-table2 Decreciente

              tr
                td.color-table3 Utilidades
                td.color-table3 Muy bajas o nulas
                td.color-table3 Importantes: alcanzan el nivel máximo
                td.color-table3 Decrecen
                td.color-table3 Pocas o nulas

        p.text-center Fuente: (Hernández,2017) 

    #t1-2.titulo-segundo
      h2 1.2. Servicios
    
    p.mb-3 Un servicio es una forma de producto que consiste en actividades, beneficios o satisfacciones que se ofrecen en venta y siendo esencialmente intangibles, no tienen como resultado la propiedad de algo. Algunos ejemplos son los servicios bancarios, el hospedaje en hoteles, los vuelos en aerolíneas, el comercio minorista y la comunicación inalámbrica (Kotler,2017).
 
    p ¿Cómo se diseña un concepto de servicio? Para Lovelock (2015) El mercadeo de servicios experimentados reconocen la necesidad de adoptar una perspectiva integral del desempeño que desean que sus clientes experimenten. La propuesta de valor debe considerar e integrar tres componentes:

    
    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.h90 {height: 90px}
.bg-image-cover{background: url('../assets/curso/t1-i6.jpg'); background-size: cover;}
</style>
