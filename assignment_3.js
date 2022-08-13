class restaurantManager{

    restaurantList1 = [
        {
            name:"Khana Khazana",
            address:{
                Pincode:122017,
                Landmark:"Behind Windchant Towers",
                Area:"New Palam Vihar"
            },
            city:"Haryana"
        },
        {
            name:"Moti Mahal",
            address:{
                Pincode:411001,
                Landmark:"Siddharth Nagar Hathi Circle",
                Area:"Goregaon west"
            },
            city:"Mumbai"
        },
        {
            name:"The Tandoori Village",
            address:{
                Pincode:211014,
                Landmark:"DLF-Mall",
                Area:"D-508 4th Floor"
            },
            city:"Noida"
        }
    ]
    constructor(name,address,city){
        this.name = name;
        this.address = address;
        this.city = city;
    }
    try(){
        console.log(`You should try the ${this.name} restaurant in ${this.city}`)
    }
    printAllRestaurantNames(){
        this.restaurantList1.forEach((item,index)=>{
            console.log("Restaurant Name : " + this.restaurantList1[index].name)
            
        })

        
        }
    
    filterRestaurantByCity(givenCity){
        
        this.restaurantList1.filter(function(character){
           if(character.city === givenCity){
            console.log(character.name)
            //return character.name
           }
        })

        //console.log(filtered)
       
    }
    }


class PunjabiTadka{

    orderData = {
        'Below 500': 20,
        '500-1000': 29,
        '1000-1500': 30,
        '1500-2000': 44,
        'Above 2000': 76
        };

    count =0
    count1 =0

    constructor(){

    }
    countoforders(){
        // this.orderData.forEach((item)=>{
        //     this.count+=item
        //     console.log(this.count)
        // })
        //console.log(this.orderData.count())
        for(let x in this.orderData){
            this.count = this.count + this.orderData[x]
            
        }
        console.log(`The count of all orders is ${this.count}`);
    }

    countofproportions(){
        console.log(`The number of proportions in the orderData is ${Object.keys(this.orderData).length}`)
    }
   

}



let restaurantList = []

let restaurant1 = new restaurantManager("Khana Khazana","New Palam Vihar,Gurgaon","Haryana");
let restaurant2 = new restaurantManager("Moti Mahal","Goregaon west","Mumbai");
let restaurant3 = new restaurantManager("The Tandoori Village","D-508 4th Floor Dlf Mall Of India","Noida");
let orders = new PunjabiTadka();

orders.countoforders();
orders.countofproportions();

restaurantList = [restaurant1, restaurant2, restaurant3]
console.log(restaurantList[0].name)

for(let i=0;i<restaurantList.length;i++){
    restaurantList[i].try()
}

// restaurant1.printAllRestaurantNames();
//let filtered = []
// let arr=[{id:1,title:'A', status:true}, {id:3,title:'B',status:true}, {id:2, title:'xys', status:true}];
//find where title=B

restaurant1.filterRestaurantByCity('Noida');

// let filtered = restaurant1.filterRestaurantByCity('Noida');
// console.log(filtered)//not working 

//Array of objects 

const arr = [{
    id:1,
    order:"Below 500",
    orderPercentage:(((orders.orderData["Below 500"])/199) *100),
    restaurant: "Punjabi Tadka"
},
   { 
    id:2,
    order:"500-1000",
    orderPercentage:(((orders.orderData["500-1000"])/199) *100),
    restaurant: "Punjabi Tadka"
},
    {
    id:3,
    order:"1000-1500",
    orderPercentage:(((orders.orderData["1000-1500"])/199) *100),
    restaurant: "Punjabi Tadka"
},
    {
    id:4,
    order:"1500-2000",
    orderPercentage:(((orders.orderData["1500-2000"])/199) *100),
    restaurant: "Punjabi Tadka"
},
    {
    id:5,
    order:"Above 2000",
    orderPercentage:(((orders.orderData["Above 2000"])/199) *100),
    restaurant: "Punjabi Tadka"
}
    ]

//console.log(arr)
//console.log(`The array of Objects is as follows ${arr}`)

arr.forEach((item,index)=>{
    console.log(item)
})

//console.log(`The order data to be displayed is as follows ${((orders.orderData["Below 500"])/199) *100}`)