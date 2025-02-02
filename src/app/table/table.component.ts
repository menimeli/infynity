import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, NgFor, LoaderComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  isLoading = true;
  tableData = [
    {
      "type": "lenders",
      "id": "1",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 3,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "2",
      "attributes": {
        "code": "CBA",
        "name": "Commonwealth Bank",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 1,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "3",
      "attributes": {
        "code": "NAB",
        "name": "National Bank",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 2,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "4",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "5",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "6",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "7",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "8",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "9",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "10",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "11",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "12",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "13",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "14",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "15",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "16",
      "attributes": {
        "code": "CBC",
        "name": "Commonwealth Com Bank",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "17",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "18",
      "attributes": {
        "code": "ANZ",
        "name": "ANZ",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "19",
      "attributes": {
        "code": "CFA",
        "name": "Capital Finance",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    },
    {
      "type": "lenders",
      "id": "20",
      "attributes": {
        "code": "CBA",
        "name": "Commonwealth Bank",
        "type": "residential",
        "upfont_commission": 0,
        "high_trail_commission": 0,
        "low_trail_commission": 0,
        "balance_multiplier": 0,
        "is_active": true,
        "is_hidden": false
      }
    }
  ];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      console.log('here')
    }, 2000);
  }
 

}
