export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [

  {
    id: 1,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    description: [
      {subdescr: '-поддержка платформ: iOS'},
      {subdescr: '-материал корпуса: алюминий'},
      {subdescr: '-цвет корпуса: черный'} ,
      {subdescr: '-технология экрана: OLED'} ,
      {subdescr: '-объем встроенной памяти: 32 Гб'} ,
      {subdescr: '-интерфейсы: Bluetooth, ,Wi-Fi, ,NFC'} ,
      {subdescr: '-время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов'}
    ],
    price: 231_980,
    rating: 4.2,
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg'
  },
  {
    id: 2,
    name: 'Смарт-часы Aimoto Element розовый',
    price: 10_442,
    description: [
      {subdescr: '-поддержка платформ: Android, ,iOS'},
      {subdescr: '-материал корпуса: пластик'},
      {subdescr: '-цвет корпуса: розовый'},
      {subdescr: '-технология экрана: IPS'},
      {subdescr: '-объем оперативной памяти: 32 Мб'},
      {subdescr: '-интерфейсы: Bluetooth, ,Wi-Fi'},
      {subdescr: '-время работы: до 4 дней'}
    ],
    rating: 4.4,
    link: 'https://kaspi.kz/shop/p/aimoto-element-rozovyi-100828444/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h5e/33034415833118/aimoto-element-pink-100828444-1-Container.jpg'
  },
  {
    id: 3,
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: 128_350,
    description: [
      {subdescr: '-технология NFC: Да'},
      {subdescr: '-цвет: серый'},
      {subdescr: '-тип экрана: цветной AMOLED, сенсорный'},
      {subdescr: '-диагональ: 6.67 дюйм'},
      {subdescr: '-размер оперативной памяти: 8 ГБ'},
      {subdescr: '-процессор: 8-ядерный Qualcomm Snapdragon 732G'},
      {subdescr: '-объем встроенной памяти: 256 ГБ'},
      {subdescr: '-емкость аккумулятора: 5020 мАч'}
    ],
    rating: 4.1,
    link: 'https://kaspi.kz/shop/search/?text=%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%20Xiaomi%20Redmi%20Note%2010%20Pro%208%20%D0%93%D0%91%2F256%20%D0%93%D0%91%20%D1%81%D0%B5%D1%80%D1%8B%D0%B9',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg'
  },
  {
    id: 4,
    name: 'Чехол Ala case для iPhone 11 прозрачный',
    price: 212,
    description: [
      {subdescr: '-тип: спортивный'},
      {subdescr: '-совместимый бренд: Apple'},
      {subdescr: '-материал: резина, ,силикон'}
    ],
    rating: 3.3,
    link: 'https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/h42/48677606293534/ala-case-dla-iphone-11-prozracnyj-103661424-1.jpg'
  },
  {
    id: 5,
    name: 'Кабель Apple USB - Lightning 1 м',
    price: 14_590,
    description: [
      {subdescr: '-тип: кабель'},
      {subdescr: '-разъемы: Apple Lightning (M), ,USB 2.0 (M)'},
      {subdescr: '-длина: 1 м'}
    ],
    rating: 1.0,
    link: 'https://kaspi.kz/shop/p/kabel-apple-usb-type-c---lightning-1-m-40500508/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/he9/32024009637918/kabel-apple-usb-type-c-lightning-1-m-40500508-1.jpg'
  },
  {
    id: 6,
    name: 'Смарт-линзы для смартфона OEM для iPhone 11, iPhone 12, iPhone 12 mini',
    price: 546,
    description: [
      {subdescr: '-количество линз в комплекте: 2'},
      {subdescr: '-типы линз: рыбий глаз'},
      {subdescr: '-установка: на тыловую камеру'}
    ],
    rating: 2.7,
    link: 'https://kaspi.kz/shop/p/oem-dlja-iphone-11-iphone-12-iphone-12-mini-107405806/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7c/h82/65294314602526/oem-dlya-iphone-11-iphone-12-iphone-12-mini-107405806-1.jpg'
  },
  {
    id: 7,
    name: 'Смарт-линзы для смартфона WAVE WL7-1',
    price: 20_998,
    description: [
      {subdescr: '-количество линз в комплекте: 7'},
      {subdescr: '-типы линз: широкоугольный, ,макро, ,теле, ,рыбий глаз'},
      {subdescr: '-установка: на тыловую камеру'}
    ],
    rating: 3.3,
    link: 'https://kaspi.kz/shop/p/wave-wl7-1-102860686/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/he8/47143374290974/wave-4k-hd-7-v-1-102860686-1.jpg'
  },
  {
    id: 8,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 480_550,
    description: [
      {subdescr: '-диагональ экрана: 13.3 дюйм'},
      {subdescr: '-процессор: Apple M1'},
      {subdescr: '-видеокарта: Apple M1 7 core'},
      {subdescr: '-размер оперативной памяти: 8 ГБ'},
      {subdescr: '-тип жесткого диска: SSD'},
      {subdescr: '-общий объем накопителей: 256 ГБ'}
    ],
    rating: 4.2,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg'
  },
  {
    id: 9,
    name: 'Ноутбук HP 15s-eq1387ur 4Z3A4EA серебристый',
    price: 160_350,
    description: [
      {subdescr: '-диагональ экрана: 15.6 дюйм'} ,
      {subdescr: '-процессор: AMD Athlon 3150U'} ,
      {subdescr: '-видеокарта: AMD Radeon Graphics'} ,
      {subdescr: '-размер оперативной памяти: 8 ГБ'} ,
      {subdescr: '-тип жесткого диска: SSD'} ,
      {subdescr: '-общий объем накопителей: 256 ГБ'}
    ],
    rating: 2.5,
    link: 'https://kaspi.kz/shop/p/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/h8f/67253149204510/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227-1.jpg'
  },
  {
    id: 10,
    name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
    price: 349_350,
    description: [
      {subdescr: '-технология NFC: Да'},
      {subdescr: '-цвет: серый'} ,
      {subdescr: '-тип экрана: цветной AMOLED, сенсорный'} ,
      {subdescr: '-диагональ: 6.67 дюйм'} ,
      {subdescr: '-размер оперативной памяти: 8 ГБ'} ,
      {subdescr: '-процессор: 8-ядерный Qualcomm Snapdragon 732G'} ,
      {subdescr: '-объем встроенной памяти: 256 ГБ'} ,
      {subdescr: '-емкость аккумулятора: 5020 мАч'}
    ],
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg'
  },
];
