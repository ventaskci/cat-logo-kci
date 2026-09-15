// Lógica del catálogo: render, búsqueda, filtrado y carrito de compras.
(function () {
  const grid = document.getElementById("grid");
  const filtersEl = document.getElementById("filters");
  const searchEl = document.getElementById("search");
  const emptyEl = document.getElementById("empty");

  // Elementos del carrito
  const cartEl = document.getElementById("cart");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartToggle = document.getElementById("cartToggle");
  const cartClose = document.getElementById("cartClose");
  const cartItemsEl = document.getElementById("cartItems");
  const cartEmptyEl = document.getElementById("cartEmpty");
  const cartTotalEl = document.getElementById("cartTotal");
  const cartCountEl = document.getElementById("cartCount");
  const cartCheckout = document.getElementById("cartCheckout");

  let activeCategory = "Todos";
  let query = "";
  // cart = { [productId]: quantity }
  let cart = {};

  const categories = ["Todos", ...new Set(PRODUCTS.map((p) => p.category))];

  const formatPrice = (value) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    }).format(value);

  // Muestra la imagen del producto, o un marcador si aún no tiene foto.
  const productMedia = (p) =>
    p.image
      ? `<img class="card__img" src="${p.image}" alt="${p.name}" loading="lazy"
            onerror="this.parentNode.innerHTML='<span class=&quot;card__placeholder&quot;>🛍️</span>'" />`
      : `<span class="card__placeholder">🛍️</span>`;

  const getProduct = (id) => PRODUCTS.find((p) => p.id === Number(id));

  // ---------- Catálogo ----------
  function renderFilters() {
    filtersEl.innerHTML = categories
      .map(
        (cat) =>
          `<button class="chip${
            cat === activeCategory ? " is-active" : ""
          }" data-category="${cat}">${cat}</button>`
      )
      .join("");
  }

  function getVisibleProducts() {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        activeCategory === "Todos" || p.category === activeCategory;
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }

  function renderGrid() {
    const items = getVisibleProducts();
    emptyEl.hidden = items.length !== 0;

    grid.innerHTML = items
      .map(
        (p) => `
      <article class="card">
        <div class="card__media">
          ${productMedia(p)}
        </div>
        <div class="card__body">
          <span class="card__category">${p.category}</span>
          <h3 class="card__name">${p.name}</h3>
          <p class="card__desc">${p.description}</p>
          <div class="card__footer">
            <span class="card__price">${formatPrice(p.price)}</span>
            <button class="card__btn" data-id="${p.id}">Agregar</button>
          </div>
        </div>
      </article>`
      )
      .join("");
  }

  // ---------- Carrito ----------
  function totalItems() {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  }

  function totalPrice() {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const p = getProduct(id);
      return sum + (p ? p.price * qty : 0);
    }, 0);
  }

  function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    renderCart();
  }

  function changeQty(id, delta) {
    cart[id] = (cart[id] || 0) + delta;
    if (cart[id] <= 0) delete cart[id];
    renderCart();
  }

  function removeFromCart(id) {
    delete cart[id];
    renderCart();
  }

  function renderCart() {
    const entries = Object.entries(cart);
    const isEmpty = entries.length === 0;

    cartEmptyEl.hidden = !isEmpty;
    cartCheckout.disabled = isEmpty;

    cartItemsEl.innerHTML = entries
      .map(([id, qty]) => {
        const p = getProduct(id);
        if (!p) return "";
        return `
        <div class="cart-item">
          ${
            p.image
              ? `<img class="cart-item__img" src="${p.image}" alt="${p.name}" />`
              : `<span class="cart-item__img cart-item__img--placeholder">🛍️</span>`
          }
          <div class="cart-item__info">
            <p class="cart-item__name">${p.name}</p>
            <p class="cart-item__price">${formatPrice(p.price)}</p>
            <div class="cart-item__qty">
              <button class="qty-btn" data-action="dec" data-id="${p.id}" aria-label="Quitar uno">−</button>
              <span class="qty-value">${qty}</span>
              <button class="qty-btn" data-action="inc" data-id="${p.id}" aria-label="Agregar uno">+</button>
            </div>
          </div>
          <button class="cart-item__remove" data-action="remove" data-id="${p.id}" aria-label="Eliminar producto">🗑️</button>
        </div>`;
      })
      .join("");

    cartTotalEl.textContent = formatPrice(totalPrice());
    cartCountEl.textContent = totalItems();
  }

  function openCart() {
    cartEl.classList.add("is-open");
    cartOverlay.hidden = false;
    cartEl.setAttribute("aria-hidden", "false");
  }

  function closeCart() {
    cartEl.classList.remove("is-open");
    cartOverlay.hidden = true;
    cartEl.setAttribute("aria-hidden", "true");
  }

  // ---------- Eventos ----------
  filtersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeCategory = btn.dataset.category;
    renderFilters();
    renderGrid();
  });

  searchEl.addEventListener("input", (e) => {
    query = e.target.value.trim().toLowerCase();
    renderGrid();
  });

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".card__btn");
    if (!btn) return;
    addToCart(btn.dataset.id);
    btn.textContent = "✓ Agregado";
    setTimeout(() => (btn.textContent = "Agregar"), 1000);
  });

  cartItemsEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const { action, id } = btn.dataset;
    if (action === "inc") changeQty(id, 1);
    else if (action === "dec") changeQty(id, -1);
    else if (action === "remove") removeFromCart(id);
  });

  cartToggle.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCart();
  });

  // Número de WhatsApp de Ventas KCI (formato internacional sin +)
  const WHATSAPP_NUMBER = "56954396020";

  cartCheckout.addEventListener("click", () => {
    const entries = Object.entries(cart);
    if (entries.length === 0) return;

    // Arma el mensaje del pedido
    let message = "¡Hola Ventas KCI! 👋 Quiero hacer este pedido:\n\n";
    entries.forEach(([id, qty]) => {
      const p = getProduct(id);
      if (!p) return;
      message += `• ${qty} x ${p.name} — ${formatPrice(p.price * qty)}\n`;
    });
    message += `\n*Total: ${formatPrice(totalPrice())}*`;

    // Abre WhatsApp con el pedido prellenado
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");

    closeCart();
  });

  // ---------- Init ----------
  renderFilters();
  renderGrid();
  renderCart();
})();
