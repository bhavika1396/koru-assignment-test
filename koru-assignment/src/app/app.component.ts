import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import {SelectionModel} from '@angular/cdk/collections';
import {  NgForm } from '@angular/forms';

export interface PeriodicElement {
  id: number;
  name: string;
  description: string;
  webReference: string;
}
const ELEMENT_DATA: PeriodicElement[] = [

  {
    "id": 1,
    "name": "Andrews Phillip",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Sam X Williams"
  },
  {
    "id": 2,
    "name": "Dillard Mauleen",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Andy Anthony"
  },
  {
    "id": 3,
    "name": "Miller Jessica",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Mark Twian"
  },
  {
    "id": 4,
    "name": "Marcus Brownless",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Phillip Melo"
  },
  {
    "id": 5,
    "name": "Jake Peralta",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Andy Anthony"
  },
  {
    "id": 6,
    "name": "Adam Lewy",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Andy Anthony"
  },
  {
    "id": 7,
    "name": "Anthony Hopkins",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Terry Christie"
  },
  {
    "id": 8,
    "name": "Sebastian Vettel",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "George Lecrec"
  },
  {
    "id": 9,
    "name": "John Ralfion",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Andy Anthony"
  },
  {
    "id": 10,
    "name": "Leslie Knope",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "April Ludgate"
  },
  {
    "id": 11,
    "name": "Rom Swanson",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Andrew Bernard"
  },
  {
    "id": 12,
    "name": "Jimothy Halpert",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Jack Ryan"
  },
  {
    "id": 13,
    "name": "Michael Scott",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Prison Mike"
  },
  {
    "id": 14,
    "name": "Walter White",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Albert S Crews"
  },
  {
    "id": 15,
    "name": "Sheldon Cooper",
    "description": "Contrary to popular belief, Lorem",
    "webReference": "Craig McMullam"
  }
   
    ]
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // encapsulation: ViewEncapsulation.None
  
})
export class AppComponent {
  model: any = {};
  name! : string;

  @ViewChild('adduserform')
  adduserform!: NgForm;
  displayedColumns: string[] = [ 'select','name', 'description', 'webReference'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);  
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  constructor(private _liveAnnouncer: LiveAnnouncer ,private http : HttpClient) {
    
  }

    //method for filtering
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    //method select all checkbox
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
   
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }
  
      this.selection.select(...this.dataSource.data);
    }
  
    
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }
  
  //Submits the form data to the table 
    onadduser(userData: PeriodicElement) {
      console.log(userData);
      this.dataSource.data.push(userData);
      console.log('data', userData)
    }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  //method for sorting
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
 
ngOnInIt(){
  
}
//Remove the selected rows
removeSelectedRows() {
  this.selection.selected.forEach(item => {
  let index: number = this.dataSource.data.findIndex(d => d === item);
  console.log(this.dataSource.data.findIndex(d => d === item));
  this.dataSource.data.splice(index,1);
  this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource.data);
});
this.selection = new SelectionModel<PeriodicElement>(true, []); 
}
}
