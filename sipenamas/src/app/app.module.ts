import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PenelitianComponent } from './penelitian/penelitian.component';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { PengabdianComponent } from './pengabdian/pengabdian.component';

@NgModule({
  declarations: [
    AppComponent,
    PenelitianComponent,
    FrameworkComponent,
    AboutComponent,
    PengabdianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
