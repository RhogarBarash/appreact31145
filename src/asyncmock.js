const products = [
    {
        id: 1,
        name: 'Asus Max Pro',
        price: 5000,
        category: 'celular',
        img: '',
        stock: 10,
        description: 'Descripción de teléfono Asus'
    },
    {id: 2, name: 'Ipad', price: 2000, category: 'tablet', img:'',stock: 3, description:'Descripción de Ipad'},
    {id: 2, name: 'Motorola G', price: 4500, category: 'celular', img:'',stock: 7, description:'Descripción de Motorola'},
]

export const getProducts = () => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}