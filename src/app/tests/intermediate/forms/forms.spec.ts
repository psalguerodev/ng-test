import { FormRegister } from './forms';
import { FormBuilder } from '@angular/forms';
describe('Forms tests', () => {
  let componentForm: FormRegister;

  beforeEach(() => {
    componentForm = new FormRegister(new FormBuilder());
  });

  it('should return 2 fields of form - email & password', () => {
    expect(componentForm.form.contains('email')).toBeTruthy();
    expect(componentForm.form.contains('password')).toBeTruthy();
  });

  it('should email be required', () => {
    const control = componentForm.form.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should email be valid', () => {
    const control = componentForm.form.get('email');
    control.setValue('psalguerodev@gmail.com');
    expect(control.valid).toBeTruthy();
  });
});
