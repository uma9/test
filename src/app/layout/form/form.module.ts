import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { MaterialModule } from '../material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, MaterialModule,
    MDBBootstrapModule,MultiSelectModule,MultiSelectAllModule,
    ButtonModule,
],
    declarations: [FormComponent, ]
})
export class FormModule {}
