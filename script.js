
const dataAlt = [
    {
      name: "super burger",
      img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg",
      price: 100,
      category: "burgers",
    },
    {
      name: "pro burger",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg",
      price: 150,
      category: "burgers",
    },
    {
      name: "extra burger",
      img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg",
      price: 180,
      category: "burgers",
    },
    {
      name: "italian pizza",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg",
      price: 300,
      category: "pizzas",
    },
    {
      name: "meat pizza",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg",
      price: 400,
      category: "pizzas",
    },
    {
      name: "pivo",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg",
      price: 500,
      category: "drinks",
    },
    {
      name: "Vino",
      img: "https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg",
      price: 1000,
      category: "drinks",
    },
    {
      name: "Vodka",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU",
      price: 2000,
      category: "drinks",
    },
    {
      name: "tequila",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FnYASy60LXK2iwxu01N6oBpKKEwJ4d6DKg&usqp=CAU",
      price: 3000,
      category: "drinks",
    },
  ];
// for (let i = 0; i < dataAlt.length; i++) {
//   const value = dataAlt[i].category;
//   if (btnsData.indexOf(value) === -1) {
//     btnsData.push(value);
//   }
// }
// console.log(btnsData);


const btnsData = dataAlt.reduce((acc, rec) => {
    if (acc.indexOf(rec.category)===-1) {
        acc.push(rec.category);
     }
      return acc;
}, ["all menu"]);
console.log(btnsData);

  const output = document.querySelector(".output");
  let uniqueCategory="all menu"
  
  const renderCategories = (data) => {
    output.innerHTML = "";
    data.forEach((el) => {
      const box = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("p");
  
      img.src = el.img;
      title.textContent = el.name;
  
      box.append(img, title);
      output.append(box);
    });
  };
  renderCategories(dataAlt);
  
  const renderButtons = () => {
    const btnwrap = document.querySelector(".btnwrap");

    btnsData.forEach((el, index) => {
      const btn = document.createElement("button");
      btn.className = "btn";
      btn.textContent = el;
  
      if (index === 0) btn.classList.add("active");
  
      btn.addEventListener("click", () => {
        uniqueCategory = el;
        const filteredData = dataAlt.filter((item) => item.category === el);
        const checkData = filteredData.length > 0 ? filteredData : dataAlt;
        renderCategories(checkData);
        const allBtns = document.querySelectorAll(".btn");
        allBtns.forEach((el, indexChild) => {
          if (index === indexChild) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        });
      });
      btnwrap.append(btn);
    });
  };
  renderButtons();
  // search


  
  const dynamicSearch = () => {
      const form = document.querySelector("form");
      const search = document.querySelector(".search");
      const searchBtn =document.querySelector(".search-btn")
      const clearBtn =document.querySelector(".clear-btn")

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const filteredData = dataAlt.filter((item) =>
        item.name.toLowerCase().includes(search.value.toLowerCase())
      ); 
      if (filteredData.length === 0) {
        return (output.innerHTML = "Товаров нет в базе");
      }
  
       // const filteredData = dataAlt.filter((item) =>
      //   item.name.toLowerCase().startsWith(search.value.toLowerCase())
      // );
      // const filteredData = dataAlt.filter(
      //   (item) => item.name.toLowerCase() === search.value.toLowerCase()
      // );
      renderCategories(filteredData);
    });

    clearBtn.addEventListener("click", () => {
      search.value = "";
      renderCategories(dataAlt);
    });
  };
  dynamicSearch();
  // search
  



