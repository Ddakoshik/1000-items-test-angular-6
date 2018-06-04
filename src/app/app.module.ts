import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './dashboard/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule,   MatCardModule, MatMenuModule,
    MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule,
      MatListModule, MatSliderModule, MatFormFieldModule, MatInputModule, MatCheckbox, MatCheckboxModule} from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { GetCardService } from './get-card.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [GetCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
