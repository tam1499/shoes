// view more
export function Card(props) {
  let content = "";
  if (props) {
    props.map((item, index) => {
      return (content += `
                <div key=${index} class="div_image">
                    <div class="div"><img class="list_image"src=${item.image}/></div>
                    <p>${item.title}</p>
                    <button class="view_more">${item.button}</button>
                </div>
            `);
    });
  }
  return content;
}
// image navbar home
export function Picture(props) {
  let content = "";
  if (props) {
    props.map((item, index) => {
      return (content += `
                <div key=${index}>
                    <img class="image_navbar_home"src=${item.image}/>
                    <p class="text_home">${item.title}</p>
                </div>
            `);
    });
  }
  return content;
}
// shoe
export function Shoe(props) {
  let content = "";
  if (props) {
    props.map((item, index) => {
      return (content += `
      <div key=${index} class="image_shoes">
          <img src=${item.image}/>   
          <button class="btn_Shopnow">SHOP NOW</button>
      </div>
            `);
    });
  }
  return content;
}
// Ourblogs
export function Ourblogs(props) {
  let content = "";
  if (props) {
    props.map((item, index) => {
      return (content += `
      <div key=${index}>
        <img class="list_imageOurblogs"src=${item.image} width="450px"/>
        <h3 class="home_a">${item.name}</h3>
        <h2 class="home_a">${item.title}</h2>
        <p>${item.p}<p/>
      </div>
            `);
    });
  }
  return content;
}
// button
export function Button(props) {
  let content = "";
  if (props) {
    props.map((item, index) => {
      return (content += `
      <div key=${index}>
          <div>${item.button} /></div>
      </div>
            `);
    });
  }
  return content;
}

// bestseller
export function Bestseller(props) {
  let content = "";
  if (props) {
    props.map((item, index) => {
      return (content += `
      <div key=${index} >
          <div><img src=${item.image} width="300px" height="300px"></div>
          <div><h4>${item.name}</h4></div>
          <div><p class="price_bestseller">${item.price}</p></div>
          <div class="icon_list_bestseller">
              <div class="btn_icon">
                <i class="fa-solid fa-heart"></i>
              </div>
              <div class="btn_icon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
          </div>
      </div>
            `);
    });
  }
  return content;
}
// icon_bestseller 
// export function Icon(props) {
//   let content = "";
//   if (props) {
//     props.map((item, index) => {
//       return (content += `
//       <div key=${index}>
//         <div>${item.icon1}</div>
//         <div>${item.icon2}</div>
//       </div>
//             `);
//     });
//   }
//   return content;
// }
