<<<<<<< HEAD
const names = ["Lisa", "Kaitlin", "Jan"];
const eventName = "surprise";
=======
const names = ["Ada", "Brendan", "Ali"];
const eventName = "birthday";
>>>>>>> 2dcb9c69b7ac158b32098e75e44ccef7eeca56fb

function writeCards(names,eventName){
  
	let thnkList = [];
<<<<<<< HEAD
	for (let i = 0; i< names.length;i++){
		
		 thnkList.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);


	}return thnkList;
	
}

writeCards(names,eventName);

function countDown(i ){
  // let nos = Number;
  // let i = 10;
  while (i >= 0){
  console.log(i--);
  }i--;
}

countDown(11);


=======
	for (i = 0; i< names.length;i++){
		
		thnkList.push(`Thank you,${names[i]}, for the wonderful ${event} gift!`);


	}return console.log(thnkList);
	
}

writeCards(names,event);
>>>>>>> 2dcb9c69b7ac158b32098e75e44ccef7eeca56fb
