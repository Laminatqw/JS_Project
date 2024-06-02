
{
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(users => users.json())
        .then(users => {
            let div = document.createElement('div')
            div.classList.add('containerIndex')

            for (const {id,name} of users) {
                let divUser = document.createElement('div')
                divUser.classList.add('divUserIndex')
                divUser.innerHTML = `ID : ${id}<br>Name : ${name}<br><a href="user-details.html?id=${id}">Click On</a>`
                div.appendChild(divUser)
            }


            document.body.appendChild(div)
        });
}
