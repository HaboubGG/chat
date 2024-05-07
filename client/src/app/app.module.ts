import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernnameComponent } from './components/usernname/usernname.component';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './containers/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernnameComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
