function NextBlog({ title, direction }) {
  //   function capitalize(title) {
  //     const replaceDash = title.split("-").join(" ");
  //     //create empty array to push separated words in string
  //     const array = [];
  //     //loop through string and split them by a space
  //     for (let word of replaceDash.split(" ")) {
  //       //push them into the empty array with the first letter capitalized and adding in the rest of the word
  //       array.push(word[0].toUpperCase() + word.slice(1));
  //     }
  //     //join the array together with a space between elements (words)
  //     return array.join(" ");
  //   }

  //   const formattedTitle = capitalize(title);

  return (
    <div>
      <p className="text-sm text-gray-400">{direction}</p>
      <p className="text-xl text-gray-700 font-light">{title}</p>
    </div>
  );
}

export default NextBlog;
