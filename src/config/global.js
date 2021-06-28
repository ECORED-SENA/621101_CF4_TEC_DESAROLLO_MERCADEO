export default {
  global: {
    componenteFormativo: 'Mezcla de producto',
    descripcionCurso:
      'A través del componente formativo mezcla de producto el aprendiz debe apropiar los elementos de entrada requeridos para la elaboración de prototipo de producto para su idea de negocio o proyecto productivo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mezcla de producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Producto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Servicios',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Marca',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Envase',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Empaque',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Embalaje',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Etiqueta',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Marketing Green',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Marketing Social',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Normativa',
            hash: 't_1_10',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Hernández, C. (2017). Fundamentos de marketing. Ed. 2. México. Pearson.',
    },
    {
      referencia:
        'Hoyos, R. (2016). Branding, el arte de marcar corazones. Bogotá. Ecoe Ediciones.',
    },
    {
      referencia:
        'Kerin, R; Harley, S. (2018). Marketing. Ed.13 México. McGraw Hill.',
    },
    {
      referencia:
        'Kotler, P; Amstrong, G. (2017). Marketing. Ed.16. México. Pearson',
    },
    {
      referencia:
        'Lovelock, C. (2015) Marketing de servicios. Personal, tecnología y estrategia. Ed. 7. México. Pearson Education.',
    },
    {
      referencia:
        'Martínez, A; Ruiz, C. (2014). Marketing en la actividad comercial. Madrid. McGraw Hill',
    },
    {
      referencia:
        'Prettel, G. (2016). Marketing, una herramienta para el crecimiento. Bogotá. Ediciones de la U.',
    },
    {
      referencia:
        'Prieto, J. E. (2013). Investigación de mercados. Ed. 2. Bogotá. Ecoe Ediciones.',
    },
    {
      referencia:
        'Vélez, T. (2014) Logística empresarial, gestión eficiente del flujo de suministros. Bogotá. Ediciones de la U.',
    },
  ],
  glosario: [
    {
      termino: 'ACTIVACIÓN DE MARCA',
      significado:
        'Estrategia que busca captar la atención de los consumidores, acercar las marcas a ellos y sorprenderlos. Se basa en la persuasión para impactar al consumidor y lograr su compenetración con la marca.',
    },
    {
      termino: 'ATRIBUTOS DEL PRODUCTO',
      significado:
        'Características que diferencian a un producto y contribuyen a formar una imagen definida del mismo en los consumidores y usuarios. Pueden ser intrínsecos y extrínsecos.',
    },
    {
      termino: 'ATRIBUTOS EXTRÍNSECOS',
      significado:
        'Son atributos del producto mismo de los que el consumidor suele extraer información acerca de la calidad, por ejemplo, el nombre de la marca, el país de origen y el precio.',
    },
    {
      termino: 'ATRIBUTOS INTRÍNSECOS',
      significado:
        'Atributos propios del producto que proporcionan una utilidad al consumidor. Por ejemplo, la potencia de un ordenador, la nitidez de la imagen de un televisor, la seguridad de un automóvil, etc.',
    },
    {
      termino: 'CICLO DE VIDA DEL PRODUCTO',
      significado:
        'Son las etapas por la que atraviesa un producto desde su lanzamiento, crecimiento, madurez y decadencia. Para cada etapa existen diferentes estrategias de marketing.',
    },
    {
      termino: 'EMBALAJE',
      significado:
        'Recipiente o envoltura que contiene productos de manera temporal principalmente para agrupar unidades de un producto pensando en su manipulación, transporte y almacenaje.',
    },
    {
      termino: 'EMPAQUE',
      significado:
        'Es una parte fundamental del producto, porque además de contener, proteger y/o preservar el producto permitiendo que este llegue en óptimas condiciones al consumidor final, es una poderosa herramienta de promoción y venta.',
    },
    {
      termino: 'ENVASE',
      significado:
        'Es todo empaque que contiene y protege un producto, que nos ayuda a su manipulación, transporte e identificación del artículo.',
    },
    {
      termino: 'IMAGEN DE MARCA',
      significado:
        'Representación mental de un conjunto de ideas, creencias e impresiones reales o psicológicas, que el consumidor o la consumidora considera que tiene una marca determinada para satisfacer sus deseos o necesidades.',
    },
    {
      termino: 'MARKETING VERDE',
      significado:
        'Es el marketing de productos que son mostrados como ambientales. De esta manera el marketing verde incorpora un gran rango de actividades, incluyendo modificación de productos, cambios a los procesos de producción empaques sustentables.',
    },
    {
      termino: 'MEZCLA DE PRODUCTOS',
      significado:
        'O variedad de productos, se refiere al número total de líneas de productos que una empresa ofrece a sus clientes. Por ejemplo, una empresa pequeña puede ofrecer varias líneas de productos. A veces, estas líneas de productos son muy similares, como los detergentes líquidos y los jabones en barra, ya que ambos sirven para limpiar y utilizan una tecnología similar. En otras ocasiones, las líneas de producto son muy diferentes, como los pañales y las hojas de afeitar. Las cuatro dimensiones de la mezcla de productos de una empresa incluyen: ancho, largo, profundidad y consistencia.',
    },
    {
      termino: 'POSICIONAMIENTO',
      significado:
        'Es una estrategia comercial que pretende conseguir que un producto ocupe un lugar distintivo, relativo a la competencia, en la mente del consumidor. Se entiende el concepto de «producto» de forma amplia: puede tratarse de un elemento físico, intangible, empresa, lugar, partido político, creencia religiosa, persona, etc. De esta manera, lo que ocurre en el mercado en relación con el producto es consecuencia de lo que ocurre en la subjetividad de cada individuo en el proceso de conocimiento, consideración y uso de la oferta.',
    },
    {
      termino: 'PRODUCTO',
      significado:
        'Es todo aquel bien material o inmaterial que puesto en el mercado viene a satisfacer la necesidad de un determinado cliente. Al bien material se le denomina producto y al inmaterial servicio, de ahí que la principal característica diferenciadora sea la tangibilidad del bien en cuestión.',
    },
    {
      termino: 'SERVICIO',
      significado:
        'Cualquier actividad, beneficio o satisfacción que se ofrece a la venta. Es esencialmente intangible y no puede resultar en propiedad de algo concreto. El servicio puede o no estar ligado a un producto físico o tangible.',
    },
    {
      termino: 'STOCK',
      significado:
        'Es la cantidad de mercadería que posee la empresa dispuesta para vender o en el depósito. Mientras más rápido mueve el stock y mientras menos cantidad de stock necesita más rápido se mueve el capital y más rentable es el local.',
    },
  ],
  complementario: [
    {
      texto: 'Kotler, P; Amstrong, G. (2017). Marketing.”',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4426&pg=1',
    },
    {
      texto: 'Prettel, (2016). Marketing, una herramienta para el crecimiento.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5684&pg=1',
    },
    {
      texto: 'Prieto, E. (2013). Investigación de mercados.',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=4870549&ppg=1',
    },
    {
      texto: 'Kerin, R; Harley, S. (2018). Marketing.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=6261&pg=1',
    },
    {
      texto:
        'Martínez, A; Ruiz, C. (2014). Marketing en la actividad comercial.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5352&pg=1',
    },
    {
      texto: 'Hernández, C. (2017). Fundamentos de marketing.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4404&pg=1',
    },
    {
      texto: 'Hoyos, R. (2016). Branding, el arte de marcar corazones.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=2769&pg=1',
    },
    {
      texto:
        'Lovelock, C. (2015) Marketing de servicios. Personal, tecnología y estrategia.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3701&pg=1',
    },
    {
      texto: 'Vélez, T. (2014) Logística empresarial.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5569&pg=1',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Ingry Dayanna Bonilla Monzon',
        cargo: 'Líder del equipo',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Gloria Matilde Lee Mejía',
        cargo: 'Responsable del equipo',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'ENTRO INDUSTRIAL DEL DISEÑO Y LA MANUFACTURA - Regional Santander',
      },
      {
        nombre: 'Claudia Juliana León Pinto',
        cargo: 'Experta tematica',
        centro: 'Centro de Gestión Industrial - Regional Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Jesús Libardo Acero',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Daniel Ricardo Mutis Gómez', 'José Jaime Luis Tang Pinzón'],
        cargo: 'Diseño web & producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Ricardo Alfonso Gonzalez Vargas',
        cargo: 'Desarrollo front-end, Validación de recursos.',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
