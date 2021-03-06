import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule, Router} from '@angular/router';
import { MatToolbarModule, MatCardModule,  MatButtonModule, MatSidenavModule, MatTooltipModule,
  MatIconModule, MatListModule, MatInputModule, MatSelectModule,
  MatFormFieldModule, MatGridListModule, MatTabsModule, MatMenuModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';


const ROUTES: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'Projets', component: ProjetsComponent },
  { path: 'Contact', component: ContactComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    ProjetsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
