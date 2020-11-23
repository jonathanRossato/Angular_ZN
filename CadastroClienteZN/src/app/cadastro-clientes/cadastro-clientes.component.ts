import { Component, OnInit } from '@angular/core';
import {CadastroClienteService} from '../cadastro-clientes/cadastro-cliente.service';
import { SelectItem } from 'primeng/api';
import {Cliente} from '../models/cliente'
import {NgForm, Validators} from '@angular/forms';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  public loading = false;
  clientes: Array<any> = new Array();
  sortOptions: SelectItem[];
  sortOrder: number;
  sortKey: string;
  sortField: string;
  displayDialog: boolean;

  displayPanelEdit: boolean;
  displayPanelAdd:boolean;
  clienteSelecionado: Cliente;
  novoCliente: Cliente;

  msgs: Message[] = [];

  constructor(private clientesService: CadastroClienteService,private confirmationService: ConfirmationService) {  

  }

  ngOnInit(): void {
    this.listarCadastrosClientes();
    

    this.sortOptions = [
      { label: 'Nome decresc.', value: '!nome' },
      { label: 'Nome crescente', value: 'nome' },
      { label: 'Cpf', value: '!cpf' },
    ];
  }


  listarCadastrosClientes() {
    this.loading = true;
     this.clientesService.listarCadastros().subscribe(clientes => {
      this.clientes = clientes; 
    }, err => {
      console.log("ocorreu um erro!", err);
    });
    this.loading = false;
  }


  editCliente(event, cliente: Cliente){
    this.loading = true;
    this.editarInformacoes(cliente)    
    event.preventDefault();
  }

  editarInformacoes(cliente: Cliente){
    this.clienteSelecionado = cliente;
    this.displayPanelEdit = true;
      //deve abrir informações para edição
  }  

  deletarCliente(regForm:NgForm){   

    const subscription = this.clientesService.deletarCadastro(regForm.value)
    .subscribe(validacao=> {
      if(validacao)
      this.listarCadastrosClientes();
    });
    this.displayPanelEdit=false;      
  }

  // confirmarExclusao(){    
  //     this.confirmationService.confirm({
  //         message: 'Do you want to delete this record?',
  //         header: 'Delete Confirmation',
  //         icon: 'pi pi-info-circle',
  //         accept: () => {
  //             this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
  //         },
  //         reject: () => {
  //             this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
  //         }
  //     });
  // }


  onSalvar(regForm:NgForm){
    this.clientesService.AtualizarCadastro(regForm.value);
    this.displayPanelEdit=false;  
  }

  onAdicionar(regFormAdd:NgForm){  
    this.clientesService.criarCadastro(regFormAdd.value).subscribe(validacaoCriacao=> {
      if(validacaoCriacao)
      this.listarCadastrosClientes();
      regFormAdd.reset();
    });;   
    this.displayPanelAdd=false;     
  }

  addCliente(event){    
    this.displayPanelAdd=true;
  }


  onSortChange(event){
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
