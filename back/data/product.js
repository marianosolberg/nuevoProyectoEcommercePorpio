const products = [
  {
    name: "PlayStation 5",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80 ",
    description:
      "PlayStation 5 (PS5) es una consola de videojuegos para el hogar desarrollada por Sony Interactive Entertainment. Anunciada en 2019 como la sucesora de PlayStation 4, la PS5 se lanzó el 12 de noviembre de 2020 en Australia, Japón, Nueva Zelanda, América del Norte, Singapur y Corea del Sur, y el 19 de noviembre de 2020 en adelante en otros mercados importantes excepto China y India.",
    price: 499,
    stock: 15,
  },
  {
    name: "Iphone 12 El mejor de todos",
    image:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Bienvenido a una nueva era de iPhone. Pantalla Super Retina XDR de 6,1 pulgadas maravillosamente brillante.1 Ceramic Shield con un rendimiento de caída 4 veces mejor.2 Increíble fotografía con poca luz con modo Noche en todas las cámaras. Grabación, edición y reproducción de videos Dolby Vision de calidad cinematográfica. Potente chip biónico A14. Y nuevos accesorios MagSafe para una conexión fácil y una carga inalámbrica más rápida.3 Deja que comience la diversión.",
    price: 900,
    stock: 20,
  },
  {
    name: "Notebook Apple Macbook Pro 13 Core i5 8GB RAM 1TB SSD Touch Bar Space Gray 2020",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apple-macbook-m1-1610121756.jpg",
    description:
      "La pantalla Retina tiene una retroiluminación LED brillante, lo que se traduce en negros intensos y blancos luminosos. Es compatible con la amplia gama de colores P3, que ofrece tonos verdes y rojos mucho más vibrantes que el estándar sRGB. Además, todas las MacBook Pro incluyen  ",
    price: 100,
    stock: 60,
  },
  {
    name: "Nintendo Switch",
    image:
      "https://www.nintendo.com/content/dam/noa/global/images/social/fb-switch-1280x720.jpg",
    description:
      "El Nintendo Switch viene con dos Joy-Con, cada uno de los cuales puede actuar como un controlador independiente con un stick analógico, un complemento completo de botones de rostro y hombros, sensor de movimiento incorporado y tecnología . Se pueden insertar en el accesorio Joy-Con Grip incluido, lo que permite su uso como un controlador tradicional; ",
    price: 100,
    stock: 500,
  },
  {
    name: "Iphone 13 varios colores",
    image: "https://i.blogs.es/ac161f/iphone-13-bronce-portada/1366_2000.jpg",
    description:
      "Uno de los apartados en los que Apple ha dedicado bastantes esfuerzos, según EveryThingApplePro, es el sistema de cámaras. La compañía habría reducido el grosor de las lentes que sobresalen en la parte trasera, igualándolos en el iPhone 13 Pro y Pro Max. Hay una nueva función que permite al estabilizador de imagen mantener al sujeto en el centro de la imagen automáticamente, sin modos aparte..",
    price: 1200,
    stock: 200,
  },
  {
    name: "TV SAMSUNG",
    image:
      "https://images.samsung.com/is/image/samsung/latin-hd-j4500-un32j4500afxza-006-front-black?$720_576_PNG$",
    description:
      "Led Smart. 50 Resolucion Crystal 4K UHD. Potencia de salida de sonido 20W. HDMI x 2. USB x 1. Bluetooth. Wi Fi. Sistema operativo Tizen. Incluye control remoto (one remote). Frecuencia de barrido 60 GHz, ideal para disfrutar en familia viendo una buena pelicula",
    price: 400,
    stock: 30,
  },
  {
    name: "CELULAR SAMSUNG GALAXY A21S SM-A217 BLANCO",
    image:
      "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/4/3/43052_bl.jpg",
    description:
      "Celular. Pantalla de 6.5 PLS TFT LCD. Almacenamiento 128 Gb / RAM 4Gb. Procesador Octa- Core 2 Ghz. Camara posterior: 48.0 MP + 8.0 MP + 2.0 MP + 2.0 MP. Camara frontal: 13 MP. Bluetooth 5.0. USB type C. Wifi. Entrada para Micro SD hasta 512 Gb. Radio. Bateria: 5000 mAh. Sistema operativo: Android. Conector Jack de 3.5mm.",
    price: 300,
    stock: 40,
  },
  {
    name: "Samsung Notebook 9 Pro y Notebook Flash",
    image: "https://i.blogs.es/7b0d1e/notebook-9-pro-1/450_1000.jpg",
    description:
      "Se trata de dos equipos delgados con un mismo tamaño de pantalla que ofrecen dos posibilidades a nivel de potencia, rendimiento, diseño y uso. El apellido no deja lugar a dudas: para los usuarios exigentes está el 9 Pro, para quienes buscan algo más básico está el 9 Flash.",
    price: 1200,
    stock: 250,
  },
  {
    name: "Notebook Apple Macbook Air 2020 ",
    image:
      "https://www.anuncioya.com/uplimg/100126/img_A_876916255b52de071db0a7b9dcec73d8bbea48.jpg",
    description:
      "Sus cracteristicas son : Relación de aspecto 16:10, Duración de la batería 12 h, Marca Apple, Cantidad de núcleos 4, Frecuencia de actualización de la pantalla 60 Hz, Resolución de la pantalla 2560 x 1600, Tamaño de la pantalla 13.3 , GPU Intel Iris Plus Graphics, Capacidad del disco rígido , Es 2 en 1 No, Es gamer No, Es ultrabook No, Línea MacBook Air, Modelo MVH52 Modelo 2020.",
    price: 1500,
    stock: 100,
  },
  {
    name: "LG tu televisor curvado UHD y de 105 pulgadas",
    image: "https://i.blogs.es/a7597c/650_1000_105ub9_1/450_1000.jpg",
    description:
      "El televisor de LG es además de 105 pulgadas, por si la curvatura o la resolución UDH (5120 x 2160 píxeles) no fueran suficientemente impresionantes por sí mismos. Para esta ocasión no se ha escogido la tecnología OLED para el panel, y LG ha arriesgado con la clásica TFT, la cual ha modificado para en primer lugar poder ser curvada y en segundo lugar para que ángulos de visión, color y brillo no sufran con esa curvatura.",
    price: 1900,
    stock: 120,
  },
  {
    name: " Nuevo iPad mini Apple",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWb7LFFIJkQBMuSxkwk1C0LPY1hJhKSa3hX_KkyhdWHBSoSqtooD2Y4A1IiQRZpffYVQ&usqp=CAU",
    description:
      "La pantalla del iPad Pro de 12,9 pulgadas es mini-LED y la han bautizado como Liquid Retina XDR Display. Es una tecnología que agrupa un mayor nivel de píxeles en el panel. Esto le permite tener una mayor precisión a la hora de mostrar colores y mantener los píxeles negros apagados, lo que se traduce en un mayor nivel de contraste de colores.",
    price: 1100,
    stock: 80,
  },
  {
    name: " Samsung Galaxy A20s",
    image:
      "https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/646x1000/70007970.jpg",
    description:
      "El Samsung Galaxy A20s es una actualización del Galaxy A20, con una pantalla Infinity-V HD+ de 6.5 pulgadas y potenciado por un procesador octa-core con 3GB o 4GB de memoria RAM y 32GB o 64GB de almacenamiento interno expandible",
    price: 350,
    stock: 50,
  },
];

module.exports = products;
