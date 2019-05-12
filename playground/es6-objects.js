const name = 'Name'
const userAge = 26

const user = {
	name ,
	age: userAge, 
	location:"Location"
}
console.log(user)

//object destructuring

const product = {
	label: 'Red Notebook',
	price: 500,
	stock:20,
	salePrice:undefined
}

// const label = product.label
// console.log(label)
// 
const {label:productLabel,stock,rating = 5} = product
console.log(productLabel)
console.log(rating)



const transaction = (type , {label , stock}) => {
	console.log(type , label, stock)
}

transaction('order' , product)