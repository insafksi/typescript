import { HasHtmlFormat } from "../interfaces/HasHtmlFormat.js";
import { Datas } from '../classes/Datas.js';

export  this.form = document.getElementById('form') as HTMLFormElement;
         this.type = document.getElementById('type') as HTMLSelectElement;
         this.firstName = document.getElementById('firstName') as HTMLInputElement;
         this.lastName = document.getElementById('lastName') as HTMLInputElement;
         this.address = document.getElementById('address') as HTMLInputElement;
         this.country = document.getElementById('country') as HTMLInputElement;
         this.town = document.getElementById('town') as HTMLInputElement;
         this.zip = document.getElementById('zip') as HTMLInputElement;
         this.product = document.getElementById('product') as HTMLInputElement;
         this.price = document.getElementById('price') as HTMLInputElement;
         this.quantity = document.getElementById('quantity') as HTMLInputElement;
         this.tva = document.getElementById('tva') as HTMLInputElement;

         //Listener
         this.submitFormListener(); //invoquer la méthode

}

class FormInput{
    form: HTMLFormElement;
    type: HTMLSelectElement;
    firstName: HTMLInputElement;
    lastName:  HTMLInputElement;
    address:  HTMLInputElement;
    country: HTMLInputElement;
    town: HTMLInputElement;
    zip: HTMLInputElement;
    product: HTMLInputElement;
    price: HTMLInputElement;
    quantity: HTMLInputElement;
    tva: HTMLInputElement;
    constructor(){

        
//Listners pour générer les submit de formulaire
private submitFormListener():void { //elle retourne rien
    this.form.addEventListener('submit', this.handleFormSubmit.bind(this))//elle invoque la méthode handleFormSubmit on doit passer par le bind

}
private handleFormSubmit(e: Event) { //méthode pour gérer la récupération des valeurs de formulaire
    e.preventDefault();

    const inputs = this.inputDatas(); //on va l'accéder via le this/cette méthode nous retourne le tuple {un array ou un void }
    
    if ( Array.isArray(inputs)) { // on est dans le cas d'un array

    const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva] = inputs;
          console.log(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);
        

          let docData: HasHtmlFormat; //afin d'eviter d'autre objet
          let date: Date = new Date();

          docData = new Datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date);
          console.log(docData.htmlFormat());



        }



}

private inputDatas(): [string, string,string, string, string, string, number, string, number,number, number] | void {
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

    if ( zip > 0 && price > 0 && quantity > 0 && tva > 0  ) {
        return [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva];
   
    } else {   //il faut mettre le else et le return sinon on aura le trait rouge
       
       
        alert("Les valeurs numériques doivent etre > 0 !");
        return; //pour ne avoir le trait rouge ici on doit déclarer dans le type un void
    }
    
} 



}