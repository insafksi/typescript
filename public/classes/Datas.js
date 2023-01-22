export class Datas {
    constructor(documentType, // nom d'une propriété 
    firstName, lastName, address, country, town, zip, product, price, quantity, tva, date) {
        this.documentType = documentType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.country = country;
        this.town = town;
        this.zip = zip;
        this.product = product;
        this.price = price;
        this.quantity = quantity;
        this.tva = tva;
        this.date = date;
    }
    htmlFormat() {
        return ` <div class="row p-5">
        <div class="col-md-6">
           <h2 class="text-left">LOGO</h2>

        </div>
        <div class="col-md-6 text-right">
        <p class="font-weight-bold mb-1"> xxxxxxxxxxxxx<span class="font-weight-normal">xxxxxxxxx</span></p>
        <p class="font-weight-bold mb-1"> Date <span class="font-weight-normal">xxxxxxxxxxx</span></p>
        </div>
        </div>
        <div class="row pb-5 p-5">
        <div class="col-sm-6 text-left">
        <p class="font-weight-bold"> Entreprise de Toto</p>
        <p class=" mb-1"> 22 boulevard Moe Szyslak</p>
        <p>75008 -Paris</p>
        <p class="mb-1">Tél: 00.00.00.00.00</p>
        </div>
        <div class="col-sm-6 text-right">
        <p class="font-weight-bold">Informations du client</p>
        <p class=" mb-1"> Mr/Mme xxxxxxxxx</p>
        <p class=" mb-1"> xxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxxxx</p>
        <p>xxxxxxxxxxxxxxxxx</p>
        </div>
        </div>
        <div class="row p-5">
        <div class="col-md-12">
        <table class="table">
        <thead>
        <tr>
        <th class="border-0" text-uppercase small font-weight-bold">Produit/Service</th>
        <th class="border-0" text-uppercase small font-weight-bold">Prix unitaire HT</th>
        <th class="border-0" text-uppercase small font-weight-bold">Quantité/Service</th>
        <th class="border-0" text-uppercase small font-weight-bold">Total HT</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>xxxxxxxxxxxxxxxxxx</td>
        <td>xxxxxxxxxxxxxxxxxx € HT</td>
        <td>xxxxxxxxxxxxxxxxxx</td>
        <td>xxxxxxxxxxxxxxxxxx € HT</td>
        </tr>
        </tbody>
        </div>
        </div>
        <div class="d-flex flex-row-reverse bg-light p-4">
        <div class="py-3" px-5">
          <div class="mb-2">TOTAL TTC</div>
          <div class="h2 font-weight-light">xxxxxxxxxxxx €</div>
          </div>
          </div>

        `;
    }
}
