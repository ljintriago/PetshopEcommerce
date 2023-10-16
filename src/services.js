import {  doc, getDoc, collection, getDocs, getFirestore, query, where, addDoc } from "firebase/firestore";
/* const products = [
    { id:"1", name:"Pack de juguetes para perros", price:"$75", category:"toys", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://live.staticflickr.com/1711/26329664625_e6ddce80be_c.jpg" },
    { id:"2", name:"Rascadores para gatos", price:"$500", category:"toys", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://live.staticflickr.com/8474/8123042959_20687e5167_b.jpg" },
    { id:"3", name:"Hueso de juguete", price:"$10", category:"toys", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://live.staticflickr.com/3045/2545717511_fa9ccf64cd_b.jpg" },

    { id:"4", name:"Abrigo para gatos", price:"$35", category:"clothes", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://http2.mlstatic.com/D_NQ_NP_771758-MLA31588775369_072019-O.webp" },
    { id:"5", name:"Collar bufanda", price:"$25", category:"clothes", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://m.media-amazon.com/images/I/91PqG2A6wtL.jpg" },
    { id:"6", name:"Impermeable para perro", price:"$75", category:"clothes", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://m.media-amazon.com/images/I/41bPDKxnTFL._SL500_.jpg" },

    { id:"7", name:"Cepillo de diente para mascota", price:"12", category:"health", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://cdn.redcanina.es/wp-content/uploads/2020/11/05190651/cepillo-de-dientes-750x375.jpg" },
    { id:"8", name:"Arenero gatos", price:"$290", category:"health", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://dojiw2m9tvv09.cloudfront.net/11787/8/M_areneroparagatos6326.jpg?74&time=1692531396" },
    { id:"9", name:"Shampoo para perro", price:"$20", category:"health", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://tiaecuador.vtexassets.com/arquivos/ids/164211/256307000.jpg?v=637052350346470000" },

    { id:"10", name:"Peine para mascota", price:"$55", category:"gadgets", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://elmayoristaec.com/wp-content/uploads/2022/09/Cepillo-Para-Mascotas-1-1.jpg" },
    { id:"11", name:"Guacales", price:"$100", category:"gadgets", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://gioatope.com/wp-content/uploads/2021/07/guacal-para-perro-plastico-grande.jpg" },
    { id:"12", name:"Placas para mascota", price:"$35", category:"gadgets", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://www.identificatumascota.es/wp-content/uploads/2021/05/placa-personalizada-para-perro-hueso-a-color.jpg" },

    { id:"13", name:"Royal Canin 3KG", price:"$60", category:"food", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://www.superpets.sg//image/cache/catalog/product/Royal%20Canin/Dog/Royal%20Canin%20Dog%20Adult%20Golden%20Retriever%201650x1650%20Emboss%20Watermark%20SKU%203182550751261-2000x2000.jpg" },
    { id:"14", name:"Whiskas Adulto Carne", price:"$50", category:"food", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://m.media-amazon.com/images/I/61kFnC+Uo9L.jpg" },
    { id:"15", name:"Pro-Cat Adulto", price:"$200", category:"food", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.", img:"https://www.supermercadosantamaria.com/documents/10180/10504/59835_G.jpg" },
]; */

export const getProduct = (id) =>{
    return new Promise((resolve, reject) => {
        const db  = getFirestore();
        const itemDoc = doc(db, "item", id);

        getDoc(itemDoc)
        .then((doc) => {
            if(doc.exists()){
                resolve({ id: doc.id, ...doc.data() });
            }
            else{
                resolve(null)
            }
        })
        .catch((error) => {
            reject(error);
        });
    })
};

export const getProducts = (categoryId) =>{
    return new Promise((resolve) => {
        const db = getFirestore();
        const itemCollection = collection(db, "item")

        let q;
        if(categoryId) {
            q = query(itemCollection, where("categoryId", "==", categoryId));
        }
        else{
            q = query(itemCollection);
        }

        getDocs(q)
        .then((querySnapshot) => {
            const products = querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            });
            resolve(products); 
        })
        .catch((error) => {
            reject(error);
        });
        
    })
};

export const createOrder = (orden) => {
    const db = getFirestore();

    const orderCollection = collection(db, "orders");

    return addDoc(orderCollection, orden);
};

