document.querySelectorAll(".btn-view").forEach(function (e) {
    e.addEventListener("click", function (e) {
        const homeItem = e.target.closest(".home-item");

        const titulo = homeItem.querySelector("h2").innerText;

        document.querySelector("#mainmodal .modal-title").innerText = titulo;

        let image = homeItem.querySelector(".item-image").cloneNode();
        let text = document.createElement("p");
        text.innerText = homeItem.querySelector("p").innerText;

        image.width = "200";

        document.querySelector("#mainmodal .modal-body").innerHTML = "";
        document.querySelector("#mainmodal .modal-body").innerHTML = "";
        
        document.querySelector("#mainmodal .modal-body").appendChild(image);
        document.querySelector("#mainmodal .modal-body").appendChild(text);

        $("#mainmodal").modal();
    });
});

document.querySelectorAll(".home-item").forEach(function (e) {
    let aRemove = document.createElement("a");
    aRemove.classList.add("btn-hide", "pull-right");
    aRemove.innerHTML = '<i class="fa fa-times-circle"></i>';
    aRemove.addEventListener("click", toggleInner);


    let aRestore = document.createElement("a");
    aRestore.classList.add("btn-hide", "pull-right", "invisible");
    aRestore.innerHTML = '<i class="fa fa-undo"></i>';
    aRestore.addEventListener("click", toggleInner);


    e.insertBefore(aRestore, e.firstChild);
    e.insertBefore(aRemove, e.firstChild);
}
)

function toggleInner(e) {
    Array.from(e.target.closest('.home-item').children).forEach(
        function (e) {
            if (e.classList.contains("invisible")) {
                e.classList.add('visible');
                e.classList.remove('invisible');
            } else {
                e.classList.add('invisible');
                e.classList.remove('visible');
            }
        }
    );
}