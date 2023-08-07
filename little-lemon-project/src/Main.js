export default function Main() {
    return (
        <main>
            <div class="main-top">
            <h2>This Week's Specials!</h2>
            <button role="menu">Online Menu</button>
            </div>
            <div class="specials">
                <article class="special">
                    <img src="greeksalad" alt="greek salad"></img>
                    <h5>Greek Salad</h5>
                    <p class="price">$12.99</p>
                    <p class="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                </article>
                <article class="special">
                    <img src="bruschetta" alt="bruschetaa"></img>
                    <h5>Bruschetta</h5>
                    <p class="price">$5.99</p>
                    <p class="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                </article>
                <article class="special">
                    <img src="lemoncake" alt="lemon cake"></img>
                    <h5>Greek Salad</h5>
                    <p class="price">$5.00</p>
                    <p class="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </article>
            </div>
        </main>
    )
}