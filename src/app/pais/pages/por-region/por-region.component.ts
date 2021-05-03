import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  paises: Country[] = [];
  termino: string = '';
  hayError: boolean = false;

  regionActiva: string = '';
  constructor(private paisService: PaisService) {}

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn rounded-0 ml-auto tm-btn-primary btn-activo'
      : 'btn rounded-0 ml-auto tm-btn-primary';
  }

  activarRegion(region: string) {

	if(region == this.regionActiva){return;}
	
    this.regionActiva = region;

	this.paises = [];

    this.paisService.buscarRegion(region).subscribe(paises => 
      this.paises = paises
    );
  }
}
