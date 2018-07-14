import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlexboxtestComponent } from './flexboxtest/flexboxtest.component';
import { CssgridtestComponent } from './cssgridtest/cssgridtest.component';
import { FloattestComponent } from './floattest/floattest.component';
import { CardserviceService} from './cards/cardservice.service';

const routes: Routes = [
  { path: 'floattest', component: FloattestComponent },
  { path: 'flextest', component: FlexboxtestComponent },
  { path: 'gridtest', component: CssgridtestComponent },
  { path: '',  redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    FlexboxtestComponent,
    CssgridtestComponent,
    FloattestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CardserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
