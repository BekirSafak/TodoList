window.addEventListener('load', () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#newGoals');
    const listElement = document.querySelector('#goals');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log("Submit form");

        // ? İnputtan gelen value var mı yok mu kontrol ediyoruz.
        const goal = input.value;
        if (!goal) {
            alert("Lütfen yeni bir hedef yazın");
            return;
        }
        // ? İnputtan gelen value var mı yok mu kontrol ediyoruz.

        // ? DOM elementleri oluşturuldu.
        const goalElement = document.createElement('div');
        goalElement.classList.add('goal');
        const goalContentElement = document.createElement('div');
        goalContentElement.classList.add('content');
        goalElement.appendChild(goalContentElement);

        const goalInputElement = document.createElement('input');
        goalInputElement.classList.add("text");
        goalInputElement.type = "text";
        goalInputElement.value = goal;
        goalInputElement.setAttribute("readonly", "readonly");
        goalContentElement.appendChild(goalInputElement);

        const goalActionsElement = document.createElement('div');
        goalActionsElement.classList.add('actions');

        const goalEditButton = document.createElement('button');
        goalEditButton.classList.add("edit");
        goalEditButton.innerHTML = "DÜZENLE";

        const goalDeleteButton = document.createElement('button');
        goalDeleteButton.classList.add("delete");
        goalDeleteButton.innerHTML = "SİL";

        goalActionsElement.appendChild(goalEditButton);
        goalActionsElement.appendChild(goalDeleteButton);
        goalElement.appendChild(goalActionsElement);
        listElement.appendChild(goalElement);
        // ? DOM elementleri oluşturuldu.

        input.value = "";

        // ? Edit Fonksiyonu.
        goalEditButton.addEventListener('click', () => {
            if (goalEditButton.innerText.toLocaleLowerCase() == "düzenle") {
                goalInputElement.removeAttribute('readonly');
                goalInputElement.focus();
                goalEditButton.innerHTML = "KAYDET";

            } else {
                goalInputElement.setAttribute('readonly', 'readonly');
                goalEditButton.innerHTML = "DÜZENLE "
            }
        });
        // ? Edit Fonksiyonu.

        // ? Delete Fonksiyonu.
        goalDeleteButton.addEventListener('click', () => {
            if (goalDeleteButton.innerText.toLocaleLowerCase() == "sil") {
                listElement.removeChild(goalElement);
            };
        });
        // ? Delete Fonksiyonu.
    });
});