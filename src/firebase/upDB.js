import { firestoreDB } from './firebase'; // 👈 importar archivo de configuración de firebase
import { collection, setDoc, doc } from 'firebase/firestore/lite'

const PRODUCTS = [
    {
      id: 1,
      title: "Intel Processor i7-9700K",
      category: "Processor",
      company: "Intel",
      description: "Intel Processor Core I7-9700K 4,7 GHz Turbo 9th Gen",
      image:
        "https://image.shutterstock.com/image-photo/montreal-canada-december-8-2018-600w-1448576585.jpg",
      price: "199",
      stock: 30,
    },
    {
      id: 2,
      title: "AMD Ryzen 5 3600",
      category: "Processor",
      company: "AMD",
      description: "AMD Ryzen 5 3600 3.6 GHz 6-Core Processor",
      image:
        "https://image.shutterstock.com/image-photo/bucharest-romania-2162020-isolated-cpu-600w-1646598604.jpg",
      price: "150",
      stock: 20,
    },
    {
      id: 3,
      title: "Processor Intel Core i5-9400",
      category: "Processor",
      company: "Intel",
      description: "Procesador Intel Core i5-9400 4,1 GHz Turbo 9th Gen",
      image:
        "https://image.shutterstock.com/image-photo/moscow-russia-september-05-2021-600w-2036479145.jpg",
      price: "100",
      stock: 45,
    },
    {
      id: 4,
      title: "Intel Processor  i3-9100",
      category: "Processor",
      company: "Intel",
      description: "Intel Processor Core i3-9100 3,6 GHz Turbo 9th Gen",
      image:
        "https://image.shutterstock.com/image-photo/thailand-august-9-2021-10th-600w-2026708454.jpg",
      price: "50",
      stock: 30,
    },
    {
      id: 5,
      title: "Intel Processor  i5-9400F",
      category: "Processor",
      company: "Intel",
      description: "Intel Processor Core i5-9400F 4,1 GHz Turbo 9th Gen",
      image:
        "https://image.shutterstock.com/image-photo/moscow-russia-september-05-2021-600w-2036479145.jpg",
      price: "100",
      stock: 45,
    },
    {
      id: 6,
      title: "AMD Ryzen 7 3700X",
      category: "Processor",
      company: "AMD",
      description: "AMD Ryzen 7 3700X 3.6 GHz 6-Core Processor",
      image:
        "https://image.shutterstock.com/image-photo/amsterdam-netherlands-juli-16-2019-600w-1453688234.jpg",
      price: "150",
      stock: 20,
    },
    {
      id: 7,
      title: "AMD Ryzen 7 3800X",
      category: "Processor",
      company: "AMD",
      description: "AMD Ryzen 7 3800X 4,7 GHz Turbo Processor",
      image:
        "https://image.shutterstock.com/image-photo/amsterdam-netherlands-juli-16-2019-600w-1453688234.jpg",
      price: "200",
      stock: 30,
    },
    {
      id: 8,
      title: "AMD Ryzen 9 5950X",
      category: "Processor",
      company: "AMD",
      description: "AMD Ryzen 9 5950X 4,9 GHz Turbo Processor",
      image:
        "https://image.shutterstock.com/image-photo/melbourne-australia-jul-29-2019-600w-1464070076.jpg",
      price: "250",
      stock: 45,
    },
    {
      id: 9,
      title: "Mother ASUS PRIME A320M-K",
      category: "Motherboard",
      company: "ASUS",
      description: "Motherboard ASUS PRIME A320M-K Ryzen 2nd Gen",
      image:"https://image.shutterstock.com/image-photo/carrara-italy-february-18-2021-600w-1919812091.jpg",
      price: "50",
      stock: 45,
    },
      {
      id: 10,
      title: "Mother Gigabyte Z390-Gaming",
      category: "Motherboard",
      company: "Gigabyte",
      description: "Motherboard Gigabyte Z390-Gaming Ryzen 3rd Gen",
      image:"https://image.shutterstock.com/image-photo/carrara-italy-february-18-2021-600w-1919812091.jpg",
      price: "60",
      stock: 45,
        },
      {
      id: 11,
      title: "Mother Asrock B450-Pro4",
      category: "Motherboard",
      company: "Asrock",
      description: "Motherboard Asrock B450-Pro4 Ryzen 3rd Gen",
      image:"https://image.shutterstock.com/image-photo/carrara-italy-february-18-2021-600w-1919812091.jpg",
      price: "50",
      stock: 45,
          
      },
      {
      id: 12,
      title: "RAM Corsair Vengeance LPX",
      category: "RAM",
      company: "Corsair",
      description: "RAM Corsair Vengeance LPX DDR4 8GB 2400MHz",
      image:"https://image.shutterstock.com/image-photo/carrara-italy-july-12-2021-600w-2006620598.jpg",
      price: "50",
      stock: 45,
      },
      {
      id: 13,
      title: "RAM Gigabyte X570DV",
      category: "RAM",
      company: "Gigabyte",
      description: "RAM Gigabyte X570DV DDR4 8GB 2400MHz",
      image:"https://image.shutterstock.com/image-photo/two-modern-modules-random-access-600w-1922659166.jpg",
      price: "50",
      stock: 30,
      },
      {
      id: 14,
      title: "RAM Kingston HyperX Fury",
      category: "RAM",
      company: "Kingston",
      description: "RAM Kingston HyperX Fury DDR4 8GB 2400MHz",
      image:"https://image.shutterstock.com/image-photo/two-new-hyperx-ddr4-ram-600w-1870816498.jpg",
      price: "40",
      stock: 45,
      },
      {
      id: 15,
      title: "RAM G.Skill Ripjaws V",
      category: "RAM",
      company: "G.Skill",
      description: "RAM G.Skill Ripjaws V DDR4 8GB 2400MHz",
      image:"https://image.shutterstock.com/image-photo/two-modern-modules-random-access-600w-1922659166.jpg",
      price: "50",
      stock: 45,
      },
      {
      id: 16,
      title: "SSD Kingston HyperX Fury",
      category: "SSD",
      company: "Kingston",
      description: "SSD Kingston HyperX Fury 240GB",
      image:"https://image.shutterstock.com/image-photo/27-june-2019-bishkek-kyrgyzstan-600w-1570654150.jpg",
      price: "50",
      stock: 45,
      },
      {
      id: 17,
      title: "SSD Samsung 860 EVO",
      category: "SSD",
      company: "Samsung",
      description: "SSD Samsung 860 EVO 240GB",
      image:"https://image.shutterstock.com/image-photo/ulyanovsk-russia-november-24-2021-600w-2080400608.jpg",
      price: "50",
      stock: 45,
      },
      {
      id: 18,
      title: "SSD Samsung 970 EVO",
      category: "SSD",
      company: "Samsung",
      description: "SSD Samsung 970 EVO 240GB",
      image:"https://image.shutterstock.com/image-photo/ulyanovsk-russia-november-24-2021-600w-2080400608.jpg",
      price: "50",
      stock: 45,
      },
      {
      id: 19,
      title: "HDD Seagate BarraCuda",
      category: "HDD",
      company: "Seagate",
      description: "HDD Seagate BarraCuda 1TB",
      image:"https://image.shutterstock.com/image-photo/blitar-indonesia-august-26-2021-600w-2030895419.jpg",
      price: "50",
      stock: 45,
      },
      {
      id: 20,
      title: "HDD Western Digital Caviar Blue",
      category: "HDD",
      company: "Western Digital",
      description: "HDD Western Digital Caviar Blue 1TB",
      image:"https://image.shutterstock.com/image-photo/jakarta-indonesia-october-01-2021-600w-2050467758.jpg",
      price: "50",
      stock: 45,
      },
  
  ];

async function dataToFirebase() {
    PRODUCTS.forEach((item) => {     
        // remplazar por el nombre de la coleccion 👇
        const nombreDeColeccion = "Products"

       const newItem = doc(collection(firestoreDB, "Products" ));

       setDoc(newItem, item).then(() => {
           console.log("Document written with idOLD: ", newItem.id)})
        .catch(err => {
            console.error("Error adding document: ", err);
        });
    });
}

export default dataToFirebase;