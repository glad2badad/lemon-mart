import { NgModule } from '@angular/core'
// import { CommonModule } from '@angular/common'
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  imports: [
    // CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, FlexLayoutModule],
  declarations: [],
})
export class MaterialModule {}
