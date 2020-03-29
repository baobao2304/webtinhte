import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestroutingComponent } from './testrouting/testrouting.component';
import { CoreModule } from './core/core.module';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './LowerCaseUrlSerializer';
import { ConfigService } from './config/config-service';


@NgModule({
  declarations: [
    AppComponent,
    TestroutingComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    ConfigService,
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
