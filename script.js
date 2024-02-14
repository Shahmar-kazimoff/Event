// 1.ToDolist yazacaqsiz.input olacaq və add buttonu olacaq.
// Bunlar form elementi içində olacaq.
// İnputa bir yazı yazıb add vəya enterə click etdiyinizdə bu form altinda listə yazilacaq.
// Yəni inputun dəyərin formun altinda ul icindəki li elementi içinə yazacaq.
// İnputa yazlb add etdiktən sonra İnput sifirlanacaq.
// Və hər əlavə edilən li yanında delete buttonu vəya delete icon olacaq.
// Ona Click olunanda o Li elementin siləcək.




const form = document.getElementById("myForm");
const input = document.getElementById("name");
const button = document.getElementById("submit");
const ol = document.createElement("ol")
const removeAll = document.createElement("button")
form.append(removeAll)
removeAll.textContent = "REMOVE ALL"
form.append(ol)

button.addEventListener("click", (e) => {
    e.preventDefault();
    const Li = document.createElement("li")
    const Remove = document.createElement("button")
    ol.append(Li)
    Remove.textContent = "REMOVE"

    Remove.addEventListener("click", () => {
        ol.removeChild(Li);
    })
    if (input.value.trim() === "") {
        alert("Zehmet olmasa bosh saxlamayin.!");
        return;
    }

    Li.textContent = input.value
    Li.appendChild(Remove);
    input.value = " "
});


removeAll.addEventListener("click", (e) => {
    e.preventDefault();

    const numberOfLiElements = ol.children.length;

    for (let i = 0; i < numberOfLiElements; i++) {
        ol.removeChild(ol.children[0]);
    }
});

