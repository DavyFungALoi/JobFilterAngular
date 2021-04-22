import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './Screens/home-screen/home-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { JoblistingComponent } from './components/joblisting/joblisting.component';
import { FiltercomponentComponent } from './components/filtercomponent/filtercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    HeaderComponent,
    JoblistingComponent,
    FiltercomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
