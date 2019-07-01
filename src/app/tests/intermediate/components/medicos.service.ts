import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map} from 'rxjs/operators';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicos() {
    return this.http.get('...')
              .pipe(map(value => value['medicos']));
  }

  agregarMedico( medico: any ) {
    return this.http.post('...', medico )
                .pipe(map(value => value['medicos']));
  }

  borrarMedico( id: string ) {
    return this.http.delete('...' )
                .pipe(map(value => value['medicos']));
  }


}
