import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { YachtsComponent } from './components/yachts/yachts.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        YachtsComponent,
        ReservationsComponent,
        BlogsComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent},
            { path: 'yachts', component: YachtsComponent },
            { path: 'reservations', component: ReservationsComponent },
            { path: 'blogs', component: BlogsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
