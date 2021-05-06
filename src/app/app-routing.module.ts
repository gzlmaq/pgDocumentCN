import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeaturesComponent } from './features/features.component';
import { ConnectingComponent } from './connecting/connecting.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, data: { title: '欢迎'}},
  { path: 'announcements', component: AnnouncementsComponent, data: { title: '公告' }},
  { path: 'features', component: FeaturesComponent, data: { title: '功能 List' }},
  { path: 'connecting', component: ConnectingComponent, data: { title: '连接' }},
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
