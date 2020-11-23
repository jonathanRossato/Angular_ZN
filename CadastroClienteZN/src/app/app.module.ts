import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule} from '@angular/common/http';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';   //accordion and accordion tab
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {PaginatorModule} from 'primeng/paginator';
import {DataViewModule} from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import {ChartModule} from 'primeng/chart';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { NgxLoadingModule } from 'ngx-loading';
import { HomeComponent } from './home/homepage/home.component';
import {FileUploadModule} from 'primeng/fileupload';
import {PickListModule} from 'primeng/picklist';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import {CadastroClienteService} from './cadastro-clientes/cadastro-cliente.service';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms' 
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent, 
    CadastroClientesComponent,
    HomeComponent
  ],
  imports: [CommonModule,
    BrowserModule,
    HttpClientModule,
    AccordionModule ,    
    PaginatorModule,
    DataViewModule,    
    BrowserAnimationsModule,
    DialogModule,ButtonModule,
    ChartModule,
    VirtualScrollerModule,FileUploadModule,
    PickListModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    ConfirmDialogModule,    
    NgxLoadingModule.forRoot({})    
  ],
  providers: [HttpClientModule,CadastroClienteService,ConfirmationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
 
})
export class AppModule { }
