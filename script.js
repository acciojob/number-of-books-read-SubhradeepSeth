const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
const numberOfBooksRead = () => {
  // write your code here
	let n=library.length,c=0;
	library.forEach((e)=>{
		if (e.readingStatus)  c++;
	})
	return c;
};

// Do not change the code below

alert(numberOfBooksRead());
