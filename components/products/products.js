class Products {
    render () {
        let mainSlide = '';
        let slideToShow = ''

        CATALOG.forEach(({id, name, price, img}) => {


            mainSlide += `
            <li>
                <div class = "">

                    <span class = "products-list-mainSlide__title">${name}</span>
                    <img class = "products-list-mainSlide__img" src = "${img}" />

                    <button class = "products-list-mainSlide__btn">Book now</button>
                </li>
            </div>
            `;
            slideToShow += `
            <li>
                <div class = "">
                    <img class = "products-list-slideToShow__img" src = "${img}" />
                </div>
            </li>
            `;
        });
        const html = `
            <ul class = "slider-for">
                ${mainSlide}

            </ul>
            <ul class = "slider-nav">
                ${slideToShow}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();