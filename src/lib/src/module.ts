import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LibComponent } from './component/lib.component';
import { LibService } from './service/lib.service';

@NgModule({
  imports: [HttpClientModule],
  declarations: [LibComponent],
  providers: [LibService],
  exports: [LibComponent]
})
export class LibModule { }
