import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../models/carmodel';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {


    selectValue = "All";
    carmodel = new CarModel();
    cars: CarModel[];

    constructor() { }

    ngOnInit() {
        this.cars = this.carmodel.GetCarDeatails();
    }

    GetAllCarCopunt(): number {
        return this.cars.length;
    }

    GetMarutiCarCopunt(): number {
        return this.cars.filter(a => a.companyname == "Maruti").length;
    }

    GetMahindraCarCopunt(): number {
        return this.cars.filter(a => a.companyname == "Mahindara").length;
    }

    GetSkodaCarCopunt(): number {
        return this.cars.filter(a => a.companyname == "Skoda").length;
    }

    GetRenaultCarCopunt(): number {
        return this.cars.filter(a => a.companyname == "Renault").length;
    }

    GetValue(selectedValue) {
        this.selectValue = selectedValue;
    }

}
