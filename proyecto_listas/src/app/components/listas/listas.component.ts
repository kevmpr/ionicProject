import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent  implements OnInit {

  constructor(
    public listaService: ListaService,
    private roter: Router
  ) { }

  ngOnInit() {}

  editarLista(listaItem: Lista) {
    this.EditarLista(listaItem);
  }

  async EditarLista(lista: Lista) {
    let alerta = await this.listaService.alertController.create({
      header: 'Editar lista',
      inputs: [
        {
          type: 'text',
          name: 'titulo',
          placeholder: 'Ingresar nuevo nombre de la lista',
          value: lista.titulo,
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Editar',
          handler: (data: any) => {
            let esValido: boolean = this.listaService.validarInput(data);
            if (esValido) {
              (lista.titulo = data.titulo),
                this.editarLista(lista);
              this.listaService.presentToast('Lista editada correctamente!');
            }
          },
        },
      ],
    });
    await alerta.present();
  }

  eliminarLista(listaItem: Lista) {
    this.listaService.eliminarLista(listaItem);
    console.log('Eliminar lista:', listaItem);
  }

  listaSeleccionada(listaItem: Lista){
    const URL = '/agregar/' + listaItem.id; 
    this.roter.navigateByUrl(URL);
  }
}
