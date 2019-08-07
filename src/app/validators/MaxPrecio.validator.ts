import { FormControl } from '@angular/forms';
export class PrecioValidator{
    static validarPrecio(c:FormControl){
        //c-> instancia de formControl
        return c.value>1000000?{validarPrecio:{valid:false}}:null;
    }
}
