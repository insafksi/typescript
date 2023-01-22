import { Datas } from '../classes/Datas.js';
this.form = document.getElementById('form');
this.type = document.getElementById('type');
this.firstName = document.getElementById('firstName');
this.lastName = document.getElementById('lastName');
this.address = document.getElementById('address');
this.country = document.getElementById('country');
this.town = document.getElementById('town');
this.zip = document.getElementById('zip');
this.product = document.getElementById('product');
this.price = document.getElementById('price');
this.quantity = document.getElementById('quantity');
this.tva = document.getElementById('tva');
//Listener
this.submitFormListener(); //invoquer la méthode
class FormInput {
    constructor() {
        //Listners pour générer les submit de formulaire
    }
    //Listners pour générer les submit de formulaire
    submitFormListener() {
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this)); //elle invoque la méthode handleFormSubmit on doit passer par le bind
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const inputs = this.inputDatas(); //on va l'accéder via le this/cette méthode nous retourne le tuple {un array ou un void }
        if (Array.isArray(inputs)) { // on est dans le cas d'un array
            const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva] = inputs;
            console.log(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);
            let docData; //afin d'eviter d'autre objet
            let date = new Date();
            docData = new Datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date);
            console.log(docData.htmlFormat());
        }
    }
    inputDatas() {
        // le tuple est un array qui contient tous valeurs passées en formulaire
        const type = this.type.value;
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const address = this.address.value;
        const country = this.country.value;
        const town = this.town.value;
        const zip = this.zip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const tva = this.tva.valueAsNumber;
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva];
        }
        else { //il faut mettre le else et le return sinon on aura le trait rouge
            alert("Les valeurs numériques doivent etre > 0 !");
            return; //pour ne avoir le trait rouge ici on doit déclarer dans le type un void
        }
    }
}
