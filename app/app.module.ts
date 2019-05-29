import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { WorldcupListComponent } from './worldcup-list/worldcup-list.component';
import { HttpModule } from '@angular/http';
import { WorldCupService } from './worldcup.service';
import { WorldcupAddComponent } from './worldcup-add/worldcup-add.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldcupListComponent,
    WorldcupAddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    
  ],
  providers: [WorldCupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
