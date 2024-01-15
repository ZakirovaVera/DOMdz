const initialJSON = `[
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
]`;

const localStorageKey = "classes";
const data = localStorage.getItem(localStorageKey);

if (!data) {
    localStorage.setItem(localStorageKey, initialJSON);
}

const classes = JSON.parse(localStorage.getItem(localStorageKey));

const RowOfClassHtml = classes
    .map((elClass) => getRowOfClass(elClass))
    .join("");

const tableDataElement = document.querySelector('.table-data');

tableDataElement.insertAdjacentHTML("beforeend", RowOfClassHtml);

tableDataElement.addEventListener('click', function (event) {

    const elementId = event.target.getAttribute("data-id");
    const classesEl = classes.find(x => x.id == elementId);

    if (event.target.classList.contains("btn-add") && classesEl.currentParticipants !== classesEl.maxParticipants) {

        classesEl.currentParticipants = classesEl.currentParticipants + 1;

        if (classesEl.currentParticipants <= classesEl.maxParticipants && classesEl) {

            const el = event.target.closest('tr');
            el.innerHTML = getRowOfClass(classesEl);

            localStorage.setItem(localStorageKey, JSON.stringify(classes));
            // location.reload();
        }

        return;
    }

    if (event.target.classList.contains("btn-remove") &&classesEl.currentParticipants !== 0) {

        classesEl.currentParticipants = classesEl.currentParticipants - 1;
        if (classesEl.currentParticipants >= 0 && classesEl) {
            
            const el = event.target.closest('tr');
            el.innerHTML = getRowOfClass(classesEl);

            localStorage.setItem(localStorageKey, JSON.stringify(classes));
            // location.reload();
        }

        return;
    }
});


function getRowOfClass(elClass) {
    return `<tbody>
    <tr>
        <td class="table-style name" >${elClass.name}</td>
        <td class="table-style time">${elClass.time}</td>
        <td class="table-style maxParticipants">${elClass.maxParticipants}</td>
        <td class="table-style currentParticipants">${elClass.currentParticipants}</td>
        <td class="table-style"><button class= "btn-add" data-id=${elClass.id}>записаться</button></td>
        <td class="table-style"><button class="btn-remove" data-id=${elClass.id}>отменить запись</button></td>
    </tr>
</tbody>`;
}