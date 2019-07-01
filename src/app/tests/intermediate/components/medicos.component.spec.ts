import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, of, throwError, empty } from 'rxjs';


describe('MedicosComponent Tests', () => {

  let component: MedicosComponent;
  const medicosService = new MedicosService(null);

  beforeEach(() => {
    component = new MedicosComponent(medicosService);
  });

  it('onInit load medicos', () => {
    spyOn(medicosService, 'getMedicos').and.callFake(() => from(['Doctor1', 'Doctor2']) );
    component.ngOnInit();
    expect(component.medicos.length).toBeGreaterThan(0);
  });

  it('should add medico', () => {
    const doctor = {nombre: 'Doctor3', id: 1};
    const spy = spyOn(medicosService, 'agregarMedico').and.callFake(() => of(doctor));
    component.agregarMedico();
    expect(component.medicos.length).toBe(1);
    expect(component.medicos.indexOf(doctor)).toBeGreaterThanOrEqual(0);
    expect(spy).toHaveBeenCalled();
  });

  it('should throw error ', () => {
    const message = 'A ocurred a error';
    const spy = spyOn(medicosService, 'agregarMedico').and.returnValue(throwError(message));
    component.agregarMedico();
    expect(spy).toHaveBeenCalled();
    expect(component.mensajeError).toBe(message);
  });

  it('should delete a doctor', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(medicosService, 'borrarMedico').and.returnValue(empty());
    component.borrarMedico('1');
    expect(spy).toHaveBeenCalledWith('1');
  });
});
