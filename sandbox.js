//noSQL database
const list = document.querySelector("ul");
const form = document.querySelector("form");

//add to UI
const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
        <div>${recipe.title}</div>
        <div>${time}</div>
        <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;
  list.innerHTML += html;
};

//deletes from UI
const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    })
}

//get documents w/ snapshot
db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id)
        } else if(change.type === 'removed'){
            deleteRecipe(doc.id)
        }
    })
});
//snapshot retrieves on every change

//add documents
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };

  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete data from db
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    db.collection('recipes').doc(id).delete()
    .then(() => {
        console.log('recipe deleted')
    })
    .catch((err) => {
        console.log(err)
    })
    //looks into db for 'recipes' colletion and .doc looks into each document
    //for that specific id and then deletes
  }
});
