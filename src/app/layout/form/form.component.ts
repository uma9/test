
import { routerTransition } from '../../router.animations';
import { Component, OnInit, ViewChildren } from '@angular/core';
import { CollapseComponent } from 'angular-bootstrap-md';

import { element, by } from 'protractor';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { of } from 'rxjs';

import { HttpClient, HttpEventType } from '@angular/common/http';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    public isCollapsed = true;

  public isCollapsed1 =true;

  
  public countries: { [key: string]: Object; }[] = [
    { Name: 'Australia', Code: 'AU' },
        { Name: 'Bermuda', Code: 'BM' },
        { Name: 'Canada', Code: 'CA' },
        { Name: 'Cameroon', Code: 'CM' },
        { Name: 'Denmark', Code: 'DK' },
        { Name: 'France', Code: 'FR' },
        { Name: 'Finland', Code: 'FI' },
        { Name: 'Germany', Code: 'DE' }, 
    ];
    // maps the local data column to fields property
    public localFields: Object = { text: 'Name', value: 'Code' };
    // set the placeholder to MultiSelect Dropdown input element
    public localWaterMark: string = 'Select Category';
  


    public tag: { [key: string]: Object; }[] = [
      { Name: 'Australia', Code: 'AU' },
          { Name: 'Bermuda', Code: 'BM' },
          { Name: 'Canada', Code: 'CA' },
          { Name: 'Cameroon', Code: 'CM' },
          { Name: 'Denmark', Code: 'DK' },
          { Name: 'France', Code: 'FR' },
          { Name: 'Finland', Code: 'FI' },
          { Name: 'Germany', Code: 'DE' }, 
      ];
      // maps the local data column to fields property
      public localtags: Object = { text: 'Name', value: 'Code' };
      // set the placeholder to MultiSelect Dropdown input element
      public localtag: string = 'Select Category';





      public location: { [key: string]: Object; }[] = [
        { Name: 'Australia', Code: 'AU' },
            { Name: 'Bermuda', Code: 'BM' },
            { Name: 'Canada', Code: 'CA' },
            { Name: 'Cameroon', Code: 'CM' },
            { Name: 'Denmark', Code: 'DK' },
            { Name: 'France', Code: 'FR' },
            { Name: 'Finland', Code: 'FI' },
            { Name: 'Germany', Code: 'DE' }, 
        ];
        // maps the local data column to fields property
        public locallocations: Object = { text: 'Name', value: 'Code' };
        // set the placeholder to MultiSelect Dropdown input element
        public locallocation: string = 'Select Category';


      
      
        

  ngOnInit() {
     }
}
