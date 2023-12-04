import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArchivosService } from '../../../../services/archivos/archivos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router, private archivosService: ArchivosService) {
    this.idUsuario = Number(localStorage.getItem('id'))
  }

  hasFile: boolean = false;
  selectedFile: File | null = null;;
  idUsuario: number = 0;

  fileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.hasFile = true;
    } else {
      this.hasFile = false;
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      const fileData = new FormData();
      let fileTitle = new String;

      fileTitle = this.idUsuario.toString() + "_" + this.selectedFile.name + "_" + new Date().getTime() + "." + this.selectedFile.name.split(".")[1];

      fileData.append('file', this.selectedFile);
      fileData.append('fileTitle', fileTitle.toString());

      this.archivosService.uploadFile(fileData).subscribe(
        (response) => {
          console.log('Archivo subido sin problemas');
        },
        (error) => {
          console.error('Error al subir archivo:', error);
        }
      );
    }
  }

}
