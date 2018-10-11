import { removeDebugNodeFromIndex } from "@angular/core/src/debug/debug_node";

export class CarModel {
    carid: number;
    carname: string;
    carprice: number;
    color: string;
    companyname: string;

    GetCarDeatails(): CarModel[] {
        var cars: CarModel[] = [
            { carid: 101, carname: "Renault Kwid", carprice: 465000, color: "red", companyname: "Renault" },
            { carid: 102, carname: "Mahindra KUV100 NXT", carprice: 765000, color: "red black", companyname: "Mahindara" },
            { carid: 103, carname: "maruti Suzuki Desire", carprice: 965000, color: "Purple", companyname: "Maruti" },
            { carid: 104, carname: "maruti Suzuki Swift", carprice: 565000, color: "yellow", companyname: "Maruti" },
            { carid: 105, carname: "Maruti Suzuki Vittara Brezza", carprice: 1065000, color: "white", companyname: "Maruti" },
            { carid: 106, carname: "Skoda Rapid", carprice: 1465000, color: "blue", companyname: "Skoda" }
        ] as CarModel[];

        return cars;

    }


}