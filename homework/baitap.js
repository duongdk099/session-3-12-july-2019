// bài tập 3: shop

// let items= [ "T-Shirt", "Sweater"]
// let selected = prompt(" Welcome to our shop, what do you want ( C, R, U, D ) ? ")

// if ( selected === 'R')
// {
//     for ( let i=0; i < items.length; i++ )
// { 
//     console.log('we have '+ items[i]);
// }
// }
// if ( selected == "C")
// {
//     let creat= prompt(" Enter new item");
//     items.push(creat);
//     for ( let i=0; i < items.length; i++ )
// { 
//     console.log('we have '+ items[i])
// }
// }

// if ( selected == "U")
// {
//     let position = Number(prompt ( " which position "));
//     let newItem = prompt(" New item? : ")
//     items[position]= newItem;
//     for ( let i=0; i < items.length; i++ )
// { 
//     console.log('we have '+ items[i])
// }   
// }
// if ( selected == "D")
// {
//     let deleteItem = Number(prompt(" position you want to delete "));
//     items.splice(deleteItem,1);

//     for ( let i=0; i < items.length; i++ )
// { 
//     console.log('we have '+ items[i])
// }   
// }
// bài tập 4: về con cừu
//4.1:
let sizeOfSheep = [ 5,7,300,90,24,50,75]
// console.log(" Hello, my name is Duong and these are my sheep sizes : " +sizeOfSheep);

// 4.2:
let max= sizeOfSheep[0];
for ( let i=0; i< sizeOfSheep.length;i++)
{
    if (sizeOfSheep[i]> max )
    {
        max = sizeOfSheep[i];
    }
}
console.log("We got " + sizeOfSheep+ "." + " So, my biggest size of sheep is : "+ max);

// 4.3: biggest size into 8
console.log("Now, let's shear it")
let indexOfSize = sizeOfSheep.indexOf(max);
sizeOfSheep[indexOfSize] = 8;
console.log("Now, we got " + sizeOfSheep);

// 4.4: Time after time, your sheep is bigger by time :
let time = Number(prompt(" how many month next do u want to see mine sheep ? "));
for ( let i=1;i <= time ; i++)
{
sizeOfSheep.forEach ((size,index ) =>  {


sizeOfSheep[index] += 50 ;


})
console.log( "Now , After " + i + " month, my sheep is like this " +sizeOfSheep);


let max= sizeOfSheep[0];
for ( let i=0; i< sizeOfSheep.length;i++)
{
    if (sizeOfSheep[i]> max )
    {
        max = sizeOfSheep[i];
    }
}


console.log("Now, let's shear it")
let indexOfSize = sizeOfSheep.indexOf(max);
sizeOfSheep[indexOfSize] = 8;
console.log("Now, we got " + sizeOfSheep);

}

let total=0;

// sizeOfSheep.forEach ((size,index ) =>  {
    
//     total= total + size;
//     })
// console.log(`So , total of my flock is : ${total}\nAnd, I would get like : ${total*2}$  `);
for ( let i=0; i< sizeOfSheep.length; i++)
{
    total += sizeOfSheep[i];
}
console.log(`So , total of my flock is : ${total}\nAnd, I would get like : ${total*2}$  `);
