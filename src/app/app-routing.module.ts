import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypePageComponent } from './views/type-page/type-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/type-page/type-page/1', pathMatch: 'full' },
    { path: 'type-page/type-page/:cat_id', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z/:x', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z/:x/:y', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z/:x/:y/:z', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z/:x/:y/:z/:x', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z/:x/:y/:z/:x/:y', component: TypePageComponent },
    { path: 'type-page/type-page/:cat_id/:x/:y/:z/:x/:x/:x/:x/:y/:z/:x/:y/:z/:x/:y/:z', component: TypePageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
