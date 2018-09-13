import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // together for search Box
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypePageComponent } from './views/type-page/type-page.component';

import { HttpModule } from '@angular/http';
import { BreadcrumbComponent } from './views/breadcrumb/breadcrumb.component';

import { EqualValidator } from './equal-validator.directive';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        HttpModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        )
    ],
    declarations: [
        AppComponent,
        TypePageComponent,
        BreadcrumbComponent,
        EqualValidator
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
