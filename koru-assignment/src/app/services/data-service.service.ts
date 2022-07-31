import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { Observable } from "rxjs/internal/Observable";
// import { Observable , of } from "rxjs";
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs';

// import { Employee } from "../models/employee.model";
// import 'rxjs/internal/operators/of';
// import { of } from 'rxjs';

@Injectable()
export class DataService{
    // private listData : Data[]= [
    //     {
    //         "id": 1,
    //         "name": "Andrews Phillip",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Sam X Williams"
    //       },
    //       {
    //         "id": 2,
    //         "name": "Dillard Mauleen",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Andy Anthony"
    //       },
    //       {
    //         "id": 3,
    //         "name": "Miller Jessica",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Mark Twian"
    //       },
    //       {
    //         "id": 4,
    //         "name": "Marcus Brownless",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Phillip Melo"
    //       },
    //       {
    //         "id": 5,
    //         "name": "Jake Peralta",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Andy Anthony"
    //       },
    //       {
    //         "id": 6,
    //         "name": "Adam Lewy",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Andy Anthony"
    //       },
    //       {
    //         "id": 7,
    //         "name": "Anthony Hopkins",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Terry Christie"
    //       },
    //       {
    //         "id": 8,
    //         "name": "Sebastian Vettel",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "George Lecrec"
    //       },
    //       {
    //         "id": 9,
    //         "name": "John Ralfion",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Andy Anthony"
    //       },
    //       {
    //         "id": 10,
    //         "name": "Leslie Knope",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "April Ludgate"
    //       },
    //       {
    //         "id": 11,
    //         "name": "Rom Swanson",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Andrew Bernard"
    //       },
    //       {
    //         "id": 12,
    //         "name": "Jimothy Halpert",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Jack Ryan"
    //       },
    //       {
    //         "id": 13,
    //         "name": "Michael Scott",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Prison Mike"
    //       },
    //       {
    //         "id": 14,
    //         "name": "Walter White",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Albert S Crews"
    //       },
    //       {
    //         "id": 15,
    //         "name": "Sheldon Cooper",
    //         "description": "Contrary to popular belief, Lorem",
    //         "webReference": "Craig McMullam"
    //       }
    //   ];
  
// getEmployees() : Observable<Employee[]>{
//     return Observable.of(this.listEmployees);
// }

private baseURL = "http://localhost:3000/heros";
// private baseURL = http://jsonplaceholder.typecode.com/posts';

constructor(private http : HttpClient){

}
getData() {
  return this.http.get(this.baseURL);
}



}