const btPlus = document.querySelector(".js-plus");
const transportContainer = document.querySelector(".conteneurtransport");

btPlus.addEventListener("click", toggleTransport);

function toggleTransport()
{
    console.log("allo");
    transportContainer.classList.toggle("conteneurtransport-disabled");
}