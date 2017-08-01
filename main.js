console.log(customers);

let section = document.getElementById('header');
let title = document.createElement("h1");
let header = document.createTextNode("INTERNAL COMPANY DIRECTORY");


title.appendChild(header)
section.appendChild(title);



for(var i = 0; i<customers.results.length; i++) {
    let customer = customers.results[i]

    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = customer.picture.large
    img.className = "img"

    let labelName = document.createElement("label")
    labelName.innerHTML = `${customer.name.first} ${customer.name.last}`
    labelName.className = "labelName"

    let email = document.createElement("label")
    email.innerHTML = `${customer.email}`
    email.className = "email"

    let address = document.createElement("label")
    address.innerHTML = `${customer.location.street} ${customer.location.city} ${customer.location.state} ${customer.location.postcode}`
    address.className = "address"

    let phone = document.createElement("label")
    phone.innerHTML = `${customer.phone}`
    phone.className = "phone"

    let socialSec = document.createElement("label")
    socialSec.innerHTML = `${customer.id.value}`
    socialSec.className = "socialSec"

    div.appendChild(img)
    div.appendChild(labelName)
    div.appendChild(email)
    div.appendChild(address)
    div.appendChild(phone)
    div.appendChild(socialSec)
    document.body.appendChild(div)

    console.log("loop")
}
